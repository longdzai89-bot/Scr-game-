export const tokenFrom=req=>(req.headers.authorization||'').replace('Bearer ','');
