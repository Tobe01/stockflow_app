import addIcon from '../../assets/icons/add_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg';

export function InventoryNav() {
  return (
    <div className="font-body flex relative align-middle m-auto justify-between pl-25 pr-5 h-20 border-border border-b">
      <div className="flex flex-col align-middle justify-center">
        <p className="font-semibold m-0 p-0 text-md">Inventory</p>
        <p className="text-light m-0 p-0 text-sm">Real-time stock overview</p>
      </div>

      <div className="flex align-middle justify-between gap-4">
        <button className="bg-lightgreen text-sm font-semibold text-secondary flex m-auto px-2.5 p-0.5 border-secondary rounded-xl">Updated just now</button>
        <button className="bg-input flex m-auto px-1 p-0.5 rounded-sm border border-light cursor-pointer"><img src={addIcon} alt="addIcon" loading="lazy" /></button>
      </div>
    </div>
  );
}
