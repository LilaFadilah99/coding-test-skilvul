// 1. Balik Kata

function reverseWords(sentence) {
  let words = [];
  let word = "";

  // Memisahkan kata secara manual
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      words.push(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  // Tambahkan kata terakhir ke array
  words.push(word);

  // Membalik urutan kata secara manual
  let reversedSentence = "";
  for (let j = words.length - 1; j >= 0; j--) {
    reversedSentence += words[j];
    if (j !== 0) {
      reversedSentence += " ";
    }
  }

  return reversedSentence;
}

console.log(reverseWords("Hello World"));
console.log(reverseWords("I love JavaScript"));

// 2. Membuat Array Unik

function uniqueArray(arr) {
  let uniqueArr = [];

  // Iterasi melalui setiap elemen dalam array input
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    // Cek apakah elemen sudah ada dalam array uniqueArr
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isUnique = false;
        break;
      }
    }

    // Jika elemen belum ada dalam uniqueArr, tambahkan ke dalam array
    if (isUnique) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueArray(["a", "b", "a", "c", "b"]));

// 3. Mencari Bilangan yang Hilang

function findMissingNumber(arr) {
  // Hitung panjang array seharusnya
  let n = arr.length + 1;

  // Hitung total bilangan seharusnya dari 1 hingga n
  let totalSum = (n * (n + 1)) / 2;

  // Hitung total bilangan yang ada di array
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  // Bilangan yang hilang adalah selisih dari totalSum dan actualSum
  return totalSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5]));

// 4. Menghitung Jumlah Karakter

function countCharacters(text) {
  let charCount = {};

  // Iterasi setiap karakter dalam string
  for (let char of text) {
    // Jika karakter belum ada dalam objek, tambahkan dengan nilai 1
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      // Jika karakter sudah ada, tambahkan jumlah kemunculannya
      charCount[char]++;
    }
  }

  return charCount;
}
console.log(countCharacters("hello"));
console.log(countCharacters("aabbbcc"));
