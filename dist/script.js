var cdz = prompt("Conheça mais sobre cada Cavaleiro. Escolha 1, 2, 3, 4, 5")
var res = document.getElementById("res")
var h2 = document.getElementsByTagName("h2")




if (cdz == "Seiya" || cdz == 1){
    var img = document.createElement('img')
    var cdz = "Seiya"
        img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb3565a8-d647-44be-a6b6-2bb7ac48b140/daxw1tg-2d3e829f-02ba-41c3-bb09-e7debc0da43a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWIzNTY1YTgtZDY0Ny00NGJlLWE2YjYtMmJiN2FjNDhiMTQwXC9kYXh3MXRnLTJkM2U4MjlmLTAyYmEtNDFjMy1iYjA5LWU3ZGViYzBkYTQzYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.WNt32Zbd4fIQiHDoVQ6NWO13c3BobflW2AwFiD3E2oM";
     img.style.width = "200px";
     img.style.height = "200px";
    res.style.color = 'white';
    res.innerHTML = `<p>${cdz} é o Cavaleiro de Bronze da constelação de Pegasus. Guerreiro de imenso poder, Seiya alcança a vitória em batalhas aparentemente impossíveis e consegue derrotar até mesmo os deuses Poseidon e Hades.</p>`
    
} else if ( cdz == 2 || cdz == 2) {
    var img = document.createElement('img')
    var cdz = "Shiryu"
    img.src = "https://i.pinimg.com/originals/89/28/fd/8928fdb630f704cd5aa299b26cdf6468.png";
    img.style.width = "250px";
    img.style.height = "250px";
    res.style.color = 'white'
    res.innerHTML = `<p>${cdz} é o Cavaleiro de Bronze da constelação de Draco. Quando Shiryu eleva o seu Cosmo ao máximo, uma imagem de um dragão aparece em suas costas, que começa a desaparecer conforme o Cavaleiro de Dragão está muito perto da morte. </p>`

} else if (cdz == 3 || cdz == 3) {
    var img = document.createElement('img')
    var cdz = "Shun"
    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46468218-feda-4974-a0c4-7b49b5e7785e/d8w6gzh-5c4505e5-d052-4b08-9724-19af718e5f41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDY0NjgyMTgtZmVkYS00OTc0LWEwYzQtN2I0OWI1ZTc3ODVlXC9kOHc2Z3poLTVjNDUwNWU1LWQwNTItNGIwOC05NzI0LTE5YWY3MThlNWY0MS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sbiYzMOp0QRtlj4cKkvsn-44ez0MK9Txh6Kpbgej4z4"
    img.style.width = "100px";
    img.style.heigth = "100px";
    res.style.color = 'white';
    res.innerHTML = `<p>${cdz} é o Cavaleiro de Bronze da constelação de Andrômeda. Sua Armadura é conhecida por possuir correntes, que são utilizadas tanto para atacar, quanto para se defender. Misericordioso, humilde e gentil, Shun prefere resolver conflitos sem derramar sangue, só se envolvendo em combate quando realmente for necessário ou quando sua quase infinita paciência for esgotada.</p>`

} else if ( cdz == 4 || cdz == 4) {
    var img = document.createElement('img')
    var cdz = "Hyoga"
    img.src = "http://1.bp.blogspot.com/-QQOD4-cStck/T56ZN58w1qI/AAAAAAAAAzs/Y1s7njocAnM/s1600/212312.png";
    img.style.width = "180px";
    img.style.height = "250px";
    res.style.color = 'white'
    res.innerHTML = `<p>${cdz} Hyoga é o Cavaleiro de Bronze da constelação de Cygnus.  Seu domínio sobre o Cosmo lhe permite criar gelo e neve a temperaturas próximas do zero absoluto.Foi treinado pelos mestres Cristal (no anime) e Camus, o cavaleiro de ouro de aquário nos mangás</p>`
    
} else if (cdz == 5 || cdz == 5) {
    var img = document.createElement('img')
    var cdz = "Ikki"
    img.src = "https://i.pinimg.com/originals/f0/80/93/f0809363290bd3d17b95e9fb544d04cd.png";
    img.style.width = "200px";
    img.style.height = "300px";
    res.style.color = 'white'
    res.innerHTML = `<p>${cdz} é o Cavaleiro de Bronze da constelação de Phoenix. Ikki tem uma personalidade completamente oposta à de seu irmão mais novo Shun de Andrômeda: solitário, frio e agressivo. Ele foi treinado na Ilha da Rainha da Morte por Guilty, que o tornou em um ser movido a ódio puro e capaz de exercer todo o poder da Armadura de Fênix.Ikki já triunfou em diversas batalhas e sempre que morre, ele retorna à vida ainda mais forte, tornando-o praticamente invencível. </p>`
    
}

res.appendChild(img)