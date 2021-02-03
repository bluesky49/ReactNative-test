import React from 'react';
import { View } from 'react-native';
import Lock from '../../assets/svgComponent/lock';
import Currency from '../../assets/svgComponent/currency';
import styles from './style';

const IconGroup = () => {
    return (
        <View style={styles.container}>
            <Lock />
            <Currency />
        </View>
    )
}

export default IconGroup;
