import React , { useEffect, useState }from 'react' 

import nonft from '../img/nullimg.png'

import { useAccount, } from 'wagmi'


function Nftss() {
  const address = '0x7a3010b00D9866C80cadaFECA573490e432BA3AC'

  const { isConnected } = useAccount()

  const demoAddress = address

 const [tam, setTam] =  useState ([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '62d93621-9f2a-4a04-b160-75b582a975e4'
    }
  };


 async function getNft ()  {
 const url = new URL(`https://api.nftport.xyz/v0/accounts/${demoAddress}?chain=ethereum&page_size=50&include=metadata`);
    const response = await fetch(url, options);
    const result = await response.json();
    setTam(result.nfts);
    return result;  
 }


  useEffect(() => {
      const checkUser = () => (isConnected ? getNft()  : null);
      isConnected && checkUser();
    }, [isConnected]); 
 

console.log(tam);
    return (  
      <div class=" ">
        <div class=" p-4 w-full border-b dark:border-primary">
          <h4 class="text-4xl font-semibold text-blue-800">Nfts</h4>
          
        </div>
 
        <img className='' src=''/>
      

      <div className="grid lg:grid-cols-3 space-y-10  w-screen rounded-2xl p-8 shadow-2xl">
       
        {tam.map(item => {
          
return(
  
<div class="border-2 box-content p-5 mx-5 rounded-xl max-w-xs shadow-2xl">
        <a href="#" class="group block relative rounded-md overflow-hidden">
          
       
            
          {item.cached_file_url !=null && <img src={item.cached_file_url } alt="equilibrium" /> }
          {item.cached_file_url ==null &&<div> <img src={nonft } alt="equilibrium" /> <p className='text-center'> no data</p> </div> }
        </a>

        <h1>
          <a href="#" class="block text-white my-4 font-semibold text-lg hover:text-cyan"
            >{item.name}</a>
        </h1>

        <p class="text-soft-blue truncate font-light">
        {item.description}
        </p>

       

        <hr class="border-dark-blue-line mt-6" />

        <div class="flex items-center space-x-2 mt-4">
          <img src="/images/image-avatar.png" alt="avatar" class="w-8 h-8" />
          <p class="text-white">
        
            <p href="#" class="text-center break-all hover:text-cyan"> Creation of : {item.creator_address}</p>
          </p>
        </div>
      </div>
) 
})}
  





        </div>
      </div>
    
    )
}

export default Nftss;
