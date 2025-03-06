function addTarefa(){
    const tarefa = document.querySelector('#tarefa')
    const lista = document.querySelector('#lista')
    

    if(tarefa.value == ''){
        alert('Adicione uma tarefa válida')
    } else {
        lista.innerHTML += `<li>
        <div>
        <span><i class='bx bxs-check-circle'></i>
        <span>${tarefa.value}</span>
        </div>
        <span><i class="bx bxs-trash"></i>
        </li>`

        tarefa.value = ''
        
    }

    lista.addEventListener('click', function(risc){
        risc.target.parentElement.querySelector("span").style.textDecoration = "line-through"
    })

    document.querySelector('#lista').addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('bxs-trash')) {
        target.closest('li').remove();

    }
})

}