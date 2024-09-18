import React from 'react';
import './FeaturedArticles.css';
import { Card, Icon, Button } from 'semantic-ui-react';

function FeaturedArticles({ articles }) {
  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <Card.Group itemsPerRow={3}>
        {articles.map((article, index) => (
          <Card key={index}>
            <img src={`https://picsum.photos/300/200?random=${index}`} alt="Article" />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" /> {article.author}
              <Icon name="star" style={{ marginLeft: '10px' }} /> {article.rating}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button fluid className="view-button">See all articles</Button>
    </div>
  );
}

export default FeaturedArticles;
