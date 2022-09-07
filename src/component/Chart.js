import React , { useEffect, useState } from'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend);

function Chart() {




  const APIKEY = 'ckey_c996cca054b84fbc891de221b60';
  const baseURL = 'https://api.covalenthq.com/v1'
  const blockchainChainId = '1'
  const demoAddress = '0xc86B12d850FdBBF3260a7BAAE862F85857aAdBBa'
  


  const [tam, setTam] =  useState ([]);
  
  async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/portfolio_v2/?key=${APIKEY}`);
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





const price = tam.map(item => {

  return item.holdings
})

const aa =price.map(item => {
  return item.map(item => {
    return item.open.quote



  })
})



var array = aa,
    result= array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);



    const labels = [30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];

    const data = {
      labels,
      datasets:  [
        {
          fill: true,
          label: 'Perfomance last 30 days',
          data: result.reverse(),
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 1)',
          tension: 0.4,
          borderWidth: 2,
          fill: 'start',
      
          pointRadius: 0,
          pointHoverRadius: 0
        },
      ],
    };
   
   const options = {
        width : 100,
        height : 100,
        plugins: {
            legend: {
                display: false,
    
            }
        },
        scales: {
            yAxes: {
                ticks: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                grid: {
                    display: true,
                    drawBorder: true,
                },
            },
    
            xAxes: {
                ticks: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                grid: {
                    circular: true,
                    borderColor: 'rgba(255, 255, 255, .2)',
                    color: 'rgba(255, 255, 255, .2)',
                    borderDash: [5, 5]
                },
            },
        },
        layout: {
          padding: {
            right: 10,
        },
        },
    };





    return (
        <div class="col-span-1 bg-[#12263f] rounded-md h-min ">
   
        <div class="flex items-center justify-between p-4 border-b border-[#22d3ee] :border-fontA">
          <h4 class="text-lg font-semibold  text-fontA">Performance </h4>
       
        </div>
    
        <div class="relative p-4 h-full"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand">
            
                  <Line
          
                 options={options }
            data={data} />
            <div class="shadow-lg  rounded-lg p-4 mb-8 xl:mb-0 ">
              
            </div></div><div class="chartjs-size-monitor-shrink"><div class="">
             
              </div></div></div>
        
     
        </div>
      </div>
    )
}

export default Chart;
 