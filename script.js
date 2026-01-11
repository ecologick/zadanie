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
const audio=new Audio(m.dataset.audio)
audio.loop=true
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









