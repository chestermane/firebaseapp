function pyramid(n) {
    var pivot = (2 * n - 1) / 2;
    for (var row = 0; row < n; row++) {
        var level = "";
        for (var col = 0; col < 2 * n - 1; col++) {
            if (pivot - row <= col && pivot + row >= col) {
                level += "#";
            }
            else {
                level += " ";
            }
        }
        console.log(level);
        return;
    }
}
pyramid(10);
//# sourceMappingURL=Pyramid.js.map