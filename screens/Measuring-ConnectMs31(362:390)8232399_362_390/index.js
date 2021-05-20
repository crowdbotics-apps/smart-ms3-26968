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
      <View style={styles.View_362_392}>
        <Text style={styles.Text_362_392}>Measuring...</Text>
      </View>
      <View style={styles.View_362_399}>
        <Text style={styles.Text_362_399}>MS3: </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("413_865"))
        }
      >
        <View style={styles.View_362_411}>
          <View style={styles.View_I362_411_103_23} />
          <View style={styles.View_I362_411_103_22}>
            <Text style={styles.Text_I362_411_103_22}>Connect</Text>
          </View>
        </View>
      </TouchableOpacity>
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
          style={styles.ImageBackground_407_434}
        />
      </TouchableOpacity>
      <View style={styles.View_407_484}>
        <View style={styles.View_407_485} />
        <View style={styles.View_407_486}>
          <Text style={styles.Text_407_486}>0:00:00 s</Text>
        </View>
      </View>
      <View style={styles.View_407_487}>
        <View style={styles.View_407_419}>
          <Text style={styles.Text_407_419}>Sets</Text>
        </View>
        <View style={styles.View_407_421}>
          <Text style={styles.Text_407_421}>4</Text>
        </View>
        <View style={styles.View_407_422}>
          <Text style={styles.Text_407_422}>Repetitions</Text>
        </View>
        <View style={styles.View_407_423}>
          <Text style={styles.Text_407_423}>4</Text>
        </View>
      </View>
      <View style={styles.View_231_934}>
        <Text style={styles.Text_231_934}>Sit Ups</Text>
      </View>
      <View style={styles.View_407_583}>
        <View style={styles.View_407_584} />
        <View style={styles.View_407_585}>
          <Text style={styles.Text_407_585}>start</Text>
        </View>
      </View>
      <View style={styles.View_407_586}>
        <View style={styles.View_407_587} />
        <View style={styles.View_407_588}>
          <Text style={styles.Text_407_588}>Stop</Text>
        </View>
      </View>
      <View style={styles.View_407_616}>
        <View style={styles.View_I407_616_370_683} />
        <View style={styles.View_I407_616_219_213}>
          <View style={styles.View_I407_616_219_214} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/1ed3/54b401b2687524008b2a9c3bd0dc952e"
            }}
            style={styles.ImageBackground_I407_616_219_215}
          />
          <View style={styles.View_I407_616_219_216} />
        </View>
        <View style={styles.View_I407_616_219_217}>
          <Text style={styles.Text_I407_616_219_217}>
            The sit-up (or curl-up) is an abdominal endurance training exercise
            to strengthen, tighten and tone the...
          </Text>
        </View>
      </View>
      <View style={styles.View_409_450}>
        <View style={styles.View_409_451} />
        <View style={styles.View_409_452} />
        <View style={styles.View_409_453} />
        <View style={styles.View_409_454} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb45/c9f3/f287ba2549b761603936631608cd9937"
          }}
          style={styles.ImageBackground_409_456}
        />
        <View style={styles.View_409_457}>
          <Text style={styles.Text_409_457}>+</Text>
        </View>
        <View style={styles.View_409_458}>
          <Text style={styles.Text_409_458}>-</Text>
        </View>
        <View style={styles.View_413_745}>
          <Text style={styles.Text_413_745}>0</Text>
        </View>
      </View>
      <View style={styles.View_413_747}>
        <View style={styles.View_413_748} />
        <View style={styles.View_413_749} />
        <View style={styles.View_413_750} />
        <View style={styles.View_413_751} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb45/c9f3/f287ba2549b761603936631608cd9937"
          }}
          style={styles.ImageBackground_413_752}
        />
        <View style={styles.View_413_753}>
          <Text style={styles.Text_413_753}>+</Text>
        </View>
        <View style={styles.View_413_754}>
          <Text style={styles.Text_413_754}>-</Text>
        </View>
        <View style={styles.View_413_755}>
          <Text style={styles.Text_413_755}>0</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_362_392: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("11.748633879781421%")
  },
  Text_362_392: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_399: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("26.775956284153008%")
  },
  Text_362_399: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_362_411: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.270531400966185%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I362_411_103_23: {
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
  View_I362_411_103_22: {
    flexGrow: 1,
    width: wp("42.495351597882696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.094235332691724%"),
    top: hp("0%")
  },
  Text_I362_411_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_434: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_407_484: {
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
  View_407_485: {
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
  View_407_486: {
    width: wp("61.024124956361334%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.90338164251208%")
  },
  Text_407_486: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_487: {
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
  View_407_419: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_419: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_421: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260867%"),
    top: hp("0.4098360655737707%")
  },
  Text_407_421: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_422: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.6183574879227%"),
    top: hp("0%")
  },
  Text_407_422: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_423: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("0.4098360655737707%")
  },
  Text_407_423: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_231_934: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("19.808743169398905%")
  },
  Text_231_934: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_583: {
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
  View_407_584: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_585: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429958%"),
    top: hp("2.0491803278688536%")
  },
  Text_407_585: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_586: {
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
  View_407_587: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_407_588: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("2.0491803278688465%")
  },
  Text_407_588: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_616: {
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
  View_I407_616_370_683: {
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
  View_I407_616_219_213: {
    flexGrow: 1,
    width: wp("84.78260869565217%"),
    height: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("0%")
  },
  View_I407_616_219_214: {
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
  ImageBackground_I407_616_219_215: {
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
  View_I407_616_219_216: {
    width: wp("84.78260869565217%"),
    height: hp("18.71584699453552%"),
    top: hp("16.120218579234958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I407_616_219_217: {
    flexGrow: 1,
    width: wp("77.05314009661835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956522%"),
    top: hp("25.273224043715828%")
  },
  Text_I407_616_219_217: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_450: {
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
  View_409_451: {
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
  View_409_452: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_409_453: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.88435312169761%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(102, 99, 99, 1)",
    borderWidth: 3
  },
  View_409_454: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.88435312169761%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(102, 99, 99, 1)",
    borderWidth: 3
  },
  ImageBackground_409_456: {
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
  View_409_457: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679194%")
  },
  Text_409_457: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_458: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679194%")
  },
  Text_409_458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_745: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("6.69398907103826%")
  },
  Text_413_745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_747: {
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
  View_413_748: {
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
  View_413_749: {
    width: wp("41.78743961352657%"),
    minWidth: wp("41.78743961352657%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_413_750: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.46645155109343%"),
    minHeight: hp("11.46645155109343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884353121697615%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(102, 99, 99, 1)",
    borderWidth: 3
  },
  View_413_751: {
    width: wp("11.903089256102337%"),
    minWidth: wp("11.903089256102337%"),
    height: hp("11.108125363542735%"),
    minHeight: hp("11.108125363542735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.884353121697615%"),
    top: hp("11.287301485655732%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(102, 99, 99, 1)",
    borderWidth: 3
  },
  ImageBackground_413_752: {
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
  View_413_753: {
    width: wp("10.6368032630515%"),
    top: hp("1.6125288165983562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679198%")
  },
  Text_413_753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_754: {
    width: wp("10.6368032630515%"),
    top: hp("12.541490565232237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.644122874679198%")
  },
  Text_413_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_413_755: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("6.69398907103826%")
  },
  Text_413_755: {
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
