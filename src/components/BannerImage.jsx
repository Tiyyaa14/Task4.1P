import React from 'react';
import { Segment } from 'semantic-ui-react';

function BannerImage() {
  return (
    <Segment className="banner-segment">
      <img src="https://picsum.photos/1200/400" alt="Banner" className="banner-image" />
    </Segment>
  );
}

export default BannerImage;