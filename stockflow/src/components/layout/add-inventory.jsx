import closeIcon from "../../assets/icons/close_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg";

export function AddInventory() {
  return (
    <div className="bg-secondary fixed top-0 left-0 right-0 bottom-0 z-50 flex align-middle justify-center overflow-hidden font-body">
      <div className="bg-red-400 flex flex-col m-auto p-5 rounded-xl gap-2">
        <div className="flex align-middle justify-between bg-purple-500">
          <p className="font-bold">Add Item</p>
          <span>
            <img className="cursor-pointer" src={closeIcon} alt="closeIcon" loading="lazy" />
          </span>
        </div>

        <div className="flex flex-col gap-2 bg-purple-800 p-2">
          <div className="flex gap-2">
            <div>
              <p>Ingredient</p>
              <input className="bg-yellow-400" />
            </div>
            <div>
              <p>In-stock</p>
              <input className="bg-blue-500" />
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <p>Min-Level</p>
              <input className="bg-green-400" />
            </div>
            <div>
              <input className="bg-pink-300" />
            </div>
          </div>
        </div>

        <button className="bg-amber-700 cursor-pointer">Add Item</button>
      </div>
    </div>
  );
}
