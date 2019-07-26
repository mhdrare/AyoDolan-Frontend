import React, { Component, Fragment } from 'react';
import { View, ActivityIndicator, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, AsyncStorage, Image} from 'react-native';
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

    async componentDidMount(){
        let id = await AsyncStorage.getItem("id");
        await this.props.dispatch(getOrder(id))
    }

    listMain = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('OrderPackage', item)}>
            <View style={{ padding: 10, backgroundColor: '#f2f2f2', margin: 10, borderRadius: 10}}>
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 20, fontFamily: 'sans-serif-condensed' }}>{item.destination}</Text>
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 15 }}>Rp. {item.price}</Text>
                <Text style={{ marginLeft: 12, marginTop: 10, textAlign: 'right', fontFamily: 'sans-serif-thin' }}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        
        return (
            <Fragment>
                <View style={component.header}>
                    <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='left' size={24}/>
                    </TouchableOpacity>
                    <Text style={text.headerTitle}>{'History'.toUpperCase()}</Text>
                </View>
                { this.props.order.isLoading ? 
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#4dd0e1"/>
                        <Image source={require('../assets/loading.png')} style={{ width: '100%', height: 400}}/>
                    </View> :
                    <View style={{paddingTop: 40}}>
                        <FlatList
                            data={this.props.order.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.listMain}
                        />
                    </View>
                }
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