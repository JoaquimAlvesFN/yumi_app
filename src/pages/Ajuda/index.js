import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, FlatList } from 'react-native';

export default function Ajuda() {
  return (
    <SafeAreaView style={styles.content}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <Text>Ajuda</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#801AB3',
        height: 200,
        marginHorizontal: 10,
    },
});
