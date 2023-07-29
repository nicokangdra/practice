const { randomBytes } = require("crypto");
const notes = require("./notes");

const addNoteHandler = (req, h) => {
  const { title, tags, body } = req.payload;
  const id = randomBytes(16).toString("hex");
  const createdAt = (updatedAt = new Date().toISOString());
  const newNote = { title, tags, body, id, createdAt, updatedAt };
  notes.push(newNote);
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const res = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: { noteId: id },
    });
    res.code(201);
    return res;
  } else {
    const res = h.response({
      status: "fail",
      message: "Catatan gagal ditambahkan",
    });
    res.code(500);
    return res;
  }
};

const getAllNotesHandler = () => ({
  status: "success",
  data: { notes },
});

const getNotebyIDHandler = (request, h) => {
  const id = request.params.id;
  const note = notes.filter((aidi) => aidi.id == id)[0];
  if (note) {
    return {
      status: "success",
      data: { note },
    };
  } else {
    const response = h.response({
      status: "fail",
      message: "Catatan tidak ditemukan",
    });
    response.code(404);
    return response;
  }
};

const editNotebyIDHandler = (req, h) => {
  const id = req.params.id;
  const { title, tags, body } = req.payload;
  const updatedAt = new Date().toISOString();
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: "success",
      message: "Catatan berhasil diperbarui",
    });
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbarui catatan. Id tidak ditemukan",
    });
    response.code(404);
    return response;
  }
};

const deletenotebyIDhandler = (req, h) => {
  const id = req.params.id;

  const idx = notes.filter((note) => note.id == id);

  if (idx !== -1) {
    notes.splice(idx, 1);
    const response = h.response({
      status: "success",
      message: "Catatan berhasil dihapus",
    });
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: "fail",
      message: "Catatan gagal dihapus. Id tidak ditemukan",
    });
    response.code(404);
    return response;
  }
};
module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNotebyIDHandler,
  editNotebyIDHandler,
  deletenotebyIDhandler,
};
