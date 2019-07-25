import React, { Component, Fragment } from 'react';
import { View, Text,ScrollView,TouchableOpacity,StyleSheet,FlatList,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { getTransaksi} from '../public/redux/action/transaksi';
import { connect } from "react-redux";
import moment from "moment"

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
                id: 1,
                dest: 'Sleman-Pogung',
                date: '2015-06-09',
                price: '2000'
            },
            {
                id: 2,
                dest: 'Sleman-Pogung',
                date: '2015-06-09',
                price: '10000'
            }],
        }
    }

    fatchData = async() =>{
        let id = await AsyncStorage.getItem('user_id')
        this.props.dispatch(getTransaksi(id))
    }

    componentDidMount = ( ) =>{
        this.fatchData()
    }

    movePage = async (data) =>{
        let id = await AsyncStorage.getItem('user_id')

        let value = {
            id: id,
            date: data.date,
            price: data.price_order,
            va: data.virtual_account,
            id_destination: data.id_destination,
            id_transaksi: data.id_transaksi,
        }

        this.props.navigation.navigate('confirmPayment',{data:value})
    }

    listMain = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() =>this.movePage(item)}>
            <View style={{ padding: 10, backgroundColor: '#f2f2f2', margin: 10, borderRadius: 10}}>
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 20, fontFamily: 'sans-serif-condensed' }}>{item.virtual_account}</Text>
                {item.keterangan === "pending" ?
                    <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15, color:'#bf463b',textTransform:'capitalize' }}>{item.keterangan}</Text>
                :
                    <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15, color:'#3fcc60',textTransform:'capitalize' }}>{item.keterangan}</Text>
                }
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15 }}>Rp. {item.price_order}</Text>
                <Text style={{ marginLeft: 12, marginTop: 10, textAlign: 'right', fontFamily: 'sans-serif-thin' }}>{moment(item.date).format('DD - MM - YYYY') }</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        console.log(this.props.transaksi.data)
        return (
            <Fragment>
                <View style={component.header}>
                    <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='left' size={24}/>
                    </TouchableOpacity>
                    <Text style={text.headerTitle}>{'Transaction'.toUpperCase()}</Text>
                </View>
                <View style={{paddingTop: 40}}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.props.transaksi.data}
                        renderItem={this.listMain}
                    />
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      transaksi: state.transaksi
    };
  };
  
export default connect(mapStateToProps)(Transaction);

const text = StyleSheet.create({
    headerTitle: {
        flex: 1, 
        fontFamily: 'sans-serif-thin', 
        fontSize: 18,
        textAlign: 'right'
    }
})

const component = StyleSheet.create({
    header: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 20,
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderBottomColor: '#f2f2f2'
    }
})