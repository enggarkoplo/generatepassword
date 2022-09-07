let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generate(len) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbol = '`~!@#$%^&*()-_=+[{]}":?><';
  const number = '0123456789';

  const data = lowerAlphabet + upperAlphabet + symbol + number;
  let generator = '';
  for (let index = 0; index < len; index++) {
   generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPass() {
  const newPassword =  generate(passwordLength.value);
  password.value = newPassword;
  setTimeout(()=>{
    alert('password berhasil ter generate');
  },1000)
}

function savePass() {
  document.title = password.value;
  saveButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`passsword saya : ${document.title}`));
  saveButton.setAttribute('download','MyPassGenerate.txt');
  setTimeout(()=>{
    alert('berhasil di save');
  },1000)
}