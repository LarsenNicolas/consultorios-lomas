import "../tailwind.css";
import { ImagenCarrousel } from "../components/ImagenCarrousel"
export function Carrousel () {
  return (
    <section className="flex w-37 h-27 overflow-hidden px-5">
        <ImagenCarrousel path="public/fotosConsutorio/Frente.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consulf.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consulf2.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consul2.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consul3.jpg"></ImagenCarrousel>
    </section>
  )
}


