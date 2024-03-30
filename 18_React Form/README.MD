# 18_React Form

1. Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. form dapat digunakan untuk menghandle inputan dari user. 

2. Controlled Component -> kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan react dengan menggunakan state pada react. kemudian komponen react merender sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.

3. Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM nya sendiri. untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

4. Validasi
    a. Client-side validation -> validasi yang dilakukan pada sisi klien (browser). validasi ini dilakukan agar data input sesuai dengan kebutuhan form sebelum data form dikirimkan ke server.
    b. Server-side validation -> validasi yang dilakukan pada sisi server. sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirimkan kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.