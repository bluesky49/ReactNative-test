import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import Comment from '../../components/commentCard'
import RateStar from '../../components/RateStar';
import { comment, review } from '../../assets/data';
import styles from './style';
import InforCard from '../../components/InfoCard';

const CommentScreen = (props: any) => {
    const {navigation} = props;
    const moreCnt = 3;

    const handlePress = () => {
        navigation.navigate("Party Rating");
    }

    const renderItem = ({ item }: any) => (
        <Comment score={item.rating} text={item.commit} image={item.image} voter={item.voter} edited={item.edited} beforeTime={item.beforeTime} />
    )

    return (
        <SafeAreaView style={styles.container}>
            <InforCard
                title={comment.title}
                commentor='Brooklyn Simmonds'
                location={comment.city}
                cnt={comment.rating}
                date={comment.date}
                dist={comment.distance}
                cardImg={comment.backImage}
                userImage={require('../../assets/images/user.png')}
            />
            <RateStar value={comment.score} ratings={comment.reviews} />
            {moreCnt > 0 && <Text
                style={styles.moreView}
                onPress={handlePress}
            >
                Show {moreCnt} more reviews
        </Text>
            }
            <FlatList
                data={review}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default CommentScreen;
