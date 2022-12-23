import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { AppTheme, useTheme } from "@app/theme";
import { Icons } from "@app/components/atoms/icon/icons";
import { Items } from "@app/ultils/type";

interface FilterViewProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const itemsType = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "exchange",
  },
  {
    id: 2,
    name: "material",
  },
  {
    id: 3,
    name: "primary",
  },
];

const FilterViewMolecules = ({
  setShow,
  show,
  setValue,
  value,
}: FilterViewProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  return (
    <View style={styles.iconFilterView}>
      <View>
        <TouchableOpacity
          style={styles.filterContent}
          onPress={() => {
            setShow(!show);
          }}
        >
          <Icons icon="iconFilter" size={20} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {!!show && (
        <View
          style={{
            flexDirection: "column",
            backgroundColor: theme.colors.background,
          }}
        >
          {itemsType.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                onPress={() => {
                  setValue(item.name);
                }}
                style={styles.itemView}
              >
                <View style={{ marginRight: 10, flex: 1 }}>
                  <Text
                    style={{
                      textAlign: "right",
                      textAlignVertical: "auto",
                      fontWeight: value === item.name ? "bold" : "200",
                    }}
                  >
                    {item.name === "exchange"
                      ? "Vật phẩm trao đổi"
                      : item.name === "material"
                      ? "Vật phẩm nguyên liệu"
                      : item.name === "primary"
                      ? "Vật phẩm chính"
                      : "Tất cả"}
                  </Text>
                </View>

                {value === item.name && (
                  <View
                    style={{
                      alignContent: "flex-end",
                      flexBasis: 0,
                    }}
                  >
                    <View style={styles.selectShow} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export const FilterView = memo(FilterViewMolecules);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    iconFilterView: {
      marginBottom: 20,
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingHorizontal: 21,
      backgroundColor: "transparent",
    },
    filterContent: {
      flexDirection: "row",
      marginTop: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    selectShow: {
      width: 10,
      height: 10,
      borderWidth: 1,
      borderColor: theme.colors.searchBar,
      backgroundColor: theme.colors.searchBar,
    },
    itemView: {
      flexDirection: "row",
      alignItems: "center",
      width: 180,
      justifyContent: "space-around",

      //   flex:1
    },
  });
