document.addEventListener('DOMContentLoaded',()=>{

/* SLIDER */
document.querySelectorAll('.slider').forEach(slider=>{
let slides=slider.querySelectorAll('.slide')
let i=0
slider.querySelector('.next').onclick=()=>{
slides[i].classList.remove('active')
i=(i+1)%slides.length
slides[i].classList.add('active')
}
slider.querySelector('.prev').onclick=()=>{
slides[i].classList.remove('active')
i=(i-1+slides.length)%slides.length
slides[i].classList.add('active')
}
})

/* THEME */
document.getElementById('themeToggle').onclick=()=>{
document.body.classList.toggle('light')
}

/* LIKES */
document.querySelectorAll('.like-btn').forEach(b=>{
b.onclick=()=>b.classList.toggle('liked')
})

/* MUSIC */
const audios=[]
document.querySelectorAll('.post-music').forEach(m=>{
const audio = new Audio(m.dataset.audio);
audio.loop = true;
m.audioRef = audio;
const icon=m.querySelector('.music-icon')
audios.push({audio,icon})

icon.onclick=()=>{
if(audio.paused){
audios.forEach(a=>{a.audio.pause();a.icon.classList.remove('active')})
audio.play()
icon.classList.add('active')
}else{
audio.pause()
icon.classList.remove('active')
}
}
})
})
/* ================= MUSIC AUTOPAUSE ON SCROLL ================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const post = entry.target;
        const music = post.querySelector('.post-music');
        if (!music) return;

        const audio = music.audioRef;
        const icon = music.querySelector('.music-icon');

        if (!entry.isIntersecting && audio && !audio.paused) {
            audio.pause();
            icon.classList.remove('active');
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.ig-post').forEach(post => observer.observe(post));











