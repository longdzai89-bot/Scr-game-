import {exec} from 'child_process'; export const control=action=>new Promise(resolve=>exec(`echo ${action}`,(_,stdout)=>resolve(stdout.trim())));
