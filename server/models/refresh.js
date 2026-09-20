import {db} from '../config/db.js';
export const Refresh={add:(uid,t,exp)=>db.prepare('INSERT INTO refresh_tokens(user_id,token,expires_at) VALUES(?,?,?)').run(uid,t,exp),get:t=>db.prepare('SELECT * FROM refresh_tokens WHERE token=?').get(t),del:t=>db.prepare('DELETE FROM refresh_tokens WHERE token=?').run(t)};
