// template Literal
// menggunnakan `` back tick
// - multi-line String 
// - Embedded Expression 
// - HTML Fragments
// - Expression Interpolation
// - Tagged Template
// ==================================

// ======= HTML Fragments ===========
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     nrp: '989550',
//     email: 'sandhika@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);
// =========================================

// ======== Looping HTML fragment ========
// const mhs = [
//     {
//         nama: 'sandhika Galih',
//         email: 'sandhika@gmail.com'
//     },
//     {
//         nama: 'Doddy Ferdiansyah',
//         email: 'doddy@gmail.com'
//     },
//     {
//         nama: 'Erik',
//         email: 'erik@gmail.com'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// =====================================

// =========== conditionals =============
// ternary
// const lagu = {
//     judul: `Tetap Dalam Jiwa`,
//     penyanyi: ' Isyana sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ``}</li>
//     </ul>
// </div>`;
// ==================================

// ========= HTML Fragment bersarang
// Nested
const mhs = {
    nama: 'Sandhika Galih',
    smester: 5,
    mataKuliah: ['Rekayasa Web', 'Analisis dan Perancangan sistem Informasi', 'Pemrograman Sistem Interaktif', 'Perancangan Sistem Berorientasi Object']
};
function cetakMatakuliah(matKul) {
    return `
    <ol>
    ${matKul.map(mk => `<li>${mk}</li> `).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="smester">Smester : ${mhs.smester}</span>
    <h4>mata Kuliah :</h4>
    ${cetakMatakuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;