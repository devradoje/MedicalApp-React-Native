import React, { Component } from 'react'
import { View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters'

export default class Days extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 5,
        }
    }

    onButtonPress = () => {
        let data = this.props.navigation.getParam('data');
        data['days'] = this.state.count;
        if (data.days > 10)
            this.props.navigation.navigate('InfoCorrect');
        else
            this.props.navigation.navigate('InfoIncorrect');
    }

    onTabletPress(id) {
        this.setState({count: id + 1});
    }

    render() {
        var tablets = [];

        for(let i = 0; i < 15; i++){

            tablets.push(
                <TouchableWithoutFeedback onPress={() => this.onTabletPress(i)} key={i}>
                    <Image
                        source={i<this.state.count?require('../../assets/images/tablet_enabled.png'):
                                    require('../../assets/images/tablet_disabled.png')}
                        style={styles.tablet}
                        resizeMode="stretch"
                    />
                </TouchableWithoutFeedback>
            )
        }
        return (
            <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/tablet_icon.png')} 
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Combien de jours avez-vous pris tous vos traitements, au cours des 15 derniers jours ?</Text>
                </View>
                <View style={styles.tabletContainer}>
                    {tablets}
                </View>
                <View style={styles.buttonContainer}>                    
                    <Button buttonStyle={styles.button} titleStyle={styles.buttonText} onPress={this.onButtonPress} title="Suivant"/>
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
        marginTop: '60@vs'
    },
    top_image: {
        width: '100%',
        height: '140@vs'
    },
    titleContainer: {
        marginTop: '70@vs',
        paddingLeft: '40@s',
        paddingRight: '40@s'
    },
    titleText: {
        fontSize: '20@vs',
        color: 'black',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
    },
    tabletContainer: {
        paddingLeft: '40@s',
        paddingRight: '40@s',
        width: '100%',
        marginTop: '30@vs',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tablet: {
        width: '14@s',
        height: '28@s',
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '40@s',
        paddingRight: '50@s',
        marginTop: '110@vs',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#008DE6',
        height: '40@vs',
        width: '140@s',
        borderRadius: 20
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'GalanoGrotesque-SemiBold',
        fontSize: '16@vs'
    }
});
