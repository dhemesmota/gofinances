<p align="center">
  <img alt="gofinances" title="gofinances" src="https://user-images.githubusercontent.com/26680031/80850916-ef391c80-8bf4-11ea-8ab8-280b7dbbf102.png" width="400px" />
</p>

<h3 align="center">Adiministre suas financias!</h3>
<h5 align="center">Despesas e Receitas</h5>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dhemesmota/gofinances">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dhemesmota/gofinances">
  <img alt="GiHub Issues" src="https://img.shields.io/github/issues/dhemesmota/gofinances" >
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dhemesmota/gofinances">
  <img alt="GitHub License" src="https://img.shields.io/github/license/dhemesmota/gofinances">
</p>

<small align="center">:thought_balloon: “O Faixa preta, só se tornou faixa preta por ter executado os mesmos comandos várias e várias vezes, até se tornar hábil.”</small><br/>

![layout](https://user-images.githubusercontent.com/26680031/79889145-ff225680-83d3-11ea-88d0-4bf3cff7b6b3.PNG)

<p align="center">
  <a href="#books-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#trophy-principais-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instruções-de-instalação">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-útil">Útil</a>&nbsp;&nbsp;&nbsp;
</p>


## :books: Sobre o projeto
O GoFinances tem como objetivo controlar de forma simples suas despesas e receitas, podendo importar um arquivo CSV para registrar varios dados com um simples importar de arquivo. A aplicação pode ser acessada pela web ou aplicativo mobile.

<br/>

## :trophy: Principais funcionalidades
- Manter despesas e receitas
- Importar arquivo CSV

<br/>

## :computer: Instruções de instalação
:heavy_check_mark: Clone o repositório ou faça o download no formato zip, caso deseje clonar usando o `git`, basta abrir um terminal de linha de comandos, navegar até a pasta desejada onde ficará o projeto e em seguida siga os passos abaixo:<br/>
Antes de mais nada certifique que você tenha um gerenciador de pacotes e o `NodeJS` instalados em sua máquina.
```Bash
# .../suapasta
$ git clone git@github.com:dhemesmota/gofinances.git
$ cd gofinances

# .../suapasta/gofinances
$ ls
backend/  frontend/
```

:heavy_check_mark: Agora é necessário baixar todas as dependências do projeto para que possamos utiliza-lo:<br/>
Eu utilizo o `yarn`, mas você pode utilizar o `npm` se preferir.
```Bash
# .../suapasta/gofinances
$ cd backend
$ yarn

$ cd ../frontend
$ yarn
```

:heavy_check_mark: Antes de prosseguimos você deve criar um banco de dados postgres com o nome `gofinances`<br/>
Rode as migration com o comando abaixo:
```Bash
# .../suapasta/gofinances/backend
$ yarn typeorm migration:run
```

:heavy_check_mark: Show! Estamos prontos para executar a aplicação:<br/>
Como essa aplicação utilizar a API do GitHub basta executar e sair utilizando.
```Bash
# .../suapasta/gofinances/backend
$ yarn dev:server

# .../suapasta/gofinances/frontend
$ yarn start
```


<br/>

## :hammer: Útil
![visual-studio-code](https://user-images.githubusercontent.com/26680031/80825935-baf33b00-8bb7-11ea-8496-8ea6f8b134b1.png)
.
![1200px-React-icon](https://user-images.githubusercontent.com/26680031/80825872-9a2ae580-8bb7-11ea-9793-c00e357fd25f.png)
.
![1_mn6bOs7s6Qbao15PMNRyOA](https://user-images.githubusercontent.com/26680031/80825904-a9aa2e80-8bb7-11ea-9a5d-634db4c2694f.png)
.
![Git-Logo-2Color](https://user-images.githubusercontent.com/26680031/80825961-c7779380-8bb7-11ea-977f-c5a095caeb69.png)
.
![nodejs-logo](https://user-images.githubusercontent.com/26680031/80825975-d0686500-8bb7-11ea-82d3-afd711af6497.png)
.
![yarn-kitten-full](https://user-images.githubusercontent.com/26680031/80825992-d8c0a000-8bb7-11ea-908e-418f21da3931.png)
.
![typeorm](https://user-images.githubusercontent.com/26680031/80851529-bac75f80-8bf8-11ea-8204-9da61166531e.png)

<br/>

## :memo: Licença
Este projeto está sob a licença MIT.[Licença](https://github.com/dhemesmota/gofinances/blob/master/LICENSE.md)

