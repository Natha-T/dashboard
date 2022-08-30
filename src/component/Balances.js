import React, { useEffect, useState } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function Balances() {



  const APIKEY = 'ckey_c996cca054b84fbc891de221b60';
  const baseURL = 'https://api.covalenthq.com/v1'
  const blockchainChainId = '1'
  const demoAddress = '0xc5EbBC325f9c5520f703c5D6Ca36361d4bEa5ab8'
  

const [tam, setTam] =  useState ([]);

  async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
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




const price = tam.slice(0,10).map(item => {
 
  return item.quote
})




const name = tam.slice(0,10).map(item => {
 
  return item.contract_name
})





















const data = {
  labels: name,
  datasets: [
    {
      label: '# of Votes',
      data: price,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};







    
    
    return (
     <div>
        <Doughnut  data={data} />
     </div> 
      
    )
}

export default Balances;
