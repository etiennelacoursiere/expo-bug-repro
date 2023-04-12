import React from 'react'
import { Text } from 'react-native'
// Just importing the module here breaks the web app even though this component is rendered only on web.
import * as IAP from 'expo-in-app-purchases'

export default function InAppPurchases() {
    return (
        <Text>IAP</Text>
    )
}