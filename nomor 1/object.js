// membuat object literal
// let mahasiswa = {
//     nama: 'Sandhika',
//     energi: 10,
//     //method
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         // kalo pake ` ` namanya string literal 
//         console.log(`Hallo ${this.nama},selamat makan!`);
//     }
// }

// ==========================================

// ======== function declaration =============
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // buat method 
//     mahasiswa.makan = function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     //buat method
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain`);
//     }
//     return mahasiswa;
// }
// // instansiasi 
// let shandika = Mahasiswa('shandika', 10);
// let doddy = Mahasiswa('Doddy', 20);
// ====================================

// ========== constructor ===========
function Mahasiswa(nama, energi) {
    // let mahasiswa = {};
    this.nama = nama;
    this.energi = energi;

    // buat method 
    this.makan = function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
    //buat method
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama}, selamat bermain`);
    }
    // return mahasiswa;
}
// instansiasi 
let shandika = new Mahasiswa('shandika', 10);
// let shandika = Mahasiswa('shandika', 10);
// shandika.main(5); 
let doddy = new Mahasiswa('Doddy', 20);