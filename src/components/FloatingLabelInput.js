import React, { useState } from 'react'

import { View, TextInput, Text } from 'react-native'

export default function FloatingLabelInput(props) {

    const [isFocused, setIsFocused] = useState(false)

    handleFocus = () => setIsFocused(true)
    handleBlur = () => setIsFocused(false)

    const { label } = props

    const labelStyle = {
        position: 'absolute',
        left: 0,
        top: !isFocused ? 18 : 0,
        fontSize: !isFocused ? 16 : 12,
        color: '#fff'
    }
    const input = {
        height: 40,
        borderBottomWidth: 1,
        borderColor: "#fff",
        color: "#fff",
        marginBottom: 20
    }

    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                {...props}
                style={input}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    )
}


