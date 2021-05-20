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
      <View style={styles.View_219_165} />
      <View style={styles.View_219_203}>
        <Text style={styles.Text_219_203}>Last updated: 1/02/21 11:45 AM</Text>
      </View>
      <View style={styles.View_219_209}>
        <Text style={styles.Text_219_209}>Sit Ups</Text>
      </View>
      <View style={styles.View_370_691}>
        <View style={styles.View_370_683} />
        <View style={styles.View_219_213}>
          <View style={styles.View_219_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/1ed3/54b401b2687524008b2a9c3bd0dc952e"
            }}
            style={styles.ImageBackground_219_215}
          />
          <View style={styles.View_219_216} />
        </View>
        <View style={styles.View_219_217}>
          <Text style={styles.Text_219_217}>
            The sit-up (or curl-up) is an abdominal endurance training exercise
            to strengthen, tighten and tone the...
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("370_535"))
        }
      >
        <View style={styles.View_220_17}>
          <View style={styles.View_220_18} />
          <View style={styles.View_220_19}>
            <Text style={styles.Text_220_19}>Accept Changes</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_413_1122}>
        <View style={styles.View_219_173}>
          <Text style={styles.Text_219_173}>Sets</Text>
        </View>
        <View style={styles.View_220_20}>
          <Text style={styles.Text_220_20}>4</Text>
        </View>
        <View style={styles.View_220_21}>
          <Text style={styles.Text_220_21}>Repetitions</Text>
        </View>
        <View style={styles.View_220_22}>
          <Text style={styles.Text_220_22}>4</Text>
        </View>
      </View>
      <View style={styles.View_247_139}>
        <View style={styles.View_220_10} />
        <View style={styles.View_220_11}>
          <Text style={styles.Text_220_11}>Modify</Text>
        </View>
      </View>
      <View style={styles.View_370_351}>
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
            style={styles.ImageBackground_I370_351_231_804}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c786/cdf9/8a9f9faeb9bffd847f32451100834db4"
          }}
          style={styles.ImageBackground_I370_351_309_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/bb7e/ec442a0d766899bcbf1a0216092dabee"
          }}
          style={styles.ImageBackground_I370_351_219_101}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_370_674}
      />
      <View style={styles.View_370_849}>
        <View style={styles.View_I370_849_247_156}>
          <Text style={styles.Text_I370_849_247_156}>
            Frequency - Times a Week
          </Text>
        </View>
        <View style={styles.View_I370_849_247_157}>
          <View style={styles.View_I370_849_247_158}>
            <View style={styles.View_I370_849_247_159} />
            <View style={styles.View_I370_849_247_160}>
              <Text style={styles.Text_I370_849_247_160}>Mon</Text>
            </View>
          </View>
          <View style={styles.View_I370_849_247_161}>
            <Text style={styles.Text_I370_849_247_161}>Tue</Text>
          </View>
          <View style={styles.View_I370_849_247_162}>
            <Text style={styles.Text_I370_849_247_162}>Wed</Text>
          </View>
          <View style={styles.View_I370_849_247_163}>
            <Text style={styles.Text_I370_849_247_163}>Tue</Text>
          </View>
          <View style={styles.View_I370_849_247_164}>
            <Text style={styles.Text_I370_849_247_164}>Fri</Text>
          </View>
          <View style={styles.View_I370_849_247_165}>
            <Text style={styles.Text_I370_849_247_165}>Sat</Text>
          </View>
          <View style={styles.View_I370_849_247_166}>
            <Text style={styles.Text_I370_849_247_166}>Sun</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_219_165: {
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
  View_219_203: {
    width: wp("91.30434782608695%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%")
  },
  Text_219_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_209: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("11.612021857923498%")
  },
  Text_219_209: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_691: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_370_683: {
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
  View_219_213: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  View_219_214: {
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
  ImageBackground_219_215: {
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
  View_219_216: {
    width: wp("84.78260869565217%"),
    height: hp("18.71584699453552%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_217: {
    flexGrow: 1,
    width: wp("77.05314009661835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("25.27322404371585%")
  },
  Text_219_217: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_17: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    top: hp("101.36612021857923%")
  },
  View_220_18: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
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
  View_220_19: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("2.7322404371584668%")
  },
  Text_220_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_1122: {
    width: wp("78.50241545893721%"),
    minWidth: wp("78.50241545893721%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("81.14754098360656%")
  },
  View_219_173: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_219_173: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_20: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.01449275362319%"),
    top: hp("0.4098360655737565%")
  },
  Text_220_20: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_21: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%"),
    top: hp("0%")
  },
  Text_220_21: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_22: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.84541062801932%"),
    top: hp("0.4098360655737565%")
  },
  Text_220_22: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_247_139: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("100.95628415300546%")
  },
  View_220_10: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(190, 43, 10, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_220_11: {
    width: wp("35.507246376811594%"),
    minWidth: wp("35.507246376811594%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574868%"),
    top: hp("5.054644808743191%")
  },
  Text_220_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_351: {
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
  ImageBackground_I370_351_231_804: {
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
  ImageBackground_I370_351_309_784: {
    flexGrow: 1,
    width: wp("7.252488620039347%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I370_351_219_101: {
    flexGrow: 1,
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.34782608695653%"),
    top: hp("1.502732240437159%")
  },
  ImageBackground_370_674: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_370_849: {
    width: wp("86.01855586692331%"),
    minWidth: wp("86.01855586692331%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("66.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_849_247_156: {
    flexGrow: 1,
    width: wp("78.74396135265701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I370_849_247_156: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_157: {
    flexGrow: 1,
    width: wp("80.94609209880737%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("6.284153005464475%")
  },
  View_I370_849_247_158: {
    width: wp("11.83574879227053%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111112%")
  },
  View_I370_849_247_159: {
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
  View_I370_849_247_160: {
    width: wp("8.454106280193237%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6485094448218582%")
  },
  Text_I370_849_247_160: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_161: {
    width: wp("7.246376811594203%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.496301328502412%")
  },
  Text_I370_849_247_161: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_162: {
    width: wp("9.178743961352657%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.048192415836354%")
  },
  Text_I370_849_247_162: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_163: {
    width: wp("7.246376811594203%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.784902673988526%")
  },
  Text_I370_849_247_163: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_164: {
    width: wp("5.072463768115942%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.81779561065821%")
  },
  Text_I370_849_247_164: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_165: {
    width: wp("6.280193236714976%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66589886209239%")
  },
  Text_I370_849_247_165: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_849_247_166: {
    width: wp("7.487922705314009%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I370_849_247_166: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
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
