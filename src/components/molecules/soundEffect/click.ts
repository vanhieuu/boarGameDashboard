import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import {  useEffect, useMemo, useState } from "react";

export const onClick = async() =>{
  const {sound} =await Audio.Sound.createAsync(require('../../../../assets/sound/click.mp3'))
return await sound.playAsync()
}