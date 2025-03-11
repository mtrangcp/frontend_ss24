let inputString;
let choice;
let check = true;
let checkString = true;

do {
    do {
        choice = +prompt("1. Nhập chuỗi ký tự\n2. Hiển thị chuỗi ký tự\n3. Đếm số lượng các ký tự là chuỗi và số\n4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa\n5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi người dũng nhập\n6. Tách chuỗi thành các từ, sắp xếp từ ngắn → dài\n 7. Thoát chương trình");

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
                let stringClone = [...inputString].join("").split("");
                stringClone = stringClone.filter(char => char !== " ");

                let newChar = [], newNumber = [];

                for (let i = 0; i < stringClone.length; i++) {
                    if (!newChar.includes(stringClone[i]) && !Number.isInteger(+stringClone[i])) {
                        newChar.push(stringClone[i]);

                    } else if (!newNumber.includes(stringClone[i]) && Number.isInteger(+stringClone[i])) {
                        newNumber.push(stringClone[i]);
                    }
                }

                console.log("Mảng kí tự chữ: ", newChar);
                console.log("Số lượng kí tự chữ: ", newChar.length);
                console.log("Mảng kí tự số: ", newNumber);
                console.log("Số lượng kí tự số: ", newNumber.length);
            }
            break;
        }
        case 4: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let stringClone = [...inputString].join("").split("");

                for (let i = 0; i < stringClone.length; i++) {
                    if (stringClone[i] === " " || Number.isInteger(+stringClone[i])) continue;
                    else if (stringClone[i] === stringClone[i].toUpperCase()) {
                        stringClone[i] = stringClone[i].toLowerCase();
                    } else {
                        stringClone[i] = stringClone[i].toUpperCase();
                    }
                }
                stringClone = stringClone.join(" ");

                console.log("Chuỗi sau khi chuyển hoa <-> thường: ", stringClone);
            }
            break;
        }
        case 5: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let newString = prompt("Nhập chuỗi cần trộn: ").split("");
                newString = newString.filter(char => char !== " ");

                let stringClone = [...inputString].join("").split("");
                stringClone = stringClone.filter(char => char !== " ");

                let n = newString.length > stringClone.length ? stringClone.length : newString.length;
                let result = [];

                for (let i = 0; i < n; i++) {
                    result.push(stringClone[i]);
                    result.push(newString[i]);
                }

                let others = newString.length > stringClone.length ? newString.split(stringClone.length) : stringClone.join("").split(newString.length);
                result.push(others);
                result = result.join("");

                console.log("Kết quả trộn: ", result);
            }
            break;
        }
        case 6: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let stringClone = [...inputString].join("").split(" ");

                for (let i = 0; i < stringClone.length - 1; i++) {
                    for (let j = 0; j < stringClone.length - 1 - i; j++) {
                        if (stringClone[j].length > stringClone[j + 1].length) {
                            let temp = stringClone[j];
                            stringClone[j] = stringClone[j + 1];
                            stringClone[j + 1] = temp;
                        }
                    }
                }

                console.log("Chuỗi sau sắp xếp: ", stringClone);
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