const controller = require('../controllers/controller')


// CRUD
// Create -> add page
// ReadAll -> dashboard
// ReadOne -> Details + Edit (retrieve before making changes)
// UpdateOne -> Edit
// DESTROY -> anywhere you need it.

module.exports = (app) => {
    app.post('/api/v3/create', controller.create);
    app.get('/api/v3/readAll', controller.readAll);
    app.get('/api/v3/readOne/:id', controller.readOne);
    app.put('/api/v3/updateOne/:id', controller.updateOne);
    app.delete('/api/v3/deleteOne/:id', controller.deleteOne);
}
