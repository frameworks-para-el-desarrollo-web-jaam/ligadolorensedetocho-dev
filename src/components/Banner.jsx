import { motion } from "motion/react";

const Banner = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-secondary text-white py-6"
        >
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                    ¡Bienvenido a la LDT!
                </h2>
                <p className="mt-2 text-lg md:text-xl opacity-90">
                    Liga Dolorense de Tocho
                </p>
            </div>
        </motion.div>
    );
};

export default Banner;
