function selectTour(id, name) {
    // Xóa màu tất cả tour
    let tours = document.getElementsByClassName("tour");
    for (let i = 0; i < tours.length; i++) {
        tours[i].classList.remove("active");
    }

    document.getElementById(id).classList.add("active");

    document.getElementById("message").innerText =
        "Bạn đã chọn " + name;
}