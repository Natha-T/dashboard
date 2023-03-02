
import { useAccount } from 'wagmi'
import React , { useEffect, useState } from'react'

function Balancee(address) {






  const { isConnected } = useAccount()

  const [tam, setTam] =  useState ([]);
  const [transaction, setTransaction] =  useState ([]);
  const [nftCount, setNftCount] = useState([]);

  const APIKEY = 'ckey_c996cca054b84fbc891de221b60';
  const baseURL = 'https://api.covalenthq.com/v1';
  const blockchainChainId = '1'
  const demoAddress = address.address
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '62d93621-9f2a-4a04-b160-75b582a975e4'
    }
  };

  async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/portfolio_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
   
 setTam(data.items);

    return data;
}


async function getTransactionBalance(chainId, address) {
  const url = new URL(`${baseURL}/${chainId}/address/${address}/transactions_v2/?key=${APIKEY}`);

  const response = await fetch(url);
  const result = await response.json();
  let data = result.data;
await  setTransaction(data.items);
  return data;
}


const totalTransaction = transaction.length
  


const price = tam.map(item => {

  return item.holdings
})

const aa =price.map(item => {
  return item.map(item => {
    return item.open.quote



  })
})


function sumFirstElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      sum += arr[i][0]; // add the first element of each inner array
    }
  }
  return sum;
}
const myArrayOfArrays =  aa;
const result = sumFirstElements(myArrayOfArrays);





async function getNft ()  {
  const url = new URL(`https://api.nftport.xyz/v0/accounts/${demoAddress}?chain=ethereum&page_size=50&include=metadata`);
     const response = await fetch(url, options);
     const result = await response.json();
     setNftCount(result);
     return result;  
  }

const totalNft = nftCount.total




useEffect(() => {
  const checkUser = () => (isConnected ? getWalletBalance(blockchainChainId, demoAddress): null);
  getTransactionBalance(blockchainChainId, demoAddress);
  getNft();
  isConnected && checkUser();
}, [isConnected]); 



    return (
        <div class="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">

        <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
             Portfolio Value
            </h6>
            <span class="text-xl font-semibold">${result}</span>
           
          </div>
          <div>
            <span>
              <svg class="w-12 h-12 text-blue-200 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
          </div>
        </div>

       
        <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Total NFTs
            </h6>
            <span class="text-xl font-semibold">{totalNft}</span>
            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
             
            </span>
          </div>
          <div>
            <span>
              <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </span>
          </div>
        </div>

       
        <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Total Transaction
            </h6>
            <span class="text-xl font-semibold">{totalTransaction}</span>
            
          </div>
          <div>
            <span>
              <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </span>
          </div>
        </div>


        <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              24h Change
            </h6>
            <span class="text-xl font-semibold">Coming soon...</span>
            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
             %
            </span>
          </div>
          <div>
            <span>
              <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    )
}

export default Balancee;
