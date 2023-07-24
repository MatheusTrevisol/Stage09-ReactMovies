import { Container, Form } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { Link } from 'react-router-dom';

export function NewMovie() {
  return (
    <Container>
      <Header />
      
      <main>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
        <Form>
          <Section title="Novo filme">
            <div id="inputDivSeparator">
              <Input 
                placeholder="Título"
                type="text"
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)"
                type="text"
              />
            </div>
            
            <textarea name="observations" placeholder="Observações" cols="30" rows="10" />

            <div id="highlighterDiv">
              <h4>Marcadores</h4>

              <div id="notesItemsDiv">
                <NoteItem value="React" />
                <NoteItem value="React" />
                <NoteItem value="React" />
                <NoteItem value="React" />
                <NoteItem value="React" />
                <NoteItem value="React" />
                <NoteItem $isNew />
              </div>
            </div>

            <div id="buttonsDivSeparator">
              <Button type="submit" title="Excluir Filme" className="otherButtonColor" />
              <Button type="submit" title="Salvar alterações" />
            </div>

          </Section>

        </Form>
      </main>
    </Container>
  );
};