import React from "react";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { navbarLinks } from "../data/data.js";
import MenuResponsivo from "./MenuResponsivo.jsx";
//import data from "/Users/abela/OneDrive/Documentos/Frameworks/proyecto-frontend-ligadeportiva-jaam/src/data";
import { useState } from "react";

const Navbar = () => {
    const [abierto, setAbierto] = useState(false);
    //Usar la clase container me generaba problemas con el flex, así que decidi no agregarla
    return(
        <>
            <nav className="bg-white">
                <div className='px-2 flex justify-between font-bold items-center py-8'>
                    {
                        //SECCIONLOGO
                       <div className="flex">
                            <div className='text-2xl flex items-center gap-2 uppercase'>  
                            <ImBooks />
                            <p>ligadolorensedetocho</p>
                            </div>
                            <div className="hidden md:block">
                            <ul className="flex items-center gap-7 text-gray-600">
                                {navbarLinks.map((item) =>(
                                    <li key={item.id}>
                                        <a href={item.url} className="inline-block py-1 px-3 hover:text-primary">
                                            {item.title}
                                        </a>

                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    }
                    {
                        <div className="flex items-center gap-4">
                            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                                <CiSearch/>
                            </button>
                            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                                <PiShoppingCartLight />
                            </button>
                            <button className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block">
                                Ingresar 
                            </button>
                            

                        </div>
                    }
                    {
                        <div className="md:hidden">
                            <MdMenu onClick={ () => setAbierto(!abierto)} className="text-4xl" />

                        </div>

                    }
                </div>
            </nav>
            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} onClose={() => setAbierto(false)}/>
        </>
        
    )
}
export default Navbar