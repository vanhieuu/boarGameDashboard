import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { isEqual } from "lodash";
import { AppTheme } from "@app/theme";
import { navigate } from "@app/navigation/navigation-services";
import { APP_SCREEN } from "@app/navigation/screen-type";
import { height, width } from "@app/ultils/type";

interface SearchViewOrganProps {
  show: boolean;
  theme: AppTheme;
  filterData: any[];
}

const SearchViewOrganism = ({
  show,
  theme,
  filterData,
}: SearchViewOrganProps) => {
  const styles = rootStyles(theme);
  return (
    <>
      {show && (
        <View style={styles.filterItemView}>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: theme.colors.background,
            }}
            // onTouchStart={() => setShow(false)}
          >
            {filterData.length > 0 ? (
              filterData.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                    onPress={() => {
                      navigate(APP_SCREEN.DETAILS_CHARACTERS, {
                        characters: item,
                      });
                    }}
                  >
                    <Image
                      source={{ uri: item.chess }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                      }}
                      resizeMode="contain"
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: theme.colors.black,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "200",
                          color: theme.colors.border,
                        }}
                      >
                        {item.type}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <View style={{ backgroundColor: theme.colors.background }}>
                <Text>Không tìm thấy</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export const SearchViewOrgan = memo(SearchViewOrganism, isEqual);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    filterItemView: {
      width: width,
      position: "absolute",
      zIndex: 10000,
      flex: 1,
      height: "100%",
      top: height > 800 ? 115 : 83,
    },
  });
