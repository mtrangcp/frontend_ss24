let inputString;
let choice;
let check = true;
let checkString = true;

do {
    do {
        choice = +prompt("1. Nhập chuỗi ký tự\n2. Hiển thị chuỗi ký tự\n3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n 7. Thoát chương trình");

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
                let count = 0;
                let newString = [];
                let countArr = [];

                inputString = inputString.split(" ");

                for (let i = 0; i < inputString.length; i++) {
                    if (!newString.includes(inputString[i])) {
                        newString.push(inputString[i]);

                        count = 0;
                        for (let j = 0; j < inputString.length; j++) {
                            if (inputString[i] === inputString[j]) {
                                count++;
                            }
                        }
                        countArr.push(count);
                    }
                }

                for (let i = 0; i < countArr.length; i++) {
                    if (countArr[i] === 1) {
                        countArr.splice(i, 1);
                        newString.splice(i, 1);
                        i--;
                    }
                }

                console.log("Mang: ", newString);
                console.log("So lan: ", countArr);

            }
            break;
        }
        case 4: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {

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


