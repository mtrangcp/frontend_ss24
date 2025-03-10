let inputString = [];
let choice;
let check = true;
let checkString = true;

do {
    do {
        choice = +prompt("1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Tính độ dài của chuỗi\n4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi\n5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n 7. Thoát chương trình");

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
                let stringlength = inputString.split("").length;
                console.log(`Độ dài chuỗi: ${stringlength}`);
            }
            break;
        }
        case 4: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let searchChar, count = 0;

                do {
                    searchChar = prompt("Nhập kí tự: ");
                    check = searchChar.split("").length === 1 && isNaN(searchChar) ? false : true;
                } while (check);

                inputString = inputString.split("");

                for (let i = 0; i < inputString.length; i++) {
                    if (inputString[i] === searchChar) count++;
                }

                count === 0 ? console.log(`Kí tự ${searchChar} không tồn tại trong chuỗi!`) : console.log(`Kí tự ${searchChar}  xuất hiện ${count} lần!`);
                inputString.join("");
            }
            break;
        }
        case 5: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                const stringClone = [...inputString].reverse();

                check = true;
                for (let i = 0; i < inputString.length; i++) {
                    if (inputString[i] !== stringClone[i]) {
                        check = false;
                        break;
                    }
                }

                check ? console.log(`Chuỗi đối xứng`) : console.log(`Chuỗi không đối xứng`);
            }
            break;
        }
        case 6: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let words = typeof (inputString) === "Array" ? inputString.join("").split(" ") : inputString.split(" ");

                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }

                inputString = words.join(" ");

                console.log("Chuỗi mới: ", inputString);
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
