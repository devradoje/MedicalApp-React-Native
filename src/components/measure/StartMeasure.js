import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters'

export default class StartMeasure extends Component {

    onNextPress = () => {
        this.props.navigation.navigate('SeveralMeasure');
    }

    onManual = () => {
        this.props.navigation.navigate('ManualMeasure');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/start_measure_icon.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>Appuyez une fois sur le bouton START du tensiomètre s’il est éteint, deux fois s’il est allumé. 
                        {'\n\n'}Le tensiomètre va gonfler le brassard et le dégonfler lentement au cours de la prise de votre tension.
                        {'\n\n'}Une fois la mesure terminée, la tension s’affiche à l’écran.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>       
                    <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="C’est compris !" onPress={this.onNextPress}/>
                </View>
                <View style={styles.buttonContainer}>       
                    <Button buttonStyle={styles.manualButton} titleStyle={styles.manualButtonText} title="Saisie manuelle" onPress={this.onManual}/>
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
        marginTop: '80@vs'
    },
    top_image: {
        width: '100%',
        height: '150@vs'
    },
    detailContainer: {
        marginTop: '50@vs',
        paddingLeft: '50@s',
        paddingRight: '40@s',
        marginBottom: '40@vs'
    },
    detailText: {
        fontSize: '11@vs',
        color: '#202020',
        fontFamily: 'Open Sans',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        marginTop: '20@vs'
    },
    button:{
        backgroundColor: '#008DE6',
        height: '40@vs',
        borderRadius: 20,
    },
    buttonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: 'white',
        textAlign: 'center',
        fontSize: '15@vs'
    },
    manualButton:{
        backgroundColor: 'white',
        height: '40@vs',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#008DE6'
    },
    manualButtonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: '#008DE6',
        textAlign: 'center',
        fontSize: '15@vs'
    }
});
