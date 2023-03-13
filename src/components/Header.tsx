import "../tailwind.css";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
export function Header() {
    return (
        <div className="flex flex-col py-10 px-2 pt-0 px-0 pb-0">
            {/*<div className="flex  justify-end space-x-4 mt-0 py-0 px-2 bg-amber-100">*/}
            {/*    <a href="https://www.whatsapp.com/"><IconBrandWhatsapp size={40} color="brown" ></IconBrandWhatsapp></a>*/}
            {/*    <a href="https://www.instagram.com/espacio_divan/"><IconBrandInstagram size={40} color="brown"></IconBrandInstagram></a>*/}
            {/*</div>*/}
            <div className="flex items-center justify-center items-baseline">
                <img src="/public/fotosConsutorio/Capture.PNG" alt="Divan"></img>
            </div>
            <div className="flex justify-center items-center space-x-20 bg-amber-100 ">
                <a href="#"
                   className="text-amber-500  hover:text-amber-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                <a href="#"
                   className="text-amber-500  hover:text-amber-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quienes somos?</a>
                <a href="#"
                   className="text-amber-500  hover:text-amber-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
        </div>
    )
}