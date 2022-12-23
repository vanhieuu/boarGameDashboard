import React from "react";
import { useSelector } from "react-redux";
import { Items } from "@app/ultils/type";
import { ListItemsTemp } from "@app/components/templates/listItems/ListItemTemp";

const ListItemsScreens = () => {
  const items: Items[] = useSelector((state: any) => state.items.items);
 

  return <ListItemsTemp items={items} />;
};

export const ListItems = React.memo(ListItemsScreens);

