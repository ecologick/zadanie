document.addEventListener('DOMContentLoaded',()=>{

/* THEME */
const toggleTheme=()=>document.body.classList.toggle('light');
document.getElementById('themeToggle')?.addEventListener('click',toggleTheme);
document.getElementById('mobileThemeToggle')?.addEventListener('click',toggleTheme);

/* SLIDER + DOTS + SWIPE */
document.querySelectorAll('.slider').forEach(slider=>{
 const slides=[...slider.querySelectorAll('.slide')];
 const dots=slider.querySelector('.slide-dots');
 let i=0,startX=0;

 slides.forEach((_,idx)=>{
  const d=document.createElement('span');
  if(idx===0)d.classList.add('active');
  dots.appendChild(d);
 });

 const update=()=>{
  slides.forEach(s=>s.classList.remove('active'));
  dots.querySelectorAll('span').forEach(d=>d.classList.remove('active'));
  slides[i].classList.add('active');
  dots.children[i].classList.add('active');
 };

 slider.querySelector('.next').onclick=()=>{i=(i+1)%slides.length;update()};
 slider.querySelector('.prev').onclick=()=>{i=(i-1+slides.length)%slides.length;update()};

 slider.addEventListener('touchstart',e=>startX=e.touches[0].clientX);
 slider.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-startX;
  if(Math.abs(dx)>50){
   i=dx<0?(i+1)%slides.length:(i-1+slides.length)%slides.length;
   update();
  }
 });
});

/* LIKES */
document.querySelectorAll('.like-btn').forEach(b=>{
 b.onclick=()=>{
  b.classList.toggle('fa-solid');
  b.classList.toggle('fa-regular');
  b.classList.toggle('liked');
 };
});

/* AUDIO */
let active=null;
document.querySelectorAll('.post-music').forEach(m=>{
 const icon=m.querySelector('.music-icon');
 const audio=new Audio(m.dataset.audio);
 audio.loop=true;audio.playsInline=true;

 icon.onclick=()=>{
  if(active&&active!==audio){
   active.pause();
   document.querySelector('.music-icon.active')?.classList.remove('active');
  }
  if(audio.paused){
   audio.play().catch(()=>{});
   icon.classList.add('active');
   active=audio;
  }else{
   audio.pause();
   icon.classList.remove('active');
   active=null;
  }
 };
});

/* AUTO PAUSE */
window.addEventListener('scroll',()=>{
 if(!active)return;
 active.pause();
 document.querySelector('.music-icon.active')?.classList.remove('active');
 active=null;
});

});


















