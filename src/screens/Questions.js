import React from 'react';

import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import Constants from 'expo-constants';

import { LinearGradient } from 'expo-linear-gradient'
import searching from '../../assets/undraw_searching.png'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '#Dúvida 1?',
        subtitle: 'Adipisicing esse sint id adipisicing irure tempor sit amet est qui irure incididunt elit.'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '#Dúvida 2?',
        subtitle: 'Adipisicing id magna excepteur ullamco excepteur duis nostrud est pariatur fugiat sit.'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '#Dúvida 3?',
        subtitle: 'In eu proident dolore deserunt ut commodo enim commodo et. Non dolor est eiusmod cupidatat laboris ipsum id duis voluptate consequat eiusmod. Aliqua aliqua ullamco incididunt labore officia consequat ipsum. Do Lorem magna ut laboris eu voluptate irure exercitation sint adipisicing est dolor dolore. Aliqua nostrud id nisi labore.'
    }
];

function Item({ id, title, subtitle, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={
                styles.item
            }
        >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableOpacity>
    );
}



export default function Questions({ navigation }) {

    const back = () => {
        navigation.navigate('Home')
    }

    const onSelect = () => {

    }

    return (
        <LinearGradient
            colors={['#e66465', '#9198e5']}
            style={styles.bg}
        >
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={back}>
                    <Text style={styles.arrow}> ← </Text>
                </TouchableOpacity>

                <Image source={searching} style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    alignSelf: "center",
                    marginBottom: 10,
                }} />
                <Text style={{
                    color: "#fff",
                    fontSize: 16,
                    marginHorizontal: 10,
                    textAlign: "center",
                    marginBottom: 10,
                }}>
                    Fique a vontade para explorar as dúvidas mais comuns. Isso pode ser muito esclarecedor para você.
                </Text>


                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            onSelect={onSelect}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: 'rgba(255,255,255,.9)',
        borderRadius: 4,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    subtitle: {
        fontSize: 16,
        color: '#222'
    },
    arrow: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        margin: 10
    }
});
