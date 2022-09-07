import Balancee from "./component/Balancee";


import Navbar from "./component/Navbar";


import Nftss from "./component/Nftss";
import Donuut from "./component/Donuut";
import Chart from "./component/Chart";
import Transaction from "./component/Transaction";
import Navmobile from "./component/Navmobile";


function App() {
  return (
    <div className="flex  antialiased  bg-[#152e4d] text-gray-100 ">
   
      <Navbar />



     
    <main className="w-screen  text-[#6bc6e2]  ">
  
            <div class="flex items-center  justify-between px-4 py-4 border-b lg:py-6  ">
              <h1 class="text-2xl font-semibold">Dashboard</h1>
              <a href="https://github.com/Natha-T/dashboard" target="_blank" class="px-4 py-2 text-sm text-white bg-[#6bc6e2] rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark">
                View on github
              </a>
            </div>
        <Navmobile/>

        <div className="mt-2  ">
            <Balancee/>

            <div className="grid grid-cols-1 border-b text-[#6bc6e2]  p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-2 ">
              <Chart/>
              <Donuut/>
              
            </div>

            <div className="grid grid-cols-2 mt-6 text-[#6bc6e2] p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-1">
             <Nftss/>
              <Transaction/>
              
        
        
              </div>
             
        </div>

 </main>

 </div>
  
  );
}

export default App;
