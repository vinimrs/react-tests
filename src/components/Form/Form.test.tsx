// jest
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

describe('in form component', () => {
  test('when the input is empty new participants cannot be added', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Form />
        </RecoilRoot>
      </ThemeProvider>
    );

    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test('add a participant if you have a name filled in', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Form />
        </RecoilRoot>
      </ThemeProvider>
    );

    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Vinícius Matheus',
      },
    });

    // Clicando no botão
    fireEvent.click(botao);

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    // garantir que o input não tenha valor
    expect(input).toHaveValue('');
  });

  test('duplicate names cannot be added to the list', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Form />
        </RecoilRoot>
      </ThemeProvider>
    );

    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Vinícius Matheus',
      },
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'Vinícius Matheus',
      },
    });
    fireEvent.click(botao);

    const errorAlert = screen.getByRole('alert');

    expect(errorAlert.textContent).toBe('Nomes duplicados não são permitidos');
  });

  test('the alerts should be automatically closed after the timer', () => {
    jest.useFakeTimers();
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Form />
        </RecoilRoot>
      </ThemeProvider>
    );

    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Vinícius Matheus',
      },
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'Vinícius Matheus',
      },
    });
    fireEvent.click(botao);

    let errorAlert = screen.queryByRole('alert');
    expect(errorAlert).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorAlert = screen.queryByRole('alert');
    expect(errorAlert).toBeNull();
  });
});
