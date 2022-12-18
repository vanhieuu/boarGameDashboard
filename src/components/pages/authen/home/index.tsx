import React from "react";

import { HomePageTemp } from "@app/components/templates/home";

const HomePageScreens = () => {
  return <HomePageTemp />;
};

export const HomePage = React.memo(HomePageScreens);
