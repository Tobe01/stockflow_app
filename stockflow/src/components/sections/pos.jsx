import bag from '../../assets/icons/proicons--cart.svg';

export function Pos(){
  return(
    <div className="bg-red-500 fixed right-0 z-50 bottom-0 top-20 min-w-96 px-2">

     <div className="bg-green-400 flex align-middle justify-between px-3">

      <div className='flex gap-1'>
       <span><img src={bag} alt='bagIcon' loading='lazy' /></span>
       <p>Current Order</p>
      </div>

      <div className='bg-secondary rounded-full px-1.5 text-white font-semibold'>18</div>

     </div>

     <div className="bg-purple-300 h-2/3 overflow-y-auto flex flex-col gap-2">

      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      {/* <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div> */}
      {/* <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="flex bg-amber-300 align-middle justify-between">
        <div className="flex">
         <img />
         <div className="bg-pink-400">
          <p>White Rice & Stew</p>
          <p>#2,200.00 each</p>
         </div>
        </div>

        <div className="flex bg-green-500 align-middle justify-center text-center m-0 p-0">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div> */}

     </div>

     <div className="bg-amber-950 flex flex-col">

      <div className="bg-indigo-300">
        <div className="flex align-middle justify-between">
          <p>Subtotal</p>
          <p>#24,500.00</p>
        </div>
        <div className="flex align-middle justify-between">
          <p>VAT (7.5%)</p>
          <p>#1,837.50</p>
        </div>
      </div>

      <div className="bg-blue-900 flex align-middle justify-between">
        <p>Total</p>
        <p>#26,337.50</p>
      </div>

      <div className="flex flex-col">
        <button className="bg-pink-300"><span>+</span> Send Order</button>
        <button className="bg-pink-500">Clear Order</button>
      </div>

     </div>

    </div>
  )
}