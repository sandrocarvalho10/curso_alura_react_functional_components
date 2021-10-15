import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)
  
  



    return (
      <form onSubmit={(event)=>{
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({email, senha});
        }
      }}>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          required
          fullWidth
          margin="normal"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          error={!erros.senha.valido}
          helperText={erros.senha.texto}
          id="senha"
          label="Senha"
          type="password"
          name="senha"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          onBlur={validarCampos}
        />
        <Button type="submit" variant="contained" color="primary">Próximo</Button>
      </form>
    );
}

export default DadosUsuario;