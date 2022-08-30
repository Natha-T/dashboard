import React from 'react'

function Wallet() {
    return (
 
          <div class=" bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-96 p-6 mt-10 rounded-xl shadow-md">
                <div class="h-full flex flex-col justify-between">
                    <div class="flex items-start justify-between space-x-4">
                        <p class="break-all text-lg font-semibold tracking-tigh">
                           0x0000000000000000000000000000000000000000
                        </p>

                        <div class=" inline-flex flex-col items-center justify-center">
                            <svg class="h-8 w-8" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                                    stroke="currentColor" stroke-width="1.5"></path>
                                <path
                                    d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11 8.5L8 15.5L5 8.5" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>

                            <div
                                class="font-semibold text-white">
                                wallet
                            </div>
                        </div>
                       
                    </div>
 <p className='text-xl font-bold font-serif'>balance</p>

 </div>
</div>








  
    )
}

export default Wallet;
