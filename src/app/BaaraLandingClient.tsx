"use client";

import React, { useEffect, useState } from "react";
import { BAARA_AI_CONFIG, getWhatsAppUrl } from "@/lib/config";

type Language = "fr" | "en";

interface TranslationContent {
  badgeOpen: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSub: string;
  ctaApply: string;
  ctaWhatsApp: string;
  heroNote: string;
  whatTitle: string;
  whatSubtitle: string;
  whatBody: string;
  whatPill1: string;
  whatPill2: string;
  whatPill3: string;
  payTitle: string;
  paySubtitle: string;
  pay1Title: string;
  pay1Rate: string;
  pay1Tag: string;
  pay1Desc: string;
  pay2Title: string;
  pay2Rate: string;
  pay2Tag: string;
  pay2Desc: string;
  pay3Title: string;
  pay3Rate: string;
  pay3Tag: string;
  pay3Desc: string;
  payNote: string;
  whoTitle: string;
  whoSubtitle: string;
  whoItem1: string;
  whoItem2: string;
  whoItem3: string;
  countryNotice: string;
  countryNoticeLink: string;
  countryDisclaimer: string;
  howTitle: string;
  howSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  ctaApply2: string;
  codeFallbackLabel: string;
  copyCodeBtn: string;
  copiedNotice: string;
  proofTitle: string;
  proofAuthor: string;
  proofRole: string;
  proofStory: string;
  disclosureTitle: string;
  disclosureText: string;
  tipsTitle: string;
  tipsSubtitle: string;
  tip1Title: string;
  tip1Desc: string;
  tip2Title: string;
  tip2Desc: string;
  tip3Title: string;
  tip3Desc: string;
  tip4Title: string;
  tip4Desc: string;
  tip5Title: string;
  tip5Desc: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalSubtitle: string;
  finalCta: string;
  finalWhatsApp: string;
  footerRights: string;
  footerMission: string;
  floatingWaLabel: string;
}

const CONTENT: Record<Language, TranslationContent> = {
  fr: {
    badgeOpen: "Recrutement ouvert · Plus de 100 pays éligibles",
    heroTitle: "Entraînez l'intelligence artificielle —",
    heroTitleHighlight: "et soyez payé en dollars",
    heroSub:
      "Des entreprises d'IA américaines recrutent des experts dans plus de 100 pays : 48 à 52 $/heure, à distance, à votre rythme. Depuis Dakar, Abidjan, Lagos, Accra — ou partout ailleurs.",
    ctaApply: "Je postule via le lien",
    ctaWhatsApp: "Une question ? WhatsApp",
    heroNote:
      "Candidature 100% gratuite · Paiement hebdomadaire via Stripe ou Wise",
    whatTitle: "C'est quoi, concrètement ?",
    whatSubtitle: "Comprendre la mission Mercor en 3 points essentiels",
    whatBody:
      "Mercor est une plateforme américaine qui recrute des experts dans le monde entier pour entraîner les modèles d'intelligence artificielle les plus avancés. Le travail : évaluer des réponses d'IA, expliquer vos raisonnements, mettre votre expertise professionnelle au service de l'IA — dans votre domaine. Pas de patron, pas de bureau, pas d'horaires imposés. Vous choisissez vos projets et vous travaillez quand vous voulez.",
    whatPill1: "Modèles d'IA de pointe",
    whatPill2: "100% Télétravail & Asynchrone",
    whatPill3: "Autonomie complète",
    payTitle: "Combien ça paie ?",
    paySubtitle: "Des tarifs transparents, fixés en dollars US et payés chaque semaine",
    pay1Title: "Expert IA bilingue français",
    pay1Rate: "48 – 52 $/h",
    pay1Tag: "Rôle vedette",
    pay1Desc: "Sécurité de l'IA · temps partiel · 100 % asynchrone.",
    pay2Title: "Experts santé et médecine",
    pay2Rate: "Tarif selon projet",
    pay2Tag: "Forte demande",
    pay2Desc:
      "Rémunération selon le projet — les profils médicaux sont très demandés.",
    pay3Title: "Experts techniques",
    pay3Rate: "jusqu'à 60 $/h+",
    pay3Tag: "Ingénierie & Code",
    pay3Desc:
      "Code, sciences, ingénierie — selon la rareté de l'expertise.",
    payNote:
      "Paiements versés chaque semaine par Stripe ou Wise, directement sur votre compte bancaire.",
    whoTitle: "Qui peut postuler ?",
    whoSubtitle:
      "Aucune barrière académique inutile : seule votre réelle compétence fait foi",
    whoItem1:
      "Vous êtes basé dans l'un des 100+ pays pris en charge (Sénégal, Côte d'Ivoire, Nigeria, Ghana, et bien d'autres).",
    whoItem2:
      "Vous parlez anglais couramment — le français est un atout majeur pour les rôles bilingues.",
    whoItem3:
      "Vous avez une expérience professionnelle réelle : santé, tech, droit, finance, langues, éducation… Ce qui compte, c'est votre expertise, pas votre diplôme.",
    countryNotice: "Vérifiez si votre pays figure sur la",
    countryNoticeLink: "liste officielle des pays pris en charge",
    countryDisclaimer:
      "Note importante : le Mali, le Burkina Faso et le Niger n'y figurent pas pour l'instant — la liste évolue régulièrement selon les accords de conformité.",
    howTitle: "Comment ça marche ?",
    howSubtitle: "Un processus de sélection 100% digitalisé en 4 étapes claires",
    step1Title: "Lien de parrainage",
    step1Desc:
      "Cliquez sur le lien de parrainage ci-dessous — il vous identifie et active automatiquement votre suivi.",
    step2Title: "Dépôt de candidature (10 min)",
    step2Desc:
      "Téléversez votre CV et indiquez votre pays de résidence. Une démarche simple et rapide.",
    step3Title: "Entretien vidéo avec l'IA (~20 min)",
    step3Desc:
      "Un échange vidéo automatisé avec une IA qui évalue votre clarté de communication et votre démarche de raisonnement.",
    step4Title: "Affectation aux projets",
    step4Desc:
      "Si votre profil correspond, vous recevez directement des offres de missions avec le tarif horaire et le client affichés à l'avance.",
    ctaApply2: "Je postule maintenant",
    codeFallbackLabel:
      "Si le lien ne s'ouvre pas directement, copiez le code de parrainage :",
    copyCodeBtn: "Copier le code",
    copiedNotice: "Code copié !",
    proofTitle: "Je l'ai fait moi-même",
    proofAuthor: "Abdel Traore",
    proofRole: "Consultant en informatique de santé · 18 ans d'expérience",
    proofStory:
      "J'ai postulé fin septembre et passé l'entretien IA moi-même : environ 30 minutes, en anglais, face caméra. Je partage sur cette page exactement ce que j'ai appris, pour vous aider à réussir du premier coup.",
    disclosureTitle: "Transparence & déontologie",
    disclosureText:
      "En utilisant mon lien, Mercor me verse une commission de parrainage. Cela ne vous coûte rien et ne change strictement rien à votre candidature ni à votre rémunération.",
    tipsTitle: "5 conseils pour réussir l'entretien IA",
    tipsSubtitle: "Recommandations pratiques issues de mon passage sur la plateforme",
    tip1Title: "Soignez votre communication",
    tip1Desc:
      "C'est le critère n°1 : structurez vos idées et expliquez votre raisonnement pas à pas, de manière méthodique.",
    tip2Title: "Donnez des exemples concrets",
    tip2Desc:
      "Illustrez avec de vraies décisions professionnelles prises dans votre parcours, plutôt que des généralités abstraites.",
    tip3Title: "Assumez l'ambiguïté",
    tip3Desc:
      "Une question ou consigne vous semble floue ? Signalez-le ouvertement et présentez votre propre hypothèse de travail. C'est précisément cette faculté qui est testée.",
    tip4Title: "Préparez votre environnement",
    tip4Desc:
      "Isolez-vous dans un endroit calme, assurez une connexion internet stable, éclairez convenablement votre visage et activez votre caméra.",
    tip5Title: "Un anglais professionnel suffit",
    tip5Desc:
      "L'entretien se déroule en anglais, mais les évaluateurs attendent une transmission d'idées limpide et assurée, pas un accent parfait.",
    faqTitle: "Questions fréquentes",
    faqSubtitle: "Toutes les réponses pour postuler en toute sérénité",
    faqs: [
      {
        q: "Est-ce payant pour postuler ?",
        a: "Non, c'est 100 % gratuit. À aucun moment vous ne devez payer de frais d'inscription ou de dossier.",
      },
      {
        q: "Quand et comment suis-je rémunéré ?",
        a: "Les paiements sont versés chaque semaine dès la validation de vos livrables ou heures travaillées, directement via Stripe ou Wise.",
      },
      {
        q: "Faut-il obligatoirement un diplôme spécifique ?",
        a: "Non. Ce qui prévaut, c'est votre expertise pratique de terrain et votre capacité à expliciter avec rigueur vos arbitrages professionnels.",
      },
      {
        q: "Combien d'heures par semaine dois-je consacrer ?",
        a: "Vous gérez librement votre temps. La grande majorité des missions s'effectuent à temps partiel et en mode 100 % asynchrone.",
      },
      {
        q: "Et si mon profil n'est pas retenu tout de suite ?",
        a: "Votre profil est conservé dans le vivier actif de talents. Dès qu'un projet en phase avec votre spécialité s'ouvre, vous pouvez être sollicité.",
      },
    ],
    finalTitle: "Prêt à valoriser votre expertise à l'international ?",
    finalSubtitle:
      "Rejoignez le réseau d'experts qui entraînent les futurs leaders de l'IA mondiale.",
    finalCta: "Je tente ma chance",
    finalWhatsApp: "Discuter sur WhatsApp",
    footerRights: "Tous droits réservés.",
    footerMission:
      "Baara AI met en relation des talents et experts du monde entier avec des opportunités d'entraînement d'IA rémunérées en dollars.",
    floatingWaLabel: "WhatsApp Direct",
  },
  en: {
    badgeOpen: "Recruitment open · 100+ eligible countries",
    heroTitle: "Train artificial intelligence —",
    heroTitleHighlight: "and get paid in dollars",
    heroSub:
      "US AI companies are hiring experts in 100+ countries: $48–52/hour, remote, on your schedule. From Dakar, Abidjan, Lagos, Accra — or anywhere else.",
    ctaApply: "Apply through my link",
    ctaWhatsApp: "Questions? WhatsApp me",
    heroNote: "Free application · Weekly payouts via Stripe or Wise",
    whatTitle: "What is this, exactly?",
    whatSubtitle: "Understanding the Mercor mission in 3 core principles",
    whatBody:
      "Mercor is a US platform hiring experts worldwide to train the most advanced AI models. The work: evaluating AI responses, explaining your reasoning, putting your professional expertise to work for AI — in your field. No boss, no office, no fixed hours. You pick your projects and work whenever you want.",
    whatPill1: "Cutting-edge AI Models",
    whatPill2: "100% Remote & Asynchronous",
    whatPill3: "Full Autonomy",
    payTitle: "What does it pay?",
    paySubtitle: "Transparent rates denominated in US dollars and disbursed weekly",
    pay1Title: "Bilingual French AI expert",
    pay1Rate: "$48–52/hr",
    pay1Tag: "Featured role",
    pay1Desc: "AI safety · part-time · 100% asynchronous.",
    pay2Title: "Health & medicine experts",
    pay2Rate: "Varies by project",
    pay2Tag: "High demand",
    pay2Desc:
      "Pay varies by project — medical profiles are in high demand.",
    pay3Title: "Technical experts",
    pay3Rate: "up to $60/hr+",
    pay3Tag: "Code & Engineering",
    pay3Desc:
      "Coding, science, engineering — depending on how rare your expertise is.",
    payNote:
      "Payouts land every week via Stripe or Wise, straight to your bank account.",
    whoTitle: "Who can apply?",
    whoSubtitle:
      "No unnecessary academic gatekeeping: genuine domain competency is what counts",
    whoItem1:
      "You're based in one of 100+ supported countries (Senegal, Côte d'Ivoire, Nigeria, Ghana, and many more).",
    whoItem2:
      "You're fluent in English — French is a strong plus for bilingual roles.",
    whoItem3:
      "You have real professional experience: healthcare, tech, law, finance, languages, education… What matters is your expertise, not your degree.",
    countryNotice: "Verify whether your country is listed on the",
    countryNoticeLink: "official supported countries directory",
    countryDisclaimer:
      "Important notice: Mali, Burkina Faso and Niger aren't on it yet — the directory is continually updated as compliance approvals expand.",
    howTitle: "How does it work?",
    howSubtitle: "A 100% streamlined digital onboarding pipeline in 4 steps",
    step1Title: "Referral Link Activation",
    step1Desc:
      "Click the referral link below — it automatically tags your submission with verified tracking.",
    step2Title: "Submit Application (10 mins)",
    step2Desc:
      "Upload your CV/resume and specify your country of residence. Rapid and straightforward.",
    step3Title: "AI Video Interview (~20 mins)",
    step3Desc:
      "An automated video dialogue with an AI system that evaluates your communicative clarity and systematic problem-solving.",
    step4Title: "Project Matching & Offers",
    step4Desc:
      "If your background matches client needs, you receive direct mission invitations with full rate and client transparency upfront.",
    ctaApply2: "Apply now",
    codeFallbackLabel:
      "If the direct link does not load properly, enter the referral code:",
    copyCodeBtn: "Copy code",
    copiedNotice: "Code copied!",
    proofTitle: "I've done it myself",
    proofAuthor: "Abdel Traore",
    proofRole: "Healthcare IT consultant · 18 years of experience",
    proofStory:
      "I applied in late September and took the AI interview myself: about 30 minutes, in English, on camera. On this page I share exactly what I learned, so you can nail it on your first try.",
    disclosureTitle: "Transparency & disclosure",
    disclosureText:
      "Transparency: if you use my link, Mercor pays me a referral commission. It costs you nothing and changes nothing about your application or your pay.",
    tipsTitle: "5 tips to pass the AI interview",
    tipsSubtitle: "Field-tested strategies derived from firsthand interview completion",
    tip1Title: "Mind your communication",
    tip1Desc:
      "This is the #1 evaluation criterion: structure your arguments and articulate your chain of reasoning step by step.",
    tip2Title: "Give concrete examples",
    tip2Desc:
      "Anchor your answers in authentic professional challenges and decisions from your career rather than high-level generalities.",
    tip3Title: "Embrace ambiguity",
    tip3Desc:
      "Encountering an unclear or open-ended instruction? State the ambiguity explicitly and propose your operational interpretation. That is what is being evaluated.",
    tip4Title: "Set up your environment",
    tip4Desc:
      "Choose a quiet space with steady connectivity, illuminate your face clearly, and keep your webcam on throughout.",
    tip5Title: "Professional English is enough",
    tip5Desc:
      "The interview is conducted in English, but evaluators prize clear, confident articulation of complex concepts over accent perfection.",
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Clear answers to help you apply with confidence",
    faqs: [
      {
        q: "Is the application free?",
        a: "Yes, 100% free. You are never asked to pay any registration, exam, or platform fees.",
      },
      {
        q: "When and how do I get paid?",
        a: "Disbursements occur every week once your approved hours or deliverables are logged, via Stripe or Wise directly to your bank account.",
      },
      {
        q: "Do I need a specific formal degree?",
        a: "No. Your practical domain background and your ability to explain complex decisions systematically are what matter most.",
      },
      {
        q: "How many hours per week are required?",
        a: "You retain full control over your schedule. The vast majority of engagements are part-time and fully asynchronous.",
      },
      {
        q: "What if I am not selected immediately?",
        a: "Your vetted profile remains in the active talent pool. Whenever new opportunities matching your exact background launch, you can be invited.",
      },
    ],
    finalTitle: "Ready to monetize your expertise on global AI projects?",
    finalSubtitle:
      "Join the worldwide network of specialists advancing state-of-the-art AI systems.",
    finalCta: "I'll give it a shot",
    finalWhatsApp: "Chat on WhatsApp",
    footerRights: "All rights reserved.",
    footerMission:
      "Baara AI connects international domain experts with premier remote AI training assignments paid in US dollars.",
    floatingWaLabel: "WhatsApp Me",
  },
};

export function BaaraLandingClient(): React.JSX.Element {
  const [lang, setLang] = useState<Language>("fr");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("baara_ai_lang") as Language | null;
      if (saved === "fr" || saved === "en") {
        setLang(saved);
        document.documentElement.lang = saved;
        return;
      }
      const navLang = (navigator.language || "").toLowerCase();
      const detected: Language = navLang.startsWith("fr") ? "fr" : "en";
      setLang(detected);
      document.documentElement.lang = detected;
    } catch {
      // ignore SSR or localStorage access limits
    }
  }, []);

  const handleLangChange = (newLang: Language): void => {
    setLang(newLang);
    document.documentElement.lang = newLang;
    try {
      localStorage.setItem("baara_ai_lang", newLang);
    } catch {
      // ignore
    }
  };

  const handleCopyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(BAARA_AI_CONFIG.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const t = CONTENT[lang];
  const waUrl = getWhatsAppUrl();

  return (
    <div className="min-h-screen bg-[#070b14] text-[#e2e8f0] selection:bg-emerald-500 selection:text-black font-sans antialiased">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-10 left-[-10%] h-[450px] w-[500px] rounded-full bg-emerald-600/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between py-6 border-b border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 font-extrabold text-[#070b14] shadow-lg shadow-emerald-500/20">
              B
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white">
                BAARA <span className="text-emerald-400">AI</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold uppercase tracking-wider text-slate-400 border border-slate-800 rounded px-2 py-0.5">
                Talent Funnel
              </span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-xl p-1 shadow-inner">
            <button
              type="button"
              onClick={() => handleLangChange("fr")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                lang === "fr"
                  ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => handleLangChange("en")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                lang === "en"
                  ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="pt-12 pb-16 text-center sm:pt-16 sm:pb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-400 shadow-sm shadow-emerald-500/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.badgeOpen}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.heroTitle}{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              {t.heroTitleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BAARA_AI_CONFIG.referralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.ctaApply}</span>
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-all duration-200 hover:border-slate-600"
            >
              <svg
                className="mr-2.5 h-5 w-5 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>{t.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Micro note */}
          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">
            🛡️ {t.heroNote}
          </p>
        </section>

        {/* SECTION 1: WHAT IS THIS */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.whatTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{t.whatSubtitle}</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {t.whatBody}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center space-x-3 rounded-xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  ⚡
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {t.whatPill1}
                </span>
              </div>
              <div className="flex items-center space-x-3 rounded-xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  🌍
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {t.whatPill2}
                </span>
              </div>
              <div className="flex items-center space-x-3 rounded-xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  ⏱️
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {t.whatPill3}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PAY (3 CARDS) */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.payTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{t.paySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Featured French AI */}
            <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-emerald-500/5 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30 mb-4">
                  {t.pay1Tag}
                </span>
                <h3 className="text-lg font-bold text-white">{t.pay1Title}</h3>
                <div className="mt-3 text-3xl font-black text-emerald-400">
                  {t.pay1Rate}
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {t.pay1Desc}
                </p>
              </div>
            </div>

            {/* Card 2: Health & Medicine */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 border border-blue-500/20 mb-4">
                  {t.pay2Tag}
                </span>
                <h3 className="text-lg font-bold text-white">{t.pay2Title}</h3>
                <div className="mt-3 text-2xl font-black text-slate-100">
                  {t.pay2Rate}
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {t.pay2Desc}
                </p>
              </div>
            </div>

            {/* Card 3: Technical Experts */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 border border-purple-500/20 mb-4">
                  {t.pay3Tag}
                </span>
                <h3 className="text-lg font-bold text-white">{t.pay3Title}</h3>
                <div className="mt-3 text-2xl font-black text-purple-300">
                  {t.pay3Rate}
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {t.pay3Desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-900/40 px-5 py-3.5 text-center text-xs sm:text-sm text-slate-300">
            💳 <span className="font-semibold">{t.payNote}</span>
          </div>
        </section>

        {/* SECTION 3: WHO CAN APPLY */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.whoTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{t.whoSubtitle}</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-slate-200">
                  {t.whoItem1}
                </span>
              </li>
              <li className="flex items-start space-x-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-slate-200">
                  {t.whoItem2}
                </span>
              </li>
              <li className="flex items-start space-x-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-slate-200">
                  {t.whoItem3}
                </span>
              </li>
            </ul>

            {/* Country Check Box */}
            <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
              <div className="flex items-start space-x-3">
                <span className="text-lg">🌐</span>
                <div className="text-xs sm:text-sm text-slate-200">
                  <p>
                    {t.countryNotice}{" "}
                    <a
                      href={BAARA_AI_CONFIG.supportedCountriesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 underline hover:text-emerald-300 ml-1"
                    >
                      {t.countryNoticeLink} ↗
                    </a>
                    .
                  </p>
                  <p className="mt-2 text-amber-300/90 font-medium">
                    {t.countryDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS (4 STEPS) */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.howTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{t.howSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 font-extrabold text-slate-950">
                  1
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t.step1Title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.step1Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 font-extrabold text-slate-950">
                  2
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t.step2Title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.step2Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 font-extrabold text-slate-950">
                  3
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t.step3Title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.step3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 font-extrabold text-slate-950">
                  4
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t.step4Title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.step4Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action button & code fallback */}
          <div className="mt-8 text-center">
            <a
              href={BAARA_AI_CONFIG.referralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
            >
              <span>{t.ctaApply2}</span>
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* Referral code fallback box */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-400">
              <span>{t.codeFallbackLabel}</span>
              <div className="inline-flex items-center bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 space-x-2">
                <span className="font-mono font-bold text-emerald-400">
                  {BAARA_AI_CONFIG.referralCode}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded transition"
                >
                  {copied ? t.copiedNotice : t.copyCodeBtn}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: "I'VE DONE IT MYSELF" (ABDEL TRAORE) */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 font-black text-2xl shadow-lg shadow-emerald-500/20">
                AT
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
                  {t.proofTitle}
                </span>
                <h3 className="text-xl font-black text-white">
                  {t.proofAuthor}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {t.proofRole}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-base text-slate-200 leading-relaxed italic border-l-2 border-emerald-500 pl-4 py-1">
              &ldquo;{t.proofStory}&rdquo;
            </p>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">
                <strong className="text-slate-300">{t.disclosureTitle} :</strong>{" "}
                {t.disclosureText}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: 5 TIPS FOR AI INTERVIEW */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.tipsTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{t.tipsSubtitle}</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start space-x-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-black text-sm">
                1
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {t.tip1Title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  {t.tip1Desc}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start space-x-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-black text-sm">
                2
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {t.tip2Title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  {t.tip2Desc}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start space-x-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-black text-sm">
                3
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {t.tip3Title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  {t.tip3Desc}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start space-x-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-black text-sm">
                4
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {t.tip4Title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  {t.tip4Desc}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start space-x-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-black text-sm">
                5
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {t.tip5Title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  {t.tip5Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQ (ACCORDION) */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.faqTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{t.faqSubtitle}</p>
          </div>

          <div className="space-y-3">
            {t.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-white hover:text-emerald-400 transition"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`ml-3 transform transition-transform duration-200 text-emerald-400 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <section className="py-14 border-t border-slate-800/80 text-center">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 via-slate-900/90 to-emerald-950/20 p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {t.finalTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              {t.finalSubtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BAARA_AI_CONFIG.referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:scale-[1.02]"
              >
                <span>{t.finalCta}</span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white transition"
              >
                <span>💬 {t.finalWhatsApp}</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 pb-24 sm:pb-12 border-t border-slate-800/60 text-center text-xs text-slate-500">
          <p>© 2026 Baara AI — {t.footerRights}</p>
          <p className="mt-2 text-slate-400 max-w-md mx-auto">
            {t.footerMission}
          </p>
        </footer>
      </div>

      {/* FLOATING WHATSAPP BUTTON (Fixed bottom-right on mobile/desktop) */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center space-x-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] px-4 py-3 text-slate-950 font-bold shadow-2xl shadow-green-500/40 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <svg className="h-5 w-5 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
        <span className="text-xs sm:text-sm font-black tracking-wide">
          {t.floatingWaLabel}
        </span>
      </a>
    </div>
  );
}
