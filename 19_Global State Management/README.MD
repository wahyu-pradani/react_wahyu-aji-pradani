# 19_Global State Management

Global State Management


1. Kapan saat menggunakan redux : 
    a. Banyak state yang perlu di taroh di banyak tempat 
    b. State pada app sering berubah 
    c. Logic untuk mengubah state kompleks 
    d. Ukuran codebase yang sedang-besar dan dikerjakan oleh banyak orang 
    e. Perlu untuk mengetahui bagaimana state di update seiring dengan waktu

2. redux library dan tools : React-redux, Redux-toolkit, Redux Devtools Extension
    komponen-komponen penting di redux:
    - action -> digunakan untuk memberikan informasi dari aplikasi ke store
    - reducer -> pure javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan ke state aplikasi terbaru
    - store -> objek sentral yang menyimpan state pada aplikasi

3. redux thunk -> thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.
tunk diperlukan untuk berbagai hal yakni: 
    - untuk menghandle side effect logic yang kompleks
    - untuk logic async seperti request data
