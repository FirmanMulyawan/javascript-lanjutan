// ambil semua elemen video
// merubah nodeList jadi Array 
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);


// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(elemenVideo => elemenVideo.textContent.includes('JAVASCRIPT LANJUTAN'))


    // ambil durasi masing-masing video
    .map(item => item.dataset.duration)

    //ubah durasi menjadi float lalu ubah menit jadi detik
    .map(waktu => {
        // memecah 10:30 -> [10:30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })


    // jumlahkan semua detiknya 
    .reduce((total, detik) => total + detik);


// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Total durasi
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} Menit, ${detik} detik.`;


// jumlah Video
const jmlVideo = videos.filter(elemenVideo => elemenVideo.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;



// simpan di  DOM
console.log(jmlVideo);