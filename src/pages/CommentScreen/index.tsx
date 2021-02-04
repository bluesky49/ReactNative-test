import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import Comment from '../../components/commentCard'
import RateStar from '../../components/RateStar';
import { posts, user, reviews } from '../../assets/data';
import styles from './style';
import InforCard from '../../components/InfoCard';

const CommentScreen = (props: any) => {
    const { params } = props.route;
    const id = params.id
    const post = posts.filter(post => post.id === id)[0]
    const postReviews = reviews.filter(review => review.post_id === id)[0].reviews
    const [filteredReviews, setFilteredReviews] = useState(postReviews.slice(0, 3))
    const [moreCount, setMoreCount] = useState(0);

    useEffect(() => {
        setMoreCount(postReviews.length - filteredReviews.length)
    }, [filteredReviews, postReviews])

    const renderItem = ({ item }: any) => (
        <Comment score={item.rating} text={item.commit} image={item.image} voter={item.voter} edited={item.edited} beforeTime={item.beforeTime} />
    )

    return (
        <SafeAreaView style={styles.container}>
            <InforCard
                title={post.title}
                commentor={`${user.fName} ${user.lName}`}
                location={post.city}
                cnt={post.rating}
                date={post.date}
                dist={post.distance}
                cardImg={post.backImage}
                userImage={user.image}
            />
            <RateStar value={post.score} ratings={post.reviews} />
            {moreCount > 0 && <Text
                style={styles.moreView}
                onPress={() => setFilteredReviews(postReviews)}
            >
                Show {moreCount} more reviews
        </Text>
            }
            <FlatList
                data={filteredReviews}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default CommentScreen;
