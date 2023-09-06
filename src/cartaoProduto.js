import { adicionarCarrinho } from "./carrinho";
import { catalogo } from "./catalogo";

export function RenderizarCatalogo(){
    for (const produtoCatalogo of catalogo){
            const cartaoProduto = 
            `<div class="border-solid border-2 shadow-xl shadow-slate-400 w-48 m-5 flex flex-col p-2 justify-between group" id="card-produto-${produtoCatalogo.id}">
                <img src="./assets/img/${produtoCatalogo.imagem}" alt="product-1" style="height: 300px" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
                <p class="text-sm">${produtoCatalogo.marca}</p>
                <p class="text-sm">${produtoCatalogo.nome}</p>
                <p class="text-sm">$${produtoCatalogo.preco}</p>
                <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700 duration-300"><i class="fa-solid fa-cart-plus"></i></button>
            </div>`;

            document.getElementById("container-produto").innerHTML += cartaoProduto
            
        }

    for(const produtoCatalogo of catalogo){
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click",() => adicionarCarrinho(produtoCatalogo.id))
    }
}



/*<article class="flex bg-slate-100 rounded-lg relative">
        <button id="btnFecharCarrinho" class=" absolute top-0 right-2 ">
          <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900 "></i>
        </button>
        <img src="./assets/img/product-1.jpg" alt="product-1" class="h-24 rounded-lg">
        <div class="p-2 text-slate-900 py-2">
        <p class="text-sm">Camisa Larga com Bolsos</p>
        <p class="text-xs">Tamanho: M</p>
        <P class="text-lg">$70</P>
        </div>
</article>*/