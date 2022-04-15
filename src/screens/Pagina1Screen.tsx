import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../themes/AppTheme';



interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title='Ir pagina 2 '
                onPress={() => navigation.navigate("Pagina2Screen")} />
            <Text>Navegar con argumentos</Text>
            <View style={{ flexDirection: "row" }} >
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: "#5856D6"
                    }}
                    onPress={() => navigation.navigate("PersonaScreen", {
                        id: 1,
                        name: "pedro"
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: "#FF9427"
                    }}
                    onPress={() => navigation.navigate("PersonaScreen", {
                        id: 2,
                        name: "maria"
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
