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
      <View style={styles.View_120_39} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3255/fbb0/09790c3cfc9af87ad6dacbbcb2219cef"
        }}
        style={styles.ImageBackground_370_437}
      />
      <View style={styles.View_120_36}>
        <Text style={styles.Text_120_36}>Cinthya Jauregui</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/216c/7068/2f60695218339cf5d977fe762f648164"
        }}
        style={styles.ImageBackground_120_37}
      />
      <View style={styles.View_120_53}>
        <Text style={styles.Text_120_53}>Edit Main Survey</Text>
      </View>
      <View style={styles.View_120_54}>
        <Text style={styles.Text_120_54}>Terms &amp; Conditions</Text>
      </View>
      <View style={styles.View_120_55}>
        <Text style={styles.Text_120_55}>Contact Us</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2624/035c/a470e738e2176a1075d0ac3cf7cdf2db"
        }}
        style={styles.ImageBackground_219_95}
      />
      <View style={styles.View_231_923}>
        <Text style={styles.Text_231_923}>Therapy: </Text>
      </View>
      <View style={styles.View_234_1}>
        <Text style={styles.Text_234_1}>PT John Smith</Text>
      </View>
      <View style={styles.View_309_724}>
        <View style={styles.View_122_30} />
        <View style={styles.View_122_32} />
      </View>
      <View style={styles.View_234_0}>
        <Text style={styles.Text_234_0}>Sutter Private Clinic</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_120_39: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67.4863387978142%"),
    minHeight: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-17.759562841530055%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_370_437: {
    width: wp("9.661908541324634%"),
    height: hp("5.464523607264451%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.1256038647343%")
  },
  View_120_36: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("28.005464480874316%")
  },
  Text_120_36: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_120_37: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.990338164251206%"),
    top: hp("8.743169398907105%"),
    resizeMode: "cover",
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 256,
    borderTopRightRadius: 256,
    borderBottomLeftRadius: 256,
    borderBottomRightRadius: 256
  },
  View_120_53: {
    width: wp("77.05314009661835%"),
    minWidth: wp("77.05314009661835%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("75.5464480874317%")
  },
  Text_120_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_54: {
    width: wp("77.05314009661835%"),
    minWidth: wp("77.05314009661835%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("92.4863387978142%")
  },
  Text_120_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_55: {
    width: wp("77.05314009661835%"),
    minWidth: wp("77.05314009661835%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("84.01639344262296%")
  },
  Text_120_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_95: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_231_923: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("52.86885245901639%")
  },
  Text_231_923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_234_1: {
    width: wp("55.072463768115945%"),
    top: hp("68.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.7536231884058%")
  },
  Text_234_1: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_309_724: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.18840579710145%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_30: {
    flexGrow: 1,
    width: wp("17.874396135265698%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.30000001192092896,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_122_32: {
    flexGrow: 1,
    width: wp("8.937198067632849%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("0.13661202185793542%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_234_0: {
    width: wp("55.072463768115945%"),
    top: hp("61.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.990338164251206%")
  },
  Text_234_0: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 16,
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
