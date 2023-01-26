import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    match: [
      /^[a-zA-Z0-9éèàç\s]+$/,
      "Le nom de la tâche ne peut contenir que des lettres et des chiffres.",
    ],
    required: [true, "Veuillez entrer le nom de la tâche."],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const TodoModel = mongoose.model("Todo", TodoSchema);
