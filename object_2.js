var game = {
    startTime: null,
    displayArea: document.getElementById('display_area'),
    start: function () {
        game.startTime = Date.now();
        document.body.onkeypress = game.stop;
    },
    stop: function () {
        var currentTime = Date.now()
        var your_time = (currentTime - game.startTime) / 1000;
        if (9.0 <= your_time && your_time <= 11.0) {
            game.displayArea.innerText = your_time + 'なんてなかなかやるじゃん';
        } else {
            game.displayArea.innerText = your_time + 'はほんと大したことない'
        }
        console.log('ストップ！');
    }
};

if (confirm('OKを押してから10秒だと思った時点でEnterキー押してみて')){
    game.start();
}