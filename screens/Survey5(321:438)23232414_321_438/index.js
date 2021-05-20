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
      <View style={styles.View_321_439} />
      <View style={styles.View_321_442}>
        <Text style={styles.Text_321_442}>5/7</Text>
      </View>
      <View style={styles.View_321_444}>
        <Text style={styles.Text_321_444}>Pain Description</Text>
      </View>
      <View style={styles.View_321_487}>
        <View style={styles.View_321_488}>
          <Text style={styles.Text_321_488}>Rating</Text>
        </View>
        <View style={styles.View_321_489}>
          <View style={styles.View_321_494} />
          <View style={styles.View_321_495}>
            <Text style={styles.Text_321_495}>2</Text>
          </View>
          <View style={styles.View_321_504}>
            <Text style={styles.Text_321_504}>3</Text>
          </View>
          <View style={styles.View_321_497}>
            <Text style={styles.Text_321_497}>4</Text>
          </View>
          <View style={styles.View_321_498}>
            <Text style={styles.Text_321_498}>5</Text>
          </View>
          <View style={styles.View_321_505}>
            <Text style={styles.Text_321_505}>1</Text>
          </View>
          <View style={styles.View_321_527}>
            <Text style={styles.Text_321_527}>0</Text>
          </View>
          <View style={styles.View_321_528}>
            <Text style={styles.Text_321_528}>No Pain</Text>
          </View>
          <View style={styles.View_321_530}>
            <Text style={styles.Text_321_530}>Pain</Text>
          </View>
          <View style={styles.View_321_506}>
            <Text style={styles.Text_321_506}>7</Text>
          </View>
          <View style={styles.View_321_507}>
            <Text style={styles.Text_321_507}>8</Text>
          </View>
          <View style={styles.View_321_508}>
            <Text style={styles.Text_321_508}>9</Text>
          </View>
          <View style={styles.View_321_511}>
            <Text style={styles.Text_321_511}>10</Text>
          </View>
          <View style={styles.View_321_510}>
            <Text style={styles.Text_321_510}>6</Text>
          </View>
        </View>
        <View style={styles.View_321_526}>
          <Text style={styles.Text_321_526}>
            Select from 0-no pain to 10-unbearable
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("321_568"))
        }
      >
        <View style={styles.View_321_535}>
          <View style={styles.View_I321_535_103_23} />
          <View style={styles.View_I321_535_103_22}>
            <Text style={styles.Text_I321_535_103_22}>Next Page</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_321_737}>
        <View style={styles.View_I321_737_305_48}>
          <Text style={styles.Text_I321_737_305_48}>Select all that apply</Text>
        </View>
        <View style={styles.View_I321_737_305_33}>
          <View style={styles.View_I321_737_305_33_115_169}>
            <Text style={styles.Text_I321_737_305_33_115_169}>option</Text>
          </View>
          <View style={styles.View_I321_737_305_33_115_168} />
        </View>
        <View style={styles.View_I321_737_305_36}>
          <View style={styles.View_I321_737_305_36_115_169}>
            <Text style={styles.Text_I321_737_305_36_115_169}>option</Text>
          </View>
          <View style={styles.View_I321_737_305_36_115_168} />
        </View>
        <View style={styles.View_I321_737_305_43}>
          <View style={styles.View_I321_737_305_43_305_30}>
            <View style={styles.View_I321_737_305_43_305_30_115_169}>
              <Text style={styles.Text_I321_737_305_43_305_30_115_169}>
                option
              </Text>
            </View>
            <View style={styles.View_I321_737_305_43_305_30_115_168} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7a/8692/1f81b5163a6334590ec3971cae6953b9"
            }}
            style={styles.ImageBackground_I321_737_305_43_305_40}
          />
        </View>
      </View>
      <View style={styles.View_321_751}>
        <Text style={styles.Text_321_751}>When is it Worst?</Text>
      </View>
      <View style={styles.View_321_752}>
        <View style={styles.View_I321_752_305_30}>
          <View style={styles.View_I321_752_305_30_115_169}>
            <Text style={styles.Text_I321_752_305_30_115_169}>Other</Text>
          </View>
          <View style={styles.View_I321_752_305_30_115_168} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7a/8692/1f81b5163a6334590ec3971cae6953b9"
          }}
          style={styles.ImageBackground_I321_752_305_40}
        />
      </View>
      <View style={styles.View_321_757} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_370_429}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_321_439: {
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
  View_321_442: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.81642512077295%"),
    top: hp("3.415300546448088%")
  },
  Text_321_442: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_444: {
    width: wp("85.02415458937197%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%")
  },
  Text_321_444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_487: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("28.688516252027835%"),
    minHeight: hp("28.688516252027835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("25.40983606557377%")
  },
  View_321_488: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  Text_321_488: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_489: {
    width: wp("81.64251207729468%"),
    minWidth: wp("81.64251207729468%"),
    height: hp("18.852450678257345%"),
    minHeight: hp("18.852450678257345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377049%")
  },
  View_321_494: {
    width: wp("9.450195607355827%"),
    minWidth: wp("9.450195607355827%"),
    height: hp("4.777791591289916%"),
    minHeight: hp("4.777791591289916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.19232384133454%"),
    top: hp("6.676245517418032%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_321_495: {
    width: wp("3.302082117053046%"),
    minWidth: wp("3.302082117053046%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.459673747924217%"),
    top: hp("8.093728654371589%")
  },
  Text_321_495: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_504: {
    width: wp("3.6689799764881967%"),
    minWidth: wp("3.6689799764881967%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.60103234922252%"),
    top: hp("8.093728654371589%")
  },
  Text_321_504: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_497: {
    width: wp("4.035878296635577%"),
    minWidth: wp("4.035878296635577%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.3530078832654%"),
    top: hp("8.093728654371589%")
  },
  Text_321_497: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_498: {
    width: wp("3.6689799764881967%"),
    minWidth: wp("3.6689799764881967%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.14943647154287%"),
    top: hp("8.093728654371589%")
  },
  Text_321_498: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_505: {
    width: wp("2.5682859374705145%"),
    minWidth: wp("2.5682859374705145%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("8.093728654371589%")
  },
  Text_321_505: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_527: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("0%")
  },
  Text_321_527: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_528: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  Text_321_528: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_530: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%")
  },
  Text_321_530: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_506: {
    width: wp("3.6689799764881967%"),
    minWidth: wp("3.6689799764881967%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.459644262341488%"),
    top: hp("15.513535796618854%")
  },
  Text_321_506: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_507: {
    width: wp("4.035878296635577%"),
    minWidth: wp("4.035878296635577%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.60103234922252%"),
    top: hp("15.513535796618854%")
  },
  Text_321_507: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_508: {
    width: wp("3.6689799764881967%"),
    minWidth: wp("3.6689799764881967%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.3529636548913%"),
    top: hp("15.513535796618854%")
  },
  Text_321_508: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_511: {
    width: wp("6.237266374670941%"),
    minWidth: wp("6.237266374670941%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.65773135567633%"),
    top: hp("15.513535796618854%")
  },
  Text_321_511: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_510: {
    width: wp("3.6689799764881967%"),
    minWidth: wp("3.6689799764881967%"),
    minHeight: hp("3.338906804069144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("15.513535796618854%")
  },
  Text_321_510: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_526: {
    width: wp("86.71497584541062%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_321_526: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_535: {
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
  View_I321_535_103_23: {
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
  View_I321_535_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I321_535_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_737: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("57.650273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_737_305_48: {
    flexGrow: 1,
    width: wp("86.71497584541062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594208%"),
    top: hp("4.918032786885249%")
  },
  Text_I321_737_305_48: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_737_305_33: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("15.163934426229503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_737_305_33_115_169: {
    flexGrow: 1,
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737565%")
  },
  Text_I321_737_305_33_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_737_305_33_115_168: {
    flexGrow: 1,
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_I321_737_305_36: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("20.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_737_305_36_115_169: {
    flexGrow: 1,
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_737_305_36_115_169: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_737_305_36_115_168: {
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
  View_I321_737_305_43: {
    flexGrow: 1,
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("9.972677595628411%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_737_305_43_305_30: {
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
  View_I321_737_305_43_305_30_115_169: {
    flexGrow: 1,
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_737_305_43_305_30_115_169: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_737_305_43_305_30_115_168: {
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
  ImageBackground_I321_737_305_43_305_40: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386486%"),
    top: hp("0.2732240437158566%")
  },
  View_321_751: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("59.56284153005464%")
  },
  Text_321_751: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_321_752: {
    width: wp("82.6086956521739%"),
    height: hp("3.9617486338797816%"),
    top: hp("83.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I321_752_305_30: {
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
  View_I321_752_305_30_115_169: {
    flexGrow: 1,
    width: wp("14.251207729468598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913041%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I321_752_305_30_115_169: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I321_752_305_30_115_168: {
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
  ImageBackground_I321_752_305_40: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("0.2732240437158424%")
  },
  View_321_757: {
    width: wp("77.53623188405797%"),
    height: hp("9.426229508196721%"),
    top: hp("88.52459016393442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.009661835748794%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_370_429: {
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
