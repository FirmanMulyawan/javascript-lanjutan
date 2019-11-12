// ======= function Declaration =====
// ==== memisahkan method 
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     //buat method
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain`);
//     },
//     tidur: function (jam) {
//         this.energi = this.energi + jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// };
// // mengubah function declaration menjadi constructor function 
// function Mahasiswa(nama, energi) {
//     // O nya harus besar Object
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }
// // instansiasi 
// let shandika = Mahasiswa('shandika', 10);
// let doddy = Mahasiswa('Doddy', 20);

// ====================================== 



// ======= inheritance prototype =====
// function Mahasiswa(nama, energi) {
//     // O nya harus besar Object
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // pake this dibelakang layar sebetulnya javascript membuatkan varaibel yang nama nya this
//     // let mahasiswa = {}; 
//     // let this = Object.create(Mahasiswa.prototype); //parent dibelakang layar
//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa;
//     // return this;  // dibelakang layar
// }
// // tidak membuat fungsi baru, 
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Bermain`;
// }
// Mahasiswa.prototype.tidur = function (tidur) {
//     this.energi += tidur * 2;
//     return `halo ${this.nama}, Selamat tidur!. `;
// }
// let shandika = new Mahasiswa('Shandika', 10);

// ==========================================

//==  versi class dari inheritance prototype ==
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat Bermain`;
    }
    tidur(tidur) {
        this.energi += tidur * 2;
        return `halo ${this.nama}, Selamat tidur!. `;
    }
}
let firman = new Mahasiswa('Firman ', 10);
let anwar = new Mahasiswa('Anwar', 20);