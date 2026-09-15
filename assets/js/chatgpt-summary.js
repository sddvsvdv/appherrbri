(() => {
  const translations = {
    ja: {
      button: "ChatGPTで要約",
      description: "VolumTransportでできることを数秒で確認できます。",
      prompt: "VolumTransportについてもっと詳しく知り、荷物の積み込み計画にどのように役立つのかを知りたいです。このページをもとに、アプリで何ができるのか、どのように使うのか、どのような人に役立つのか、主な機能と利点を分かりやすく説明してください。また、他の類似ソリューションと比べてどのような特徴があるのかも簡潔に説明してください。ページに記載されている情報だけを使用し、出典としてリンクを記載してください："
    },
    bg: {
      button: "Обобщи с ChatGPT",
      description: "Открийте за секунди какво може VolumTransport.",
      prompt: "Искам да науча повече за VolumTransport и да разбера как може да ми помогне да планирам товаренето. Въз основа на тази страница ми обясни ясно какво прави приложението, как работи, за кого може да бъде полезно и кои са основните му функции и предимства. Спомени също накратко какво предлага в сравнение с други подобни решения. Използвай само информацията от страницата и включи връзката като източник: "
    },
    bn: {
      button: "ChatGPT দিয়ে সংক্ষেপ করুন",
      description: "VolumTransport কী করতে পারে, কয়েক সেকেন্ডেই জেনে নিন।",
      prompt: "আমি VolumTransport সম্পর্কে আরও ভালোভাবে জানতে চাই এবং এটি কীভাবে আমাকে একটি লোড পরিকল্পনা করতে সাহায্য করতে পারে তা বুঝতে চাই। এই পৃষ্ঠার ভিত্তিতে, অ্যাপটি কী করে, কীভাবে কাজ করে, কার জন্য উপকারী হতে পারে এবং এর প্রধান বৈশিষ্ট্য ও সুবিধাগুলো কী—তা পরিষ্কারভাবে ব্যাখ্যা করুন। একই ধরনের অন্যান্য সমাধানের তুলনায় এটি কী অতিরিক্ত সুবিধা দেয়, সেটিও সংক্ষেপে উল্লেখ করুন। শুধু এই পৃষ্ঠায় থাকা তথ্য ব্যবহার করুন এবং উৎস হিসেবে লিঙ্কটি অন্তর্ভুক্ত করুন: "
    },
    cs: {
      button: "Shrnout pomocí ChatGPT",
      description: "Zjistěte během několika sekund, co VolumTransport dokáže.",
      prompt: "Chci se lépe seznámit s VolumTransport a zjistit, jak mi může pomoci s plánováním nákladu. Na základě této stránky mi jasně vysvětlete, co aplikace dělá, jak funguje, pro koho může být užitečná a jaké jsou její hlavní funkce a výhody. Stručně také uveďte, co nabízí ve srovnání s jinými podobnými řešeními. Použijte pouze informace z této stránky a uveďte odkaz jako zdroj: "
    },
    "zh-hans": {
      button: "使用 ChatGPT 总结",
      description: "几秒钟了解 VolumTransport 可以做什么。",
      prompt: "我想进一步了解 VolumTransport，并知道它如何帮助我规划装载。请根据此页面，清晰说明这款应用的用途、工作方式、适合哪些人，以及它的主要功能和优势。也请简要说明与其他类似解决方案相比，它能提供哪些不同之处。只使用此页面中的信息，并将链接作为来源："
    },
    ko: {
      button: "ChatGPT로 요약",
      description: "VolumTransport가 무엇을 할 수 있는지 몇 초 만에 확인해 보세요.",
      prompt: "VolumTransport에 대해 더 자세히 알아보고, 적재 계획에 어떻게 도움이 될 수 있는지 알고 싶습니다. 이 페이지를 바탕으로 앱이 무엇을 하는지, 어떻게 작동하는지, 누구에게 유용한지, 주요 기능과 장점은 무엇인지 명확하게 설명해 주세요. 또한 다른 유사한 솔루션과 비교했을 때 어떤 점을 제공하는지도 간단히 설명해 주세요. 이 페이지의 정보만 사용하고 링크를 출처로 포함해 주세요: "
    },
    hr: {
      button: "Sažmi pomoću ChatGPT-a",
      description: "U nekoliko sekundi saznajte što VolumTransport može učiniti.",
      prompt: "Želim bolje upoznati VolumTransport i saznati kako mi može pomoći u planiranju utovara. Na temelju ove stranice jasno mi objasnite što aplikacija radi, kako funkcionira, kome može biti korisna te koje su njezine glavne funkcije i prednosti. Ukratko navedite i što nudi u usporedbi s drugim sličnim rješenjima. Koristite samo informacije s ove stranice i uključite poveznicu kao izvor: "
    },
    da: {
      button: "Opsummer med ChatGPT",
      description: "Find ud af på få sekunder, hvad VolumTransport kan gøre.",
      prompt: "Jeg vil gerne lære VolumTransport bedre at kende og forstå, hvordan appen kan hjælpe mig med at planlægge en last. Ud fra denne side skal du tydeligt forklare, hvad appen gør, hvordan den fungerer, hvem den kan være nyttig for, og hvilke vigtigste funktioner og fordele den har. Forklar også kort, hvad den tilbyder sammenlignet med andre lignende løsninger. Brug kun oplysningerne på denne side, og medtag linket som kilde: "
    },
    sk: {
      button: "Zhrnúť pomocou ChatGPT",
      description: "Za pár sekúnd zistite, čo dokáže VolumTransport.",
      prompt: "Chcem lepšie spoznať VolumTransport a zistiť, ako mi môže pomôcť pri plánovaní nákladu. Na základe tejto stránky mi jasne vysvetlite, čo aplikácia robí, ako funguje, pre koho môže byť užitočná a aké sú jej hlavné funkcie a výhody. Stručne tiež uveďte, čo ponúka v porovnaní s inými podobnými riešeniami. Použite iba informácie z tejto stránky a uveďte odkaz ako zdroj: "
    },
    sl: {
      button: "Povzemi s ChatGPT",
      description: "V nekaj sekundah odkrijte, kaj zmore VolumTransport.",
      prompt: "Želim bolje spoznati VolumTransport in izvedeti, kako mi lahko pomaga pri načrtovanju tovora. Na podlagi te strani mi jasno razložite, kaj aplikacija počne, kako deluje, komu je lahko koristna ter katere so njene glavne funkcije in prednosti. Na kratko omenite tudi, kaj ponuja v primerjavi z drugimi podobnimi rešitvami. Uporabite samo informacije s te strani in vključite povezavo kot vir: "
    },
    et: {
      button: "Tee kokkuvõte ChatGPT-ga",
      description: "Vaadake mõne sekundiga, mida VolumTransport suudab.",
      prompt: "Soovin VolumTransporti paremini tundma õppida ja teada saada, kuidas see aitab mul koormat planeerida. Selle lehe põhjal selgitage selgelt, mida rakendus teeb, kuidas see töötab, kellele see võib kasulik olla ning millised on selle peamised funktsioonid ja eelised. Mainige lühidalt ka seda, mida see pakub võrreldes teiste sarnaste lahendustega. Kasutage ainult sellel lehel olevat teavet ja lisage link allikana: "
    },
    fi: {
      button: "Tiivistä ChatGPT:llä",
      description: "Selvitä muutamassa sekunnissa, mitä VolumTransport voi tehdä.",
      prompt: "Haluan tutustua VolumTransportiin paremmin ja ymmärtää, miten se voi auttaa minua kuorman suunnittelussa. Selitä tämän sivun perusteella selkeästi, mitä sovellus tekee, miten se toimii, kenelle siitä voi olla hyötyä sekä mitkä ovat sen tärkeimmät ominaisuudet ja edut. Kerro myös lyhyesti, mitä se tarjoaa verrattuna muihin vastaaviin ratkaisuihin. Käytä vain tämän sivun tietoja ja lisää linkki lähteeksi: "
    },
    el: {
      button: "Σύνοψη με το ChatGPT",
      description: "Ανακαλύψτε σε λίγα δευτερόλεπτα τι μπορεί να κάνει το VolumTransport.",
      prompt: "Θέλω να γνωρίσω καλύτερα το VolumTransport και να μάθω πώς μπορεί να με βοηθήσει στον σχεδιασμό μιας φόρτωσης. Με βάση αυτή τη σελίδα, εξήγησέ μου με σαφήνεια τι κάνει η εφαρμογή, πώς λειτουργεί, σε ποιους μπορεί να είναι χρήσιμη και ποιες είναι οι βασικές λειτουργίες και τα πλεονεκτήματά της. Ανέφερε επίσης σύντομα τι προσφέρει σε σύγκριση με άλλες παρόμοιες λύσεις. Χρησιμοποίησε μόνο τις πληροφορίες αυτής της σελίδας και συμπερίλαβε τον σύνδεσμο ως πηγή: "
    },
    hu: {
      button: "Összefoglalás ChatGPT-vel",
      description: "Néhány másodperc alatt megtudhatja, mire képes a VolumTransport.",
      prompt: "Szeretném jobban megismerni a VolumTransportot, és megtudni, hogyan segíthet a rakomány megtervezésében. Ezen oldal alapján magyarázd el világosan, mit csinál az alkalmazás, hogyan működik, kiknek lehet hasznos, valamint melyek a fő funkciói és előnyei. Röviden azt is ismertesd, mit kínál más hasonló megoldásokhoz képest. Kizárólag az ezen az oldalon található információkat használd, és a hivatkozást is tüntesd fel forrásként: "
    },
    id: {
      button: "Ringkas dengan ChatGPT",
      description: "Ketahui dalam beberapa detik apa yang dapat dilakukan VolumTransport.",
      prompt: "Saya ingin mengenal VolumTransport lebih baik dan mengetahui bagaimana aplikasi ini dapat membantu saya merencanakan muatan. Berdasarkan halaman ini, jelaskan dengan jelas apa yang dilakukan aplikasi, bagaimana cara kerjanya, siapa yang dapat memperoleh manfaat darinya, serta apa saja fungsi utama dan keunggulannya. Jelaskan juga secara singkat apa yang ditawarkannya dibandingkan solusi serupa lainnya. Gunakan hanya informasi yang ada di halaman ini dan sertakan tautannya sebagai sumber: "
    },
    he: {
      button: "סיכום עם ChatGPT",
      description: "גלו בתוך שניות מה VolumTransport יכול לעשות.",
      prompt: "אני רוצה להכיר טוב יותר את VolumTransport ולדעת כיצד הוא יכול לעזור לי לתכנן טעינה. על סמך עמוד זה, הסבר לי בצורה ברורה מה האפליקציה עושה, כיצד היא פועלת, למי היא יכולה להיות שימושית ומהן הפונקציות והיתרונות העיקריים שלה. ציין בקצרה גם מה היא מציעה בהשוואה לפתרונות דומים אחרים. השתמש רק במידע שמופיע בעמוד וכלול את הקישור כמקור: "
    },
    fa: {
      button: "خلاصه‌سازی با ChatGPT",
      description: "در چند ثانیه ببینید VolumTransport چه کارهایی می‌تواند انجام دهد.",
      prompt: "می‌خواهم VolumTransport را بهتر بشناسم و بدانم چگونه می‌تواند به من در برنامه‌ریزی بارگیری کمک کند. بر اساس این صفحه، به‌روشنی توضیح بده که برنامه چه کاری انجام می‌دهد، چگونه کار می‌کند، برای چه کسانی می‌تواند مفید باشد و مهم‌ترین قابلیت‌ها و مزایای آن چیست. همچنین به‌طور کوتاه توضیح بده که در مقایسه با راهکارهای مشابه چه مزیتی ارائه می‌دهد. فقط از اطلاعات همین صفحه استفاده کن و لینک را به‌عنوان منبع ذکر کن: "
    },
    it: {
      button: "Riassumi con ChatGPT",
      description: "Scopri in pochi secondi cosa può fare VolumTransport.",
      prompt: "Voglio conoscere meglio VolumTransport e capire come può aiutarmi a pianificare un carico. In base a questa pagina, spiegami in modo chiaro cosa fa l'applicazione, come funziona, per chi può essere utile e quali sono le sue principali funzioni e i suoi vantaggi. Spiega anche brevemente cosa offre rispetto ad altre soluzioni simili. Utilizza esclusivamente le informazioni presenti nella pagina e includi il link come fonte: "
    },
    lo: {
      button: "ສະຫຼຸບດ້ວຍ ChatGPT",
      description: "ຄົ້ນພົບໃນບໍ່ກີ່ວິນາທີວ່າ VolumTransport ສາມາດເຮັດຫຍັງໄດ້.",
      prompt: "ຂ້ອຍຕ້ອງການຮູ້ຈັກ VolumTransport ໃຫ້ດີຂຶ້ນ ແລະ ຮູ້ວ່າມັນສາມາດຊ່ວຍຂ້ອຍວາງແຜນການບັນທຸກໄດ້ແນວໃດ. ອີງຕາມໜ້ານີ້, ອະທິບາຍໃຫ້ຂ້ອຍຢ່າງຊັດເຈນວ່າແອັບເຮັດຫຍັງ, ເຮັດວຽກແນວໃດ, ເໝາະສຳລັບໃຜ ແລະ ມີຟັງຊັນ ແລະ ຂໍ້ດີຫຼັກຫຍັງແດ່. ກະລຸນາອະທິບາຍສັ້ນໆດ້ວຍວ່າມັນມີຫຍັງເດັ່ນກວ່າວິທີແກ້ໄຂອື່ນໆທີ່ຄ້າຍຄືກັນ. ໃຊ້ສະເພາະຂໍ້ມູນທີ່ມີໃນໜ້ານີ້ ແລະ ໃສ່ລິ້ງເປັນແຫຼ່ງຂໍ້ມູນ: "
    },
    lv: {
      button: "Apkopot ar ChatGPT",
      description: "Dažās sekundēs uzziniet, ko spēj VolumTransport.",
      prompt: "Vēlos labāk iepazīt VolumTransport un uzzināt, kā tas var palīdzēt man plānot kravu. Balstoties uz šo lapu, skaidri izskaidro, ko lietotne dara, kā tā darbojas, kam tā var būt noderīga un kādas ir tās galvenās funkcijas un priekšrocības. Īsi paskaidro arī, ko tā piedāvā salīdzinājumā ar citiem līdzīgiem risinājumiem. Izmanto tikai šajā lapā pieejamo informāciju un norādi saiti kā avotu: "
    },
    lt: {
      button: "Apibendrinti su ChatGPT",
      description: "Per kelias sekundes sužinokite, ką gali VolumTransport.",
      prompt: "Noriu geriau susipažinti su VolumTransport ir sužinoti, kaip ji gali padėti planuoti krovinį. Remdamiesi šiuo puslapiu aiškiai paaiškinkite, ką programėlė daro, kaip ji veikia, kam gali būti naudinga ir kokios yra pagrindinės jos funkcijos bei privalumai. Taip pat trumpai paaiškinkite, ką ji siūlo, palyginti su kitais panašiais sprendimais. Naudokite tik šiame puslapyje pateiktą informaciją ir įtraukite nuorodą kaip šaltinį: "
    },
    ne: {
      button: "ChatGPT मार्फत सारांश",
      description: "केही सेकेन्डमै VolumTransport ले के गर्न सक्छ भनेर जान्नुहोस्।",
      prompt: "म VolumTransport बारे अझ राम्रोसँग जान्न चाहन्छु र यसले मलाई लोड योजना बनाउन कसरी मद्दत गर्न सक्छ भनेर बुझ्न चाहन्छु। यस पृष्ठका आधारमा एपले के गर्छ, कसरी काम गर्छ, कसका लागि उपयोगी हुन सक्छ र यसको मुख्य सुविधाहरू तथा फाइदाहरू के हुन् भन्ने कुरा स्पष्ट रूपमा व्याख्या गर्नुहोस्। साथै, अन्य समान समाधानहरूको तुलनामा यसले के फरक वा थप सुविधा दिन्छ भन्ने कुरा छोटकरीमा बताउनुहोस्। यस पृष्ठमा भएको जानकारी मात्र प्रयोग गर्नुहोस् र स्रोतका रूपमा लिंक समावेश गर्नुहोस्: "
    },
    no: {
      button: "Oppsummer med ChatGPT",
      description: "Finn ut på noen sekunder hva VolumTransport kan gjøre.",
      prompt: "Jeg vil bli bedre kjent med VolumTransport og finne ut hvordan appen kan hjelpe meg med å planlegge en last. Basert på denne siden, forklar tydelig hva appen gjør, hvordan den fungerer, hvem den kan være nyttig for, og hvilke hovedfunksjoner og fordeler den har. Forklar også kort hva den tilbyr sammenlignet med andre lignende løsninger. Bruk bare informasjonen på denne siden, og inkluder lenken som kilde: "
    },
    nl: {
      button: "Samenvatten met ChatGPT",
      description: "Ontdek in enkele seconden wat VolumTransport kan doen.",
      prompt: "Ik wil VolumTransport beter leren kennen en weten hoe de app mij kan helpen bij het plannen van een lading. Leg op basis van deze pagina duidelijk uit wat de app doet, hoe hij werkt, voor wie hij nuttig kan zijn en wat de belangrijkste functies en voordelen zijn. Leg ook kort uit wat VolumTransport biedt in vergelijking met andere vergelijkbare oplossingen. Gebruik alleen de informatie op deze pagina en neem de link op als bron: "
    },
    pl: {
      button: "Podsumuj z ChatGPT",
      description: "W kilka sekund sprawdź, co potrafi VolumTransport.",
      prompt: "Chcę lepiej poznać VolumTransport i dowiedzieć się, jak może mi pomóc w planowaniu załadunku. Na podstawie tej strony wyjaśnij jasno, co robi aplikacja, jak działa, dla kogo może być przydatna oraz jakie są jej główne funkcje i zalety. Krótko opisz również, co oferuje w porównaniu z innymi podobnymi rozwiązaniami. Korzystaj wyłącznie z informacji znajdujących się na tej stronie i podaj link jako źródło: "
    },
    ro: {
      button: "Rezumați cu ChatGPT",
      description: "Descoperă în câteva secunde ce poate face VolumTransport.",
      prompt: "Vreau să cunosc mai bine VolumTransport și să aflu cum mă poate ajuta să planific o încărcare. Pe baza acestei pagini, explică-mi clar ce face aplicația, cum funcționează, pentru cine poate fi utilă și care sunt principalele sale funcții și avantaje. Menționează, de asemenea, pe scurt ce oferă în comparație cu alte soluții similare. Folosește doar informațiile de pe această pagină și include linkul ca sursă: "
    },
    ru: {
      button: "Кратко с ChatGPT",
      description: "За несколько секунд узнайте, что умеет VolumTransport.",
      prompt: "Я хочу лучше узнать VolumTransport и понять, как приложение может помочь мне спланировать загрузку. На основе этой страницы ясно объясните, что делает приложение, как оно работает, кому оно может быть полезно, а также каковы его основные функции и преимущества. Также кратко расскажите, что оно предлагает по сравнению с другими похожими решениями. Используйте только информацию с этой страницы и укажите ссылку в качестве источника: "
    },
    sv: {
      button: "Sammanfatta med ChatGPT",
      description: "Upptäck på några sekunder vad VolumTransport kan göra.",
      prompt: "Jag vill lära känna VolumTransport bättre och ta reda på hur appen kan hjälpa mig att planera en last. Utifrån den här sidan, förklara tydligt vad appen gör, hur den fungerar, vem den kan vara användbar för samt vilka dess viktigaste funktioner och fördelar är. Beskriv också kort vad den erbjuder jämfört med andra liknande lösningar. Använd endast informationen på den här sidan och inkludera länken som källa: "
    },
    th: {
      button: "สรุปด้วย ChatGPT",
      description: "ค้นพบภายในไม่กี่วินาทีว่า VolumTransport ทำอะไรได้บ้าง",
      prompt: "ฉันต้องการทำความรู้จัก VolumTransport ให้ดียิ่งขึ้นและทราบว่าแอปจะช่วยฉันวางแผนการบรรทุกได้อย่างไร จากข้อมูลในหน้านี้ โปรดอธิบายอย่างชัดเจนว่าแอปทำอะไร ทำงานอย่างไร เหมาะสำหรับใคร และมีฟังก์ชันหลักกับข้อดีอะไรบ้าง นอกจากนี้ โปรดกล่าวโดยสรุปว่าแอปมีจุดเด่นอะไรเมื่อเทียบกับโซลูชันอื่นที่คล้ายกัน ใช้เฉพาะข้อมูลจากหน้านี้และใส่ลิงก์เป็นแหล่งที่มา: "
    },
    tr: {
      button: "ChatGPT ile özetle",
      description: "VolumTransport'un neler yapabildiğini birkaç saniyede keşfedin.",
      prompt: "VolumTransport'u daha yakından tanımak ve bir yüklemeyi planlamama nasıl yardımcı olabileceğini öğrenmek istiyorum. Bu sayfayı temel alarak uygulamanın ne yaptığını, nasıl çalıştığını, kimler için yararlı olabileceğini ve başlıca işlevleri ile avantajlarını açıkça anlat. Ayrıca benzer çözümlere kıyasla ne sunduğundan da kısaca bahset. Yalnızca bu sayfadaki bilgileri kullan ve bağlantıyı kaynak olarak ekle: "
    },
    uk: {
      button: "Підсумувати за допомогою ChatGPT",
      description: "Дізнайтеся за кілька секунд, що може VolumTransport.",
      prompt: "Я хочу краще ознайомитися з VolumTransport і дізнатися, як він може допомогти мені спланувати завантаження. На основі цієї сторінки чітко поясни, що робить застосунок, як він працює, кому може бути корисним, а також які його основні функції та переваги. Також коротко розкажи, що він пропонує порівняно з іншими подібними рішеннями. Використовуй лише інформацію з цієї сторінки та додай посилання як джерело: "
    },
    ur: {
      button: "ChatGPT سے خلاصہ حاصل کریں",
      description: "چند سیکنڈ میں جانیں کہ VolumTransport کیا کر سکتا ہے۔",
      prompt: "میں VolumTransport کے بارے میں بہتر طور پر جاننا چاہتا ہوں اور یہ سمجھنا چاہتا ہوں کہ یہ سامان لادنے کی منصوبہ بندی میں میری کس طرح مدد کر سکتا ہے۔ اس صفحے کی بنیاد پر واضح طور پر بتائیں کہ یہ ایپ کیا کرتی ہے، کیسے کام کرتی ہے، کن لوگوں کے لیے مفید ہو سکتی ہے، اور اس کی بنیادی خصوصیات اور فوائد کیا ہیں۔ یہ بھی مختصراً بتائیں کہ یہ دیگر ملتے جلتے حلوں کے مقابلے میں کیا پیش کرتی ہے۔ صرف اسی صفحے پر موجود معلومات استعمال کریں اور لنک کو بطور ماخذ شامل کریں: "
    },
    vi: {
      button: "Tóm tắt bằng ChatGPT",
      description: "Khám phá trong vài giây những gì VolumTransport có thể làm.",
      prompt: "Tôi muốn tìm hiểu rõ hơn về VolumTransport và biết ứng dụng có thể giúp tôi lập kế hoạch xếp hàng như thế nào. Dựa trên trang này, hãy giải thích rõ ứng dụng làm gì, hoạt động ra sao, có thể hữu ích cho những ai, cũng như các chức năng và ưu điểm chính của ứng dụng. Đồng thời, hãy trình bày ngắn gọn ứng dụng mang lại điều gì so với các giải pháp tương tự khác. Chỉ sử dụng thông tin trên trang này và đưa liên kết vào làm nguồn: "
    },
    hi: {
      button: "ChatGPT से सारांश पाएँ",
      description: "कुछ ही सेकंड में जानें कि VolumTransport क्या कर सकता है।",
      prompt: "मैं VolumTransport के बारे में बेहतर ढंग से जानना चाहता हूँ और समझना चाहता हूँ कि यह लोड की योजना बनाने में मेरी कैसे मदद कर सकता है। इस पेज के आधार पर साफ़ तौर पर समझाएँ कि ऐप क्या करता है, कैसे काम करता है, किन लोगों के लिए उपयोगी हो सकता है और इसकी मुख्य सुविधाएँ व फायदे क्या हैं। यह भी संक्षेप में बताएँ कि यह दूसरे समान समाधानों की तुलना में क्या प्रदान करता है। केवल इस पेज पर दी गई जानकारी का उपयोग करें और लिंक को स्रोत के रूप में शामिल करें: "
    },
    pt: {
      button: "Resumir com o ChatGPT",
      description: "Descubra em poucos segundos o que o VolumTransport pode fazer.",
      prompt: "Quero conhecer melhor o VolumTransport e saber como pode ajudar-me a planear uma carga. Com base nesta página, explique-me claramente o que faz a aplicação, como funciona, para quem pode ser útil e quais são as suas principais funções e vantagens. Refira também brevemente o que oferece em comparação com outras soluções semelhantes. Utilize apenas as informações desta página e inclua a ligação como fonte: "
    },
    "pa-in": {
      button: "ChatGPT ਨਾਲ ਸੰਖੇਪ ਕਰੋ",
      description: "ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਜਾਣੋ ਕਿ VolumTransport ਕੀ ਕਰ ਸਕਦਾ ਹੈ।",
      prompt: "ਮੈਂ VolumTransport ਬਾਰੇ ਹੋਰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਜਾਣਨਾ ਚਾਹੁੰਦਾ ਹਾਂ ਅਤੇ ਸਮਝਣਾ ਚਾਹੁੰਦਾ ਹਾਂ ਕਿ ਇਹ ਲੋਡ ਦੀ ਯੋਜਨਾ ਬਣਾਉਣ ਵਿੱਚ ਮੇਰੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ। ਇਸ ਪੰਨੇ ਦੇ ਆਧਾਰ 'ਤੇ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਸਮਝਾਓ ਕਿ ਐਪ ਕੀ ਕਰਦੀ ਹੈ, ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ, ਕਿਸ ਲਈ ਲਾਭਦਾਇਕ ਹੋ ਸਕਦੀ ਹੈ ਅਤੇ ਇਸ ਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਤੇ ਫਾਇਦੇ ਕੀ ਹਨ। ਇਹ ਵੀ ਸੰਖੇਪ ਵਿੱਚ ਦੱਸੋ ਕਿ ਇਹ ਹੋਰ ਮਿਲਦੇ-ਜੁਲਦੇ ਹੱਲਾਂ ਦੇ ਮੁਕਾਬਲੇ ਕੀ ਪੇਸ਼ ਕਰਦੀ ਹੈ। ਸਿਰਫ਼ ਇਸ ਪੰਨੇ ਦੀ ਜਾਣਕਾਰੀ ਵਰਤੋ ਅਤੇ ਲਿੰਕ ਨੂੰ ਸਰੋਤ ਵਜੋਂ ਸ਼ਾਮਲ ਕਰੋ: "
    },
    "pa-pk": {
      button: "ChatGPT نال خلاصہ حاصل کرو",
      description: "چند سیکنڈاں وچ جانو کہ VolumTransport کی کر سکدا اے۔",
      prompt: "میں VolumTransport بارے ہور چنگی طرح جاننا چاہنا آں تے ایہ سمجھنا چاہنا آں کہ ایہ لوڈ دی منصوبہ بندی وچ میری کیویں مدد کر سکدی اے۔ ایس صفحے دی معلومات دے آدھار اُتے صاف طور تے دسو کہ ایپ کی کردی اے، کیویں کم کردی اے، کنہاں لئی فائدہ مند ہو سکدی اے تے ایس دیاں اہم خصوصیات تے فائدے کی نیں۔ نال ایہ وی مختصر دسو کہ ایہ ہور ملدے جل دے حلّاں دے مقابلے وچ کی پیش کردی اے۔ صرف ایس صفحے دی معلومات استعمال کرو تے لنک نوں ماخذ وجوں شامل کرو: "
    },
    en: {
      button: "Summarize with ChatGPT",
      description: "Discover in seconds what VolumTransport can do.",
      prompt: "I want to learn more about VolumTransport and how it can help me plan a load. Based on this page, clearly explain what the app does, how it works, who it may be useful for, and its main features and advantages. Also briefly explain what it offers compared with other similar solutions. Use only the information on the page and include the link as the source: "
    },
    ar: {
      button: "تلخيص باستخدام ChatGPT",
      description: "اكتشف في ثوانٍ ما الذي يمكن أن يقدمه VolumTransport.",
      prompt: "أرغب في التعرّف بشكل أفضل على VolumTransport ومعرفة كيف يمكن أن يساعدني في تخطيط عملية تحميل. استنادًا إلى هذه الصفحة، اشرح لي بوضوح ما الذي يفعله التطبيق، وكيف يعمل، ولمن يمكن أن يكون مفيدًا، وما أهم وظائفه ومزاياه. وضّح أيضًا بإيجاز ما الذي يقدمه مقارنةً بحلول أخرى مشابهة. استخدم المعلومات الواردة في الصفحة فقط، وأدرج الرابط كمصدر: "
    },
    es: {
      button: "Resumir con ChatGPT",
      description: "Descubre en segundos qué puede hacer VolumTransport.",
      prompt: "Quiero conocer mejor VolumTransport y saber cómo puede ayudarme a planificar una carga. A partir de esta página, explícame de forma clara qué hace la aplicación, cómo funciona, para quién puede resultar útil y cuáles son sus principales funciones y ventajas. Comenta también brevemente qué aporta frente a otras soluciones similares. Utiliza únicamente la información de la página e incluye el enlace como fuente: "
    },
    de: {
      button: "Mit ChatGPT zusammenfassen",
      description: "Entdecke in wenigen Sekunden, was VolumTransport kann.",
      prompt: "Ich möchte VolumTransport besser kennenlernen und erfahren, wie mir die App bei der Planung einer Beladung helfen kann. Erkläre mir anhand dieser Seite verständlich, was die App macht, wie sie funktioniert, für wen sie nützlich sein kann und welche Hauptfunktionen und Vorteile sie bietet. Erläutere außerdem kurz, was sie im Vergleich zu ähnlichen Lösungen bietet. Verwende ausschließlich die Informationen auf dieser Seite und gib den Link als Quelle an: "
    },
    fr: {
      button: "Résumer avec ChatGPT",
      description: "Découvrez en quelques secondes ce que VolumTransport peut faire.",
      prompt: "Je souhaite mieux connaître VolumTransport et savoir comment l’application peut m’aider à planifier un chargement. À partir de cette page, explique-moi clairement ce que fait l’application, comment elle fonctionne, à qui elle peut être utile, ainsi que ses principales fonctionnalités et ses avantages. Indique également brièvement ce qu’elle apporte par rapport à d’autres solutions similaires. Utilise uniquement les informations de la page et inclus le lien comme source : "
    }
  };

  const container = document.querySelector("[data-chatgpt-summary]");

  if (!container) return;

  const pageLanguage =
    document.documentElement.lang
      .trim()
      .toLowerCase();

  const translation =
    translations[pageLanguage] ||
    translations[pageLanguage.split("-")[0]];

  if (!translation) return;

  const sourceUrl =
    document.querySelector('link[rel="canonical"]')?.href ||
    window.location.href;

  const button =
    document.createElement("a");

  button.className = "chatgpt-summary-btn";
  button.href =
    "https://chatgpt.com/?q=" +
    encodeURIComponent(
      translation.prompt +
      sourceUrl
    );
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.textContent =
    "✦ " +
    translation.button;

  const description =
    document.createElement("p");

  description.className =
    "ai-summary-text";
  description.textContent =
    translation.description;

  container.replaceChildren(
    button,
    description
  );
})();