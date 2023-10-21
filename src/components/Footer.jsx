import { useState } from "react";

const Footer=()=>{
    const [list,setlist]=useState([{
        name:"About Us"}
        ,{
            name:"Contact Us"
        },{
            name:"Jobs"
        },{
            name:"Terms"
        },{
            name:"Press"
        },{
            name:"Privacy"
        },{
            name:"Blog"
        }
    ]
    )

    const [media,setmedia]=useState([
        {
            image:"facebook.png"
        },{
            image:"google.png"
        },{
            image:"twitter.png"
        }
    ])
    return(
       <section className="max-w-full bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white px-[30px]">
        <div className="container">
            <div className="pb-[70px] ">
                <div className="h-[50px] w-[150px]">
                    <img src="/src/assets/images/logo.svg" alt="logo" className="object-contain"></img>
                </div>
                
            </div>

            <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
                <div className="flex gap-[15px]  max-w-full">
                     <img src="/src/assets/images/icon-location.svg" className="h-[18px] w-[13px] mt-[8px] object-contain" alt="logo"></img>
                     <p className="text-[13px] w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div>
                    <div className="flex gap-[15px] mb-[15px] items-center">
                        <img src="/src/assets/images/icon-phone.svg" alt="icon" className="h-[16px] w-[16px]"></img>
                        <p>01158659437</p>
               
                    </div>
                    <div className="flex gap-[15px]   items-center">
                       <img src="/src/assets/images/icon-email.svg" alt="icon" className="h-[16px] w-[17px]"></img>
                       <p>eng.rehamnasr1@gmail.com</p>
               
                    </div>
                </div>
                <div className="flex   grid grid-cols-1 md:grid-cols-2 gap-[20px] ">
                    {
                        list.map((item)=>(
                            <h4 className="transition-colors duration-[.5s]" key={item.name}>{item.name}</h4>
                        ))
                    }

                </div>
                <div className="flex h-[30px] gap-[15px] w-full justify-center md:w-auto">
                    {
                        media.map((item)=>(
                            <img key={item.image} src={`/src/assets/images/${item.image}`} className="w-[30px] h-[30px] cursor-pointer transition-all duration-[.5s] hover:scale-[1.2] object-contain" alt="logo"></img>
                        ))
                    }
                     
                </div>

            </div>


        </div>

       </section>

    )
}
export default Footer;