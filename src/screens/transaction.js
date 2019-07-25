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
            data: [{
                id: 1,
                dest: 'Sleman-Pogung',
                date: '2015-06-09',
                price: '2000'
            },
            {
                id: 2,
                dest: 'Sleman-Jak',
                date: '2015-06-09',
                price: '2100'
            },
            {
                id: 3,
                dest: 'kidul-Pogung',
                date: '2015-06-09',
                price: '2500'
            },
            {
                id: 4,
                dest: 'Sleman-Kidul',
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
        <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onPress={() =>this.movePage(item)}>
            <View style={{ padding: 40, borderBottomColor: "#EEEEEE", borderWidth: 0.3 }}>
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 25 }}>{item.virtual_account}</Text>
                {item.keterangan === "pending" ?
                    <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15, color:'#bf463b',textTransform:'capitalize' }}>{item.keterangan}</Text>
                :
                    <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15, color:'#3fcc60',textTransform:'capitalize' }}>{item.keterangan}</Text>
                }
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15 }}>Rp. {item.price_order}</Text>
                <Text style={{ marginLeft: 12, marginTop: 10, textAlign: "right" }}>{moment(item.date).format('DD - MM - YYYY') }</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
    )

    render() {
        console.log(this.props.transaksi.data)
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "12%", marginTop: 10, marginBottom: 5 }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Icon name="arrowleft" size={30} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 24 }}>Transaction</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                        data={this.props.transaksi.data}
                        renderItem={this.listMain}
                        />
                    </View>
                </ScrollView>
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


const styles = StyleSheet.create({
    container: {
        display: "flex",
    }

});