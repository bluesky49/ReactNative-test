export const user = {
    image: require('./images/user.png'),
    firstName: "Brooklyn",
    lastName: "Simmons",
    score: 4.7,
    rating: 128
}

export const posts = [
    {
        id: "_1_post",
        backImage: require('./images/cardImg1.png'),
        title: "New Year Anti-COVID...",
        city: "Berlin",
        distance: "5km",
        date: "31 Dec 2020",
        rating: "3 / 14",
        score: 4.1,
        reviews: 12,
    },
    {
        id: "_2_post",
        backImage: require('./images/cardImg2.png'),
        title: "Party Party",
        city: "Berlin",
        distance: "5km",
        date: "31 Dec 2020",
        rating: "3 / 14",
        reviews: 81,
        score: 3,
    },
    {
        id: "_3_post",
        backImage: require('./images/cardImg3.png'),
        title: "Another one party",
        city: "Berlin",
        distance: "5km",
        date: "31 Dec 2020",
        rating: "3 / 14",
        reviews: 123,
        score: 4.7,
    }
];

export const reviews = [
    {
        post_id: "_1_post",
        reviews: [
            {
                id: "_1_review_1_post",
                image: require('./images/commentor3.png'),
                rating: 3,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_2_review_1_post",
                image: require('./images/commentor1.png'),
                voter: "Markus Lanze",
                rating: 4,
                commit: "Lorem ipsum dolor sit amet, fermentum blandit nibh rhoncus at.",
                edited: true,
                beforeTime: "23m"
            },
            {
                id: "_3_review_1_post",
                image: require('./images/commentor1.png'),
                voter: "Markus Lanze",
                rating: 5,
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_4_review_1_post",
                image: require('./images/commentor3.png'),
                rating: 3,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_5_review_1_post",
                image: require('./images/commentor1.png'),
                voter: "Markus Lanze",
                rating: 4,
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: true,
                beforeTime: "23m"
            },
        ],
    },
    {
        post_id: "_2_post",
        reviews: [
            {
                id: "_1_review_2_post",
                image: require('./images/commentor1.png'),
                voter: "Markus Lanze",
                rating: 5,
                commit: " Lorem ipsum dolor sit, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_2_review_2_post",
                voter: "Markus Lanze",
                image: require('./images/commentor3.png'),
                rating: 3,
                commit: "Tincidunt fermentum blandit nibh rhoncus at.",
                edited: true,
                beforeTime: "23m"
            },
            {
                id: "_3_review_2_post",
                voter: "Markus Lanze",
                image: require('./images/commentor1.png'),
                rating: 4,
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: true,
                beforeTime: "23m"
            },
            {
                id: "_4_review_2_post",
                image: require('./images/commentor1.png'),
                rating: 5,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_5_review_2_post",
                image: require('./images/commentor3.png'),
                rating: 3,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: true,
                beforeTime: "23m"
            },
            {
                id: "_6_review_2_post",
                image: require('./images/commentor1.png'),
                rating: 4,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
        ],
    },
    {
        post_id: "_3_post",
        reviews: [
            {
                id: "_1_review_3_post",
                image: require('./images/commentor1.png'),
                rating: 5,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_2_review_3_post",
                image: require('./images/commentor1.png'),
                rating: 3,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: true,
                beforeTime: "23m"
            },
            {
                id: "_3_review_3_post",
                image: require('./images/commentor3.png'),
                rating: 4,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
            {
                id: "_4_review_3_post",
                image: require('./images/commentor1.png'),
                rating: 5,
                voter: "Markus Lanze",
                commit: "Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at.",
                edited: false,
                beforeTime: "23m"
            },
        ],
    },
];