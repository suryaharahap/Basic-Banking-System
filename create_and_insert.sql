/*
Membuat tabel-tabel sesuai dengan ERD menggunakan DDL,
serta membuat operasi CRUD dengan DML. */

-- CREATE TABLE CUSTOMER
CREATE TABLE IF NOT EXISTS customer (
    id_customer SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(85),
    phone_number VARCHAR(20),
    address TEXT,
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data ke tabel "customer"
INSERT INTO customer (first_name, last_name, email, phone_number, address, date_of_birth)
VALUES
    ('Sky', 'Doe', 'skyjohn.doe@gmail.com', '123-456-7890', 'Bandung', '1990-01-15'),
    ('Nanda', 'Pernando', 'nanda.pernando@gmail.com', '987-654-3210', 'Jakarta', '1985-05-20'),
    ('Dedek', 'Kamarudin', 'dedek.kamarudin@gmail.com', '555-123-7890', 'Palembang', '1978-11-10');

-- Membaca data dari table customer berdasarkan ID
SELECT * FROM customer WHERE id_customer = 1;

-- Mengupdate data customer berdasarkan ID
UPDATE customer
SET first_name = 'Jahira', last_name = 'Widy'
WHERE id_customer = 1;

-- Menghapus data customer berdasarkan ID tertentu
DELETE FROM customer WHERE id_customer = 1;


/* PEMBATAS Akhir TABLE ------------CUSTOMER -------------- */

-- CREATE TABLE ACCOUNT
CREATE TABLE IF NOT EXISTS account (
    id_account SERIAL PRIMARY KEY,
    account_number VARCHAR(20) UNIQUE NOT NULL ,
    account_type VARCHAR(50) NOT NULL,
    balance DECIMAL(10, 2) DEFAULT 0.0,
    type_account VARCHAR(255),
    customer_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customer(id_customer)
);

INSERT INTO account (account_number, account_type, balance, type_account, customer_id)
VALUES
    ('12345', 'Savings', 1000.00, 'Personal', 1),
    ('67890', 'Checking', 500.00, 'Business', 2);

-- Membaca data account berdasarkan ID
SELECT * FROM account WHERE id_account = 1;

-- Mengupdate data account berdasarkan ID
UPDATE account
SET account_type = 'Personal', balance = 2500.00
WHERE id_account = 1;

-- Menghapus data account berdasarkan ID tertentu
DELETE FROM account WHERE id_account = 1;


/* Pembatas Akhir Table dari account --------------------------- */

-- CREATE TABLE TRANSACTION
CREATE TABLE IF NOT EXISTS transaction (
    transaction_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES account(id_account) ON DELETE CASCADE,
    transaction_type VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data ke tabel "transaction"
INSERT INTO transaction (customer_id, transaction_type, amount)
VALUES
    (1, 'Deposit', 500.00),
    (1, 'Withdrawal', 200.00),
    (1, 'Deposit', 300.00);

-- Membaca data transaction berdasarkan ID
SELECT * FROM transaction WHERE transaction_id = 1;

-- Mengupdate data transaction berdasarkan ID
UPDATE transaction
SET amount = 800.00
WHERE transaction_id = 1;

-- Menghapus data transaction berdasarkan ID tertentu
DELETE FROM transaction WHERE transaction_id = 1;





