import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import Flashcard from '../models/flashcard';
import User from '../models/user';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth token
router.post('/auth/google', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub, email, name } = payload;

    let user = await User.findOne({ googleId: sub });
    if (!user) {
      user = new User({ googleId: sub, email, name });
      await user.save();
    }

    return res.status(200).json({ message: 'User authenticated', user });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', error });
  }
})

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
    const { question, answer, category, userId } = req.body;
    const newFlashcard = new Flashcard({
      question: question,
      answer: answer,
      category: category,
      user: userId,
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