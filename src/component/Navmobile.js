import React from 'react'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
function Navmobile() {
 

  const { address, isConnected } = useAccount()
const { connect } = useConnect({
  connector: new InjectedConnector(),
})
const { disconnect } = useDisconnect()

    return (
       <div className="lg:hidden">
      
    
 
 <div className=' items-center'>
    { isConnected ? 
    <div>
       <button class=" px-2 py-2 rounded-md text-sm font-medium leading-5 w-full  bg-red-500 text-gray-900  dark:hover:bg-red-800 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150"
       onClick={() => disconnect()}
      >
         Log Out
         </button>
 
       
       <p className='text-white serif p-2  break-words '>Logged in as : {address}</p>
       </div>
      :
      <div className='text-white'>
      <button 
      onClick={() => connect()}
       class=" px-2 py-2 rounded-md text-sm font-medium leading-5 w-full  bg-blue-500 text-gray-900  dark:hover:bg-blue-800 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150">
         Login (ETH ONLY)</button>
         You have to connect your wallet to see data : ONLY ETH MAINNET 
       </div> 
    }
 
    
 </div>
 
       
</div>
    )
}

export default Navmobile
