import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Card, Icon, Button } from 'react-native-elements'

import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import baby from '../../assets/sleep_baby.jpg'

import Paginator from '../components/Paginator'


const itemConfig = {
    width: 370,
    height: 450,
    space: 15
}

export default function Home({ navigation }) {

    const myProfile = () => {
        navigation.navigate('Profile')
    }

    const commomQuestions = () => {
        navigation.navigate('Questions')
    }

    const Tips = () => {
        navigation.navigate('Tips')
    }

    const BreastFeed = () => {
        navigation.navigate('BreastFeed')
    }

    const DATA = [
        {
            id: '1',
            title: 'Dúvidas comuns',
            description: 'Aqui temos uma lista de dúvidas frequentes, isso pode esclarecer muita coisa para você.',
            buttonText: 'Visualizar',
            buttonIcon: 'eye',
            buttonCallBack: commomQuestions,
            img: require('../../assets/undraw_questions.png')
        }, {
            id: '2',
            title: 'Dicas médicas',
            description: 'Nem sempre é o médico está presente. Pensando nisso, reunimos aqui algumas dicas importantes.',
            buttonText: 'Ver dicas',
            buttonIcon: 'lightbulb-o',
            buttonCallBack: Tips,
            img: require('../../assets/undraw_medicine.png')
        }, {
            id: '3',
            title: 'Amamentação',
            buttonText: 'Começar',
            buttonIcon: 'play',
            buttonCallBack: BreastFeed,
            description: 'Nesse módulo você irá ver algumas dicas e cuidados na hora de amamentar seu bebê.',
            img: require('../../assets/undraw_motherhood.png')
        }, {
            id: '4',
            title: 'Próximos passos',
            description: 'A fase mais difícil já passou, mas ainda tem muita coisa pela frente.',
            buttonText: 'Continuar',
            buttonIcon: 'star',
            img: require('../../assets/undraw_baby.png')
        }
    ];

    return (
        <LinearGradient
            colors={['#e66465', '#9198e5']}
            style={styles.bg}
        >
            <TouchableOpacity onPress={myProfile}>
                <Image
                    style={styles.babyImage}
                    source={baby}
                />
            </TouchableOpacity>

            <Paginator
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ShowItem item={item} />}
                itemWidth={itemConfig.width + itemConfig.space}
                contentContainerStyle={styles.itemsContainer}
            />
        </LinearGradient>
    )
}


function ShowItem(props) {
    const { item } = props

    return (
        <Card
            title={item.title}
            image={item.img}
            imageStyle={{ height: 250, width: 100 }}
            containerStyle={styles.itemStyle}
        >

            <Text style={{ marginVertical: 20 }}>
                {item.description}
            </Text>

            <Button
                icon={
                    <Icon name={item.buttonIcon}
                        iconStyle={{ marginRight: 10 }}
                        type='font-awesome'
                        color='#fff'
                    />
                }

                buttonStyle={{
                    backgroundColor: 'rgba(100,0,80, .6)',
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0
                }}
                onPress={item.buttonCallBack}
                title={item.buttonText}
            />
        </Card>

    );
}


const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    babyImage: {
        alignSelf: "flex-end",
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#fff0cb",
        marginTop: 32,
        marginHorizontal: 20,
    },
    itemsContainer: {
        alignSelf: "flex-end",
        marginBottom: 30
    },
    itemStyle: {
        width: itemConfig.width,
        height: itemConfig.height,
        marginLeft: itemConfig.space,
        backgroundColor: '#fff',
        borderRadius: 5
    },
})

