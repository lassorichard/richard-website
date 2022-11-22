import { Heading2 } from "../Atoms/Heading2"

export const Prompt = () => {
  return (
    <>
      <div className="promp__container container">
        <form>
          <label htmlFor="budget-input"></label>
          <Heading2
            text="How much is your budget?"
          />
          <input type="text" name="budget-input"/>
        </form>
      </div>
    </>
  )
}
