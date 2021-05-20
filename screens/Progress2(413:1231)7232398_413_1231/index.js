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
      <View style={styles.View_413_1232} />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("409_498"))
        }
      >
        <View style={styles.View_413_1244}>
          <View style={styles.View_413_1245} />
          <View style={styles.View_413_1246}>
            <Text style={styles.Text_413_1246}>Weekly</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/866b/6cdc/7557b54b731d0f90421ce894093972db"
            }}
            style={styles.ImageBackground_413_1247}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_413_1249}>
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
            style={styles.ImageBackground_I413_1249_231_804}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c786/cdf9/8a9f9faeb9bffd847f32451100834db4"
          }}
          style={styles.ImageBackground_I413_1249_309_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/bb7e/ec442a0d766899bcbf1a0216092dabee"
          }}
          style={styles.ImageBackground_I413_1249_219_101}
        />
      </View>
      <View style={styles.View_413_1250}>
        <Text style={styles.Text_413_1250}>Progress</Text>
      </View>
      <View style={styles.View_413_1251}>
        <View style={styles.View_I413_1251_103_23} />
        <View style={styles.View_I413_1251_103_22}>
          <Text style={styles.Text_I413_1251_103_22}>Send to Therapist</Text>
        </View>
      </View>
      <View style={styles.View_413_1329}>
        <View style={styles.View_413_1330} />
        <View style={styles.View_413_1331} />
        <View style={styles.View_413_1332}>
          <Text style={styles.Text_413_1332}>12/28/20</Text>
        </View>
        <View style={styles.View_413_1333}>
          <Text style={styles.Text_413_1333}>to</Text>
        </View>
        <View style={styles.View_413_1334}>
          <Text style={styles.Text_413_1334}>1/05/21</Text>
        </View>
      </View>
      <View style={styles.View_413_1605}>
        <View style={styles.View_I413_1605_413_1504} />
        <View style={styles.View_I413_1605_413_1505} />
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
            style={styles.ImageBackground_I413_1605_413_1506}
          />
        </TouchableOpacity>
        <View style={styles.View_I413_1605_413_1507}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/087b/d627a2ea97a9286b0b745ee246e5c52a"
            }}
            style={styles.ImageBackground_I413_1605_413_1508}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fc/8bff/3cb30005ab002f1f45790e670dc47e6c"
            }}
            style={styles.ImageBackground_I413_1605_413_1514}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("231_801"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f2/0189/a4dd2617d35e88e02808f912632848be"
            }}
            style={styles.ImageBackground_I413_1605_413_1516}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_231_754}>
        <View style={styles.View_231_755}>
          <Text style={styles.Text_231_755}>Stats</Text>
        </View>
        <View style={styles.View_231_756}>
          <Text style={styles.Text_231_756}>Mean</Text>
        </View>
        <View style={styles.View_231_757}>
          <Text style={styles.Text_231_757}>4</Text>
        </View>
        <View style={styles.View_231_758}>
          <Text style={styles.Text_231_758}>Mode</Text>
        </View>
        <View style={styles.View_231_759}>
          <Text style={styles.Text_231_759}>4</Text>
        </View>
        <View style={styles.View_231_760}>
          <Text style={styles.Text_231_760}>Average</Text>
        </View>
        <View style={styles.View_231_761}>
          <Text style={styles.Text_231_761}>4</Text>
        </View>
      </View>
      <View style={styles.View_219_309}>
        <View style={styles.View_413_1628}>
          <View style={styles.View_413_1621}>
            <Text style={styles.Text_413_1621}>12/28</Text>
          </View>
          <View style={styles.View_413_1622}>
            <Text style={styles.Text_413_1622}>12/29</Text>
          </View>
          <View style={styles.View_413_1623}>
            <Text style={styles.Text_413_1623}>12/30</Text>
          </View>
          <View style={styles.View_413_1624}>
            <Text style={styles.Text_413_1624}>12/31</Text>
          </View>
          <View style={styles.View_413_1625}>
            <Text style={styles.Text_413_1625}>1/01</Text>
          </View>
          <View style={styles.View_413_1626}>
            <Text style={styles.Text_413_1626}>1/02</Text>
          </View>
          <View style={styles.View_413_1627}>
            <Text style={styles.Text_413_1627}>1/03</Text>
          </View>
        </View>
        <View style={styles.View_413_1629}>
          <View style={styles.View_219_311}>
            <Text style={styles.Text_219_311}>Mon</Text>
          </View>
          <View style={styles.View_219_312}>
            <Text style={styles.Text_219_312}>Tue</Text>
          </View>
          <View style={styles.View_219_313}>
            <Text style={styles.Text_219_313}>Wed</Text>
          </View>
          <View style={styles.View_219_314}>
            <Text style={styles.Text_219_314}>Thu</Text>
          </View>
          <View style={styles.View_219_315}>
            <Text style={styles.Text_219_315}>Fri</Text>
          </View>
          <View style={styles.View_219_316}>
            <Text style={styles.Text_219_316}>Sat</Text>
          </View>
          <View style={styles.View_219_317}>
            <Text style={styles.Text_219_317}>Sun</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dabe/6d52/2d68f1336c1690e2bc5ccf526936f919"
          }}
          style={styles.ImageBackground_219_318}
        />
        <View style={styles.View_219_326}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a1/72f3/59f04fa37f384036e0f42d420ff7a5f7"
            }}
            style={styles.ImageBackground_219_327}
          />
          <View style={styles.View_219_328} />
          <View style={styles.View_219_329} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e998/0190/91792d9e0a8f0d1e88f823f5d8cd1c2a"
            }}
            style={styles.ImageBackground_219_330}
          />
          <View style={styles.View_219_331} />
          <View style={styles.View_219_332} />
          <View style={styles.View_219_333} />
          <View style={styles.View_219_334} />
        </View>
        <View style={styles.View_219_335}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a1/d4d0/a32d336f43eed28a79c2a369d46836e1"
            }}
            style={styles.ImageBackground_219_336}
          />
          <View style={styles.View_219_337} />
          <View style={styles.View_219_338} />
          <View style={styles.View_219_339} />
          <View style={styles.View_219_340} />
          <View style={styles.View_219_341} />
          <View style={styles.View_219_342} />
          <View style={styles.View_219_343} />
        </View>
        <View style={styles.View_219_344}>
          <View style={styles.View_219_345}>
            <View style={styles.View_219_346} />
            <View style={styles.View_219_347}>
              <Text style={styles.Text_219_347}>EMG</Text>
            </View>
          </View>
          <View style={styles.View_219_348}>
            <View style={styles.View_219_349} />
            <View style={styles.View_219_350}>
              <Text style={styles.Text_219_350}>Pain</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_219_351}>
        <Text style={styles.Text_219_351}>Sit Ups</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_413_1232: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140.0273224043716%"),
    minHeight: hp("140.0273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_413_1244: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("21.03825136612022%")
  },
  View_413_1245: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
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
  View_413_1246: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396137%"),
    top: hp("0.8196721311475379%")
  },
  Text_413_1246: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_413_1247: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922707%")
  },
  View_413_1249: {
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
  ImageBackground_I413_1249_231_804: {
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
  ImageBackground_I413_1249_309_784: {
    flexGrow: 1,
    width: wp("7.252488620039347%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I413_1249_219_101: {
    flexGrow: 1,
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.34782608695653%"),
    top: hp("1.502732240437159%")
  },
  View_413_1250: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("11.748633879781421%")
  },
  Text_413_1250: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1251: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("109.97267759562841%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I413_1251_103_23: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
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
  View_I413_1251_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I413_1251_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1329: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("29.6448087431694%")
  },
  View_413_1330: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
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
  View_413_1331: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.6183574879227%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_1332: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("0.8196721311475414%")
  },
  Text_413_1332: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1333: {
    width: wp("7.971014492753622%"),
    minWidth: wp("7.971014492753622%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("0.4098360655737707%")
  },
  Text_413_1333: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1334: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.3816425120773%"),
    top: hp("0.8196721311475414%")
  },
  Text_413_1334: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1605: {
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
  View_I413_1605_413_1504: {
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
  View_I413_1605_413_1505: {
    flexGrow: 1,
    width: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.79710144927536%"),
    top: hp("-1.3661202185792263%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 39.5,
    borderTopRightRadius: 39.5,
    borderBottomLeftRadius: 39.5,
    borderBottomRightRadius: 39.5
  },
  ImageBackground_I413_1605_413_1506: {
    flexGrow: 1,
    width: wp("16.1023181417714%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  View_I413_1605_413_1507: {
    flexGrow: 1,
    width: wp("10.305205635402514%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38647342995168%"),
    top: hp("1.2295081967213264%")
  },
  ImageBackground_I413_1605_413_1508: {
    width: wp("8.937198067632849%"),
    height: hp("5.601092896174864%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%")
  },
  ImageBackground_I413_1605_413_1514: {
    width: wp("10.305205635402514%"),
    height: hp("5.58800931836738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I413_1605_413_1516: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.464505888725239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.527433386171495%"),
    top: hp("1.2295081967213264%")
  },
  View_231_754: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("80.73770491803278%")
  },
  View_231_755: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_231_755: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_756: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("6.967213114754102%")
  },
  Text_231_756: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_757: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.014492753623195%"),
    top: hp("7.65027322404373%")
  },
  Text_231_757: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_758: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48309178743961567%"),
    top: hp("13.114754098360663%")
  },
  Text_231_758: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_759: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.772946859903385%"),
    top: hp("13.79781420765029%")
  },
  Text_231_759: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_760: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48309178743961567%"),
    top: hp("19.262295081967224%")
  },
  Text_231_760: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_761: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.294685990338166%"),
    top: hp("20.08196721311475%")
  },
  Text_231_761: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_309: {
    width: wp("68.59903381642512%"),
    minWidth: wp("68.59903381642512%"),
    height: hp("33.60655737704918%"),
    minHeight: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("45.21857923497268%")
  },
  View_413_1628: {
    width: wp("65.94202898550725%"),
    minWidth: wp("65.94202898550725%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("31.967213114754102%")
  },
  View_413_1621: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_1621: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1622: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.386473429951689%"),
    top: hp("0%")
  },
  Text_413_1622: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1623: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("0%")
  },
  Text_413_1623: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1624: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.43478260869565%"),
    top: hp("0%")
  },
  Text_413_1624: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1625: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("0%")
  },
  Text_413_1625: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1626: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.966183574879224%"),
    top: hp("0%")
  },
  Text_413_1626: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1627: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: hp("0%")
  },
  Text_413_1627: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1629: {
    width: wp("68.59903381642512%"),
    minWidth: wp("68.59903381642512%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737707%")
  },
  View_219_311: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.386473429951689%"),
    top: hp("0%")
  },
  Text_219_311: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_312: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%"),
    top: hp("0%")
  },
  Text_219_312: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_313: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.884057971014492%"),
    top: hp("0%")
  },
  Text_219_313: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_314: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("0%")
  },
  Text_219_314: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_315: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.34782608695652%"),
    top: hp("0%")
  },
  Text_219_315: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_316: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.31884057971015%"),
    top: hp("0%")
  },
  Text_219_316: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_317: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_219_317: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_318: {
    width: wp("59.42028985507246%"),
    minWidth: wp("59.42028985507246%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("7.263650529371574%")
  },
  View_219_326: {
    width: wp("61.35265700483091%"),
    minWidth: wp("61.35265700483091%"),
    height: hp("11.338800941008689%"),
    minHeight: hp("11.338800941008689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("12.431693989071036%")
  },
  ImageBackground_219_327: {
    width: wp("58.84484185112847%"),
    minWidth: wp("58.84484185112847%"),
    height: hp("10.521752195931523%"),
    minHeight: hp("10.521752195931523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8320831446256065%"),
    top: hp("0.028883303449454445%")
  },
  View_219_328: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderColor: "rgba(231, 143, 124, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_329: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("4.508196721311471%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderColor: "rgba(231, 143, 124, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  ImageBackground_219_330: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733815953351453%"),
    top: hp("9.972677595628411%")
  },
  View_219_331: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.24415477807971%"),
    top: hp("6.856849545338122%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderColor: "rgba(231, 143, 124, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_332: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.3719806763285%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderColor: "rgba(231, 143, 124, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_333: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.27536231884057%"),
    top: hp("10.245901639344268%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderColor: "rgba(231, 143, 124, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_334: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.42028985507246%"),
    top: hp("9.426229508196727%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderColor: "rgba(231, 143, 124, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_335: {
    width: wp("61.59420289855072%"),
    minWidth: wp("61.59420289855072%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("19.12568306010928%")
  },
  ImageBackground_219_336: {
    width: wp("59.78260869565217%"),
    minWidth: wp("59.78260869565217%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0.4781420765027349%")
  },
  View_219_337: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.601092896174876%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_338: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_339: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.806763285024157%"),
    top: hp("4.508196721311478%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_340: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.710144927536238%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_341: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.61352657004831%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_342: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.51690821256038%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_343: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.66183574879227%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_219_344: {
    width: wp("54.347826086956516%"),
    minWidth: wp("54.347826086956516%"),
    height: hp("3.9077391389940606%"),
    minHeight: hp("3.9077391389940606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("0%")
  },
  View_219_345: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("3.9077391389940606%"),
    minHeight: hp("3.9077391389940606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_346: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("3.9077391389940606%"),
    minHeight: hp("3.9077391389940606%"),
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
  View_219_347: {
    width: wp("8.695652173913043%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.364463032155797%")
  },
  Text_219_347: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_348: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.429951690821255%"),
    top: hp("0%")
  },
  View_219_349: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 197, 188, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_219_350: {
    width: wp("8.454106280193237%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830917%")
  },
  Text_219_350: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_351: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("38.25136612021858%")
  },
  Text_219_351: {
    color: "rgba(21, 185, 255, 1)",
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
