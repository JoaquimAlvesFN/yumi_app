import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Servicos from './pages/Servicos';
import ListaProfissionais from './pages/Servicos/ListaProfissionais';
import Profissional from './pages/Perfil/PefilProfissional';

import Solicitar from './pages/Solicitar';

import Ajuda from './pages/Ajuda';
import Conta from './pages/Conta';

const Tabs = createBottomTabNavigator({
    Serviços: {
        screen: Servicos,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name="list" size={20} focused color={tintColor}/>
            ), 
        }
    },
    Conta: {
        screen: Conta,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name="clipboard-check" size={20} focused color={tintColor}/>
            ), 
        }
    },
    Ajuda: {
        screen: Ajuda,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name="life-ring" size={20} focused color={tintColor}/>
            ), 
        }
    },
},{
    tabBarOptions: {
        activeTintColor: '#801AB3',
        inactiveTintColor: '#c583e6',
        
    }
});

const App = createStackNavigator({
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            header: null,
        },
    },
    Solicitar: {
        screen: Solicitar,
    },
    Lista: {
        screen: ListaProfissionais,
    },
    Profissional: {
        screen: Profissional,
    },
}, {
    initialRouteName: "Tabs",
});

export default createAppContainer(App)