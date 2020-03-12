import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native';

import { RadioButton } from 'react-native-paper'

import FloatingLabelInput from '../components/FloatingLabelInput'

export default function Signup({ navigation }) {

    const [checked, setChecked] = useState('first')

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    const showConfirmation = () => {
        Alert.alert(
            'Registro finalizado com sucesso!',
            'Clique em OK e faça login para continuar',
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

                <Text style={styles.title}>Registre-se</Text>

                <View style={styles.formContainer}>

                    <FloatingLabelInput
                        label="Nome"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <FloatingLabelInput
                        label="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FloatingLabelInput
                        label="Senha"
                        secureTextEntry={true}
                    />
                    <FloatingLabelInput style={styles.input}
                        label="Confirmar senha"
                        secureTextEntry={true}
                    />

                    <Text style={{ color: "#fff" }} > Por qual período você está passando?</Text>

                    <View style={styles.radioButtonContainer}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked('first') }}
                        />
                        <Text style={{ color: "#fff" }}>Pós parto</Text>
                    </View>

                    <View style={styles.radioButtonContainer}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked('second') }}
                        />
                        <Text style={{ color: "#fff" }}>Gravidez</Text>
                    </View>


                    <TouchableOpacity style={styles.registryButton} onPress={showConfirmation}>
                        <Text style={styles.buttonText}>REGISTRAR</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.backButton} onPress={goToLogin}>
                <Text style={styles.arrow}> ← </Text>
                <Text style={styles.buttonText}> Voltar</Text>
            </TouchableOpacity>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    title: {
        fontSize: 36,
        color: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 25
    },
    formContainer: {
        alignSelf: "stretch",
        marginTop: 30
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    registryButton: {
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