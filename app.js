const lessons=["تغيّرات الحالة", "اتزان السائل والبخار وضغط البخار", "مخطط الطور", "قوانين الغازات", "معادلة الغاز المثالي", "الضغط الكلي والضغط الجزئي", "الغاز المثالي والغاز الحقيقي", "خصائص المحاليل", "ارتفاع درجة الغليان وانخفاض درجة التجمد", "الضغط الأسموزي", "الغرويات (محاليل الغرويات)", "بنية البلورات الفلزية", "بنية البلورات الأيونية"];
const lessons2=["التفاعلات الكيميائية وتغيرات الإنثالبي", "قانون هس", "الخلية الكهروكيميائية (1) – خلية دانيال", "الخلية الكهروكيميائية (2) – خلايا متنوعة", "التفاعلات عند الأقطاب الكهربائية (1)", "التحليل الكهربائي (2) – كمية الكهرباء، خليتان تحليليتان", "سرعة التفاعل", "العوامل المؤثرة في سرعة التفاعل", "الاتزان الكيميائي", "مبدأ لوشاتيليه", "الاتزان الأيوني", "الأملاح والمحاليل المائية", "حاصل الإذابة"];
const focus=[["حالات المادة", "حركة الجسيمات والطاقة والقوى بين الجزيئات", "تغيّرات الحالة"], ["حالات المادة", "التبخر والتكثف والاتزان الديناميكي وضغط البخار", "اتزان السائل والبخار وضغط البخار"], ["حالات المادة", "قراءة مخطط الطور والنقطة الثلاثية والحرجة", "مخطط الطور"], ["حالات المادة", "العلاقات بين الضغط والحجم ودرجة الحرارة", "قوانين الغازات"], ["حالات المادة", "ربط المتغيرات في نموذج الغاز المثالي", "معادلة الغاز المثالي"], ["حالات المادة", "الضغط الكلي ومساهمة كل غاز في خليط", "الضغط الكلي والضغط الجزئي"], ["حالات المادة", "حدود نموذج الغاز المثالي وسلوك الغاز الحقيقي", "الغاز المثالي والغاز الحقيقي"], ["حالات المادة", "المذاب والمذيب وخواص المحاليل", "خصائص المحاليل"], ["حالات المادة", "تأثير عدد جسيمات المذاب في الغليان والتجمد", "ارتفاع درجة الغليان وانخفاض درجة التجمد"], ["حالات المادة", "انتقال المذيب عبر غشاء شبه منفذ والضغط الأسموزي", "الضغط الأسموزي"], ["حالات المادة", "أنظمة مشتتة بين المحاليل والمعلقات", "الغرويات (محاليل الغرويات)"], ["حالات المادة", "الشبكة البلورية في الفلزات وعدد التناسق", "بنية البلورات الفلزية"], ["حالات المادة", "الشبكة البلورية والخواص في المواد الأيونية", "بنية البلورات الأيونية"], ["التغير والاتزان", "التفاعل الطارد والماص وتغير الإنثالبي", "التفاعلات الكيميائية وتغيرات الإنثالبي"], ["التغير والاتزان", "حساب تغير الإنثالبي من مسارات تفاعل متعددة", "قانون هس"], ["التغير والاتزان", "تحويل الطاقة الكيميائية إلى كهربائية في خلية دانيال", "الخلية الكهروكيميائية (1) – خلية دانيال"], ["التغير والاتزان", "مقارنة أنواع من الخلايا الكهروكيميائية", "الخلية الكهروكيميائية (2) – خلايا متنوعة"], ["التغير والاتزان", "الأكسدة والاختزال عند الأنود والكاثود", "التفاعلات عند الأقطاب الكهربائية (1)"], ["التغير والاتزان", "كمية الكهرباء وتطبيقات التحليل الكهربائي", "التحليل الكهربائي (2) – كمية الكهرباء، خليتان تحليليتان"], ["التغير والاتزان", "قياس سرعة التفاعل والتغير مع الزمن", "سرعة التفاعل"], ["التغير والاتزان", "التركيز ودرجة الحرارة ومساحة السطح والعوامل الحفازة", "العوامل المؤثرة في سرعة التفاعل"], ["التغير والاتزان", "الاتزان الديناميكي وثابت الاتزان", "الاتزان الكيميائي"], ["التغير والاتزان", "كيف يستجيب الاتزان لتغيير الظروف", "مبدأ لوشاتيليه"], ["التغير والاتزان", "اتزان الأحماض والقواعد والأيونات في المحاليل", "الاتزان الأيوني"], ["التغير والاتزان", "سلوك الأملاح عند ذوبانها في الماء", "الأملاح والمحاليل المائية"], ["التغير والاتزان", "التوازن بين الذوبان والترسيب وحاصل الإذابة", "حاصل الإذابة"]];
let current={unit:0,lesson:0,step:0,gameScore:0};
const screen=()=>document.getElementById("screen");
function toggleSide(){document.body.classList.toggle("side-open")}
function showHome(){screen().innerHTML=`<section class="hero"><div><span class="eyebrow">منصة كيمياء تفاعلية</span><h1>SPRIX <span>Chemistry</span></h1><p>تعلّم الكيمياء من خلال الشرح، الاستكشاف، التجارب التفاعلية، الحوار بين الشخصيات، والألعاب التعليمية — بدون تسجيل دخول.</p><div class="cta"><button class="primary pink" onclick="showMap()">ابدأ الرحلة</button><button class="primary outline" onclick="showLab()">ادخل المختبر</button></div></div><div class="hero-art"><div class="atom">⚛</div><div class="bubble b1">اسأل • جرّب • اكتشف</div><div class="bubble b2">🧪 المختبر مفتوح</div></div></section>`}
function showMap(){window.scrollTo(0,0);screen().innerHTML=`<section class="section"><div class="head"><div><span class="eyebrow">خريطة المنهج</span><h2>اختر عالمك الكيميائي</h2></div><input class="search" placeholder="ابحث عن درس..." oninput="filterLessons(this.value)"></div><div id="units" class="units"></div></section>`;renderUnits()}
function renderUnits(filter=""){const u=document.getElementById("units");u.innerHTML="";[lessons,lessons2].forEach((arr,ui)=>{const box=document.createElement("article");box.className="unit";box.innerHTML=`<div class="unit-top"><div class="badge">${ui+1}</div><b>${arr.length} درسًا</b></div><h3>الفصل ${ui+1} – ${ui?"التغيّر والاتزان في المادة":"حالات المادة"}</h3><p>${ui?"الإنثالبي والكيمياء الكهروكيميائية وسرعة التفاعل والاتزان.":"تغيّرات الحالة والغازات والمحاليل والغرويات والبنية البلورية."}</p><div class="lesson-list"></div>`;const list=box.querySelector(".lesson-list");arr.forEach((t,i)=>{if(filter&&!t.includes(filter))return;const x=document.createElement("div");x.className="lesson";x.innerHTML=`<span class="n">${i+1}</span><span>${t}</span>`;x.onclick=()=>openLesson(ui,i);list.appendChild(x)});u.appendChild(box)})}
function filterLessons(v){renderUnits(v.trim())}
function openLesson(u,l){current={unit:u,lesson:l,step:0};renderLesson();window.scrollTo(0,0)}

function speakKimchi(text){
  if(!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="ar-EG"; u.rate=.92; u.pitch=1.05;
  speechSynthesis.speak(u);
}
function showKimchi(){
  screen().innerHTML=`<section class="view">
    <button class="back" onclick="showMap()">← خريطة التعلم</button>
    <div class="kimchi-room">
      <div class="kimchi-stage">
        <div class="kimchi-character">
          <img src="assets/kimchi.jpeg" alt="كيمتشي — مرشد الكيمياء">
        </div>
        <div class="kimchi-screen">
          <span class="eyebrow">غرفة الحوار</span>
          <h1>كيمتشي معك في التجربة 🧪</h1>
          <p class="muted">اكتب سؤالك أو اختر موقفًا، وسيبدأ كيمتشي الحوار معك.</p>
          <div id="kimchiDialogue" class="kimchi-dialogue"></div>
          <div class="kimchi-input">
            <input id="kimchiInput" placeholder="اكتب سؤالك لكيمتشي..." onkeydown="if(event.key==='Enter')askKimchi()">
            <button class="primary pink" onclick="askKimchi()">إرسال</button>
          </div>
          <div class="quick">
            <button onclick="quickKimchi('اشرح لي الدرس بطريقة بسيطة')">اشرح لي ببساطة</button>
            <button onclick="quickKimchi('خلينا نجرب تجربة')">خلينا نجرب</button>
            <button onclick="quickKimchi('اسألني سؤالًا')">اختبرني</button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  kimchiMessage("أهلًا! أنا كيمتشي 👋 هكون معاك في رحلة الكيمياء. مش هديك المعلومة وخلاص؛ هنسأل ونفكر ونجرب سوا.");
}
function kimchiMessage(text){
  const box=document.getElementById("kimchiDialogue");
  if(!box)return;
  box.innerHTML+=`<div class="kimchi-msg"><img src="assets/kimchi.jpeg"><div><b>كيمتشي</b><p>${text}</p></div></div>`;
  box.scrollTop=box.scrollHeight;
  speakKimchi(text);
}
function studentMessage(text){
  const box=document.getElementById("kimchiDialogue");
  if(!box)return;
  box.innerHTML+=`<div class="student-msg"><div><b>أنت</b><p>${text}</p></div></div>`;
  box.scrollTop=box.scrollHeight;
}
function quickKimchi(text){
  document.getElementById("kimchiInput").value=text;
  askKimchi();
}
function askKimchi(){
  const input=document.getElementById("kimchiInput");
  const q=input.value.trim();
  if(!q)return;
  studentMessage(q); input.value="";
  const lower=q.toLowerCase();
  let answer;
  if(q.includes("تجرب")||q.includes("استكشاف")){
    answer="تمام! ادخل المختبر الافتراضي من القائمة. ابدأ بتغيير درجة الحرارة، لاحظ النتيجة، وبعدها قولي: إيه اللي اتغير وإيه الدليل اللي شفته؟";
  }else if(q.includes("سؤال")||q.includes("اختبر")){
    answer="جاهز؟ سؤال كيمتشي: ماذا تتوقع أن يحدث لحركة الجسيمات عندما تزداد الطاقة الحركية؟ اختار إجابتك من داخل الدرس، وبعدها نناقش السبب.";
  }else if(q.includes("ببساطة")||q.includes("اشرح")){
    answer="ببساطة: مش هدفنا نحفظ الكيمياء؛ هدفنا نفهم ماذا يحدث للجسيمات، ثم نستخدم الدليل والتجربة عشان نفسر الظاهرة.";
  }else{
    answer="سؤال ممتاز! خلينا نفككه كعلماء: ما الظاهرة التي نتحدث عنها؟ وما العامل الذي تغيّر؟ وما الدليل الذي يمكن أن نلاحظه أو نقيسه؟";
  }
  setTimeout(()=>kimchiMessage(answer),350);
}

function data(){const i=current.unit*13+current.lesson;return focus[i]||["الكيمياء","مفهوم أساسي في الدرس","استكشف"]}
function renderLesson(){const title=current.unit?lessons2[current.lesson]:lessons[current.lesson],d=data(),step=current.step;screen().innerHTML=`<section class="view"><button class="back" onclick="showMap()">← خريطة التعلم</button><div class="room"><div class="room-head"><small>الفصل ${current.unit+1} • الدرس ${current.lesson+1}</small><h1>${title}</h1><div class="progress"><span style="width:${(step+1)/4*100}%"></span></div></div><div class="room-body"><div class="stage"><div class="panel">${lessonStage(step,title,d)}</div><aside class="panel"><h3>الشخصيات</h3><div class="chars">${dialogue(step,title,d)}</div></aside></div><div class="room-actions"><button class="primary outline" onclick="showMap()">خروج</button><button class="primary pink" onclick="${step<3?"nextStep()":"finishLesson()"}">${step<3?"تابع →":"أنهِ الدرس ✓"}</button></div></div></div></section>`}
function lessonStage(step,title,d){if(step===0)return `<span class="eyebrow">1 • سؤال توجيهي</span><h2>${d[1]}</h2><div class="concept">ابدأ بالملاحظة: ما الذي تراه في الظاهرة؟ وما الذي تتوقع أن يحدث إذا غيّرنا أحد العوامل؟</div><button class="primary" onclick="nextStep()">أريد الاستكشاف</button>`;if(step===1)return `<span class="eyebrow">2 • الاستكشاف</span><h2>مختبر صغير</h2><p>حرّك المؤشر وشاهد كيف تتغير النتيجة. الفكرة هنا هي ربط الملاحظة بالنموذج العلمي.</p><input class="slider" type="range" min="0" max="100" value="45" oninput="document.getElementById('liquid').style.height=(20+this.value/2)+'%'"><div class="beaker"><div id="liquid" class="liquid"></div></div>`;if(step===2)return `<span class="eyebrow">3 • الشرح والحوار</span><h2>الفكرة العلمية</h2><div class="concept"><b>${d[0]}</b><br>${d[1]}.</div><p>طبّق الفكرة في موقف جديد، ثم ناقش السبب مع الشخصيات قبل الانتقال للتدريب.</p>`;return `<span class="eyebrow">4 • حاول بنفسك</span><h2>تحدي الدرس</h2><p>اختر أفضل تفسير للموقف. لا يوجد وقت محدد؛ الهدف هو التفكير العلمي.</p><button class="choice" onclick="this.textContent='✓ اختيار جيد — تابع التفكير في الدليل.'">أبحث عن الدليل قبل الحكم</button><button class="choice" onclick="this.textContent='جرّب ربط الإجابة بالمفهوم الأساسي.'">أختار الإجابة الأسرع</button>`}
function dialogue(step,title,d){const lines=[
["كيمتشي","بص على السؤال: "+title+"… إيه اللي تقدر تلاحظه بنفسك؟"],
["كيمتشي","ممتاز. الفكرة الأساسية هنا مرتبطة بـ "+d[1]+"."],
["كيمتشي","دلوقتي دورك: جرّب، وبعدها ناقش معايا الدليل اللي شفته."]
];return lines.map((x,i)=>`<div class="char"><div class="avatar kimchi-avatar"><img src="assets/kimchi.jpeg"></div><div class="speech"><b>${x[0]}</b><br>${x[1]} <button class="speak" onclick="speakKimchi(${JSON.stringify(x[1])})">🔊</button></div></div>`).join("")}
function nextStep(){current.step++;renderLesson();window.scrollTo(0,0)}
function finishLesson(){localStorage.setItem("sprix_last",JSON.stringify(current));alert("أحسنت! تم إنهاء الدرس. يمكنك الانتقال للدرس التالي.");if(current.lesson<12)openLesson(current.unit,current.lesson+1);else if(current.unit===0)openLesson(1,0);else showMap()}
function showLab(){screen().innerHTML=`<section class="section"><div class="head"><div><span class="eyebrow">المختبر الافتراضي</span><h2>جرّب بنفسك</h2></div></div><div class="lab-grid"><div class="lab-card"><h3>🧪 تجربة تغيّر الحرارة</h3><p>حرّك درجة الحرارة ولاحظ أثرها في حركة الجسيمات.</p><input class="slider" type="range" min="0" max="100" value="35" oninput="lab(this.value)"><div id="labResult" class="concept">درجة الحرارة منخفضة نسبيًا.</div></div><div class="lab-card"><h3>🔬 سؤال العالم</h3><p>أي نتيجة تتوقعها عند زيادة الطاقة الحركية للجسيمات؟</p><button class="choice" onclick="labAnswer(this,true)">تزداد الحركة ويزداد احتمال تغير الحالة</button><button class="choice" onclick="labAnswer(this,false)">تتوقف الجسيمات تمامًا</button><button class="choice" onclick="labAnswer(this,false)">لا يحدث أي تغير</button></div></div></section>`}
function lab(v){document.getElementById("labResult").textContent=v<35?"درجة الحرارة منخفضة نسبيًا.":v<70?"الجسيمات أصبحت أكثر نشاطًا.":"الطاقة الحركية مرتفعة؛ راقب أثرها في الحالة."}
function labAnswer(el,ok){el.textContent=ok?"✓ ممتاز — اربطها بحركة الجسيمات والطاقة.":"حاول مرة أخرى: فكّر في أثر الطاقة الحركية."}
function showGame(){current.gameScore=0;screen().innerHTML=`<section class="section"><span class="eyebrow">ساحة اللعب</span><h2>تحدي الكيميائي</h2><p>ثلاثة أسئلة سريعة من موضوعات المنهج.</p><div id="game" class="game-card"></div></section>`;gameQ(0)}
const qs=[["ما الذي يحدث عادةً لضغط البخار عند رفع درجة الحرارة؟",["يزداد","يختفي","لا يتغير"],0],["أي نوع من التفاعل يطلق حرارة إلى الوسط؟",["ماص","طارد","لا حراري"],1],["زيادة مساحة سطح مادة صلبة متفاعلة تؤدي غالبًا إلى:",["زيادة سرعة التفاعل","إيقاف التفاعل","عدم تغير السرعة"],0]];
function gameQ(n){if(n>=qs.length){document.getElementById("game").innerHTML=`<div class="score">نتيجتك: ${current.gameScore} / ${qs.length}</div><button class="primary pink" onclick="showMap()">ارجع للخريطة</button>`;return}const q=qs[n];document.getElementById("game").innerHTML=`<h3>${n+1} / ${qs.length} — ${q[0]}</h3>${q[1].map((a,i)=>`<button class="choice" onclick="answerGame(${n},${i})">${a}</button>`).join("")}`}
function answerGame(n,i){if(i===qs[n][2])current.gameScore++;gameQ(n+1)}
function showTalk(){screen().innerHTML=`<section class="section"><span class="eyebrow">غرفة النقاش</span><h2>الشخصيات تتناقش</h2><p>حوارات قصيرة قبل التجربة تساعدك على بناء التفسير العلمي.</p><div class="dialogue"><div class="talk-card">${dialogue(2,"الاتزان الكيميائي",["الاتزان الكيميائي","توازن ديناميكي بين اتجاهين","النقاش"])}</div><div class="talk-card">${dialogue(1,"سرعة التفاعل",["سرعة التفاعل","معدل حدوث التغير","النقاش"])}</div></div></section>`}
showHome();
