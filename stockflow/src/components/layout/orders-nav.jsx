export function OrdersNav() {
  return (
    <div className="font-body flex relative align-middle m-auto justify-between pl-25 pr-5 h-20 border-border border-b">
      <div className="flex flex-col align-middle justify-center">
        <p className="font-semibold m-0 p-0 text-md">Order Feed</p> 
        <p className="text-light m-0 p-0 text-sm">All orders today</p>
      </div>

      <div className="flex align-middle justify-between gap-3">
        <button className="bg-pendingfade text-sm font-semibold text-pending flex m-auto px-3.5 p-0.5 border-secondary rounded-xl">2 Pending</button>
        <button className="bg-lightgreen text-sm font-semibold text-secondary flex m-auto px-2.5 p-0.5 border-secondary rounded-xl">2 Completed</button>
      </div>
    </div>
  );
}