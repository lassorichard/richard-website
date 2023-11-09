import { BudgetApp } from "../UI/Organisms/BudgetApp"
import { Prompt } from "../UI/Organisms/Prompt"



export const Budget = () => {
  return (
    <section className="budget">
      <Prompt />
      <BudgetApp />
    </section>
  )
}