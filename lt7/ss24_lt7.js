let inputString;
let choice;
let check = true;
let checkString = true;

do {
    do {
        choice = +prompt("1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n4. Đảo ngược chuỗi ký tự\n5. Đếm số lượng từ trong chuỗi ký tự\n6. Tìm kiếm và thay thế các ký tự trong chuỗi gốc\n 7. Thoát chương trình");

        check = Number.isInteger(choice) ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            inputString = prompt("Nhập chuỗi: ");
            checkString = false;
            break;
        }
        case 2: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                console.log("Chuỗi hiện tại: ", inputString);
            }
            break;
        }
        case 3: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                inputString = inputString.trim();
                console.log(`Kết quả: ${inputString}`);
            }
            break;
        }
        case 4: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let stringClone = [...inputString].reverse();

                console.log("Mảng đảo ngược: ", stringClone.join(""));
            }
            break;
        }
        case 5: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                const stringClone = [...inputString].join("").split(" ");
                console.log("Số lượng từ trong chuỗi: ", stringClone.length);
            }
            break;
        }
        case 6: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let char1, char2;
                do {
                    char1 = prompt("Nhập kí tự cần thay thế: ");
                    check = char1.length === 1 ? false : true;
                } while (check);

                do {
                    char2 = prompt("Nhập kí tự mới: ");
                    check = char1.length === 1 ? false : true;
                } while (check);

                if (inputString.includes(char1)) {
                    let newString = inputString.replaceAll(char1, char2);
                    console.log("Chuỗi mới: ", newString);

                } else {
                    console.log(`Không tìm thấy kí ${char1} tự cần thay thế!`);
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


