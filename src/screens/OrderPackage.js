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
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                name: 'Rizqi',
                phone: '+6287345987123',
                email: 'rizqi@live.com',
                time: 'Sab, 27 Jul 2019',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                paket: 'Open Trip (Warga Negara Indonesia) - Keberangkatan Malang',
                price: 'Rp 300.000',
                img: 'https://images.unsplash.com/photo-1540040496035-b3e1d8c127b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                code: 'HVX7E1A'
            }
        }
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
                        <Text style={{fontSize:17,color:'#000'}}>{this.state.data.title}</Text>    
                    </ScrollView>    
                    <Text style={{fontSize:17,color:'#fff',alignSelf:'center'}}>.</Text>    
                    {/* <Image source={require('../assets/menu2.png')} style={{ width:23,height:23,borderRadius:10,marginLeft:8 }} /> */}
                </View>
                <ScrollView>

                    {/* QRCode */}
                    <View style={styles.qr}>
                        <View style={{flexDirection:'row',width,marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'#000',fontSize:16}}>Kode Booking : </Text>
                            <Text style={{color:'#00b8d4',fontSize:17}}>{this.state.data.code}</Text>
                        </View>
                        <QRCode
                            value={this.state.data.code}
                            size={150}
                            bgColor='#000'
                            fgColor='white'
                        />
                    </View>

                    {/* Your Package */}
                    <View style={{width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,padding:10,fontWeight:'bold'}}>Your Package</Text>
                    </View>
                    <View style={styles.pack}>
                        <View style={{flex:2,flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <Image source={{uri:this.state.data.img}} style={{height:'100%',width:'100%',borderTopLeftRadius:5}}/>
                            </View>
                            <View style={{flex:3,padding:10}}>
                                <ScrollView
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Text style={{fontSize:17,color:'#000',fontWeight:'bold'}}>{this.state.data.title}</Text>
                                </ScrollView>
                                <ScrollView
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Text>{this.state.data.paket}</Text>
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
                            <Text>{this.state.data.name}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text>No. Handphone</Text>
                            <Text>{this.state.data.phone}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text>Email</Text>
                            <Text>{this.state.data.email}</Text>
                        </View>
                    </View>

                    {/* Tanggal Kunjungan */}
                    <View style={{width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,padding:10,fontWeight:'bold'}}>Tanggal Kunjungan</Text>
                    </View>
                    <View style={styles.pack}>
                        <View style={{flex:1,flexDirection:'row',width:'100%',alignItems:'center',marginLeft:40}}>
                            <Image source={require('../assets/calendar.png')} style={{ width:25,height:25,marginRight:8 }} />
                            <Text>{this.state.data.time}</Text>
                        </View>
                        <View style={styles.warn}>
                            <Image source={require('../assets/warning.png')} style={{ width:25,height:25,marginRight:8,marginLeft:20,alignSelf:'center'}} />
                            <Text style={{width:width*0.8,color:'#fff'}}>Hanya berlaku pada tanggal Kunjungan yang dipilih</Text>
                        </View>
                    </View>

                    {/* Rincian Harga */}
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