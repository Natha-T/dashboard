import React , { useEffect, useState }from 'react'
import { useAccount,  } from 'wagmi'

function Transaction(address) {

const { isConnected } = useAccount()

    const APIKEY = 'ckey_c996cca054b84fbc891de221b60';
    const baseURL = 'https://api.covalenthq.com/v1'
    const blockchainChainId = '1'
    const demoAddress = address.address

    const [tam, setTam] =  useState ([]);
   
    async function getWalletBalance(chainId, address) {
      const url = new URL(`https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_metadata/?quote-currency=USD&format=JSON`, {APIKEY});
    
      const response = await fetch(url);
      const result = await response.json();
      let data = result.data;
    await  setTam(data.items);
      return data;
  }
console.log(tam);





useEffect(() => {
    const checkUser = () => (isConnected ? getWalletBalance(blockchainChainId, demoAddress): null);
   
    isConnected && checkUser();
  }, [isConnected]); 


    return (
       

        <div class="col-span-2  bg-[#12263f] container mx-auto rounded-md dark:bg-darker">
                
                  <div class="p-4 border-b dark:border-primary">
                    <h4 class="text-lg font-semibold text-gray-500 dark:text-light">Transaction</h4>
                  </div>
                  
           <div>

{tam.map(item => {


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
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>From : {item.from_address}</span> </p>
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>To :  {item.to_address} </span></p>
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>Value :  {item.value} </span></p>
              <p class="text-sm font-medium text-gray-500 dark:text-light"><span className='font-bold text-blue-500'>Tx_Hash :  {item.tx_hash} </span></p>
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
  })}
    


 
                  </div>


                </div>
                
                
           
                
                
               
    )
}

export default Transaction;

