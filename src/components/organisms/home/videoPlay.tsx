import { StyleSheet, Modal, View, TouchableOpacity } from "react-native";
import React from "react";
import { memo } from "react";
import { isEqual } from "lodash";
import { ResizeMode, Video } from "expo-av";
import { height, width } from "@app/ultils/type";
import { AVPlaybackStatus } from "expo-av/build/AV.types";
import { AppTheme, useTheme } from "@app/theme";
import { Text } from "@app/components/atoms/text";

interface VideoProps {
  show: boolean;
  videoRef: React.LegacyRef<Video>;
  resizeMode: ResizeMode;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setResizeMode: React.Dispatch<React.SetStateAction<ResizeMode>>;
  setStatus: React.Dispatch<React.SetStateAction<AVPlaybackStatus | any>>;
}

const VideoPlayOrganisms = ({
  show,
  videoRef,
  resizeMode,
  setFullScreen,
  setResizeMode,
  setStatus,
  setShow,
}: VideoProps) => {
  const styles = rootStyles(useTheme());

  return (
    <>
      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
        style={{backfaceVisibility:'visible'}}
        onRequestClose={() => setShow(false)}
      >
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => setShow(false)}
        >
          <Text fontSize={30} color={useTheme().colors.white}>
            X
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.centeredView,
            {
              height: 210,
            },
          ]}
        >
          <View style={styles.modalView}>
            <Video
              ref={videoRef}
              style={styles.videoStyle}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              shouldPlay={false}
              useNativeControls
              resizeMode={resizeMode}
              isLooping
              onFullscreenUpdate={(event) => {
               
                if (event.fullscreenUpdate === 1) {
                  setResizeMode(ResizeMode.CONTAIN);
                  setFullScreen(true);
                } else if (event.fullscreenUpdate === 3) {
                  setResizeMode(ResizeMode.COVER);
                  setFullScreen(false);
                }
              }}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export const VideoPlay = memo(VideoPlayOrganisms, isEqual);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22,
      height: 210,
      backgroundColor: "transparent",
      backfaceVisibility: "visible",
    },
    modalView: {
      margin: 20,

      borderRadius: 20,
      // padding: 35,
      alignItems: "center",
    },
    videoStyle: {
      width: width,
      height: 210,
      //
      marginHorizontal: 32,
      paddingHorizontal: 32,
    },
    closeView: {
      alignItems: "center",
      justifyContent: "flex-end",
      width: 40,
      position: "absolute",
      right: 10,
      zIndex: 100000,
      top: 32,
    },
  });
