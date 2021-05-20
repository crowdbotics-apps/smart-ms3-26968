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
      <View style={styles.View_304_28} />
      <View style={styles.View_304_35}>
        <Text style={styles.Text_304_35}>Initial Survey</Text>
      </View>
      <View style={styles.View_304_48}>
        <Text style={styles.Text_304_48}>
          You can change this later on your profile
        </Text>
      </View>
      <View style={styles.View_304_49}>
        <View style={styles.View_I304_49_115_58} />
        <View style={styles.View_I304_49_115_89}>
          <Text style={styles.Text_I304_49_115_89}>Name</Text>
        </View>
        <View style={styles.View_I304_49_115_120}>
          <Text style={styles.Text_I304_49_115_120}>Patient Details</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("307_195"))
        }
      >
        <View style={styles.View_305_27}>
          <View style={styles.View_I305_27_103_23} />
          <View style={styles.View_I305_27_103_22}>
            <Text style={styles.Text_I305_27_103_22}>Next Page</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_307_237}>
        <Text style={styles.Text_307_237}>1/7</Text>
      </View>
      <View style={styles.View_321_179}>
        <View style={styles.View_I321_179_305_22}>
          <Text style={styles.Text_I321_179_305_22}>Sex</Text>
        </View>
        <View style={styles.View_I321_179_305_23}>
          <View style={styles.View_I321_179_305_24} />
          <View style={styles.View_I321_179_305_25}>
            <Text style={styles.Text_I321_179_305_25}>F</Text>
          </View>
        </View>
        <View style={styles.View_I321_179_305_26}>
          <Text style={styles.Text_I321_179_305_26}>M</Text>
        </View>
      </View>
      <View style={styles.View_321_186}>
        <View style={styles.View_I321_186_307_293}>
          <View style={styles.View_I321_186_307_293_307_250}>
            <Text style={styles.Text_I321_186_307_293_307_250}>
              Date of Birth
            </Text>
          </View>
          <View style={styles.View_I321_186_307_293_307_252}>
            <View style={styles.View_I321_186_307_293_307_253} />
            <View style={styles.View_I321_186_307_293_307_254}>
              <Text style={styles.Text_I321_186_307_293_307_254}>12/28/20</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_321_197}>
        <View style={styles.View_I321_197_115_58} />
        <View style={styles.View_I321_197_115_89}>
          <Text style={styles.Text_I321_197_115_89}>Name</Text>
        </View>
        <View style={styles.View_I321_197_115_120}>
          <Text style={styles.Text_I321_197_115_120}>Physician </Text>
        </View>
      </View>
      <View style={styles.View_321_201}>
        <View style={styles.View_I321_201_307_293}>
          <View style={styles.View_I321_201_307_293_307_250}>
            <Text style={styles.Text_I321_201_307_293_307_250}>
              First Session
            </Text>
          </View>
          <View style={styles.View_I321_201_307_293_307_252}>
            <View style={styles.View_I321_201_307_293_307_253} />
            <View style={styles.View_I321_201_307_293_307_254}>
              <Text style={styles.Text_I321_201_307_293_307_254}>12/28/20</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_321_266}>
        <View style={styles.View_I321_266_321_207}>
          <Text style={styles.Text_I321_266_321_207}>Clinic</Text>
        </View>
        <View style={styles.View_I321_266_321_208} />
        <View style={styles.View_I321_266_321_210}>
          <Text style={styles.Text_I321_266_321_210}>Sutter - Prefilled</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_370_415}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_304_28: {
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
  View_304_35: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("11.33879781420765%")
  },
  Text_304_35: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_304_48: {
    width: wp("86.71497584541062%"),
    top: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%")
  },
  Text_304_48: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_304_49: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I304_49_115_58: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.31450382086749%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I304_49_115_89: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("7.650273224043719%")
  },
  Text_I304_49_115_89: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I304_49_115_120: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I304_49_115_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_305_27: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("104.64214053961749%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I305_27_103_23: {
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
  View_I305_27_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I305_27_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_237: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29951690821255%"),
    top: hp("3.551912568306011%")
  },
  Text_307_237: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_179: {
    width: wp("79.95169082125604%"),
    minWidth: wp("79.95169082125604%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("51.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_179_305_22: {
    flexGrow: 1,
    width: wp("8.937198067632849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I321_179_305_22: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_179_305_23: {
    flexGrow: 1,
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: hp("-0.2732240437158424%")
  },
  View_I321_179_305_24: {
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
  View_I321_179_305_25: {
    width: wp("2.4154589371980677%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%")
  },
  Text_I321_179_305_25: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_179_305_26: {
    flexGrow: 1,
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.04830917874396%"),
    top: hp("0.4098360655737707%")
  },
  Text_I321_179_305_26: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_186: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("41.12021857923497%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_186_307_293: {
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
  View_I321_186_307_293_307_250: {
    flexGrow: 1,
    width: wp("32.125603864734295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.775956284153004%")
  },
  Text_I321_186_307_293_307_250: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_186_307_293_307_252: {
    flexGrow: 1,
    width: wp("35.507246376811594%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.207729468599034%"),
    top: hp("0%")
  },
  View_I321_186_307_293_307_253: {
    width: wp("35.507246376811594%"),
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
  View_I321_186_307_293_307_254: {
    width: wp("31.15942028985507%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077285%")
  },
  Text_I321_186_307_293_307_254: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_197: {
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
  View_I321_197_115_58: {
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
  View_I321_197_115_89: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("7.650273224043708%")
  },
  Text_I321_197_115_89: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_197_115_120: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I321_197_115_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_201: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_201_307_293: {
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
  View_I321_201_307_293_307_250: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.775956284152997%")
  },
  Text_I321_201_307_293_307_250: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_201_307_293_307_252: {
    flexGrow: 1,
    width: wp("35.507246376811594%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.207729468599034%"),
    top: hp("0%")
  },
  View_I321_201_307_293_307_253: {
    width: wp("35.507246376811594%"),
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
  View_I321_201_307_293_307_254: {
    width: wp("31.15942028985507%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077299%")
  },
  Text_I321_201_307_293_307_254: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_266: {
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
  View_I321_266_321_207: {
    flexGrow: 1,
    width: wp("14.009661835748794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0%")
  },
  Text_I321_266_321_207: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_266_321_208: {
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
  View_I321_266_321_210: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("5.8743169398907185%")
  },
  Text_I321_266_321_210: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_415: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
