import React, {Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import man from '../icons/man.png';

class FlatListItem extends Component {

    showInfo = () => {
        this.props.parentFlatList.refs.infoModal.showInfoModal(this.props.item, this);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.showInfo}>
                <View key={this.props.index} style={[{flat: 1, flexDirection: 'row'}, styles.item]}>
                    <Image source={man} style={{marginRight: 20}}/>
                    <View>
                        <Text style={styles.textItem}>{this.props.item.name}</Text>
                        <Text style={styles.textItem}>{this.props.item.job}</Text>
                    </View>
                </View>
                <View style={{backgroundColor: 'white', height: 1}}>

                </View>
            </TouchableOpacity>
            
        )
    }

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'mediumseagreen',
        padding: 20
    },
    textItem: {
        fontSize: 21,
        color: 'white'
    }
});

export default FlatListItem;