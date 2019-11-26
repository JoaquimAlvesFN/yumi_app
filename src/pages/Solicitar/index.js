import React, { useState } from 'react';
import { Alert, SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';


export default function Solicitar() {
const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.content}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <Calendar
          onDayPress={(day) => setDate(day.dateString)}
          theme={{
            indicatorColor: '#801AB3',
          }}
          markedDates={{
            '2019-11-25': {selected: true, selectedColor: '#801AB3'},
          }}
        />
        <TouchableOpacity 
          style={styles.confirmar}
          onPress={() => {Alert.alert("Solicitado com Sucesso", `Dia: \n ${date}`)}}
        >
          <Text style={styles.confirmaText}>Solicitar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f0f5',
  },
  confirmar: {
    width: 250,
    borderRadius: 5,
    backgroundColor: '#801AB3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  confirmaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

Solicitar.navigationOptions = ({navigation}) => ({
  title: 'Agendar ou Solicitar',
  headerTitleStyle: {
      fontWeight: 'bold',
  },
});
