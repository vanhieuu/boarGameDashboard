import React from "react";
import { View } from "react-native";

import { useTheme } from "../../../../theme";

import { MapOrganisms } from "../../../organisms/mapOrganisms";

const GuideScreens = () => {
  const theme = useTheme();

  return <MapOrganisms theme={theme} />;
};

export const Guide = React.memo(GuideScreens);
