import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from './style';
import { posts, user } from '../../assets/data';
import RateStar from '../../components/RateStar';
import StarRating from '../../components/Rating';
import InfoCard from './../../components/InfoCard/index';

const Item = ({ item, navigation }: any) => (
    <View>
        <InfoCard
            title={item.title}
            commentor={`${user.fName} ${user.lName}`}
            location={item.city}
            cnt={item.rating}
            date={item.date}
            dist={item.distance}
            cardImg={item.backImage}
            userImage={user.image}
        />
        <View style={[styles.header, , styles.m12]}>
            <View style={styles.left}>
                <View style={{ marginLeft: -6 }}>
                    <StarRating
                        value={item.score}
                        half={true} size={18} spacing={12} readOnly
                    />
                </View>
                <Text style={styles.white}>{`${item.reviews} ratings`}</Text>
            </View>
            <Text style={styles.gray}
                onPress={() => navigation.navigate('Party Rating', { id: item.id })}
            >
                Show reviews
            </Text>
        </View>
    </View >
)

const InfoScreen = (props: any) => {
    const { navigation } = props;
    const renderItem = ({ item }: any) => (
        <Item item={item} navigation={navigation} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <RateStar value={user.score} ratings={user.rating} />
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default InfoScreen;
