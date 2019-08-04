$("#btn").click(function () {
    var txt = $("#txt").val();
    var tim = $("#tim").val();
    if(txt == "" || tim == ""){
        alert("Insert value!")
    }else {
        alert("reminder set");
        setInterval(function () {
            var mytim = $("#tim").val();
            var hour = mytim.slice(0, 2);
            var min = mytim.slice(3, 5);
            var livetime = new Date();
            var livehour = livetime.getHours();
            var livemin = livetime.getMinutes();
            if (livehour == hour && livemin == min) {
                alert($("#txt").val());
            }
        }, 60000)
    }
})