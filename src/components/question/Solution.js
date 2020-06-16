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

var solutions = [
    'Invalid progress',
    'Pour être protégé de façon maximale, les traitements doivent être pris tous les jours de préférences le matin pour diminuer le risque d’un oubli. ',
    'Pour éviter de manquer de traitements, il est conseillé d’aller chez le pharmacien quelques temps avant le dernier jour. En cas de panne, le pharmacien peut généralement délivrer une boite de secours en atendant une consultation médicale. ',
    'Lorsque vous avez oublié de prendre le traitement le matin, vous pouvez le prendre jusqu’au soir, il n’est pas trop tard.\nSi vous oubliez une journée entière, ne prenez pas une double dose le lendemain.',
    'S’il vous arrive d’oublier votre traitement, une astuce est de préparer dans un pilulier tous les traitements pour la semaine.',
    'Si le traitement est à l’origine d’effets indésirables, il doit être modifié par un médecin. Le plus souvent, un traitement ne doit pas être arrêté sans avis médical.',
    'Une diminution du nombre des traitements est parfois possible mais dans les maladies chroniques, cette décision doit être prise sur des critères médicaux. Dans la majorité des cas, un traitement ne doit pas être modifié sans avis médical.',
    'Dans les maladies chroniques, le traitement doit être poursuivi même pendant les vacances. Gardez une partie de votre traitement sur vous pour éviter d’en manquer en cas de perte de bagages.\nEn cas de décalage horaire, le traitement sera pris aux horaires locaux.',
    'Il est difficile d’accepter la contrainte d’un traitement chronique. Les données scientifiques ont montré l’intérêt et les bénéfices de ces traitements pour protéger la santé. L’évaluation des traitements a montré que les bénéfices étaient toujours plus importants que les effets indésirables.'
]

class Solution extends Component {

    getProgressImage() {
        switch (this.props.progress) {
            case 1: return require('../../assets/images/progress1.png');
            case 2: return require('../../assets/images/progress2.png');
            case 3: return require('../../assets/images/progress3.png');
            case 4: return require('../../assets/images/progress4.png');
            case 5: return require('../../assets/images/progress5.png');
            case 6: return require('../../assets/images/progress6.png');
            case 7: return require('../../assets/images/progress7.png');
            case 8: return require('../../assets/images/progress8.png');
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
                        <Button buttonStyle={styles.yesButton} titleStyle={styles.yesButtonText} title="Oui"/>
                    </View>
                    <View style={styles.buttonContainer}>  
                        <Button buttonStyle={styles.noButton} titleStyle={styles.noButtonText} title="Non"/>
                    </View>
                    <View style={styles.warningContainer}>
                        <Text style={styles.warningText}><Text style={{color: '#EE5253', fontWeight: 'bold'}}>Conseil :</Text> {solutions[this.props.progress]}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.textGroup}>
                        <TouchableOpacity onPress={this.props.onPrev}>
                            <Text style={styles.textButton}>PREC.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onNext}>
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

Solution.propTypes = {
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onHome: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired
}

Solution.defaultProps = {
    
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
        marginTop: '40@vs'
    },
    top_image: {
        width: '130@vs',
        height: '130@vs'
    },
    questionContainer: {
        marginTop: '30@vs',
        marginBottom: '30@vs',
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
    yesButton:{
        backgroundColor: '#C0E9FA',
        height: '45@vs',
        borderRadius: 20,
    },
    yesButtonText:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'GalanoGrotesqueAlt-Medium',
        fontSize: '13@vs'
    },
    noButton:{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#EE5253',
        height: '45@vs',
        borderRadius: 20,
    },
    noButtonText:{
        color: '#EE5253',
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
    },
    warningContainer: {
        marginTop: '30@vs',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        width: '100%'
    },
    warningText: {
        fontFamily: 'Open Sans',
        color: 'black',
        fontSize: '12@vs'
    }
});

export default Solution;