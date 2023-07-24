import { Container, Form, BackgroundImg  } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Crie sua conta</h3>

        <div id="inputDivSeparator">
          <Input icon={FiUser} placeholder="Nome" type="text" />
          <Input icon={FiMail} placeholder="E-mail" type="text" />
          <Input icon={FiLock} placeholder="Senha" type="password" />
        </div>

        <Button title="Cadastrar" type="submit" />

        <Link to="/login">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}