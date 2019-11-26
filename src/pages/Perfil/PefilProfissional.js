import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PerfilProfissional({navigation}) {
  return (
    <SafeAreaView style={styles.content}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <View style={styles.sectionPerfil}>
            <View style={styles.fotoPerfil}/>
            <Text>{navigation.getParam('nome')}</Text>
            <Icon name="star" color="#ddd" size={10}/>
            <Icon name="star" color="#ddd" size={10}/>
            <TouchableOpacity 
                style={styles.requestButtonStyle}
                onPress={() => navigation.navigate('Solicitar')}
            >
                <Text>Solicitar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.sectionComentarios}>
            <Text>Comentarios</Text>
            <Text>Comment 1</Text>
            <Text>Comment 2</Text>
            <Text>Comment 3</Text>
            <Text>Comment 4</Text>
            <Text>Comment 5</Text>
        </View>
        <View style={styles.sectionFotos}>
            <Text>Fotos</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f3f0f5',
    },
    sectionPerfil: {
        flexDirection: 'row',
    },
    requestButtonStyle: {
        backgroundColor: '#ddd',
        width: 100,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fotoPerfil: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#ddd',
    },
    sectionComentarios: {
        justifyContent: 'center',

    },
    sectionFotos: {

    },
});

PerfilProfissional.navigationOptions = ({navigation}) => ({
    title: `Perfil de ${navigation.getParam('nome')}`,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
});
