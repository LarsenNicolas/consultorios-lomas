import "../tailwind.css";

export function ImagenCarrousel (props: { path: string }) {
    return (
        <img className="w-0 grow object-cover brightness-50
                transition ease-in-out hover:scale-x-125 hover:z-50 hover:brightness-100 hover:contrast-125"
             src={props.path} alt="">
        </img>
    )
}