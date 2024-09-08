import { FormField, Button, Form, Input } from 'semantic-ui-react'
import './CreateAccount.css';
import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";

const CreateAccount = (props) => {
    const [contact, setContact] = useState({
        displayName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    //Julian Ryan
    //test6@gmail.com
    //ABCEasyAs123

    const { displayName, email, password, confirmPassword } = contact

    const navigate = useNavigate();

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
        if (password !== confirmPassword) {
            alert('Please enter your credentials in correctly')
            return;
        }
        else if (displayName == '')
        {
            alert('Name is empty!')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, { displayName });
            navigate("/home");
        }
        catch (error) {
            console.log("Error in creating user ", error.message)
            alert('Error in creating account. Account may already exist')
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