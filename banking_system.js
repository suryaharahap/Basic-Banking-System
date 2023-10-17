const BankAccount = require("./bank_account");

const userAccount = new BankAccount(1000);

function tampilkanSaldo() {
  document.getElementById("saldo").textContent = `$${userAccount.balance}`;
}

function tambahTransaksi(transaksi) {
  const transactionsList = document.getElementById("transactions");
  const listItem = document.createElement("li");
  listItem.textContent = transaksi;
  transactionsList.appendChild(listItem);
}

document
  .getElementById("tmbsaldobtn")
  .addEventListener("click", async function () {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
      try {
        const result = await userAccount.deposit(amount);
        tampilkanSaldo();
        tambahTransaksi(result);
      } catch (error) {
        alert(error);
      }
    }
  });

document
  .getElementById("kurangisaldobtn")
  .addEventListener("click", async function () {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
      try {
        const result = await userAccount.withdraw(amount);
        tampilkanSaldo();
        tambahTransaksi(result);
      } catch (error) {
        alert(error);
      }
    }
  });

tampilkanSaldo();
