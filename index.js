window.onload = (event) => {

    console.log('A')
    bannerAnimate()
    console.log('B')

};

function bannerAnimate(){
    value1 = parseInt(Math.random() * 6) + 1
    value2 = parseInt(Math.random() * 6) + 1
    value3 = parseInt(Math.random() * 6) + 1

    value4 = parseInt(Math.random() * 100) + 1
    value5 = parseInt(Math.random() * 100) + 1
    value6 = parseInt(Math.random() * 100) + 1

    value7 = parseInt(Math.random() * 360) + 1
    value8 = parseInt(Math.random() * 360) + 1
    value9 = parseInt(Math.random() * 360) + 1

    document.getElementById('pi').src = `pierre/pi${value1}.png`
    document.getElementById('fe').src = `feuille/fe${value2}.png`
    document.getElementById('ci').src = `ciseaux/si${value3}.png`
    document.getElementById('pi').style.opacity = `${value4}%`
    document.getElementById('fe').style.opacity = `${value5}%`
    document.getElementById('ci').style.opacity = `${value6}%`
    document.getElementById('pi').style.transform = `rotate(${value7}deg)`
    document.getElementById('fe').style.transform = `rotate(${value8}deg)`
    document.getElementById('ci').style.transform = `rotate(${value9}deg)`

    console.table([['model', value1, value2, value3], ['opacity', value4, value5, value6],['rotate', value7, value8, value9]])

    setTimeout(bannerAnimate, 3000);
}