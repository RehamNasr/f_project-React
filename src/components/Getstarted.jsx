
const Getstarted=()=>{

    return(
        <section  >
           <div className="container relative">
           <div className="  bg-[#1c2230] text-[white] absolute left-[50%] translate-x-[-50%] top-[-150px] p-[30px]  rounded-[5px] shadow-[5px_5px_1px_8px_#1c202c] element-center flex-col w-[965px] max-w-full min-h-[275px] text-center">
                  <p className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get early access today</p>
                  <p className="w-[620px] max-w-full mx-auto mb-[30px]">minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                  <div className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px] ">
                    <input type="email" placeholder="johnappleseed#mail.com" className="w-full md:flex-1 py-[10px] pl-[28px] rounded-[30px] outline-none text-black text-sm font-medium"></input>
                    <a href="" className="w-full md:w-[200px] btn px-[25px] py-[10px] rounded-[30px]">Get Started For Free</a>
                  </div>
                  <p></p>
             </div>
           </div>
        </section>
   

    )
}
export default Getstarted;