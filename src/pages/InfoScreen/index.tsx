import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from './style';
import { posts, user } from '../../assets/data';

const Item = ({ item, navigation }: any) => (
    <View>
        <View style={{ ...styles.header, height: 48, ...styles.m12 }}>
            <View style={styles.left}>
                <Text style={{ ...styles.white, marginLeft: 20 }}>{`${item.reviews} ratings`}</Text>
            </View>
            <Text style={styles.gray}
                onPress={() => navigation.navigate('Party Rating', { id: item.id })}
            >
                Show reviews
      </Text>
        </View>
    </View>
)

const InfoScreen = (props: any) => {
    const { navigation } = props;
    const renderItem = ({ item }: any) => (
        <Item item={item} navigation={navigation} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default InfoScreen;
