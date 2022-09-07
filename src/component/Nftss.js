import React , { useEffect, useState }from 'react' 


function Nftss() {


  const [tam, setTam] =  useState ([]);


const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'test'}};

  async function getGithubData()
  {
    let data = await fetch('https://deep-index.moralis.io/api/v2/0xc5EbBC325f9c5520f703c5D6Ca36361d4bEa5ab8/nft?chain=eth&format=decimal', options);
    let main = await data.json();
    
    setTam(main.result);
  }

  useEffect(() => {
    getGithubData();
  }, []);



    return (
        <div class="col-span-2 text-blue-800 bg-[#12263f] rounded-md " >
 
        <div class="flex items-center justify-between p-4 border-b dark:border-primary">
          <h4 class="text-lg font-semibold text-blue-800">Nfts</h4>
          
        </div>
 
        <div class="relative space-y-8 lg:space-x-4 p-4 h-78 ">
      

  {tam.map( item =>{
    return (
      

<div class="
   
  inline-grid  pb-4 bg-gradient-to-tr from-blue-300 to-gray-600 text-white overflow-hidden rounded-2xl shadow
    hover:shadow-md
    transition
  ">
    <figure class="max-h-64 aspect-square overflow-hidden">
      <img 
           class="w-full h-full object-cover transition group-hover:scale-125"
           src=""
       />
    </figure>
    <div class="p-4">
      <h3 class="text-xl font-bold"> {item.name}  </h3>
      <p class="font-serif"></p>
    </div>
    <footer class="flex gap-2 px-4">
      <button class="text-blue-400 hover:text-red-400">
        <i class="fa-solid fa-heart"></i>
      </button>
      <button class="text-blue-400 hover:text-red-400">
        <i class="fa-solid fa-comment"></i>
      </button>
    </footer>
  </div>




    )
  })}         

       




        </div>
      </div>
    
    )
}

export default Nftss;


