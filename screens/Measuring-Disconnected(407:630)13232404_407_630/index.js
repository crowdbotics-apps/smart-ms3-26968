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
      <View style={styles.View_407_631}>
        <Text style={styles.Text_407_631}>Measuring...</Text>
      </View>
      <View style={styles.View_407_632}>
        <Text style={styles.Text_407_632}>MS3: </Text>
      </View>
      <View style={styles.View_407_633}>
        <View style={styles.View_407_634} />
        <View style={styles.View_407_635}>
          <Text style={styles.Text_407_635}>1:00.32 s</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
        }}
        style={styles.ImageBackground_407_636}
      />
      <View style={styles.View_407_638}>
        <View style={styles.View_407_639} />
        <View style={styles.View_407_640}>
          <Text style={styles.Text_407_640}>Resume</Text>
        </View>
      </View>
      <View style={styles.View_407_641}>
        <View style={styles.View_407_642} />
        <View style={styles.View_407_643}>
          <Text style={styles.Text_407_643}>Stop</Text>
        </View>
      </View>
      <View style={styles.View_407_644}>
        <View style={styles.View_407_645}>
          <Text style={styles.Text_407_645}>Sets</Text>
        </View>
        <View style={styles.View_407_646}>
          <Text style={styles.Text_407_646}>4</Text>
        </View>
        <View style={styles.View_407_647}>
          <Text style={styles.Text_407_647}>Repetitions</Text>
        </View>
        <View style={styles.View_407_648}>
          <Text style={styles.Text_407_648}>4</Text>
        </View>
      </View>
      <View style={styles.View_407_657}>
        <View style={styles.View_I407_657_370_683} />
        <View style={styles.View_I407_657_219_213}>
          <View style={styles.View_I407_657_219_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/1ed3/54b401b2687524008b2a9c3bd0dc952e"
            }}
            style={styles.ImageBackground_I407_657_219_215}
          />
          <View style={styles.View_I407_657_219_216} />
        </View>
        <View style={styles.View_I407_657_219_217}>
          <Text style={styles.Text_I407_657_219_217}>
            The sit-up (or curl-up) is an abdominal endurance training exercise
            to strengthen, tighten and tone the...
          </Text>
        </View>
      </View>
      <View style={styles.View_407_440}>
        <View style={styles.View_407_441} />
        <View style={styles.View_407_442}>
          <Text style={styles.Text_407_442}>
            MS3 disconnected, please connect again.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("407_673"))
        }
      >
        <View style={styles.View_407_667}>
          <View style={styles.View_I407_667_103_23} />
          <View style={styles.View_I407_667_103_22}>
            <Text style={styles.Text_I407_667_103_22}>Connect</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_407_672}>
        <Text style={styles.Text_407_672}>Sit Ups</Text>
      </View>
      <View style={styles.View_413_792}>
        <View style={styles.View_413_793} />
        <View style={styles.View_413_794} />
        <View style={styles.View_413_795} />
        <View style={styles.View_413_796} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b7/d843/b2c8040a799d753a9201ba155a172367"
          }}
          style={styles.ImageBackground_413_797}
        />
        <View style={styles.View_413_798}>
          <Text style={styles.Text_413_798}>+</Text>
        </View>
        <View style={styles.View_413_799}>
          <Text style={styles.Text_413_799}>-</Text>
        </View>
        <View style={styles.View_413_800}>
          <Text style={styles.Text_413_800}>0</Text>
        </View>
      </View>
      <View style={styles.View_413_801}>
        <View style={styles.View_413_802} />
        <View style={styles.View_413_803} />
        <View style={styles.View_413_804} />
        <View style={styles.View_413_805} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ec9/a3c3/be53a2f8db6061e1e212b1b68aef455b"
          }}
          style={styles.ImageBackground_413_806}
        />
        <View style={styles.View_413_807}>
          <Text style={styles.Text_413_807}>+</Text>
        </View>
        <View style={styles.View_413_808}>
          <Text style={styles.Text_413_808}>-</Text>
        </View>
        <View style={styles.View_413_809}>
          <Text style={styles.Text_413_809}>0</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_407_631: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("12.158469945355192%")
  },
  Text_407_631: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_632: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("26.775956284153008%")
  },
  Text_407_632: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_633: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("39.75409836065574%")
  },
  View_407_634: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
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
  View_407_635: {
    width: wp("61.024124956361334%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  Text_407_635: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_636: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_407_638: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.89855072463768%"),
    top: hp("64.07103825136612%")
  },
  View_407_639: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_640: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714972%"),
    top: hp("2.0491803278688536%")
  },
  Text_407_640: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_641: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("63.934426229508205%")
  },
  View_407_642: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
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
  View_407_643: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429954%"),
    top: hp("2.0491803278688394%")
  },
  Text_407_643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_644: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("77.59562841530054%")
  },
  View_407_645: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_645: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_646: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%"),
    top: hp("0.40983606557378494%")
  },
  Text_407_646: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_647: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.6183574879227%"),
    top: hp("0%")
  },
  Text_407_647: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_648: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("0.40983606557378494%")
  },
  Text_407_648: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_657: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("110.79234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_657_370_683: {
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
  View_I407_657_219_213: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("0%")
  },
  View_I407_657_219_214: {
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
  ImageBackground_I407_657_219_215: {
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
  View_I407_657_219_216: {
    width: wp("84.78260869565217%"),
    height: hp("18.71584699453552%"),
    top: hp("16.120218579234958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I407_657_219_217: {
    flexGrow: 1,
    width: wp("77.05314009661835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956522%"),
    top: hp("25.273224043715828%")
  },
  Text_I407_657_219_217: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_440: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.62295081967213%"),
    minHeight: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_407_441: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.62295081967213%"),
    minHeight: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 143, 124, 1)"
  },
  View_407_442: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("4.237707586236339%")
  },
  Text_407_442: {
    color: "rgba(190, 43, 10, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_667: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.71980676328502%"),
    top: hp("26.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_667_103_23: {
    flexGrow: 1,
    width: wp("50.96618357487923%"),
    height: hp("7.923497267759563%"),
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
  View_I407_667_103_22: {
    flexGrow: 1,
    width: wp("42.495351597882696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.094250075483096%"),
    top: hp("0%")
  },
  Text_I407_667_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_672: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("20.901639344262296%")
  },
  Text_407_672: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_792: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("84.15300546448088%")
  },
  View_413_793: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_794: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_795: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301936%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(8, 158, 205, 1)",
    borderWidth: 3
  },
  View_413_796: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301936%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(8, 158, 205, 1)",
    borderWidth: 3
  },
  ImageBackground_413_797: {
    width: wp("15.195432838034515%"),
    minWidth: wp("15.195432838034515%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301936%"),
    top: hp("10.928961748633867%")
  },
  View_413_798: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644130246074884%")
  },
  Text_413_798: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_799: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644130246074884%")
  },
  Text_413_799: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_800: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231886%"),
    top: hp("6.6939890710382315%")
  },
  Text_413_800: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_801: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.106280193236714%"),
    top: hp("84.15300546448088%")
  },
  View_413_802: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 143, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_803: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
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
  View_413_804: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301932%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(107, 185, 70, 1)",
    borderWidth: 3
  },
  View_413_805: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301932%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(107, 185, 70, 1)",
    borderWidth: 3
  },
  ImageBackground_413_806: {
    width: wp("15.195432838034515%"),
    minWidth: wp("15.195432838034515%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884345750301932%"),
    top: hp("10.928961748633867%")
  },
  View_413_807: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.64413024607488%")
  },
  Text_413_807: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_808: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.64413024607488%")
  },
  Text_413_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_809: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231876%"),
    top: hp("6.6939890710382315%")
  },
  Text_413_809: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
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
