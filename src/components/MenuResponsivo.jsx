import { AnimatePresence, motion } from "motion/react";

const MenuResponsivo = ({open, navbarLinks, onClose}) => {
    const animacion = {
        initial : { opacity: 0, y: -100 },
        animate: { opacity: 1, y: -100 },
        exit: { opacity :0, y: 100 },
        transition: { duration: 0.3},
    };
    return (
        <AnimatePresence mode="await">
        {
            open && (
                <motion.div {...animacion} className="absolute top-20 left-0 w-full h-screen z-20" onClick={onClose}>
                    <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6" onClick={(e) => e.stopPropagation()}>
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {navbarLinks.map((item) =>(
                                <li key={item.id} onClick={onClose}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

            )
        }
        </AnimatePresence>
    );
};

export default MenuResponsivo;