import { Container } from "./styles";

import { Link } from 'react-router-dom';

import { GrAdd } from "react-icons/gr";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MovieTag } from "../../components/MovieTag";

export function Home() {
  return (
    <Container>
      <Header />      

      <main>
        <header id="headerSeparator">
          <h2>Meus Filmes</h2>
          <Link to="/register-movie">
            <GrAdd />
            Adicionar Nota
          </Link>
        </header>

        <Section>
          <div id="movieTagContainer">
            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 2,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
                tags: [
                  {id: '1', name: 'Nodejs'},                  
                  {id: '2', name: 'Ficção Científica'},
                  {id: '3', name: 'React'},
                ],
              }}
            />
            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 2,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
                tags: [
                  {id: '1', name: 'Nodejs'},                  
                  {id: '2', name: 'Ficção Científica'},
                  {id: '3', name: 'React'},
                ],
              }}
            />
            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 2,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
                tags: [
                  {id: '1', name: 'Nodejs'},                  
                  {id: '2', name: 'Ficção Científica'},
                  {id: '3', name: 'React'},
                ],
              }}
            />
            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 2,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
                tags: [
                  {id: '1', name: 'Nodejs'},                  
                  {id: '2', name: 'Ficção Científica'},
                  {id: '3', name: 'React'},
                ],
              }}
            />
            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 2,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
                tags: [
                  {id: '1', name: 'Nodejs'},                  
                  {id: '2', name: 'Ficção Científica'},
                  {id: '3', name: 'React'},
                ],
              }}
            />

            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 1,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
                tags: [
                  {id: '1', name: 'Ficção Científica'},
                  {id: '2', name: 'Nodejs'},                  
                ],
              }}
            />

            <MovieTag to="/movie/:id" data={{
                movieTitle: "Interestellar",
                rating: 4,
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller – nomeado em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave",
              }}
            />
          </div>
        </Section>
      </main>
    </Container>
  )
}