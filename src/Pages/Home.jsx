import Popular from "../Components/Popular"
import Veggie from "../Components/Veggie"
import {motion} from "framer-motion"

export default function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.75}}
    >
        <Popular/>
        <Veggie />
    </motion.div>
  )
}
