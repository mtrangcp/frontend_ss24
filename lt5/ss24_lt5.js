let arr = [];
let row, col, choice;
let check = true;

do {
    do {
        choice = +prompt("1. Nhập mảng 2 chiều\n2.  Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4.  Tính tổng đường chéo chính\n5. Tính tổng đường chéo phụ\n6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột \n 7. Thoát chương trình");

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
                if (row === col) {
                    let sum = 0;
                    for (let i = 0; i < row; i++) {
                        for (let j = 0; j < col; j++) {
                            if (i === j) {
                                sum += arr[i][j];
                            }
                        }
                    }

                    console.log(`Tổng đường chéo chính: ${sum}`);

                } else {
                    alert("Mảng không có đường chéo chính!");
                }
            }
            break;
        }
        case 5: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                if (row === col) {
                    let sum = 0;
                    for (let i = 0; i < row; i++) {
                        for (let j = 0; j < col; j++) {
                            if (i + j === row - 1) {
                                sum += arr[i][j];
                            }
                        }
                    }

                    console.log(`Tổng đường chéo phụ: ${sum}`);

                } else {
                    alert("Mảng không có đường chéo phụ!");
                }
            }
            break;
        }
        case 6: {
            if (arr.length === 0) {
                alert(`Danh sách rỗng!`);

            } else {
                let axes, index, sum = 0, avg = 0;
                do {
                    axes = +prompt("1. Hàng\n2. Cột");
                    check = axes === 1 || axes === 2 ? false : true;
                } while (check);

                if (axes === 1) {
                    do {
                        index = +prompt("Nhập hàng: ");
                        check = Number.isInteger(index) && index >= 0 && index < row ? false : true;
                    } while (check);

                    for (let j = 0; j < col; j++) {
                        sum += arr[index][j];
                    }
                    avg = sum / col;

                    console.log(`Trung bình cộng hàng ${index}: ${avg}`);

                } else {
                    do {
                        index = +prompt("Nhập cột: ");
                        check = Number.isInteger(index) && index >= 0 && index < row ? false : true;
                    } while (check);

                    for (let j = 0; j < row; j++) {
                        sum += arr[index][j];
                    }
                    avg = sum / row;

                    console.log(`Trung bình cộng cột ${index}: ${avg}`);
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
