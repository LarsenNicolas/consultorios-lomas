import "../tailwind.css";


export default function IconCard(props:{icon: any, title: string, description: string}){
    return(
        <section className="flex flex-col items-center w-2/6">
            {props.icon}
           <span className="">
              <strong> {props.title}</strong>
           </span>
           <span>
               {props.description}
           </span>
        </section>
    )
}