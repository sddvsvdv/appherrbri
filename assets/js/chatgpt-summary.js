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
