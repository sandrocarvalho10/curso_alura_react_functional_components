import React, { useState } from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoinicial(validacoes)
    const [erros, setErros] = useState(estadoInicial)

    function validarCampos(e) {
        const { name, value } = e.target
        const ehValido = validacoes[name](value)
        const novoEstado = { ...erros }
        novoEstado[name] = ehValido
        setErros(novoEstado)
    }

    function possoEnviar(){
        for(let campo in erros){
          if(!erros[campo].valido){
            return false
          }
        }
        return true;
      }

    return [erros, validarCampos, possoEnviar]
}

function criarEstadoinicial(validacoes){
    const estadoInicial = {}

    for(let campo in validacoes){
        estadoInicial[campo] = { valido: true, texto: ""}
    }

    return estadoInicial;
}

export default useErros;