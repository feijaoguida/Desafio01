const express = require("express");

const server = express();

server.use(express.json());

let numberOfRequest = 0;
const projects = [
  {
    id: "1",
    title: "Novo Projeto",
    task: [1, 2, 3, 4]
  },
  {
    id: "2",
    title: "Novo Projeto2",
    task: [4, 3, 2, 1]
  }
];

function checkProjectExist(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id === id);

  if (!project) {
    return res.status(400).json({ message: "Usuário não Cadastrado!" });
  }

  return next();
}

function requestof(req, res, next) {
  numberOfRequest++;

  console.log(`Numero de requisições: ${numberOfRequest}`);

  next();
}

server.use(requestof);

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;

  const projectsIndex = projects.findIndex(p => p.id === id);

  return res.json(projects[projectsIndex]);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = { id, title, task: [] };

  projects.push(project);

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.task.push(title);

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.title = title;

  return res.json(projects);
});

server.delete("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;

  const projectsIndex = projects.findIndex(p => p.id === id);

  projects.splice(projectsIndex, 1);

  return res.json(projects);
});

server.listen(3000);
