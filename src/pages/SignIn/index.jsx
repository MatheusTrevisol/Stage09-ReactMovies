import { Container, Form, BackgroundImg  } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça seu login</h3>

        <div id="inputDivSeparator">
          <Input icon={FiMail} placeholder="E-mail" type="text" />
          <Input icon={FiLock} placeholder="Senha" type="password" />
        </div>

        <Button title="Entrar" type="submit" />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}