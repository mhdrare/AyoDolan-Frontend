import React, { Component, Fragment } from 'react';
import { View, Text,ScrollView,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class singleTransact extends Component {
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
            }]
        }
    }



    listMain = ({ item }) => (
        <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('OrderPackage')}>
            <View style={{ padding: 40, borderBottomColor: "#EEEEEE", borderWidth: 0.3 }}>
                <Text style={{ margingLeft: 12, marginTop: 10, fontSize: 25 }}>{item.dest}</Text>
                <Text style={{ margingLeft: 12, marginTop: 10, fontSize: 15 }}>Rp. {item.price}</Text>
                <Text style={{ margingLeft: 12, marginTop: 10, textAlign: "right" }}>{item.date}</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
    )

    render() {
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
                        data={this.state.data}
                        renderItem={this.listMain}
                        />
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    }

});