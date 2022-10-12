/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const _ = require('lodash');

  const user={
    name:'Imie',
    surname: 'Nazwisko',
    allGrades:[
      {
        subjectName:'Name1',
        grades:[5,4,3,5,2],
        weight: 3
      },
      {
        subjectName:'Name2',
        grades:[3,3.5,2],
        weight: 1
      },
      {
        subjectName:'Name3',
        grades:[4,3,3.5],
        weight: 5
      }
    ]
  }

  function sr_wazona(user){
    const marks = user.allGrades;
    let wynik = 0;
    let licznik =0;

    for (var i = 0; i < marks.length; i++){
      wynik = wynik + (_.sum(marks[i].grades)*marks[i].weight);
      licznik = licznik + ((marks[i].grades).length*marks[i].weight);
    }
    return("imię: " +user.name+"\nnazwisko: " +user.surname +"\nśrednia: "+ wynik/licznik);
  }

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text>{sr_wazona(user)}</Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
     <SafeAreaView style={backgroundStyle}>

       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>

         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>

           <Section title="">
           </Section>
         </View>
       </ScrollView>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
