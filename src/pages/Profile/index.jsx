import { Link } from 'react-router-dom';
import { Container, Header, Form, Avatar } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Header>

      <Form>
        <Avatar>
          <label htmlFor="avatarInput">
            <FiCamera />

            <input
              id="avatarInput"
              type="file"
            />
          </label>
        </Avatar>

        <Input 
          icon={FiUser}
          type="text"
          value="Matheus Trevisol"
          readOnly
          className="whiteText"
        />
        <Input 
          icon={FiMail}
          type="text"
          value="matheusm.trevisol@gmail.com"
          readOnly
          className="whiteText"
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Input 
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
        />

        <Button 
          title="Salvar"
        />
      </Form>
    </Container>
  );
}