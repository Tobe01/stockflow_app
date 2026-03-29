export function MenuOptions(){
  return(
    <div className="w-[71.9%] font-body flex align-middle justify-start pl-25 py-1.75 border border-border border-x-0 border-t-0">
      <div className="flex gap-2">
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 cursor-pointer hover:border-secondary hover:text-secondary p-2 px-4 text-light border border-border rounded-lg">All</button>
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 cursor-pointer hover:border-secondary hover:text-secondary p-2 px-4 border text-light  border-border rounded-lg">Mains</button>
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 p-2 cursor-pointer hover:border-secondary hover:text-secondary px-4 border text-light  border-border rounded-lg">Swallows</button>
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 p-2 cursor-pointer hover:border-secondary hover:text-secondary px-4 border text-light  border-border rounded-lg">Sides</button>
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 p-2 cursor-pointer hover:border-secondary hover:text-secondary px-4 border text-light  border-border rounded-lg">Proteins</button>
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 p-2 cursor-pointer hover:border-secondary hover:text-secondary px-4 border text-light  border-border rounded-lg">Drinks</button>
        <button className="bg-white scale-100 transition-transform duration-100 active:scale-105 p-2 cursor-pointer hover:border-secondary hover:text-secondary px-4 border text-light  border-border rounded-lg">Dessert</button>
      </div>
    </div>
  )
}