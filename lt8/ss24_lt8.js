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
                if (typeof (inputString) === 'String') inputString = inputString.split(" ");

                let max = inputString[0], min = inputString[0];
                let maxStrings = [], minStrings = [];
                for (let i = 0; i < inputString.length; i++) {
                    if (max.length < inputString[i].length) max = inputString[i];
                    if (min.length > inputString[i].length) min = inputString[i];
                }

                for (let i = 0; i < inputString.length; i++) {
                    if (inputString[i].length === max.length && !maxStrings.includes(inputString[i])) maxStrings.push(inputString[i]);
                    if (inputString[i].length === min.length && !minStrings.includes(inputString[i])) minStrings.push(inputString[i]);
                }

                console.log("Chuỗi lớn nhất: ", maxStrings);
                console.log("Chuỗi nhỏ nhất: ", minStrings);
            }
            break;
        }
        case 5: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let stringClone = [...inputString].join("").split("");
                stringClone = stringClone.filter(char => char !== " ");

                let count = 0;
                let newChar = [];
                let countChar = [];

                for (let i = 0; i < stringClone.length; i++) {
                    if (!newChar.includes(stringClone[i])) {
                        newChar.push(stringClone[i]);

                        count = 0;
                        for (let j = 0; j < stringClone.length; j++) {
                            if (stringClone[i] === stringClone[j]) {
                                count++;
                            }
                        }
                        countChar.push(count);
                    }
                }

                console.log("Case 5:");
                console.log("Các kí tự: ", newChar);
                console.log("Số lần lặp: ", countChar);

            }
            break;
        }
        case 6: {
            if (checkString) {
                alert(`Chuỗi rỗng!`);

            } else {
                let stringClone = [...inputString].join(" ");

                stringClone = stringClone.replaceAll(" ", "_");
                console.log("New String: ", stringClone);
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


