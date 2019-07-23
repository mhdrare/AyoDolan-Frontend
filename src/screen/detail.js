import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';

export default class details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 2,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            }],
            dataGuide: [{
                id: 1,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 2,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 3,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 4,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 5,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 6,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 7,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 8,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            }]}
    }

    pictA = ({ item }) => (
        <Image source={{ uri:`${item.pict}` }} style={styles.minipictA} />
    )

    pictB = ({ item }) => (
        <Image source={{ uri: `${item.pict}` }} style={styles.minipictB} />
    )

    render() {
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text>back ico</Text>
                            <Text>Fav ico</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentHead}>Santa Monica</Text>
                        <Text style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat ultrices nulla eget fringilla. Nullam iaculis ac ex ac aliquam. Suspendisse non convallis sem, quis vulputate purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sit amet fermentum ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mattis erat non nulla ultricies viverra. </Text>
                    </View>
                    <View style={styles.boxContent}>
                        <View style={styles.innerBox}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Surfing Spots</Text>
                            <FlatList 
                                data={this.state.data}
                                horizontal={true}
                                keyExtractor={this.state.data.id}
                                renderItem={this.pictA}
                                showsHorizontalScrollIndicator={false}
                            />
                            <Text style={{ marginTop: 8 }}>21 spots</Text>
                        </View>
                        <View style={styles.innerBox}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Surfing Shops</Text>
                            <Image source={{ uri: `https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg` }} style={styles.minipictA} />
                            <Text style={{ marginTop: 8 }}>21+ Shops</Text>

                        </View>
                        <View style={styles.innerBox}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Guides</Text>
                            <FlatList
                                data={this.state.dataGuide}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={this.pictB}
                            />
                            <Text style={{ marginTop: 8 }}>21+ Guides</Text>
                        </View>
                        <ImageBackground source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }} style={styles.innerBox} imageStyle={{ borderRadius: 15 }}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16, color: "#fff" }}>Surfing Spots</Text>
                        </ImageBackground>
                        <View style={styles.innerBoxOrder}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Order ?</Text>
                            {/* <Button title="Order" color="#841584" style={{ width: 20, borderRadius: 50 }} /> */}
                            <TouchableOpacity >
                                <View style={{ borderColor: "#fff", borderRadius: 150, width: 50,Height:50, padding: 20, borderWidth: 0.9 }}>
                                    <Text style={{ textAlign: "center" }}>></Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{ marginTop: 8 }}>Want to order this Trip</Text>
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
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: "12%", 
        marginTop: 40 
    },
    content:{
        marginHorizontal: 30,
        marginTop: 20
    },
    contentHead:{
        fontSize: 50,
        marginBottom: 15
    },
    boxContent:{
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: "5%", 
        marginVertical: 20
    },
    innerBox:{
        width: 140,
        height: 140,
        borderRadius: 15,
        backgroundColor: "#EEEEEE",
        margin: 5,
        padding: 20
    },
    innerBoxOrder: {
        width: 140,
        height: 140,
        borderRadius: 15,
        backgroundColor: "#4dd0e1",
        margin: 5,
        padding: 20,
        alignItems: "center"
    },
    minipictA:{
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 5
    },
    minipictB: {
        width: 50,
        height: 50,
        borderRadius: 150,
        marginRight: 5
    }
});