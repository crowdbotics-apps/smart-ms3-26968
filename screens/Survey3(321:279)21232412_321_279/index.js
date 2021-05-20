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
      <View style={styles.View_321_280} />
      <View style={styles.View_321_282}>
        <Text style={styles.Text_321_282}>3/7</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("321_385"))
        }
      >
        <View style={styles.View_321_283}>
          <View style={styles.View_I321_283_103_23} />
          <View style={styles.View_I321_283_103_22}>
            <Text style={styles.Text_I321_283_103_22}>Next Page</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_321_363}>
        <Text style={styles.Text_321_363}>Medical History (cont.)</Text>
      </View>
      <View style={styles.View_321_364}>
        <View style={styles.View_I321_364_305_22}>
          <Text style={styles.Text_I321_364_305_22}>Do you smoke?</Text>
        </View>
        <View style={styles.View_I321_364_305_23}>
          <View style={styles.View_I321_364_305_24} />
          <View style={styles.View_I321_364_305_25}>
            <Text style={styles.Text_I321_364_305_25}>N</Text>
          </View>
        </View>
        <View style={styles.View_I321_364_305_26}>
          <Text style={styles.Text_I321_364_305_26}>Y</Text>
        </View>
      </View>
      <View style={styles.View_321_370}>
        <View style={styles.View_I321_370_307_293}>
          <View style={styles.View_I321_370_307_293_307_250}>
            <Text style={styles.Text_I321_370_307_293_307_250}>
              Amount of packs in a day
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_321_376}>
        <View style={styles.View_321_377} />
        <View style={styles.View_321_378}>
          <Text style={styles.Text_321_378}>20</Text>
        </View>
      </View>
      <View style={styles.View_321_379}>
        <View style={styles.View_I321_379_307_176}>
          <Text style={styles.Text_I321_379_307_176}>Prior Surgeries </Text>
        </View>
        <View style={styles.View_I321_379_307_169} />
      </View>
      <View style={styles.View_321_382}>
        <View style={styles.View_I321_382_307_176}>
          <Text style={styles.Text_I321_382_307_176}>Current Medications</Text>
        </View>
        <View style={styles.View_I321_382_307_169} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_370_423}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_321_280: {
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
  View_321_282: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.81642512077295%"),
    top: hp("3.415300546448088%")
  },
  Text_321_282: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_283: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("104.91803278688525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_283_103_23: {
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
  View_I321_283_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I321_283_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_363: {
    width: wp("85.02415458937197%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%")
  },
  Text_321_363: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_364: {
    width: wp("79.95169082125604%"),
    minWidth: wp("79.95169082125604%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("28.415300546448087%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_364_305_22: {
    flexGrow: 1,
    width: wp("38.405797101449274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I321_364_305_22: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_364_305_23: {
    flexGrow: 1,
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: hp("-0.2732240437158495%")
  },
  View_I321_364_305_24: {
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_I321_364_305_25: {
    width: wp("3.140096618357488%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%")
  },
  Text_I321_364_305_25: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_364_305_26: {
    flexGrow: 1,
    width: wp("2.657004830917874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.04830917874395%"),
    top: hp("0.4098360655737707%")
  },
  Text_I321_364_305_26: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_370: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("34.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_370_307_293: {
    flexGrow: 1,
    width: wp("82.1256038647343%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_370_307_293_307_250: {
    flexGrow: 1,
    width: wp("63.28502415458937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841530112%")
  },
  Text_I321_370_307_293_307_250: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_376: {
    width: wp("15.217391304347828%"),
    height: hp("6.830601092896176%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%")
  },
  View_321_377: {
    width: wp("15.217391304347828%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_321_378: {
    width: wp("8.937198067632849%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077292%")
  },
  Text_321_378: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_379: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("68.30601092896174%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_379_307_176: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594208%"),
    top: hp("0%")
  },
  Text_I321_379_307_176: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_379_307_169: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169406%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_321_382: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("44.26229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_382_307_176: {
    flexGrow: 1,
    width: wp("50.96618357487923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594208%"),
    top: hp("0%")
  },
  Text_I321_382_307_176: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_382_307_169: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_370_423: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
