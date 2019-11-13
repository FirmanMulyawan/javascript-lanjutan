// let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: mahasiswa.length }));
// console.table(jumlahHuruf);


// Konsep this pada Arrow Function

//membuat object dengan constructor function
// const Mahasiswa = function () {
//     this.nama = 'shandika';
//     this.umur = 33;
//     // method
//     this.sayHelo = function () {
//         console.log(`Hallo,nama saya ${this.nama}, dan nama saya ${this.umur} tahun. `);
//     }
//     // console.log(this);
// }

// const shandika = new Mahasiswa();
// =============================

// ======= jadi arrow function 
// sebetulnya tidak ada konsep this di arrow function
// const Mahasiswa = function () {
//     this.nama = 'shandika';
//     this.umur = 33;
//     // method
//     this.sayHelo = () => {
//         console.log(`Hallo,nama saya ${this.nama}, dan nama saya ${this.umur} tahun. `);
//     }

// }

// const shandika = new Mahasiswa();

// ======= object literal =======
// const mhs1 = {
//     nama: 'sandhika',
//     umur: 33,
//     // sayHelo: function () {
//     sayHelo: () => { // this.nama dan this.umur undefined
//         // arrow function tidak memiliki this 
//         console.log(`hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// =================================== 

// ======================================
// const Mahasiswa = function () {
//     this.nama = 'shandika';
//     this.umur = 33;
//     // method
//     this.sayHelo = function () {
//         console.log(`Hallo,nama saya ${this.nama}, dan nama saya ${this.umur} tahun. `);
//     }
//     // arrow function mencari thisnya di lexical  scope
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
//     // console.log(this);
// }

// const shandika = new Mahasiswa();

// =================================
const box = document.querySelector('.box');

box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    //toggle akan menambahkan class baru jika belom ada, atau menghilangkan class jika ada
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});