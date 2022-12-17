import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppTheme, useTheme } from "../../../../theme";
import {
  apiGetDataCharacters,
  apiGetItems,
} from "../../../../assets/store/api";
import { useDispatch, useSelector } from "react-redux";

import { onSetCharacters } from "../../../../assets/store/api/slice/characters";
import { onSetItem } from "@app/assets/store/api/slice/item";
import { onSetData, onSetMoreData } from "@app/assets/store/api/slice/appSlice";
import { RootState } from "@app/assets/store/store";

const HomePageScreens = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data: any[] = useSelector<RootState, any>((state) => state.app.data);
  useEffect(() => {
    setLoading(true);
    apiGetDataCharacters().then((res) => {
      dispatch(onSetCharacters(res));
      dispatch(onSetData([...res]));
      apiGetItems().then((item) => {
        dispatch(onSetItem(item));
        dispatch(onSetData(res.concat(item)));
      });
    });
  }, []);

  return (
    <View style={styles(useTheme()).root}>
      <Text style={{ color: "black" }}>HomePageScreens</Text>
    </View>
  );
};

export const HomePage = React.memo(HomePageScreens);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
  });
