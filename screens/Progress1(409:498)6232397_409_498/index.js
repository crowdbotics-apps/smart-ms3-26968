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
      <View style={styles.View_409_499} />
      <View style={styles.View_409_500}>
        <View style={styles.View_409_501}>
          <Text style={styles.Text_409_501}>Stats</Text>
        </View>
        <View style={styles.View_409_502}>
          <Text style={styles.Text_409_502}>Mean</Text>
        </View>
        <View style={styles.View_409_503}>
          <Text style={styles.Text_409_503}>4</Text>
        </View>
        <View style={styles.View_409_504}>
          <Text style={styles.Text_409_504}>Mode</Text>
        </View>
        <View style={styles.View_409_505}>
          <Text style={styles.Text_409_505}>4</Text>
        </View>
        <View style={styles.View_409_506}>
          <Text style={styles.Text_409_506}>Average</Text>
        </View>
        <View style={styles.View_409_507}>
          <Text style={styles.Text_409_507}>4</Text>
        </View>
      </View>
      <View style={styles.View_409_553}>
        <View style={styles.View_409_554} />
        <View style={styles.View_409_556}>
          <Text style={styles.Text_409_556}>12/28/20</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("413_1231"))
        }
      >
        <View style={styles.View_431_541}>
          <View style={styles.View_413_998} />
          <View style={styles.View_413_999}>
            <Text style={styles.Text_413_999}>Daily</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/866b/6cdc/7557b54b731d0f90421ce894093972db"
            }}
            style={styles.ImageBackground_413_1004}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_413_983}>
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
            style={styles.ImageBackground_I413_983_231_804}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c786/cdf9/8a9f9faeb9bffd847f32451100834db4"
          }}
          style={styles.ImageBackground_I413_983_309_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/bb7e/ec442a0d766899bcbf1a0216092dabee"
          }}
          style={styles.ImageBackground_I413_983_219_101}
        />
      </View>
      <View style={styles.View_413_991}>
        <Text style={styles.Text_413_991}>Progress</Text>
      </View>
      <View style={styles.View_231_735}>
        <View style={styles.View_I231_735_103_23} />
        <View style={styles.View_I231_735_103_22}>
          <Text style={styles.Text_I231_735_103_22}>Send to Therapist</Text>
        </View>
      </View>
      <View style={styles.View_413_994}>
        <Text style={styles.Text_413_994}>12/28/20_Sit_Up_1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/616d/d421/056d6f265764cd8f79c74976eecfcd8b"
        }}
        style={styles.ImageBackground_413_1224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4077/011c/76f91623fc9d13639cb8bbbac7685cf1"
        }}
        style={styles.ImageBackground_413_1227}
      />
      <View style={styles.View_413_1230}>
        <View style={styles.View_413_923}>
          <View style={styles.View_413_924}>
            <View style={styles.View_413_925}>
              <Text style={styles.Text_413_925}>18</Text>
            </View>
            <View style={styles.View_413_926}>
              <Text style={styles.Text_413_926}>15</Text>
            </View>
            <View style={styles.View_413_927}>
              <Text style={styles.Text_413_927}>12</Text>
            </View>
            <View style={styles.View_413_928}>
              <Text style={styles.Text_413_928}>9</Text>
            </View>
            <View style={styles.View_413_929}>
              <Text style={styles.Text_413_929}>6</Text>
            </View>
            <View style={styles.View_413_930}>
              <Text style={styles.Text_413_930}>3</Text>
            </View>
            <View style={styles.View_413_931}>
              <Text style={styles.Text_413_931}>0</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dabe/6d52/2d68f1336c1690e2bc5ccf526936f919"
            }}
            style={styles.ImageBackground_413_932}
          />
          <View style={styles.View_413_940}>
            <View style={styles.View_413_941}>
              <View style={styles.View_413_942}>
                <Text style={styles.Text_413_942}>EMG</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_413_948}>
          <Text style={styles.Text_413_948}>Sit Ups</Text>
        </View>
        <View style={styles.View_413_954}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1814/c3ac/2f999c70d4b4e08667186ef8ccc68b04"
            }}
            style={styles.ImageBackground_413_955}
          />
          <View style={styles.View_413_956} />
          <View style={styles.View_413_957} />
          <View style={styles.View_413_958} />
          <View style={styles.View_413_959} />
          <View style={styles.View_413_960} />
          <View style={styles.View_413_961} />
          <View style={styles.View_413_962} />
        </View>
        <View style={styles.View_413_1219}>
          <View style={styles.View_413_916}>
            <Text style={styles.Text_413_916}>
              Electrical Activity/ EMG (mV){" "}
            </Text>
          </View>
          <View style={styles.View_413_917}>
            <Text style={styles.Text_413_917}>Seconds</Text>
          </View>
          <View style={styles.View_413_963}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3234/11db/00708c881d03f7924b19da699a3316bc"
              }}
              style={styles.ImageBackground_413_964}
            />
            <View style={styles.View_413_965} />
            <View style={styles.View_413_966} />
            <View style={styles.View_413_967} />
            <View style={styles.View_413_968} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c64e/b60d/9ac56868d60481adf4c4287892f7df20"
              }}
              style={styles.ImageBackground_413_969}
            />
            <View style={styles.View_413_970} />
            <View style={styles.View_413_971} />
          </View>
        </View>
        <View style={styles.View_413_972}>
          <View style={styles.View_413_973}>
            <View style={styles.View_413_974} />
            <View style={styles.View_413_975}>
              <Text style={styles.Text_413_975}>MS3</Text>
            </View>
          </View>
          <View style={styles.View_413_976}>
            <View style={styles.View_413_977} />
            <View style={styles.View_413_978}>
              <Text style={styles.Text_413_978}>Std</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_413_1589}>
        <View style={styles.View_I413_1589_413_1504} />
        <View style={styles.View_I413_1589_413_1505} />
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
            style={styles.ImageBackground_I413_1589_413_1506}
          />
        </TouchableOpacity>
        <View style={styles.View_I413_1589_413_1507}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/087b/d627a2ea97a9286b0b745ee246e5c52a"
            }}
            style={styles.ImageBackground_I413_1589_413_1508}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fc/8bff/3cb30005ab002f1f45790e670dc47e6c"
            }}
            style={styles.ImageBackground_I413_1589_413_1514}
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
            style={styles.ImageBackground_I413_1589_413_1516}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_409_499: {
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
  View_409_500: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("85.65573770491804%")
  },
  View_409_501: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_409_501: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_502: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.72463768115942%"),
    top: hp("6.967213114754088%")
  },
  Text_409_502: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_503: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.014492753623184%"),
    top: hp("7.650273224043701%")
  },
  Text_409_503: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_504: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%"),
    top: hp("13.114754098360649%")
  },
  Text_409_504: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_505: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.772946859903385%"),
    top: hp("13.797814207650262%")
  },
  Text_409_505: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_506: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%"),
    top: hp("19.26229508196721%")
  },
  Text_409_506: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_507: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    top: hp("20.081967213114737%")
  },
  Text_409_507: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_553: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("29.508196721311474%")
  },
  View_409_554: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
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
  View_409_556: {
    width: wp("31.583356626943687%"),
    minWidth: wp("31.583356626943687%"),
    minHeight: hp("6.131147686900988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4276400211352662%"),
    top: hp("0.836081582991806%")
  },
  Text_409_556: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_431_541: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("21.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_413_998: {
    flexGrow: 1,
    width: wp("82.85024154589372%"),
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
  View_413_999: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396137%"),
    top: hp("0.8196721311475379%")
  },
  Text_413_999: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_413_1004: {
    flexGrow: 1,
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922707%"),
    top: hp("0.1366120218579212%")
  },
  View_413_983: {
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
  ImageBackground_I413_983_231_804: {
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
  ImageBackground_I413_983_309_784: {
    flexGrow: 1,
    width: wp("7.252488620039347%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I413_983_219_101: {
    flexGrow: 1,
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.34782608695653%"),
    top: hp("1.502732240437159%")
  },
  View_413_991: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("11.748633879781421%")
  },
  Text_413_991: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_735: {
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
  View_I231_735_103_23: {
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
  View_I231_735_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I231_735_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_994: {
    width: wp("46.85990338164252%"),
    top: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%")
  },
  Text_413_994: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_413_1224: {
    width: wp("6.211179926775504%"),
    height: hp("4.098360655737705%"),
    top: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.05797101449275%")
  },
  ImageBackground_413_1227: {
    width: wp("5.887695902211655%"),
    height: hp("3.5006830601092895%"),
    top: hp("39.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014492%")
  },
  View_413_1230: {
    width: wp("79.46859903381642%"),
    minWidth: wp("79.46859903381642%"),
    height: hp("42.62295081967213%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("43.71584699453552%")
  },
  View_413_923: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("33.33333333333333%"),
    minHeight: hp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("8.743169398907106%")
  },
  View_413_924: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.142076502732237%")
  },
  View_413_925: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.937198067632856%"),
    top: hp("0.2732240437158566%")
  },
  Text_413_925: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_926: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.03381642512078%"),
    top: hp("0.2732240437158566%")
  },
  Text_413_926: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_927: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.1304347826087%"),
    top: hp("0.2732240437158566%")
  },
  Text_413_927: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_928: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.710144927536234%"),
    top: hp("0.2732240437158566%")
  },
  Text_413_928: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_929: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.80676328502416%"),
    top: hp("0.2732240437158566%")
  },
  Text_413_929: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_930: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.90338164251208%"),
    top: hp("0.2732240437158566%")
  },
  Text_413_930: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_931: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_931: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_413_932: {
    width: wp("59.42028985507246%"),
    minWidth: wp("59.42028985507246%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("5.351082223360649%")
  },
  View_413_940: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676329%"),
    top: hp("0%")
  },
  View_413_941: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_413_942: {
    width: wp("8.695652173913043%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_413_942: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_948: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0%")
  },
  Text_413_948: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_954: {
    width: wp("60.38647342995169%"),
    minWidth: wp("60.38647342995169%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("15.027322404371581%")
  },
  ImageBackground_413_955: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0.546448087431699%")
  },
  View_413_956: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.43715846994536%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_957: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632853%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_958: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.08212560386474%"),
    top: hp("17.486338797814213%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_959: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("13.251366120218577%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_960: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516909%"),
    top: hp("15.43715846994536%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_961: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.550724637681164%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_962: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.45410628019324%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_1219: {
    width: wp("71.25603864734299%"),
    minWidth: wp("71.25603864734299%"),
    height: hp("33.7431693989071%"),
    minHeight: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%")
  },
  View_413_916: {
    width: wp("4.347826547668752%"),
    minWidth: wp("4.347826547668752%"),
    minHeight: hp("30.191256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_916: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_917: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.884057971014492%"),
    top: hp("31.284153005464482%")
  },
  Text_413_917: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_963: {
    width: wp("61.111111111111114%"),
    minWidth: wp("61.111111111111114%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("10.10928961748634%")
  },
  ImageBackground_413_964: {
    width: wp("59.05797101449275%"),
    minWidth: wp("59.05797101449275%"),
    height: hp("12.363387978142077%"),
    minHeight: hp("12.363387978142077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391326%"),
    top: hp("0.5464480874316919%")
  },
  View_413_965: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781416%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(127, 212, 87, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_966: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.661835748792274%"),
    top: hp("7.923497267759551%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(127, 212, 87, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_967: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.80676328502416%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(127, 212, 87, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_968: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.468599033816425%"),
    top: hp("10.928961748633874%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(127, 212, 87, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  ImageBackground_413_969: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.37198067632851%"),
    top: hp("11.680327868852451%")
  },
  View_413_970: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.275362318840585%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(127, 212, 87, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_971: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.17874396135266%"),
    top: hp("12.021857923497272%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(127, 212, 87, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_413_972: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.328502415458942%"),
    top: hp("8.196721311475414%")
  },
  View_413_973: {
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
  View_413_974: {
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
  View_413_975: {
    width: wp("7.971014492753622%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.847554819595409%")
  },
  Text_413_975: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_976: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.671497584541058%"),
    top: hp("0%")
  },
  View_413_977: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 238, 188, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_978: {
    width: wp("12.077294685990339%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%")
  },
  Text_413_978: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1589: {
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
  View_I413_1589_413_1504: {
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
  View_I413_1589_413_1505: {
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
  ImageBackground_I413_1589_413_1506: {
    flexGrow: 1,
    width: wp("16.1023181417714%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  View_I413_1589_413_1507: {
    flexGrow: 1,
    width: wp("10.305205635402514%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38647342995168%"),
    top: hp("1.2295081967213264%")
  },
  ImageBackground_I413_1589_413_1508: {
    width: wp("8.937198067632849%"),
    height: hp("5.601092896174864%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%")
  },
  ImageBackground_I413_1589_413_1514: {
    width: wp("10.305205635402514%"),
    height: hp("5.58800931836738%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I413_1589_413_1516: {
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
