# 21_React Testing 

1. Testing adalah proses memverifikasi bahwa test assertions kita benar sepanjang masa aplikasi. test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

2. Manfaat testing
    - Ketika aplikasi kita mempunyari coverage yang baik kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya
    - mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi terbebas dari bug tetapi kita bisa mencegah beberapa hal yang berpotenis menjadi bug


3. Tools testing
    - Jest -> memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga dapat memiliki kontrol lebih pada kode yang dijalankan
    - react testing library -> seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya

4. RTL -> React testing libarary digunakan untuk berinteraksi dengan komponen kita seperti manusia. itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render

