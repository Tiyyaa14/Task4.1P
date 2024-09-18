import React from 'react';
import './SubscriptionSection.css';
import { Segment, Input, Button, Grid } from 'semantic-ui-react';

function SubscriptionSection() {
  return (
    <Segment textAlign="center" className="subscription-section">
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
            <Input action={{ color: 'blue', labelPosition: 'right', icon: 'mail', content: 'Subscribe' }} placeholder="Enter your email" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default SubscriptionSection;