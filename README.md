# Atividade Final da Disciplina de BDA - MongoDB

Este repositório possui um projeto fullstack com servidor e cliente, separados nas respectivas pastas, **server** e **client**. A atividade consiste no desenvolvimento da camada de modelo do servidor, localizada na pasta ***server/app/models***. 

Um arquivo inicial chamado ***produtosDao.js*** possui os métodos a serem implementados. Não altere a assinatura destes métodos e retorne exatamente o tipo de dados indicados no retorno.

A aplicação possui uma API e um front-end que consome algumas rotas, onde será possível testar o funcionamento dos métodos da camanda de modelo. No entanto, a API também possui outras rotas que deverão ser testadas através de um cliente HTTP.

## Instalação

Faça o download do repositório manualemente ou clone com o seguinte comando:

```shell
git clone git@github.com:g1ll/atividade_final_dba_mongo.git
```
Após baixar os arquivos, entre na pasta do projeto e execute o comando do npm para a instalação das dependências:

```shell
npm install
```

Entre na pasta ***client*** do projeto e execute novamente o comando anterior para instalar as dependências do front-end.

```shell
cd client
npm install
```

Após, volte para a raiz do projeto para executar os comandos de inicialização do servidor de desenvolvimento.

Linux/Macs:
```shell
cd ..
npm run dev
```

Windows:
```shell
cd ..
npm run win-dev
```

## Docuemntação da API

### Retorna todos os produtos

```http
  GET /produtos
```

### Retorna produto por ID

```http
  GET /produtos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`       | `number`   | **Obrigatório**. Identificador do produto|

### Retorna produtos filtrados por preço

```http
  GET /produtos/filter_price/?greater=${min}&less=${max}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `min`       | `number`   | **Obrigatório**. Limite inicial da faixa de preços|
| `max`       | `number`   | **Obrigatório**. Limite final da faixa de preços|
Obs: os limites não são inclusos na resposta.

### Registra um novo produto

```http
  POST /produtos
```
Parâmetros:

| Campo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id_prod`| `number`   | **Obrigatório**. Um identificador numérico para o produto|
| `nome`| `string`   | **Obrigatório**. Nome do produto, sem limite de tamanho|
| `descricao`| `string`   | **Obrigatório**. Descrição do produto, sem limite de tamanho |
| `qtd_estoque`| `number`   | **Obrigatório**. Número inteiro positivo|
| `preco`| `number`   | **Obrigatório**. Definição do preço, armazenado como *Number*|
| `importado`| `boolean`   | Parâmetro opcional do tipo booleano, padrão é falso|
| `desconto`| `string`   |  Parâmetro opcinal da porcentagem de desconto, padrão é *NULO*|
Obs: enviar parâmetos no corpo da requisição no formato **form-url-encode**