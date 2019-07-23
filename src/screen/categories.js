import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: "bali",
                hours: 20
            },
            {
                title: "bali",
                hours: 20
            },
            {
                title: "bali",
                hours: 20
            },
            {
                title: "bali",
                hours: 20
            }]
        }
    }

    

    listMainB = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{ marginLeft: "8%", marginBottom: 25 }}>
                <Image source={{ uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' }} style={styles.BgListB} />
                <View style={{ marginTop: 15, marginLeft: "8%" }}>
                    <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    <Text>{item.hours} Hours</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "12%", marginTop: 40, marginBottom: 20 }}>
                            {/* <Text>back</Text> */}
                            <TouchableOpacity>
                                <Icon name="arrowleft" size={30} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 28 }}>Trendings</Text>
                        </View>
                        {/* <View style={styles.contentTitle}>
                            <Text style={styles.Title}>Trendings</Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text>High season, everyone here</Text>
                        </View> */}
                        <View style={styles.flatlisB}>
                            <FlatList
                                horizontal={false}
                                data={this.state.data}
                                renderItem={this.listMainB}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 40
    },
    contentTitle: {
        marginTop: 25,
        marginLeft: 30
    },
    contentSub: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: "12%",
        marginLeft: 25

    },
    Title: {
        fontSize: 27,
        fontWeight: "bold",
    },
    flatlis: {
        marginTop: 8
    },
    flatlisB: {
        marginTop: 8
    },
    BgList: {

        backgroundColor: "#EEEEEE",
        width: 157,
        height: 250,
        margin: 5,
        borderRadius: 25,
        padding: 30
    },
    BgListB: {
        width: "85%",
        height: 157,
        margin: 5,
        borderRadius: 25,
    },
    TitleList: {
        fontSize: 25,
        marginTop: 150
    },
    textList: {
        alignSelf: "flex-end",
        marginTop: 160,
        color: "#fff"

    },

});