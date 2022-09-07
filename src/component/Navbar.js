import React from 'react';
import { useMoralis } from "react-moralis";

function Navbar() {


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
		<aside class="flex-shrink-0 hidden h-max w-64 border-[#ecfeff] bg-[#12263f] border-r dark:border-primary-darker dark:bg-darker md:block">
		<div class="flex flex-col h-screen ">

		  <nav aria-label="Main" class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">

			<a href="#" class="flex items-center bg-[#e2ecf7] px-2 py-2 rounded-md text-sm font-medium leading-5 text-gray-900  dark:hover:bg-gray-700 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150">
			<span aria-hidden="true">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span class="ml-2 text-gray-800 text-sm"> Dashboards </span>
				  <span class="ml-auto" aria-hidden="true">
              
                    <svg
                      class="w-4 h-4 transition-transform transform"
                      
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
					</span>	
					
			</a>
			   


      { isAuthenticated ? 
 
<div>
      <button class="flex items-center px-2 py-2 rounded-md text-sm font-medium leading-5 w-full  bg-red-500 text-gray-900  dark:hover:bg-red-800 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150"
       onClick={handleLogout}>
        Log Out
        </button>


      <p className='text-white serif p-2  break-words '>Logged in as : {userEthAddress}</p>

</div>
      /*--------------------------------- */

      : <button class="flex font-bold items-center px-2 py-2 rounded-md text-sm font-medium leading-5 w-full  bg-blue-500 text-gray-900  dark:hover:bg-blue-800 dark-hover:bg-gray-700 dark-hover:text-white transition ease-in-out duration-150"
       onClick={handleAuthentication}>
        Login
        </button>  }
  

		
			
			</nav>


			<div class="flex-shrink-0 px-2 py-4  space-y-2">
              <button
             
                type="button"
                class="flex items-center justify-center w-full px-4 py-2 bg-blue-800 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
              >
                <span aria-hidden="true">
                  <svg
                    class="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>
                <span>Customize</span>
              </button>
            </div>













			</div>
			</aside>
    )
}

export default Navbar;
