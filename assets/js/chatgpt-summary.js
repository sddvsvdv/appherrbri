(() => {
  const translations = {
    ja: {
      button: "ChatGPTで要約",
      description: "VolumTransportでできることを数秒で確認できます。",
      prompt: "VolumTransportについてもっと詳しく知り、荷物の積み込み計画にどのように役立つのかを知りたいです。このページをもとに、アプリで何ができるのか、どのように使うのか、どのような人に役立つのか、主な機能と利点を分かりやすく説明してください。また、他の類似ソリューションと比べてどのような特徴があるのかも簡潔に説明してください。ページに記載されている情報だけを使用し、出典としてリンクを記載してください："
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
