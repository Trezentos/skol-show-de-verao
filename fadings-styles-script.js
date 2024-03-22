document.addEventListener('DOMContentLoaded', () => {
    const aboutContainer = document.querySelector('.about-container ');

    const observer = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        });
    }, { threshold: 0.5 });  // Ajuste o threshold conforme necessário


    observer.observe(aboutContainer);
});


document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.event-card');

    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > 200) {
        cards.forEach(card=>{
            card.classList.add('visible')
        })
        // Aqui você pode adicionar o código que deseja executar quando o scroll passa de 200px
    }
});

window.addEventListener('load', (e)=>{
    if(window.innerWidth > 768) return
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card=> card.classList.add('visible'))
})