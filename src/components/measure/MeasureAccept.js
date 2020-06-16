import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { BoxShadow } from "react-native-shadow";

export default class MeasureAccept extends Component {
  onNextPress = () => {
    this.props.navigation.navigate('MeasureHome');
  };

  onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.top_image}
            source={require("../../assets/images/measure_accept_icon.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Nous allons vous accompagner tout au long de la prise de mesure de
            votre tension artérielle.
          </Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            En poursuivant l’usage de cette application, vous acceptez les{" "}
            <Text style={styles.highlightText}>
              conditions générales d’utilisation.
            </Text>
          </Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Pour mieux comprendre l’intérêt de mesurer votre pression
            artérielle, nous vous conseillons de lire attentivement cette{" "}
            <Text style={styles.highlightText}>notice d’information.</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.nextButton}
            titleStyle={styles.nextButtonText}
            title="Accepter"
            onPress={this.onNextPress}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.backButton}
            titleStyle={styles.backButtonText}
            title="Refuser"
            onPress={this.onBackPress}
          />
        </View>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white"
  },
  top: {
    width: "100%",
    marginTop: "70@vs"
  },
  top_image: {
    width: "100%",
    height: "110@vs"
  },
  titleContainer: {
    marginTop: "70@vs",
    paddingLeft: "40@s",
    paddingRight: "40@s",
    marginBottom: "30@vs"
  },
  titleText: {
    fontSize: "13@vs",
    color: "black",
    fontFamily: "GalanoGrotesqueAlt-ExtraBold",
  },
  descContainer: {
    marginBottom: "20@vs",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "40@s",
    paddingRight: "40@s",
    width: "100%"
  },
  descText: {
    fontSize: "13@vs",
    color: "#202020",
    fontFamily: "Open Sans",
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: "100%",
    paddingLeft: "40@s",
    paddingRight: "40@s",
    marginTop: "20@vs"
  },
  nextButton: {
    backgroundColor: "#008DE6",
    height: "40@vs",
    borderRadius: 20
  },
  nextButtonText: {
    fontFamily: "GalanoGrotesque-SemiBold",
    color: "white",
    textAlign: "center",
    fontSize: "15@vs"
  },
  backButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#008DE6",
    height: "40@vs",
    borderRadius: 20
  },
  backButtonText: {
    fontFamily: "GalanoGrotesque-SemiBold",
    color: "#008DE6",
    textAlign: "center",
    fontSize: "15@vs"
  },
  highlightText: {
    textDecorationLine: "underline",
    color: "#008DE6"
  }
});
