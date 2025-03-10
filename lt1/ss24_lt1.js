let arr = [];
let n, choice;
let check = true;

do {
    do {
        choice = +prompt("1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần tử trong mảng\n5. Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần\n 7. Thoát chương trình");

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
                let max = arr[0], min = arr[0];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max) max = arr[i];
                    if (arr[i] < min) min = arr[i];
                }

                console.log(`max: ${max} -  min: ${min}`);

            }
            break;
        }
        case 4: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }

                console.log(`Tổng: ${sum} `);
            }
            break;
        }
        case 5: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let numberSearch, count = 0;
                do {
                    numberSearch = +prompt("Nhập số cần tìm: ");
                    check = Number.isInteger(numberSearch) ? false : true;
                } while (check);

                for (const element of arr) {
                    if (numberSearch === element) count++;
                }

                count === 0 ? console.log(`Số ${numberSearch} không tồn tại trong ds`) : console.log(`Số ${numberSearch} xuuất hiện ${count} lần`);
            }
            break;
        }
        case 6: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                arr.sort((a, b) => a - b);
                console.log("Mảng hiện tại: ", arr);
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
