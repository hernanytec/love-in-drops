import React from 'react'

import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage
} from 'react-native'

import { Icon } from 'react-native-elements'

import { LinearGradient } from 'expo-linear-gradient'

import avatar from '../../assets/undraw_female_avatar.png'
import baby from '../../assets/sleep_baby.jpg'

export default function Profile({ navigation }) {

    const logout = () => {
        navigation.navigate('Login')
        AsyncStorage.removeItem('user')
    }

    const back = () => {
        navigation.navigate('Home')
    }

    return (
        <LinearGradient
            colors={['#e66465', '#9198e5']}
            style={styles.bg}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Meu perfil</Text>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={back}>
                        <Text style={styles.arrow}> ← </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                        <Text style={{ color: "#fff" }}>SAIR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Nome da mãe</Text>
                    <Icon name='pencil-square-o'
                        iconStyle={{ marginLeft: 10 }}
                        type='font-awesome'
                        color='#fff'
                    />
                </View>
                <View style={styles.description}>
                    <Image style={styles.avatarStyle} source={avatar} />

                    <View style={styles.content}>
                        <View style={styles.babyContainer}>
                            <Image
                                style={styles.babyImage}
                                source={baby}
                            />
                            <Text>Nome do bebê</Text>

                        </View>

                    </View>
                </View>
            </View>

        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: 32,
    },
    title: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 24
    },
    arrow: {
        color: "#fff",
        fontSize: 32,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
        marginHorizontal: 20,
    },
    logoutButton: {
        height: 30,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: 30,
        marginRight: 20
    },
    name: {
        color: "#fff",
        fontSize: 18,
    },
    description: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#fff"
    },
    avatarStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 20,
        marginTop: -50
    },
    content: {
        alignSelf: "center",
        height: 400,
        width: 300,
        borderRadius: 3
    },
    babyContainer: {
        alignSelf: "center",
        marginTop: 40,

    },
    babyImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#e66465",
    }
})