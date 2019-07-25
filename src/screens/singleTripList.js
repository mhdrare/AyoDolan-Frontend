import React, { Component, Fragment } from 'react';
import { View, Text,ScrollView,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {getOrder} from '../public/redux/action/order'
import { connect } from "react-redux"


class singleTripList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.order.data
        }
    }

    componentDidMount(){
        this.props.dispatch(getOrder(this.props.users.data.user_id))
    }


    _keyExtractor = (item, index) => item.id_order;

    listMain = ({ item }) => (
        <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('OrderPackage', item)}>
            <View style={{ padding: 40, borderBottomColor: "#EEEEEE", borderWidth: 0.3 }}>
                <Text style={{ margingLeft: 12, marginTop: 10, fontSize: 25 }}>{item.destination}</Text>
                <Text style={{ margingLeft: 12, marginTop: 10, fontSize: 15 }}>Rp. {item.price_order}</Text>
                <Text style={{ margingLeft: 12, marginTop: 10, textAlign: "right" }}>{item.date}</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
    )

    render() {
        console.log("this.props.order.data");
        console.log(this.props.order.data);
        
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: "12%", marginTop: 40, marginBottom: 20 }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Icon name="arrowleft" size={30} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 28 }}>Riwayat</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                        data={this.props.order.data}
                        renderItem={this.listMain}
                        keyExtractor={this._keyExtractor}
                        />
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      order: state.order,
      users: state.users
    };
  };
  
export default connect(mapStateToProps)(singleTripList);

const styles = StyleSheet.create({
    container: {
        display: "flex",
    }

});