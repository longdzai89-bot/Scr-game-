import {Router} from 'express'; import {Score} from '../models/score.js'; const r=Router(); r.get('/',(_,res)=>res.json(Score.top())); export default r;
