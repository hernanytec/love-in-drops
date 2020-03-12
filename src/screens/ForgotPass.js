import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native';

import logo from '../../assets/undraw_forgot_password.png'

import FloatingLabelInput from '../components/FloatingLabelInput'

export default function Home({ navigation }) {

    const goToLogin = () => {
        navigation.navigate('Login')
    }


    const showConfirmation = () => {
        Alert.alert(
            'Feito!',
            'Enviamos um e-mail de recuperação de senha para você',
            [
                { text: 'OK', onPress: () => goToLogin() },
            ],
            { cancelable: false }
        )
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
                <View style={styles.formContainer}>
                    <Text style={styles.label} > Preencha o campo com seu e-mail para continuar</Text>

                    <FloatingLabelInput
                        label="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.recoveryButton} onPress={showConfirmation}>
                        <Text style={styles.buttonText}>RECUPERAR SENHA</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.backButton} onPress={goToLogin}>
                <Text style={styles.arrow}> ← </Text>
                <Text style={styles.buttonText}> Voltar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
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
    label: {
        color: "#fff",
        marginBottom: 25,
        alignSelf: "center"
    },
    formContainer: {
        alignSelf: "stretch",
        marginTop: 30
    },
    recoveryButton: {
        backgroundColor: "rgba(100,0,80, .6)",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        marginTop: 20
    },
    backButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    arrow: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 32,
        marginBottom: 12,
        marginRight: -10
    }
})