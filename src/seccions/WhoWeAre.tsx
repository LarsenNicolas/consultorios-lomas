import {ImagenCarrousel} from "../components/ImagenCarrousel";

export function WhoWeAre(){
    return(
        <div className="flex flex-row items-center justify-center items-baseline   py-16 px-32  h-86  " >

            <img  className="w-76
            "
                  src="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/imgwhoweare.jpg" alt=""></img>

            <p className="text-xl font-small">En <strong>Espacios Divan</strong> trabajamos para brindarle al profesional y al paciente la mayor comodidad, calidad y servicio.
                Lo ayudamos a crear un ambiente adecuado para su trabajo. Contamos con 3 consultorios médicos totalmente equipados.
                Para lograr una mejor dinámica de trabajo, seriedad y organización proveemos el servicio de secretaria, central telefónica, servicio de wifi, historia clínica computarizada,
                turnos On Line, servicio de cafetería y agua, sala de espera, aire acondicionado y calefacción en todos los consultorios.
            </p>


        </div>
    )

}