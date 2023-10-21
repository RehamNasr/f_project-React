const TestBox=({title,image,name,text})=>{
    return(
          <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] pt-[55px] shadow-[8px_8px_1px_8px_#1c202c] "  >
            <p className="text-sm font-normal tracking-[.8px] mb-[20px]">{title}</p>
            <div className="flex ">
                <img src={`/src/assets/images/${image}`} className="w-[50px] h-[50px] rounded-[50%]"></img>
                
                <div className="px-[15px]">
                    <strong>{name}</strong>
                    <p className="text-[10px]">{text}</p>
                </div>
            </div>
          </div>
    )
}
export default TestBox;