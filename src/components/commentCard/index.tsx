import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import DotIcon from '../../assets/svgComponent/dot';
import Edit from '../../assets/svgComponent/editIcon';
import Rating from '../../components/Rating';
import styles from './style';

interface CommentProps {
    text: string,
    image: any,
    score: number,
    edited?: boolean,
    voter: string,
    beforeTime: string
}

const Comment = (props: CommentProps) => {
    const { text, image, score, edited, voter, beforeTime } = props
    return (
        <>
            <View style={styles.root}>
                <Image source={image} style={styles.image} />
                <View style={styles.content}>
                    <View style={styles.rateContainer}>
                        <Rating value={score} half={false} size={11} spacing={12} readOnly />
                    </View>
                    <Text style={[styles.contentTitle, styles.white]}>
                        <Text style={[styles.bold, styles.white]}>{voter}</Text>
                        <Text>{` ${text} `}</Text>
                        <Text style={styles.gray}>{`  ${beforeTime}`}</Text>
                        {edited &&
                            <Text style={[styles.gray]}>
                                {`    (Edited)`}
                                <Edit />
                            </Text>}
                    </Text>
                </View>
                <DotIcon />
            </View>
        </>
    );
};

export default Comment;
