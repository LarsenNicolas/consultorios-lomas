import "../tailwind.css";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
export function Header() {
    return (
        <div className="flex flex-col  pt-2  pb-0">
            <div className="flex justify-center space-x-10 pb-10 ">
                <a href="#carrousel"
                   className="text-neutral-700  px-3 py-2 rounded-md text-sm font-medium hover:text-amber-200  hover:bg-neutral-800">Inicio</a>
                <a href="#whoWeAre"
                   className="text-neutral-700  px-3 py-2 rounded-md text-sm font-medium hover:text-amber-200 hover:bg-neutral-800">Nuestro servicio</a>
                <a href="#contactUs"
                   className="text-neutral-700  hover:text-amber-200  px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-800">Contacto</a>
            </div>
            <div className="flex items-center justify-center items-baseline ">
                <img className="h-60 mb-5  " src="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/Espacios%20Dican%20(1).png" alt="Divan"></img>
            </div>
        </div>
    )
}