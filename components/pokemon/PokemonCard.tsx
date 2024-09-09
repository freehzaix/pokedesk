import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { Card } from "@/components/Card"
import { ThemedText } from "@/components/ThemedText"
import { useThemeColors } from "@/hooks/useThemeColors"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}

export function PokemonCard ({style, id, name}: Props) {
    const colors = useThemeColors()
    return <Card style={[style, styles.card]}>
        <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]}/>
        <ThemedText style={styles.id} variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
        <Image 
            source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}} 
            width={75}
            height={75}/>
        <ThemedText>{name}</ThemedText>   
    </Card>
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        alignItems: 'center',
        padding: 4,
    },
    id: {
        alignSelf: 'flex-end',
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        borderRadius: 10,
        zIndex: -1,
    }
})