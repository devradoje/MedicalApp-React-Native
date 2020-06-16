import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { BoxShadow } from 'react-native-shadow'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'

export default class Mode extends Component {

    onMode1 = () => {
        this.props.navigation.navigate('Information', {mode: 1});
    }

    onMode2 = () => {
        this.props.navigation.navigate('Information', {mode: 2});
    }

    onMode3 = () => {
        this.props.navigation.navigate('Information', {mode: 3});
    }

    onMode4 = () => {
        this.props.navigation.navigate('Information', {mode: 4});
    }

    render() {
        const shadowOpt = {
            width:scale(285),
            height:verticalScale(95),
            color:"#0040A0",
            border:2,
            radius:25,
            opacity:0.2,
            x: 0,
            y: 0,
        }
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Veuillez sélectionner le profil correspondant.</Text>
                </View>
                    <View style={styles.buttonGroup}>
                        <BoxShadow setting={shadowOpt}>                    
                            <Button 
                                buttonStyle={styles.button} 
                                titleStyle={styles.buttonText} 
                                title="Je lance le dépistage HTA et me laisse guider"
                                iconRight={true}
                                icon={
                                    <Image
                                        source={require('../../assets/images/hta_icon.png')}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                }
                                onPress={this.onMode1}
                            />
                        </BoxShadow>
                        <BoxShadow setting={shadowOpt}>                    
                            <Button 
                                buttonStyle={styles.button} 
                                titleStyle={styles.buttonText} 
                                title="Je prends un traitement et je souhaite mesurer mon observance"
                                iconRight={true}
                                icon={
                                    <Image
                                        source={require('../../assets/images/cure_icon.png')}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                }
                                onPress={this.onMode2}
                            />
                        </BoxShadow>     
                        <BoxShadow setting={shadowOpt}>                    
                            <Button 
                                buttonStyle={styles.button} 
                                titleStyle={styles.buttonText} 
                                title="Je souhaite uniquement évaluer ma consommation excessive de sel"
                                iconRight={true}
                                icon={
                                    <Image
                                        source={require('../../assets/images/salt_icon.png')}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                }
                                onPress={this.onMode3}
                            />
                        </BoxShadow>     
                        <BoxShadow setting={shadowOpt}>                    
                            <Button 
                                buttonStyle={styles.button} 
                                titleStyle={styles.buttonText} 
                                title="Je souhaite simplement prendre ma tension"
                                iconRight={true}
                                icon={
                                    <Image
                                        source={require('../../assets/images/heart_icon.png')}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                }
                                onPress={this.onMode4}
                            />
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
        paddingLeft: '35@s',
        paddingRight: '35@s',
        paddingTop: '30@vs',
        paddingBottom: '50@vs',
        backgroundColor: '#008DE6'
    },
    titleContainer: {
        marginTop: '10@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '60@vs'
    },
    titleText: {
        fontSize: '20@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesque-ExtraBold',
    },
    buttonGroup: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'white',
        height: '90@vs',
        width: '280@s',
        borderRadius: 20,
        paddingRight: '20@s'
    },
    buttonText:{
        color: '#008DE6',
        fontFamily: 'GalanoGrotesque-Bold',
        width: '160@s',
        marginRight: '10@s',
        fontSize: '12@vs',
        textAlign: 'left'
    },
    icon: {
        width: '60@s',
    }
});
