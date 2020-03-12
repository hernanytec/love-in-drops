import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import Timeline from 'react-native-timeline-flatlist'
import { LinearGradient } from 'expo-linear-gradient'

export default function BrastFeed({ navigation }) {
    const back = () => {
        navigation.navigate('Home')
    }

    const [data, setData] = useState([
        { time: '1', title: 'Vídeo', description: 'Música sensibilizadora', lineColor: '#eee', circleColor: '#f00', icon: require('../../assets/heart_icon.png'), unlocked: true },
        { time: '2', title: 'Bônus', description: '', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '3', title: 'Vídeo', description: 'Benefícios do aleitamento materno', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '4', title: 'Jogo', description: 'Fixação do conteúdo', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '5', title: 'Bônus', description: '', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '6', title: 'Jogo', description: 'Mitos da amamentação', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '7', title: 'Vídeo', description: 'Mitos da amamentação', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '8', title: 'Bônus', description: '', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '9', title: 'Música', description: '', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '10', title: 'Técnicas', description: 'Massagem no seio e ordenha', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '11', title: 'Técnicas', description: 'Posicionamento e pega', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
        { time: '12', title: 'Bônus', description: '', circleColor: '#eee', lineColor: '#eee', icon: require('../../assets/heart_icon.png') },
    ])

    const handleClickItem = (e) => {
        let newData = []

        for (let i = 0; i < data.length; i++) {
            if (data[i].time === e.time) {
                let clicked = data[i]

                if (clicked.completed) {
                    newData.push(clicked)
                    continue
                }

                if (clicked.unlocked) {
                    clicked.circleColor = '#0f0'
                    clicked.lineColor = '#0f0'
                    clicked.completed = true
                    newData.push(clicked)

                    if (clicked.title === "Bônus")
                        ToastAndroid.show('Você ganhou um super bônus :)', ToastAndroid.SHORT)
                    else
                        ToastAndroid.show('Parabéns, mamãe! Você completou uma atividade!', ToastAndroid.SHORT)

                    if (i + 1 < data.length) {
                        let next = data[i + 1]
                        next.unlocked = true
                        next.circleColor = '#f00'
                        newData.push(next)
                        i++
                    }
                } else {
                    ToastAndroid.show('Você precisa terminar os níveis anteriores', ToastAndroid.SHORT)
                    newData.push(clicked)
                }
            }
            else
                newData.push(data[i])
        }

        setData(newData)
    }

    return (
        <LinearGradient
            colors={['#e66465', '#9198e5']}
            style={styles.bg}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={back}>
                    <Text style={styles.arrow}> ← </Text>
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: 16,
                        color: '#fff',
                        marginVertical: 10,
                        textAlign: "center"
                    }}
                >
                    {'O Coração vermelho representa o nível em que você está no momento.\nClique sobre o nome da atividade para continuar.'}
                </Text>


                <Timeline
                    style={styles.list}
                    data={data}
                    circleSize={20}
                    innerCircle={'icon'}
                    titleStyle={{ color: '#fff' }}
                    descriptionStyle={{ color: '#fff' }}
                    onEventPress={handleClickItem}
                    showTime={false}
                    detailContainerStyle={{ marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#rgba(0,0,0,.1)", borderRadius: 5 }}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 15
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    arrow: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        margin: 10
    }
});