import React, { Component } from 'react'
import ReactNative, { View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { BoxShadow } from 'react-native-shadow'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'

export default class Login extends Component {

    onSignIn = () => {
        this.props.navigation.navigate('Welcome');
    }

    _scrollToEmailInput() {
        const scrollResponder = this.refs.myScrollView.getScrollResponder();
        const inputHandle = ReactNative.findNodeHandle(this.refs.emailInput)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
    }
    
    _scrollToPasswordInput() {
        const scrollResponder = this.refs.myScrollView.getScrollResponder();
        const inputHandle = ReactNative.findNodeHandle(this.refs.passwordInput)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
    }

    render() {
        const shadowOpt = {
            width: scale(220),
            height: verticalScale(40),
            color:"#000",
            border:2,
            radius:10,
            opacity:0.2,
            x:0,
            y:3
        };
        return (
            <View style={styles.container}>
                <ScrollView style={{width: '100%', height: '100%'}} ref="myScrollView">
                <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/login_top.png')} 
                        resizeMode="stretch"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Bienvenue</Text>
                </View>
                <View style={styles.inputBox}>
                    <BoxShadow setting={shadowOpt} style={styles.box}>
                    <Input containerStyle = {styles.input} 
                        autoCapitalize="none" 
                        keyboardType='email-address' 
                        returnKeyType="next" 
                        ref="emailInput"
                        onFocus={this._scrollToEmailInput.bind(this)}
                        placeholder='Nom d’utilisateur' 
                        placeholderTextColor='#AAAAAA'
                        inputContainerStyle={{borderColor: "transparent"}}
                        inputStyle={styles.inputStyle}
                        leftIcon={{ type: 'font-awesome', name: 'user', color: '#008DE6' }}
                        leftIconContainerStyle={{marginLeft: scale(20)}}
                        />
                    </BoxShadow>
                </View>
                <View style={styles.inputBox}>
                    <BoxShadow setting={shadowOpt} style={styles.box}>
                    <Input containerStyle = {styles.input}   
                        autoCapitalize="none" 
                        returnKeyType="go" 
                        placeholder='Mot de passe' 
                        ref="passwordInput"
                        onFocus={this._scrollToPasswordInput.bind(this)}
                        secureTextEntry
                        placeholderTextColor='#AAAAAA'
                        inputContainerStyle={{borderColor: "transparent"}}
                        inputStyle={styles.inputStyle}
                        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#008DE6' }}
                        leftIconContainerStyle={{marginLeft: scale(20)}}
                        />
                    </BoxShadow>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.forgotContainer}>
                        <TouchableOpacity onPress={this.onForgotPwd}>
                            <Text style={styles.forgotText}>
                                Mot de passe oublié ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Connexion" onPress={this.onSignIn}/>
                </View>
                </ScrollView>
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
        height: '130@vs'
    },
    titleContainer: {
        marginTop: '50@vs'
    },
    titleText: {
        fontSize: '54@vs',
        color: '#008DE6',
        fontFamily: 'GalanoGrotesque-Thin',
    },
    box: {
        marginTop: '40@vs'
    },
    input:{
        height: '40@vs',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        borderRadius: 10
    },
    inputBox: {
        marginTop: '40@vs',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputStyle: {
        color: 'black', 
        fontSize: '11@vs', 
        height: '40@vs'
    },
    forgotContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end',  
        width: '220@s',
    },
    forgotText: { 
        color: "#008DE6", 
        fontSize: '12@vs', 
        fontFamily: 'Open Sans' 
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#008DE6',
        marginTop: '100@vs',
        height: '40@vs',
        borderRadius: 20,
        width: '280@s'
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'GalanoGrotesqueAlt-Medium',
        fontSize: '15@vs',
    },
});
