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
      <View style={styles.View_231_763} />
      <View style={styles.View_231_795}>
        <View style={styles.View_231_796} />
        <View style={styles.View_231_798}>
          <Text style={styles.Text_231_798}>
            Nothing to show. Please complete the following survey to get
            started.
          </Text>
        </View>
      </View>
      <View style={styles.View_231_838}>
        <Text style={styles.Text_231_838}>Home</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("304_27"))
        }
      >
        <View style={styles.View_370_325}>
          <View style={styles.View_I370_325_231_841}>
            <View style={styles.View_I370_325_231_841_103_23} />
            <View style={styles.View_I370_325_231_841_103_22}>
              <Text style={styles.Text_I370_325_231_841_103_22}>Do Survey</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_370_359}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("120_34"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/794f/bd4c/ca728765fa997534b3b09b44974b191b"
            }}
            style={styles.ImageBackground_I370_359_231_804}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c786/cdf9/8a9f9faeb9bffd847f32451100834db4"
          }}
          style={styles.ImageBackground_I370_359_309_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/bb7e/ec442a0d766899bcbf1a0216092dabee"
          }}
          style={styles.ImageBackground_I370_359_219_101}
        />
      </View>
      <View style={styles.View_368_443}>
        <View style={styles.View_413_1007} />
        <View style={styles.View_413_1336} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("370_383"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e06/ac4d/73b2c5e62621e2125af1c1d6fd5d8c6a"
            }}
            style={styles.ImageBackground_368_397}
          />
        </TouchableOpacity>
        <View style={styles.View_368_398}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("115_226"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74c5/84c2/42cc2451011912e2c27e8227f1e30297"
              }}
              style={styles.ImageBackground_368_399}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21cf/2831/16135515f7a9abd6b6679ad6bd4d1889"
            }}
            style={styles.ImageBackground_368_405}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c12/ca2f/98ab97d35f95822ed531838a81b9551b"
          }}
          style={styles.ImageBackground_368_407}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_231_763: {
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
  View_231_795: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("30.327868852459016%")
  },
  View_231_796: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_231_798: {
    width: wp("72.70531400966183%"),
    top: hp("1.6393442622950865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.03864734299517%")
  },
  Text_231_798: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_838: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("17.62295081967213%")
  },
  Text_231_838: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_325: {
    width: wp("71.76133307857789%"),
    minWidth: wp("71.76133307857789%"),
    height: hp("11.615925147885182%"),
    minHeight: hp("11.615925147885182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589372%"),
    top: hp("52.595628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_325_231_841: {
    flexGrow: 1,
    width: wp("71.76133307857789%"),
    height: hp("11.615925147885182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_325_231_841_103_23: {
    flexGrow: 1,
    width: wp("71.76133307857789%"),
    height: hp("11.615925147885182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37
  },
  View_I370_325_231_841_103_22: {
    flexGrow: 1,
    width: wp("59.834241636709315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.764755765021135%"),
    top: hp("0%")
  },
  Text_I370_325_231_841_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_359: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014492%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I370_359_231_804: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835748792270536%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 256,
    borderTopRightRadius: 256,
    borderBottomLeftRadius: 256,
    borderBottomRightRadius: 256
  },
  ImageBackground_I370_359_309_784: {
    flexGrow: 1,
    width: wp("7.252488620039347%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I370_359_219_101: {
    flexGrow: 1,
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.34782608695653%"),
    top: hp("1.502732240437159%")
  },
  View_368_443: {
    width: wp("73.10713615970336%"),
    minWidth: wp("73.10713615970336%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309178%"),
    top: hp("109.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_413_1007: {
    flexGrow: 1,
    width: wp("100.2415458937198%"),
    height: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.768115942028984%"),
    top: hp("-4.098360655737693%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderColor: "rgba(208, 241, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_1336: {
    flexGrow: 1,
    width: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.777777777777775%"),
    top: hp("-1.3661202185792263%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 39.5,
    borderTopRightRadius: 39.5,
    borderBottomLeftRadius: 39.5,
    borderBottomRightRadius: 39.5
  },
  ImageBackground_368_397: {
    flexGrow: 1,
    width: wp("16.1023181417714%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  View_368_398: {
    flexGrow: 1,
    width: wp("10.305205635402514%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38647342995168%"),
    top: hp("1.2295081967213264%")
  },
  ImageBackground_368_399: {
    width: wp("8.937198067632849%"),
    height: hp("5.601092896174864%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%")
  },
  ImageBackground_368_405: {
    width: wp("10.305205635402514%"),
    height: hp("5.58800931836738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_407: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.464505888725239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.527433386171495%"),
    top: hp("1.2295081967213264%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
