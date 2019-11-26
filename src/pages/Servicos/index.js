import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import data from '../../data/data.json';

export default function Servicos({navigation}) {

  return (
    <SafeAreaView style={styles.content}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => 
                <View style={styles.contentHead}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <ScrollView 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={10}
                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={data}
                            renderItem={({item}) => 
                                <View style={styles.card}>
                                    <TouchableOpacity 
                                        style={styles.backImage}
                                        onPress={() => navigation.navigate('Lista', {
                                            id: item.id,
                                            title: item.nome
                                        })}
                                        >
                                        <Text>CLIQUE AQUI.</Text>
                                    </TouchableOpacity>
                                    
                                    <Text style={styles.info}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</Text>
                                    <View style={styles.lineCard}/>
                                    <Text style={styles.info}>A partir de R$ 0.00</Text>
                                </View>
                            }
                            keyExtractor={item => item.id.toString()}
                        />
                    </ScrollView>                     
                </View>
                
            }
            keyExtractor={item => item.id.toString()}
        />
    </SafeAreaView>
  );

}

const dimension_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#f3f0f5',
    },
    contentHead: {
        marginTop: 20,
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    card: {
        backgroundColor: '#fff',
        width: dimension_width - 40,
        height: 250,
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        elevation: 2,

        /*alignItems: 'flex-start',
        backgroundColor: '#fff',
        width: 300,
        height: 200,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        elevation: 2,*/
    },
    backImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#801AB3',
        width: dimension_width - 40,
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    lineCard: {
        borderWidth: 1.0,
        borderColor: '#801AB3',
        width: dimension_width - 40,
    },
    info: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    scroll_content: {},
    view: {
        /*justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#801AB3',
        width: dimension_width - 50,
        height: 200,
        marginHorizontal: 10,*/
    },
});
