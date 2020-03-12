import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    AsyncStorage,
    ToastAndroid
} from 'react-native';

import FloatingLabelInput from '../components/FloatingLabelInput'

import { LinearGradient } from 'expo-linear-gradient'

import logo from '../../assets/undraw_motherhood.png'

export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user)
                navigation.navigate('Home')
        })
    }, [])


    const goToSignup = () => {
        navigation.navigate('Signup')
    }
    const goToForgotPass = () => {
        navigation.navigate('ForgotPass')
    }

    const goToHome = () => {
        if (email === '' || pass === '') {
            ToastAndroid.show('Email ou senha inválidos', ToastAndroid.SHORT)
        } else {
            AsyncStorage.setItem('user', 'true')
            navigation.navigate('Home')
        }
    }
    return (

        <LinearGradient
            colors={['#e66465', '#9198e5']}
            style={styles.bg}
        >
            <KeyboardAvoidingView behavior="padding" style={styles.container} >
                <Image
                    style={{ width: 200, height: 200, borderRadius: 100 }}
                    source={logo}
                />
                <Text style={styles.appName}>LOVE IN DROPS</Text>

                <View style={styles.formContainer}>


                    <FloatingLabelInput
                        label={email !== '' ? email : 'E-mail'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(email) => setEmail(email)}
                        autoCorrect={false}
                    />

                    <FloatingLabelInput
                        label={pass !== '' ? pass : 'Senha'}
                        onChangeText={(pass) => setPass(pass)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.loginButton} onPress={goToHome}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.otherOptions}>
                    <TouchableOpacity onPress={goToForgotPass}>
                        <Text style={styles.otherOptionsText}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToSignup}>
                        <Text style={styles.otherOptionsText}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 25
    },
    appName: {
        marginTop: 10,
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold"
    },
    formContainer: {
        alignSelf: "stretch",
        marginTop: 30
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    loginButton: {
        backgroundColor: "rgba(100,0,80, .6)",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    otherOptions: {
        marginTop: 50,
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    otherOptionsText: {
        color: "#fff"
    }
})