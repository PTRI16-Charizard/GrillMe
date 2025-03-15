import express from 'express';
import Flashcard from '../models/flashcard';

const router = express.Router();

// Get flashcards
router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    return res.json(flashcards);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching flashcards', error: error})
  }
})

// Get random flashcard
router.get('/random', async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    const randomCard = flashcards[Math.floor(Math.random() * flashcards.length)];
    return res.json(randomCard);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching random flashcard', error: error})
  }
})

// Create flashcard
router.post('/create', async (req, res) => {
  try {
    const { question, answer, category } = req.body;
    const newFlashcard = new Flashcard({
      question: question,
      answer: answer,
      category: category
    });

    const savedFlashcard = await newFlashcard.save();
    return res.status(200).json(savedFlashcard)
  } catch (error) {
    return res.status(500).json({ message: 'Error creating flashcard', error: error})
  }
})

// Update flashcard
router.put('/:id', async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({ message: 'Error updating flashcard', error: error})
  }
})

// Delete flashcard
router.put('/:id', async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting flashcard', error: error})
  }
})

export default router;