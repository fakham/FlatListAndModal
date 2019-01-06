import React, {Component} from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';

const screen = Dimensions.get('window');

class InfoModal extends Component {

    state = {
        name: '',
        job: ''
    }

    showInfoModal = (item, index) => {     
        this.setState(item);
        this.refs.myModal.open();
    } 

    render() {
        return (
            <Modal style={styles.modal} ref={"myModal"} position='center' backdrop={true}>
                <Text style={styles.text}>{this.state.name}</Text>
                <Text style={styles.text}>{this.state.job}</Text>
            </Modal>
        )
    }

}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        borderRadius: 20,
        shadowRadius: 2,
        height: 200,
        width: screen.width - 80
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    }
});

export default InfoModal;