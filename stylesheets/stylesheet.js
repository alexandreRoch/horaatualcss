import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "100%"
    },
    "header h1": {
        "textAlign": "center",
        "textTransform": "uppercase",
        "fontSize": "10 vmin",
        "fontWeight": "900"
    },
    "main": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "100%"
    },
    "main section": {
        "textAlign": "center"
    },
    "main section h1": {
        "fontSize": 5 * vmin
    },
    "h1": {
        "color": "#ecf0f1"
    }
});