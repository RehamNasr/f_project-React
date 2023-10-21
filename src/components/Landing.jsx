import { Fragment } from "react";

const Landing=()=>{
    return(
        <section className="bg-[#1c2230]">
            <div className="container  text-white ">
                <div className="element-center flex-col pt-[200px]">
                <div className="w-[750px] max-w-full">
                    <img 
                    src="/src/assets/images/landing-img.png" 
                    alt="landing"
                    className="w-full h-fit"
                    ></img>
              </div>
               <h1 className="my-[20px] md:text-[40px] font-semibold text-center">All your fils in one secure location,<br/>assessible anywhere</h1>
               <p className="font-normal text-lg px-[15px]  md:w-[600px] max-w-full md:mx-auto text-center">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <a className="btn px-[80px] py-[13px] rounded-[30px] my-[30px]">Get Started</a>
                </div>   
        
              </div>
          <div className="w-full h-[200px]">
            <img 
            src="src/assets/images/bg-curvy-desktop.svg"
            className="w-full h-full"
            >
              </img>
          </div>
        </section>
   

    )
}
export default Landing;