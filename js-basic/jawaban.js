// 1. Mengurutkan angka dari bilangan terkecil ke terbesar

function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([5, 3, 8, 1, 2]));
console.log(sortArray([9, 5, 2, 1]));

// 2. Mencari bilangan Prima

function isPrime(num) {
  if (num <= 1) {
    return false; // Bilangan 1 atau kurang bukan bilangan prima
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Jika num habis dibagi oleh bilangan lain selain 1 dan dirinya sendiri
    }
  }

  return true; // Jika tidak ditemukan pembagi selain 1 dan dirinya sendiri
}

console.log(isPrime(10));
console.log(isPrime(2));

// 3. Menghitung Faktor Bilangan

function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(getFactors(10));
console.log(getFactors(3));

// 4. Menghitung jumlah kata

function wordCount(sentence) {
  // Hilangkan spasi di awal dan akhir kalimat
  sentence = sentence.trim();

  // Jika kalimat kosong setelah di-trim, kembalikan 0
  if (sentence === "") {
    return 0;
  }

  // Pisahkan kalimat menjadi array kata-kata
  let words = sentence.split(" ");

  // Kembalikan jumlah elemen dalam array kata
  return words.length;
}

console.log(wordCount("Belajar coding"));
console.log(wordCount("Aku Suka Javascript"));

// 5. Menggabungkan Array

function mergeArrays(arr1, arr2) {
  // Buat array kosong untuk menyimpan hasil penggabungan
  let mergedArray = [];

  // Tambahkan semua elemen dari arr1 ke mergedArray
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }

  // Tambahkan semua elemen dari arr2 ke mergedArray
  for (let j = 0; j < arr2.length; j++) {
    mergedArray.push(arr2[j]);
  }

  // Kembalikan array yang sudah digabungkan
  return mergedArray;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));
