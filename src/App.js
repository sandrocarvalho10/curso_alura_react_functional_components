import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'
import '@fontsource/roboto'
import { validarCPF, validarSenha } from './models/cadastro'

import ValidacoesCadastro from './contexts/validacoesCadastro';
function App() {
  return (
    <Container maxWidth="sm" >
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />

      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log('Meu Form ', dados)
}



export default App;
