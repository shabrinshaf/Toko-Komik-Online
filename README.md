FINAL PROJEK "Toko Komik" - Shabrina Hikmah Shafiyyah

================== Deskripsi Proyek =======================
Program ini bertema Toko Komik Online yang memungkinkan pengguna untuk melihat daftar komik dan melakukan transaksi pembelian. 
Sistem menggunakan Node.js dan Express tanpa database (data disimpan dalam file data.js menggunakan array).

Isi Program:
1. Menampilkan daftar komik
   Setiap komik memiliki atribut: ID, Judul, Penulis, Stok, Harga, dan Genre
   READ : Menampilkan daftar komik yang tersedia
   READ : Menampilkan komik berdasarkan ID
   CREATE : Menambahkan komik baru ke dalam daftar
   UPDATE : Mengubah info komik dalam daftar
   DELETE : Menghapus info komik dalam daftar

2. Mendukung fitur transaksi:
   READ: Melihat daftar transaksi dan daftar komik
   CREATE: Melakukan transaksi pembelian komik
   Otomatis memperbarui stok setelah transaksi berhasil

Cara Menjalankan Program
1. Buka terminal pada folder proyek.
2. Install dependencies (jika belum): npm install
3. Menjalankan dengan "npm start"
4. Server akan berjalan di http://localhost:3000
5. Gunakan Postman untuk mengakses endpoint :
   - /comics         dengan method get atau post
   - /comics/:id     dengan method get, patch, atau delete
   - /transaction    dengan method get atau post
