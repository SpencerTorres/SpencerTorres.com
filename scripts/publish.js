const SFTP = require('sftp-upload'),
  fs = require('fs-extra');

fs.copySync('build/static', 'build/deploy/static');
fs.copySync('build/index.html', 'build/deploy/index.html');
fs.copySync('build/asset-manifest.json', 'build/deploy/asset-manifest.json');

let options = {
  host:'',
  username:'jax',
  path: 'build/deploy',
  remoteDir: '/home/jax/sites/spencertorres/web',
  privateKey: fs.readFileSync('upload.ssh', 'utf8'),
  passphrase: fs.readFileSync('upload.password', 'utf8').trim()
},
sftp = new SFTP(options);

sftp.on('error', (err) => {
  throw err;
})
.on('uploading', (pgs) => {
  console.log('Uploading', pgs.file);
  console.log(pgs.percent+'% completed');
})
.on('completed', () => {
  console.log('Upload Completed');
})
.upload();
