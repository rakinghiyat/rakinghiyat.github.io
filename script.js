var z = true
while (z){
    //menangkap pilihan player
    alert('Tebak angka dari 1-10 \nKamu punya 3X kesempatan')
    var p = prompt ('Masukan angka dari 1-10')
    
    //menmbangkitkan bilangan random
    var com = (Math.ceil (Math.random() * 10));

    //nyawa
    for (var nyawa = 2; nyawa >= 0; nyawa--) {
         //menentukan rules
        var hasil = ''
        if (p > 10) {
            hasil = 'memasukkan angka yang salah!'
        } else if (p == com) {
            hasil = 'BENAR!'
        } else if (nyawa == 0) {
            hasil = ('KALAH!')
        } else if (p < com) {
            p = prompt('Terlalu RENDAH!\nSisa kesempatan sebanyak ' + nyawa + 'X')
        } else if (p > com) {
            p = prompt('Terlalu TINGGI!\nSisa kesempatan sebanyak ' + nyawa + 'X')
        }
    }
    //tampilan hasil akhir
    alert('Anda ' + hasil + '\nAngka yang di cari adalah ' + com)

    z = confirm('Main lagi ?')
}
alert('Terimakasih sudah bermain!')