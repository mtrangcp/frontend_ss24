let arr = [];
let n, choice;
let check = true;

do {
    do {
        choice = +prompt("1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n 7. Thoát chương trình");

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
                let arrEve = [], arrOdd = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        arrEve.push(arr[i]);
                    } else {
                        arrOdd.push(arr[i]);
                    }
                }

                console.log(`Mảng chẵn: ${arrEve} `);
                console.log(`Mảng lẻ: ${arrOdd} `);

            }
            break;
        }
        case 4: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let sum = 0, avg = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                avg = sum / arr.length;

                console.log(`Trung bình cộng mảng: ${avg} `);
            }
            break;
        }
        case 5: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let index;
                do {
                    index = +prompt("Nhập vị trí cần xóa: ");
                    check = Number.isInteger(index) && index >= 0 && index < arr.length ? false : true;
                } while (check);

                arr.splice(index, 1);
                console.log("Kết quả xóa: ", arr);

            }
            break;
        }
        case 6: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let max = Math.max(arr);
                let max2 = arr[0];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < max && arr[i] >= max2) max2 = arr[i];
                }
                console.log("Số lớn thứ 2: ", max2);
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


