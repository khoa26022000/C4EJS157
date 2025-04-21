let a;
let b = 8;
let c = 2;
a = b + c;
console.log("====================================");
console.log(a);
console.log("====================================");

let d = 10;
let e = 20;
a = d + e;

console.log("====================================");
console.log(a);
console.log("====================================");

console.log(0 / 3);
/// Bài 1
// Bài 2 Các số từ 0 đến 100, in ra các số chia hết cho 2 hoặc 9
// Kết quả
// 0 2 4 6 8 9 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58
// 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 99 100

// test commit

///
function kiemTraSoNguyenTo(n) {
  if (n < 2) return console.log("Khong phai so nguyen to");

  for (let index = 2; index < n; index++) {
    let kq = n % index;
    console.log(kq);
    if (n % index == 0) {
      return console.log("Khong phai");
    }
  }
  return console.log("La so nguyen to");
}
kiemTraSoNguyenTo(1);

// 🧩 Bài toán con thỏ của Fibonacci:
// Giả sử:

// Bắt đầu với 1 cặp thỏ (1 đực, 1 cái).

// Mỗi tháng, một cặp thỏ trưởng thành sau 1 tháng.

// Sau khi trưởng thành, mỗi cặp sinh ra 1 cặp thỏ con mỗi tháng.

// Thỏ không chết.

// Hỏi: Sau n tháng sẽ có bao nhiêu cặp thỏ?

// sắp xếp mảng theo thứ tự tăng dần và giảm dần (có 2 cách dùng for hoặc thuộc tính của mảng)
// swap
function sortDes(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      console.log("i", arr[i]);
      console.log("j", arr[j]);
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
}
let array = [2, 5, 3];
array.sort;
sortDes(array);
