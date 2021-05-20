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
      <View style={styles.View_127_135} />
      <View style={styles.View_127_136}>
        <Text style={styles.Text_127_136}>Sign In</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("231_801"))
        }
      >
        <View style={styles.View_127_139}>
          <View style={styles.View_I127_139_103_23} />
          <View style={styles.View_I127_139_103_22}>
            <Text style={styles.Text_I127_139_103_22}>Sign In</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("209_0"))
        }
      >
        <View style={styles.View_127_140}>
          <Text style={styles.Text_127_140}>Not an user? Sign up instead.</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_127_149}>
        <View style={styles.View_I127_149_115_58} />
        <View style={styles.View_I127_149_115_89}>
          <Text style={styles.Text_I127_149_115_89}>Name</Text>
        </View>
        <View style={styles.View_I127_149_115_120}>
          <Text style={styles.Text_I127_149_115_120}>Username</Text>
        </View>
      </View>
      <View style={styles.View_127_150}>
        <View style={styles.View_I127_150_115_58} />
        <View style={styles.View_I127_150_115_89}>
          <Text style={styles.Text_I127_150_115_89}>Password</Text>
        </View>
        <View style={styles.View_I127_150_115_120}>
          <Text style={styles.Text_I127_150_115_120}>Password</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("115_26"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3663/63fe/a990ac96778453b6bb1af95ca1b9a581"
          }}
          style={styles.ImageBackground_368_381}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_127_135: {
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
  View_127_136: {
    width: wp("77.53623188405797%"),
    minWidth: wp("77.53623188405797%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("31.967213114754102%")
  },
  Text_127_136: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_139: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("94.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I127_139_103_23: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("10.10928961748634%"),
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
  View_I127_139_103_22: {
    flexGrow: 1,
    width: wp("72.70531400966183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874396%"),
    top: hp("0%")
  },
  Text_I127_139_103_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_140: {
    width: wp("76.81159420289855%"),
    top: hp("109.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%")
  },
  Text_127_140: {
    color: "rgba(21, 185, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_149: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("44.94535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I127_149_115_58: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.314503820867493%"),
    backgroundColor: "rgba(21, 185, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I127_149_115_89: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("7.6502732240437155%")
  },
  Text_I127_149_115_89: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I127_149_115_120: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I127_149_115_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_150: {
    width: wp("87.19806763285024%"),
    minWidth: wp("87.19806763285024%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("62.158469945355186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I127_150_115_58: {
    flexGrow: 1,
    width: wp("87.19806763285024%"),
    height: hp("8.986035331350859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.314503820867493%"),
    backgroundColor: "rgba(208, 241, 255, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I127_150_115_89: {
    flexGrow: 1,
    width: wp("83.81642512077295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("7.650273224043723%")
  },
  Text_I127_150_115_89: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I127_150_115_120: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I127_150_115_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_368_381: {
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
