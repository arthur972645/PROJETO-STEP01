const id = document.querySelector("#codigo")
const categoria = document.querySelector("#opcaoCategoria")
const turno = document.querySelector("#opcaoTurno")
const horasTrabalhadas = document.querySelector("#HorasTrabalhadas") 
const btn = document.querySelector("#btn")
const mostraCodigo = document.querySelector("#mostraCodigo")
const valoPorHora = document.querySelector("#valorHora")
const mostrarHorasTrabalhadas = document.querySelector("#mostrarHorasTrabalhadas")
const valorMensalSemAuxilio = document.querySelector("#valorMensalSemAuxilio")
const auxilioAlimentacao = document.querySelector("#auxilioAlimentacao")
const salarioFinal = document.querySelector("#salarioFinal")

btn.addEventListener('click',()=>{
    const mostraId = id.value
    const mostrarCategoria = categoria.value
    const mostrarTurno = turno.value
    const mostrarHoras = horasTrabalhadas.value
    
    valorHoraTrabahada(mostrarCategoria, mostrarTurno,mostrarHoras,mostraId)

    
})

function valorHoraTrabahada (mostrarCategoria, mostrarTurno, mostrarHoras,mostraId){
    // const horasTrabalhadas = document.querySelector("#HorasTrabalhadas") 
    
    // const quantidadDeHorasTrabalhadas = horasTrabalhadas.value
   
    
    let valorHora
    let valorMensal
    let valorAuxilio
    let valorTotal
    
    debugger;
    if(mostrarCategoria === 'Gerente' && mostrarTurno === 'Noturno'){
          valorHora = 0.18 * 450
          valorMensal = valorHora * mostrarHoras
          if(valorMensal <= 300){
            valorAuxilio = 0.20 * valorMensal
            valorTotal = valorMensal + valorAuxilio

          }
          mostraCodigo.innerHTML = (`Codigo do trabalhador: ${mostraId}`)
          mostrarHorasTrabalhadas.innerHTML = (`Foram trabalhadas: ${mostrarHoras} horas`)
          valoPorHora.innerHTML = (`Valor por hora: $${valorHora}`)
          valorMensalSemAuxilio.innerHTML = (`Valor por horas trabalhadas: $${valorMensal}`)
          auxilioAlimentacao.innerHTML = (`O valor do auxio: $${valorAuxilio}`)
          salarioFinal.innerHTML = (`O valor total será de: $${valorTotal}`)
    }
    else if(mostrarCategoria === 'Gerente' && mostrarTurno === 'Matutino' || mostrarTurno === 'Vespertino'){
        valorHora = 0.15 * 450
        valorMensal = valorHora * mostrarHoras
        valoPorHora.innerHTML = (`Valor por hora: $${valorHora}`)
        valorMensalSemAuxilio.innerHTML = (`Valor por horas trabalhadas: $${valorMensal}`)
    }
    else if(mostrarCategoria == 'Operario' && mostrarTurno === 'Noturno'){
        valorHora = 0.13 * 450
        valorMensal = valorHora * mostrarHoras
        valoPorHora.innerHTML = (`Valor por hora: $${valorHora}`)
        valorMensalSemAuxilio.innerHTML = (`Valor por horas trabalhadas: $${valorMensal}`)
    }
    else if(mostrarCategoria === 'Operario' && mostrarTurno === 'Matutino' || mostrarTurno === 'Vespertino'){
        valorHora = 0.10 * 450
          valorMensal = valorHora * mostrarHoras
          valoPorHora.innerHTML = (`Valor por hora: $${valorHora}`)
          valorMensalSemAuxilio.innerHTML = (`Valor por horas trabalhadas: $${valorMensal}`)
    }

}