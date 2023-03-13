import "../tailwind.css";
import { ImagenCarrousel } from "../components/ImagenCarrousel"
export function Carrousel () {
  return (
    <section className="flex w-37 h-27 overflow-hidden  ">
        <ImagenCarrousel path="public/fotosConsutorio/Frente.jpeg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consul1.jpeg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consul2.jpeg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/consul3.jpeg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/pasillo1.jpeg"></ImagenCarrousel>
        <ImagenCarrousel path="public/fotosConsutorio/pasillo.jpeg"></ImagenCarrousel>
    </section>
  )
}


