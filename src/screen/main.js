import React, {Component, Fragment} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default class main extends Component 
{
    constructor(props)
    {
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

    listMain = ({ item }) =>(
        <TouchableOpacity>  
        <ImageBackground source={{ uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' }} style={styles.BgList} imageStyle={{ borderRadius: 25 }}>
                <Text style={styles.TitleList}>{item.title}</Text>
                <Text>{item.hours}</Text>
        </ImageBackground>
        </TouchableOpacity>
    )

    listMainB = ({ item }) => (
        <TouchableOpacity>
            <View style={{ marginLeft: 15, marginBottom: 25 }}>
                <Image source={{ uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' }} style={styles.BgListB} />
                <View style={{ marginTop: 15, marginLeft: 12 }}>
                    <Text style={{fontSize: 20}}>{item.title}</Text>
                    <Text>{item.hours}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    
    render()
    {
        return(
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Image source={require('../img/menu.png')} style={{ width: 15, height: 15 }} />
                            {/* <Text>This Main</Text> */}
                            <Image source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }} style={{ width: 28, height: 28, borderRadius: 10 }} />
                        </View>
                        <View style={styles.contentTitle}>
                            <Text style={styles.Title}>Surf Camps</Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text>Best surf destination for you</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#FF8A65" }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flatlis}>
                            <FlatList 
                                horizontal={true}
                                data={this.state.data}
                                renderItem={this.listMain}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={styles.contentTitle}>
                            <Text style={styles.Title}>Trendings</Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text>High season, everyone here</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#FF8A65" }}>View All</Text>
                            </TouchableOpacity>
                        </View>
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
    container:{
        display: "flex",
    },
    content:{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 40
    },
    contentTitle:{
        marginTop: 2,
        marginLeft: 30
    },
    contentSub:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: -25
    },
    Title:{
        fontSize: 27,
        fontWeight: "bold"
    },
    flatlis:{
        marginTop: 8
    },
    flatlisB: {
        marginTop: 8
    },
    BgList:{
        
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
    TitleList:{
        fontSize: 25,
        marginTop: 150
    },
    textList:{
        alignSelf: "flex-end",
        marginTop: 160,
        color: "#fff"
        
    },
    
});