import search from '../../assets/icons/proicons--search.svg';

export function PosNav(){
  return(
    <div className='flex align-middle m-auto justify-between pl-20 pr-3 h-20 border-border border-b'>

      <div className='flex flex-col align-middle justify-center'>
        <p className='font-semibold text-xl'>Point of Sale</p>
        <p className='text-border text-md'>Table service & takeaway</p>
      </div>

      <div className='flex align-middle justify-between min-w-xl'>

        <div className='border-be-gray-900 border border-border rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md flex m-auto align-middle justify-center gap-2 p-1 px-2'>
          <button><img src={search} alt='search-icon' loading='lazy' /></button>
          <input className='m-auto align-middle justify-center pl-1 text-md' placeholder='Search menu...' />
        </div>

        <div className='flex align-middle justify-center m-auto gap-1'>
         <div className='border flex m-auto align-middle justify-center px-2.5 border-border rounded-md'>26th May</div>
         <div className='border flex m-auto align-middle justify-center px-2.5 border-border rounded-md'>08:35:05 PM</div>
        </div>

        <button className='border flex m-auto align-middle justify-center px-2.5 border-border rounded-md cursor-pointer'>Online</button>

      </div>

    </div>
  )
}