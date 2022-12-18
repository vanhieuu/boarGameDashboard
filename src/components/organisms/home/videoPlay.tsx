import { StyleSheet, Modal, View } from "react-native";
import React from "react";
import { memo } from "react";
import { isEqual } from "lodash";
import { ResizeMode, Video } from "expo-av";
import { height, width } from "@app/ultils/type";
import { AVPlaybackStatus } from "expo-av/build/AV.types";

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
  return (
    <>
      {show && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <Modal
            visible={show}
            onRequestClose={() => setShow(false)}
            style={{
              width: width,
              height: height / 4,
              marginTop: 20,
            }}
          >
            <Video
              ref={videoRef}
              style={{
                width: width,
                height: 210,
              }}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              shouldPlay={false}
              useNativeControls
              resizeMode={resizeMode}
              isLooping
              onFullscreenUpdate={(event) => {
                console.log(event.fullscreenUpdate);
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
          </Modal>
        </View>
      )}
    </>
  );
};

export const VideoPlay = memo(VideoPlayOrganisms, isEqual);

const styles = StyleSheet.create({});
