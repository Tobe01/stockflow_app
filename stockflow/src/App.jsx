import { Mainnav } from './components/layout/mainnav';
import { PosNav } from './components/layout/posnav';
// import { Inventory } from './components/layout/inventorynav';
// import { Orders } from './components/layout/ordersnav';
import { Pos } from './components/sections/pos';

function App() {
  return (
    <>
     <Pos/>
     <Mainnav />
     <PosNav />
     {/* <Inventory/> */}
     {/* <Orders/> */}
     
    </>
  )
}

export default App
