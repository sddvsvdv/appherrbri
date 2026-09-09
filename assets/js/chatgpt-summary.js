(() => {
  const translations = {
    en: {
      button: "Summarize with ChatGPT",
      description: "Discover in seconds what VolumTransport can do.",
      prompt: "Analyze this page and clearly explain what VolumTransport is, what problem it solves, how it works, its main features, advantages, and differences compared with CBM calculators or other solutions. Highlight especially how the 3D simulation based on bin-packing techniques makes it possible to verify whether the load actually fits and how it can be arranged. Base the response only on the information on this page and cite the source: "
    },
    ar: {
      button: "تلخيص باستخدام ChatGPT",
      description: "اكتشف في ثوانٍ ما الذي يمكن أن يقدمه VolumTransport.",
      prompt: "حلّل هذه الصفحة واشرح بوضوح ما هو VolumTransport، وما المشكلة التي يحلها، وكيف يعمل، وأهم وظائفه ومزاياه واختلافاته مقارنة بحاسبات CBM أو الحلول الأخرى. ركّز بشكل خاص على كيفية استخدام المحاكاة ثلاثية الأبعاد القائمة على تقنيات bin packing للتحقق مما إذا كانت الحمولة تتسع فعلاً وكيف يمكن ترتيبها. استند في إجابتك فقط إلى المعلومات الواردة في الصفحة واذكر المصدر: "
    },
    es: {
      button: "Resumir con ChatGPT",
      description: "Descubre en segundos qué puede hacer VolumTransport.",
      prompt: "Quiero conocer mejor VolumTransport y saber cómo puede ayudarme a planificar una carga. A partir de esta página, explícame de forma clara qué hace la aplicación, cómo funciona, para quién puede resultar útil y cuáles son sus principales funciones y ventajas. Comenta también brevemente qué aporta frente a otras soluciones similares. Utiliza únicamente la información de la página e incluye el enlace como fuente: "
    },
    de: {
      button: "Mit ChatGPT zusammenfassen",
      description: "Entdecke in wenigen Sekunden, was VolumTransport kann.",
      prompt: "Analysiere diese Seite und erkläre verständlich, was VolumTransport ist, welches Problem es löst, wie es funktioniert, welche Hauptfunktionen und Vorteile es bietet und wie es sich von CBM-Rechnern oder anderen Lösungen unterscheidet. Hebe besonders hervor, wie die 3D-Simulation auf Grundlage von Bin-Packing-Verfahren überprüfen kann, ob die Ladung tatsächlich hineinpasst und wie sie angeordnet werden kann. Stütze deine Antwort ausschließlich auf die Informationen dieser Seite und nenne die Quelle: "
    },
    fr: {
      button: "Résumer avec ChatGPT",
      description: "Découvrez en quelques secondes ce que VolumTransport peut faire.",
      prompt: "Analyse cette page et explique clairement ce qu’est VolumTransport, quel problème l’application résout, comment elle fonctionne, ses principales fonctionnalités, ses avantages et ses différences par rapport aux calculateurs de CBM ou à d’autres solutions. Souligne tout particulièrement comment la simulation 3D fondée sur des techniques de bin packing permet de vérifier si le chargement tient réellement et comment il peut être disposé. Base ta réponse uniquement sur les informations de cette page et cite la source : "
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
