import {db} from '../config/db.js';
export const Score={add:(uid,gid,score)=>db.prepare('INSERT INTO scores(user_id,game_id,score) VALUES(?,?,?)').run(uid,gid,score),top:()=>db.prepare(`SELECT u.id,u.name,MAX(s.score) score FROM scores s JOIN users u ON u.id=s.user_id GROUP BY u.id ORDER BY score DESC LIMIT 100`).all()};
