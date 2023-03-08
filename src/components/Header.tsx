import "../tailwind.css";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
export function Header() {
    return (
        <div className="fixed top-0 w-full text-white p-3">
                <div className="flex flex-col ">
                    <div className="flex items-center justify-end space-x-10">
                        <a href="https://www.whatsapp.com/"><IconBrandWhatsapp color="grey"></IconBrandWhatsapp></a>
                        <a href="https://www.instagram.com/espacio_divan/"><IconBrandInstagram color="grey"></IconBrandInstagram></a>
                    </div>
                    <div className="flex items-center justify-center items-baseline space-x-20">
                        <img src="/public/fotosConsutorio/Capture.PNG" alt="Divan"></img>
                    </div>
                    <div className="flex items-center justify-center items-center space-x-20">
                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quienes somos?</a>
                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                    </div>
                </div>
            </div>
    )
}