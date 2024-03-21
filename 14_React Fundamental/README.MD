# 14_React Fundamental

1. JSX merupakan singkatan dari Javascript XML. beberapa hal mengapa harus menggunakan JSX yakni:
 - JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
 - Separation of technology -> Separation of Concerns

2. Komponen dalam react adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

3. React Lifecycle, Lifecycle memiliki beberapa method yang umum digunakan yakni:
 - render () 
    a. fungsi yang paling sering dipakai
    b. required pada class component
    c. Pure function. tidak boleh ada setState()

 - componentDidMount()
    a. dipanggil ketika component sudah di render untuk pertama kali
    b. tempat yang tepat untuk pemanggilan API
    c. boleh ada setState()

 - componentDidUpdate()
    a. Dipanggil ketika terjadi update (props atau state berubah)

 - componentWillUnmount()
    a. dipanggil ketika component akan dihancurkan 
    b. cocok untuk clean up options

4. Render Bersyarat - > Render bersyarat Pada react, dapat membuat komponen berbeda yang mencakup perilaku yang di butuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi.
    a. Menggunakan If
    b. Inline If dengan operator &&
    c. Inline If-else dengan ternary conditional operator
    d. Mencegah komponen untuk rendering