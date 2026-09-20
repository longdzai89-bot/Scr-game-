export const validate=fields=>(req,res,next)=>{const missing=fields.filter(f=>req.body?.[f]===undefined);if(missing.length)return res.status(400).json({error:`Thiếu: ${missing.join(',')}`});next()};
