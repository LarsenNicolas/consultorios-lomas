import "../tailwind.css";
import {IconBrandInstagram, IconBrandWhatsapp, IconMapPinFilled, IconPhoneCall} from "@tabler/icons-react";
import IconCard from "../components/IconCard";


export function ContactUs(){
    return(
        <div id="contactUs" className="flex items-center flex-col bg-amber-100 lg:flex-row ">
            <IconCard
                icon={<IconBrandWhatsapp size={80}/>}
                title={"Whatsapp"}
                description={"11xxxxxxxx"}
                href="https://web.whatsapp.com/"
            />
            <IconCard icon={<IconBrandInstagram size={80} />}
                      title={"Instagram"}
                      description={"@espacios_divan"}
                      href="https://www.instagram.com/espacio_divan/"
            />
            <IconCard icon={<IconMapPinFilled size={80} />}
                      title={"Ubicacion"}
                      description={"Av. Hipólito Yrigoyen 9187,  Lomas del Mirador"}
                      href="https://www.google.com/maps/place/Edificio+Donna+Lomas+Center/@-34.7625635,-58.4053945,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd292d64d7d31:0x8c7725bbbbf563ee!8m2!3d-34.7625679!4d-58.4032058!16s%2Fg%2F11cs3997_w?hl=es"
            />
        </div>
    )
}

