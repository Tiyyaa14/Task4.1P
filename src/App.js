import React from 'react';
import { Container } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

import Header from './components/header';
import BannerImage from './components/BannerImage';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';
import './App.css';

const articles = Array.from({ length: 3 }, () => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  author: faker.person.fullName(),
  rating: faker.number.int({ min: 1, max: 5 }),
}));

const tutorials = Array.from({ length: 3 }, () => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  username: faker.internet.userName(),
  rating: faker.number.int({ min: 1, max: 5 }),
}));

function App() {
  return (
    <div>
      <Header />
      <Container>
        <BannerImage />
        <FeaturedArticles articles={articles} />
        <FeaturedTutorials tutorials={tutorials} />
        <SubscriptionSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;