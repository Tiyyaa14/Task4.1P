import React from 'react';
import './FeaturedTutorials.css';
import { Card, Icon, Button } from 'semantic-ui-react';

function FeaturedTutorials({ tutorials }) {
  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <Card.Group itemsPerRow={3}>
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <img src={`https://picsum.photos/300/200?random=${index}`} alt="Tutorial" />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" /> {tutorial.username}
              <Icon name="star" style={{ marginLeft: '10px' }} /> {tutorial.rating}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button fluid className="view-button">See all tutorials</Button>
    </div>
  );
}

export default FeaturedTutorials;
