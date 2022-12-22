import React, { memo } from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import {
  APP_SCREEN,
  RootStackParamsList,
} from "../../../../navigation/screen-type";
import { DetailCharactersTem } from "@app/components/templates/detailCharacter/detailCharacterTemp";

const DetailCharactersScreen = () => {
  const params =
    useRoute<RouteProp<RootStackParamsList, APP_SCREEN.DETAILS_CHARACTERS>>()
      .params.characters;

  return <DetailCharactersTem characters={params} />;
};

export const DetailCharacters = memo(DetailCharactersScreen);
