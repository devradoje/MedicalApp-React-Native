import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters'

export default class MeasureSync extends Component {

    onNextPress = () => {
        if (true)
            this.props.navigation.navigate('MeasureGood');
        else
            this.props.navigation.navigate('MeasureBad');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/sync_icon.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>
                        Nous allons maintenant  collecter et analyser les mesures. Appuyez brièvement sur le bouton M du tensiomètre. 
                        {'\n\n'}Puis sur le bouton synchroniser.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>       
                    <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Synchroniser" onPress={this.onNextPress}/>
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
        marginTop: '100@vs'
    },
    top_image: {
        width: '100%',
        height: '150@vs'
    },
    detailContainer: {
        marginTop: '120@vs',
        paddingLeft: '50@s',
        paddingRight: '40@s',
        marginBottom: '40@vs'
    },
    detailText: {
        fontSize: '12@vs',
        color: '#202020',
        fontFamily: 'Open Sans',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        marginTop: '40@vs'
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
    }
});
