const db = require('../db-config');

module.exports = {
  getProjects,
  getResources,
  addProjects,
  findProjectsById,
  getTasksById,
  addTask,
  addResource    
}

function getProjects(){
    return db('projects')
}

function findProjectsById(id) {
    return db("projects").where({ id }).first();
  }




function getResources(){
    return db('resources')
}
 
function addResource(resource) {
    return db("resources").insert(resource, "id")
}



function getTasksById(project_id){
    
    return db('tasks')
    .select('p.id', 'p.project_name', 'p.project_description', 't.tasks_description', 't.tasks_notes', 't.task_completed')
    .from('projects as p')
    .innerJoin('tasks as t', 'p.id', 't.project_id')
    .where({ project_id: project_id })
}




function addProjects(projects){
    return db.insert(projects, 'id')
    .into('projects')
}


function addTask(task, project_id) {
    return db("tasks")
        .insert(task, project_id)
        
}


