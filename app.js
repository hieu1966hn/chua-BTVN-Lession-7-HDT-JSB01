function chan(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}
let loop;// khai bao vong lap 
do{
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
let flag;
do {
    let input = Number(prompt("nhap vao phan tu them vao mang"));
    flag = true;
    for (i = 0; i < n; i++) {
        if (input === a[i]) {
            flag = false;
            alert("so da trung lap, moi ban nhap lai");
            break;
        }
    }
    if (flag === true) {
        a.push(input);
    }

}
while (flag == false);
console.log("a sau khi them phan tu la");
console.log(a);
//////////// xoa 1 phan tu trong mang o vi tri bat ki
let xoa;
do {
    xoa = Number(prompt("nhap vao vi tri ban muon xoa phan tu"));
    a.splice(xoa, 1);
}
while (xoa < 0 || xoa > n);
console.log("mang sau khi xoa phan tu o vi tri thu " + xoa + " la: " + a);

loop = prompt("ban co muon nhap mang khac khong? press Y to agree, N to cancel ").toLowerCase().trim();
}
while(loop ==="y");
