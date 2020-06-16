import React, { Component } from 'react'
import ReactNative, { View, Image, TextInput, ScrollView } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'
import { BoxShadow } from 'react-native-shadow'
import PropTypes from 'prop-types'

class ManualInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            systolicVal: "000",
            diastolicVal: "000"
        }
    }

    onNextPress = () => {
        this.props.onConfirm(this.state.systolicVal, this.state.diastolicVal);
    }

    _scrollToDiastolicInput() {
        const scrollResponder = this.refs.myScrollView.getScrollResponder();
        const inputHandle = ReactNative.findNodeHandle(this.refs.diastolic)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
    }
    
    _scrollToSystolicInput() {
        const scrollResponder = this.refs.myScrollView.getScrollResponder();
        const inputHandle = ReactNative.findNodeHandle(this.refs.systolic)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
    }

    onChangeDiastolic = value => {
        var numberRex = new RegExp("^[0-9]+$");
        if (value === "" || (value.length <= 3 && numberRex.test(value)))
            this.setState({diastolicVal: value});       
    }
    
    onChangeSystolic = value => {
        var numberRex = new RegExp("^[0-9]+$");
        if (value === "" || (value.length <= 3 && numberRex.test(value)))
            this.setState({systolicVal: value});
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
                <ScrollView style={{width: '100%', height: '100%'}} ref='myScrollView'>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/salt_attention.png')} 
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Oops ! 
                        {'\n\n'}Un problème de matériel a été détecté.</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>
                        Veuillez saisir les chiffres de systolic et de diastolic de la mesure M01. 
                        {'\n\n'}Vous les trouverez en appuyant succesivement sur le bouton M précédemment utilisé sur le tensiomètre.
                    </Text>
                </View>
                <View style={styles.valueContainer}>
                    <View style={styles.valueRow}>
                        <Text style={styles.valueName}>Systolic</Text>
                        <Input 
                            inputStyle={[styles.valueText, {height: undefined, marginLeft: 0}]}
                            inputContainerStyle={[styles.inputContainer, {borderColor: 'white'}]}
                            containerStyle={styles.inputContainer}
                            selectionColor="#fff"
                            keyboardType='numeric' 
                            returnKeyType="next" 
                            ref="systolic"
                            value={this.state.systolicVal}
                            onChangeText={this.onChangeSystolic}
                            onFocus={this._scrollToSystolicInput.bind(this)}
                        />
                    </View>
                    <View style={styles.valueRow}>
                        <Text style={styles.valueName}>Diastolic</Text>
                        <Input 
                            inputStyle={[styles.valueText, {height: undefined, marginLeft: 0}]}
                            inputContainerStyle={[styles.inputContainer, {borderColor: 'white'}]}
                            containerStyle={styles.inputContainer}
                            selectionColor="#fff"
                            keyboardType='numeric' 
                            returnKeyType="next" 
                            ref="diastolic"
                            value={this.state.diastolicVal}
                            onChangeText={this.onChangeDiastolic}
                            onFocus={this._scrollToDiastolicInput.bind(this)}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>                    
                    <BoxShadow setting={shadowOpt}>
                        <Button buttonStyle={styles.nextButton} titleStyle={styles.nextButtonText} title="Valider" onPress={this.onNextPress}/>
                    </BoxShadow>
                </View>
                </ScrollView>
            </View>
        )
    }
}

ManualInput.propTypes = {
    onConfirm: PropTypes.func.isRequired,
}

ManualInput.defaultProps = {
    
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
        marginTop: '60@vs'
    },
    top_image: {
        width: '100%',
        height: '150@vs'
    },
    titleContainer: {
        marginTop: '40@vs'
    },
    titleText: {
        fontSize: '15@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
        textAlign: 'center'
    },
    valueContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '50@s',
        paddingRight: '50@s',
        width: '100%',
        marginTop: '10@vs'
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
        fontFamily: 'GalanoGrotesque-Medium',
        textAlign: 'right'
    },
    inputContainer: {
        width: '40@s',
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
        marginTop: '20@vs',
        marginBottom: '10@vs'
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
});

export default ManualInput;