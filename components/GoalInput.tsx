import React, {useState} from 'react';
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler: (event: GestureResponderEvent) => void = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    marginRight: 8,
    borderRadius: 5,
    width: '70%',
  },
});

export default GoalInput;
