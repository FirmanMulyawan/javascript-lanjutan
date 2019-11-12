// dalam javascript ada 2 fase pada execution context
// ============================= 
// - creation (menciptakan )
// console.log(nama);
// var nama = 'shandika';
// hasilnya undefined

// mengapa itu terjadi karena ada creation phase, phase creation terjadi di conteks global
// creation phase pada global context
// - yang terjadi pada phase ini javascriptnya akan mengecek apakah ada variabel atau function didalam codingannya. itu dulu yang dia cek 
// - kalo ada dia akan membuat nama variabel diisi dengan undefined. 
// - kalo ada function maka dia akan mengisi dengan code function itu sendiri fn()
// - konsep ini disebut dengan hoisting dan yang didefinisikan adalah window = global object dan this = windows 

// ============================== 

// ======== execution phase =======
// - setelah creation chase maka execution phase
// - mengeksekusi programnya baris perbaris dari atas kebawah
// sayhello() artinya eksekusi 
// console.log(sayhello());

// var nama = 'shandika';
// var umur = 33;

// function membuat local execution context yang didalamnya terdapat creation dan execution phase
// bedanya local execution context selain mengakses windows kita juga mengakses ke yang namanya arguments, hoisting
// function sayhello() {
//     return `hello, nama saya ${nama}, saya ${umur} tahun.`;
// }

// let nama = 'shandika';
// let username = 'sandhikagalih';

// function cetakURL(username) {
//     let instagramURL = 'http://instagram.com/';
//     return instagramURL + username;

// }
// console.log(cetakURL(username));

// =============================

// ========================================
function satu() {
    var nama = 'shandika';
    console.log(nama);
}
function dua() {
    console.log(nama);
}
console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);