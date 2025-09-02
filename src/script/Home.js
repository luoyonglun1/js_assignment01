import { productData } from '../product/cardData.js';

const container = document.getElementById("container");

 const filteredProducts = productData.filter(p => p.category === 'Woman');
function RenderCard(){
    let card = ``;
    filteredProducts.map( c => {
        card += `
         <div  class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit ">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-[20rem] max-sm:m-0.5 max-sm:h-[10.5rem] sm:h-[15rem] md:h-[15rem] lg:h-[15rem] xl:h-[15rem]">
                <img
                    src="${c.img}"
                    alt="${c.category}" class="object-cover w-full h-full" />
                    
            </div>
            <div class="max-sm:p-2 sm:p-3 xl:p-6 ">
                <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                       ${c.product}
                    </p>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        ${c.price}
                    </p>
                </div>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                     ${c.text}
                </p>
            </div>
            <div class="p-6 pt-0">
                <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button">
                    Add to Cart
                </button>
            </div>
            </div>

        `
    });
    container.innerHTML = card ;
}
RenderCard();