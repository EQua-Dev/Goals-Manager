import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GoalItem = (props: {text: string}) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goaltext}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#5e0acc',
  },
  goaltext: {
    color: 'white',
  },
});
