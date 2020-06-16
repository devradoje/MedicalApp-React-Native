import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'

export default class InspectionFinish extends Component {

    onNextPress = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image
                        style={styles.top_image}
                        source={require('../../assets/images/final_back.png')}
                        resizeMode="stretch"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Vous souhaitez être contacté par une infirmière pour obtenir des conseils et vous aider à vous protéger du risque d’HTA grâce au coaching santé proposé par Medialane ?</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>Pour cela, merci de noter Nom, Prénom et Numéro de téléphone sur une fiche jointe à la boite contenant le kit. Vous serez alors contacté par Medialane.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Retour à l’accueil" onPress={this.onNextPress} />
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
    },
    top_image: {
        width: '100%',
        height: '220@vs'
    },
    titleContainer: {
        marginTop: '50@vs',
        paddingLeft: '50@s',
        paddingRight: '50@s'
    },
    titleText: {
        fontSize: '14@vs',
        color: 'black',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
    },
    descContainer: {
        marginTop: '20@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50@vs',
        width: '100%'
    },
    descText: {
        fontSize: '13@vs',
        color: '#1b1b1b',
        fontFamily: 'Open Sans',
        paddingLeft: '50@s',
        paddingRight: '50@s',
        width: '100%'
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '50@s',
        paddingRight: '50@s',
        marginTop: '10@vs'
    },
    button:{
        backgroundColor: 'white',
        height: '40@vs',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#008DE6'
    },
    buttonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: '#008DE6',
        textAlign: 'center',
        fontSize: '15@vs'
    }
});
