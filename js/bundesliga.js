/* let bg = document.getElementById("bg")
        let André_Silva = document.getElementById("André_Silva")
        let haaland = document.getElementById("haaland")
        let Bellingham = document.getElementById("Bellingham")
        let Lewandowski = document.getElementById("Lewandowski")
        let muller = document.getElementById("muller")
        let reus = document.getElementById("reus")
        let paper_1 = document.getElementById("paper_1")
        let paper_2 = document.getElementById("paper_2")
        let text = document.getElementById("text") */
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    André_Silva.style.top = value * -0.6 + 'px';
    André_Silva.style.marginLeft = value * 0.6 + 'px';
    muller.style.top = value * 0.7 + 'px';
    muller.style.marginLeft = value * 0.5 + 'px';
    Lewandowski.style.top = value * -0.9 + 'px';
    Lewandowski.style.marginLeft = value * -0.8 + 'px';
    Bellingham.style.top = value * 0.9 + 'px';
    Bellingham.style.marginLeft = value * -0.5 + 'px';
    haaland.style.top = value * 0.9 + 'px';
    reus.style.top = value * 1.5 + 'px';
    paper_2.style.top = value * 0.001 + 'px';
    paper_1.style.top = value * 0.15 + 'px';
    text.style.top = value * -0.7 + 'px';
})