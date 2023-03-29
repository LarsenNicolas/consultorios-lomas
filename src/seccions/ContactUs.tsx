import "../tailwind.css";
import {IconBrandInstagram, IconBrandWhatsapp, IconMapPinFilled, IconPhoneCall} from "@tabler/icons-react";
import IconCard from "../components/IconCard";


export function ContactUs(){
    return(
        <div className="flex items-center flex-col bg-amber-100 lg:flex-row ">
            <IconCard icon={<IconBrandWhatsapp size={80} />} title={"Whatsapp"} description={"11667766"}/>
            <IconCard icon={<IconBrandInstagram size={80} />} title={"Instagram"} description={"@espacios_divan"}/>
            <IconCard icon={<IconMapPinFilled size={80} />} title={"Ubicacion"} description={"Av. XXXAAA 2534, Lomas del Mirador"}/>
        </div>
    )
}

