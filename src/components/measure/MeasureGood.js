import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'
import { BoxShadow } from 'react-native-shadow'

export default class MeasureGood extends Component {

    onNextPress = () => {
        this.props.navigation.navigate('InspectionFinish');
    }
    
    onBackPress = () => {
        this.props.navigation.navigate('Home');
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
                        source={require('../../assets/images/salt_bravo.png')} 
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Bravo !</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>
                        Votre consommation de sel est probablement satisfaisante.
                        {'\n\n'}90% de la consommation du sel au quotidien provient des aliments et 10% sont rajoutés lors de la préparation des repas.</Text>
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
        marginTop: '60@vs'
    },
    titleText: {
        fontSize: '20@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
    },
    descContainer: {
        marginTop: '50@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30@vs',
        width: '100%'
    },
    descText: {
        fontSize: '12@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesque-Regular',
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
