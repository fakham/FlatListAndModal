import React, {Component} from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import FlatListData from '../data/FlatListData';
import FlatListItem from './FlatListItem';
import InfoModal from './InfoModal';

class MyFlatList extends Component {

    render() {
        return (
            <View>
                <FlatList
                    data={FlatListData}
                    renderItem={({item, index}) => {
                        return(
                            <FlatListItem item={item} index={index} key={index} parentFlatList={this}>

                            </FlatListItem>
                        );
                    }}
                >

                </FlatList>
                <InfoModal ref={'infoModal'} parentFlatList={this}>

                </InfoModal>
            </View>
        )
    }

}

export default MyFlatList;