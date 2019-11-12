// ======= function Declaration =====
// ==== memisahkan method 
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
    //buat method
    main: function (jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama}, selamat bermain`);
    },
    tidur: function (jam) {
        this.energi = this.energi + jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`);
    }
};
function Mahasiswa(nama, energi) {
    // O nya harus besar Object
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // buat method 
    // mahasiswa.makan = function (porsi) {
    //     this.energi = this.energi + porsi;
    //     console.log(`Halo ${this.nama}, selamat makan!`);
    // }
    // //buat method
    // mahasiswa.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`Hallo ${this.nama}, selamat bermain`);
    // }
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // // harus ditambahkan jika ada method baru
    // mahasiswa.tidur = methodMahasiswa.tidur;
    return mahasiswa;
}
// instansiasi 
let shandika = Mahasiswa('shandika', 10);
let doddy = Mahasiswa('Doddy', 20);