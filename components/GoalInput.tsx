/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Button,
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = (props: {
  onAddGoal: (enteredGoal: string) => void;
  showModal: boolean;
  endAddGoalHandler: () => void;
}) => {
  // const [showModal, setShowModal] = useState<boolean>(true)
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler: (event: GestureResponderEvent) => void = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../src/assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button
              title="Dismiss"
              onPress={props.endAddGoalHandler}
              color={'#f31282'}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={'#b180f0'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    padding: 8,
    borderRadius: 5,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    margin: 24,
  },
});

export default GoalInput;
