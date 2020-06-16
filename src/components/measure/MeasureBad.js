import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'
import { BoxShadow } from 'react-native-shadow'

export default class MeasureBad extends Component {

    onNextPress = () => {

    }
    
    onBackPress = () => {

    }

    render() {
        const shadowOpt = {
            width: scale(250),
            height: verticalScale(40),
            color:"#000",
            border:2,
            radius:20,
            opacity:0.2,
            x:2,
            y:3
        };
        return (
            <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/measure_warning.png')} 
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Encore quelques efforts ! </Text>
                </View>
                <View style={styles.valueContainer}>
                    <View style={styles.valueRow}>
                        <Text style={styles.valueName}>Systolic</Text>
                        <Text style={styles.valueText}>144</Text>
                    </View>
                    <View style={styles.valueRow}>
                        <Text style={styles.valueName}>Diastolic</Text>
                        <Text style={styles.valueText}>255</Text>
                    </View>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>
                        Votre niveau de pression artériele est presque satisfaisant. 
                        {'\n\n'}Nous vous conseillons de poursuivre votre prise en charge actuelle.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>                    
                    <BoxShadow setting={shadowOpt}>
                        <Button buttonStyle={styles.nextButton} titleStyle={styles.nextButtonText} title="Continuer le dépistage" onPress={this.onNextPress}/>
                    </BoxShadow>
                </View>
                <View style={styles.buttonContainer}>    
                    <BoxShadow setting={shadowOpt}>
                        <Button buttonStyle={styles.backButton} titleStyle={styles.backButtonText} title="Retour à l’accueil" onPress={this.onBackPress}/>
                    </BoxShadow>
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
        backgroundColor: '#008DE6'
    },
    top: {
        width: '100%',
        marginTop: '80@vs'
    },
    top_image: {
        width: '100%',
        height: '150@vs'
    },
    titleContainer: {
        marginTop: '20@vs'
    },
    titleText: {
        fontSize: '16@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold'
    },
    valueContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '50@s',
        paddingRight: '50@s',
        width: '100%',
        marginTop: '30@vs'
    },
    valueRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10@vs'
    },
    valueName: {
        fontSize: '16@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold'
    },
    valueText: {
        fontSize: '14@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesque-Medium'
    },
    descContainer: {
        marginTop: '20@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10@vs',
        width: '100%'
    },
    descText: {
        fontSize: '12@vs',
        color: 'white',
        fontFamily: 'Open Sans',
        paddingLeft: '50@s',
        paddingRight: '50@s',
        textAlign: 'center',
        width: '100%'
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '50@s',
        paddingRight: '50@s',
        marginTop: '20@vs'
    },
    nextButton:{
        backgroundColor: 'white',
        height: '40@vs',
        borderRadius: 20,
    },
    nextButtonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: '#008DE6',
        textAlign: 'center',
        fontSize: '15@vs'
    },
    backButton:{
        backgroundColor: '#008DE6',
        borderWidth: 2,
        borderColor: 'white',
        height: '40@vs',
        borderRadius: 20,
    },
    backButtonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: 'white',
        textAlign: 'center',
        fontSize: '15@vs'
    },
});
