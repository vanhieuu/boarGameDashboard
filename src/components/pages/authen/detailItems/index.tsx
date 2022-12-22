import React from "react";
import { isEqual } from "lodash";
import { RouteProp, useRoute } from "@react-navigation/native";
import { APP_SCREEN, RootStackParamsList } from "@app/navigation/screen-type";
import { DetailItemsTemp } from "@app/components/templates/detailItems/detailItemsTemp";

const DetailItemScreen = () => {
  const items =
    useRoute<RouteProp<RootStackParamsList, APP_SCREEN.DETAIL_ITEMS>>().params
      .items;

  return <DetailItemsTemp items={items} />;
};

export const DetailItem = React.memo(DetailItemScreen, isEqual);
