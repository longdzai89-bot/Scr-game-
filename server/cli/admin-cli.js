import bcrypt from 'bcryptjs'; import {db} from '../config/db.js'; import {env} from '../config/env.js'; const [cmd]=process.argv.slice(2);
if(cmd==='create-admin'){const email=process.env.ADMIN_EMAIL||'admin@example.com',password=process.env.ADMIN_PASSWORD||'ChangeMe123!';const h=await bcrypt.hash(password,10);db.prepare(`INSERT INTO users(email,password,name,role) VALUES(?,?,?, 'admin') ON CONFLICT(email) DO UPDATE SET password=excluded.password,role='admin'`).run(email,h,'Administrator');console.log(`Admin: ${email}`)}
else if(['start','stop','status','restart'].includes(cmd)) console.log(`server ${cmd} (dùng process manager để điều khiển tiến trình thực tế)`);
else console.log('Usage: start|stop|status|restart|create-admin');
