import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from "react-native";
import React, { memo } from "react";
import { isEqual } from "lodash";
import { AppTheme } from "@app/theme";
import { navigate } from "@app/navigation/navigation-services";
import { APP_SCREEN } from "@app/navigation/screen-type";
import { Data, height, width } from "@app/ultils/type";

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
        <ScrollView style={styles.filterItemView}>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: theme.colors.background,
              marginBottom:40
            }}
            // onTouchStart={() => setShow(false)}
          >
            {filterData.length > 0 ? (
              filterData.map((item: Data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                    onPress={() => {
                      if (item.typeOf === "Characters") {
                        navigate(APP_SCREEN.DETAILS_CHARACTERS, {
                          characters: item,
                        });
                      } else {
                        navigate(APP_SCREEN.DETAIL_ITEMS, {
                          items: item,
                        });
                      }
                    }}
                  >
                    {item.typeOf == "Characters" ? (
                      <Image
                        source={{ uri: item.chess }}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 40,
                        }}
                        resizeMode="contain"
                      />
                    ) : (
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: 25,
                          height: 25,
                          marginLeft:6,
                          marginRight:10
                          // borderRadius: 40,
                        }}
                        resizeMode="contain"
                      />
                    )}

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
                      {item.typeOf == "Characters" ? (
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "200",
                            color: theme.colors.border,
                          }}
                        >
                          {item.type}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "200",
                            color: theme.colors.border,
                          }}
                        >
                          {item.type === "exchange"
                            ? "Trao đổi"
                            : item.type === "material"
                            ? "Nguyên liệu"
                            : "Vật phẩm chính"}
                        </Text>
                      )}
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
        </ScrollView>
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
