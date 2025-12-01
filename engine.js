/**
 * MyBTCSecured ENGINE V3.0 (Konsensus 2025 Implementation)
 * - Logic: Hard Filter + Soft Scoring
 * - Arch: Multisig default for Tier 3
 */

// ============================================================
// 1. INITIALISATION & DATA
// ============================================================

if (typeof KB === 'undefined') {
    console.error("ERREUR CRITIQUE : knowledge_base.js n'est pas chargé.");
    alert("Erreur de chargement des données.");
}

const DB_WALLETS = KB.WALLETS;
const DB_METAL = KB.METALS;

// --- CONFIG LANGUE (ANGLAIS PAR DÉFAUT) ---
let currentLang = 'en'; 
let T = KB.LANG[currentLang];

let answers = { q5: [] };
let currentStep = 0;
const QUESTION_FLOW = ['q1', 'q1_bis', 'q2', 'q2_bis', 'q3', 'q3_bis', 'q4', 'q5', 'q6', 'q7', 'q8'];

// Variables globales pour stocker le dernier résultat (nécessaire pour rafraîchir la langue)
let lastArchTitle, lastArchDesc, lastWallets, lastMetals, lastWarnings, lastIsMultisig;

function setLanguage(lang) {
    if (!KB.LANG[lang]) return;
    currentLang = lang;
    T = KB.LANG[lang];
    
    // 1. Mise à jour visuelle des boutons (Orange pour actif)
    const btnFr = document.getElementById('btn-lang-fr');
    const btnEn = document.getElementById('btn-lang-en');
    
    const inactiveClass = "text-slate-500";
    const activeClass = "text-[#f7931a]"; // Orange

    if(btnFr && btnEn) {
        if (lang === 'fr') {
            btnFr.classList.remove(inactiveClass); btnFr.classList.add(activeClass);
            btnEn.classList.remove(activeClass); btnEn.classList.add(inactiveClass);
        } else {
            btnEn.classList.remove(inactiveClass); btnEn.classList.add(activeClass);
            btnFr.classList.remove(activeClass); btnFr.classList.add(inactiveClass);
        }
    }

    // 2. Mise à jour des textes statiques (Titres, Disclaimer...)
    updateInterfaceText();
    updateNetworkStatus();
    
    // 3. Rafraîchissement dynamique si un écran est affiché
    const quizPanel = document.getElementById('quiz-panel');
    const resultPanel = document.getElementById('result-panel');

    if (!quizPanel.classList.contains('hidden')) {
        renderQuestion();
    }
    else if (!resultPanel.classList.contains('hidden')) {
        // Cas spécial : Page Garde Collaborative ou Résultats classiques
        if (answers.q1_bis === 'assisted' && answers.q1 !== '1') {
             showLazyRichExit();
        } else {
             // On réutilise les dernières données calculées
             renderResultsUI(lastArchTitle, lastArchDesc, lastWallets, lastMetals, lastWarnings, lastIsMultisig);
        }
    }
}

function updateInterfaceText() {
    document.title = T.app_title_text;
    const navBrand = document.getElementById('nav-brand');
    if(navBrand) navBrand.innerHTML = T.app_brand_html;
    
    setText('txt-hero-1', T.hero_title_1);
    setText('txt-hero-2', T.hero_title_2);
    setHTML('txt-hero-desc', T.hero_desc);
    setText('txt-btn-start', T.hero_btn);
    
    setText('txt-block-1-title', T.block_anon_title);
    setText('txt-block-1-desc', T.block_anon_desc);
    setText('txt-block-2-title', T.block_agnostic_title);
    setText('txt-block-2-desc', T.block_agnostic_desc);
    setText('txt-block-3-title', T.block_full_title);
    setText('txt-block-3-desc', T.block_full_desc);
    
    setText('footer-github-text', T.footer_github);

    setText('legal-title', T.legal_title);
    setHTML('legal-p1', T.legal_p1);
    setHTML('legal-p2', T.legal_p2);
    setHTML('legal-p3', T.legal_p3);
    setHTML('legal-p4', T.legal_p4);
    
    setText('lbl-check-offline', T.legal_checkbox_offline);
    setText('lbl-check-terms', T.legal_checkbox_terms);
    setText('legal-btn-txt', T.legal_btn_start);
    setText('btn-cancel', T.btn_cancel);

    // Titre de la page résultat (si affiché)
    const resTitle = document.getElementById('res-main-title');
    if(resTitle) resTitle.innerText = "MySecureBTC Protocol"; 

    // LOADER
    setText('load-title', T.load_title);
    setText('load-text', T.load_text);

    // RESULTATS (Statique)
    setText('res-tag', T.res_tag);
    setText('res-subtitle', T.res_subtitle);
    setText('btn-restart-txt', T.btn_restart); // Bouton fin

    // VERSION MOTEUR (Footer Quiz)
    setText('lbl-engine-version', T.engine_version);
}

// ============================================================
// 2. GESTION DU DISCLAIMER & DEMARRAGE
// ============================================================
// ... (Cette section reste identique à la V2.9 fournie précédemment) ...

function openLegalModal() {
    const modal = document.getElementById('legal-modal');
    if(modal) modal.classList.remove('hidden');
    else startQuiz(); 
}

function acceptLegalAndStart() {
    document.getElementById('legal-modal').classList.add('hidden');
    startQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    document.title = T.app_title_text;
    const navBrand = document.getElementById('nav-brand');
    if(navBrand) navBrand.innerHTML = T.app_brand_html;
    
    setText('txt-hero-1', T.hero_title_1);
    setText('txt-hero-2', T.hero_title_2);
    setHTML('txt-hero-desc', T.hero_desc);
    setText('txt-btn-start', T.hero_btn);
    
    setText('txt-block-1-title', T.block_anon_title);
    setText('txt-block-1-desc', T.block_anon_desc);
    setText('txt-block-2-title', T.block_agnostic_title);
    setText('txt-block-2-desc', T.block_agnostic_desc);
    setText('txt-block-3-title', T.block_full_title);
    setText('txt-block-3-desc', T.block_full_desc);

    setText('legal-title', T.legal_title);
    setHTML('legal-p1', T.legal_p1);
    setHTML('legal-p2', T.legal_p2);
    setHTML('legal-p3', T.legal_p3);
    setHTML('legal-p4', T.legal_p4);
    
    setText('lbl-check-offline', T.legal_checkbox_offline);
    setText('lbl-check-terms', T.legal_checkbox_terms);
    setText('legal-btn-txt', T.legal_btn_start);

    // Logique Checkbox
    const checkOffline = document.getElementById('check-offline');
    const checkTerms = document.getElementById('check-terms');
    const btnLegal = document.getElementById('legal-btn');

    function updateStartButton() {
        if(checkOffline && checkTerms && btnLegal) {
            if(checkOffline.checked && checkTerms.checked) {
                btnLegal.disabled = false;
                btnLegal.classList.remove('bg-slate-700', 'text-slate-500', 'cursor-not-allowed');
                btnLegal.classList.add('bg-[#f7931a]', 'text-white', 'cursor-pointer', 'shadow-lg', 'hover:bg-[#d67b0f]');
            } else {
                btnLegal.disabled = true;
                btnLegal.classList.add('bg-slate-700', 'text-slate-500', 'cursor-not-allowed');
                btnLegal.classList.remove('bg-[#f7931a]', 'text-white', 'cursor-pointer', 'shadow-lg', 'hover:bg-[#d67b0f]');
            }
        }
    }
    if(checkOffline) checkOffline.addEventListener('change', updateStartButton);
    if(checkTerms) checkTerms.addEventListener('change', updateStartButton);
});

function setText(id, text) { const el = document.getElementById(id); if(el) el.innerText = text; }
function setHTML(id, html) { const el = document.getElementById(id); if(el) el.innerHTML = html; }


// ============================================================
// 3. MOTEUR DU QUIZ
// ============================================================

function startQuiz() {
    document.getElementById('intro-panel').classList.add('hidden');
    document.getElementById('quiz-panel').classList.remove('hidden');
    renderQuestion();
}

function prevQuestion() {
    if (currentStep > 0) {
        currentStep--;
        if (shouldSkip(QUESTION_FLOW[currentStep])) prevQuestion();
        else renderQuestion();
    }
}

function shouldSkip(qId) {
    const tier = answers.q1; // '1', '2', '3'
    const skill = answers.q2; // 'beginner', 'intermediate', 'expert'
    
    // --- FILTRE 1 : L'APPROCHE ASSISTÉE ---
    // CORRECTION : On autorise l'assistance pour Tier 2 et 3.
    // On ne la saute que pour le Tier 1 (Montant trop faible pour justifier les frais).
    if (qId === 'q1_bis' && tier === '1') return true;

    // --- FILTRE 2 : TIER 1 (ARGENT DE POCHE) ---
    // Objectif : Rapidité.
    if (tier === '1') {
        // On garde : Q2 (Skill), Q2_bis (Handicap), Q3 (Device)
        // On saute tout le reste
        if (['q3_bis', 'q4', 'q5', 'q6', 'q7', 'q8'].includes(qId)) return true;
    }

    // --- FILTRE 3 : TIER 2 (ÉPARGNE SIGNIFICATIVE) ---
    if (tier === '2') {
        // On garde Q1_bis (Assistance), Q4 (Menace), Q6 (Héritage), Q7 (Privacy)
        
        // On saute les Dés (Q8) sauf si Expert (inutile de complexifier pour un profil intermédiaire)
        if (qId === 'q8' && skill !== 'expert') return true;
        
        // On peut garder le reste (Voyage, etc) pour ce niveau d'enjeu.
    }

    // --- FILTRE 4 : DÉPENDANCE À LA COMPÉTENCE ---
    // Règle de sécurité absolue : Pas de dés pour les débutants, jamais.
    if (skill === 'beginner' && qId === 'q8') return true;

    return false;
}

function renderQuestion() {
    const qId = QUESTION_FLOW[currentStep];
    if (!qId) { finishQuiz(); return; }

    const qData = T[qId];
    const container = document.getElementById('question-container');
    
    // Calcul de la barre de progression
    const progress = ((currentStep) / QUESTION_FLOW.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    // Début du HTML (Titre + Info)
    let html = `
        <div class="fade-in">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-3">${qData.text}</h2>
            ${qData.info ? `<div class="bg-blue-900/20 border-l-2 border-blue-500 p-3 mb-6 rounded-r text-sm text-blue-200 flex items-start"><i class="fa-solid fa-circle-info mt-1 mr-3 flex-shrink-0"></i><span>${qData.info}</span></div>` : ''}
            <div class="space-y-3">
    `;

    // --- CONDITION MULTI-CHOIX (Q3 et Q5) ---
    if (qId === 'q5' || qId === 'q3') {
        
        // 1. Définir les options dynamiquement selon la question
        let options = [];
        if (qId === 'q5') options = ['opt_fire_std', 'opt_fire_ext', 'opt_water', 'opt_social', 'opt_none'];
        if (qId === 'q3') options = ['opt_ios', 'opt_android', 'opt_desktop'];

        // 2. Générer les checkboxes (Style identique Q5)
        options.forEach(opt => {
            // On s'assure que answers[qId] est bien un tableau
            const currentAnswers = answers[qId] || [];
            const isChecked = currentAnswers.includes(opt) ? 'checked' : '';
            
            // Note: l'input a la classe "peer" pour que la div suivante puisse réagir à l'état "checked"
            html += `
                <label class="checkbox-wrapper cursor-pointer block relative mb-3">
                    <input type="checkbox" value="${opt}" ${isChecked} onchange="handleMultiAnswer(this, '${qId}')" class="sr-only peer">
                    
                    <div class="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 peer-checked:border-orange-500 peer-checked:bg-[#2a1b12] transition-all text-slate-200 flex items-center justify-between group">
                        <span class="font-medium group-hover:text-white">${qData[opt]}</span>
                        
                        <div class="check-icon w-6 h-6 rounded-full border border-slate-500 peer-checked:border-orange-500 peer-checked:bg-orange-500/10 text-white flex items-center justify-center opacity-20 peer-checked:opacity-100 transition-all scale-90 peer-checked:scale-100">
                            <i class="fa-solid fa-check text-xs text-orange-500"></i>
                        </div>
                    </div>
                </label>
            `;
        });

        // 3. Ajouter le bouton "Valider" (Indispensable pour le multi-choix)
        html += `
            <button onclick="nextStep()" class="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 group">
                <span>${T.btn_validate}</span> 
                <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
        `;

    } 
    // --- CONDITION STANDARD (Choix Unique / Boutons) ---
    else {
        Object.keys(qData).forEach(key => {
            if (key.startsWith('opt_')) {
                const val = key.replace('opt_', '');
                html += `
                    <button onclick="handleAnswer('${qId}', '${val}')" class="w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-orange-500 transition-all text-slate-200 group">
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded-full border border-slate-500 mr-3 group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors"></div>
                            <span class="font-medium group-hover:text-white">${qData[key]}</span>
                        </div>
                    </button>
                `;
            }
        });
    }

    html += `</div></div>`;
    container.innerHTML = html;
    
    // Gestion du bouton précédent
    const btnPrev = document.getElementById('btn-prev');
    if (currentStep > 0) {
        btnPrev.classList.remove('hidden');
        // On met à jour le HTML pour garder l'icône
        btnPrev.innerHTML = `<i class="fa-solid fa-arrow-left mr-2"></i> ${T.btn_prev}`;
    } else {
        btnPrev.classList.add('hidden');
    }
}

function handleMultiAnswer(checkbox, qId) {
    // Si pas encore de réponse, on initie un tableau vide
    if (!answers[qId]) answers[qId] = [];
    
    // Logique spécifique Q5 (Exclusivité "Aucun")
    if (qId === 'q5') {
        if (checkbox.checked) {
            if (checkbox.value === 'opt_none') answers.q5 = ['opt_none'];
            else {
                answers.q5 = answers.q5.filter(v => v !== 'opt_none');
                answers.q5.push(checkbox.value);
            }
        } else {
            answers.q5 = answers.q5.filter(v => v !== checkbox.value);
        }
    }
    // Logique standard (Q3) : Ajout/Retrait simple
    else {
        if (checkbox.checked) answers[qId].push(checkbox.value);
        else answers[qId] = answers[qId].filter(v => v !== checkbox.value);
    }
    
    renderQuestion(); 
}

function handleAnswer(qId, val) {
    answers[qId] = val;
    
    // --- CORRECTION CRITIQUE V3.2 ---
    // Si l'utilisateur choisit "Assisté" (q1_bis), on vérifie son Tier (q1).
    if (qId === 'q1_bis' && val === 'assisted') {
        // Si c'est Tier 1 (Modeste), ON IGNORE la sortie "Riche" et on continue le quiz.
        // Cela permet de lui proposer un Bitkey/Ledger simple plus tard.
        if (answers.q1 === '1') { 
            nextStep(); 
            return; 
        }
        
        // Sinon (Tier 2 ou 3), on sort vers la Garde Collaborative
        showLazyRichExit(); 
        return;
    }
    
    nextStep();
}

function nextStep() {
    currentStep++;
    
    // Sécurité fin de quiz
    if (currentStep >= QUESTION_FLOW.length) {
        finishQuiz();
    } else {
        // --- LOGIQUE RÉCURSIVE DE SAUT ---
        // On récupère l'ID de la prochaine question
        const nextQ = QUESTION_FLOW[currentStep];
        
        // Si on doit la sauter, on rappelle nextStep() immédiatement
        if (shouldSkip(nextQ)) {
            nextStep(); 
        } else {
            // Sinon on l'affiche
            renderQuestion();
        }
    }
}

function finishQuiz() {
    document.getElementById('quiz-panel').classList.add('hidden');
    document.getElementById('loading-panel').classList.remove('hidden');
    setTimeout(() => { 
        calculateResults(); 
        document.getElementById('loading-panel').classList.add('hidden');
        document.getElementById('result-panel').classList.remove('hidden');
    }, 2000);
}

// ============================================================
// 4. MOTEUR DE CALCUL (VERSION 3.0 - Recommendation Engine)
// ============================================================

function calculateResults() {
    // --- 0. AUTO-FILL INTELLIGENT ---
    
    // Valeurs par défaut universelles (au cas où)
    if (!answers.q5) answers.q5 = [];              // Pas de risque incendie spécifique
    if (!answers.q8) answers.q8 = 'opt_chip';      // Entropie par puce (Standard)
    
    // AUTO-FILL TIER 1 (Modeste) - On remplit tout ce qu'on a sauté
    if (answers.q1 === '1') {
        if (!answers.q1_bis) answers.q1_bis = 'sovereign'; // Pas d'assistance pour petits montants
        if (!answers.q3_bis) answers.q3_bis = 'static';    // Sédentaire
        if (!answers.q4) answers.q4 = 'opt_low';           // Menace faible
        if (!answers.q6) answers.q6 = 'none';              // Pas d'héritage
        if (!answers.q7) answers.q7 = 'opt_kyc';           // Privacy standard
    }

    // AUTO-FILL TIER 2 & 3
    // Si Q8 a été sauté (car pas expert), la valeur par défaut 'opt_chip' ci-dessus s'applique.
    // Le reste a été posé à l'utilisateur.
    const tier = answers.q1; // '1', '2', '3'
    const skill = answers.q2; // 'beginner', 'intermediate', 'expert'
    const handicap = answers.q2_bis === 'handicap';
    const threat = answers.q4;
    const risks = answers.q5 || [];
    const legacy = answers.q6;
    const trust = answers.q8;
    const isNomad = answers.q3_bis === 'nomad';
    const noKyc = answers.q7 === 'no_kyc';


    // --- A. DÉFINITION DE L'ARCHITECTURE ---
    let archTitle = T.arch_single;
    let archDesc = T.arch_single_desc;
    let warnings = [];
    let isShamir = false;
    let isMultisig = false;

    // MODIFICATION 2: Multisig par défaut pour Tier 3 (sauf Beginner)
    if (tier === '3') {
        if (skill === 'expert' || skill === 'intermediate') {
            archTitle = T.arch_multisig;
            archDesc = T.arch_multisig_desc + " (Possible en solo : 3 clés en lieux différents).";
            isMultisig = true;
        } else if (skill === 'beginner') {
            // Beginner Tier 3 : On reste en Passphrase mais on éduque
            archTitle = T.arch_passphrase;
            archDesc = T.arch_passphrase_desc + " <strong>Conseil : Envisagez le Multisig Assisté (Nunchuk/Casa) pour ce niveau de patrimoine.</strong>";
        }
    }
    // Cas spécifiques qui surchargent (Legacy ou Menace spécifique)
    else if (threat === 'bunker') {
        archTitle = T.arch_multisig;
        archDesc = T.arch_multisig_desc;
        isMultisig = true;
    }
    else if (tier === '3' && legacy === 'family' && !isMultisig) {
        // Liana seulement si on est pas déjà parti sur du multisig pur
        archTitle = T.arch_liana;
        archDesc = T.arch_liana_desc;
    }
    else if ((threat === 'decoy' || threat === 'dk') || risks.includes('opt_social')) {
        // Leurre (si pas déjà multisig)
        if(!isMultisig) {
            archTitle = T.arch_passphrase;
            archDesc = T.arch_passphrase_desc;
            warnings.push(T.warn_passphrase);
        }
    }

    // Gestion Shamir (Si utilisateur intermédiaire tier 3 et pas multisig)
    if (tier === '3' && skill === 'intermediate' && !isMultisig && legacy !== 'family') {
        archTitle = T.arch_shamir;
        archDesc = T.arch_shamir_desc;
        warnings.push(T.warn_shamir);
        isShamir = true;
    }

    // --- B. SELECTION METAL (VERSION FINALE – PARFAITE) ---
    let validMetals = isShamir 
        ? DB_METAL.filter(m => m.shamir === true)
        : DB_METAL.filter(m => m.shamir === false);

    // 1. Feu extrême → titane obligatoire
    if (risks.includes('opt_fire_ext')) {
        validMetals = validMetals.filter(m => m.material.includes('Titane'));
    }
    // 2. Eau → 316 ou titane
    else if (risks.includes('opt_water')) {
        validMetals = validMetals = validMetals.filter(m => m.material.includes('316') || m.material.includes('Titane'));
    }

    // 3. Tier 3 → on exclut les résistance B (Hodlinox), on garde seulement A et A+
    if (tier === '3') {
        validMetals = validMetals.filter(m => m.resistance.startsWith('A'));
    }

    // Tri final
    if (tier === '3' && !risks.includes('opt_fire_ext')) {
        // Tier 3 sans feu extrême → tri par prix (le moins cher en premier parmi les bons)
        validMetals.sort((a, b) => (a.price || 999) - (b.price || 999));
    } else {
        validMetals.sort((a, b) => (a.price || 999) - (b.price || 999));
    }

    // LIMITE À 5 MAX (plus jamais de liste interminable)
    validMetals = validMetals.slice(0, 5);

    if (validMetals.length === 0) validMetals = [DB_METAL[0]];

    // GESTION Q3 MULTI-DEVICE
    // On s'assure que c'est un tableau (rétro-compatibilité ou auto-fill)
    let devices = [];
    if (Array.isArray(answers.q3)) devices = answers.q3;
    else if (answers.q3) devices = [answers.q3]; // Si ancienne version string
    else devices = ['opt_desktop']; // Défaut si vide (Tier 1 auto-fill)

    // On détecte les contraintes
    const hasIos = devices.includes('opt_ios');
    const hasAndroid = devices.includes('opt_android');


    // --- C. FILTRAGE & SCORING WALLETS (MODIFICATION 1) ---
    
    // 1. FILTRE DUR (Hard Filter)
    let filteredWallets = DB_WALLETS.filter(w => {
        // Handicap : On interdit les petits écrans
        if (handicap && (w.screen === 'small' || w.screen === 'mid')) return false;
        
        // iOS Beginner : On interdit ce qui est complexe (Airgap pur sans QR facile) sauf si Bluetooth
        // Si l'utilisateur a un iPhone (même s'il a aussi un PC), on applique la restriction iOS.
        // Car s'il veut signer en mobilité, le wallet doit être compatible.
        if (hasIos && skill === 'beginner' && !w.features.includes('ble')) {
             // Exception pour les wallets AirGap QR Code faciles
             if(!['keystone3','jade_plus','jade','coldcard_q1'].includes(w.id)) return false;
        }
        
        // No-KYC : On veut de l'Open Source (Bitkey accepté car hardware 'dummy')
        if (noKyc && !w.features.includes('opensource') && w.id !== 'bitkey') return false;
        
        // Shamir requis
        if (isShamir && !w.features.includes('shamir')) return false;
        
        return true;
    });

    // 2. SCORING SOUPLE (Soft Scoring)
    let scoredWallets = filteredWallets.map(w => {
        let score = 50; // Base score

        // Bonus Compétence
        if (skill === 'beginner' && w.skill === 'beginner') score += 20;
        if (skill === 'expert' && w.skill === 'expert') score += 20;

        // Bonus Features
        if (isMultisig && (w.id === 'coldcard_q1' || w.id === 'seedsigner' || w.id === 'bitbox02')) score += 30; // Les rois du multisig
        if (isShamir && w.features.includes('shamir')) score += 50;
        if (tier === '3' && w.features.includes('airgap')) score += 25; // Airgap valorisé pour Tier 3

        // BONUS PETIT BUDGET ---
        // Si l'utilisateur a un "Enjeu Gérable" (Tier 1), on favorise massivement les wallets < 100€
        if (tier === '1' && w.price < 100) score += 40;
        
        // Bonus intermédiaire pour les wallets < 160€ 
        if (tier === '1' && w.price >= 100 && w.price < 160) score += 20;
        
        // Bonus Confiance (Dice)
        if (trust === 'dice' && w.features.includes('dice')) score += 40;

        // Bonus Nomad
        if (isNomad && w.features.includes('stealth')) score += 15;

        // Malus légers (préférence utilisateur)
        // Si iPhone choisi, on pénalise un peu ceux qui n'ont ni Bluetooth ni Caméra (câble adaptateur requis)
        if (hasIos && !w.features.includes('ble') && !w.features.includes('camera')) score -= 10;
        if (noKyc && !w.features.includes('tor') && w.id !== 'seedsigner') score -= 5;

        return { ...w, score };
    });

    // Tri et sélection
    scoredWallets.sort((a, b) => b.score - a.score);
    const validWallets = scoredWallets.slice(0, 7); // On garde le Top 7 max

    renderResultsUI(archTitle, archDesc, validWallets, validMetals, warnings, isMultisig);
}

// ------------------------------------------------------------
// GENERATEUR DE PROCÉDURES (MODIFICATION 4)
// ------------------------------------------------------------
function getProcedures(arch, isMultisig) {
    let procs = [];
    
    // SETUP
    procs.push({ t: T.proc_setup, d: T.proc_setup_desc });
    procs.push({ t: T.proc_restore, d: T.proc_restore_desc });

    // PRIVACY
    if (answers.q7 === 'no_kyc') procs.push({ t: T.proc_privacy, d: T.proc_privacy_desc, alert: true });

    // SPECIFIQUE MULTISIG
    if (isMultisig) {
        // Procedure Solo Multisig (Nouveau)
        if (answers.q6 === 'none' || answers.q6 === 'tech_heir') {
             procs.push({ t: T.proc_solo_multisig, d: T.proc_solo_multisig_desc });
        }
        procs.push({ t: T.proc_multisig, d: T.proc_multisig_desc, alert: true });
        procs.push({ t: T.proc_test_multisig, d: T.proc_test_multisig_desc }); // Répétition générale
    }

    // PASSPHRASE
    if (arch.includes('Passphrase')) {
        procs.push({ t: T.proc_decoy, d: T.proc_decoy_desc });
        procs.push({ t: T.proc_passphrase_storage, d: T.proc_passphrase_storage_desc });
        if (answers.q6 !== 'none') {
            procs.push({ t: T.proc_passphrase_legacy, d: T.proc_passphrase_legacy_desc, alert: true });
        }
    }

    // LIANA
    if (arch.includes('Liana')) procs.push({ t: T.proc_liana, d: T.proc_liana_desc });

    // EXPERT / DICE
    if (answers.q8 === 'dice') procs.push({ t: T.proc_entropy, d: T.proc_entropy_desc });

    // NOMAD (Border Wallet)
    if (answers.q3_bis === 'nomad' || answers.q1 === '3') {
        procs.push({ t: T.proc_border, d: T.proc_border_desc });
    }

    // LEGACY
    const legacy = answers.q6;
    if (legacy === 'legal') procs.push({ t: T.proc_legacy_legal, d: T.proc_legacy_legal_desc });
    if (legacy === 'family') procs.push({ t: T.proc_family, d: T.proc_family_desc });

    // HEALTH CHECK (Toujours à la fin)
    procs.push({ t: T.proc_health, d: T.proc_health_desc });

    return procs;
}

// Le reste (renderResultsUI et showLazyRichExit) reste identique à V2.9
// sauf exit_lazy qui est mis à jour dans KB, pas ici.

function renderResultsUI(arch, archDesc, wallets, metals, warnings, isMultisig) {
    const container = document.getElementById('result-content');
    

    // --- COLUMNS & SORTING (LOCALIZED) ---
    let cols = [
        { id: 'tactile', lbl: T.matrix_tactile, icon: 'fa-keyboard', weight: 10 },
        { id: 'secure_element', lbl: T.matrix_secure, icon: 'fa-microchip', weight: 10 },
        { id: 'stealth', lbl: T.matrix_stealth, icon: 'fa-eye-slash', weight: 5 },
        { id: 'opensource', lbl: T.matrix_opensource, icon: 'fa-code', weight: 10 },
        { id: 'airgap', lbl: T.matrix_airgap, icon: 'fa-wifi', weight: 10 },
        { id: 'btc_only', lbl: T.matrix_btc, icon: 'fa-bitcoin', weight: 10 },
        { id: 'ble', lbl: T.matrix_ble, icon: 'fa-brands fa-bluetooth', weight: 5 },
        { id: 'nfc', lbl: T.matrix_nfc, icon: 'fa-solid fa-wifi', weight: 5 },
        { id: 'tor', lbl: T.matrix_tor, icon: 'fa-user-secret', weight: 5 },
        { id: 'shamir', lbl: T.matrix_shamir, icon: 'fa-puzzle-piece', weight: 5 }
    ];

    if (arch.includes('Passphrase')) {
        cols.find(c => c.id === 'tactile').weight += 100;
        cols.find(c => c.id === 'secure_element').weight += 80;
    }
    if (answers.q1 === '3') {
        cols.find(c => c.id === 'airgap').weight += 100;
        cols.find(c => c.id === 'btc_only').weight += 80;
    }
    if (answers.q3 === 'ios') {
        cols.find(c => c.id === 'ble').weight += 150;
    }
    if (answers.q7 === 'no_kyc') {
        cols.find(c => c.id === 'opensource').weight += 100;
        cols.find(c => c.id === 'tor').weight += 50;
    }
    if (arch.includes('Shamir')) {
        cols.find(c => c.id === 'shamir').weight += 200;
    }

    cols.sort((a, b) => b.weight - a.weight);

    // --- HTML GENERATION ---
    let matrixHtml = '';
        if (wallets.length === 0) {
            matrixHtml = '<div class="text-red-400 p-4 border border-red-500 rounded bg-slate-800">Aucun résultat parfait.</div>';
        } else {
            let thead = `<th class="th-model">${T.matrix_model}</th>` + cols.map(c => `<th><div class="flex flex-col items-center gap-1"><i class="fa-solid ${c.icon} text-slate-500 text-lg"></i><span>${c.lbl}</span></div></th>`).join('');
            
            let tbody = wallets.map(w => {
                let cells = cols.map(c => {
                    let val = '-';
                    let has = false;
                    
                    if (c.id === 'btc_only') {
                        if(w.btc_only) { has = true; }
                        else if(w.features.includes('btc_only_opt')) { val = 'Opt'; has=true; }
                    } 
                    else if (c.id === 'tactile' && w.features.includes('keyboard')) {
                        val = '<i class="fa-solid fa-keyboard text-green-500"></i>'; has = true; 
                    }
                    else {
                        if (w.features.includes(c.id)) has = true;
                    }

                    if (has && val === '-') val = '<i class="fa-solid fa-check text-green-500"></i>';
                    if (!has) val = '<span class="text-slate-700">-</span>';
                    if (val === 'Opt') val = '<span class="text-yellow-500 text-xs">Opt</span>';

                    return `<td>${val}</td>`;
                }).join('');

                // TRADUCTION DESCRIPTION WALLET
                const translatedDesc = T['desc_' + w.id] || w.desc;

                return `<tr><td class="td-model"><div class="font-bold text-white">${w.name}</div><div class="text-[10px] text-slate-400 mt-1">${translatedDesc}</div></td>${cells}</tr>`;
            }).join('');

            matrixHtml = `<div class="matrix-container"><table class="matrix-table"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></div>`;
        }

    let metalsHtml = metals.map(m => {
            const isShamir = m.features && m.features.includes('shamir');
            const isPunch = m.features && m.features.includes('punch');
            const isTitanium = m.features && (m.features.includes('titanium') || m.features.includes('molybdenum'));
            
            const shamirBadge = isShamir 
                ? `<div class="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30" title="${T.metal_tip_shamir}"><i class="fa-solid fa-puzzle-piece text-xs"></i></div>` : '';

            const typeIcon = isPunch 
                ? `<div class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 border border-slate-600" title="${T.metal_tip_punch}"><i class="fa-solid fa-hammer text-xs"></i></div>`
                : `<div class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 border border-slate-600" title="${T.metal_tip_tiles}"><i class="fa-solid fa-table-cells text-xs"></i></div>`;

            const fireColor = isTitanium ? 'text-red-400' : 'text-orange-400';
            
            // TRADUCTION MATERIAU METAL (Pas la résistance)
            const translatedMat = T['mat_' + m.id] || m.material;

            return `
            <div class="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center mb-3 hover:border-slate-600 transition-colors group">
                <div class="flex-grow">
                    <div class="font-bold text-white text-sm flex items-center gap-2">
                        ${m.name}
                        ${isTitanium ? `<span class="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">${T.metal_badge_ultra}</span>` : ''}
                    </div>
                    <div class="text-xs ${fireColor} font-mono mt-1 flex items-center gap-2" title="${T.metal_tip_fire}">
                        <i class="fa-solid fa-fire"></i> ${m.resistance}
                    </div>
                    <div class="text-[10px] text-slate-500 mt-0.5 truncate max-w-[200px]">${translatedMat}</div>
                </div>
                
                <div class="flex items-center gap-2 pl-3 border-l border-slate-700 ml-2">
                    ${shamirBadge}
                    ${typeIcon}
                </div>
            </div>`;
        }).join('');

    let warnHtml = warnings.map(w => `<div class="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded text-sm text-yellow-200 flex items-start gap-3"><i class="fa-solid fa-triangle-exclamation mt-1"></i><div>${w}</div></div>`).join('');

    const procedures = getProcedures(arch, isMultisig);
    let procsHtml = procedures.map((p, i) => `
        <div class="bg-slate-800 border ${p.alert ? 'border-red-500' : 'border-slate-700'} rounded-xl p-6 flex gap-5 hover:border-slate-600 transition-colors">
            <div class="text-3xl font-bold ${p.alert ? 'text-red-500' : 'text-slate-400'}">${i+1}</div>
            <div>
                <div class="font-bold text-white mb-1 ${p.alert ? 'text-red-400' : ''}">${p.t}</div>
                <div class="text-sm text-slate-400 leading-relaxed">${p.d}</div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
            <div class="glass-panel p-8 rounded-xl border-t-4 border-blue-500 mb-10 bg-slate-800/90 shadow-2xl">
                <div class="flex items-center gap-3 mb-4">
                    <div class="p-2 bg-blue-500/10 rounded-lg text-blue-400"><i class="fa-solid fa-chess-rook text-xl"></i></div>
                    <h3 class="text-blue-400 text-xs font-bold uppercase tracking-widest">${T.res_arch_title}</h3>
                </div>
                <div class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">${arch}</div>
                <p class="text-lg text-slate-300 leading-relaxed max-w-3xl">${archDesc}</p>
                ${warnHtml}
            </div>

            <!-- GRID PROCÉDURES + MÉTAL (CORRIGÉE ET PARFAITE) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                <!-- COLONNE GAUCHE : PROCÉDURES (2/3 largeur desktop) -->
                <div class="lg:col-span-2 space-y-6">
                    <div class="section-header border-slate-500"><i class="fa-solid fa-list-check"></i> ${T.res_proc_title}</div>
                    ${procsHtml}
                </div>

                <!-- COLONNE DROITE : MÉTAL (1/3 largeur) -->
                <div class="h-fit">
                    <div class="section-header border-slate-400"><i class="fa-solid fa-shield-halved"></i> ${T.res_metal_title}</div>
                    <div class="glass-panel p-4 rounded-xl bg-slate-800/90">
                        <div class="mb-4">
                            <div class="text-xs text-slate-400">
                                ${T.res_compat}
                            </div>
                            
                            ${answers.q1 === '3' && !(answers.q5 || []).includes('opt_fire_ext') ? `
                                <div class="mt-2 text-xs text-amber-400 flex items-start gap-1.5 leading-tight">
                                    <i class="fa-solid fa-circle-info mt-0.5 text-amber-500"></i>
                                    <span>Patrimoine vital → priorité aux métaux haute résistance (recommandation 2025)</span>
                                </div>
                            ` : ''}
                        </div>
                        ${metalsHtml}
                    </div>
                </div>
            </div>

            <!-- HARDWARE MATRIX -->
            <div>
                <div class="section-header border-orange-500"><i class="fa-solid fa-microchip"></i> ${T.res_hw_title}</div>
                ${matrixHtml}
            </div>

            ${getProfileSummaryHtml()}

            <div class="mt-16 text-center border-t border-slate-800 pt-8 flex flex-col items-center gap-4">
                 
                 <button onclick="location.reload()" class="text-slate-400 hover:text-white text-sm transition-colors border border-slate-700 px-6 py-2 rounded hover:bg-slate-800">
                    <i class="fa-solid fa-rotate-right mr-2"></i> ${T.btn_restart}
                </button>
                <a href="https://github.com/dwidoo/mybtcsecured" target="_blank" class="text-xs text-slate-600 hover:text-[#f7931a] transition-colors flex items-center gap-2 mt-4">
                    <i class="fa-brands fa-github"></i> ${T.footer_github}
                </a>
                
                </div>
        `;
}

function showLazyRichExit() {
    document.getElementById('quiz-panel').classList.add('hidden');
    document.getElementById('result-panel').classList.remove('hidden');
    
    const summary = getProfileSummaryHtml(); 
    
    document.getElementById('result-content').innerHTML = `
        <div class="text-center p-6 md:p-10 max-w-3xl mx-auto">
            <i class="fa-solid fa-handshake-angle text-5xl md:text-6xl text-blue-500 mb-6"></i>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">${T.exit_lazy}</h2>
            <p class="text-lg text-slate-300 mb-8 leading-relaxed">${T.exit_lazy_desc}</p>
            
            <div class="bg-slate-800 p-6 rounded-xl text-left border border-slate-700 shadow-xl mb-8">
                <div class="font-bold text-white mb-6 border-b border-slate-700 pb-2">${T.exit_lazy_sol}</div>
                <div class="space-y-6">
                     <div class="flex gap-4">
                        <div class="bg-blue-900/30 p-3 rounded h-fit text-blue-400"><i class="fa-solid fa-gem"></i></div>
                        <div>
                            <div class="text-white font-bold">${T.exit_casa_title}</div>
                            <div class="text-sm text-slate-400">${T.exit_casa_desc}</div>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="bg-green-900/30 p-3 rounded h-fit text-green-400"><i class="fa-solid fa-shield-cat"></i></div>
                        <div>
                            <div class="text-white font-bold">${T.exit_nunchuk_title}</div>
                            <div class="text-sm text-slate-400">${T.exit_nunchuk_desc}</div>
                        </div>
                    </div>
                     <div class="flex gap-4">
                        <div class="bg-purple-900/30 p-3 rounded h-fit text-purple-400"><i class="fa-solid fa-vault"></i></div>
                        <div>
                            <div class="text-white font-bold">${T.exit_unchained_title}</div>
                            <div class="text-sm text-slate-400">${T.exit_unchained_desc}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${summary}
        </div>
    `;
}

function getProfileSummaryHtml() {
    // Mapping utilisant les nouvelles clés de KB
    const map = {
        q1: { l: T.cat_q1, t: T.q1 },
        q1_bis: { l: T.cat_q1_bis, t: T.q1_bis },
        q2: { l: T.cat_q2, t: T.q2 },
        q2_bis: { l: T.cat_q2_bis, t: T.q2_bis },
        q3: { l: T.cat_q3, t: T.q3 },
        q3_bis: { l: T.cat_q3_bis, t: T.q3_bis },
        q4: { l: T.cat_q4, t: T.q4 },
        q5: { l: T.cat_q5, t: T.q5 },
        q6: { l: T.cat_q6, t: T.q6 },
        q7: { l: T.cat_q7, t: T.q7 },
        q8: { l: T.cat_q8, t: T.q8 }
    };

    let itemsHtml = '';
    const order = ['q1', 'q1_bis', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']; // Ordre d'affichage

    order.forEach(key => {
        // Si pas de réponse et pas Q5 (array), on saute
        if (!answers[key] && key !== 'q5') return; 

        const conf = map[key];
        let userVal = answers[key];
        let labelVal = T.sum_default;

        if (userVal) {
            // CAS 1 : Q5 (Risques) - Logique spéciale "Aucun"
            if (key === 'q5' && Array.isArray(userVal)) {
                if(userVal.length === 0 || userVal.includes('opt_none')) labelVal = T.sum_risk_none;
                else labelVal = userVal.map(v => (conf.t[v] || v).replace(/ *\([^)]*\) */g, "")).join(', ');
            } 
            // CAS 2 : Q3 (Appareils) - Logique tableau standard (C'est ici qu'on ajoute le else if)
            else if (key === 'q3' && Array.isArray(userVal)) {
                // On map chaque valeur (ex: 'opt_ios') vers son texte, on nettoie les parenthèses, et on joint par virgule
                labelVal = userVal.map(v => (conf.t[v] || v).replace(/ *\([^)]*\) */g, "")).join(', ');
            }
            // CAS 3 : Questions Standards (String unique)
            else {
                // On essaie avec 'opt_' (pour q1='1') ou directement (pour q3_bis='static')
                let rawLabel = conf.t['opt_' + userVal] || conf.t[userVal] || userVal;
                
                // Sécurité : on s'assure que c'est bien une string avant de split
                if (typeof rawLabel === 'string') {
                    labelVal = rawLabel.split('(')[0].trim();
                } else {
                    labelVal = String(rawLabel);
                }
            }
        }

        itemsHtml += `
            <div class="flex justify-between border-b border-slate-700/50 pb-2 mb-2 last:border-0 last:mb-0">
                <span class="text-slate-500 text-xs uppercase font-semibold">${conf.l}</span>
                <span class="text-slate-300 text-xs font-medium text-right max-w-[60%]">${labelVal}</span>
            </div>
        `;
    });

    return `
        <div class="mt-10 border-t border-slate-800 pt-8">
            <div class="bg-slate-900/80 rounded-xl p-6 border border-slate-700">
                <div class="text-xs text-[#f7931a] font-bold mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <i class="fa-solid fa-list-check"></i> ${T.sum_title}
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    ${itemsHtml}
                </div>

                <div class="mt-6 pt-4 border-t border-slate-700/50 text-[10px] text-slate-600 font-mono text-right">
                    ${T.engine_version}
                </div>
            </div>
        </div>
    `;
}

// GESTION DU STATUT RÉSEAU (Couleurs + Traductions)
function updateNetworkStatus() {
    const isOnline = navigator.onLine;
    
    // 1. Récupération des textes traduits
    const txtNav = isOnline ? T.nav_online : T.nav_offline;
    const txtModal = isOnline ? T.status_online : T.status_offline;

    // 2. Éléments du DOM
    const dot = document.getElementById('net-dot');
    const txt = document.getElementById('net-text');
    const box = document.getElementById('net-status');
    const modalStatus = document.getElementById('modal-net-status');

    // 3. Mise à jour Navbar
    if (txt) txt.innerText = txtNav;

    if (isOnline) {
        // --- MODE ONLINE ---
        // Navbar : Vert / Neutre
        if(dot) { dot.classList.remove('bg-orange-500'); dot.classList.add('bg-green-500'); }
        if(txt) { txt.classList.remove('text-orange-400'); txt.classList.add('text-slate-300'); }
        if(box) { box.classList.remove('border-orange-500/50'); box.classList.add('border-slate-700'); }

        // Modale : Gris (Neutre)
        if(modalStatus) {
            modalStatus.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span> <span>${txtModal}</span>`;
            modalStatus.className = "inline-flex items-center gap-2 text-[10px] font-mono uppercase px-2 py-0.5 rounded border transition-colors border-slate-700 text-slate-500 bg-slate-900";
        }
    } else {
        // --- MODE OFFLINE ---
        // Navbar : Orange (Alerte visuelle positive)
        if(dot) { dot.classList.remove('bg-green-500'); dot.classList.add('bg-orange-500'); }
        if(txt) { txt.classList.remove('text-slate-300'); txt.classList.add('text-orange-400'); }
        if(box) { box.classList.remove('border-slate-700'); box.classList.add('border-orange-500/50'); }

        // Modale : Vert (Positif, car c'est sécurisé)
        if(modalStatus) {
            modalStatus.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> <span>${txtModal}</span>`;
            modalStatus.className = "inline-flex items-center gap-2 text-[10px] font-mono uppercase px-2 py-0.5 rounded border transition-colors border-green-500/30 text-green-400 bg-green-900/20";
        }
    }
}