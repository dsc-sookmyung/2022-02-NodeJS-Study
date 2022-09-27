let path = require('path');

let directories=['Users','Mars','docs'];
let dirStr=directories.join();
console.log('dir : '+dirStr);

let dirStr2=directories.join(path.sep);
console.log('dir2 : '+dirStr2);

let filepath=path.join('/Users/Mars','notepad.exe');
console.log('filepath : '+filepath);

let dirname=path.dirname(filepath);
console.log('dirname : '+dirname);

let basename=path.basename(filepath);
console.log('basename : '+basename);

let extname=path.extname(filepath);
console.log('extname : '+extname);
