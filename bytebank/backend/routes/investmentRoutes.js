import { Router } from 'express';
import { getInvestments, updateInvestmentValue } from '../controllers/investmentController.js';

const router = Router();

router.get('/', getInvestments);
router.put('/:type', updateInvestmentValue);

export default router;
