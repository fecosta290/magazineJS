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