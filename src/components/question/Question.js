import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters'
import { BoxShadow } from 'react-native-shadow'
import PropTypes from 'prop-types'

var questions = [
    'Invalid progress',
    'Ce matin avez-vous oublié de prendre votre médicament ?',
    'Depuis la dernière consultation avez-vous été en panne de traitement ?',
    'Vous est-il arrivé de prendre votre traitement avec retard par rapport à l’heure habituelle ?',
    'Vous est-il arrivé de pas prendre votre traitement parce que certains jours, votre mémoire vous fait défaut ?',
    'Vous est-il arrivé de pas prendre votre traitement parce que certains jours, vous avez l’impression que votre traitement vous fait plus de mal que de bien ?',
    'Pensez-vous que vous avez trop de comprimés à prendre ?',
    'Quand vous êtes en déplacement, vous arrive t-il de ne pas prendre votre traitement ?',
    'Êtes-vous indécis pour une prise régulière des traitements pour votre maladie chronique ?'
];

class Question extends Component {

    constructor(props) {
        super(props);

        this.image1 = require('../../assets/images/progress1.png');
        this.image2 = require('../../assets/images/progress2.png');
        this.image3 = require('../../assets/images/progress3.png');
        this.image4 = require('../../assets/images/progress4.png');
        this.image5 = require('../../assets/images/progress5.png');
        this.image6 = require('../../assets/images/progress6.png');
        this.image7 = require('../../assets/images/progress7.png');
        this.image8 = require('../../assets/images/progress8.png');
    }

    getProgressImage() {
        switch (this.props.progress) {
            case 1: return this.image1;
            case 2: return this.image2;
            case 3: return this.image3;
            case 4: return this.image4;
            case 5: return this.image5;
            case 6: return this.image6;
            case 7: return this.image7;
            case 8: return this.image8;
            default: return null;
        } 
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style = {styles.top}>
                        <Image 
                            style={styles.top_image} 
                            source={this.getProgressImage()}
                        />
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>{questions[this.props.progress]}</Text>
                    </View>
                    <View style={styles.buttonContainer}>                    
                        <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Oui" onPress={this.props.onYes}/>
                    </View>
                    <View style={styles.buttonContainer}>  
                        <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Non" onPress={this.props.onNo}/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.textGroup}>
                        <TouchableOpacity onPress={this.props.onPrev}>
                            <Text style={styles.textButton}>PREC.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onNext} disabled>
                            <Text style={styles.textButton}>SUIV.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.homeContainer}>
                        <TouchableOpacity onPress={this.props.onHome}>
                            <Image
                                source={require('../../assets/images/home.png')}
                                style={styles.homeButton}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

Question.propTypes = {
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onHome: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired
}

Question.defaultProps = {
    
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    footer: {
        height: '50@vs',
        width: '100%',
    },
    textGroup: {
        height: '35@vs',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10@s',
        paddingRight: '10@s',
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F2F2F2',
    },
    homeContainer: {
        height: '100%',
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '30%'
    },
    top: {
        marginTop: '60@vs',
    },
    top_image: {
        width: '130@vs',
        height: '130@vs'
    },
    questionContainer: {
        marginTop: '50@vs',
        marginBottom: '40@vs',
        paddingLeft: '40@s',
        paddingRight: '40@s'
    },
    questionText: {
        fontSize: '16@vs',
        color: 'black',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '70@s',
        paddingRight: '70@s',
        marginTop: '10@vs'
    },
    button:{
        backgroundColor: '#008DE6',
        borderWidth: 2,
        borderColor: 'white',
        height: '45@vs',
        borderRadius: 20,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'GalanoGrotesqueAlt-Medium',
        fontSize: '13@vs'
    },
    textButton: {
        color: '#008DE6',
        fontSize: '14@vs'
    },
    homeButton: {
        width: '40@vs',
        height: '40@vs'
    }
});

export default Question;