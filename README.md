HashLab Front-end: Anticipation
======================

Pequena descrição do repositório.

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
O arquivo `config.json` na raíz da pasta ´src´ tem o objeto `anticipation_days` com os possíveis dias para recebimento:
- 1 dia
- 15 dias
- 30 dias
- 90 dias

## Instalação
Execute no terminal o comando `yarn`.

## Comandos

### `yarn start`
Executa o projeto no modo de desenvolvimento, abrindo o navegador no endereço [http://localhost:3000](http://localhost:3000).

A página será recarregada quando você fizer edições.

### `yarn test`

Executa o test runner no modo interactive watch.

### `yarn build`

Criar a versão final do projeto para produção - de forma a otimizar o projeto para a melhor performance - , deixando os arquivos nas pasta `build`.

## Sobre o projeto
### Não utilização de bibliotecas para validação
Como são apenas 3 inputs, achei melhor não colocar mais peso no projeto colocando ferramentas como **Formik** e **Validator** para isso, fazendo a validação manualmente.

### Erro de timeout e internal server error
Poderia ter feito uso do `ErrorBoundary` para capturar os erros de acordo com a request, mas achei mais prático tratar o erro dentro da página e mostrar um componente de alerta ao invés de mostrar outro conteúdo ao usuário - o que também poderia ter sido feito com ErrorBoundary.
