import React from 'react'
import { useMoralis } from "react-moralis";
function Navmobile() {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    const userEthAddress = user && user.get("ethAddress");
  
    // handle authentication
    const handleAuthentication = (e) => {
      e.preventDefault();
      authenticate({signingMessage: "NFT Mint by SNPXX using MORALIS" });
    };
  
  
  
      // Handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };


    return (
       <div className="lg:hidden">
            { isAuthenticated ? 
 
 <div className=' items-center'>
       <button class=" px-2 py-2 rounded-md text-sm font-medium leading-5 w-full  bg-red-500 text-gray-900  dark:hover:bg-red-800 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150"
        onClick={handleLogout}>
         Log Out
         </button>
 
 
       <p className='text-white serif p-2  break-words '>Logged in as : {userEthAddress}</p>
 
 </div>
       /*--------------------------------- */
 
       : <div className=' item-center'> <button class=" font-bold w-full p-12 py-4 rounded-md text-sm font-medium leading-5  bg-blue-500 text-gray-900  dark:hover:bg-blue-800 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150"
        onClick={handleAuthentication}>
         Login
         </button> </div>}
   </div>
    )
}

export default Navmobile
