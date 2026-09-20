import {db} from '../config/db.js';
// Model phòng game và trạng thái JSON.
export const Game={list:()=>db.prepare('SELECT * FROM games ORDER BY created_at DESC').all(),get:id=>db.prepare('SELECT * FROM games WHERE id=?').get(id),create:(id,name,owner)=>db.prepare('INSERT INTO games(id,name,owner_id) VALUES(?,?,?)').run(id,name,owner),update:(id,state,status)=>db.prepare('UPDATE games SET state=?,status=? WHERE id=?').run(JSON.stringify(state),status,id),remove:id=>db.prepare('DELETE FROM games WHERE id=?').run(id)};
