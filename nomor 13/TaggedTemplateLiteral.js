// Tagged Template = bentuk yang lebih kompleks dari template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function
// const nama = 'sandhika Galih Ak';
// const umur = 34;

// function coba(strings, nama, umur, alamat) {
// function coba(strings, ...values) {
//     // return values; // sandhika Galih, 34
//     // return strings; //["Hallo, nama saya ", ", saya ", " tahun.", raw: Array(3)]
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
//     });
//     return result;
// }
// // template literal
// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);
// ==========================================

// ===== pake reduce
// function coba(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// ==========================================

// ==== HighLight
const nama = 'Firman Mulyawan';
const umur = 34;
const email = 'firmanmulyawan@gmail.com';
function HighLight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}
// function HighLight
const str = HighLight`Hallo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}`;
// console.log(str);

document.body.innerHTML = str;

// ===================================
// tagged Template digunakan untuk 
//   - Escaping HTML Tags 
//   - Translation & Internationalization
//   - Styled Components 


// - Translation & Internationalization  
// let name = 'Firman';
// let amount = 56;
// const hallo = i18n`Hello ${name}, you have ${amount}: in your bank account.`;
// console.log(hallo);