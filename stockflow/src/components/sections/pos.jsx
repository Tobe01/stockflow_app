import bag from "../../assets/icons/proicons--cart.svg";
import egusi from "../../assets/food/egusi.webp";
import check from "../../assets/icons/check_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

export function Pos() {
  return (
    <div className="font-body fixed right-0 z-50 bottom-0 top-20 min-w-96">
      <div className="py-4 border-t-0 border border-border flex align-middle justify-between pl-3 pr-4">
        <div className="flex gap-1">
          <span>
            <img src={bag} alt="bagIcon" loading="lazy" />
          </span>
          <p>Current Order</p>
        </div>

        <div className="bg-secondary rounded-full px-1.5 text-sm text-white font-semibold">
          <p className="pt-0.5">18</p>
        </div>
      </div>

      <div className="h-pos border-x border-border py-2 px-3 group overflow-y-auto flex flex-col gap-2">
        <div className="flex bg-input border group-active:translate-x-1 border-border rounded-md p-2 align-middle justify-between">
          <div className="flex gap-2">
            <img
              className="rounded-full"
              src={egusi}
              alt="food-image"
              loading="lazy"
              width={55}
            />
            <div className="text-sm flex flex-col align-middle justify-center">
              <p className="font-semibold">White Rice & Stew</p>
              <p className="text-xs font-money text-light">₦2,200.00 each</p>
            </div>
          </div>

          <div className="flex gap-1 align-middle justify-center group-active:translate-x-1 text-center m-0 p-0">
            <button className="cursor-pointer px-2 font-semi-bold bg-white text-light border active:bg-secondary active:text-white border-border flex m-auto rounded">
              -
            </button>
            <div className="align-middle justify-center w-6.5 flex m-auto font-money font-semibold text-sm">
              1
            </div>
            <button className="cursor-pointer px-2 font-semi-bold bg-white text-light active:text-white active:bg-secondary rounded border border-border flex m-auto">
              +
            </button>
          </div>
        </div>

       {/* Empty Items state */}
        <div className=" hidden text-light text-sm flex-col m-auto text-center align-middle justify-center">
          <img className="ml-auto mr-auto" src={bag} width={50} alt="emtyItemsIcon" loading="lazy" />
          <p>Tap items to add</p>
        </div>

      </div>

      <div className="border border-border h-full flex px-3 flex-col">
        <div className="text-light text-sm py-3 border-b border-border">
          <div className="flex align-middle justify-between">
            <p>Subtotal</p>
            <p className="font-money">₦24,500.00</p>
          </div>
          <div className="flex align-middle justify-between mt-1">
            <p>VAT (7.5%)</p>
            <p className="font-money">₦1,837.50</p>
          </div>
        </div>

        <div className="font-semibold py-2 flex align-middle justify-between">
          <p>Total</p>
          <p className="font-money">₦26,337.50</p>
        </div>

        <div className="flex flex-col gap-2 text-md font-semibold">
          <button className="bg-secondary hover:bg-darkgreen scale-100 hover:scale-102 transition-transform duration-100 active:scale-95 cursor-pointer flex text-center align-middle justify-center gap-2 rounded-md p-3 text-white">
            <span>
              <img className="mt-0.5" width={20} src={check} />
            </span>{" "}
            Send Order
          </button>
          <button className="rounded-md scale-100 active:-translate-y-1 hover:bg-lightred hover:border-secondaryred hover:text-secondaryred cursor-pointer p-3 text-light bg-white border border-border">
            Clear Order
          </button>
        </div>
      </div>
    </div>
  );
}
