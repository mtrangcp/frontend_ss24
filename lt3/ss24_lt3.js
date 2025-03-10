let arr = [];
let n, choice;
let check = true;

do {
    do {
        choice = +prompt("1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n4. Tính tổng và trung bình cộng của các số dương trong mảng\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n 7. Thoát chương trình");

        check = Number.isInteger(choice) ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            do {
                n = +prompt("Nhập số lượng phần tử mảng: ");
                check = Number.isInteger(n) && n > 0 ? false : true;

            } while (check);

            for (let i = 0; i < n; i++) {
                do {
                    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);
                    check = Number.isInteger(arr[i]) ? false : true;

                } while (check);
            }
            alert("Nhập thành công!");

            break;
        }
        case 2: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                console.log("Mảng hiện tại: ", arr);
            }
            break;
        }
        case 3: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let max = arr[0], index;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max) max = arr[i];
                    index = i;
                }

                console.log(`Vị trí của max: ${index} `);
            }
            break;
        }
        case 4: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let arrPositive = [];
                let sum = 0, avg = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > 0) {
                        sum += arr[i];
                    }
                    arrPositive.push(arr[i]);
                }
                avg = sum / arrPositive.length;

                console.log(`Trung bình cộng các số dương: ${avg} `);
                console.log(`Tổng: ${sum} `);
            }
            break;
        }
        case 5: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                arr = arr.reverse();
                console.log("Kết quả đảo: ", arr);

            }
            break;
        }
        case 6: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                check = true;
                const clonedArray = [...arr];
                arr = arr.reverse();
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] !== clonedArray[i]) {
                        check = false;
                    }
                }
                check ? console.log("Mảng đối xứng") : console.log("Mảng không đối xứng");

            }
            break;
        }
        case 7: {
            alert(`Bạn chọn thoát!`);
            break;
        }
        default: {
            alert("Vui lòng chọn đúng menu(1-7)");
            break;
        }
    }
} while (choice !== 7);


