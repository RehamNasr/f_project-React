import { Fragment } from "react";

const Stayproductive=({title,desc,icon})=>{
    return(
      <section className="pb-[150px] px-[20px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center text-white">
              <div>
                <img src="src/assets/images/illustration-stay-productive.png"></img>
              </div>
              <div className="pl-[20px]">
                <h3 className="font-medium text-[35px] leading-[50px]">Stay productive,<br></br> wherever you are</h3>
                <div className="my-[15px] font-normal text-sm tracking-[.8px]">
                <p className="mb-[15px]">Never let location be an issue when accessing your files. Fylo has you
                 covered for all of your file storage needs.</p>
                 
                 <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

                </div>
                <a href="/" className=" text-primary hover:text-[#42b0d1] transition-colors duration-200 gap-3 items-center border-b-2 pb-[5px] flex border-primary w-fit">See how Fylo works
                <img 

                src="/src/assets/images/icon-arrow.svg"
                alt="arrow-img"
                className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
                ></img>
                </a>
              </div>

        </div>
      </section>
   

    )
}
export default Stayproductive;