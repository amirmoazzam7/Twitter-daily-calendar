import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TweetsComponent = ({ username }) => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: username
        }}
        options={{
          height: '400',
          width: '600'
        }}
      />
    </div>
  );
};

export default TweetsComponent;
