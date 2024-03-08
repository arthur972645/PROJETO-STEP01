const id = document.querySelector("#codigo")
const categoria = document.querySelector("#opcaoCategoria")
const turno = document.querySelector("#opcaoTurno")
const horasTrabalhadas = document.querySelector("#HorasTrabalhadas") 
const btn = document.querySelector("#btn")
const horaValor = document.querySelector("#horaValor")
btn.addEventListener('click',()=>{
    const mostrarId = id.value
    const mostrarCategoria = categoria.value
    const mostrarTurno = turno.value
    const mostrarHoras = horasTrabalhadas.value
    
    valorHoraTrabahada(mostrarCategoria, mostrarTurno,mostrarHoras)

    
})

function valorHoraTrabahada (mostrarCategoria, mostrarTurno, mostrarHoras){
    let resultadoHoras
    
    if(mostrarCategoria === 'Gerente' && mostrarTurno === 'Noturno'){
          resultadoHoras = (0.18 * 450)*mostrarHoras
          horaValor.innerHTML = (resultadoHoras)
    }
    else if(mostrarCategoria === 'Gerente' && mostrarTurno === 'Matutino' || mostrarTurno === 'Vespertino'){
        resultadoHoras === (0.15 * 450)*mostrarHoras
    }
    else if(mostrarCategoria == 'Operario' && mostrarTurno === 'Noturno'){
        resultadoHoras === (0.13 * 450)*mostrarHoras
    }
    else if(mostrarCategoria === 'Operario' && mostrarTurno === 'Matutino' || mostrarTurno === 'Vespertino'){
        resultadoHoras === (0.13 * 450)*mostrarHoras
    }

}