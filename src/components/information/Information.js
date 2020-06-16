import React, { Component } from 'react'
import ReactNative, { View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'
import WeightSlider from '../extra/WeightSlider';

export default class Information extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weight: 85,
            gender: true,
            height: "170",
            age: 1,
            tablet: -1,
            disease: -1
        }
        
        this.male_yes=require('../../assets/images/male_yes.png');
        this.male_no=require('../../assets/images/male_no.png');
        
        this.female_yes=require('../../assets/images/female_yes.png');
        this.female_no=require('../../assets/images/female_no.png');
    }

    onButtonPress = () => {

    }

    onMalePress = () => {
        this.setState({gender: true});
    }
    
    onFemalePress = () => {
        this.setState({gender: false});
    }

    onAgeSelect = evt => {
        let age = Math.floor((evt.nativeEvent.pageX - scale(43)) / scale(52));
        if (age >= 0 && age <= 5)
            this.setState({age: age});
    }

    onTabletPress(tablet) {
        this.setState({tablet: tablet});
    }

    onDiseasePress(disease) {
        this.setState({disease: disease});
    }

    onHeightChange = value => {
        var numberRex = new RegExp("^[0-9]+$");
        if (value.length <= 3 && numberRex.test(value))
            this.setState({height: value});     
    }

    onStart = () => {
        let mode = this.props.navigation.getParam('mode', 1);
        let data = {
            weight: this.state.weight,
            gender: this.state.gender,
            height: parseInt(this.state.height),
            age: this.state.age,
            tablet: this.state.tablet,
            disease: this.state.disease
        }
        switch (mode) {
            case 1:
            case 2:
                this.props.navigation.navigate('Days', {data: data});
                break;
            case 3:
                this.props.navigation.navigate('SaltInspection');
                break;
            case 4:
                this.props.navigation.navigate('MeasureAccept');
                break;
            default:
                alert('Invalid Mode');
        }
    }
    
    _scrollToHeightInput() {
        const scrollResponder = this.refs.myScrollView.getScrollResponder();
        const inputHandle = ReactNative.findNodeHandle(this.refs.heightInput)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
    }

    render() {
        let data = [{
            value: '170',
          }, {
            value: '175',
          }, {
            value: '180',
          }];
        return (
            <ScrollView ref="myScrollView" showsVerticalScrollIndicator={false} style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>FAISONS CONNAISSANE !</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>Voici les informations dont j’ai besoin.</Text>
                </View>
                <View style={styles.rowBox}>
                    <Text style={styles.label}>Vous êtes :</Text>
                </View>
                <View style={styles.rowBox}>
                    <View style={styles.genderBox}>
                        <TouchableWithoutFeedback onPress={this.onMalePress}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={this.state.gender?this.male_yes:this.male_no}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.onFemalePress}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={this.state.gender?this.female_no:this.female_yes}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.rowBox}>
                    <Text style={styles.label}>Votre tranche d’âge :</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.onAgeSelect}>
                <View style={styles.ageSliderBox}>
                    <MultiSlider
                        sliderLength={scale(260)}
                        min={0}
                        max={5}
                        step={1}
                        enabledOne={false}
                        enabledTwo={false}
                        selectedStyle={{backgroundColor: '#008DE6'}}
                        unselectedStyle={{backgroundColor: '#E6E6E6'}}
                        trackStyle={{height: verticalScale(6)}}
                        containerStyle={{height: verticalScale(20), marginLeft: scale(6)}}
                        markerContainerStyle={{top: verticalScale(-3), height: verticalScale(12)}}
                        customMarker={(e) => {
                                    return (
                                        <View
                                            style={styles.ageMarker}
                                        />
                                    )
                                }}
                        values={[this.state.age, this.state.age + 1]}
                    />
                </View>
                </TouchableWithoutFeedback>
                <View style={styles.ageBox}>
                    <Text style={[styles.ageText, {marginRight: scale(3)}]}>0</Text>
                    <Text style={styles.ageText}>35</Text>
                    <Text style={styles.ageText}>55</Text>
                    <Text style={styles.ageText}>65</Text>
                    <Text style={styles.ageText}>79</Text>
                    <Text style={styles.ageText}>80+</Text>
                </View>
                <View style={styles.rowBox}>
                    <Text style={styles.label}>Votre poids (kg) :</Text>
                </View>
                <View style={styles.rowBox}>
                    <WeightSlider 
                        width={scale(280)} 
                        minValue={50} 
                        maxValue={100}
                        value={this.state.weight}
                        onValueChange={value => this.setState({weight: value})}
                    />
                </View>            
                <View style={styles.rowBox}>
                    <View style={styles.heightContainer}>
                        <Text style={[styles.label,{width: '50%', marginTop: 0}]}>Votre taille (cm) :</Text>
                        <Input 
                            containerStyle = {styles.input} 
                            autoCapitalize="none" 
                            keyboardType='numeric' 
                            inputContainerStyle={{borderColor: "transparent"}}
                            inputStyle={styles.inputStyle}
                            ref="heightInput"
                            onFocus={this._scrollToHeightInput.bind(this)}
                            onChangeText={this.onHeightChange}
                            value={this.state.height}
                        />
                    </View>
                </View>      
                <View style={styles.rowBox}>
                    <Text style={styles.label}>Nombre de comprimés pris par jour :</Text>
                </View>      
                <View style={styles.tabletContainer}>
                    <Button
                        buttonStyle={this.state.tablet === 0?styles.tabletSelectedButton:styles.tabletButton}
                        titleStyle={this.state.tablet === 0?styles.tabletSelectedTitle:styles.tabletTitle}
                        title="0"
                        onPress={() => this.onTabletPress(0)}
                    />
                    <Button
                        buttonStyle={this.state.tablet === 1?styles.tabletSelectedButton:styles.tabletButton}
                        titleStyle={this.state.tablet === 1?styles.tabletSelectedTitle:styles.tabletTitle}
                        title="1"
                        onPress={() => this.onTabletPress(1)}
                    />
                    <Button
                        buttonStyle={this.state.tablet === 2?styles.tabletSelectedButton:styles.tabletButton}
                        titleStyle={this.state.tablet === 2?styles.tabletSelectedTitle:styles.tabletTitle}
                        title="2"
                        onPress={() => this.onTabletPress(2)}
                    />
                    <Button
                        buttonStyle={this.state.tablet === 3?styles.tabletSelectedButton:styles.tabletButton}
                        titleStyle={this.state.tablet === 3?styles.tabletSelectedTitle:styles.tabletTitle}
                        title="3"
                        onPress={() => this.onTabletPress(3)}
                    />
                    <Button
                        buttonStyle={this.state.tablet === 4?styles.tabletSelectedButton:styles.tabletButton}
                        titleStyle={this.state.tablet === 4?styles.tabletSelectedTitle:styles.tabletTitle}
                        title="4"
                        onPress={() => this.onTabletPress(4)}
                    />
                    <Button
                        buttonStyle={this.state.tablet === 5?styles.tabletSelectedButton:styles.tabletButton}
                        titleStyle={this.state.tablet === 5?styles.tabletSelectedTitle:styles.tabletTitle}
                        title="5+"
                        onPress={() => this.onTabletPress(5)}
                    />
                </View>
                {
                    this.state.tablet > 0 && (
                        <View style={{width: '100%'}}>
                            <View style={styles.rowBox}>
                                <Text style={styles.label}>Pour quelle pathologie ?</Text>
                            </View>      
                            <View style={styles.diseaseContainer}>
                                <Button
                                    buttonStyle={this.state.disease === 0?styles.diseaseSelectedButton:styles.diseaseButton}
                                    titleStyle={this.state.disease === 0?styles.diseaseSelectedTitle:styles.diseaseTitle}
                                    onPress={() => this.onDiseasePress(0)}
                                    title="Hypertension"
                                />
                                <Button
                                    buttonStyle={this.state.disease === 1?styles.diseaseSelectedButton:styles.diseaseButton}
                                    titleStyle={this.state.disease === 1?styles.diseaseSelectedTitle:styles.diseaseTitle}
                                    onPress={() => this.onDiseasePress(1)}
                                    title="Diabète"
                                />
                            </View>
                            <View style={styles.diseaseContainer}>
                                <Button
                                    buttonStyle={this.state.disease === 2?styles.diseaseSelectedButton:styles.diseaseButton}
                                    titleStyle={this.state.disease === 2?styles.diseaseSelectedTitle:styles.diseaseTitle}
                                    onPress={() => this.onDiseasePress(2)}
                                    title="Cholestérol"
                                />
                                <Button
                                    buttonStyle={this.state.disease === 3?styles.diseaseSelectedButton:styles.diseaseButton}
                                    titleStyle={this.state.disease === 3?styles.diseaseSelectedTitle:styles.diseaseTitle}
                                    onPress={() => this.onDiseasePress(3)}
                                    title="Autre"
                                />
                            </View>
                        </View>
                    )
                }
                
                <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Valider" onPress={this.onStart}/>
            </View>
            </ScrollView>
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
        backgroundColor: 'white'
    },
    titleContainer: {
        marginTop: '30@vs'
    },
    titleText: {
        fontSize: '18@vs',
        color: '#008DE6',
        fontFamily: 'GalanoGrotesque-ExtraBold',
    },
    descContainer: {
        marginTop: '5@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10@vs'
    },
    descText: {
        fontSize: '15@vs',
        color: '#008DE6',
        fontFamily: 'GalanoGrotesque-Regular',
        textAlign: 'center'
    },
    rowBox: {
        marginTop: '10@vs',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
    },
    label: {
        fontSize: '13@vs',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'black',
        width: '100%',
        textAlign: 'left',
    },
    genderBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    imageContainer: {
        width: '130@s'
    },
    image: {
        height: '135.35@vs', 
        width: '100%'
    },
    ageSliderBox: {
        marginTop: '10@vs',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%', 
    },
    ageBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '4@s'
    },
    ageText: {
        color: '#008DE6',
        fontSize: '12@vs',
        fontWeight: 'bold'
    },
    heightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    heightDrop: {
        width: '70@s',
        height: '28@vs',
        borderColor: '#008DE6',
        borderRadius: 10,
        borderWidth: 2
    },
    tabletContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '10@vs'
    },
    tabletButton: {
        width: '40@s',
        height: '25@vs',
        borderRadius: 15,
        backgroundColor: '#008DE6',
    },
    tabletTitle: {
        color: 'white',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: '15@vs',
        padding: 0
    },
    tabletSelectedButton: {
        width: '40@s',
        height: '25@vs',
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: '#008DE6',
        borderWidth: 2
    },
    tabletSelectedTitle: {
        color: '#008DE6',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: '15@vs',
        padding: 0
    },
    diseaseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '10@vs'
    },
    diseaseButton: {
        width: '130@s',
        height: '25@vs',
        borderRadius: 13,
        backgroundColor: '#E7931D',
    },
    diseaseTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14@vs',
        padding: 0
    },
    diseaseSelectedButton: {
        width: '130@s',
        height: '25@vs',
        borderRadius: 13,
        backgroundColor: 'white',
        borderColor: '#E7931D',
        borderWidth: 2
    },
    diseaseSelectedTitle: {
        color: '#E7931D',
        fontWeight: 'bold',
        fontSize: '14@vs',
        padding: 0
    },
    button:{
        backgroundColor: '#008DE6',
        height: '40@vs',
        width: '280@s',
        borderRadius: 20,
        marginTop: '30@vs',
        marginBottom: '20@vs'
    },
    buttonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: '#fff',
        textAlign: 'center',
        fontSize: '16@vs'
    },
    ageMarker: {
        width: '12@vs', 
        height: '12@vs', 
        borderRadius: '6@vs',
        backgroundColor: '#008DE6'
    },
    input:{
        height: '30@vs',
        backgroundColor: 'white',
        width: '70@s',
        borderRadius: 10,
        borderColor: '#008DE6',
        borderWidth: 2,
    },
    inputStyle: {
        fontSize: '11@vs', 
        height: '30@vs',
        textAlign: 'center',
        marginLeft: 0,
        fontWeight: 'bold',
        color: '#008DE6'
    },
});
