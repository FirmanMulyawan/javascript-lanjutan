// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// let hasilAngka = [];
// for (i = 0; i <= angka.length; i++) {
//     if (angka[i] >= 3) {
//         hasilAngka.push(angka[i]);
//     }

// }
// console.log(hasilAngka);
// ===========================================

// =========== Filter =======================
// filter mencari angka >= 3;
// const hasilAngka = angka.filter(a => a >= 3);
// console.log(hasilAngka);
// menghasilkan array baru
// =========================================

// ============= Map ========================
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(angka);
// console.log(newAngka);
// menghasilkan array baru
// =========================================

// ============== Reduce ====================
// jumlahkan seluruh elemen pada array 
// reduce memiliki2 parameter
// - accumulator = hasil dari prosesnya
// - currentValue = element array yang sedang dilooping
// contoh currentValue = 8;
// accumulator = -1 + 8 = 7 jadi accumulator= 7;
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka); //26

// ============================================

// ========== Method Chaining ===============
// cari angka > 5 
// kalikan 3 
// jumlahkan 
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const hasil = angka.filter(a => a > 5) //8,9,9
    .map(a => a * 3) //24, 27, 27
    .reduce((acc, curr) => acc + curr); //78
console.log(hasil);