import React from 'react'
import {
  Image,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
} from 'semantic-ui-react'

function Tutorial(props) {
  return (
    <Card class="Tutorial" href='https://www.google.com.au'>
      <CardContent>
        <CardHeader>{props.name}</CardHeader>
      </CardContent>
      <Image src={props.image} style={{height: "20rem", objectFit: 'cover'}} />
      <CardContent>
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardContent>
      <CardContent>
        <CardDescription>
          <div class="card-divider">
            <p class="left">
              <Icon name='star' color='yellow' />
              {props.rating}
            </p>
            <p class="right">
              {props.author}
            </p>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default Tutorial;