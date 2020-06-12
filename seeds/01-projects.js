
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Create a Robot', project_description: 'Robots are good', project_completed: false},
        {project_name: 'Build a Boat', project_description: 'Building is hard', project_completed: false},
        {project_name: 'Learn to pilot a plane', project_description: 'Piltoing is scary', project_completed: false}
      ]);
    });
};
