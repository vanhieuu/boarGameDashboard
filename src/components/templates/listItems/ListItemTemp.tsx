import { StyleSheet, View } from "react-native";
import React, { memo, useCallback, useMemo, useState } from "react";
import { height, Items } from "@app/ultils/type";
import { AppTheme, useTheme } from "@app/theme";
import { SearchBar } from "@app/components/molecules/searchBar";
import { SearchViewOrgan } from "@app/components/organisms/searchView";
import Constants from "expo-constants";
import { FilterView } from "@app/components/molecules/filterView";
import { ListItemOrgan } from "@app/components/organisms/listItems/ListItems";

interface ListItemsProps {
  items: Items[];
}

const ListItemsTemplate = ({ items }: ListItemsProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const [filterData, setFilterData] = useState<Items[]>(items);
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [value, setValue] = useState("all");
  const [filterItem, setFilterItems] = useState<Items[]>(items);

  useMemo(() => {
    if (value != "all") {
      setFilterItems(items.filter((item) => item.type === value));
    } else {
      setFilterItems(items);
    }
    return undefined;
  }, [value]);

  return (
    <View style={styles.root}>
      <SearchBar setFilterData={setFilterData} setShow={setShow} />
      <SearchViewOrgan show={show} theme={theme} filterData={filterData} />
      <FilterView
        show={showFilter}
        setShow={setShowFilter}
        setValue={setValue}
        value={value}
      />
      <ListItemOrgan items={filterItem} />
    </View>
  );
};

export const ListItemsTemp = memo(ListItemsTemplate);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      paddingTop: Constants.statusBarHeight - 15 + (height > 800 ? 10 : 0),
    },
    iconFilterView: {
      marginBottom: 20,
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingHorizontal: 32,
    },
    filterContent: {
      flexDirection: "row",
      marginTop: 16,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor:'red',
      paddingHorizontal: 4,
    },
  });
