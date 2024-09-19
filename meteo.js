//8ae44587d93b197bea5778b93ec28b71
let video = document.getElementById("bgvideo");
let tbilisi = []
let spb = []
async  function getFirstCity() {
    try {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?id=498817&appid=8ae44587d93b197bea5778b93ec28b71')
        const data = await resp.json()
        setTimeout(() => {
            spb = data
            console.log(spb)
            document.querySelector('#firstCity').innerHTML = spb.name
            document.querySelector('#firstTemp').innerHTML = Math.round(spb.main.temp - 273) + '&deg'
            document.querySelector('#firstWeather').textContent = spb.weather[0].description
            document.querySelector('#icon1').innerHTML = `<img src = "https://openweathermap.org/img/wn/${spb.weather[0]['icon']}@2x.png">`
        },2000)
    } 
    catch(err) {
       // list.style.color = 'red'
        //list.innerHTML = err.message  
    }
}

async  function getSecondtCity() {
    try {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=8ae44587d93b197bea5778b93ec28b71')
        const data = await resp.json()
        setTimeout(() => {
            tbilisi = data
            document.querySelector('#secondCity').innerHTML = tbilisi.name
            document.querySelector('#secondTemp').innerHTML = Math.round(tbilisi.main.temp - 273) + '&deg'
            document.querySelector('#secondWeather').textContent = tbilisi.weather[0].description
            document.querySelector('#icon2').innerHTML = `<img src = "https://openweathermap.org/img/wn/${tbilisi.weather[0]['icon']}@2x.png">`


        },2000)
    } 
    catch(err) {
        //list.style.color = 'red'
        //list.innerHTML = err.message      
    }
}
getFirstCity()
getSecondtCity()