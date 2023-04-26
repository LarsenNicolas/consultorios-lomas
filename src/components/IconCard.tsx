import "../tailwind.css";


export default function IconCard(props: {icon: any, title: string, description: string, href: string}){
    return(
        <a className="flex flex-col items-center w-2/6 py-5 lg:py-20" href={props.href} target="_blank">
            {props.icon}
            <span className="">
              <strong> {props.title}</strong>
           </span>
            <span className="text-center">
               {props.description}
           </span>
        </a>
    )
}