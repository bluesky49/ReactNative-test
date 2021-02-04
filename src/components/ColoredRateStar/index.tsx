import React from 'react';
import { Text, View } from 'react-native';
import ColoredStarSvg from '../../assets/svgComponent/coloredStar';
import styles from './style';

interface ColoredRateStarProps {
    text?: string
}

const ColoredRateStar = (props: ColoredRateStarProps) => {
    const { text } = props;
    return (
        <View style={styles.contaienr}>
            <Text style={styles.text}>{text}</Text>
            <ColoredStarSvg />
        </View>
    )
}

export default ColoredRateStar;
