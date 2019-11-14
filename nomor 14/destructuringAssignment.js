// destructuring variabel / Assignment = Expression pada Javascript yang membuat kita dapat membongkar nilai array atau property dari object kedalam variabel yang terpisah.
// ===================================

// ==== Destructuring Assignment Array =====
// const coba = ['satu', 'dua', 'tiga'];
// const satu = coba[0];


// const [a, b, c] = coba;
// // console.log(a); // "satu"
// console.log(b); // "dua"
// console.log(c); // "tiga"
// document.body.innerHTML = `<h4 class="box">${a}</h4> ${b}`;



// const perkenalan = ['Halo', 'nama', 'saya', 'sandhika galih'];

// skipping item
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//swap items
// let a = 40;
// let b = 50;
// console.log(`ini adalah nilai 1.a ${a}`);
// console.log(`ini adalah nilai 1.b ${b}`);
// // [a, b] = [b, a];
// // let temp = a; // gelas diisi air
// // a = b; // air diganti minyak
// // b = temp; // 
// [a, b] = [b, a];
// console.log(`ini adalah nilai 2.a ${a}`);
// console.log(`ini adalah nilai 2.b ${b}`);
// ======================================

// ======= return value pada function =======
// function coba() {
//     return [1, 2];
// };

// // const a = coba();
// // console.log(a[1]); //2

// const [a, b] = coba();
// console.log(a);


// contoh pake rest parameter
// angka 1 akan masuk ke a, sisanya akan masuk ke vales dan menjadi array
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);
// console.log(b);


// === Destructuring Object ====
// const mhs = {
//     nama: 'Firman Mulyawan',
//     umur: 25,
//     email: 'firmanmulyawan491@gmail.com',
//     domisili: 'Bandung',
//     agama: 'islam'
// };

// const nama = mhs.nama; // Firman Mulyawan

// nama variabel harus sama dengan nama properti di object
// const { nama, umur, email, domisili, agama } = mhs;
// console.log(nama);
// document.body.innerHTML = `${nama} ${umur} ${agama}`;


//======= Assignment tanpa deklarasi object ===
// const mhs = {
//     nama: 'Firman Mulyawan',
//     umur: 25,
//     email: 'firmanmulyawan491@gmail.com',
//     domisili: 'Bandung',
//     agama: 'islam'
// };
// ({ nama, umur, email, domisili, agama } = {
//     nama: 'Firman Mulyawan',
//     umur: 25,
//     email: 'firmanmulyawan491@gmail.com',
//     domisili: 'Bandung',
//     agama: 'islam'
// });
// console.log(nama);

// ====== Assign ke variabel baru =======
// const mhs = {
//     nama: 'Firman Mulyawan',
//     umur: 25,
//     email: 'firmanmulyawan491@gmail.com',
//     domisili: 'Bandung',
//     agama: 'islam'
// };
// const { nama: n, umur: u, email: e, domisili, agama } = mhs;
// console.log(e);

// ======== Memberikan Default Value ========
// const mhs = {
//     nama: 'Firman Mulyawan',
//     umur: 25,
//     email: 'firmanmulyawan491@gmail.com',
//     domisili: 'Bandung',
//     agama: 'islam',
//     golongan: 'pemerdua'
// };
// // default value di golongan
// const { nama: n, umur: u, email: e, domisili: d, agama: a, golongan: g = 'golongan pemersatu' } = mhs;
// console.log(g);

// =========================================

// ===== Rest Parameter ============
// const mhs = {
//     nama: 'Firman Mulyawan',
//     umur: 25,
//     email: 'firmanmulyawan491@gmail.com',
//     domisili: 'Bandung',
//     agama: 'islam',
//     golongan: 'pemerdua'
// };
// // default value di golongan
// // value akan menjadi object
// const { nama, ...value } = mhs;
// console.log(value);
// ======================================


// ===== Mengambil field pada object, setelah dikirim sebagai parameter untuk function 

const mhs = {
    id: 123,
    nama: 'Firman Mulyawan',
    umur: 25,
    email: 'firmanmulyawan491@gmail.com',
    domisili: 'Bandung',
    agama: 'islam',
    golongan: 'pemerdua'
};

function getIdMhs({ id }) {
    return id;
};

console.log(getIdMhs(mhs));