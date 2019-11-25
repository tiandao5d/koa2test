'use strict';
import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import config from '../config';

gulp.task('hashFiles', function (cb) {
	let allFile = getAllFile('rev');
	let buildFiles = getAllFile('build');
	let allObj = {};
	buildFiles = buildFiles.filter(o => (o.ext === '.js' || o.ext === '.css'));
	allFile.forEach(o => {
		let str = fs.readFileSync(o.src).toString().trim();
		let obj = JSON.parse(str);
		let k, v, pt;
		for ( k in obj ) {
			v = obj[k];
			v = v.split('v=')[1];
			pt = path.parse(k);
			v = allObj[k] = obj[k] = pt.name + '.' + v + pt.ext;
		}
	});
	let indexRead = fs.readFileSync(config.rev.src).toString();
	for ( let k in allObj ) {
		buildFiles.some(o => {
			if ( o.base === k ) {
				fs.renameSync(o.src, path.join(o.dir, allObj[k]));
				return true;
			}
		});
		indexRead = indexRead.replace(k, allObj[k]);
	}
	fs.writeFileSync(config.rev.src, indexRead);
	cb()
});

function getAllFile(src) {
	let arr = [];
	let stat = fs.statSync(src);
	let pt = null;
	let ts = +new Date();
	let newBase = '';
	if ( stat.isDirectory() ) {
		getDir(src);
	} else {
		arr.push(src);
	}
	function getDir(dir) {
		fs.readdirSync(dir).forEach(s => {
			s = path.join(dir, s);
			stat = fs.statSync(s);
			if ( stat.isFile() ) {
				pt = path.parse(s);
				newBase = (pt.name + '.' + ts + pt.ext); // 加入时间戳
				arr.push({
					name: pt.name,
					ext: pt.ext,
					dir: pt.dir,
					src: s,
					newSrc: path.join(pt.dir, newBase),
					base: pt.base,
					newBase
				});
			} else if ( stat.isDirectory() ) {
				getDir(s);
			}
		})
	}
	return arr;
}
