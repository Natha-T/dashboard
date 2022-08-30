import Balances from "./component/Balances";
import Navbar from "./component/Navbar";
import Performer from "./component/Performer";
import Value from "./component/Value";
import Wallet from "./component/Wallet";


function App() {
  return (
    <div className="App ">
   
      <Navbar />

<div className="grid  w-screen mt-6 mx-auto container lg:flex lg:justify-between lg:">
      <Wallet/>
      <Performer/>
   
      <Balances/>
 </div>

     <div className="grid w-screen mx-auto container ">
     <Value/>
     </div>
 
    </div>
  );
}

export default App;
/* < c">*/