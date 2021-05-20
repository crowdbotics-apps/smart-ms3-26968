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
      <View style={styles.View_407_511} />
      <View style={styles.View_407_512}>
        <Text style={styles.Text_407_512}>User Profile</Text>
      </View>
      <View style={styles.View_407_513}>
        <View style={styles.View_407_514}>
          <View style={styles.View_407_515}>
            <View style={styles.View_407_516} />
            <View style={styles.View_407_517} />
            <View style={styles.View_407_518} />
            <View style={styles.View_407_519}>
              <View style={styles.View_407_520} />
              <View style={styles.View_407_521}>
                <Text style={styles.Text_407_521}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_407_522} />
      <View style={styles.View_407_523}>
        <Text style={styles.Text_407_523}>Cinthya Jauregui</Text>
      </View>
      <View style={styles.View_407_524}>
        <Text style={styles.Text_407_524}>Add Image</Text>
      </View>
      <View style={styles.View_407_550}>
        <View style={styles.View_I407_550_103_23} />
        <View style={styles.View_I407_550_103_22}>
          <Text style={styles.Text_I407_550_103_22}>Update</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("120_34"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
          }}
          style={styles.ImageBackground_407_568}
        />
      </TouchableOpacity>
      <View style={styles.View_407_570}>
        <View style={styles.View_I407_570_115_58} />
        <View style={styles.View_I407_570_115_89}>
          <Text style={styles.Text_I407_570_115_89}>PT John Smith</Text>
        </View>
        <View style={styles.View_I407_570_115_120}>
          <Text style={styles.Text_I407_570_115_120}>Physician </Text>
        </View>
      </View>
      <View style={styles.View_407_571}>
        <View style={styles.View_I407_571_321_207}>
          <Text style={styles.Text_I407_571_321_207}>Clinic</Text>
        </View>
        <View style={styles.View_I407_571_321_208} />
        <View style={styles.View_I407_571_321_210}>
          <Text style={styles.Text_I407_571_321_210}>Sutter </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_407_511: {
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
  View_407_512: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("11.612021857923498%")
  },
  Text_407_512: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_513: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("30.737704918032787%")
  },
  View_407_514: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_407_515: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_407_516: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224,
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_517: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_518: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_519: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("8.845628415300547%"),
    minHeight: hp("8.845628415300547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("13.114754098360653%")
  },
  View_407_520: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.19535519125683%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_407_521: {
    width: wp("7.608695652173914%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1135265700483075%")
  },
  Text_407_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_522: {
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    top: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_407_523: {
    width: wp("83.81642512077295%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  Text_407_523: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_524: {
    width: wp("30.917874396135264%"),
    top: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%")
  },
  Text_407_524: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_550: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("106.69398907103825%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_550_103_23: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
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
  View_I407_550_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I407_550_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_568: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_407_570: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("61.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_570_115_58: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.314503820867493%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I407_570_115_89: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("7.650273224043708%")
  },
  Text_I407_570_115_89: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_570_115_120: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_570_115_120: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_571: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("13.494232052662333%"),
    minHeight: hp("13.494232052662333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("78.55191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_571_321_207: {
    flexGrow: 1,
    width: wp("14.009661835748794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0%")
  },
  Text_I407_571_321_207: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_571_321_208: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311478%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I407_571_321_210: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("5.8743169398907185%")
  },
  Text_I407_571_321_210: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
