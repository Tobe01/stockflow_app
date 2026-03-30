import { Mainnav } from '../components/layout/mainnav';
import { PosNav } from '../components/layout/posnav';
import { Pos } from '../components/sections/pos';
import { MenuOptions } from '../components/layout/menuoptions';

export function PosPage(){
  return(
    <div>
      <Mainnav/>
      <PosNav/>
      <Pos/>
      <MenuOptions/>
      <div className='bg-red-500 w-[71.9%]'>
        <div className='bg-green-500 fixed'>
          Hello
        </div>
      </div>
    </div>
  )
}