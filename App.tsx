/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Goal} from './Goal';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  const [modalIsVisible, setIsModalVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    // we set the list of goals to the existing goals list
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
    //console.log('DELETE');
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.appContainer}>
        <Button
          title="Add Goal"
          color={'#a065ec'}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={modalIsVisible}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
