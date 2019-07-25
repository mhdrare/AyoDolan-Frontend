import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {IPAYMU_API_KEY} from 'react-native-dotenv';
import phoneID from '../store/phoneID';
import axios from 'axios';

export default class singleTransact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.getParam('data'),
            va: '',
            processing: false,
            stat: ''
        }
    }

    orderNow = () =>{
        // alert('hello');

        this.setState({ processing: true });

        let data = {
                key: IPAYMU_API_KEY,
                price: this.state.data.price,
                uniqid: "1",
                notify_url: "http://websiteanda.com/notify.php"
            }

        axios.post("https://my.ipaymu.com/api/getbniva", data).then(res => {
            // alert(JSON.stringify(res.data));
            this.setState({ va: res.data.va, processing: false, stat: 'finish' });
        }).catch(error => {
            alert('transaction failed'+JSON.stringify(error));
        });
    }

    MonthFormat = (month=0) =>{

        let newDate;

        if (month == 1) {
            newDate = 'jan';
        }
        else if (month == 2) {
            newDate = 'feb';

        }
        else if (month == 3) {
            newDate = 'mar';

        }
        else if (month == 4) {
            newDate = 'apr';

        }
        else if (month == 5) {
            newDate = 'may';

        }
        else if (month == 6) {
            newDate = 'jun';

        }
        else if (month == 7) {
            newDate = 'jul';

        }
        else if (month == 8) {
            newDate = 'aug';

        }
        else if (month == 9) {
            newDate = 'sep';

        }
        else if (month == 10) {
            newDate = 'oct';

        }
        else if (month == 11) {
            newDate = 'nov';

        }
        else if (month == 12) {
            newDate = 'dec';

        }
        else {
            newDate = 'jan';

        }

        return newDate;
    }

    DateNow = (mode='showcase') =>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        if(mode == 'showcase')
        {
            today = dd + ' ' + this.MonthFormat(mm) +' '+ yyyy;
        }
        else if(mode == 'sql')
        {
            today = yyyy + '-' + mm + '-' + dd;
        }

        return today;
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

    formatNumber = nums => {
        return nums.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    render() {
        // console.warn("[single GET] : "+JSON.stringify(this.state.data));
        console.warn("Phone ID notification : ",phoneID.phoneID);
        return (
            <Fragment>
                <ImageBackground source={require('../img/bgb.png')} style={{ width: "100%", height: "100%" }}>

                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "12%", marginTop: 40, marginBottom: 20 }}>
                            {/* <Text>back</Text> */}
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrowleft" size={30} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 28 }}>Payment</Text>
                        </View>
                    </View>
                    <View style={styles.containt}>
                        <View>
                            <Text style={{ fontSize: 20, marginBottom: 15 }}>{this.state.data.destination}</Text>
                        </View>
                        <View style={styles.PaymentContent}>
                            <View style={styles.PaymentTitle}>
                                <Text>Price</Text>
                                <Text style={styles.money}>Rp. {this.formatNumber(this.state.data.price)}</Text>
                            </View>
                            <View style={styles.PaymentValue}>
                                <Text>Order Date</Text>
                                <Text style={styles.dates}>{this.DateNow('showcase')}</Text>
                            </View>
                        </View>
                    </View>
                    {
                        this.state.va != ''
                        ?
                            <View style={styles.containt}>
                                <View>
                                    <Text style={{ fontSize: 20, marginBottom: 15, textAlign: "center" }}>Please Complete your payment via BNI</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 40, marginBottom: 15, textAlign: "center" }}>VA: {this.state.va}</Text>
                                </View>
                            </View>
                        :
                        null
                    }
                    
                </ScrollView>
                <View style={{ flex: 1 }}>
                    {/* <View><Text>my text</Text></View> */}
                    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#81C784", padding: 20 }}>
                        {
                        this.state.processing
                        ?
                            <Text style={{ textAlign: "center", fontSize: 20 }}>Processing...</Text>
                        :
                            this.state.stat == ''
                            ?
                            <TouchableOpacity onPress={() => {this.orderNow()}}>
                                <Text style={{ textAlign: "center", fontSize: 20 }}>Order Now</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { alert('comming soon') }}>
                                <Text style={{ textAlign: "center", fontSize: 20 }}>Go to order list</Text>
                            </TouchableOpacity>

                        }
                    </View>
                </View>
                </ImageBackground>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    btnA:{
        borderWidth: 0.3,
        borderColor: "#fff",
        width: "100%",
        marginHorizontal: 16,
        padding: 15,
        borderRadius: 15,
        backgroundColor: "#C5E1A5"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 40
    },
    dates:{
        marginTop: 5,
        fontSize: 20
    },
    AdditionTitle:{
        flex: 1,
        fontSize: 15
    },
    AdditionValue:{
        flex: 1,
        fontSize: 25

    },
    money:{
        marginTop: 12,
        fontSize: 30
    },
    PaymentTitle:{
        flex: 1,
        fontSize: 20,
        fontWeight: "bold"
    },
    PaymentValue:{
        flex: 1,
        marginLeft: 25,
        textAlign: "right",
        fontSize: 20,
        alignItems: "flex-end"
    },
    containt:{
        marginTop: 15,
        marginBottom: 20,
        // marginHorizontal: "5%",
        marginLeft: "5%",
        borderRadius: 15,
        width: "90%",
        height: 160,
        backgroundColor: "#EEEEEE",
        padding: 20
        
    },
    containtB:{
        marginTop: 5,
        flexDirection: "row",
        padding: 3

    },
    PaymentContent:{
        flexDirection:"row",
        margin: 15
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