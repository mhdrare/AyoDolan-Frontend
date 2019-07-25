import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import QRCode from 'react-native-qrcode';
import { Fab, Icon } from "native-base";
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.navigation.state.params
        }
        console.log("this.props.navigation.state.params");
        console.log(this.props.navigation.state.params);
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/back.png')} style={{ width:25,height:20,marginRight:8 }} />
                    <ScrollView
                        style={{flex:1,height:40,paddingVertical:8}} 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    >
                        <Text style={{fontSize:17,color:'#000'}}>{this.state.data.destination}</Text>    
                    </ScrollView>    
                    <Text style={{fontSize:17,color:'#fff',alignSelf:'center'}}>.</Text>    
                </View>
                <ScrollView>

                    <View style={styles.qr}>
                        <View style={{flexDirection:'row',width,marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'#000',fontSize:16}}>Kode Booking : </Text>
                            <Text style={{color:'#00b8d4',fontSize:17}}>{this.state.data.id_transaksi}</Text>
                        </View>
                        <QRCode
                            value={this.state.data.id_transaksi.toString()}
                            size={150}
                            bgColor='#000'
                            fgColor='white'
                        />
                    </View>

                    <View style={{width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,padding:10,fontWeight:'bold'}}>Your Package</Text>
                    </View>
                    <View style={styles.pack}>
                        <View style={{flex:2,flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <Image source={{uri:this.state.data.image_destination}} style={{height:'100%',width:'100%',borderTopLeftRadius:5}}/>
                            </View>
                            <View style={{flex:3,padding:10}}>
                                <ScrollView
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Text style={{fontSize:17,color:'#000',fontWeight:'bold'}}>{this.state.data.destination}</Text>
                                </ScrollView>
                                <ScrollView
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Text>{this.state.data.destination}</Text>
                                </ScrollView>
                                <Text>Jumlah : 4 Orang</Text>
                            </View>
                        </View>
                        <View style={styles.discount}>
                            <Text style={{color:'#fff',fontSize:17}}>Potongan : 10%</Text>
                        </View>
                    </View>
                    
                    {/* Detail Pemesan */}
                    <View style={{width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,padding:10,fontWeight:'bold'}}>Detail Pemesan</Text>
                    </View>
                    <View style={styles.pemesan}>
                        <View style={styles.data}>
                            <Text>Name</Text>
                            <Text>{this.state.data.guide_name}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text>No. Handphone</Text>
                            <Text>{this.state.data.phone_guide}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text>Email</Text>
                            <Text>{this.state.data.email_guide}</Text>
                        </View>
                    </View>

                    <View style={{width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,padding:10,fontWeight:'bold'}}>Tanggal Kunjungan</Text>
                    </View>
                    <View style={styles.pack}>
                        <View style={{flex:1,flexDirection:'row',width:'100%',alignItems:'center',marginLeft:40}}>
                            <Image source={require('../assets/calendar.png')} style={{ width:25,height:25,marginRight:8 }} />
                            <Text>{this.state.data.date}</Text>
                        </View>
                        <View style={styles.warn}>
                            <Image source={require('../assets/warning.png')} style={{ width:25,height:25,marginRight:8,marginLeft:20,alignSelf:'center'}} />
                            <Text style={{width:width*0.8,color:'#fff'}}>Hanya berlaku pada tanggal Kunjungan yang dipilih</Text>
                        </View>
                    </View>

                    <View style={{width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,padding:10,fontWeight:'bold'}}>Rincian Harga</Text>
                    </View>
                    <View style={[styles.pack,{height:60}]}>
                        <View style={styles.price}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Harga</Text>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{this.state.data.price}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Lanjutkan</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Fab
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: "#FFFCFC", marginBottom:25 }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate("Chat", this.state.data)}
                >
                <Icon name="ios-chatboxes" style={{ color: "#4dd0e1" }} />
                </Fab>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor:'#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        paddingVertical: 10,
        width,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    qr: {
        height:220,
        width:width*0.95,
        backgroundColor:'#fff',
        margin:10,
        marginBottom:0,
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        elevation:3
    },
    pack: {
        height:150,
        width:width*0.95,
        backgroundColor:'#fff',
        marginHorizontal:10,
        marginVertical:0,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        elevation:3
    },
    discount: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#4dd0e1',
        width:'100%',
        paddingLeft:15,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    pemesan: {
        height:150,
        width:width*0.95,
        backgroundColor:'#fff',
        marginHorizontal:10,
        marginVertical:0,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        elevation:3,
        padding:20
    },
    data: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#4dd0e1',
        alignItems:'center'
    },
    warn: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'#4dd0e1',
        justifyContent:'space-between',
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#4dd0e1',
        alignItems:'center',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    price: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:20,
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    btn: {
        flex:1,
        flexDirection:'row',
        height:50,
        width:width*0.95,
        marginHorizontal:10,
        marginTop:20,
        marginBottom:30,
        backgroundColor:'#4dd0e1',
        paddingHorizontal:20,
        justifyContent:'center',
        borderRadius:7,
        alignItems:'center',
        elevation:3
    }
})