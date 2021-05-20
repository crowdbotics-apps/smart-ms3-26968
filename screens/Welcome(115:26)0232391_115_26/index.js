import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_115_27} />
      <View style={styles.View_115_28}>
        <Text style={styles.Text_115_28}>Welcome!</Text>
      </View>
      <View style={styles.View_307_300} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1217/6392/95ebed7635e2ec925dff5935c9fab417"
        }}
        style={styles.ImageBackground_115_30}
      />
      <View style={styles.View_115_248} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d85d/5987/9d8c4be641ae2e0387352034e04c3eb9"
        }}
        style={styles.ImageBackground_115_31}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("127_134"))
        }
      >
        <View style={styles.View_115_32}>
          <View style={styles.View_I115_32_103_23} />
          <View style={styles.View_I115_32_103_22}>
            <Text style={styles.Text_I115_32_103_22}>Sign In</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("209_0"))
        }
      >
        <View style={styles.View_115_33}>
          <View style={styles.View_I115_33_103_23} />
          <View style={styles.View_I115_33_103_22}>
            <Text style={styles.Text_I115_33_103_22}>Sign Up</Text>
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6df/7155/ba15bf8e68d6cb008ca0386075928226"
        }}
        style={styles.ImageBackground_362_323}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_115_27: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_115_28: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("16.120218579234972%")
  },
  Text_115_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_300: {
    width: wp("55.31400966183575%"),
    minWidth: wp("55.31400966183575%"),
    height: hp("28.825136612021858%"),
    minHeight: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.36231884057971%"),
    top: hp("39.89344529115437%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_115_30: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99516908212561%"),
    top: hp("30.87431693989071%")
  },
  View_115_248: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("41.2568306010929%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  ImageBackground_115_31: {
    width: wp("71.98067632850241%"),
    minWidth: wp("71.98067632850241%"),
    height: hp("32.650273224043715%"),
    minHeight: hp("32.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("38.79781420765027%")
  },
  View_115_32: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("89.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I115_32_103_23: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37
  },
  View_I115_32_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I115_32_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_33: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("102.59562841530054%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I115_33_103_23: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37
  },
  View_I115_33_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I115_33_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_362_323: {
    width: wp("183.0917874396135%"),
    minWidth: wp("183.0917874396135%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("93.30601092896174%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
