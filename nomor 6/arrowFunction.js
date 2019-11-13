// contoh function declaration
// function tampilPesan(nama) { //pendeklarasian
//     alert('halo' + nama);
// }
// tampilPesan('firman'); //pemanggilan
// =================================== 

// ===================================
// contoh function expression 
// let tampilPesan = function (nama) {
// alert(`Hallo ` + nama);
// return `Hallo ${nama}`;
// }
// tampilPesan('shandika'); //pemanggilan 
// console.log(tampilPesan('Firman'));
// =================================

// ========= arrow function ========
// bentuk lain yang lebih ringkas dari function Expression 

// let tampilPesan = (nama) => {
//     alert(`hallo ${nama}`);
// }
// tampilPesan('aldila anastasya');

// ``````````````````````````````````
// contoh arrow function 1 parameter 
// const tampilnama = (nama) => { return `Hello, ${nama}` };
// console.log('Doddy Ferdiansyah');

// atau kalo parameter 1 ga usah pake kurung
// kalo isi return doang ga usah pake return dan {} disebutnya implisit return
// const tampilnama = nama => `Hello, ${nama}`;
// console.log('Doddy Ferdiansyah');


// kalo ga ada parameter 
// const tampilPesan = () => `Hello World`;
// console.log(tampilPesan());
// =================================

// ========== arrow function 2 parameter ====
// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

// ================================

// ================================
let mahasiswa = ['sandhika galih', 'Doddy Ferdiansyah', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);
// ada array baru yang isinya [14, 17, 4]

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);  //bentuk array

// ==== pengen seperti object ({})
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
console.log(jumlahHuruf);
console.table(jumlahHuruf);
