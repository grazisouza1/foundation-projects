let sec = 0
let min = 0
let hrs = 0

function play(){
    interval = setInterval(counter, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec = 0o0
    min = 0o0
    hrs = 0o0   
    document.getElementById('sec').innerHTML = '00'
    document.getElementById('min').innerHTML = '00'
    document.getElementById('hrs').innerHTML = '00'
}

function counter(){
    sec++
    document.getElementById('sec').innerHTML = sec
    if (sec < 10){
        document.getElementById('sec').innerHTML = '0' + sec
    }
}

function time(){
    window.location.href = 'time.html'
}
