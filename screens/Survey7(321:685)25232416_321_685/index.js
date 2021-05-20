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
      <View style={styles.View_321_686} />
      <View style={styles.View_321_688}>
        <Text style={styles.Text_321_688}>7/7</Text>
      </View>
      <View style={styles.View_321_689}>
        <Text style={styles.Text_321_689}>Lastly, Goals!</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("231_801"))
        }
      >
        <View style={styles.View_321_690}>
          <View style={styles.View_I321_690_103_23} />
          <View style={styles.View_I321_690_103_22}>
            <Text style={styles.Text_I321_690_103_22}>Submit</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_321_691}>
        <Text style={styles.Text_321_691}>
          Now that we got all of the medical paperwork out of the way...
        </Text>
      </View>
      <View style={styles.View_321_692}>
        <Text style={styles.Text_321_692}>Why did you want to do Therapy?</Text>
      </View>
      <View style={styles.View_321_693}>
        <View style={styles.View_I321_693_305_48}>
          <Text style={styles.Text_I321_693_305_48}>Select all that apply</Text>
        </View>
        <View style={styles.View_I321_693_305_36}>
          <View style={styles.View_I321_693_305_36_115_169}>
            <Text style={styles.Text_I321_693_305_36_115_169}>option</Text>
          </View>
          <View style={styles.View_I321_693_305_36_115_168} />
        </View>
        <View style={styles.View_I321_693_305_43}>
          <View style={styles.View_I321_693_305_43_305_30}>
            <View style={styles.View_I321_693_305_43_305_30_115_169}>
              <Text style={styles.Text_I321_693_305_43_305_30_115_169}>
                Reduce Pain{" "}
              </Text>
            </View>
            <View style={styles.View_I321_693_305_43_305_30_115_168} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7a/8692/1f81b5163a6334590ec3971cae6953b9"
            }}
            style={styles.ImageBackground_I321_693_305_43_305_40}
          />
        </View>
      </View>
      <View style={styles.View_321_694}>
        <View style={styles.View_I321_694_307_293}>
          <View style={styles.View_I321_694_307_293_307_250}>
            <Text style={styles.Text_I321_694_307_293_307_250}>to what?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_321_695}>
        <View style={styles.View_321_696} />
        <View style={styles.View_321_697}>
          <Text style={styles.Text_321_697}>0</Text>
        </View>
        <View style={styles.View_321_698}>
          <Text style={styles.Text_321_698}>/ 10</Text>
        </View>
      </View>
      <View style={styles.View_321_699}>
        <View style={styles.View_I321_699_115_169}>
          <Text style={styles.Text_I321_699_115_169}>option</Text>
        </View>
        <View style={styles.View_I321_699_115_168} />
      </View>
      <View style={styles.View_321_700}>
        <View style={styles.View_I321_700_115_169}>
          <Text style={styles.Text_I321_700_115_169}>option</Text>
        </View>
        <View style={styles.View_I321_700_115_168} />
      </View>
      <View style={styles.View_321_701}>
        <View style={styles.View_I321_701_305_30}>
          <View style={styles.View_I321_701_305_30_115_169}>
            <Text style={styles.Text_I321_701_305_30_115_169}>Other</Text>
          </View>
          <View style={styles.View_I321_701_305_30_115_168} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7a/8692/1f81b5163a6334590ec3971cae6953b9"
          }}
          style={styles.ImageBackground_I321_701_305_40}
        />
      </View>
      <View style={styles.View_321_703} />
      <View style={styles.View_321_704}>
        <Text style={styles.Text_321_704}>
          Thank you for the honesty in your responses. Here’s where our job
          begins!
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_370_435}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_321_686: {
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
  View_321_688: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.81642512077295%"),
    top: hp("3.415300546448088%")
  },
  Text_321_688: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_689: {
    width: wp("85.02415458937197%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%")
  },
  Text_321_689: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_690: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("104.50819672131149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_690_103_23: {
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
  View_I321_690_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I321_690_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_691: {
    width: wp("86.71497584541062%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%")
  },
  Text_321_691: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_692: {
    width: wp("84.29951690821255%"),
    top: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%")
  },
  Text_321_692: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_693: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("32.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_693_305_48: {
    flexGrow: 1,
    width: wp("86.71497584541062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594208%"),
    top: hp("4.918032786885249%")
  },
  Text_I321_693_305_48: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_693_305_36: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599033%"),
    top: hp("20.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_693_305_36_115_169: {
    flexGrow: 1,
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.40983606557377783%")
  },
  Text_I321_693_305_36_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_693_305_36_115_168: {
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
  View_I321_693_305_43: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599033%"),
    top: hp("9.972677595628419%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_693_305_43_305_30: {
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
  View_I321_693_305_43_305_30_115_169: {
    flexGrow: 1,
    width: wp("29.227053140096622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_693_305_43_305_30_115_169: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_693_305_43_305_30_115_168: {
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
  ImageBackground_I321_693_305_43_305_40: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("0.2732240437158495%")
  },
  View_321_694: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("45.62841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_694_307_293: {
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
  View_I321_694_307_293_307_250: {
    flexGrow: 1,
    width: wp("21.980676328502415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.775956284153004%")
  },
  Text_I321_694_307_293_307_250: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_695: {
    width: wp("28.743961352657006%"),
    height: hp("6.830601092896176%"),
    top: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.14975845410628%")
  },
  View_321_696: {
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
  View_321_697: {
    width: wp("4.830917874396135%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835755%")
  },
  Text_321_697: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_698: {
    width: wp("11.83574879227053%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.908212560386474%")
  },
  Text_321_698: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_699: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("58.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_699_115_169: {
    flexGrow: 1,
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.40983606557377783%")
  },
  Text_I321_699_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_699_115_168: {
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
  View_321_700: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_700_115_169: {
    flexGrow: 1,
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.40983606557377783%")
  },
  Text_I321_700_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_700_115_168: {
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
  View_321_701: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("71.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_701_305_30: {
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
  View_I321_701_305_30_115_169: {
    flexGrow: 1,
    width: wp("14.251207729468598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("-0.40983606557378494%")
  },
  Text_I321_701_305_30_115_169: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_701_305_30_115_168: {
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
  ImageBackground_I321_701_305_40: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("0.2732240437158424%")
  },
  View_321_703: {
    width: wp("77.53623188405797%"),
    height: hp("9.426229508196721%"),
    top: hp("75.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_321_704: {
    width: wp("91.06280193236715%"),
    top: hp("95.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  Text_321_704: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_435: {
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
