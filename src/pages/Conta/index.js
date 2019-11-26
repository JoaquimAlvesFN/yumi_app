import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Conta() {
  return (
    <SafeAreaView style={styles.content}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <Text>Conta</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
});

