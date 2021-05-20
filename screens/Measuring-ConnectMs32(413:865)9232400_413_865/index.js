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
      <View style={styles.View_413_866}>
        <Text style={styles.Text_413_866}>Measuring...</Text>
      </View>
      <View style={styles.View_413_867}>
        <Text style={styles.Text_413_867}>MS3: </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("370_535"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
          }}
          style={styles.ImageBackground_413_869}
        />
      </TouchableOpacity>
      <View style={styles.View_413_871}>
        <View style={styles.View_413_872} />
        <View style={styles.View_413_873}>
          <Text style={styles.Text_413_873}>0:00:00 s</Text>
        </View>
      </View>
      <View style={styles.View_413_874}>
        <View style={styles.View_413_875}>
          <Text style={styles.Text_413_875}>Sets</Text>
        </View>
        <View style={styles.View_413_876}>
          <Text style={styles.Text_413_876}>4</Text>
        </View>
        <View style={styles.View_413_877}>
          <Text style={styles.Text_413_877}>Repetitions</Text>
        </View>
        <View style={styles.View_413_878}>
          <Text style={styles.Text_413_878}>4</Text>
        </View>
      </View>
      <View style={styles.View_413_879}>
        <Text style={styles.Text_413_879}>Sit Ups</Text>
      </View>
      <View style={styles.View_413_880}>
        <View style={styles.View_413_881} />
        <View style={styles.View_413_882}>
          <Text style={styles.Text_413_882}>start</Text>
        </View>
      </View>
      <View style={styles.View_413_883}>
        <View style={styles.View_413_884} />
        <View style={styles.View_413_885}>
          <Text style={styles.Text_413_885}>Stop</Text>
        </View>
      </View>
      <View style={styles.View_413_886}>
        <View style={styles.View_I413_886_370_683} />
        <View style={styles.View_I413_886_219_213}>
          <View style={styles.View_I413_886_219_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/1ed3/54b401b2687524008b2a9c3bd0dc952e"
            }}
            style={styles.ImageBackground_I413_886_219_215}
          />
          <View style={styles.View_I413_886_219_216} />
        </View>
        <View style={styles.View_I413_886_219_217}>
          <Text style={styles.Text_I413_886_219_217}>
            The sit-up (or curl-up) is an abdominal endurance training exercise
            to strengthen, tighten and tone the...
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("407_443"))
        }
      >
        <View style={styles.View_413_887}>
          <View style={styles.View_413_888} />
          <View style={styles.View_413_889} />
          <View style={styles.View_413_890} />
          <View style={styles.View_413_891} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b7/d843/b2c8040a799d753a9201ba155a172367"
            }}
            style={styles.ImageBackground_413_892}
          />
          <View style={styles.View_413_893}>
            <Text style={styles.Text_413_893}>+</Text>
          </View>
          <View style={styles.View_413_894}>
            <Text style={styles.Text_413_894}>-</Text>
          </View>
          <View style={styles.View_413_895}>
            <Text style={styles.Text_413_895}>0</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("407_443"))
        }
      >
        <View style={styles.View_413_896}>
          <View style={styles.View_413_897} />
          <View style={styles.View_413_898} />
          <View style={styles.View_413_899} />
          <View style={styles.View_413_900} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ec9/a3c3/be53a2f8db6061e1e212b1b68aef455b"
            }}
            style={styles.ImageBackground_413_901}
          />
          <View style={styles.View_413_902}>
            <Text style={styles.Text_413_902}>+</Text>
          </View>
          <View style={styles.View_413_903}>
            <Text style={styles.Text_413_903}>-</Text>
          </View>
          <View style={styles.View_413_904}>
            <Text style={styles.Text_413_904}>0</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_413_914}>
        <Text style={styles.Text_413_914}>connected</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_413_866: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("11.748633879781421%")
  },
  Text_413_866: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_867: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("26.775956284153008%")
  },
  Text_413_867: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_413_869: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_413_871: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("39.89071038251366%")
  },
  View_413_872: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_873: {
    width: wp("61.024124956361334%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.90338164251208%")
  },
  Text_413_873: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_874: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("78.14207650273224%")
  },
  View_413_875: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_413_875: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_876: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260867%"),
    top: hp("0.4098360655737707%")
  },
  Text_413_876: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_877: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.6183574879227%"),
    top: hp("0%")
  },
  Text_413_877: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_878: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("0.4098360655737707%")
  },
  Text_413_878: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_879: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("19.808743169398905%")
  },
  Text_413_879: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_880: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("63.25136612021858%")
  },
  View_413_881: {
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
  View_413_882: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429958%"),
    top: hp("2.0491803278688536%")
  },
  Text_413_882: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_883: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("63.114754098360656%")
  },
  View_413_884: {
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
  View_413_885: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("2.0491803278688465%")
  },
  Text_413_885: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_886: {
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
  View_I413_886_370_683: {
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
  View_I413_886_219_213: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("0%")
  },
  View_I413_886_219_214: {
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
  ImageBackground_I413_886_219_215: {
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
  View_I413_886_219_216: {
    width: wp("84.78260869565217%"),
    height: hp("18.71584699453552%"),
    top: hp("16.120218579234958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I413_886_219_217: {
    flexGrow: 1,
    width: wp("77.05314009661835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956522%"),
    top: hp("25.273224043715828%")
  },
  Text_I413_886_219_217: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_887: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("83.06010928961749%")
  },
  View_413_888: {
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
  View_413_889: {
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
  View_413_890: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.88435312169761%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(8, 158, 205, 1)",
    borderWidth: 3
  },
  View_413_891: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.88435312169761%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(8, 158, 205, 1)",
    borderWidth: 3
  },
  ImageBackground_413_892: {
    width: wp("15.195432838034515%"),
    minWidth: wp("15.195432838034515%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.88435312169761%"),
    top: hp("10.928961748633881%")
  },
  View_413_893: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679194%")
  },
  Text_413_893: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_894: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679194%")
  },
  Text_413_894: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_895: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("6.69398907103826%")
  },
  Text_413_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_896: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("83.06010928961749%")
  },
  View_413_897: {
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
  View_413_898: {
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
  View_413_899: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884353121697615%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(107, 185, 70, 1)",
    borderWidth: 3
  },
  View_413_900: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884353121697615%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(127, 212, 87, 1)",
    borderColor: "rgba(107, 185, 70, 1)",
    borderWidth: 3
  },
  ImageBackground_413_901: {
    width: wp("15.195432838034515%"),
    minWidth: wp("15.195432838034515%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884353121697615%"),
    top: hp("10.928961748633881%")
  },
  View_413_902: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679198%")
  },
  Text_413_902: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_903: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679198%")
  },
  Text_413_903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_904: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("6.69398907103826%")
  },
  Text_413_904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_914: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("26.366120218579237%")
  },
  Text_413_914: {
    color: "rgba(127, 212, 87, 1)",
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
