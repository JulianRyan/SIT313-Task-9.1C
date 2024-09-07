import { FormField, Button, Form, Input } from 'semantic-ui-react'
import './CreateAccount.css';
import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase';

const CreateAccount = (props) => {
    const [contact, setContact] = useState({
        displayName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = contact

    console.log(contact)

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword)
        {
            alert('Passwords do not match!')
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {displayName});
        }
        catch (error) {
            console.log("Error in creating user ", error.message)
        }
    }

    return <div id="CreateAccountPage">
        <h3 id="CreateAccountTitle">Create a Dev@Deakin Account</h3>
        <Form id="CreateAccountForm">
            <FormField id="FirstNameField">
                <label>Name*</label>
                <Input
                    placeholder='Name'
                    name='displayName'
                    type='text'
                    onChange={handleChange}
                    value={contact.displayName}
                />
            </FormField>
            <FormField id="FirstNameField">
                <label>Email*</label>
                <Input
                    placeholder='Email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={contact.email}
                />
            </FormField>
            <FormField id="LastNameField">
                <label>Password*</label>
                <Input
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={contact.password}
                />
            </FormField>
            <FormField id="LastNameField">
                <label>Confirm Password*</label>
                <Input
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    type='password'
                    onChange={handleChange}
                    value={contact.confirmPassword}
                />
            </FormField>
            <Button primary type='submit' onClick={handleSubmit} id='submit'>Submit</Button>
        </Form>
    </div>
}
export default CreateAccount;