import { Fragment, useState } from "react";
import FeatureBox from "./FeatureBox";
const Feature=()=>{
    const [items,setitems]=useState([
        {
            icon:"icon-access-anywhere.svg",
            name:"Access your files, anywhere",
            text:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },{
            
            icon:"icon-security.svg",
            name:"Security you can trust",
            text:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        },{
            icon:"icon-collaboration.svg",
            name:"Real-time collaboration",
            text:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        },{
            icon:"icon-any-file.svg",
            name:"Store any type of file",
            text:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
    ])
    return(
        <section className="pb-[150px]">
            <div className="container  ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-[100%]" >
                    {
                        items.map((item,index)=>(
                           <FeatureBox 
                            key={item.name}
                            title={item.name} 
                            icon={item.icon} 
                            desc={item.text}
                            />
                        ))
                    }
                </div>
             </div>
        </section>
   

    )
}
export default Feature;