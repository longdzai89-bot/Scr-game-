import jwt from 'jsonwebtoken'; import {env} from '../config/env.js'; import {User} from '../models/user.js';
export function requireAuth(req,res,next){try{const p=jwt.verify((req.headers.authorization||'').replace('Bearer ',''),env.JWT_SECRET);const u=User.findById(p.id);if(!u||u.banned)throw Error();req.user=u;next()}catch{res.status(401).json({error:'Unauthorized'})}}
export function requireAdmin(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({error:'Admin only'});next()}
export function authSocket(socket,next){try{socket.user=jwt.verify(socket.handshake.auth?.token||'',env.JWT_SECRET);next()}catch{next(new Error('Unauthorized'))}}
