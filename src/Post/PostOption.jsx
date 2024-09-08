import 'semantic-ui-css/semantic.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FormField, Form, Radio } from 'semantic-ui-react'
import { useState } from 'react';

var postType = 'question'

function PostOption() {
    var [value, setValue] = useState('question')
    const handleChange = () => {
        if (value == 'question') {
            value = 'article'
        }
        else if (value == 'article') {
            value = 'question'
        }
        postType = value
        setValue(postType)
    }

    return (
        <div class="PostOption">
            <Container fluid>
                <Card style={{ backgroundColor: 'lightgray', marginTop: "1rem", marginBottom: "1rem" }}>
                    <Card.Body>
                        <Card.Text>
                            New Post
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Form style={{ display: 'flex'}}>
                <p style={{margin: '1rem'}}>Select post type:</p>
                {/* <FormField>
                    Selected value: <b>{value}</b>
                </FormField> */}
                <FormField style={{margin: '1rem'}}>
                    <Radio
                        label='Question'
                        name='radioGroup'
                        value='question'
                        checked={value == 'question' ? true : false}
                        onClick={handleChange}
                    />
                </FormField>
                <FormField style={{margin: '1rem'}}>
                    <Radio
                        label='Article'
                        name='radioGroup'
                        value='article'
                        checked={value == 'article' ? true : false}
                        onClick={handleChange}
                    />
                </FormField>
            </Form>
        </div>
    );
}

export default PostOption;