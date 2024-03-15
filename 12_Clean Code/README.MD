# Clean Code

1. Pengertian clean code? -> clean code merupakan sebuah istilah unntuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.
    keuntungan dalam menerapkan clean code yakni:
    - work collaboration
    - feature development 
    - faster development

 2. karakteristik clean code:
    - mudah dipahami
    - mudah dieja dan dicari
    - singkat namun mendeskripsikan konteks
    - konsisten
    - hindari penambahan konteks yang tidak perlu
    - penggunaan komentar yang mudah dipahami dan singkat
    - pengunaan function yang baik
    - gunakan konvensi
    - formating yang sesuai dengan prinsip  


3. prinsip clean code
    a. KISS (keep it so simple) -> hindari membuat fungsi yang dibuat untuk  melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst
        - fungsi atau class harus kecil
        - fungsi dibuat untuk melakukan satu tugas saja
        - jangan gunakan terlalu bantak argumen pada fungsi
        - harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal
    b. DRY (Don't repeat yourself) -> duplikasi code terjadi karena sering copy paste. untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang
    c. refactoring -> proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor. Teknik refactoring:
        - membuat sebuah abstraksi
        - memecah kode dengan fungsi/class
        - perbaiki penamaan dan lokasi code
        - deteksi kode yang memiliki duplikasi