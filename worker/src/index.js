
console.log('Worker started');

function print() {
  console.log('.');
  setTimeout(print, 5000);
}

print();
