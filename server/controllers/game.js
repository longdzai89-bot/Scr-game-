import {applyAction} from '../services/game.js'; export const gameAction=(req,res)=>{try{res.json(applyAction(req.params.id,req.body))}catch(e){res.status(404).json({error:e.message})}};
