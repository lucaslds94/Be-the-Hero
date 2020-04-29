# Be-the-Hero
Projeto desenvolvido durante a Semana Omnistack da Rocketseat que tem como intuito ajudar ONGs a divulgarem casos específicos que necessitam de um apoio financeiro. Assim, cada usuário pode escolher um caso que deseja apoiar e ser o herói que salvou o dia dos envolvidos nele.

## :computer: Tecnologias

**:satellite: Backend**

- [NodeJs;](https://nodejs.org/en/)
- [Express;](https://www.express.com/)
- [Socket-io;](https://socket.io/)
- [SqLite;](https://www.sqlite.org/index.html)
- [Knex;](http://knexjs.org/)
- [Jest.](https://jestjs.io/pt-BR/)

**:computer: Frontend**

- [React Js;](https://pt-br.reactjs.org/)
- [Styled-Components;](https://styled-components.com/)
- [Axios.](https://github.com/axios/axios)

**:iphone: Mobile**

- [React Native;](https://facebook.github.io/react-native/)
- [Expo;](https://expo.io/)
- [Axios;](https://github.com/axios/axios)

##  Getting Started

Você precisa clonar o repositório e pode fazer isso digitando em seu terminal `$ git clone https://github.com/Luuck4s/Be-The-Hero.git`.

### :satellite: Backend

Logo após clonar o repositório navegue ate a pasta backend `$ cd backed/` e execute o comando `yarn install` ou `npm install`.

Após as dependências terminarem de instalar execute `$ npx knex migrate:latest` , isso ira executar as migrations necessárias para criar o banco de dados.

> Caso deseje realizar os testes, execute `$ yarn test` ou `$ npm test`, irá exibir em seu terminal o resultado dos testes.

Logo após seguir tudo que foi feito acima pode executar o comando `yarn start` ou `npm start` e deverá aparecer algo parecido com essa mensagem:

```
[SERVER] Server is running on  http://localhost:3333
```

> O fronted e o mobile necessita do backend funcionando para ter seu funcionamento normal!

### :computer: Frontend

Após seguir os passos acima e o backend estiver funcionando vá para pasta `$ cd frontend/` e execute `yarn install` ou `npm install`.

Depois das dependências terminarem de instalar execute o comando `yarn start` ou `npm run start`.

### :iphone: Mobile

Para executar o mobile entre na pasta `$ cd mobile/` e logo após o backend estiver funcionando, execute `yarn install` ou `npm install`.

Após as dependências terminarem de baixar execute `yarn start` ou `npm start` e ai o expo já estará funcionando para você ler o Qr Code e utilizar a aplicação.
