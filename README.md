<div align="center">
  <img src="./public/images/avatar.svg" alt="Logo" width="100"/>
  <br/>
  <br/>

  <img src="./public/images/logo.svg" alt="Logo" width="200"/>
  <h5 align="center">
    Informação sem complicação.
  </h5>
</div>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Ignite&message=IgNews&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/ignews?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/ignews?color=blueviolet&logo=typeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/ignews?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#ignews">IgNews</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o Ignite, um bootcamp criado pela [Rocketseat](https://rocketseat.com.br/) com diversas trilhas de variadas tecnologias. O projeto foi criado durante o módulo III do bootcamp na trilha de [ReactJS](https://pt-br.reactjs.org/).

## IgNews

O IgNews é um blog com conteúdo tech construído com NextJS, Prismic CMS e Strip.

Ao acessar a aplicação, o visitante verá a tela abaixo, aonde poderá realizar login, ir para página de posts ou se inscrever no blog:

![Homepage](.github/home.png)

Ao ir para a página de posts, o usuário verá a lista com todos os posts cadastrados no blog, conforme veremos a seguir, e isso não depende de login ou inscrição no blog pois qualquer usuário poderá ver a lista:

![Lista de posts](.github/posts-list.png)

Ao clicar em um post de interesse, o seu conteúdo será exibido parcialmente como ilustra a imagem a seguir. Isso ocorre porque os posts só podem ser exibidos completamente para usuários logados e com inscrições ativas na plataforma:

![Detalhes do post com usuário deslogado](.github/post-details.png)

Ao clicar no botão `Sign in with Github` presente no canto superior direto, o usuário verá a tela a seguir para autorizar a aplicação a ter acesso à algumas informações de seu perfil no Github:

![Tela de permissão de autenticação com Github](.github/github-auth.png)

Note que mesmo logado na aplicação o conteúdo ainda é não é exibido por completo, pois o usuário em questão não é inscrito no blog:

![Detalhes do post com usuário logado](.github/unsub-post-details.png)

Ao clicar no botão de inscrição presente na página de post ou na home do blog, o usuário será direcionado para o checkout do Stripe, conforme imagem abaixo:

![Tela de pagamento do Stripe](.github/stripe-checkout.png)

Após informar os dados na tela acima e realizar o pagamento da inscrição o usuário já estará apto para ver os posts por completo. Abaixo uma demonstração de um usuário logado e inscrito no blog:

![Detalhes do post com usuário logado e inscrito](.github/logged-post-details.png)

Pronto! 🎉
usuário logado e com inscrição ativa, podendo ver todo conteúdo do blog e livre de limitações.

Para ilustrar todo o fluxo da aplicação, deixo o GIF abaixo navegando pela aplicação desde a estaca zero até o acesso total ao conteúdo do blog:

![Demo](.github/demo.gif)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

É de suma importância que, antes de executar o projeto, as variáveis de ambiente abaixo tenham sido preenchidas no arquivo `env.local` seguindo o modelo do `env.example`.

Para gerar as secrets e URLs basta acessar cada um dos serviços, criar sua conta e gerar as chaves para preencher no `.env`. As variáveis que iniciam com `NEXTAUTH_` não são obrigatórias para executar a aplicação localmente.
Feito isso, nas seguir com a etapa abaixo para executar o projeto.

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/ignews.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignews

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 3000 - acesse <http://localhost:3000>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" alt="NextJS" height="75" />

<img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" height="75" />

<img align="left" src="https://seeklogo.com/images/P/prismic-logo-85AC255416-seeklogo.com.png" alt="Prismic" height="75" />

<br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
