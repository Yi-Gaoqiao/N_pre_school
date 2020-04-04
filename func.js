var BirthTime = new Date(1996, 5, 18, 12, 00);
function updataParagraph(){
    var now = new Date();
    var seconds = (now.getTime() - BirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
}
setInterval(updataParagraph, 50);