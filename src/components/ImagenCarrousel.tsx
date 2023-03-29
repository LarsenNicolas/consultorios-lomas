import "../tailwind.css";

export function ImagenCarrousel (props: { path: string }) {
    return (
        <img className='h-70 p-2'
            src={props.path}
            alt=""
        />
    )
}

//
// className="w-10 grow object-cover brightness-50
// transition ease-in-out hover:scale-x-125 hover:z-50 hover:brightness-100 hover:contrast-125"