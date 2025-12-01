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
    alert("Erreur de chargement des données. Vérifiez la console.");
}

const DB_WALLETS = KB.WALLETS;
const DB_METAL = KB.METALS;
const T = KB.LANG.fr; 

let answers = { q5: [] };
let currentStep = 0;
const QUESTION_FLOW = ['q1', 'q1_bis', 'q2', 'q2_bis', 'q3', 'q3_bis', 'q4', 'q5', 'q6', 'q7', 'q8'];

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
    // Injection des textes (Identique V2.9)
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
    if (qId === 'q1_bis' && answers.q1 !== '3') return true;
    
    // MODIFICATION 3: On affiche q8 (Dés) pour Expert OU Tier 3 (Vital)
    // Avant : if (qId === 'q8' && answers.q2 !== 'expert') return true;
    if (qId === 'q8') {
        const isExpert = answers.q2 === 'expert';
        const isVital = answers.q1 === '3';
        if (!isExpert && !isVital) return true; // On skip seulement si ni expert ni vital
    }
    
    return false;
}

function renderQuestion() {
    // ... (Code identique à V2.9 pour l'affichage) ...
    const qId = QUESTION_FLOW[currentStep];
    if (!qId) { finishQuiz(); return; }

    const qData = T[qId];
    const container = document.getElementById('question-container');
    const progress = ((currentStep) / QUESTION_FLOW.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    let html = `
        <div class="fade-in">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-3">${qData.text}</h2>
            ${qData.info ? `<div class="bg-blue-900/20 border-l-2 border-blue-500 p-3 mb-6 rounded-r text-sm text-blue-200 flex items-start"><i class="fa-solid fa-circle-info mt-1 mr-3 flex-shrink-0"></i><span>${qData.info}</span></div>` : ''}
            <div class="space-y-3">
    `;

    if (qId === 'q5') {
        const options = ['opt_fire_std', 'opt_fire_ext', 'opt_water', 'opt_social', 'opt_none'];
        options.forEach(opt => {
            const isChecked = answers.q5 && answers.q5.includes(opt) ? 'checked' : '';
            html += `
                <label class="checkbox-wrapper cursor-pointer block relative">
                    <input type="checkbox" value="${opt}" ${isChecked} onchange="handleMultiAnswer(this)" class="sr-only">
                    <div class="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-orange-500 transition-all text-slate-200 flex items-center justify-between">
                        <span class="font-medium">${qData[opt]}</span>
                        <div class="check-icon w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center text-orange-500 opacity-20 transform scale-75 transition-all">
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </label>
            `;
        });
        html += `<button onclick="nextStep()" class="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all">Valider les risques</button>`;
    } else {
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
    
    const btnPrev = document.getElementById('btn-prev');
    if (currentStep > 0) btnPrev.classList.remove('hidden');
    else btnPrev.classList.add('hidden');
}

function handleMultiAnswer(checkbox) {
    if (!answers.q5) answers.q5 = [];
    if (checkbox.checked) {
        if (checkbox.value === 'opt_none') answers.q5 = ['opt_none'];
        else {
            answers.q5 = answers.q5.filter(v => v !== 'opt_none');
            answers.q5.push(checkbox.value);
        }
    } else {
        answers.q5 = answers.q5.filter(v => v !== checkbox.value);
    }
    renderQuestion(); 
}

function handleAnswer(qId, val) {
    answers[qId] = val;
    if (qId === 'q1_bis' && val === 'assisted') { showLazyRichExit(); return; }
    nextStep();
}

function nextStep() {
    currentStep++;
    if (currentStep >= QUESTION_FLOW.length) finishQuiz();
    else renderQuestion();
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
    const tier = answers.q1; // '1', '2', '3'
    const skill = answers.q2; // 'beginner', 'intermediate', 'expert'
    const handicap = answers.q2_bis === 'handicap';
    const threat = answers.q4;
    const risks = answers.q5 || [];
    const legacy = answers.q6;
    const trust = answers.q8;
    const isNomad = answers.q3_bis === 'nomad';
    const noKyc = answers.q7 === 'no_kyc';
    const device = answers.q3;

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


    // --- C. FILTRAGE & SCORING WALLETS (MODIFICATION 1) ---
    
    // 1. FILTRE DUR (Hard Filter)
    let filteredWallets = DB_WALLETS.filter(w => {
        // Handicap : On interdit les petits écrans
        if (handicap && (w.screen === 'small' || w.screen === 'mid')) return false;
        
        // iOS Beginner : On interdit ce qui est complexe (Airgap pur sans QR facile) sauf si Bluetooth
        if (device === 'ios' && skill === 'beginner' && !w.features.includes('ble')) {
             // Exception pour Keystone/Jade/ColdcardQ1 qui ont des UX QR codes gérables
             if(!['keystone3','jade','coldcard_q1'].includes(w.id)) return false;
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
        
        // Bonus Confiance (Dice)
        if (trust === 'dice' && w.features.includes('dice')) score += 40;

        // Bonus Nomad
        if (isNomad && w.features.includes('stealth')) score += 15;

        // Malus légers (préférence utilisateur)
        if (device === 'ios' && !w.features.includes('ble') && !w.features.includes('camera')) score -= 10; // Pas pratique
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
        { id: 'nfc', lbl: T.matrix_nfc, icon: 'fa-mobile-signal', weight: 5 },
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
        // Fallback ultime (Ne devrait plus arriver avec le soft scoring)
        matrixHtml = '<div class="text-red-400 p-4 border border-red-500 rounded bg-slate-800">Aucun résultat parfait. Regardez : Trezor Safe 3 ou Ledger Flex.</div>';
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

            return `<tr><td class="td-model"><div class="font-bold text-white">${w.name}</div><div class="text-[10px] text-slate-400 mt-1">${w.desc}</div></td>${cells}</tr>`;
        }).join('');

        matrixHtml = `<div class="matrix-container"><table class="matrix-table"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></div>`;
    }

    let metalsHtml = metals.map(m => {
        const isShamir = m.features && m.features.includes('shamir');
        const isPunch = m.features && m.features.includes('punch');
        const isTitanium = m.features && (m.features.includes('titanium') || m.features.includes('molybdenum'));
        
        // Tooltips et Textes localisés via T
        const shamirBadge = isShamir 
            ? `<div class="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30" title="${T.metal_tip_shamir}">
                 <i class="fa-solid fa-puzzle-piece text-xs"></i>
               </div>` 
            : '';

        const typeIcon = isPunch 
            ? `<div class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 border border-slate-600" title="${T.metal_tip_punch}">
                 <i class="fa-solid fa-hammer text-xs"></i>
               </div>`
            : `<div class="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 border border-slate-600" title="${T.metal_tip_tiles}">
                 <i class="fa-solid fa-table-cells text-xs"></i>
               </div>`;

        const fireColor = isTitanium ? 'text-red-400' : 'text-orange-400';
        
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
                <div class="text-[10px] text-slate-500 mt-0.5 truncate max-w-[200px]">${m.material}</div>
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
            <div class="text-2xl font-bold opacity-50 ${p.alert ? 'text-red-500' : 'text-slate-600'}">${i+1}</div>
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
                                Modèles compatibles:
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
        `;
}

function showLazyRichExit() {
    document.getElementById('quiz-panel').classList.add('hidden');
    document.getElementById('result-panel').classList.remove('hidden');
    document.getElementById('result-content').innerHTML = `
        <div class="text-center p-10 max-w-2xl mx-auto">
            <i class="fa-solid fa-handshake-angle text-6xl text-blue-500 mb-6"></i>
            <h2 class="text-3xl font-bold text-white mb-4">${T.exit_lazy}</h2>
            <p class="text-lg text-slate-300 mb-8">${T.exit_lazy_desc}</p>
            <div class="bg-slate-800 p-6 rounded-xl text-left border border-slate-700">
                <div class="font-bold text-white mb-4">${T.exit_lazy_sol}</div>
                <div class="space-y-4">
                    <div class="flex gap-4">
                        <div class="bg-blue-900/30 p-3 rounded h-fit text-blue-400"><i class="fa-solid fa-gem"></i></div>
                        <div>
                            <div class="text-white font-bold">Casa Premium / Private</div>
                            <div class="text-sm text-slate-400">Le standard pour les patrimoines élevés. Support humain 24/7.</div>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="bg-green-900/30 p-3 rounded h-fit text-green-400"><i class="fa-solid fa-shield-cat"></i></div>
                        <div>
                            <div class="text-white font-bold">Nunchuk Honey Badger</div>
                            <div class="text-sm text-slate-400">Souveraineté maximale, Zero KYC, Idéal pour la privacy.</div>
                        </div>
                    </div>
                     <div class="flex gap-4">
                        <div class="bg-purple-900/30 p-3 rounded h-fit text-purple-400"><i class="fa-solid fa-vault"></i></div>
                        <div>
                            <div class="text-white font-bold">Unchained Capital / TheYa</div>
                            <div class="text-sm text-slate-400">Solutions collaboratives réputées (USA/Europe).</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}