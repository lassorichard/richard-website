
import { Logo } from '../Molecules/Logo'
import { Menu } from '../Molecules/Menu';
import { motion } from "framer-motion";

export const Header = () => {
  const blockClass = 'header';
  return (
    <>
      <motion.header
        className={blockClass}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ transition: { duration: 0.1 } }}
      >
        <div className={`${blockClass}__wrapper container`}>
          <Logo />
          <Menu />
        </div>
      </motion.header>
    </>
  )
}
