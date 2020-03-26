# codenation-es6
Desenvolvendo o desafio de ReactJS proposta pela CodeNation

Vamos iniciar criando a pasta **`public`** que conterá a nossa tela e a pasta **`src/services`** que é onde vai ficar a **`API`**.

Vou começar instalando algumas dependências de desenvolvimento para facilitar minha vida com o **`yarn`** já instalado na máquina.

São elas:<br />
    - yarn add -D @babel/cli<br />
    - yarn add -D @babel/core<br />
    - yarn add -D @babel/plugin-proposal-object-rest-spread<br />
    - yarn add -D @babel/plugin-transform-async-to-generator<br />
    - yarn add -D @babel/polyfill<br />
    - yarn add -D @babel/preset-env<br />
    - yarn add -D babel-loader<br />
    - yarn add -D webpack<br />
    - yarn add -D webpack-cli<br />
    - yarn add -D webpack-dev-server<br />

Agora, vamos adicionar o **`yarn add axios`** para incluir o axios no nosso projeto e trabalhar com as APIs **`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN`** e **`https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN`**.

Assim, vou incluir um arquivo chamado **`index.html`** dentro da **`public`**.

Para rodar é só executar **`yarn init`** para dar um nome ao projeto e **`yarn dev`** para executar a aplicação acessando localhost:8080.

O próximo passo é adicionar a primeira API no projeto e consumi-la.

Neste caso, vou utilizar o padrão StateLess, pois não há necessidade de armazenar valores nem transferí-los entre arquivos.

Após decifrar o código, vamos instalar a lib para criptografar a mensagem com sha1 **`yarn add crypto-js`**.

E depois de algumas horas tentando acertar a forma certa que o **`axios`** permite enviar **`multipart`** pro backend, finalmente consegui!

Fim! Desafio finalizado com sucesso.