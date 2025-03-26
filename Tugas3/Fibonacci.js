// Fungsi untuk mencetak deret Fibonacci
function fibonacci(n) {
    let fib = [0, 1]; // Inisialisasi array dengan dua angka pertama deret Fibonacci
    for (let i = 2; i < n; i++) { // Mulai dari indeks 2 hingga n
        fib[i] = fib[i - 1] + fib[i - 2]; // Menambahkan dua angka sebelumnya
    }
    return fib.slice(0, n); // Mengembalikan n angka pertama dari deret
}

// Menampilkan deret Fibonacci untuk n=10
console.log(fibonacci(15)); 