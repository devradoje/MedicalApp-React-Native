import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { Button } from "react-native-elements";

export default class HtaInspection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonEnabled: false,
      answer1: -1,
      answer2: -1,
      answer3: -1,
      answer4: -1
    };
  }

  checkValidation = () => {
    if (this.state.answer1 >= 0 && this.state.answer2 >= 0 && this.state.answer3 >= 0 && this.state.answer4 >= 0)
      this.setState({ buttonEnabled: true });
    else this.setState({ buttonEnabled: false });
  }

  onPress1(id) {
    this.setState({ answer1: id }, this.checkValidation);
  }

  onPress2(id) {
    this.setState({ answer2: id }, this.checkValidation);
  }

  onPress3(id) {
    this.setState({ answer3: id }, this.checkValidation);
  }

  onPress4(id) {
    this.setState({ answer4: id }, this.checkValidation);
  }

  onConfirm = () => {
    if (this.state.buttonEnabled) {
      let data = {
          answers: [
          this.state.answer1,
          this.state.answer2,
          this.state.answer3,
          this.state.answer4
        ]
      }
      this.props.navigation.navigate('SaltStartScreen');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Merci de répondre à ces quelques questions.
        </Text>
        <View style={styles.questionBox}>
          <Text style={styles.question}>
            1. Avez-vous pris, sans pouvoir les perdre, au cours des deux
            dernières années plus de 3 kilos ?
          </Text>
          <View style={styles.buttonGroup}>
            <Button
              title="Oui"
              buttonStyle={[this.state.answer1===0?styles.selectedButton:styles.button, styles.twoButton]}
              titleStyle={this.state.answer1===0?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress1(0)}
            />
            <Button
              title="Non"
              buttonStyle={[this.state.answer1===1?styles.selectedButton:styles.button, styles.twoButton]}
              titleStyle={this.state.answer1===1?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress1(1)}
            />
          </View>
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.question}>
            2. Actuellement, prenez-vous un/des médicament(s) pour traiter l’HTA?
          </Text>
          <View style={styles.buttonGroup}>
            <Button
              title="Oui"
              buttonStyle={[this.state.answer2===0?styles.selectedButton:styles.button, styles.twoButton]}
              titleStyle={this.state.answer2===0?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress2(0)}
            />
            <Button
              title="Non"
              buttonStyle={[this.state.answer2===1?styles.selectedButton:styles.button, styles.twoButton]}
              titleStyle={this.state.answer2===1?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress2(1)}
            />
          </View>
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.question}>
            3. Vos parents ont-ils été soignés pour une HTA ?
          </Text>
          <View style={styles.buttonGroup}>
            <Button
              title="Oui"
              buttonStyle={[this.state.answer3===0?styles.selectedButton:styles.button, styles.threeButton]}
              titleStyle={this.state.answer3===0?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress3(0)}
            />
            <Button
              title="Non"
              buttonStyle={[this.state.answer3===1?styles.selectedButton:styles.button, styles.threeButton]}
              titleStyle={this.state.answer3===1?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress3(1)}
            />
            <Button
              title="Je ne sais pas"
              buttonStyle={[this.state.answer3===2?styles.selectedButton:styles.button, styles.threeButton]}
              titleStyle={this.state.answer3===2?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress3(2)}
            />
          </View>
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.question}>
            4. Actuellement, prenez-vous un médicament pour traiter le diabète ?
          </Text>
          <View style={styles.buttonGroup}>
            <Button
              title="Oui"
              buttonStyle={[this.state.answer4===0?styles.selectedButton:styles.button, styles.twoButton]}
              titleStyle={this.state.answer4===0?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress4(0)}
            />
            <Button
              title="Non"
              buttonStyle={[this.state.answer4===1?styles.selectedButton:styles.button, styles.twoButton]}
              titleStyle={this.state.answer4===1?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress4(1)}
            />
          </View>
        </View>
        <Button
          title="Valider"
          containerStyle={styles.nextButtonContainer}
          titleStyle={styles.nextButtonText}
          buttonStyle={
            this.state.buttonEnabled
              ? styles.enabledNextButton
              : styles.nextButton
          }
          onPress={this.onConfirm}
        />
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: "40@s",
    paddingRight: "40@s",
    width: "100%"
  },
  title: {
    fontFamily: "GalanoGrotesqueAlt-ExtraBold",
    fontSize: "16@vs",
    color: "black",
    marginTop: "50@vs"
  },
  questionBox: {
    marginTop: "35@vs",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  question: {
    fontFamily: "GalanoGrotesque-Medium",
    fontSize: "12@vs",
    width: '100%',
    color: "#191919"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "20@vs"
  },
  button: {
    height: "30@vs",
    backgroundColor: "#008DE6",
    borderRadius: 15
  },
  buttonText: {
    fontFamily: "GalanoGrotesqueAlt-Medium",
    fontSize: "9.5@s",
    color: "white"
  },
  selectedButton: {
    height: "30@vs",
    backgroundColor: "white",
    borderColor: "#008DE6",
    borderWidth: 2,
    borderRadius: 15
  },
  selectedButtonText: {
    fontFamily: "GalanoGrotesqueAlt-Medium",
    fontSize: "9.5@s",
    color: "#008DE6"
  },
  twoButton: {
    width: "130@s"
  },
  threeButton: {
    width: "85@s"
  },
  nextButtonContainer: {
    marginTop: "40@vs",
    width: "100%"
  },
  nextButton: {
    width: "100%",
    height: "40@vs",
    backgroundColor: "#CDE9FA",
    borderRadius: 15
  },
  nextButtonText: {
    color: "white",
    fontSize: "15@vs",
    fontFamily: "GalanoGrotesque-SemiBold"
  },
  enabledNextButton: {
    width: "100%",
    height: "40@vs",
    backgroundColor: "#008DE6",
    borderRadius: 15
  }
});
