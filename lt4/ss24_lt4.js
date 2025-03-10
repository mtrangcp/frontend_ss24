let arr = [];
let row, col, choice;
let check = true;

do {
    do {
        choice = +prompt("1. Nhập mảng 2 chiều\n2.  Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n 7. Thoát chương trình");

        check = Number.isInteger(choice) ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            do {
                row = +prompt("Nhập số hàng: ");
                check = Number.isInteger(row) && row > 0 ? false : true;
            } while (check);
            do {
                col = +prompt("Nhập số cột: ");
                check = Number.isInteger(col) && col > 0 ? false : true;
            } while (check);

            for (let i = 0; i < row; i++) {
                let arrRow = [];
                for (let j = 0; j < col; j++) {
                    do {
                        arrRow[j] = +prompt(`Nhập phần tử thứ ${j + 1} hàng ${i + 1}: `);
                        check = Number.isInteger(arrRow[j]) ? false : true;

                    } while (check);
                }
                arr.push(arrRow);
            }
            alert("Nhập thành công!");

            break;
        }
        case 2: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let html;
                for (let i = 0; i < row; i++) {
                    html = "";
                    for (let j = 0; j < col; j++) {
                        html += arr[i][j] + " ";
                    }
                    console.log(html);
                }

            }
            break;
        }
        case 3: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let sum = 0;
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        sum += arr[i][j];
                    }
                }

                console.log(`Tổng: ${sum}`);
            }
            break;
        }
        case 4: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let max = arr[0][0], indexRow = 0, indexCol = 0;
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        if (max < arr[i][j]) {
                            max = arr[i][j];
                            indexRow = i + 1;
                            indexCol = j + 1;
                        }
                    }
                }

                console.log(`Max: ${max} ở vị trí hàng ${indexRow}, cột ${indexCol}`);
            }
            break;
        }
        case 5: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let sum = 0, avg = 0, indexRow;

                do {
                    indexRow = +prompt("Nhập hàng muốn tính trung bình: ");
                    check = Number.isInteger(indexRow) && indexRow >= 0 && indexRow < row ? false : true;
                } while (check);

                for (let j = 0; j < col; j++) {
                    sum += arr[indexRow][j];
                }
                avg = sum / col;

                console.log(`Trung bình cộng hàng ${indexRow}: ${avg}`);
            }
            break;
        }
        case 6: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                arr.map((row) => row.reverse());
                console.log("Kết quả đảo: ");
                let html;
                for (let i = 0; i < row; i++) {
                    html = "";
                    for (let j = 0; j < col; j++) {
                        html += arr[i][j] + " ";
                    }
                    console.log(html);
                }
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
