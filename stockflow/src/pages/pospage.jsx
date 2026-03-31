import { MainNav } from '../components/layout/main-nav';
import { PosNav } from '../components/layout/pos-nav';
import { Pos } from '../components/sections/pos-section';
import { MenuOptions } from '../components/layout/menu-options';
import { menu } from '../data/pos-data';

export function PosPage(){

  const menuItems = menu;
 
  return(
    <div>
      <MainNav/>
      <PosNav/>
      <Pos/>
      <MenuOptions/>
      <div className='font-body ml-18 pl-5 pt-36 overflow-hidden pr-10 py-1.75 w-[66.6%] h-fit'>
        <div className='w-full grid w-purple-400 grid-cols-4 align-middle justify-between gap-x-7 gap-y-2'>

          {menuItems.map((items)=>{
            return(
              <div key={items.itemId} category={items.itemCategory} className='bg-input hover:border-secondary scale-100 active:scale-95 cursor-pointer flex flex-col p-3 w-card transition-transform duration-100 hover:-translate-y-0.5 gap-1 border border-border rounded-lg'>
                <div className='flex justify-between text-xs'>
                  <img className='rounded-full' width={50} src={items.image} />
                  <div className='bg-secondary text-white h-fit rounded-full px-axis text-13'>2</div>
                </div>
                <div className='text-sm font-semibold'>{items.itemName}</div>
                <div className='text-secondary font-money font-semibold text-sm'>
                  {`₦${(items.priceCents / 100).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}