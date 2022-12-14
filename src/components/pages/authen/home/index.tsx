import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppTheme, useTheme } from "../../../../theme";
import { apiGetData } from "../../../../assets/store/api";
import { useDispatch } from "react-redux";

import { onSetCharacters } from "../../../../assets/store/api/slice/characters";

const HomePageScreens = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    apiGetData().then((res) => {
      dispatch(onSetCharacters(res[0].characters));
     
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
