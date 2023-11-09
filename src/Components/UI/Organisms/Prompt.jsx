import { Heading2 } from "../Atoms/Heading2"

export const Prompt = () => {
  return (
    <>
      <div className="prompt__container container">
        <form className="prompt__form">
          <label>
            <Heading2
              text="How much is your budget?"
              extraClass="prompt__heading"
            />
          </label>
          <input type="text" className="input-text"/>
          <input type="button" value="Send" className="btn btn--primary"/>
        </form>
      </div>
    </>
  )
}
