### Implementasi API Manajemen Buku (Tanpa Database)

Kamu diminta untuk membuat sebuah API sederhana menggunakan Express yang akan digunakan untuk mengelola data buku dalam sebuah perpustakaan. Data buku akan disimpan dalam array di memori sebagai penyimpanan sementara. API ini harus dapat melakukan operasi CRUD (Create, Read, Update, Delete) untuk buku.

Detail Data Buku: Setiap buku memiliki informasi berikut:

- id (integer): ID unik untuk setiap buku.
- title (string): Judul buku.
- author (string): Penulis buku.
- year (integer): Tahun terbit buku.

Detail API:

1.  Endpoint: POST /books - Menambahkan Buku

- Fungsi: Menambahkan sebuah buku baru ke dalam array buku.
- Request Body: JSON object berisi title, author, dan year.
- Operasi: Buat ID unik untuk buku baru dan tambahkan buku tersebut ke array.
- Response: Kembalikan JSON object yang berisi pesan sukses dan data buku yang baru dibuat.

Contoh request :

```js
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
```

Contoh response

```js
{
  "message": "Buku berhasil ditambahkan",
  "book": {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  }
}
```

2. Endpoint: GET /books - Mendapatkan Semua Buku

- Fungsi: Mengembalikan seluruh buku yang ada di array.
- Response: Kembalikan JSON array yang berisi semua buku yang tersimpan.

Contoh response

```js
[
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
];
```

3. Endpoint: GET /books/:id - Mendapatkan Buku Berdasarkan ID

- Fungsi: Mengembalikan detail buku berdasarkan ID yang diberikan.
- Operasi: Cari buku dengan ID yang sesuai di array dan kembalikan data buku tersebut.
- Response: Kembalikan JSON object yang berisi data buku.
- Jika ID tidak ditemukan, kembalikan pesan error.

Contoh Response (Jika buku ditemukan) :

```js
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
```

4. Endpoint: PUT /books/:id - Memperbarui Buku Berdasarkan ID

- Fungsi: Memperbarui detail buku berdasarkan ID yang diberikan.
- Request Body: JSON object berisi title, author, dan/atau year.
- Operasi: Cari buku dengan ID yang sesuai di array, lalu perbarui data buku tersebut.
- Response: Kembalikan JSON object yang berisi pesan sukses dan data buku yang telah diperbarui.
- Jika ID tidak ditemukan, kembalikan pesan error.

Contoh Request :

```js
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1926
}
```

Contoh Response:

```js
{
  "message": "Buku berhasil diperbarui",
  "book": {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1926
  }
}
```

5. Endpoint: DELETE /books/:id - Menghapus Buku Berdasarkan ID

- Fungsi: Menghapus buku dari array berdasarkan ID yang diberikan.
- Operasi: Cari buku dengan ID yang sesuai di array dan hapus buku tersebut.
- Response: Kembalikan JSON object yang berisi pesan sukses.
- Jika ID tidak ditemukan, kembalikan pesan error.

Contoh Response :

```js
{
  "message": "Buku berhasil dihapus"
}
```

Petunjuk:

- Gunakan array di memori sebagai penyimpanan data sementara.
- Pastikan setiap ID buku unik.
- Tangani skenario ketika buku dengan ID yang diberikan tidak ditemukan.
- Berikan respon yang jelas dan informatif untuk setiap operasi.
