# Desafio01
Desafio 01 - NodeJs

Arquivo de estudo do NodeJs

Crie uma aplicação do zero utilizando Express.

Essa aplicação será utilizada para armazenar projetos e suas tarefas.
Rotas

<b>POST</b> /projects : A rota deve receber id e title dentro
corpo de cadastrar um novo projeto dentro de um array no
seguinte formato: { id: "1", title: 'Novo projeto',
tasks: [] } ; Certifique-se de enviar tanto o ID quanto o título
do projeto no formato string com àspas duplas.

<b>GET</b> /projects : Rota que lista todos projetos e suas tarefas;

<b>PUT</b> /projects/:id : A rota deve alterar apenas o título do
projeto com o id presente nos parâmetros da rota;

<b>DELETE</b> /projects/:id : A rota deve deletar o projeto com o
id presente nos parâmetros da rota;

<b>POST</b> /projects/:id/tasks : A rota deve receber um campo
title e armazenar uma nova tarefa no array de tarefas de um
projeto específico escolhido através do id presente nosparâmetros da rota;

Exemplo

Se eu chamar a rota <b>POST</b> /projects repassando 
{ id: 1, 
  title:'Novo projeto' 
} e a rota <b>POST</b> /projects/1/tasks com 
{ title:'Nova tarefa' } , meu array de projetos deve ficar assim:

[

  {
  
    id: "1",
    
    title: 'Novo projeto',
    
    tasks: ['Nova tarefa']
    
  }
  
]
