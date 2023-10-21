import { useState } from "react";
import TestBox from "./TestBox";

const Testmonials=()=>{
    const [items,setitems]=useState([{
        title:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image:"profile-1.jpg",
        name:"Satish Patel",
        text:"Founder & CEO, Huddle"
    },{
        title:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image:"profile-2.jpg",
        name:"Bruce McKenzie",
        text:"Founder & CEO, Huddle"
    },{
        title:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image:"profile-3.jpg",
        name:"Iva Boyd",
        text:"Founder & CEO, Huddle"
    }])
    return(
         <section className="pt-[150px] pb-[300px]">
            <div className="container relative">
               <div className="absolute left-[-10px] top-[-35px] -z-[10]">
                <img src="/src/assets/images/bg-quotes.png" alt="qutoe"></img>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] px-[20px]">
                {
                    items.map((item,index)=>(
                       <TestBox key={item.image} title={item.title} image={item.image} name={item.name} text={item.text}></TestBox>
                    
                    ))
                 }
                </div>
            </div>
         </section>
    )
}
export default Testmonials;