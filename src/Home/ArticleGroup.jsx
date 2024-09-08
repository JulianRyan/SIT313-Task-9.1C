import 'bootstrap/dist/css/bootstrap-grid.min.css';
import React from 'react'
import articleList from './articleList'
import ArticleTwo from './ArticleTwo'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'semantic-ui-react'

function cardComponent(card, i) {
    return <ArticleTwo
            name={card.name}
            image={card.image}
            description={card.description}
            rating={card.rating}
            author={card.author}
        />
}

const ArticleGroup = () => {
    return <Card.Group>
        {/* <Container fluid>
            <Row class="card-group"> */}
                {articleList.map(cardComponent)}
            {/* </Row>
        </Container> */}

    </Card.Group>
}

export default ArticleGroup;