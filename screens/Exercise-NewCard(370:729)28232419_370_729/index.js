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
      <View style={styles.View_370_730} />
      <View style={styles.View_370_731}>
        <Text style={styles.Text_370_731}>New Exercise </Text>
      </View>
      <View style={styles.View_370_732}>
        <View style={styles.View_370_733}>
          <View style={styles.View_370_734}>
            <View style={styles.View_370_735} />
            <View style={styles.View_370_736} />
            <View style={styles.View_370_737} />
            <View style={styles.View_370_738}>
              <View style={styles.View_370_739} />
              <View style={styles.View_370_740}>
                <Text style={styles.Text_370_740}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_370_741} />
      <View style={styles.View_370_742}>
        <Text style={styles.Text_370_742}>Name</Text>
      </View>
      <View style={styles.View_370_743}>
        <Text style={styles.Text_370_743}>Add Image</Text>
      </View>
      <View style={styles.View_370_744}>
        <View style={styles.View_370_745}>
          <Text style={styles.Text_370_745}>Description</Text>
        </View>
        <View style={styles.View_370_746} />
      </View>
      <View style={styles.View_370_747}>
        <View style={styles.View_370_748}>
          <Text style={styles.Text_370_748}>Sets</Text>
        </View>
        <View style={styles.View_370_749}>
          <Text style={styles.Text_370_749}>Repetitions</Text>
        </View>
        <View style={styles.View_370_750}>
          <View style={styles.View_370_751} />
          <View style={styles.View_370_752} />
          <View style={styles.View_370_753} />
          <View style={styles.View_370_754} />
          <View style={styles.View_370_755}>
            <Text style={styles.Text_370_755}>3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a41b/e90f/dddb5561bb3ab644c0df78ee803b2867"
            }}
            style={styles.ImageBackground_370_756}
          />
          <View style={styles.View_370_757}>
            <Text style={styles.Text_370_757}>+</Text>
          </View>
          <View style={styles.View_370_758}>
            <Text style={styles.Text_370_758}>-</Text>
          </View>
        </View>
        <View style={styles.View_370_759}>
          <View style={styles.View_370_760} />
          <View style={styles.View_370_761} />
          <View style={styles.View_370_762} />
          <View style={styles.View_370_763} />
          <View style={styles.View_370_764}>
            <Text style={styles.Text_370_764}>3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a41b/e90f/dddb5561bb3ab644c0df78ee803b2867"
            }}
            style={styles.ImageBackground_370_765}
          />
          <View style={styles.View_370_766}>
            <Text style={styles.Text_370_766}>+</Text>
          </View>
          <View style={styles.View_370_767}>
            <Text style={styles.Text_370_767}>-</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_370_768}>
        <View style={styles.View_I370_768_247_156}>
          <Text style={styles.Text_I370_768_247_156}>
            Frequency - Times a Week
          </Text>
        </View>
        <View style={styles.View_I370_768_247_157}>
          <View style={styles.View_I370_768_247_158}>
            <View style={styles.View_I370_768_247_159} />
            <View style={styles.View_I370_768_247_160}>
              <Text style={styles.Text_I370_768_247_160}>Mon</Text>
            </View>
          </View>
          <View style={styles.View_I370_768_247_161}>
            <Text style={styles.Text_I370_768_247_161}>Tue</Text>
          </View>
          <View style={styles.View_I370_768_247_162}>
            <Text style={styles.Text_I370_768_247_162}>Wed</Text>
          </View>
          <View style={styles.View_I370_768_247_163}>
            <Text style={styles.Text_I370_768_247_163}>Tue</Text>
          </View>
          <View style={styles.View_I370_768_247_164}>
            <Text style={styles.Text_I370_768_247_164}>Fri</Text>
          </View>
          <View style={styles.View_I370_768_247_165}>
            <Text style={styles.Text_I370_768_247_165}>Sat</Text>
          </View>
          <View style={styles.View_I370_768_247_166}>
            <Text style={styles.Text_I370_768_247_166}>Sun</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("219_97"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
          }}
          style={styles.ImageBackground_407_578}
        />
      </TouchableOpacity>
      <View style={styles.View_431_548}>
        <View style={styles.View_431_547}>
          <Text style={styles.Text_431_547}>Muscle Type</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("413_1231"))
          }
        >
          <View style={styles.View_431_542}>
            <View style={styles.View_I431_542_413_998} />
            <View style={styles.View_I431_542_413_999}>
              <Text style={styles.Text_I431_542_413_999}>Left Calf</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14c7/ea88/fd945a220994ad11e7cc15562d2c2bef"
              }}
              style={styles.ImageBackground_I431_542_413_1004}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_370_730: {
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
  View_370_731: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("11.612021857923498%")
  },
  Text_370_731: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_732: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("31.147540983606557%")
  },
  View_370_733: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_370_734: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_370_735: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224,
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_370_736: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
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
  View_370_737: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_370_738: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("8.845628415300547%"),
    minHeight: hp("8.845628415300547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("13.114754098360653%")
  },
  View_370_739: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.19535519125683%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderTopLeftRadius: 36.5,
    borderTopRightRadius: 36.5,
    borderBottomLeftRadius: 36.5,
    borderBottomRightRadius: 36.5
  },
  View_370_740: {
    width: wp("7.608695652173914%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1135265700483075%")
  },
  Text_370_740: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_741: {
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    top: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_370_742: {
    width: wp("83.81642512077295%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  Text_370_742: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_743: {
    width: wp("30.917874396135264%"),
    top: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%")
  },
  Text_370_743: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_744: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("61.20218579234973%")
  },
  View_370_745: {
    width: wp("28.985507246376812%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_370_745: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_746: {
    width: wp("87.19806763285024%"),
    height: hp("16.80327868852459%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_370_747: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("111.33879781420765%")
  },
  View_370_748: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_370_748: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_749: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.20289855072463%"),
    top: hp("0%")
  },
  Text_370_749: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_750: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.054644808743163%")
  },
  View_370_751: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
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
  View_370_752: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
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
  View_370_753: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937204%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(208, 241, 255, 1)",
    borderWidth: 3
  },
  View_370_754: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937204%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(208, 241, 255, 1)",
    borderWidth: 3
  },
  View_370_755: {
    width: wp("2.599963588991027%"),
    minWidth: wp("2.599963588991027%"),
    minHeight: hp("6.2091504289804265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.89977614545592%"),
    top: hp("5.882388255635249%")
  },
  Text_370_755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_756: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937204%"),
    top: hp("8.333333333333343%")
  },
  View_370_757: {
    width: wp("10.144927536231885%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.22705314009662%")
  },
  Text_370_757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_758: {
    width: wp("10.144927536231885%"),
    top: hp("9.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.22705314009662%")
  },
  Text_370_758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_759: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.20289855072463%"),
    top: hp("5.054644808743163%")
  },
  View_370_760: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
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
  View_370_761: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
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
  View_370_762: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.5024154589372%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(208, 241, 255, 1)",
    borderWidth: 3
  },
  View_370_763: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.5024154589372%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    borderColor: "rgba(208, 241, 255, 1)",
    borderWidth: 3
  },
  View_370_764: {
    width: wp("2.599963588991027%"),
    minWidth: wp("2.599963588991027%"),
    minHeight: hp("6.2091504289804265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.899776145455924%"),
    top: hp("5.882388255635249%")
  },
  Text_370_764: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_370_765: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.5024154589372%"),
    top: hp("8.333333333333343%")
  },
  View_370_766: {
    width: wp("10.144927536231885%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%")
  },
  Text_370_766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_767: {
    width: wp("10.144927536231885%"),
    top: hp("9.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%")
  },
  Text_370_767: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_768: {
    width: wp("86.01855586692331%"),
    minWidth: wp("86.01855586692331%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("97.54098360655738%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_768_247_156: {
    flexGrow: 1,
    width: wp("78.74396135265701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I370_768_247_156: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_157: {
    flexGrow: 1,
    width: wp("80.94609209880737%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("6.284153005464489%")
  },
  View_I370_768_247_158: {
    width: wp("11.83574879227053%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%")
  },
  View_I370_768_247_159: {
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
  View_I370_768_247_160: {
    width: wp("8.454106280193237%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6485094448218582%")
  },
  Text_I370_768_247_160: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_161: {
    width: wp("7.246376811594203%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.49630132850242%")
  },
  Text_I370_768_247_161: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_162: {
    width: wp("9.178743961352657%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.04819241583635%")
  },
  Text_I370_768_247_162: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_163: {
    width: wp("7.246376811594203%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.78490267398852%")
  },
  Text_I370_768_247_163: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_164: {
    width: wp("5.072463768115942%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.817795610658216%")
  },
  Text_I370_768_247_164: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_165: {
    width: wp("6.280193236714976%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66589886209238%")
  },
  Text_I370_768_247_165: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I370_768_247_166: {
    width: wp("7.487922705314009%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I370_768_247_166: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_578: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  },
  View_431_548: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("83.7431693989071%")
  },
  View_431_547: {
    width: wp("30.917874396135264%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594208%")
  },
  Text_431_547: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_431_542: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.054644808743177%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I431_542_413_998: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("6.967213114754098%"),
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
  View_I431_542_413_999: {
    flexGrow: 1,
    width: wp("32.79460962267889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.084434914704105%"),
    top: hp("0.8360815829918096%")
  },
  Text_I431_542_413_999: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I431_542_413_1004: {
    flexGrow: 1,
    width: wp("12.456862592466788%"),
    height: hp("6.827868789922996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.65677012567934%"),
    top: hp("0.13934693049863256%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
