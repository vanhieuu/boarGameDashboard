import { RootState } from "@app/assets/store/store";
import { MapOrganisms } from "@app/components/organisms/mapOrganisms";
import { useTheme } from "@app/theme";
import React from "react";
import { useSelector } from "react-redux";




const GuideScreens = () => {
  const theme = useTheme();
  const location = useSelector<RootState,any>(state => state.app.dataLocation)

  return <MapOrganisms theme={theme} location={location} />;
};

export const Guide = React.memo(GuideScreens);
