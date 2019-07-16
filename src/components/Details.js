/* eslint-disable comma-dangle */
import React from 'react';
import { View, Text, } from 'react-native';
import { CardSection } from './CardSection';
import { Card } from './Card';

class Details extends React.PureComponent {
  render() {
    const { detailView } = styles;
    return (
      <View style={detailView}>
        <Card>
          <CardSection>
            <Text>
              PhoenixHacks is an annual 24-hour Hackathon hosted at Florida Polytechnic University
              where students from across the state get together in up to teams of 4 and compete by
              creating the best software or hardware product out of nothing. 
              </Text>
              <Text>
              We provide access to
              hardware, workshops, and mentors that allow hackers to create without being limited by
              technology, information, or experience.
            </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  detailView: {
    flex: 1,
    backgroundColor: 'black',
    // justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0
  }
};

export { Details };
