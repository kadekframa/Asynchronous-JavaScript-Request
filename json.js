// JSON.
// JSON adalah singkatan dari JavaScript Object Notation. JSON merupakan format yang sering digunakan dalam pertukaran data.

// Seperti yang kita ketahui, JSON ini biasanya digunakan untuk transaksi data ke/dari web server. Ketika transaksi data berlangsung, data tersebut selalu dalam bentuk string.
/*  
    Nah untuk mengelola data JSON dalam bentuk string pada JavaScript, kita perlu melakukan parse dengan menggunakan
    global object JSON. Terdapat dua method penting dalam global object JSON, yang pertama parse() dan yang kedua stringify().
*/

// Contoh penggunaan JSON.parse() dan JSON.stringify().
const jsonString = `{
    "error": false,
    "message": "success",
    "books": [
        {
            "id": 1,
            "title": "Laskar Pelangi",
            "author": "Andrea Hirata"
        },
        {
            "id": 2,
            "title": "Filosofi Kopi",
            "author": "Dewi Lestari"
        },
        {
            "id": 3,
            "title": "Clean Code",
            "author": "Robert C Martin"
        }
    ]
}`

const data = JSON.parse(jsonString);

data.books.forEach((book, index) => {
    console.info(`${index + 1}. ${book.title} (${book.author})`);
})