import "../tailwind.css";
import {IconBrandInstagram, IconBrandWhatsapp, IconMapPinFilled, IconPhoneCall} from "@tabler/icons-react";
import IconCard from "../components/IconCard";


export function ContactUs(){
    return(
        <div className="flex flex-row items-center justify-center items-baseline  m-10 py-20 ">
            <IconCard icon={<IconBrandWhatsapp size={100} color="grey"/>} title={"Whatsapp"} description={"11667766"}/>
            <IconCard icon={<IconBrandInstagram size={100} color="grey"/>} title={"Instagram"} description={"@espacios_divan"}/>
            <IconCard icon={<IconMapPinFilled size={100} color="grey"/>} title={"Ubicacion"} description={"Av. Julia Rivas 2534, Lomas del Mirador"}/>
        </div>
    )
}

