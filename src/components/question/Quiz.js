import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Question from './Question';
import Solution from './Solution';

export default class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            progress: 1,
            isQuestion: true,
        }
        
        this.data = [];
        for (var i = 0; i < 8; i++)
            this.data.push(false);
    }

    componentWillReceiveProps() {
        this.setState({progress: this.props.navigation.getParam('progress', 1), isQuestion: true});
    }

    onNext = () => {
        let progress = this.state.progress;
        if (progress >= 8) {
            let data = {answers: this.data};
            if (this.state.isQuestion === true)
                this.props.navigation.navigate('GoodAnswer');
            else
                this.props.navigation.navigate('BadAnswer');
        }
        else
            this.setState({progress: progress + 1, isQuestion: true});
    }

    onPrev = () => {
        let progress = this.state.progress;
        if (progress > 1) {
            this.setState({progress: progress - 1, isQuestion: true});
        }
    }

    onYes = () => {
        this.data[this.state.progress - 1] = true;
        this.setState({isQuestion: false});
    }

    onNo = () => {
        this.data[this.state.progress - 1] = false;
        this.onNext();
    }

    onHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return this.state.isQuestion?(
            <Question progress={this.state.progress} onYes={this.onYes} onNo={this.onNo} onNext={this.onNext} onPrev={this.onPrev} onHome={this.onHome} />
        ):(
            <Solution progress={this.state.progress} onNext={this.onNext} onPrev={this.onPrev} onHome={this.onHome} />
        );
    }
}