# codenation-es6
## Criptografia de Júlio César
Desenvolvendo o desafio de ReactJS proposta pela CodeNation

Este arquivo vai servir para fazer o passo a passo das minhas ações para poder avaliar elas no futuro.

- Rodar o comando `yarn init` para iniciar o projeto com `yarn`. Apenas um gosto pessoal. Se você não o tiver instalado, basta acessar [https://classic.yarnpkg.com/en/](https://classic.yarnpkg.com/en/), clicar em **INSTALL YARN** e escolher a opção que deseja.
- O próximo passo é adicionar as bibliotecas que vou usar. São elas<br>
	- @babel/cli
	- @babel/core
	- @babel/plugin-proposal-object-rest-spread
	- @babel/plugin-transform-async-to-generator
	- @babel/polyfill
	- @babel/preset-env
	- babel-loader
	- babel-plugin-transform-class-properties
	- webpack
	- webpack-cli
	- webpack-dev-server
	- axios
	- crypto-js
- As lib do `webpack` servem para rodar o servidor de desenvolvimento pra gente (localhost) e o `babel` para tratar e transformar o nosso código como podemos ler os nomes das libs com `rest`, `spread`, `loader`, a `transform` é para `Arrow Function` e, por fim, `axios` servirá para facilitar nossas requisições para a API da **Codenation** e o `crypto-js` para criptografar em sha1 a nossa mensagem.
- Depois de todas estas instaladas, preciso criar o arquivo `webpack.config.js` e `.babelrc` com algumas configurações necessárias para rodar nossa aplicação e tratar arquivos js, local de saída de build, rest, spread, etc.
- Começo então a por a mão na massa criando uma pasta chamada `public` com o arquivo `index.html`. Ele é só um html comum.
- Depois crio a pasta `src` e dentro dela, uma pasta `services`, onde vai ficar a `api.js` com o `axios` para cuidar da nossa API, e o arquivo `main.js` que contém todo o código solicitado pro desafio.
- Assim, só executo a aplicação com o comando `yarn dev` que crei lá nas configurações do `webpack` e com o build para desenvolvimento pronto, posso acessar *localhost:8080* e ver a aplicação funcionando com **score 100**.
- **FIM.**