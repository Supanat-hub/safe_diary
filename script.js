document.addEventListener("DOMContentLoaded", function () {
    const book = document.querySelector(".book-container");
    const textarea = document.getElementById("diaryInput");
    const textDisplay = document.getElementById("textDisplay");

    // ให้หนังสืออยู่ใกล้นานขึ้นก่อนค่อยถอยออกไป
    setTimeout(() => {
        book.classList.add("show");
        textarea.classList.add("show");
    }, 1500);

    // พิมพ์ข้อความแล้วให้ไปขึ้นบนหน้ากระดาษขวา
    textarea.addEventListener("input", function () {
        textDisplay.textContent = textarea.value;
    });
});
