import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number,
//     nombre: string
// }
interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> { }

export const PersonaScreen = ({ route }: Props) => {

    const params = route.params


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View >
    )
}
