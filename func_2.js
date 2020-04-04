var r_list = [5, 10, 15, 20, 25];

function r_area(r){
    var area = r ** 2 * 3.14;
    return area;
}

for (var i = 0; i < r_list.length; i++){
    document.write('<p>半径 ' + r_list[i] + 'cm の円の面積は ' + r_area(r_list[i]) + ' だよね。</p>');
}