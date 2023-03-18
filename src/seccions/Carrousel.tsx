import "../tailwind.css";
import { ImagenCarrousel } from "../components/ImagenCarrousel"
export function Carrousel () {
  return (
    <section className="flex w-37 h-27 overflow-hidden px-5">
        <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/Frente.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consulf.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consulf2.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consul2.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consul3.jpg"></ImagenCarrousel>
        <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/pasillo%20(2).jpeg"></ImagenCarrousel>



    </section>
  )
}


