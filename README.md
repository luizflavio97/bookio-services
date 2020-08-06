# Book.io

Book.io é um sistema simples que armazena livros.

## Instalação

- Utilize o comando abaixo para instalar as dependências.

```bash
npm init
```
- Rode o comando abaixo para inicializar o servidor.

```bash
npm run dev
```

## Rotas

GET - Books 
```javascript
"/books" 
```
- Retorna os livros do banco de dados.

GET - Book 
```javascript
"/books/:id" 
```
- Retorna os livro do banco com o id fornecido.

POST - Books 
```javascript
"/books" 
```
- Cria um livro.

PUT - Books 
```javascript
"/books/:id" 
```
- Atualiza o livro com o id fornecido.

DELETE - Books 
```javascript
"/books/:id" 
```
- Deleta o livro com o id fornecido.

Todo o conteúdo desse serviço está em [Heroku](https://bookio-services.herokuapp.com/)