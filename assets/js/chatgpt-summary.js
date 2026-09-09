(() => {
  const translations = {
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
