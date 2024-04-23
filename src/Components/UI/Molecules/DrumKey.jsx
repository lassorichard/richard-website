import { Heading } from "../Atoms/Heading"

export const DrumKey = ({ blockClass, letter, text, dataKey }) => {
  return (
    <>
      <div className={`${blockClass}__key`} datakey={dataKey}>
        <Heading
          color="#ffffff"
          level="h2"
          cssLevel="h2"
          customClass={`${blockClass}-key`}
          text={letter}
        />
        <Heading
          color="#ffffff"
          level="h4"
          cssLevel="h4"
          customClass={`${blockClass}`}
          text={text}
        />
      </div>
    </>
  )
}