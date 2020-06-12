exports.up = function(knex) {
    
 return knex.schema
 
 .createTable('projects', tbl => {

   tbl.increments();
   tbl.text('project_name', 128)
   tbl.text('project_description', 128)
   tbl.bool('project_completed');       
 })

 .createTable('resources', tbl => {
   tbl.increments();
   tbl.text('resource_name', 128)
   tbl.text('resource_description', 128)    
 })

 .createTable('tasks', tbl => {
   tbl.increments();
   tbl.text('tasks_description', 128)
   tbl.text('tasks_notes', 128)
   tbl.bool('task_completed')
   tbl
   .integer('project_id')
   .unsigned()
   .references('id')
   .inTable('projects')
   //.onDelete('RESTRICT')
   //.onUpdate('CASCADE')       
 })

 .createTable('project_resources', tbl => {
   //tbl.increments();
   tbl
   .integer('project_id')
   .unsigned()
   .references('id')
   .inTable('projects')
   //.onDelete('RESTRICT')
   //.onUpdate('CASCADE')
   tbl
   .integer('resource_id')
   .unsigned()
   .references('id')
   .inTable('resources')
   //.onDelete('RESTRICT')
   //.onUpdate('CASCADE')        
   tbl.primary(['project_id', 'resource_id'])
 }) 
};

exports.down = function(knex) {
   // undoing that change
 return knex.schema
   .dropTableIfExists('project_resources')
   .dropTableIfExists('tasks')
   .dropTableIfExists('resources')
   .dropTableIfExists('projects');

};