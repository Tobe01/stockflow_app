import cube from '../../assets/icons/proicons--cube.svg';
import grid from '../../assets/icons/proicons--grid.svg';
import settings from '../../assets/icons/proicons--settings.svg';
import documents from '../../assets/icons/proicons--document.svg';

export function Mainnav(){
  return(
    <div className='bg-dark z-50 fixed left-0 top-0 bottom-0 flex flex-col align-middle justify-between py-5 px-4'>
      <div className='flex flex-col align-middle justify-center space-y-5'>
        <button className='text-white bg-secondary font-bold text-20 rounded-md text-center justify-items-center w-9 ml-auto mr-auto py-1 cursor-pointer'>SF</button>
          <div className='flex flex-col space-y-1'>

            <button className='hover:bg-neutral-700 relative group rounded-md text-center justify-items-center py-2.5 px-2.5 cursor-pointer'>
              <img src={grid} alt='pos-icon' loading='lazy' />
              <span className='absolute -right-22 top-2 w-18 p-1 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm m-auto text-center bg-dark text-white'>POS</span>
            </button>

            <button className='hover:bg-neutral-700 group relative rounded-md text-center justify-items-center py-2.5 px-2.5 cursor-pointer'>
              <img src={cube} alt='inventory-icon' loading='lazy' />
              <span className='absolute -right-22 pointer-events-none bottom-2 bg-dark text-white opacity-0 group-hover:opacity-100 duration-200 text-sm w-18 p-1 m-auto rounded-md text-center'>Inventory</span>
            </button>

            <button className='hover:bg-neutral-700 group relative rounded-md text-center justify-items-center py-2.5 px-2.5 cursor-pointer'>
              <img src={documents} alt='orders-icon' loading='lazy' />
              <span className='absolute pointer-events-none -right-22 bottom-2 bg-dark opacity-0 group-hover:opacity-100 duration-200 text-white text-sm w-18 p-1 m-auto text-center rounded-md'>Order</span>
            </button>

          </div>
        <div className='border-b border-border w-7 m-auto'></div>
      </div>

      <div className='flex flex-col align-middle justify-center space-y-1'>

        <button className='text-center group relative justify-items-center  hover:bg-neutral-700 rounded-md py-2.5 px-2.5 cursor-pointer'>
          <img src={settings} alt='settings-icon' loading='lazy' />
          <span className='absolute pointer-events-none opacity-0 group-hover:opacity-100 duration-200 -right-22 top-2 bg-dark text-white text-sm w-18 p-1 m-auto text-center rounded-md'>Settings</span>
        </button>

        <button className='text-white group relative font-bold bg-neutral-700 rounded-md text-center justify-items-center py-2 px-2.5 cursor-pointer'>AO <span className='absolute pointer-events-none opacity-0 group-hover:opacity-100 duration-200 -right-22 bottom-1 bg-dark text-white text-sm w-18 p-1 m-auto text-center rounded-md'>Ada Obi</span></button>

      </div>
    </div>
  )
}