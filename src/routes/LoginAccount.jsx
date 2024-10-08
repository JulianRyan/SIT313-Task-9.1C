import 'semantic-ui-css/semantic.min.css'
import { FormField, Button, Form, Input } from 'semantic-ui-react'
import React, { useState } from 'react'
import { signInWithAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase';
import './LoginAccount.css';
import { useNavigate } from "react-router-dom";


function LoginAccount(props) {
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const { email, password } = contact

    const navigate = useNavigate();

    //Julian Ryan
    //test6@gmail.com
    //ABCEasyAs123

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
        try {
            const response = await signInWithAuthUserWithEmailAndPassword(email, password)
            if (response == null)
            {
                alert('Please enter your email and password')
            }
            else
            {
                navigate("/home");
            }
        }
        catch (error) {
            console.log("Error in signing in user ", error.message)
            alert('Username or password is incorrect')
        }
    }

    return (
        <div id="LoginAccountPage">
            <Form id="LoginAccountForm">
                <Button basic color='black' id='sign-up' href="/signup">Sign Up</Button>
                <FormField id="EmailField">
                    <label>Email*</label>
                    <Input
                        placeholder='Email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={contact.email}
                    />
                </FormField>
                <FormField id="PasswordNameField">
                    <label>Password*</label>
                    <Input
                        placeholder='Password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={contact.password}
                    />
                </FormField>
                <Button onClick={handleSubmit} primary type='submit' id='submit'>Submit</Button>
            </Form>
        </div>
    );
}
export default LoginAccount;