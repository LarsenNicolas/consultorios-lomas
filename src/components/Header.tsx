import "../tailwind.css";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
export function Header() {
    return (
        <div className="flex flex-col py-10 px-40    ">
            <div className="flex items-center justify-end space-x-10">
                <a href="https://www.whatsapp.com/"><IconBrandWhatsapp size={40} color="grey"></IconBrandWhatsapp></a>
                <a href="https://www.instagram.com/espacio_divan/"><IconBrandInstagram size={40} color="grey"></IconBrandInstagram></a>
            </div>
            <div className="flex items-center justify-center items-baseline">
                <img src="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/Capture.PNG" alt="Divan"></img>
            </div>
            <div className="flex justify-center items-center space-x-20">
                <a href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                <a href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quienes somos?</a>
                <a href="#"
                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
        </div>
    )
}