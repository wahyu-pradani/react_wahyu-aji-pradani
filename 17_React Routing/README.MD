# 17_React Routing

1. Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

2. Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.
Keunggulan:
    - SEO website akan lebih mudah dioptimasi
    - memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan berbeda
    - menggunakan tools analisis seperti google analytics yang dapat terintegrasi langsung dalam website

3. Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.
Keunggulan:
    - waktu loading website jauh lebih cepat
    - tidak ada query tambahan ke server
    - front end yang cepat dan responsif
    - meningkatkan pengalaman pengguna (user experience)

4. URL Params -> Parameter URL adalah suatu paramater yang nilainya ditetapkan secara dinamis di URL Halaman
Perbedaan Link dan Redirect:
    a. Link
        - dapat digunakan pada kondisi apapun
        - memberikan histori baru pada browser
        - bereaksi dengan click seperti a href
    b. Redirect 
        - lebih sering digunakan pada halaman 404 
        - menimpa history pada browser
        - bereaksi dengan suatu kondisi