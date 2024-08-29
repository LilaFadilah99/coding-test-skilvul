### 1. Urutkan Angka

Buatlah sebuah fungsi bernama `sortArray` yang menerima satu parameter arr (array angka) dan mengembalikan array yang telah diurutkan dari yang terkecil ke terbesar.

Contoh Output :

```js
console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

console.log(sortArray([9, 5, 2, 1])); // Output: [1, 2, 5, 9]
```

### 2. Mencari bilangan Prima

Buatlah sebuah fungsi bernama `isPrime` yang menerima satu parameter num (bilangan bulat) dan mengembalikan true jika num adalah bilangan prima, atau false jika bukan.

Bilangan prima adalah bilangan yang lebih besar dari 1 dan hanya memiliki dua faktor, yaitu 1 dan dirinya sendiri.

Contoh Output :

```js
console.log(sortArray(10)); // Output: false
console.log(sortArray(2)); // Output: true
```

### 3. Menghitung Faktor Bilangan

Buatlah sebuah fungsi bernama `getFactors` yang menerima satu parameter num (bilangan bulat). Fungsi ini harus mengembalikan sebuah array yang berisi semua faktor dari bilangan tersebut.

Faktor dari sebuah bilangan adalah bilangan lain yang dapat membagi bilangan tersebut secara sempurna (tanpa sisa). Misalnya, faktor dari 6 adalah 1, 2, 3, dan 6 karena 6 dapat dibagi oleh semua bilangan tersebut tanpa meninggalkan sisa

Contoh:

- Jika num = 12, maka faktor dari 12 adalah [1, 2, 3, 4, 6, 12].
- Jika num = 7, maka faktor dari 7 adalah [1, 7] karena 7 adalah bilangan prima.

Contoh Output :

```js
console.log(getFactors(10)); // Output: [1, 2, 5, 10]
console.log(getFactors(3)); // Output: [1, 3]
```

### 4. Menghitung jumlah kata

Buatlah sebuah fungsi bernama `wordCount` yang menerima satu parameter sentence (berupa string). Fungsi ini harus mengembalikan jumlah kata yang terdapat dalam string tersebut.

Kata dalam sebuah kalimat adalah rangkaian karakter yang dipisahkan oleh satu atau lebih spasi. Tugasnya adalah menghitung berapa banyak kata yang ada dalam kalimat yang diberikan.

Contoh Output :

```js
console.log(wordCount("Belajar coding")); // Output: 2
console.log(wordCount("Aku Suka Javascript")); // Output: 3
```

### 5. Menggabungkan Array

Buatlah sebuah fungsi bernama `mergeArrays` yang menerima dua parameter arr1 dan arr2 (keduanya berupa array). Fungsi ini harus mengembalikan sebuah array baru yang merupakan hasil penggabungan dari kedua array tersebut.

Contoh Output :

```js
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // Output: ["a", "b", "c", "d"]
```
