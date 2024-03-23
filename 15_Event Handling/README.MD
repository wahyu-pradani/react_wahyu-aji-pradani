# 15_Event Handling

1. Handling Event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen.
beberapa contoh list Event:
    - Clipboard Events (Promise terpenuhi)
    - Form Events (onChange, onSubmit)
    - Mouse Events (onClick, onDoubleClick, onMouseOver)
    - Generic Events (onError, onLoad)

2. Statefull component adalah memiliki state. Component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle sedangkan  stateless component adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas

3. Perbedaan-perbedaan statefull dengan stateless:
    a. Statefull
        - mengerti tentang aplikasi
        - melakukan data fetching
        - berinteraksi dengan aplikasi
        - tidak dapat digunakan kembali
        - meneruskan status dan data ke anak-anaknya

    b. Stateless
        - tidak tahu tentang aplikasi 
        - tidak melakukan data fetching
        - tujuan utamanya adalah visualiasi
        - dapat digunakan kembali
        - hanya berkomunikasi dengan induk langsungnya