function chan(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}


let n;
let a = [];
do {
    n = Number(prompt("nhap vao so phan tu trong mang a"));
}
while (n <= 0 || parseInt(n) !== n);

for (let i = 0; i < n; i++) {
    a.push(Number(prompt(`nhap vao a[${i}] = `)));
}

for (let key of a) {
    console.log(key);
}
// console.log(a);

let Max = a[0];
for (i = 0; i < n; i++) {
    if (Max < a[i]) {
        Max = a[i];
    }
}
console.log(` giá trị lớn nhất trong mảng là: ` + Max);


/// in ra so chan : 
console.log("chu so chan trong mang la:");
for (i = 0; i < n; i++) {
    if (chan(a[i])) {
        console.log(a[i]);
    }

}
////// in ra so le:
console.log("chu so le trong mang la");
for (i = 0; i < n; i++) {
    if (!chan(a[i])) {
        console.log(a[i]);
    }

}
//// them phan tu khong trung lap vao mang
let input = Number(prompt("nhap vao phan tu them vao mang"));
let flag = true
for (i = 0; i < n; i++) {
    if (input === a[i]) {
        flag = false;
    }
}
if (flag === true) {
    a.push(input);
}
console.log("a sau khi them phan tu la");
console.log(a);

