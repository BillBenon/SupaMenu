import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../util/colors';


export default function SearchScreen(props: any) {
    const [text, setText] = React.useState('');

    const searchSubmit = () => {
        props.navigation.navigate('ChooseRestaurant', { search: text });
    };

    return (
        <View style={styles.container}>
            <SearchBar
                style={styles.input}
                onChangeText={(newText: string) => setText(newText)}
                round
                inputStyle={{ color: Colors.default}}
                // iconColor={Colors.default}
                onSubmitEditing={searchSubmit}
                // leftIconContainerStyle={{ color: Colors.default, fontSize: 100 }}
                // inputContainerStyle={{ backgroundColor: colors.white }}
                // containerStyle={{ backgroundColor: Colors.default, border: 0 }}
                // inputStyle={{ backgroundColor: colors.white }}
                platform="default"
                placeholder="Search for your preferred restaurant"
                value={text}
            />
            <View style={styles.desc}>
                <Text style={styles.middleText}>or</Text>
                <Image
                    source={require('../../assets/qr-code.png')}
                    style={styles.img}
                />
                <Text style={styles.bottomText}>Scan, Pay & Enjoy!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomText: {
        fontSize: 20,
        // fontWeight: 'bold',
        marginTop: 20,
    },
    container: {
        alignItems: 'center',
        backgroundColor: Colors.default,
        height: '100%',
        paddingTop: 100,
        // width: '100%',
        // display: "flex",
    },
    desc: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        marginTop: 60,
        width: 100,
    },
    input: {
        width: 300,
    },
    middleText: {
        alignItems: 'center',
        color: '#171717',
        flexDirection: 'row',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 60,
        paddingTop:10,
    },
});
