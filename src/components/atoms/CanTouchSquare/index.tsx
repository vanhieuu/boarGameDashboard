import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React, { memo } from "react";

import { images } from "../../../assets/images";
import { AppTheme } from "../../../theme";

interface LocationSquareProps {
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  colorLine?: AppTheme;
  images: ImageSourcePropType;
  onPress: () => void;
}

const LocationSquareAtoms = (props: LocationSquareProps) => {
  const { top = false, left = false, right = false, bottom = false } = props;

  return (
    <View style={styles.rootViewSideLine}>
      <View style={styles.verticalView}>
        {top && <View style={styles.lineTop} />}
      </View>
      <View style={styles.rowCenterView}>
        <View style={styles.horizontalView}>
          {left && <View style={styles.lineHorizontal} />}
        </View>
        <TouchableOpacity
          onPress={() => {
            props.onPress();
          }}
        >
          <Image
            source={props.images}
            style={{
              width: 80,
              height: 80,
              // backgroundColor: "red",
              // position: "absolute",
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.horizontalView}>
          {right && <View style={styles.lineHorizontal} />}
        </View>
      </View>
      <View style={styles.verticalView}>
        {bottom && <View style={styles.lineBottom} />}
      </View>
    </View>
  );
};

export const LocationSquare = memo(LocationSquareAtoms);

const styles = StyleSheet.create({
  lineTop: {
    height: 30,
    width: 4,
    backgroundColor: "#000",
    position: "absolute",
  },
  rootViewSideLine: {
    alignItems: "center",
    justifyContent: "center",
  },

  lineHorizontal: {
    height: 4,
    width: 30,
    backgroundColor: "#000",
    position: "absolute",
  },
  lineBottom: {
    height: 40,
    width: 4,
    backgroundColor: "#000",
    position: "absolute",
  },
  verticalView: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  horizontalView: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  rowCenterView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
