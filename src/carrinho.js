import { catalogo } from "./catalogo"

function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("right-[0px]")
    document.getElementById("carrinho").classList.remove("right-[360px]")
}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]")
    document.getElementById("carrinho").classList.add("right-[-360px]") 
}

export function inicializarCarrinho(){
   const botaoAbrirCarrinho = document.getElementById("btnAbrirCarrinho")
   const botaoFecharCarrinho = document.getElementById("btnFecharCarrinho")

   botaoAbrirCarrinho.addEventListener("click",abrirCarrinho )
   botaoFecharCarrinho.addEventListener("click",fecharCarrinho)
}

export function adicionarCarrinho(idProduto){
    const produto = catalogo.find(p => p.id === idProduto)
    const containerProdutosCarrinho = document.getElementById("produtos")
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg relative">
    <button id="btnFecharCarrinho" class=" absolute top-0 right-2 ">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900 "></i>
    </button>
    <img src="./assets/img/${produto.imagem}" alt="product-1.jpg" class="h-24 rounded-lg">
    <div class="p-2 text-slate-900 py-2">
    <p class="text-sm">${produto.nome}</p>
    <p class="text-xs">Tamanho: M</p>
    <P class="text-lg">$${produto.preco}</P>
    </div>
  </article>`
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;

}