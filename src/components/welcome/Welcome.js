import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters'

export default class Welcome extends Component {

    onButtonPress = () => {
        this.props.navigation.navigate('Mode');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/doctor_icon.png')} 
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>BIENVENUE</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>sur votre application de dépistage de l'hypertension artérielle</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>
                        Cette application va vous permettre de calculer votre risque de devenir hypertendu à horizon 5 ans, de faire un point sur vos habitudes alimentaires et notamment votre consommation, potentiellement excessive de sel.{"\n\n"}
                        Et enfin, si vous prenez un traitement de mesurer votre observance et les facteurs explicatifs de votre inobservance le cas échéant.{"\n\n"}
                    </Text>
                    <Text style={[styles.detailText, {fontFamily: 'GalanoGrotesque-ExtraBold', color: 'black'}]}>
                        Laissez vous guider, suivez chaque étape, nous vous prenons en charge.
                    </Text>
                </View>
                <View style={styles.loginForm}>                    
                    <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Commencer" onPress={this.onButtonPress}/>
                </View>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    top: {
        width: '100%',
        marginTop: '40@vs'
    },
    top_image: {
        width: '100%',
        height: '140@vs'
    },
    titleContainer: {
        marginTop: '30@vs'
    },
    titleText: {
        fontSize: '30@vs',
        color: '#008DE6',
        fontFamily: 'GalanoGrotesque-ExtraBold',
    },
    descContainer: {
        marginTop: '10@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descText: {
        fontSize: '15@vs',
        color: '#008DE6',
        fontFamily: 'GalanoGrotesque-Regular',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        textAlign: 'center'
    },
    detailContainer: {
        marginTop: '30@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailText: {
        fontSize: '12@vs',
        fontFamily: 'GalanoGrotesque-Regular',
        paddingLeft: '40@s',
        paddingRight: '40@s',
    },
    loginForm: {
        width: '100%',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        marginTop: '30@vs'
    },
    button:{
        backgroundColor: '#008DE6',
        height: '40@vs',
        borderRadius: 20,
        marginTop: '10@vs'
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'GalanoGrotesqueAlt-Medium',
        fontSize: '15@vs'
    }
});
