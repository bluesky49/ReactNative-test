import React from 'react';
import { Text, View } from 'react-native';
import Rating from '../Rating';
import styles from './style';

interface RateStarProps {
    value: number,
    ratings: number
}

const StarVisual = (props: RateStarProps) => {
    const { value, ratings } = props;
    return (
        <View style={styles.root}>
            <View style={[styles.header, styles.m18]}>
                <View style={styles.left}>
                    <Text style={[styles.score, styles.white]}>{value.toFixed(1)}</Text>
                    <View style={styles.m12}>
                        <Rating
                            value={value}
                            half={true}
                            size={20}
                            spacing={12}
                            readOnly
                        />
                    </View>
                </View>
                <Text style={[styles.white, styles.m18]}>{ratings} ratings</Text>
            </View>
        </View >
    )
}

export default StarVisual;
