import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'

export const NotificationsScreen = () => {

    const { navigate, setOptions  }:NavigateType | any  = useNavigation()

    useEffect(() => {
        setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View>
            
        </View>
    )
}
