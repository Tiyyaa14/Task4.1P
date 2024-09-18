import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

function Footer() {
  return (
    <Segment inverted className="footer-section">
      <Grid>
        <Grid.Row columns={3} textAlign="center">
          <Grid.Column>
            <h4>Explore</h4>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Support</h4>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Stay Connected</h4>
            <Icon name="facebook" size="large" />
            <Icon name="twitter" size="large" />
            <Icon name="instagram" size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p textAlign="center">DEV@Deakin 2022 - Privacy Policy - Terms - Code of Conduct</p>
    </Segment>
  );
}

export default Footer;