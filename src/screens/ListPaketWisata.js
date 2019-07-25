import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native';
import {getPaket} from '../public/redux/action/paket'
import { connect } from "react-redux"

const { width, height } = Dimensions.get('window');

class ListPaketWisata extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.navigation.state.params
        }
    }

    fetchdata = () =>{
        let id = this.state.id
        this.props.dispatch(getPaket(id))
    }

    formatNumber = nums => {
        return nums.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    componentDidMount(){
        this.fetchdata()
    }

    listMain = ({ item }) =>(
        <TouchableOpacity style={{height:150,width:width*0.92,backgroundColor:'#fff', flexDirection:'row', alignSelf:'center', marginTop:5, marginBottom:5,borderRadius:5,elevation:3}}
            onPress={() => this.props.navigation.navigate('DetailPackage', item)}>  
            <View style={{flex:1}}>
                <Image source={{uri:item.image}} style={{height:'100%',width:'100%',borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
            </View>
            <View style={component.descriptionPackage}>
                <Text style={text.namePackage}>{item.nama_paket}</Text>
                <Text style={{color:'#444', flex: 1}}>Paket 4 orang {'\n'}Cocok untuk Keluarga</Text>
                <View style={{flexDirection: 'row', flex: 2, alignItems: 'flex-end'}}>
                    <View style={{flex: 1}} />
                    <Text style={{color:'red', fontSize:19, flex: 1, textAlign: 'right'}}>
                        Rp {this.formatNumber(item.price)}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Image source={require('../assets/back.png')} style={{ width:25,height:20 }} />
                    </TouchableOpacity>
                    <Text style={{fontSize:17,color:'#000',alignSelf:'center'}}>List Package</Text>    
                    <Text style={{fontSize:17,color:'#fff',alignSelf:'center'}}>.</Text>    
                    {/* <Image source={require('../assets/menu2.png')} style={{ width:23,height:23,borderRadius:10,marginLeft:8 }} /> */}
                </View>
                <View style={{paddingBottom:90}}>
                    { console.log(this.listMain) }
                    <FlatList
                        data={this.props.paket.data}
                        renderItem={this.listMain}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      paket: state.paket
      // auth: state.auth
    };
  };
  
export default connect(mapStateToProps)(ListPaketWisata);

const component = StyleSheet.create({
    descriptionPackage: {
        flex:2,
        padding:10
    }
})

const text = StyleSheet.create({
    namePackage: {
        color:'red', 
        textTransform: 'capitalize', 
        fontFamily: 'sans-serif-medium', 
        fontSize: 20,
        flex: 1
    }
})

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