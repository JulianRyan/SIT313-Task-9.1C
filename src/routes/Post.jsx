import './Post.css';
import { FormField, Form, Radio } from 'semantic-ui-react'
import { useState } from 'react';
import Article from '../Post/Article'
import Question from '../Post/Question'
import 'semantic-ui-css/semantic.min.css'

var postType = 'question'

function Post() {
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
    <div class="post">
      <div class="PostOption">
        <div id="label1" class="ui card fluid" style={{ backgroundColor: 'lightgray', marginTop: "1rem", marginBottom: "1rem" }}>
          New Post
        </div>
        <Form style={{ display: 'flex' }}>
          <p style={{ margin: '1rem' }}>Select post type:</p>
          <FormField style={{ margin: '1rem' }}>
            <Radio
              label='Question'
              name='radioGroup'
              value='question'
              checked={value == 'question' ? true : false}
              onClick={handleChange}
            />
          </FormField>
          <FormField style={{ margin: '1rem' }}>
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

      <div id="label2" class='ui card fluid' style={{ backgroundColor: 'lightgray', marginTop: "1rem", marginBottom: "1rem" }}>
        What would you like to post or share?
      </div>
      {
        (postType == 'question') ? <Question /> : <Article />
      }
    </div>
  );
}

export default Post;
