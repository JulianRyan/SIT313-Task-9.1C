import React from 'react'
import tutorialList from './tutorialList'
import Tutorial from './Tutorial'
import { Card } from 'semantic-ui-react'

function cardComponent(card, i) {
    return <Tutorial
    name = {card.name}
    image = {card.image}
    description = {card.description}
    rating = {card.rating}
    author = {card.author}
    />
}

const TutorialGroup = () =>
{
    return <Card.Group>
    {tutorialList.map(cardComponent)}
    </Card.Group>
}

export default TutorialGroup;