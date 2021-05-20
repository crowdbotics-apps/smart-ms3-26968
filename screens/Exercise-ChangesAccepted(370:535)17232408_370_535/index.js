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
      <View style={styles.View_370_536} />
      <View style={styles.View_370_537}>
        <Text style={styles.Text_370_537}>Sets</Text>
      </View>
      <View style={styles.View_413_833}>
        <Text style={styles.Text_413_833}>Recently Done</Text>
      </View>
      <View style={styles.View_370_538}>
        <Text style={styles.Text_370_538}>Last updated: 1/02/21 11:45 AM</Text>
      </View>
      <View style={styles.View_370_539}>
        <Text style={styles.Text_370_539}>Sit Ups</Text>
      </View>
      <View style={styles.View_370_566}>
        <Text style={styles.Text_370_566}>4</Text>
      </View>
      <View style={styles.View_370_567}>
        <Text style={styles.Text_370_567}>Repetitions</Text>
      </View>
      <View style={styles.View_370_568}>
        <Text style={styles.Text_370_568}>4</Text>
      </View>
      <View style={styles.View_370_570}>
        <View style={styles.View_370_571} />
        <View style={styles.View_370_572}>
          <Text style={styles.Text_370_572}>3/05/20_Sit_Up_1</Text>
        </View>
        <View style={styles.View_370_573}>
          <Text style={styles.Text_370_573}> 11:45 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/616d/d421/056d6f265764cd8f79c74976eecfcd8b"
          }}
          style={styles.ImageBackground_370_574}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4077/011c/76f91623fc9d13639cb8bbbac7685cf1"
          }}
          style={styles.ImageBackground_370_577}
        />
      </View>
      <View style={styles.View_370_580}>
        <View style={styles.View_370_581} />
        <View style={styles.View_370_582}>
          <Text style={styles.Text_370_582}>3/05/20_Sit_Up_1</Text>
        </View>
        <View style={styles.View_370_583}>
          <Text style={styles.Text_370_583}> 11:45 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/616d/d421/056d6f265764cd8f79c74976eecfcd8b"
          }}
          style={styles.ImageBackground_370_584}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e2b/838e/8f98df6540b714202153a2c6d8786bff"
          }}
          style={styles.ImageBackground_370_587}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("362_390"))
        }
      >
        <View style={styles.View_370_590}>
          <View style={styles.View_I370_590_103_23} />
          <View style={styles.View_I370_590_103_22}>
            <Text style={styles.Text_I370_590_103_22}>Start Exercise</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_370_692}>
        <View style={styles.View_I370_692_370_683} />
        <View style={styles.View_I370_692_219_213}>
          <View style={styles.View_I370_692_219_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/1ed3/54b401b2687524008b2a9c3bd0dc952e"
            }}
            style={styles.ImageBackground_I370_692_219_215}
          />
          <View style={styles.View_I370_692_219_216} />
        </View>
        <View style={styles.View_I370_692_219_217}>
          <Text style={styles.Text_I370_692_219_217}>
            The sit-up (or curl-up) is an abdominal endurance training exercise
            to strengthen, tighten and tone the...
          </Text>
        </View>
      </View>
      <View style={styles.View_370_837}>
        <View style={styles.View_I370_837_247_156}>
          <Text style={styles.Text_I370_837_247_156}>
            Frequency - Times a Week
          </Text>
        </View>
        <View style={styles.View_I370_837_247_157}>
          <View style={styles.View_I370_837_247_158}>
            <View style={styles.View_I370_837_247_159} />
            <View style={styles.View_I370_837_247_160}>
              <Text style={styles.Text_I370_837_247_160}>Mon</Text>
            </View>
          </View>
          <View style={styles.View_I370_837_247_161}>
            <Text style={styles.Text_I370_837_247_161}>Tue</Text>
          </View>
          <View style={styles.View_I370_837_247_162}>
            <Text style={styles.Text_I370_837_247_162}>Wed</Text>
          </View>
          <View style={styles.View_I370_837_247_163}>
            <Text style={styles.Text_I370_837_247_163}>Tue</Text>
          </View>
          <View style={styles.View_I370_837_247_164}>
            <Text style={styles.Text_I370_837_247_164}>Fri</Text>
          </View>
          <View style={styles.View_I370_837_247_165}>
            <Text style={styles.Text_I370_837_247_165}>Sat</Text>
          </View>
          <View style={styles.View_I370_837_247_166}>
            <Text style={styles.Text_I370_837_247_166}>Sun</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_407_490}
      />
      <View style={styles.View_411_11}>
        <View style={styles.View_411_12} />
        <View style={styles.View_411_13}>
          <Text style={styles.Text_411_13}>R. Calf</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_370_536: {
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
  View_370_537: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("84.42622950819673%")
  },
  Text_370_537: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_833: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("91.2568306010929%")
  },
  Text_413_833: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_538: {
    width: wp("91.30434782608695%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%")
  },
  Text_370_538: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_539: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("11.612021857923498%")
  },
  Text_370_539: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_566: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.193236714975846%"),
    top: hp("85.10928961748634%")
  },
  Text_370_566: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_567: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("84.42622950819673%")
  },
  Text_370_567: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_568: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.05797101449275%"),
    top: hp("85.10928961748634%")
  },
  Text_370_568: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_570: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("97.95081967213115%")
  },
  View_370_571: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
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
  View_370_572: {
    width: wp("44.20289855072464%"),
    top: hp("4.0440627134562845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956524%")
  },
  Text_370_572: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_573: {
    width: wp("16.425120772946862%"),
    top: hp("1.9471215420081904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.265700483091784%")
  },
  Text_370_573: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_574: {
    width: wp("6.211179926775504%"),
    height: hp("4.098360655737705%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%")
  },
  ImageBackground_370_577: {
    width: wp("5.887695902211655%"),
    height: hp("3.5006830601092895%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.59420289855072%")
  },
  View_370_580: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("111.33879781420765%")
  },
  View_370_581: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
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
  View_370_582: {
    width: wp("44.20289855072464%"),
    top: hp("4.0440627134562845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956524%")
  },
  Text_370_582: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_583: {
    width: wp("16.425120772946862%"),
    top: hp("1.9471215420081904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.265700483091784%")
  },
  Text_370_583: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_584: {
    width: wp("6.211179926775504%"),
    height: hp("4.098360655737705%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%")
  },
  ImageBackground_370_587: {
    width: wp("5.887695902211655%"),
    height: hp("3.3299180327868854%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.59420289855072%")
  },
  View_370_590: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("108.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_590_103_23: {
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
  View_I370_590_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874395%"),
    top: hp("0%")
  },
  Text_I370_590_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_692: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("32.650273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_692_370_683: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I370_692_219_213: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  View_I370_692_219_214: {
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I370_692_219_215: {
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I370_692_219_216: {
    width: wp("84.78260869565217%"),
    height: hp("18.71584699453552%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I370_692_219_217: {
    flexGrow: 1,
    width: wp("77.05314009661835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("25.273224043715842%")
  },
  Text_I370_692_219_217: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_837: {
    width: wp("86.01855586692331%"),
    minWidth: wp("86.01855586692331%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_837_247_156: {
    flexGrow: 1,
    width: wp("78.74396135265701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I370_837_247_156: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_157: {
    flexGrow: 1,
    width: wp("80.94609209880737%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("6.284153005464489%")
  },
  View_I370_837_247_158: {
    width: wp("11.83574879227053%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111112%")
  },
  View_I370_837_247_159: {
    width: wp("11.83574879227053%"),
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
  View_I370_837_247_160: {
    width: wp("8.454106280193237%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6485094448218582%")
  },
  Text_I370_837_247_160: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_161: {
    width: wp("7.246376811594203%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.49630132850242%")
  },
  Text_I370_837_247_161: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_162: {
    width: wp("9.178743961352657%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.048192415836354%")
  },
  Text_I370_837_247_162: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_163: {
    width: wp("7.246376811594203%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.784902673988526%")
  },
  Text_I370_837_247_163: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_164: {
    width: wp("5.072463768115942%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.817795610658216%")
  },
  Text_I370_837_247_164: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_165: {
    width: wp("6.280193236714976%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66589886209239%")
  },
  Text_I370_837_247_165: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_837_247_166: {
    width: wp("7.487922705314009%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I370_837_247_166: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_490: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_411_11: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("3.9077391389940606%"),
    minHeight: hp("3.9077391389940606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("25%")
  },
  View_411_12: {
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
  View_411_13: {
    width: wp("11.83574879227053%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.915187669836957%")
  },
  Text_411_13: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
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
