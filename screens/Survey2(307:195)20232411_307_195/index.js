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
      <View style={styles.View_307_196} />
      <View style={styles.View_307_238}>
        <Text style={styles.Text_307_238}>2/7</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("321_279"))
        }
      >
        <View style={styles.View_321_214}>
          <View style={styles.View_I321_214_103_23} />
          <View style={styles.View_I321_214_103_22}>
            <Text style={styles.Text_I321_214_103_22}>Next Page</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_321_220}>
        <View style={styles.View_I321_220_305_48}>
          <Text style={styles.Text_I321_220_305_48}>Select all that apply</Text>
        </View>
        <View style={styles.View_I321_220_305_5}>
          <Text style={styles.Text_I321_220_305_5}>Medical History</Text>
        </View>
        <View style={styles.View_I321_220_305_36}>
          <View style={styles.View_I321_220_305_36_115_169}>
            <Text style={styles.Text_I321_220_305_36_115_169}>
              {" "}
              Balance Problems{" "}
            </Text>
          </View>
          <View style={styles.View_I321_220_305_36_115_168} />
        </View>
        <View style={styles.View_I321_220_305_43}>
          <View style={styles.View_I321_220_305_43_305_30}>
            <View style={styles.View_I321_220_305_43_305_30_115_169}>
              <Text style={styles.Text_I321_220_305_43_305_30_115_169}>
                None of the above
              </Text>
            </View>
            <View style={styles.View_I321_220_305_43_305_30_115_168} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7a/8692/1f81b5163a6334590ec3971cae6953b9"
            }}
            style={styles.ImageBackground_I321_220_305_43_305_40}
          />
        </View>
      </View>
      <View style={styles.View_321_274}>
        <View style={styles.View_I321_274_305_30}>
          <View style={styles.View_I321_274_305_30_115_169}>
            <Text style={styles.Text_I321_274_305_30_115_169}>Cancer</Text>
          </View>
          <View style={styles.View_I321_274_305_30_115_168} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7a/8692/1f81b5163a6334590ec3971cae6953b9"
          }}
          style={styles.ImageBackground_I321_274_305_40}
        />
      </View>
      <View style={styles.View_321_234}>
        <View style={styles.View_I321_234_115_169}>
          <Text style={styles.Text_I321_234_115_169}>
            Bladder or Urinary Infections
          </Text>
        </View>
        <View style={styles.View_I321_234_115_168} />
      </View>
      <View style={styles.View_321_237}>
        <View style={styles.View_I321_237_115_169}>
          <Text style={styles.Text_I321_237_115_169}>None of the above</Text>
        </View>
        <View style={styles.View_I321_237_115_168} />
      </View>
      <View style={styles.View_321_240}>
        <View style={styles.View_I321_240_115_169}>
          <Text style={styles.Text_I321_240_115_169}>None of the above</Text>
        </View>
        <View style={styles.View_I321_240_115_168} />
      </View>
      <View style={styles.View_321_243}>
        <View style={styles.View_I321_243_115_169}>
          <Text style={styles.Text_I321_243_115_169}>
            Bladder or Urinary Infections
          </Text>
        </View>
        <View style={styles.View_I321_243_115_168} />
      </View>
      <View style={styles.View_321_244}>
        <View style={styles.View_I321_244_115_169}>
          <Text style={styles.Text_I321_244_115_169}>None of the above</Text>
        </View>
        <View style={styles.View_I321_244_115_168} />
      </View>
      <View style={styles.View_321_245}>
        <View style={styles.View_I321_245_115_169}>
          <Text style={styles.Text_I321_245_115_169}>None of the above</Text>
        </View>
        <View style={styles.View_I321_245_115_168} />
      </View>
      <View style={styles.View_321_252}>
        <View style={styles.View_I321_252_115_169}>
          <Text style={styles.Text_I321_252_115_169}>
            Bladder or Urinary Infections
          </Text>
        </View>
        <View style={styles.View_I321_252_115_168} />
      </View>
      <View style={styles.View_321_253}>
        <View style={styles.View_I321_253_115_169}>
          <Text style={styles.Text_I321_253_115_169}>None of the above</Text>
        </View>
        <View style={styles.View_I321_253_115_168} />
      </View>
      <View style={styles.View_321_270}>
        <View style={styles.View_I321_270_321_207}>
          <Text style={styles.Text_I321_270_321_207}>type</Text>
        </View>
      </View>
      <View style={styles.View_321_652} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_370_419}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_307_196: {
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
  View_307_238: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.81642512077295%"),
    top: hp("3.415300546448088%")
  },
  Text_307_238: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_214: {
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
  View_I321_214_103_23: {
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
  View_I321_214_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I321_214_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_220: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("17.759562841530055%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_220_305_48: {
    flexGrow: 1,
    width: wp("86.71497584541062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594208%"),
    top: hp("4.918032786885245%")
  },
  Text_I321_220_305_48: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_220_305_5: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I321_220_305_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_220_305_36: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599033%"),
    top: hp("20.218579234972673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_220_305_36_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_220_305_36_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_220_305_36_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_I321_220_305_43: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599033%"),
    top: hp("9.972677595628411%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_220_305_43_305_30: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_220_305_43_305_30_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.4098360655737636%")
  },
  Text_I321_220_305_43_305_30_115_169: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_220_305_43_305_30_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  ImageBackground_I321_220_305_43_305_40: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("0.2732240437158495%")
  },
  View_321_274: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("87.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_274_305_30: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_274_305_30_115_169: {
    flexGrow: 1,
    width: wp("16.908212560386474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_274_305_30_115_169: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_274_305_30_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  ImageBackground_I321_274_305_40: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("0.2732240437158424%")
  },
  View_321_234: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_234_115_169: {
    flexGrow: 1,
    width: wp("69.80676328502415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_234_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_234_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_237: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("48.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_237_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_237_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_237_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_240: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_240_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.40983606557377783%")
  },
  Text_I321_240_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_240_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737636%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_243: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("59.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_243_115_169: {
    flexGrow: 1,
    width: wp("69.80676328502415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737636%")
  },
  Text_I321_243_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_243_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737636%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_244: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("65.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_244_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_244_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_244_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_245: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_245_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.40983606557378494%")
  },
  Text_I321_245_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_245_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_252: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("76.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_252_115_169: {
    flexGrow: 1,
    width: wp("69.80676328502415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_252_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_252_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_253: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_253_115_169: {
    flexGrow: 1,
    width: wp("43.23671497584541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.40983606557378494%")
  },
  Text_I321_253_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_253_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_321_270: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("13.494232052662333%"),
    minHeight: hp("13.494232052662333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("92.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_270_321_207: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0%")
  },
  Text_I321_270_321_207: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_652: {
    width: wp("77.53623188405797%"),
    height: hp("9.426229508196721%"),
    top: hp("96.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_370_419: {
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
