import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import QRCode from 'react-native-qrcode';
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                category: 'Wisata Alam',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                paket: 'Open Trip (Warga Negara Indonesia) - Keberangkatan Malang',
                jarak: '107 m dari Mount Bromo',
                review: '(734 review)',
                price: 'Rp 300.000',
                img: 'https://images.unsplash.com/photo-1540040496035-b3e1d8c127b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                code: 'HVX7E1A'
            }
        }
    }
    // listMain = ({ item }) =>(
    //     <TouchableOpacity style={{height:210,width:width*0.92,backgroundColor:'#fff',flexDirection:'row',alignSelf:'center',marginTop:5,marginBottom:5,borderRadius:5,elevation:3}}>  
    //         <View style={{flex:1}}>
    //             <Image source={{uri:item.img}} style={{height:'100%',width:'100%',borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
    //         </View>
    //         <View style={{flex:2,padding:10}}>
    //             <Text style={{color:'red'}}>{item.category}</Text>
    //             <Text style={{color:'#000',fontSize:14,fontWeight:'bold',marginTop:10}}>{item.title}</Text>
    //             <Text style={{color:'#444',marginTop:8}}>{item.jarak}</Text>
    //             <Text style={{color:'#393939',marginTop:8}}>{item.review}</Text>
    //             <Text style={{color:'red',fontSize:19,marginTop:25}}>{item.price}</Text>
    //         </View>
    //     </TouchableOpacity>
    // )
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
                    <View style={{height:220,width:width*0.95,backgroundColor:'#fff',margin:10,alignItems:'center',justifyContent:'center',borderRadius:7,elevation:3}}>
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
                    <View style={{flexDirection:'row',height:130,width:width*0.95,backgroundColor:'#fff',margin:10,marginTop:0,alignItems:'center',justifyContent:'center',borderRadius:7,elevation:3}}>
                        <View>
                            <View style={{flex:1}}>
                                <Image source={{uri:this.state.data.img}} style={{height:'100%',width:'100%'}}/>
                            </View>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:17,Color:'#000',fontWeight:'bold'}}>{this.state.data.title}</Text>
                                <Text>{this.state.data.paket}</Text>
                                <Text>Jumlah : 4 Orang</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Potongan 10%</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor:'#f1f1f1',
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
})