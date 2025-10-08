// ====== Nav interactions ======
const header = document.querySelector('.header.container');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');

window.addEventListener('scroll', () => {
  const y = window.scrollY || window.pageYOffset;
  header.style.backgroundColor = y > 60 ? 'rgba(31,30,30,0.85)' : 'transparent';
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-list a').forEach(a => {
  a.addEventListener('click', () => navList.classList.remove('open'));
});

// ====== FOMO Calculator (from reference) ======
(function(){
  const btn = document.getElementById('calculate-btn');
  if(!btn) return;
  btn.addEventListener('click', function(){
    let total = 0;
    const totalQuestions = 9;
    let answered = 0;
    for(let i=1;i<=totalQuestions;i++){
      const chosen = document.querySelector(`input[name="q${i}"]:checked`);
      if(chosen){ total += parseInt(chosen.value); answered++; }
    }
    if(answered < totalQuestions){
      alert('Mohon jawab semua pertanyaan sebelum melihat hasil.');
      return;
    }
    const result = document.getElementById('result-container');
    const scoreEl = document.getElementById('score-value');
    const levelEl = document.getElementById('fomo-level');
    const descEl = document.getElementById('fomo-description');

    scoreEl.textContent = total;
    const threshold = 22;
    if(total > threshold){
      levelEl.textContent = 'High FOMO';
      levelEl.className = 'high';
      descEl.textContent = 'Skor menunjukkan kecenderungan FOMO yang tinggi. Waspada keputusan impulsif dan pertimbangkan aturan manajemen risiko.';
    }else{
      levelEl.textContent = 'Low FOMO';
      levelEl.className = 'low';
      descEl.textContent = 'Kecenderungan FOMO rendah. Teruskan disiplin riset dan pengelolaan risiko yang rasional.';
    }
    result.style.display = 'block';
    result.scrollIntoView({behavior:'smooth'});
  });
})();