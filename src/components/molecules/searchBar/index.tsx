import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import React, { memo, useState } from "react";
import { debounce, isEqual } from "lodash";
import Constants from "expo-constants";
import { Icons } from "@app/components/atoms/icon/icons";
import { AppTheme, useTheme } from "@app/theme";
import { useSelector } from "react-redux";
import { RootState } from "@app/assets/store/store";
import { Characters } from "@app/ultils/type";
import { removeVietnameseTones } from "./../../../assets/config/function";
const { width, height } = Dimensions.get("screen");

interface SearchProps {
  setFilterData: React.Dispatch<React.SetStateAction<Characters[]>>;

  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBarMolecules = ({ setFilterData, setShow }: SearchProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const [value, setValue] = useState("");

  const data: any[] = useSelector<RootState, any>(
    (state) => state.app.data
  );


  const onChangeText = debounce((value: string) => {
    if (value != "") {
      setShow(true);
      const newData = data.filter((item) => {
        const itemData = removeVietnameseTones(item.name)
          ? removeVietnameseTones(item.name.toUpperCase())
          : "".toUpperCase();
        const textData = removeVietnameseTones(value.toUpperCase());
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setValue(value);
    } else {
      setFilterData([]);
      setValue(value);
      setShow(false);
    }
  }, 400);
  //   console.log(data, "filterData");

  return (
    <>
      <View style={styles.searchView}>
        <View style={styles.iconView}>
          <Icons icon="iconSearch" size={20} />
        </View>
        <TextInput
          style={styles.searchBarText}
          onChangeText={onChangeText}
          // value={value}
        />
      </View>
    </>
  );
};

export const SearchBar = memo(SearchBarMolecules, isEqual);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    searchView: {
      marginTop: Constants.statusBarHeight + (height > 800 ? 10 : 0),
      alignItems: "center",
      flexDirection: "row",
    },
    iconView: {
      position: "absolute",
      left: 10,
      width: 20,
      height: 20,
    },

    searchBarText: {
      width: "90%",
      // borderRadius:10,
      borderWidth: 2,
      height: 40,
      borderColor: theme.colors.searchBar,
      color: theme.colors.textTab,
      paddingLeft: 35,
      fontSize: 14,
      lineHeight: 16,
      fontFamily: "Roboto",
    },
    filterItem: { width: "100%", alignItems: "flex-end" },
  });
