import { useEffect, useState } from "react";

const Header=()=>{
    const [links,setlinks]=useState(["Features","Team","Sign In"])
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>=100){
            document.getElementById("header").style.backgroundColor="#0c1524"
            document.getElementById("header").style.padding="20px 0px"
        }else{
            document.getElementById("header").style.backgroundColor="transparent"
            document.getElementById("header").style.padding="80px 20px"


        }
      })
    },[])
  return(
    // className="flex justify-between items-center px-[100px] py-[50px]"
     <header className="py-[80px] fixed top-0 left-0 w-full z-50 transition-all duration-200" id="header">
       <div className="container   flex justify-between items-center gap-[30px] px-[30px] sm:gap-0 flex-col sm:flex-row">
       <a href="/">
        <img src="/src/assets/images/logo.svg" alt="logo" className="w-30"></img>
        </a>
        <ul className="flex items-center gap-[80px]">
            {
                links.map((item,index)=>(
                    <li key={item} className="inline-block"><a href={`/${item.toLowerCase()}`} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline hover:scale-[1.02] hover:text-primary transition-opacity duration-200 inline-block ">{item}</a></li>
                ))
            }
            
        </ul>
       </div>
    </header>
  )
}

export default Header;