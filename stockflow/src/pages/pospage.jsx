import { Mainnav } from '../components/layout/mainnav';
import { PosNav } from '../components/layout/posnav';
import { Pos } from '../components/sections/pos';

export function PosPage(){
  return(
    <div>
      <Mainnav/>
      <PosNav/>
      <Pos/>
      {/* <div className='bg-red-500 w-[71.9%] overflow-hidden'>
        <div className='bg-green-500 fixed'>
          Hello
        </div>
      </div> */}
    </div>
  )
}