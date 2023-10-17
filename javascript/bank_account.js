// Mendeklarasikan variabel saldo dengan nilai awal
let saldo = 0;

// Fungsi untuk menambahkan saldo
function tambahSaldo() {

  // Meminta pengguna memasukkan jumlah saldo yang ingin ditambahkan
  const tambah = parseFloat( // parseFloat: fungsi dalam javascript yang digunakan untuk mengubah sebuah nilai atau string menjadi bilangan desimal (float)
    prompt("Masukkan jumlah saldo yang ingin ditambahkan:") // prompt: menampilkan kotak dialog yang meminta pengguna untuk melakukan input.
  );

  // Memeriksa apakah input valid.
  if (!isNaN(tambah) && tambah >= 0) {
    saldo += tambah;
    alert(`Saldo baru adalah: ${saldo}`);
  } else {
    alert("Masukkan jumlah saldo yang valid.");
  }
}

// Implementasi fungsi untuk mengurangi saldo
function kurangiSaldo() {
  // Meminta pengguna memasukkan jumlah nominal saldo yang akan dikurangi
  const kurangi = parseFloat(
    prompt("Silahkan input jumlah saldo yang ingin dikurangi:")
  );

  // Periksa apakah input valid (bilangan positif dan tidak melebihi saldo)
  if (!isNaN(kurangi) && kurangi >= 0 && kurangi <= saldo) {
    saldo -= kurangi;
    alert(`Saldo baru adalah: ${saldo}`);
  } else {
    alert("Masukkan jumlah saldo yang valid dan tidak melebihi saldo saat ini.");
  }
}

// Fungsi untuk menampilkan saldo saat ini di halaman index.html
function tampilkanSaldo() {
  document.getElementById("saldo").textContent = saldo;
}
  
// Event listener untuk tombol "Tambah Saldo"
document.getElementById("tmbsaldobtn").addEventListener("click", function() {
  tambahSaldo();
  tampilkanSaldo();
});
  
// Event listener untuk tombol "Kurangi Saldo"
document.getElementById("kurangisaldobtn").addEventListener("click", function() {
  kurangiSaldo();
  tampilkanSaldo();
});
  