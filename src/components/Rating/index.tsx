import React from 'react'
import { Text, View } from 'react-native';
import Stars from 'react-native-stars';
import styles from './style';

const starImg = require('../../assets/images/star.png');
const emptyStar = require('../../assets/images/star_empty.png')
const halfStar = require('../../assets/images/star_half.png')

interface RatingProps {
    getValue?: Function
    value: number,
    half?: boolean,
    spacing?: number,
    size: number,
    readOnly?: boolean
}

const StarRating = (props: RatingProps) => {
    const { value, getValue, half, spacing, size, readOnly } = props;
    const starValue = Math.floor(value) === value ? value : Math.floor(value) + 0.5
    return (
        <View style={styles.root}>
            <Stars
                half={half}
                default={starValue}
                update={(value: number) => getValue && getValue(value)}
                spacing={spacing}
                starSize={size}
                count={5}
                fullStar={starImg}
                emptyStar={emptyStar}
                halfStar={halfStar}
                disabled={readOnly || false}
            />
        </View>
    )
}

export default StarRating;
