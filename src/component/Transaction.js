import React , { useEffect, useState }from 'react'

function Transaction() {



    const APIKEY = 'ckey_c996cca054b84fbc891de221b60';
    const baseURL = 'https://api.covalenthq.com/v1'
    const blockchainChainId = '1'
    const demoAddress = '0xc86B12d850FdBBF3260a7BAAE862F85857aAdBBa'
    
  
  
    const [tam, setTam] =  useState ([]);
    
    async function getWalletBalance(chainId, address) {
      const url = new URL(`${baseURL}/${chainId}/address/${address}/transactions_v2/?key=${APIKEY}`);
      const response = await fetch(url);
      const result = await response.json();
      const data = result.data;
  
      return data;
  }
  
  useEffect(() => {
    getWalletBalance(blockchainChainId, demoAddress).then(data => {
      setTam(data.items);
  
    })
  } , [])

 
             
    
    

    return (
       

        <div class="col-span-2  bg-[#12263f] container mx-auto rounded-md dark:bg-darker">
                
                  <div class="p-4 border-b dark:border-primary">
                    <h4 class="text-lg font-semibold text-gray-500 dark:text-light">Transaction</h4>
                  </div>
                  
           <div>



 {  tam.map(item => {
    return (
        <div class="p-4 border-b dark:border-primary">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-center justify-center h-10 w-10 rounded-md bg-[#1a3a5a] dark:bg-darker">
              <svg class="h-6 w-6 text-gray-400 dark:text-light" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>From :</span> {item.from_address}</p>
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>To : </span>{item.to_address}</p>
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>Value : </span>{item.value}</p>
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>Tx_Hash : </span>{item.block_signed_at}</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-10 w-10 rounded-md bg-[#1a3a5a] dark:bg-darker">
            <svg class="h-6 w-6 text-gray-400 dark:text-light" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
        </div>
      </div>
    )

    })
}
 
                  </div>


                </div>
                
                
           
                
                
               
    )
}

export default Transaction;



/*
<table class="w-screen items-center lg:w-max bg-transparent border-collapse">
        <thead className=''>
          <tr className=''>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-pink-300 border-gray-200">Project</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-pink-300 border-gray-200">Budget</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-pink-300 border-gray-200">Status</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-pink-300 border-gray-200">Users</th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-pink-300 border-gray-200">Completion </th>
          
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            
              <span class="ml-3 font-bold text-white">  </span></th>

              <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            
            <span class="ml-3 font-bold text-white"> </span></th>

            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            
            <span class="ml-3 font-bold text-white">  </span></th>
        </tr>
        </tbody>
        </table>
*/