import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { Button } from "react-native-elements";

export default class SaltInspection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttonEnabled: false,
      answer1: -1,
      answer2: -1,
      answer3: -1,
      answer4: -1,
      answer5: -1
    };
  }

  checkValidation = () => {
    if (this.state.answer1 >= 0 && this.state.answer2 >= 0 && this.state.answer3 >= 0 && this.state.answer4 >= 0 && this.state.answer5 >= 0)
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
  
  onPress5(id) {
    this.setState({ answer5: id }, this.checkValidation);
  }

  onConfirm = () => {
    if (this.state.buttonEnabled) {
      let data = [
        this.state.answer1,
        this.state.answer2,
        this.state.answer3,
        this.state.answer4,
        this.state.answer5
      ]
      if (this.state.answer1 === 0) this.props.navigation.navigate('SaltBravo');
      else this.props.navigation.navigate('SaltAttention');
    }
      
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.container}>
          <View style={[styles.questionBox, { marginTop: verticalScale(60) }]}>
            <Text style={styles.question}>
              1. Dans une journée habituelle, votre consommation totale pour le
              pain et/ou biscotte et/ou viennoiserie est de ?
            </Text>
            <Button
              title="0 à 3 morceaux / parts"
              buttonStyle={[this.state.answer1===0?styles.selectedButton:styles.button, styles.oneButton]}
              titleStyle={this.state.answer1===0?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress1(0)}
              containerStyle={{ marginTop: verticalScale(20) }}
            />
            <Button
              title="4 ou 5 morceaux / parts"
              buttonStyle={[this.state.answer1===1?styles.selectedButton:styles.button, styles.oneButton]}
              titleStyle={this.state.answer1===1?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress1(1)}
              containerStyle={styles.oneButtonContainer}
            />
            <Button
              title="6 morceaux / parts ou +"
              buttonStyle={[this.state.answer1===2?styles.selectedButton:styles.button, styles.oneButton]}
              titleStyle={this.state.answer1===2?styles.selectedButtonText:styles.buttonText}
              onPress={() => this.onPress1(2)}
              containerStyle={styles.oneButtonContainer}
            />
          </View>
          <View style={styles.questionBox}>
            <Text style={styles.question}>
              2. Dans une semaine habituelle, consommez-vous du fromage (à
              l’exclusion du fromage blanc) au cours de 7 repas ou plus ?
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
              3. Dans une semaine habituelle, consommez-vous de la charcuterie
              (à l’exclusion du jambon blanc) au cours de 2 repas ou plus ?
            </Text>
            <View style={styles.buttonGroup}>
              <Button
                title="Oui"
                buttonStyle={[this.state.answer3===0?styles.selectedButton:styles.button, styles.twoButton]}
                titleStyle={this.state.answer3===0?styles.selectedButtonText:styles.buttonText}
                onPress={() => this.onPress3(0)}
              />
              <Button
                title="Non"
                buttonStyle={[this.state.answer3===1?styles.selectedButton:styles.button, styles.twoButton]}
                titleStyle={this.state.answer3===1?styles.selectedButtonText:styles.buttonText}
                onPress={() => this.onPress3(1)}
              />
            </View>
          </View>
          <View style={styles.questionBox}>
            <Text style={styles.question}>
              4. Dans une semaine habituelle, consommez-vous 2 fois ou plus un
              des plats suivants : pizza, quiche, burger, crevettes, poisson
              fumé, graines salées, chips, plat cuisiné par un traiteur ?
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
          <View style={styles.questionBox}>
            <Text style={styles.question}>
              5. Pour la préparation de certains plats, utilisez-vous des
              bouillons de cubes ou des rehausseurs de goût en poudre ?
            </Text>
            <View style={styles.buttonGroup}>
              <Button
                title="Oui"
                buttonStyle={[this.state.answer5===0?styles.selectedButton:styles.button, styles.twoButton]}
                titleStyle={this.state.answer5===0?styles.selectedButtonText:styles.buttonText}
                onPress={() => this.onPress5(0)}
              />
              <Button
                title="Non"
                buttonStyle={[this.state.answer5===1?styles.selectedButton:styles.button, styles.twoButton]}
                titleStyle={this.state.answer5===1?styles.selectedButtonText:styles.buttonText}
                onPress={() => this.onPress5(1)}
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
      </ScrollView>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingLeft: "40@s",
    paddingRight: "40@s",
    width: "100%"
  },
  scrollContainer: {
    width: "100%",
    height: "100%"
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
    fontSize: "10@s",
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
    fontSize: "10@s",
    color: "#008DE6"
  },
  oneButton: {
    width: "270@s"
  },
  twoButton: {
    width: "130@s"
  },
  threeButton: {
    width: "85@s"
  },
  nextButtonContainer: {
    marginTop: "40@vs",
    width: "100%",
    marginBottom: "40@vs"
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
  },
  oneButtonContainer: {
    marginTop: "10@vs"
  }
});
