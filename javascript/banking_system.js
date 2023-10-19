// Implementasi class 'BankAccount'
class BankAccount {
  // Mendefinisikan constructor dengan properti saldo
  constructor(balance = 0) {
    this.saldo = balance;
    this.transactionHistory = [];
  }

  // Proses implementasi dengan metode 'deposit(amount)'
  async deposit() {
    try {
      // melakukan inisialisasi input 'deposit(amount)'
      let amount = parseFloat(
        prompt('Masukkan jumlah deposit yang ingin anda setorkan: ')
      );
      if (isNaN(amount)) {
        alert('Maaf, transaksi dibatalkan');
        throw new Error('transaksi telah dibatalkan oleh sistem');
      }

      if (!isNaN(amount) && amount > 0 && amount != null) {
        const cancelDeposit = !confirm(
          'Apakah anda yakin ingin melakukan transaksi?'
        );
        if (!cancelDeposit) {
          this.saldo += amount;
          this.transactionHistory.push({
            type: 'Deposit',
            amount,
            date: new Date(),
          });
          this.showTransactionHistory();
          this.showBalance();
          await this.showMessage(
            `Setoran Deposit Rp. ${amount} Berhasil, Sekarang sisa saldo anda sebesar Rp. ${this.saldo}`
          );
        } else {
          alert('Transaksi dibatalkan.');
          throw new 'transaksi telah dibatalkan oleh user'();
        }
      } else {
        await this.showMessage(
          'Proses transaksi gagal, silakan masukkan input yang benar'
        );
        throw new Error('proses invalid');
      }
    } catch (err) {
      console.error('Pesan error : ', err);
    }
    return this.saldo;
  }

  // Proses implementasi dengan metode 'withdraw'
  async withdraw() {
    try {
      // Inisialisasi jumlah input penarikan
      let amount = parseFloat(prompt('Masukkan jumlah yang ingin anda tarik'));

      if (isNaN(amount)) {
        alert('Maaf, transaksi ini telah dibatalkan');
        throw new Error('transaksi telah dibatalkan oleh sistem.');
      }

      if (!isNaN(amount) && amount > 0 && amount <= this.saldo) {
        const cancelWithdraw = !confirm(
          'Apakah anda yakin ingin melakukan transaksi?'
        );
        if (!cancelWithdraw) {
          // melakukan konfirmasi transaction
          this.saldo -= amount;
          this.transactionHistory.push({
            type: 'Deposit',
            amount,
            date: new Date(),
          });
          this.showTransactionHistory(); // memanggil fungsi showtransaction untuk menampilkan riwayat transaksi.
          this.showBalance();
          await this.showMessage(
            `Setoran Deposit Rp. ${amount} Berhasil, Sekarang sisa saldo anda sebesar Rp. ${this.saldo}`
          );
        } else {
          alert('Transaksi telah dibatalkan!');
          throw new 'transaksi telah dibatalkan oleh user'();
        }
      } else {
        await this.showMessage(
          'Proses transaksi gagal, silakan masukkan input yang benar'
        );
        throw new Error('proses invalid');
      }
    } catch (err) {
      console.error('Pesan error : ', err);
    }
    return this.saldo;
  }

  // function untuk menampilkan riwayat transaksi
  showTransactionHistory() {
    const transactionsList = document.getElementById('transactions');
    transactionsList.innerHTML = '';
    this.transactionHistory.forEach((transaction, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${transaction.type} of Rp. ${
        transaction.amount
      } on ${transaction.date}`;
      transactionsList.appendChild(listItem);
    });
  }

  async showMessage(msg) {
    return new Promise((resolve) => {
      // Mengatur timeout untuk menampilkan pesan dalam 3 detik.
      setTimeout(() => {
        document.getElementById('saldo').innerHTML =
          ' Rp. ' + this.saldo.toString();
        alert(msg);
        resolve('success');
      }, 3000); // Timeout 3000 milidetik
    });
  }

  showBalance() {
    // mengembalikan saldo dari akun bank
    return this.saldo;
  }
}

class DateTransaction extends BankAccount {
  constructor(balance = 0) {
    super(balance);
    this.dateTransaction = new Date(); // Inisialisasi properti dateTransaction dengan tanggal saat ini.
  }

  dateProcess() {
    // Memproses tanggal transaksi.
    var current_date =
      this.dateTransaction.getDate() +
      '-' +
      (this.dateTransaction.getUTCMonth() + 1) +
      '-' +
      this.dateTransaction.getFullYear();
    document.getElementById('date').innerHTML =
      'Date: ' + current_date.toString();
    console.log('Transaction at :', current_date);
  }
}

// Membuat objek baru dari kelas DateTransaction.
const date = new DateTransaction();

// Membuat objek baru dari kelas BankAccount.
const bankAccount = new BankAccount();

// Memanggil metode dateProcess dari objek DateTransaction.
date.dateProcess();
