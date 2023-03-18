import "../tailwind.css";
import {IconBrandInstagram, IconBrandWhatsapp, IconMapPinFilled, IconPhoneCall} from "@tabler/icons-react";
import IconCard from "../components/IconCard";


export function ContactUs(){
    return(
        <div className="flex flex-row items-center justify-center items-baseline py-20 text-gray bg-amber-100   ">
            <IconCard icon={<IconBrandWhatsapp size={80} color="gray"/>} title={"Whatsapp"} description={"11667766"}/>
            <IconCard icon={<IconBrandInstagram size={80} color="gray"/>} title={"Instagram"} description={"@espacios_divan"}/>
            <IconCard icon={<IconMapPinFilled size={80} color="gray"/>} title={"Ubicacion"} description={"Av. Julia Rivas 2534, Lomas del Mirador"}/>
        </div>
    )
}

