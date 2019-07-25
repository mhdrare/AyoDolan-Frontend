import React, { Component, Fragment } from 'react';
import { View, Text,ScrollView,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class singleTransact extends Component {
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
                price: '2000'
            }]
        }
    }



    listMain = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('OrderPackage')}>
            <View style={{ padding: 10, backgroundColor: '#f2f2f2', margin: 10, borderRadius: 10}}>
                <Text style={{ marginLeft: 12, marginTop: 10, fontSize: 20, fontFamily: 'sans-serif-condensed' }}>{item.dest}</Text>
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
                <View style={{paddingTop: 40}}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.listMain}
                    />
                </View>
            </Fragment>
        )
    }
}

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