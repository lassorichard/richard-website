import { Hero } from "../../UI/Organisms/Hero";
import DrumKitBg from "../../../Assets/Images/drum-kit-bg.jpg";
import { Heading } from "../../UI/Atoms/Heading";
import { Background } from "../../UI/Molecules/Background";
import { DrumKey } from "../../UI/Molecules/DrumKey";
import { DrumAudios } from "../../UI/Molecules/DrumAudios";
import { useCallback, useEffect, useMemo } from "react";

export const DrumKit = () => {
  const blockClass = 'drum-kit';
  const activeClass = `${blockClass}__key--active`;

  const drumKeysInfo = useMemo(() => [
    { letter: 'A', text: 'Clap', dataKey: '65' },
    { letter: 'S', text: 'Hihat', dataKey: '83' },
    { letter: 'D', text: 'Kick', dataKey: '68' },
    { letter: 'F', text: 'Openhat', dataKey: '70' },
    { letter: 'G', text: 'Boom', dataKey: '71' },
    { letter: 'H', text: 'Ride', dataKey: '72' },
    { letter: 'J', text: 'Snare', dataKey: '74' },
    { letter: 'K', text: 'Tom', dataKey: '75' },
    { letter: 'L', text: 'Tink', dataKey: '76' },
  ], []);

  const handleKeyPress = useCallback(
    (event) => {
      const pressedKey = event.key.toUpperCase();
      drumKeysInfo.forEach(keyInfo => {
        if (keyInfo.letter === pressedKey) {
          const audio = document.querySelector(`.${keyInfo.text.toLowerCase()}`)
          const key = document.querySelector(`[datakey="${keyInfo.dataKey}"]`);

          audio.currentTime = 0;
          audio.play();
          key.classList.add(activeClass);

          const removeClass = () => {
            key.classList.remove(activeClass);
          };

          requestAnimationFrame(() => {
            setTimeout(removeClass, 100);
          });
        }
      });
    },
    [drumKeysInfo, activeClass]
  );

  useEffect(() => {
    const handleKeyDown = handleKeyPress;
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);

  return (
    <main className={blockClass} id={blockClass}>
      <Hero
        id='hero-drum-kit'
        customClass={blockClass}
        size="medium"
        justifyContent="center"
        alignContent="end"
        elements={[
          <Heading
            level="h1"
            cssLevel="h1"
            customClass={blockClass}
            text={'Drum kit'}
            color='#F6F7F8'
          />
        ]}
        background={
          <Background
            image={DrumKitBg}
            borderBottomRadius={[
              'left',
              'right'
            ]}
          />
        }
      />
      <div className={`${blockClass}__container container`}>
        {drumKeysInfo.map((keyInfo) => (
          <DrumKey
            key={keyInfo.dataKey}
            blockClass={blockClass}
            letter={keyInfo.letter}
            text={keyInfo.text}
            dataKey={keyInfo.dataKey}
          />
        ))}
      </div>
      <DrumAudios blockClass={blockClass} drumKeysInfo={drumKeysInfo} />
    </main>
  )
};