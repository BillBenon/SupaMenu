import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../util/colors';

export default function PaymentSuccess() {
    const imageSource = require('../../assets/transaction-success.png');
    return (
        <View style={styles.container}>
            <View style={styles.mb}>
                <Image source={imageSource} style={styles.icon as ImageStyle} />
            </View>
            <View style={[styles.mb, { marginTop: -40 }]}>
                <Text style={styles.centered}>
          Payment success Yayy! {'\n'}
                </Text>
                <Text style={[styles.centered, { marginTop: 20, fontWeight: 'normal', color: colors.white }]}>
          we will send you order details and invoice in {'\n'}
          your contact no. and registered email
                </Text>
            </View>
            <View style={[styles.mb, { display: 'flex', flexDirection: 'row', justifyContent: 'center' }]}>
                <Text style={{ color: '#C3744D', marginRight: 12 }}>
          Check Details
                </Text>
                <Icon name="arrow-right" size={20} color="#C3744D" />
            </View>
            <View style={styles.mb}>
                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download Invoice</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mb}>
                <Image source={require('../../assets/yellow-logo.svg')} style={styles.image as ImageStyle} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        color: '#F7941D',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#000000',
        height: '100%',
        padding: '15%',
        paddingTop: '5%',
        width: '100%',
    },
    downloadButton:{
        alignItems: 'center',
        backgroundColor: '#F7941D',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        margin: 'auto',
        width: 250
    },
    downloadButtonText: {
        color: colors.white,
        fontWeight: "500"
    },
    icon: {
        height: 250,
        margin: 'auto',
        resizeMode: 'contain',
        width: 400
    },
    image: {
        height: 67,
        margin: 'auto',
        resizeMode: 'contain',
        width: 331
    },
    mb: {
        marginBottom: '30%',
    }
});
