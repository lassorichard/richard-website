import { BudgetApp } from "../UI/Organisms/BudgetApp"
import { Prompt } from "../UI/Organisms/Prompt"
import { motion } from "framer-motion";

export const Budget = () => {
  return (
    <motion.section
      className="budget"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.1 } }}
    >
      <Prompt />
      <BudgetApp />
    </motion.section>
  )
}