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
import doctors from '../../assets/undraw_doctor.png'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '#Dica 1',
        subtitle: 'Proident quis quis velit exercitation proident dolore aute laboris in amet.'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '#Dica 2',
        subtitle: 'Fugiat exercitation ad laborum esse aliquip sint magna minim. Incididunt elit ipsum proident magna eu consequat eu labore officia consectetur esse velit. Aute culpa excepteur incididunt do quis occaecat aute reprehenderit ullamco. Culpa deserunt eiusmod laborum voluptate.'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '#Dica 3',
        subtitle: 'Est sint qui ad cillum nostrud consequat sint.'
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



export default function Tips({ navigation }) {

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

                <Image source={doctors} style={{
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
                    Veja algumas recomendações médicas muito importantes para você.
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
