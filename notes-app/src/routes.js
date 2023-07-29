const { addNoteHandler, getAllNotesHandler, getNotebyIDHandler, editNotebyIDHandler, deletenotebyIDhandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotebyIDHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotebyIDHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deletenotebyIDhandler,
  }
];

module.exports = routes;
