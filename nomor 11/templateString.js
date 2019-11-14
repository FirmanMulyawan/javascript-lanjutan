// template literal adalah string literal yang memungkinkan adanya expression didalamnya.


// ======= penulisan string Literal
// - let nama = 'sandika';
// - let nrp = "099987";
// - let email = `sandhika@gmail.com`;

// ====================================

// ====================================
// template Literal
// - menggunakan `` back tick
//   - multi-line string
//   - Embedded Expression
//   - HTML Fragments
//   - Expression Interpolation
//   - Tagged Template

// ======================================

// ========= contoh penggunaan ==========
// ` string text`

// ===== multi line string
// `string text baris 1
// string text baris 2
// string text baris 3`

// ==== embedded expression
// `string text ${expression} string text`

//===== tagged template
// tag `string text ${expression} string text`

// ==========================================

// ======= multi -line string =============
// console.log('string 1 \nstring 2');
// console.log(`string 1 

// string 2`);
// =========================================

// ====== mult-line string ( HTML Fragments)
// const mhs = {
//     nama: 'sandhika galih',
//     umur: 33,
//     nrp: '099876',
//     email: 'sandhika@unpas.ac.id'
// };
// console.log(mhs);
//                          ========
// let el = '';
// el += '<div class = "mhs">';
// el += '<h2>' + mhs.nama + '</h2>';
// el += '<span class="nrp">' + mhs.nrp + '</span>';
// el += '</div>';
// console.log(el);

//                      sama aja 
// let els = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>

// </div>`;
// console.log(els);
// ================================

// ======= embedded Expression ======
// const nama = 'sandhika galih';
// let umur = 33;
// console.log(`Hallo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

// console.log(`${alert('Hallo')}`);
// ==================================

// ====== Expression Interpolation (1) =====
let a = 10;
let b = 15;
let x = 13;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);
// console.log('Jika a = 10 dan b = 15, maka hasil penjumlahan adalah : ' + (a + b) + ', bukan ' + (2 * a + b));
// console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahan adalah: ${a + b}, bukan ${2 * a + b} `);
