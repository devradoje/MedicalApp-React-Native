import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ManualInput from './ManualInput';
import MeasureDisplay from './MeasureDisplay';

export default class ManualMeasure extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMeasuring: true,
            remainCount: 0,
            systolic: 0,
            diastolic: 0,
            progress: 1,
        }

        this.data = [];
        for (var i = 0; i < 3; i++)
            this.data.push({systolic: 0, diastolic: 0});
    }

    onMeasureFinish = (systolic, diastolic) => {
        this.data[this.state.progress - 1].systolic = systolic;
        this.data[this.state.progress - 1].diastolic = diastolic;
        this.setState({isMeasuring: false, systolic, diastolic});
    }

    onMeasureStart = () => {
        let remainCount = this.state.remainCount;
        let progress = this.state.progress;
        if (remainCount <= 0) {
            let data = {
                values: this.data
            };
            if (true)
                this.props.navigation.navigate('MeasureGood');
            else
                this.props.navigation.navigate('MeasureBad');
        }
        else {
            this.setState({isMeasuring: true, remainCount: remainCount - 1, progress: progress + 1});
        }
    }

    render() {
        return this.state.isMeasuring?(
            <ManualInput onConfirm={this.onMeasureFinish}/>
        ):(
            <MeasureDisplay 
                onConfirm={this.onMeasureStart} 
                systolic={this.state.systolic} 
                diastolic={this.state.diastolic}
                progress={this.state.progress}
            />
        )
    }
}