import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import IconGroup from '../IconGroup';
import ColoredRateStar from '../ColoredRateStar';

import styles from './style';
import Location from '../../assets/svgComponent/location';
import User from '../../assets/svgComponent/user';
import Calendar from '../../assets/svgComponent/currency';

interface InfoCardProps {
  title: string,
  commentor: string,
  location: string,
  dist: string,
  cnt: string,
  date: string,
  cardImg?: any,
  userImage?: any
}

const InfoCard = (props: InfoCardProps) => {
  const { title, commentor, location, dist, cnt, date, cardImg, userImage } = props;
  return (
    <>
      <View style={styles.root}>
        <Image source={cardImg} style={styles.cardImg} />
        <View style={styles.commercial}>
          <IconGroup />
        </View>
        <View style={styles.rating_mark}>
          <ColoredRateStar text="11/24" />
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, styles.bold]}>
            {title}
          </Text>
          <View style={[styles.row, styles.m1]}>
            <Image source={userImage} style={styles.commentorImage} />
            <Text style={[styles.title, styles.pl_1]}>By {commentor}</Text>
          </View>
          <View style={[styles.row, styles.m1]}>
            <Location />
            <Text style={[styles.title, { marginLeft: 6 }]}>{location}</Text>
            <Text style={[styles.title, styles.gray, { marginLeft: 10 }]}>{dist}</Text>
          </View>
          <View style={[styles.row, styles.m1]}>
            <User />
            <Text style={[styles.title, { flex: 1, marginLeft: 12 }]}>{cnt}</Text>
            <Calendar />
            <Text style={[styles.title, { marginLeft: 14 }]}>{date}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default InfoCard;
