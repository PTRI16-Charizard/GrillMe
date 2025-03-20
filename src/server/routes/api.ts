import express, {Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import Flashcard from '../models/flashcard';
import User from '../models/user';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth token
router.post('/auth/google', async (req: Request, res: Response): Promise<any> => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if(!payload) {
      return res.status(404).json({ message: 'Payload token missing' });
    }

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

/* Preset */

// Get flashcards of preset questions
router.get('/presets/:category/:userId', async (req: Request, res: Response): Promise<any> => {
  try {
    const { category, userId } = req.params;

    // attempting to filter out already answered preset questions, not complete?
    const answeredPresets = await Flashcard.find(
      { user: userId, preset: true },
      'question'
    );
    console.log('answeredPresets: ', answeredPresets);

    const answeredPresetsSet = new Set(answeredPresets.map(element => element.question));
    // console.log('answeredPresetsSet', answeredPresetsSet);
    
    
    const presetQuestions = await Flashcard.find({
      category,
      preset: true,
      question: { $nin: [...answeredPresetsSet] }
    })
    return res.json(presetQuestions);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching preset questions', error: error})
  }
})

// Answer a preset question
router.post('/answer', async (req: Request, res: Response): Promise<any> => {
  try {
    const { question, answer, category, user, preset } = req.body;

    const newFlashcard = new Flashcard({
      question: question,
      answer: answer,
      category: category,
      user: user,
      preset: preset
    });

    const savedFlashcard = await newFlashcard.save();
    return res.status(200).json(savedFlashcard)
  } catch (error) {
    return res.status(500).json({ message: 'Error answering preset question', error: error})
  }
})


/*  My Collection */

// Get answered questions
router.get('/answered/:category/:userId', async (req: Request, res: Response): Promise<any> =>{
  try {
    const { category, userId } = req.params;

    const answeredQuestions = await Flashcard.find({
      category,
      user: userId
    })
    return res.json(answeredQuestions);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching answered questions', error: error})
  }
})

// Update flashcard
router.put('/update/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const { answer, userId } = req.body;
    const user = userId;
    
    const flashcardToBeUpdated = await Flashcard.findById(req.params.id);
    if (!flashcardToBeUpdated) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    
    if (!flashcardToBeUpdated.user) {
      const newFlashcard = new Flashcard({
        question: flashcardToBeUpdated.question,
        answer: answer,
        category: flashcardToBeUpdated.category,
        user: userId,
      });
      
      const savedFlashcard = await newFlashcard.save();
      return res.status(200).json(savedFlashcard);
    } else {
      const updatedFlashcard = await Flashcard.findByIdAndUpdate(
        req.params.id,
        { answer, user },
        { new: true }
      );
      return res.status(200).json(updatedFlashcard);
    }
    
  } catch (error) {
    return res.status(500).json({ message: 'Error updating flashcard', error: error})
  }
})

// Delete flashcard
router.delete('/delete/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedFlashcard = await Flashcard.findByIdAndDelete(req.params.id);
    
    if (!deletedFlashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    
    return res.status(200).json({ message: 'Flashcard deleted'})
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting flashcard', error: error})
  }
})

// Get random flashcard based on userId
router.get('/:userId/random', async (req: Request, res: Response): Promise<any> => {
  try {
    const flashcards = await Flashcard.find({ user: req.params.userId});
    const randomCard = flashcards[Math.floor(Math.random() * flashcards.length)];
    return res.json(randomCard);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching random flashcard', error: error})
  }
})

// Create a custom flashcard
router.post('/create', async (req: Request, res: Response): Promise<any> => {
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

export default router;