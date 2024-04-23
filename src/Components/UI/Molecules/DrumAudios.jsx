import { Audio } from "../Atoms/Audio"
import Clap from "../../../Assets/Sounds/clap.wav";
import Hihat from "../../../Assets/Sounds/hihat.wav";
import Kick from "../../../Assets/Sounds/kick.wav";
import Openhat from "../../../Assets/Sounds/openhat.wav";
import Boom from "../../../Assets/Sounds/boom.wav";
import Ride from "../../../Assets/Sounds/ride.wav";
import Snare from "../../../Assets/Sounds/snare.wav";
import Tom from "../../../Assets/Sounds/tom.wav";
import Tink from "../../../Assets/Sounds/tink.wav";

export const DrumAudios = ({ blockClass, drumKeysInfo }) => {
  const audioMap = {
    Clap,
    Hihat,
    Kick,
    Openhat,
    Boom,
    Ride,
    Snare,
    Tom,
    Tink,
  };

  return (
    <>
      {drumKeysInfo.map((keyInfo, index) => (
        <Audio key={index} className={`${blockClass}__audio ${keyInfo.text.toLowerCase()}`} src={audioMap[keyInfo.text]} />
      ))}
    </>
  )
}