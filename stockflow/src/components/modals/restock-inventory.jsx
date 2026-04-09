import closeIcon from "../../assets/icons/close_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg";

export function Restock({setRestock, ingredient}){

  function closeRestockModal(){
    setRestock(false);
  }

  return(
    <div>
      <div className="modal-backdrop fixed top-0 left-0 right-0 bottom-0 flex align-middle justify-center overflow-hidden font-body">
            <div className="bg-white flex flex-col m-auto p-5 rounded-lg gap-2">
              <div className="flex align-middle justify-between">
                <p className="font-bold text-2xl">{`Restock ${ingredient}`}</p>
                <span onClick={closeRestockModal} className="align-middle justify-center flex">
                  <img className="w-9 bg-input scale-100 hover:scale-102 transition-transform duration-100 active:scale-95 flex m-auto px-1 p-0.5 rounded-sm border border-border cursor-pointer" src={closeIcon} alt="closeIcon" loading="lazy" />
                </span>
              </div>
      
              <div className="flex flex-col gap-4 py-2 w-120">
                <div className="flex gap-3">
                  <div className="w-[50%]">
                    <p className="font-bold mb-1 text-light">Stock Value (kg)</p>
                    <input placeholder="Update stock (kg)" className="focus:outline-secondary rounded-sm focus:outline-1 py-1 px-2 border border-border placeholder:text-sm w-full" />
                  </div>
                  <button className="w-[50%] py-0.5 mt-auto bg-secondary hover:bg-darkgreen scale-100 hover:scale-102 transition-transform duration-100 active:scale-95 cursor-pointer text-[20px] text-white rounded-sm font-bold">Restock</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}