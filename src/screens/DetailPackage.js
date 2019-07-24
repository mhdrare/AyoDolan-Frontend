import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    Modal,
    Image,
    StyleSheet,
    StatusBar,
    FlatList,
    ScrollView
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                category: 'Wisata Alam',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                jarak: '107 m dari Mount Bromo',
                review: '(734 review)',
                price: 'Rp 300.000'
            },
            image: [
                {uri:'https://images.unsplash.com/photo-1540040496035-b3e1d8c127b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
                {uri:'https://images.unsplash.com/photo-1532518166026-5c82c8583b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'},
                {uri:'https://images.unsplash.com/photo-1531500510780-9847487a9518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
                {uri:'https://images.unsplash.com/photo-1509421063299-06b684502b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
            ],
            harga: [
                {
                    title: 'Open Trip (Warga Negara Indonesia) - Keberangkatan Malang',
                    price: 'Rp 300.000',
                    paspor: ''
                },
                {
                    title: 'Open Trip (Turis Asing) - Keberangkatan Malang - Hari Kerja',
                    price: 'Rp 492.000',
                    paspor: 'paspor'
                },
                {
                    title: 'Open Trip (Turis Asing) - Keberangkatan Malang - Akhir Pekan',
                    price: 'Rp 587.000',
                    paspor: 'paspor'
                }
            ],
            modalVisible: false,
            img: ''
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    listMain = ({ item }) =>(
        <TouchableOpacity 
            onPress={() => {
                this.setModalVisible(true);
                this.setState({img:item.uri});
            }} 
            style={{height:210,width:width*0.25,backgroundColor:'#fff',flexDirection:'row',alignSelf:'center',marginRight:2,borderRadius:5,elevation:3}}>  
            <Image source={{uri:item.uri}} style={{height:'100%',width:'100%',borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
        </TouchableOpacity>
    )
    listHarga = ({ item }) =>(
        <TouchableOpacity 
            style={{flex:1,height:110,width,flexDirection:'row',borderBottomWidth:2,borderColor:'#ddd'}}
        >  
            <View style={{flex:2,padding:10}}>
                <Text style={{fontSize:14,color:'#000'}}>{item.title}</Text> 
                <Text style={{fontSize:12,color:'#000'}}>{item.paspor}</Text> 
            </View>
            <View style={{flex:1,paddingTop:10,alignItems:'center'}}>
                <Text style={{color:'red'}}>{item.price}</Text> 
                <Text style={{color:'#00b8d4',marginTop:5}}>Lihat Detail</Text> 
            </View>
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                        <Image source={require('../assets/back.png')} style={{ width:25,height:20,marginRight:8 }} />
                    </TouchableOpacity>
                    <ScrollView
                        style={{flex:1,height:40,paddingVertical:8}} 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    >
                        <Text style={{fontSize:17,color:'#000'}}>{this.state.data.title}</Text>    
                    </ScrollView>
                    {/* <Image source={require('../assets/menu2.png')} style={{ width:23,height:23,borderRadius:10,marginLeft:8 }} /> */}
                </View>
                <ScrollView style={{flex:1}}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{width:'100%',height:235,zIndex:2,position:'absolute',top:height*0.3}}>
                            <Image source={{uri:this.state.img}} 
                            style={{height:'100%',width:'100%'}}/>
                        </View>
                        <TouchableOpacity
                            style={{width,height,zIndex:1,backgroundColor: 'black',opacity: 0.8}}
                            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                        </TouchableOpacity>
                    </Modal>

                    <View style={{marginBottom:2}}>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(true);
                            this.setState({img:'https://images.unsplash.com/photo-1493604480588-31082be2c411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=729&q=80'});
                        }} >
                             <Image source={{uri:'https://images.unsplash.com/photo-1493604480588-31082be2c411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=729&q=80'}} style={{height:235,width:'100%',borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>    
                        </TouchableOpacity>
                    </View>

                    <View style={{height:60}}>
                        <FlatList 
                            horizontal={true}
                            data={this.state.image}
                            renderItem={this.listMain}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item,index)=>index.toString()}
                        />
                    </View>

                    <View style={{height:108,paddingHorizontal:15,borderBottomWidth:2,borderColor:'#ddd'}}>
                        <Text style={{marginTop:15,color:'red'}}>{this.state.data.category}</Text>
                        <Text style={styles.title}>{this.state.data.title}</Text>
                        <Text style={{marginTop:3}}>{this.state.data.review}</Text>
                    </View>

                    <View style={{height:305,paddingHorizontal:15,paddingTop:20}}>
                        <Text style={[styles.title,{marginBottom:15}]}>Detail Perjalanan Tur</Text>
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>00:15-00:30 Penjemputan di area Malang (dapat dilakukan di hotel)</Text>
                        </View>
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>00:30-03:30 Perjalanan ke View Point Sunrise (penanjakan/Bukit Kingkong/alternatif lainnya tergantung situasi dan kondisi)</Text>
                        </View>
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>03:30-06:00 Tiba di View Point dan menyaksikan sunrise</Text>
                        </View>
                        <TouchableOpacity style={{alignSelf:'center',marginTop: 20}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'#00b8d4'}}>SELENGKAPNYA</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{borderBottomWidth:2,borderColor:'#ddd'}}>
                        <Text style={{marginTop:3,marginLeft:10,marginBottom:15,fontSize:18,color:'#000'}}>Harga</Text>
                        <FlatList 
                            data={this.state.harga}
                            renderItem={this.listHarga}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item,index)=>index.toString()}
                        />
                    </View>

                    <View style={{padding:15}}>
                        <Text style={{marginTop:3,fontSize:16,color:'#000',marginBottom:15}}>Ringkasan</Text> 
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>Saksikan keindahan matahari terbit di atas Gunung Bromo dari View Point Penanjakan</Text>
                        </View>
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>Jelajahi tempat-tempat menarik lainnya di taman nasional seperti Pasir Berbisik and Bukit Teletubbies</Text>
                        </View>
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>Berfoto dengan latar belakang alam yang fotogenik</Text>
                        </View>
                        <View style={styles.tur}>
                            <Text style={styles.point}>.</Text>
                            <Text style={styles.text}>Nikmati kemudahan perjalanan dengan layanan antar-jemput dari dan ke hotel Anda</Text>
                        </View>
                    </View>
                    <View style={{height:45,backgroundColor:'#ddd',justifyContent:'center',alignItems:'center'}}>
                        <Text>Cocok untuk: Petualang, Keajaiban Alam </Text>
                    </View>
                </ScrollView>

                <View style={{height:70,borderTopWidth:2,borderColor:'#ddd',flexDirection:'row'}}>
                    <View style={{flex:1,margin:10,marginHorizontal:20}}>
                        <Text style={{color:'#000'}}>Mulai dari</Text>
                        <Text style={{color:'red',fontSize:17}}>{this.state.data.price}</Text>
                    </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                       <TouchableOpacity style={{width:'80%',backgroundColor:'#00b8d4',alignItems:'center',borderRadius:5}}>
                           <Text style={{margin:10,color:'#fff'}}>Cari Pilihan</Text>
                       </TouchableOpacity>
                   </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width,
        height,
        backgroundColor:'#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:15,
        paddingVertical: 25,
        width,
        height:55,
        alignItems: 'center',
    },
    title: {marginTop:3,fontSize:15,fontWeight:'bold',color:'#000'},
    point: {marginTop:3,backgroundColor:'#00b8d4',color:'#00b8d4',marginRight:15},
    text: {marginTop:3,fontSize:15},
    tur: {flexDirection:'row',marginBottom:7}
})