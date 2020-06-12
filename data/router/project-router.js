const express = require('express')

const Projects = require('../model/project-model.js')


const router = express.Router();




//GET -  projects
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get project'})     
    })
})


//GET - find projects by id

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findProjectsById(id)
    .then(scheme => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });



//POST - add a project

router.post('/', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addProjects(body, id)
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to post task'})     
    })
})



router.post('/resources', (req, res) => {
    const resourceData = req.body;    
  
    Projects.addResource(resourceData)
    .then(resources => {
      res.status(201).json(resources);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });





//GET - tasks by id

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.getTasksById(id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get task'})     
    })
})

//POST - add a task
router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const id = req.params.id; 
  
    Projects.findProjectsById(id)
    .then(projects => {
      if (projects) {
        Projects.addTask(taskData, id)
        .then(tasks => {
          res.status(201).json(tasks);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch (err => {
        console.log(err);
        
      res.status(500).json({ err, message: 'Failed to create new task' });
    });
  });


module.exports = router;