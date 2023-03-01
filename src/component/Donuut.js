import React, { useEffect, useState } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useAccount,} from 'wagmi'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
function Donuut(address) {

  const { isConnected } = useAccount()


    const APIKEY = 'ckey_c996cca054b84fbc891de221b60';
    const baseURL = 'https://api.covalenthq.com/v1'
    const blockchainChainId = '1'
    const demoAddress = address.address
    
  
  const [tam, setTam] =  useState ([]);
  
    async function getWalletBalance(chainId, address) {
      const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
      const response = await fetch(url);
      const result = await response.json();
      const data = result.data;
    setTam(data.items);
      return data;
  }
  
  




  useEffect(() => {
      const checkUser = () => (isConnected ? getWalletBalance(blockchainChainId, demoAddress): "ddd");
      isConnected  && checkUser();
    }, [isConnected ]); 
  
  
  
  let price = tam.slice(0,5).map(item => {
   
    return item.quote
  })
  
  
  
  
  let name = tam.slice(0,5).map(item => {
   
    return item.contract_name
  })
  
  
  
  
  
  
  
  const data = {
    labels: name,
    datasets: [
      {
        label: '# of Votes',
        data: price,
        backgroundColor: [
          '#0e7490','#06b6d4', '#22d3ee'
        ],
        borderColor: [
          '#0e7490'
          
        ],
        borderWidth: 1,
        
      },
    ],
  };
  
  
 const  options=  {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },

    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    }   












    return (
        <div class="rounded-md w-full border-[#ecfeff]  bg-[#12263f]">
  
        <div class="flex items-center justify-between p-4 border-b  dark:border-primary">
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">Portfolio </h4>
          <div class="flex items-center">
         
          </div>
        </div>

        <div class="relative p-4 h-full"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class="">
            
                 
            </div></div><div class="chartjs-size-monitor-shrink">
               
                <div class="">
              <Doughnut 
                 data={data} 
                  width="684" height="256" class="chartjs-render-monitor"
                options={options}
            />
              
                
                </div></div></div>
         

    


        </div>
      </div>
    )
}

export default Donuut
