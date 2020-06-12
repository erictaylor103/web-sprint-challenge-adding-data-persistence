
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {tasks_description: 'Make sure all ideas are sane', tasks_notes: 'This is important', task_completed: false, project_id: 1},
        {tasks_description: 'Clear all doubts', tasks_notes: 'Double check all ideas', task_completed: false, project_id: 1},
        {tasks_description: 'Find a plane', tasks_notes: 'Dont forget to get a plane', task_completed: false, project_id: 1}
      ]);
    });
};
