import { StyleSheet } from 'react-native';

const UserRatingStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#25233D',
        overflow: 'hidden',
        marginTop: 14
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 48
    },
    left: {
        flex: 1,
        flexDirection: 'row'
    },
    rateContainer  :{
        marginLeft: -6
    },
    score: {
        fontSize: 40,
        marginRight: 12,
        fontWeight: "900",
        lineHeight: 48
    },
    white: {
        color: 'white',
        marginLeft: 20
    },
    gray: {
        color: "#666577"
    }
})

export default UserRatingStyle;