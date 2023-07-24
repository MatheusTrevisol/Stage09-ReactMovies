import { Container, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input 
        type="text"
        placeholder="Pesquisar pelo título"
      />
      
      <Profile to="/profile">        
        <div>
          <span>Matheus Trevisol</span>
          <strong>sair</strong>
        </div>

        <img
          src="https://github.com/MatheusTrevisol.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}