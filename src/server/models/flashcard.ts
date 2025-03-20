import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String },
  category: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  preset: { type: Boolean },
  createdAt: {type: Date, default: Date.now }
});

export default mongoose.model('Flashcard', flashcardSchema);