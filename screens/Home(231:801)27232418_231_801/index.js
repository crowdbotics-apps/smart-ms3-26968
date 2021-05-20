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
      <View style={styles.View_231_802} />
      <View style={styles.View_231_803}>
        <Text style={styles.Text_231_803}>Home</Text>
      </View>
      <View style={styles.View_231_839}>
        <View style={styles.View_231_840} />
        <View style={styles.View_370_324}>
          <View style={styles.View_231_841}>
            <View style={styles.View_I231_841_103_23} />
            <View style={styles.View_I231_841_103_22}>
              <Text style={styles.Text_I231_841_103_22}>Do Survey</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_231_842}>
          <Text style={styles.Text_231_842}>
            PT. John Arm requested you do a survey
          </Text>
        </View>
      </View>
      <View style={styles.View_370_344}>
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
            style={styles.ImageBackground_231_804}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c786/cdf9/8a9f9faeb9bffd847f32451100834db4"
          }}
          style={styles.ImageBackground_309_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/bb7e/ec442a0d766899bcbf1a0216092dabee"
          }}
          style={styles.ImageBackground_219_101}
        />
      </View>
      <View style={styles.View_415_0}>
        <View style={styles.View_I415_0_413_1007} />
        <View style={styles.View_I415_0_413_1336} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("219_97"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e06/ac4d/73b2c5e62621e2125af1c1d6fd5d8c6a"
            }}
            style={styles.ImageBackground_I415_0_368_397}
          />
        </TouchableOpacity>
        <View style={styles.View_I415_0_368_398}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("409_498"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74c5/84c2/42cc2451011912e2c27e8227f1e30297"
              }}
              style={styles.ImageBackground_I415_0_368_399}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21cf/2831/16135515f7a9abd6b6679ad6bd4d1889"
            }}
            style={styles.ImageBackground_I415_0_368_405}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c12/ca2f/98ab97d35f95822ed531838a81b9551b"
          }}
          style={styles.ImageBackground_I415_0_368_407}
        />
      </View>
      <View style={styles.View_231_814}>
        <Text style={styles.Text_231_814}>Overview</Text>
      </View>
      <View style={styles.View_431_608}>
        <View style={styles.View_431_558} />
        <View style={styles.View_231_836}>
          <View style={styles.View_231_821}>
            <View style={styles.View_231_822} />
            <View style={styles.View_231_823} />
            <View style={styles.View_231_824}>
              <Text style={styles.Text_231_824}>84%</Text>
            </View>
            <View style={styles.View_231_825}>
              <Text style={styles.Text_231_825}>
                *compared to your Right Calf
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_431_549}>
          <View style={styles.View_431_550}>
            <Text style={styles.Text_431_550}>Muscle Type</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("413_1231"))
            }
          >
            <View style={styles.View_431_551}>
              <View style={styles.View_I431_551_413_998} />
              <View style={styles.View_I431_551_413_999}>
                <Text style={styles.Text_I431_551_413_999}>Left Calf</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/265c/fa6a/b0bad6804592aa26e01e273e1fccf6b9"
                }}
                style={styles.ImageBackground_I431_551_413_1004}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_431_557}>
          <View style={styles.View_231_837}>
            <View style={styles.View_231_831}>
              <View style={styles.View_231_832} />
              <View style={styles.View_231_833}>
                <Text style={styles.Text_231_833}>14</Text>
              </View>
              <View style={styles.View_231_834}>
                <Text style={styles.Text_231_834}>13</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1310/ef97/98e0aec04b877420c4811ec356883b2b"
                }}
                style={styles.ImageBackground_231_835}
              />
            </View>
          </View>
          <View style={styles.View_431_556}>
            <Text style={styles.Text_431_556}>Completed Exercises</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_231_802: {
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
  View_231_803: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("12.978142076502733%")
  },
  Text_231_803: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_839: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("93.5792349726776%")
  },
  View_231_840: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
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
  View_370_324: {
    width: wp("71.76133307857789%"),
    minWidth: wp("71.76133307857789%"),
    height: hp("11.615925147885182%"),
    minHeight: hp("11.615925147885182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.105081899154589%"),
    top: hp("16.732504589310096%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_231_841: {
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
  View_I231_841_103_23: {
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
  View_I231_841_103_22: {
    flexGrow: 1,
    width: wp("59.834241636709315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.764785250603866%"),
    top: hp("0%")
  },
  Text_I231_841_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_842: {
    width: wp("71.28766193482035%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.710251075634059%")
  },
  Text_231_842: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_344: {
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
  ImageBackground_231_804: {
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
  ImageBackground_309_784: {
    flexGrow: 1,
    width: wp("7.252488620039347%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_219_101: {
    flexGrow: 1,
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.34782608695653%"),
    top: hp("1.502732240437159%")
  },
  View_415_0: {
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
  View_I415_0_413_1007: {
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
  View_I415_0_413_1336: {
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
  ImageBackground_I415_0_368_397: {
    flexGrow: 1,
    width: wp("16.1023181417714%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  View_I415_0_368_398: {
    flexGrow: 1,
    width: wp("10.305205635402514%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38647342995168%"),
    top: hp("1.2295081967213264%")
  },
  ImageBackground_I415_0_368_399: {
    width: wp("8.937198067632849%"),
    height: hp("5.601092896174864%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%")
  },
  ImageBackground_I415_0_368_405: {
    width: wp("10.305205635402514%"),
    height: hp("5.58800931836738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I415_0_368_407: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.464505888725239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.527433386171495%"),
    top: hp("1.2295081967213264%")
  },
  View_231_814: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("21.721311475409834%")
  },
  Text_231_814: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_431_608: {
    width: wp("82.3671497584541%"),
    minWidth: wp("82.3671497584541%"),
    height: hp("63.934426229508205%"),
    minHeight: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("27.18579234972678%")
  },
  View_431_558: {
    width: wp("82.3671497584541%"),
    minWidth: wp("82.3671497584541%"),
    height: hp("63.934426229508205%"),
    minHeight: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_231_836: {
    width: wp("75.84541062801932%"),
    minWidth: wp("75.84541062801932%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971033%"),
    top: hp("19.398907103825135%")
  },
  View_231_821: {
    width: wp("75.84541062801932%"),
    minWidth: wp("75.84541062801932%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_231_822: {
    width: wp("75.84541062801932%"),
    minWidth: wp("75.84541062801932%"),
    height: hp("8.19561598730869%"),
    minHeight: hp("8.19561598730869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 238, 188, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_231_823: {
    width: wp("56.48547186367754%"),
    minWidth: wp("56.48547186367754%"),
    height: hp("8.19561598730869%"),
    minHeight: hp("8.19561598730869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2277466410024136%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_231_824: {
    width: wp("24.591515951110544%"),
    minWidth: wp("24.591515951110544%"),
    minHeight: hp("7.281279954753939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.327540006038648%"),
    top: hp("0.83141222677596%")
  },
  Text_231_824: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_825: {
    width: wp("73.77454969618056%"),
    top: hp("9.531857016308052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7765912779287429%")
  },
  Text_231_825: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_431_549: {
    width: wp("76.81159420289855%"),
    minWidth: wp("76.81159420289855%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("3.551912568306008%")
  },
  View_431_550: {
    width: wp("37.43961352657005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%")
  },
  Text_431_550: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_431_551: {
    width: wp("76.81159420289855%"),
    minWidth: wp("76.81159420289855%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169403%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I431_551_413_998: {
    flexGrow: 1,
    width: wp("76.81159420289855%"),
    height: hp("6.830601092896176%"),
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
  View_I431_551_413_999: {
    flexGrow: 1,
    width: wp("29.71014492753623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.47880104544082%"),
    top: hp("0.8196721311475414%")
  },
  Text_I431_551_413_999: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I431_551_413_1004: {
    flexGrow: 1,
    width: wp("10.973085412656628%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.35967457352053%"),
    top: hp("0.1366120218579212%")
  },
  View_431_557: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("36.612021857923494%")
  },
  View_231_837: {
    width: wp("61.111111111111114%"),
    minWidth: wp("61.111111111111114%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111114%"),
    top: hp("5.464480874316955%")
  },
  View_231_831: {
    width: wp("61.111111111111114%"),
    minWidth: wp("61.111111111111114%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_231_832: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_231_833: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.75845410628018%"),
    top: hp("9.972677595628397%")
  },
  Text_231_833: {
    color: "rgba(127, 212, 87, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_834: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753621%"),
    top: hp("2.45901639344261%")
  },
  Text_231_834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 60,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_231_835: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.545893719806756%"),
    top: hp("9.153005464480856%")
  },
  View_431_556: {
    width: wp("52.17391304347826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_431_556: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
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
