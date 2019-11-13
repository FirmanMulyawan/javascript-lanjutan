// closure adalah merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) didalam function tersebut.

// lexical scope 
// function init() {
//     let nama = 'shandika';
//     let umur = 33;
//     // local variabel
//     function tampilNama() { //inner function (closure*)
//         // let nama = 'galih';  kalo gini bukan closure
//         console.log(nama);
//         console.log(umur);
//         // akses ke parent variabel (lexical scope) sampe ke global object
//     }
//     // tampilNama();
//     // console.log(tampilNama);
//     // hasilnya = function tampilNama() { 
//     //     console.log(nama); 
//     // }

//     console.dir(tampilNama);
//     //hasilnya object ada closure karena membutuhkan variabel nama dari parentnya
// }
// init();
// ==================================

// ==================================
// function init() {
//     // let nama = 'shandika'; 
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     // tampilNama();
//     return tampilNama;
// }
// let panggilNama = init();
// // function factories
// // panggilNama();  //shandika
// panggilNama('galih'); 

// ====== lebih ringkas 
// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('galih');
// panggilNama('akmal'); 
// ================

// kenapa menggunakan closure 
// - untuk membuat function factories 
// - untuk membuat private method 



// ====== membuat function factories 
// function ucapkanSalam(waktu) {
//     return function (nama) { //inner function
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// dibawah adalah factories function yaitu membuat function sesuai dengan function yang  lain
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('malam');

// // kalo dijalankan 
// // selamatPagi('firman');
// // selamatSiang('Aldila');
// console.dir(selamatMalam('firman'));
// =======================================

// ========== private method ======== 
// let counter = 0;
// let add = function () {
//     return ++counter;
// }
// counter = 10; //masalahnya  di sini dia mereset counter jadi 10
// console.log(add()); //1 setelah penambahan 10 11
// console.log(add()); //2 setelah penambahan 10 12
// console.log(add()); //3 setelah penambahan 10 13
// ==============================

// ======== solusi private method ======
// let add = function () {
//     let counter = 0;
//     return ++counter;
// }
// counter = 10;
// console.log(add()); // 1
// console.log(add()); // 1
// console.log(add()); // 1
// ========================================

// ============== pake closure ===========
let add = (function () {
    // counter jadi private ga bisa diakses dari luar tapi nilai tetap dipertahakan karena dia menjadi closure
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

// let a = add();
// console.log(a()); // 1
// console.log(a()); // 2
// console.log(a()); // 3
counter = 100;
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3