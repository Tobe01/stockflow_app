import { MainNav } from '../components/layout/main-nav';
import { InventoryNav } from '../components/layout/inventory-nav';

export function InventoryPage(){
  return(
    <div>
      <MainNav/>
      <InventoryNav/>

      <div className='font-body gap-3 bg-input h- flex flex-col pl-25 pr-5 py-6'>
        <div className='flex align-middle m-auto justify-center gap-2 w-full'>
          <div className='p-3.5 w-80 rounded-lg bg-white border border-border'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>Total Items</p>
              <p className='text-3xl font-bold font-money'>12</p>
              <p className='text-light text-sm'>ingredients tracked</p>
            </div>
          </div>
          <div className='border bg-white border-border p-3.5 w-80 rounded-lg'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>Critical Stock</p>
              <p className='text-3xl font-bold font-money text-secondaryred'>3</p>
              <p className='text-light text-sm'>below minimum level</p>
            </div>
          </div>
          <div className='border bg-white border-border p-3.5 w-80 rounded-lg'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>Low Stock</p>
              <p className='text-3xl font-bold font-money text-pending'>3</p>
              <p className='text-light text-sm'>needs attention</p>
            </div>
          </div>
          <div className='border bg-white border-border p-3.5 w-80 rounded-lg'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>OK Items</p>
              <p className='text-3xl font-bold font-money text-secondary'>6</p>
              <p className='text-light text-sm'>well stocked</p>
            </div>
          </div>
        </div>

        <div className='bg-green-400'>

         <div className='bg-yellow-300 flex align-middle space-x-55 justify-items-start'>
          <div>Ingredient</div>
          <div>In Stock</div>
          <div>Min. Level</div>
          <div>Stock Level</div>
          <div></div>
         </div>
          
          <div className='bg-purple-300'>
            <div className='flex align-middle justify-items-start space-x-45'>

              <div className='flex text-center bg-pink-300'>
                <img src='' alt='itemImage' loading='lazy' />
                <p>Parboiled Rice</p>
                <button>OK</button>
              </div>

              <div className='bg-pink-400'><p>85 kg</p></div>

              <div className='bg-pink-500'><p>20 kg</p></div>

              <div className='bg-pink-600 flex align-middle justify-center'>
                <div className='flex flex-col'>
                  <progress value="70" max="100"></progress>
                  <p>85%</p>
                </div>
                <button>+ Restock</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}