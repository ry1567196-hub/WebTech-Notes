(()=>{
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const A=v=>Array.isArray(v)?v:[],O=v=>v&&typeof v==='object'&&!Array.isArray(v)?v:{};
const S={get(k,d){try{const v=JSON.parse(localStorage.getItem('wta.'+k));return v==null?d:v}catch{return d}},set(k,v){try{localStorage.setItem('wta.'+k,JSON.stringify(v))}catch{}}};
const units=COURSE.units.map((u,i)=>({...u,n:i+1,topics:u.topics.map(t=>{t=typeof t==='string'?{title:t}:t;t={...t,...(window.CONTENT||{})[t.title]};return{...t,id:slug(t.title),unit:i+1}})}));
const T=units.flatMap(u=>u.topics),by=Object.fromEntries(T.map(t=>[t.id,t])),has=t=>!!t.notes,pct=(n,d)=>d?Math.round(100*n/d):0;
let done=A(S.get('done',[])).filter(x=>by[x]),marks=A(S.get('marks',[])).filter(x=>by[x]),hist=A(S.get('quiz',[])),known=O(S.get('known',{})),last=S.get('last',null),cur='',pending=null;
const save=()=>{S.set('done',done);S.set('marks',marks);S.set('quiz',hist);S.set('known',known);S.set('last',last)};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const main=$('#main'),open=new Set([1]);
/* theme */
const setTheme=t=>{document.documentElement.dataset.theme=t;S.set('theme',t)};
const th=S.get('theme');setTheme(th==='dark'||th==='light'?th:(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
$('#theme').onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
/* sidebar */
function side(){const f=$('#filter').value.trim().toLowerCase();
$('#nav').innerHTML=units.map(u=>{const ts=u.topics.filter(t=>t.title.toLowerCase().includes(f));if(!ts.length)return'';const d=u.topics.filter(t=>done.includes(t.id)).length,o=open.has(u.n)||f;
return`<div class="u ${o?'open':''}"><button aria-expanded="${!!o}" data-u="${u.n}"><span>UNIT ${u.n}: ${esc(u.title)}</span><small>${d}/${u.topics.length}</small></button><ul>${ts.map(t=>`<li><a href="#/${t.id}" class="${done.includes(t.id)?'dn ':''}${t.id===cur?'act ':''}${has(t)?'':'na'}">${esc(t.title)}</a></li>`).join('')}</ul></div>`}).join('')||'<p>No matching topics.</p>';
$('#overall').textContent=pct(done.length,T.length)+'% complete'}
$('#filter').oninput=side;
$('#nav').onclick=e=>{const b=e.target.closest('[data-u]');if(b){const p=b.parentNode,n=+b.dataset.u,o=p.classList.toggle('open');o?open.add(n):open.delete(n);b.setAttribute('aria-expanded',o)}else if(e.target.closest('a'))document.body.classList.remove('open')};
$('#menu').onclick=()=>document.body.classList.toggle('open');
/* dashboard */
function dash(){const fc=T.reduce((n,t)=>n+A(t.cards).length,0),lt=by[last]||T.find(has)||T[0],ft=T.find(has)||T[0];
main.innerHTML=`<section class="hero"><p>B.Tech CSE · Semester 5 · ${COURSE.code} · ${COURSE.title}</p><h1>Master Web Technology, One Topic at a Time.</h1><p>Your complete learning companion for Web Technology — from Internet fundamentals to AI-powered and decentralized web systems.</p><div class="row"><a class="btn" href="#/${lt.id}">Start Learning</a><button id="expl">Explore Syllabus</button></div></section>
<div class="grid">${[['Units',units.length],['Topics',T.length],['Topics with notes',T.filter(has).length],['Completed',done.length],['Flashcards',fc],['Quiz attempts',hist.length],['Overall progress',pct(done.length,T.length)+'%']].map(([k,v])=>`<div class="card"><div class="big">${v}</div><div class="mu">${k}</div></div>`).join('')}</div>
<div class="card"><h2>Continue learning</h2><a class="btn pri" href="#/${lt.id}">${esc(lt.title)}</a></div>
<h2 id="uc">Units</h2><div class="grid">${units.map(u=>{const d=u.topics.filter(t=>done.includes(t.id)).length,nx=u.topics.find(t=>!done.includes(t.id))||u.topics[0];return`<div class="card"><h3>Unit ${u.n}: ${esc(u.title)}</h3><p class="mu">${esc(u.desc)}</p><p>${u.topics.length} topics · ${pct(d,u.topics.length)}%</p><div class="bar"><i style="width:${pct(d,u.topics.length)}%"></i></div><a class="btn" href="#/${nx.id}">${d?'Continue':'Start'} learning</a></div>`}).join('')}</div>
<h2>Quick access</h2><div class="row"><a class="btn" href="#/${ft.id}">All notes</a><a class="btn" data-sec="short" href="#/${ft.id}">Short notes</a><a class="btn" data-sec="fc" href="#/${ft.id}">Flashcards</a><a class="btn" data-sec="qz" href="#/${ft.id}">Quizzes</a><a class="btn" href="#/bookmarks">Bookmarks (${marks.length})</a><a class="btn" href="#/revision">Revision quiz</a></div>
<p><button data-act="reset">Reset all progress</button></p>`;
$('#expl').onclick=()=>$('#uc').scrollIntoView({behavior:'smooth'})}
/* topic page */
function topic(t){const u=units[t.unit-1],i=T.indexOf(t),p=T[i-1],n=T[i+1];last=t.id;S.set('last',last);
const words=(t.notes||'').replace(/<[^>]+>/g,' ').split(/\s+/).length+(t.intro||'').split(/\s+/).length;
let h=`<nav class="mu noprint" aria-label="Breadcrumb"><a href="#/">Home</a> › Unit ${u.n} › ${esc(t.title)}</nav><h1>${esc(t.title)}</h1><p class="mu">Unit ${u.n}: ${esc(u.title)} · ${COURSE.code}${has(t)?' · '+Math.max(1,Math.ceil(words/200))+' min read':''}</p>`;
if(has(t)){h+=`<div class="row noprint"><button class="pri" data-act="done">${done.includes(t.id)?'✓ Completed (undo)':'Mark as completed'}</button><button data-act="mark">${marks.includes(t.id)?'★ Bookmarked':'☆ Bookmark'}</button><button data-act="print">Print / Save as PDF</button></div>
<div class="card"><p>${esc(t.intro)}</p><h3>Learning objectives</h3><ul>${A(t.obj).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
<div class="card">${t.notes}</div>
${t.demo?'<div class="card pg" id="pg"><h2>Try it yourself</h2></div>':''}
<div class="card" id="short"><h2>Short notes</h2><ul>${A(t.short).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><button data-act="copy">Copy short notes</button></div>
<div class="card" id="fc"><h2>Flashcards</h2><div id="fcm"></div></div><div class="card" id="qz"><h2>Quiz</h2><div id="qzm"></div></div>`}
else h+=`<div class="card"><h3>Notes for this topic are not written yet</h3><p>This topic is part of the CS35302 syllabus map (Unit ${u.n}), but its notes, flashcards and quiz have not been added to <code>js/course-data.js</code> yet. Topics with content are marked in the sidebar.</p></div>`;
h+=`<div class="row noprint">${p?`<a class="btn" href="#/${p.id}">← ${esc(p.title)}</a>`:''}${n?`<a class="btn pri" href="#/${n.id}">${esc(n.title)} →</a>`:''}</div>`;
main.innerHTML=h;if(has(t)){flash($('#fcm'),t);quiz($('#qzm'),A(t.quiz),t.id);if(t.demo)pg($('#pg'),t.demo)}}
function books(){main.innerHTML=`<h1>Bookmarks</h1><div class="card">${marks.length?'<ul>'+marks.map(id=>`<li><a href="#/${id}">${esc(by[id].title)}</a></li>`).join('')+'</ul>':'<p>No bookmarks yet. Open a topic and press Bookmark.</p>'}</div>`}
function rev(){const qs=shuffle(T.flatMap(t=>A(t.quiz))).slice(0,10);main.innerHTML=`<h1>Mixed revision quiz</h1><p class="mu">Random questions drawn from every topic that has quiz data.</p><div class="card" id="qzm"></div>`;qs.length?quiz($('#qzm'),qs,'mixed'):$('#qzm').textContent='No quiz questions available yet.'}
/* flashcards */
function flash(el,t){const c=A(t.cards);let o=c.map((_,i)=>i),i=0;
const draw=()=>{const k=o[i];el.innerHTML=`<div class="fc" tabindex="0" role="button" aria-label="Flip card"><div class="in"><div class="face">${esc(c[k][0])}</div><div class="face back">${esc(c[k][1])}</div></div></div><p>Card ${i+1} of ${o.length}${known[t.id+':'+k]?' · marked '+known[t.id+':'+k]:''}</p><div class="row"><button data-a="p">Prev</button><button data-a="n">Next</button><button data-a="s">Shuffle</button><button data-a="r">Reset</button><button data-a="k">Known</button><button data-a="v">Review</button></div>`};
el.onclick=e=>{const f=e.target.closest('.fc'),a=e.target.dataset.a;if(f)return f.classList.toggle('flip');if(!a)return;
if(a==='p')i=(i-1+o.length)%o.length;if(a==='n')i=(i+1)%o.length;if(a==='s'){o=shuffle(o);i=0}
if(a==='r'){o=c.map((_,j)=>j);i=0;c.forEach((_,j)=>delete known[t.id+':'+j]);save()}
if(a==='k'||a==='v'){known[t.id+':'+o[i]]=a==='k'?'known':'review';save()}draw()};
el.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('fc')){e.preventDefault();e.target.classList.toggle('flip')}};draw()}
/* quiz */
function quiz(el,qs,id){let q=shuffle(qs),i=0,sc=0;
const draw=()=>{if(i>=q.length){hist.push({id,score:sc,total:q.length,at:Date.now()});hist=hist.slice(-100);save();el.innerHTML=`<h3>Score: ${sc} / ${q.length}</h3><p>${sc} correct · ${q.length-sc} incorrect</p><button class="pri" data-r>Restart</button>`;return}
const[s,o]=q[i];el.innerHTML=`<p><b>Q${i+1}/${q.length}.</b> ${esc(s)}</p>${o.map((x,j)=>`<button class="opt" data-o="${j}">${esc(x)}</button>`).join('')}<div id="fb" aria-live="polite"></div>`};
el.onclick=e=>{const b=e.target;if(b.dataset.r!==undefined){q=shuffle(qs);i=sc=0;return draw()}if(b.dataset.nx!==undefined){i++;return draw()}
if(b.dataset.o===undefined||$('.ok',el))return;const[,,a,x]=q[i],j=+b.dataset.o;if(j===a)sc++;
$$('.opt',el).forEach((n,k)=>{n.classList.toggle('ok',k===a);n.classList.toggle('bad',k===j&&j!==a)});
$('#fb',el).innerHTML=`<p>${j===a?'✅ Correct.':'❌ Incorrect.'} ${esc(x)}</p><button class="pri" data-nx>${i+1<q.length?'Next':'Finish'}</button>`};draw()}
/* sandboxed playground */
function pg(el,d){el.insertAdjacentHTML('beforeend',['html','css','js'].map(k=>`<label>${k.toUpperCase()}<textarea data-k="${k}" spellcheck="false">${esc(d[k]||'')}</textarea></label>`).join('')+`<div class="row"><button class="pri" data-run>Run</button><button data-rst>Reset</button></div><iframe title="Output preview" sandbox="allow-scripts"></iframe>`);
const v=k=>$(`[data-k=${k}]`,el).value,run=()=>{$('iframe',el).srcdoc=`<!doctype html><style>body{font:15px system-ui;padding:8px}${v('css')}</style>${v('html')}<script>addEventListener('error',e=>document.body.insertAdjacentHTML('beforeend','<p style="color:#b91c1c">Error: '+e.message+'</p>'));<\/script><script>${v('js')}<\/script>`};
el.onclick=e=>{if(e.target.dataset.run!==undefined)run();if(e.target.dataset.rst!==undefined){['html','css','js'].forEach(k=>$(`[data-k=${k}]`,el).value=d[k]||'');run()}};run()}
/* search over course data */
const idx=T.map(t=>({t,seg:[t.title,units[t.unit-1].title,t.intro,...A(t.obj),...A(t.short),...A(t.cards).map(c=>c[0]),(t.notes||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ')].filter(Boolean)}));
const openS=()=>{$('#ov').hidden=false;$('#q').focus();find()},closeS=()=>{$('#ov').hidden=true};
function find(){const q=$('#q').value.trim().toLowerCase(),r=q?idx.map(({t,seg})=>{const s=seg.find(x=>x.toLowerCase().includes(q));return s&&{t,s,k:s.toLowerCase().indexOf(q)}}).filter(Boolean).slice(0,30):[];
$('#res').innerHTML=!q?'<p class="mu">Start typing to search the whole syllabus.</p>':r.length?r.map(({t,s,k})=>`<a class="hit" href="#/${t.id}"><b>${esc(t.title)}</b><small>Unit ${t.unit}: ${esc(units[t.unit-1].title)}</small><small>${k>40?'…':''}${esc(s.slice(Math.max(0,k-40),k+100))}</small></a>`).join(''):`<p>No results for “${esc(q)}”. Try a shorter word.</p>`}
$('#searchBtn').onclick=openS;$('#q').oninput=find;$('#ov').onclick=e=>{if(e.target.id==='ov'||e.target.closest('.hit'))closeS()};
addEventListener('keydown',e=>{if(e.key==='Escape')closeS();else if((e.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))||(e.ctrlKey&&e.key.toLowerCase()==='k')){e.preventDefault();openS()}});
/* actions + router */
main.onclick=async e=>{const s=e.target.closest('[data-sec]');if(s)pending=s.dataset.sec;const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,id=cur,t=by[id];
if(a==='done'){done=done.includes(id)?done.filter(x=>x!==id):[...done,id];save();b.textContent=done.includes(id)?'✓ Completed (undo)':'Mark as completed';side()}
if(a==='mark'){marks=marks.includes(id)?marks.filter(x=>x!==id):[...marks,id];save();b.textContent=marks.includes(id)?'★ Bookmarked':'☆ Bookmark'}
if(a==='print')print();
if(a==='copy'){try{await navigator.clipboard.writeText(t.title+'\n'+A(t.short).map(x=>'• '+x).join('\n'));b.textContent='Copied ✓'}catch{b.textContent='Copy not available'}}
if(a==='reset'&&confirm('Reset all progress, bookmarks and quiz history?')){done=[];marks=[];hist=[];known={};last=null;save();route()}};
function route(){const h=location.hash.replace(/^#\/?/,'');cur=by[h]?h:'';
try{if(cur)topic(by[h]);else if(h==='bookmarks')books();else if(h==='revision')rev();else dash()}catch(err){main.innerHTML='<div class="card"><h3>Something went wrong</h3><p>'+esc(err.message)+'</p></div>'}
side();document.body.classList.remove('open');scrollTo(0,0);if(pending){$('#'+pending)?.scrollIntoView();pending=null}}
addEventListener('hashchange',route);route();
addEventListener('scroll',()=>{const d=document.documentElement,m=d.scrollHeight-d.clientHeight;$('#prog').style.width=(m>0?100*d.scrollTop/m:0)+'%'},{passive:true});
})();
