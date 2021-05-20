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
      <View style={styles.View_245_60} />
      <View style={styles.View_245_62}>
        <Text style={styles.Text_245_62}>What clinic do you belong to?</Text>
      </View>
      <View style={styles.View_370_333}>
        <View style={styles.View_245_64} />
        <View style={styles.View_245_65}>
          <Text style={styles.Text_245_65}>Sutter Medical</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7484/8f19/c1d8baf84ef49e0a5b03d2e0f4848534"
          }}
          style={styles.ImageBackground_245_66}
        />
        <View style={styles.View_245_67}>
          <Text style={styles.Text_245_67}>123 Something location, CA</Text>
        </View>
      </View>
      <View style={styles.View_370_334}>
        <View style={styles.View_I370_334_245_64} />
        <View style={styles.View_I370_334_245_65}>
          <Text style={styles.Text_I370_334_245_65}>Sutter Medical</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7484/8f19/c1d8baf84ef49e0a5b03d2e0f4848534"
          }}
          style={styles.ImageBackground_I370_334_245_66}
        />
        <View style={styles.View_I370_334_245_67}>
          <Text style={styles.Text_I370_334_245_67}>
            123 Something location, CA
          </Text>
        </View>
      </View>
      <View style={styles.View_370_339}>
        <View style={styles.View_I370_339_245_64} />
        <View style={styles.View_I370_339_245_65}>
          <Text style={styles.Text_I370_339_245_65}>Sutter Medical</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7484/8f19/c1d8baf84ef49e0a5b03d2e0f4848534"
          }}
          style={styles.ImageBackground_I370_339_245_66}
        />
        <View style={styles.View_I370_339_245_67}>
          <Text style={styles.Text_I370_339_245_67}>
            123 Something location, CA
          </Text>
        </View>
      </View>
      <View style={styles.View_309_749}>
        <View style={styles.View_I309_749_370_448} />
        <View style={styles.View_I309_749_370_449}>
          <Text style={styles.Text_I309_749_370_449}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad5/454a/49ac9d5797be634a99e0ba1a8d5e078d"
          }}
          style={styles.ImageBackground_I309_749_309_730}
        />
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
          style={styles.ImageBackground_368_375}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_245_60: {
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
  View_245_62: {
    width: wp("85.5072463768116%"),
    top: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%")
  },
  Text_245_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_333: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("44.12568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_245_64: {
    flexGrow: 1,
    width: wp("86.95652173913044%"),
    height: hp("11.33879781420765%"),
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
  View_245_65: {
    flexGrow: 1,
    width: wp("77.53623188405797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753624%"),
    top: hp("1.092896174863391%")
  },
  Text_245_65: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_245_66: {
    flexGrow: 1,
    width: wp("13.526570048309178%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("1.775956284153004%"),
    resizeMode: "cover",
    borderTopLeftRadius: 256,
    borderTopRightRadius: 256,
    borderBottomLeftRadius: 256,
    borderBottomRightRadius: 256
  },
  View_245_67: {
    flexGrow: 1,
    width: wp("51.690821256038646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342997%"),
    top: hp("6.420765027322403%")
  },
  Text_245_67: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_334: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("56.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_334_245_64: {
    flexGrow: 1,
    width: wp("86.95652173913044%"),
    height: hp("11.33879781420765%"),
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
  View_I370_334_245_65: {
    flexGrow: 1,
    width: wp("77.53623188405797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753624%"),
    top: hp("1.0928961748633839%")
  },
  Text_I370_334_245_65: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I370_334_245_66: {
    flexGrow: 1,
    width: wp("13.526570048309178%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("1.775956284152997%"),
    resizeMode: "cover",
    borderTopLeftRadius: 256,
    borderTopRightRadius: 256,
    borderBottomLeftRadius: 256,
    borderBottomRightRadius: 256
  },
  View_I370_334_245_67: {
    flexGrow: 1,
    width: wp("51.690821256038646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342997%"),
    top: hp("6.420765027322403%")
  },
  Text_I370_334_245_67: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_370_339: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("69.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I370_339_245_64: {
    flexGrow: 1,
    width: wp("86.95652173913044%"),
    height: hp("11.33879781420765%"),
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
  View_I370_339_245_65: {
    flexGrow: 1,
    width: wp("77.53623188405797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753624%"),
    top: hp("1.0928961748633839%")
  },
  Text_I370_339_245_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I370_339_245_66: {
    flexGrow: 1,
    width: wp("13.526570048309178%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("1.7759562841530112%"),
    resizeMode: "cover",
    borderTopLeftRadius: 256,
    borderTopRightRadius: 256,
    borderBottomLeftRadius: 256,
    borderBottomRightRadius: 256
  },
  View_I370_339_245_67: {
    flexGrow: 1,
    width: wp("51.690821256038646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342997%"),
    top: hp("6.420765027322403%")
  },
  Text_I370_339_245_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_309_749: {
    width: wp("86.95652173913044%"),
    minWidth: wp("86.95652173913044%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_749_370_448: {
    flexGrow: 1,
    width: wp("86.95652173913044%"),
    height: hp("6.579060893241174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.623062884221312%"),
    borderColor: "rgba(21, 185, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_I309_749_370_449: {
    flexGrow: 1,
    width: wp("83.58424827096543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589372%"),
    top: hp("5.601092896174862%")
  },
  Text_I309_749_370_449: {
    color: "rgba(102, 99, 99, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I309_749_309_730: {
    flexGrow: 1,
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("5.874316939890711%")
  },
  ImageBackground_368_375: {
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
