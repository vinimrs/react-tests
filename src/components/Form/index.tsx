import React, {
  ChangeEventHandler,
  FormEventHandler,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useAddParticipant, useAlert } from '../../state/hook';
import * as G from '../../styles/GlobalComponents';

const Alert = styled.p`
  color: #842029;
  background-color: #f8d7da;
  padding: 16px;
  border: 1px solid #f5c2c7;
  border-radius: 8px;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 48px 0;
  }
`;

const Form: React.FC = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const message = useAlert();

  const addToList = useAddParticipant();

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    addToList(name);
    setName('');
    inputRef.current?.focus();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e =>
    setName(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <G.CustomInputContainer>
        <input
          ref={inputRef}
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button type="submit" disabled={!name}>
          Adicionar
        </button>
      </G.CustomInputContainer>
      {message && <Alert role="alert">{message}</Alert>}
    </form>
  );
};

export default Form;
