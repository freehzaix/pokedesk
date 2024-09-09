import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps

export function Card ({style, ...rest}: Props) {
    const colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...rest} />
}

const styles = {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    ...Shadows.dp2
} satisfies ViewStyle