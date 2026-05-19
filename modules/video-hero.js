(function(){
const hero=document.getElementById('home');
if(!hero)return;
const style=document.createElement('style');
style.textContent=`.hero-video-wrap{position:absolute;inset:0;overflow:hidden;z-index:0}.hero-video{position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;transform:translate(-50%,-50%);object-fit:cover}.hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(26,32,44,.7),rgba(26,54,93,.7));z-index:1}#home>div{position:relative;z-index:2}`;
document.head.appendChild(style);
const wrap=document.createElement('div');
wrap.className='hero-video-wrap';
wrap.innerHTML=`<video class="hero-video" autoplay muted loop playsinline poster="https://images.unsplash.com/photo-1581858726768-758a0336195c?w=1200&q=60"><source src="https://assets.mixkit.co/videos/preview/mixkit-construction-worker-sawing-a-plank-of-wood-4912-large.mp4" type="video/mp4"></video><div class="hero-overlay"></div>`;
hero.insertBefore(wrap,hero.firstChild);
hero.classList.remove('hero-bg');
hero.style.position='relative';
const obs=new IntersectionObserver(e=>{const v=wrap.querySelector('video');e.forEach(x=>{x.isIntersecting?v.play():v.pause()})},{threshold:.25});
obs.observe(hero);
})();
