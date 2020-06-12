
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Resources One', resource_description: 'This is the resource one description'},
        {resource_name: 'Resource Two', resource_description: 'Here is the resource 2 description'},
        {resource_name: 'Resource Three', resource_description: 'Resource three description is found here'}
      ]);
    });
};
