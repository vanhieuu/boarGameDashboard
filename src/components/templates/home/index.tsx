import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Constants from "expo-constants";
import { Video } from "expo-av";
import { ResizeMode } from "expo-av/build/Video.types";
import { AVPlaybackStatus } from "expo-av/build/AV.types";
import * as ScreenOrientation from "expo-screen-orientation";
import { isEqual } from "lodash";

import { onSetItem } from "@app/assets/store/api/slice/item";
import {
  onSetData,
  onSetDataEvent,
} from "@app/assets/store/api/slice/appSlice";
import { RootState } from "@app/assets/store/store";
import { SearchBar } from "@app/components/molecules/searchBar";
import { SearchViewOrgan } from "@app/components/organisms/searchView";
import {
  apiGetDataCharacters,
  apiGetEvent,
  apiGetItems,
} from "@app/assets/store/api";
import { onSetCharacters } from "@app/assets/store/api/slice/characters";
import { height } from "@app/ultils/type";
import { AppTheme, useTheme } from "@app/theme";
import { FirstBanner } from "@app/components/organisms/home/firstBanner";
import { SecondBanner } from "@app/components/organisms/home/secondBanner";
import { ThirdBanner } from "@app/components/organisms/home/thirdBanner";
import { VideoPlay } from "@app/components/organisms/home/videoPlay";

import { Text } from "@app/components/atoms/text";

const HomePageTemplates = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const data: any[] = useSelector<RootState, any>((state) => state.app.data);
  const [filterData, setFilterData] = useState<any[]>(data);
  const [show, setShow] = useState(false);
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const [resizeMode, setResizeMode] = useState<ResizeMode>(ResizeMode.COVER);
  const [showVideo, setShowVideo] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiGetDataCharacters().then((res) => {
      dispatch(onSetCharacters(res));
      dispatch(onSetData([...res]));
      apiGetItems().then((item) => {
        dispatch(onSetItem(item));
        dispatch(onSetData(res.concat(item)));
      });
    });
    apiGetEvent().then((res) => {
      dispatch(onSetDataEvent(res));
    });
  }, []);

  useEffect(() => {
    changeScreenOrientation();
  }, [fullScreen, setFullScreen]);

  const changeScreenOrientation = () => {
    if (fullScreen) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  };
  return (
    
      <View style={[styles(useTheme()).root]}>
        <SearchBar setFilterData={setFilterData} setShow={setShow} />
        <SearchViewOrgan filterData={filterData} theme={theme} show={show} />
        <ScrollView style={styles(useTheme()).contentBottomView}>
          <FirstBanner />
          <SecondBanner />
          <ThirdBanner setShow={setShowVideo} />
        </ScrollView>
        {showVideo && (
        <View
          style={styles(useTheme()).videoView}
        >
          <VideoPlay
            show={showVideo}
            videoRef={videoRef}
            resizeMode={resizeMode}
            setShow={setShowVideo}
            setFullScreen={setFullScreen}
            setResizeMode={setResizeMode}
            setStatus={setStatus}
          />
        </View>
      )}
      </View>
      
    
  );
};

export const HomePageTemp = React.memo(HomePageTemplates, isEqual);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      paddingTop: Constants.statusBarHeight + (height > 800 ? 0 : 0),
    },
    contentBottomView: {
      marginTop: 16,
      flex: 1,
      //   backgroundColor:'blue',
      width: "100%",
    },
    videoView:{
      width: "100%",
      height: height,
      backgroundColor: "black",
      opacity: 0.85,
      backfaceVisibility: "visible",
      // zIndex:1000000,
      position: "absolute",
    }
  });
