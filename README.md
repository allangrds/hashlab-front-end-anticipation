HashLab Front-end: Anticipation
======================

Implementação do teste de front-end proposto pela HashLab.

## Conteúdo
- [Sobre o desafio](./DESAFIO.md)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Comandos](#comandos)
- [O que foi utilizado](#o-que-foi-utilizado)

## Requisitos
- Node 14.15.3
- NPM 6.14.9

## Configuração
O arquivo `config.json` na raíz da pasta `src` tem o objeto `anticipation_days` com os possíveis dias para recebimento. Você pode colocar os seguintes valores no array:
- 1
- 15
- 30
- 90

## Instalação
Execute no terminal o comando `npm install`.

## Obtendo respostas diferentes da API
Segundo o desafio, podemos ter os seguintes casos de interação com a API:
- Sucesso
- Sucesso com delay
- Timeout
- Internal Server Error

Para simular cada um desses casos, vá ao arquivo `src/pages/Main/index.js` na linha `39` com o código `services.simulation(payload)` e mude a função para uma das abaixo:

- Sucesso(`simulation`)
- Sucesso com delay(`simulationWithDelay`)
- Timeout(`simulationWithInternalError`)
- Internal Server Error(`simulationWithTimeout`)

## Comandos

### `yarn start`
Executa o projeto no modo de desenvolvimento, abrindo o navegador no endereço [http://localhost:3000](http://localhost:3000).

A página será recarregada quando você fizer edições.

### `yarn test`

Executa o test runner no modo interactive watch.

### `cy:startAndRun`

Inicia um novo servidor e executa os testes e2e do Cypress.

### `cy:run`

Executa os testes e2e do Cypress.


### `yarn build`

Criar a versão final do projeto para produção - de forma a otimizar o projeto para a melhor performance - , deixando os arquivos nas pasta `build`.

## Sobre o projeto
### Não utilização de bibliotecas para validação
Como são apenas 3 inputs, achei melhor não colocar mais peso no projeto colocando ferramentas como **Formik** e **Yup** para isso, fazendo a validação manualmente.

### Erro de timeout e internal server error
Poderia ter feito uso do `ErrorBoundary` para capturar os erros de acordo com a request, mas achei mais prático tratar o erro dentro da página e mostrar um componente de alerta ao invés de mostrar outro conteúdo ao usuário - o que também poderia ter sido feito com ErrorBoundary.
