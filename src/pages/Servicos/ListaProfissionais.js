import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ListaProfissionais({navigation}) {
const data = [
    {"id":1, "nome":"fulana",},
    {"id":2, "nome":"cicrana",},
    {"id":3, "nome":"muvina",},
    {"id":4, "nome":"albertina",},
    {"id":5, "nome":"francisca",},
];
  return (
    <SafeAreaView style={styles.content}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => 
                <View style={styles.card}>
                    <TouchableOpacity 
                        style={styles.headCard}
                        onPress={() => navigation.navigate('Profissional', {
                            nome: item.nome,
                        })}
                    >
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.photo}/>
                            <Text style={styles.name}>{item.nome}</Text>

                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="star" color="#fff" size={10}/>
                            <Icon name="star" color="#fff" size={10}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginHorizontal: 10}}>
                        <Text style={{fontSize: 12}}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</Text>
                    </View>
                    <View style={styles.requestButton}>
                        <TouchableOpacity 
                            style={styles.requestButtonStyle}
                            onPress={() => navigation.navigate('Solicitar')}
                        >
                            <Text style={styles.requestText}>Solicitar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            keyExtractor={item => item.id.toString()}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f0f5'
    },
    card: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        width: 300,
        height: 200,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        elevation: 2,
    },
    headCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#801AB3',
        width: 300,
        height: 80,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 8,
    },
    photo: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    requestButton: {
        marginLeft: 10,
        marginBottom: 10,
    },
    requestButtonStyle: {
        backgroundColor: '#ddd',
        width: 100,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    requestText: {
        fontWeight: 'bold',
    },
})

ListaProfissionais.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title'),
    headerTitleStyle: {
        fontWeight: 'bold',
    },
});

/*.navigationOptions = ({navigation}) => ({
    title: 'Recibos',
    headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
            <Icon style={styles.iconRight} name="search" color="#fff" size={20}/>
        </TouchableOpacity>
    ),
    headerStyle: {
        backgroundColor: '#1876AB',
    },
    headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
    },
  });*/
