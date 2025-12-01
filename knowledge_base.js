const KB = {
    // TEXTES & TRADUCTIONS
    LANG: {
        fr: {
            // SEO & Branding
            app_title_text: "MySecureBTC | Architecte de Sécurité Bitcoin",
            app_brand_html: '<i class="fa-solid fa-shield-halved text-[#f7931a] mr-2"></i>MySecure<span class="text-[#f7931a]">BTC</span>',
            
            // Loaders
            loading_1: "Analyse des vecteurs d'attaque...",
            loading_2: "Calcul de pertinence (Scoring)...",
            loading_3: "Finalisation du protocole de souveraineté...",
            load_title: "Analyse en cours...",
            load_text: "Initialisation du moteur...",

            // --- QUESTIONS ---
            q1: { 
                text: "Si vous perdiez l'accès à vos bitcoins demain, quel serait l'impact ?", 
                info: "Permet de calibrer le budget et la complexité de sécurité nécessaire.", 
                opt_1: "Gérable (Somme modeste / Argent de poche)", 
                opt_2: "Douloureux (Épargne significative)", 
                opt_3: "Vital (Patrimoine de vie / Retraite)" 
            },
            q1_bis: { 
                text: "Pour gérer ce patrimoine, quelle est votre approche ?", 
                info: "L'autonomie totale demande de la rigueur. L'assistance réduit le risque d'erreur technique.", 
                opt_sovereign: "Autonomie (Je veux maîtriser la technique de A à Z)", 
                opt_assisted: "Sécurité Assistée (Je préfère déléguer la complexité technique)" 
            },
            q2: { 
                text: "Quel est votre niveau de confort avec l'informatique ?", 
                info: "Un protocole trop complexe pour votre niveau augmente le risque de fausse manœuvre.", 
                opt_beginner: "Standard (Je veux une interface simple et guidée)", 
                opt_intermediate: "Intermédiaire (Je sais installer un logiciel et suivre un tuto)", 
                opt_expert: "Avancé (Ligne de commande, PGP, compilation...)" 
            },
            q2_bis: { 
                text: "Avez-vous des contraintes physiques (Vue ou Dextérité) ?", 
                info: "Une mauvaise vue ou des tremblements (mains) augmentent radicalement le risque d'erreur lors de la copie d'adresses.", 
                opt_ok: "Non, vision et motricité standards", 
                opt_handicap: "Oui (J'ai besoin d'un grand écran ou d'une interface très aérée)" 
            },
            q3: { 
                text: "Quels appareils utiliserez-vous pour gérer vos transactions ? ", 
                info: "Sélectionnez tous les appareils susceptibles de gérer vos transactions. Le matériel proposé sera compatible avec l'ensemble.", 
                opt_ios: "iPhone (iOS)", 
                opt_android: "Android", 
                opt_desktop: "Ordinateur (Mac / Windows / Linux)" 
            },
            q3_bis: { text: "Ce matériel devra-t-il passer des frontières ?", info: "Voyager avec un hardware wallet physique peut attirer l'attention aux contrôles de sécurité.", opt_static: "Non, stockage sédentaire (Domicile/Coffre)", opt_nomad: "Oui, je prévois de voyager avec mes clés (Risque douanier)" },
            q4: { 
                text: "Contre quelle menace physique souhaitez-vous une protection ?", 
                info: "Si une personne malveillante vous force à déverrouiller votre appareil.", 
                opt_low: "Vol simple (Cambriolage en mon absence)", 
                opt_decoy: "Contrainte (Je veux pouvoir donner un 'faux' code PIN crédible)", 
                opt_bunker: "Séquestration (Impossible de payer même sous la menace)", 
                opt_dk: "Je ne sais pas (Recommandé : Mode Leurre)" 
            },
            q5: { text: "Quels risques environnementaux pèsent sur votre sauvegarde (Mots) ?", info: "Le papier brûle. L'encre s'efface. Sélectionnez tous les risques potentiels.", opt_fire_std: "Incendie Domestique (~600°C)", opt_fire_ext: "Incendie Extrême / Industriel (>1000°C)", opt_water: "Inondation / Humidité / Corrosion", opt_social: "Indiscrétion (Je veux que mes mots soient illisibles pour un tiers)", opt_none: "Aucun (Coffre bancaire sécurisé)" },
            q6: { text: "Avez-vous organisé la transmission de vos actifs (Succession) ?", info: "Sans protocole explicite, vos bitcoins risquent d'être perdus en cas de décès.", opt_none: "Non (Risque accepté pour l'instant)", opt_legal: "Oui, via un tiers de confiance (Notaire/Avocat)", opt_tech_heir: "Oui, j'ai un proche compétent techniquement", opt_family: "Oui, j'ai des héritiers mais ils sont néophytes" },
            q7: { text: "Quelle importance accordez-vous à la confidentialité (Privacy) ?", info: "Détermine le choix des logiciels pour éviter de lier votre identité à vos fonds.", opt_kyc: "Standard (J'utilise des plateformes régulées)", opt_no_kyc: "Élevée (Je veux minimiser mes traces numériques)", opt_dk: "Standard" },
            
            // MODIFICATION 3: Texte Q8 plus pédagogique
            q8: { 
                text: "Génération de la clé privée (Entropie) :", 
                info: "La façon dont vos 12/24 mots sont choisis. L'aléa physique est le standard or.", 
                opt_chip: "Automatique (Recommandé : Puce sécurisée ou Open Source)", 
                opt_dice: "Dés / Mathématique (Souveraineté Maximale - Mode Expert)", 
                opt_dk: "Je ne sais pas (Automatique)" 
            },

            // --- RESULTATS ---
            res_arch_title: "Architecture de Sécurité",
            res_hw_title: "Sélection Matérielle (Top 7)",
            res_metal_title: "Support de Sauvegarde (Métal)",
            res_proc_title: "Procédures Opérationnelles",
            res_tag: "PROTOCOLE GÉNÉRÉ",
            res_subtitle: "Voici la configuration recommandée selon vos contraintes.",
            res_compat: "Modèles compatibles :",
            
            // Descriptions
            arch_single: "Standard Single-Sig",
            arch_single_desc: "L'architecture de référence. Vous possédez une clé unique (12 ou 24 mots). C'est le meilleur équilibre sécurité/complexité pour débuter.",
            arch_passphrase: "Single-Sig + Passphrase (Leurre)",
            arch_passphrase_desc: "Architecture avancée. Vous ajoutez un mot de passe mémorisé à votre sauvegarde. Cela génère deux portefeuilles : un 'leurre' pour le quotidien, et un 'secret' pour l'épargne.",
            arch_multisig: "Multisig Distribué (2-sur-3)",
            arch_multisig_desc: "Le coffre-fort numérique. Nécessite 2 clés sur 3 pour autoriser une transaction. Standard mondial pour les patrimoines significatifs (élimine le point de défaillance unique).",
            arch_liana: "Time-Lock (Héritage Automatisé)",
            arch_liana_desc: "Utilisation du protocole Liana. Si les fonds ne bougent pas pendant une période définie (ex: 1 an), une clé de secours s'active automatiquement pour vos héritiers.",
            arch_shamir: "Shamir Backup (Fragmentation)",
            arch_shamir_desc: "Votre clé est divisée mathématiquement en plusieurs éclats. Aucun éclat seul ne permet d'accéder aux fonds. Offre une redondance physique robuste.",

            warn_shamir: "Note : Le standard Shamir (SLIP-39) restreint le choix de matériel compatible.",
            warn_passphrase: "Point d'attention : Si vous oubliez la Passphrase, les fonds du portefeuille secret sont perdus à jamais.",
            
            exit_lazy: "Recommandation : Garde Collaborative",
            exit_lazy_desc: "Au vu de l'importance du patrimoine et de votre souhait d'assistance, la gestion solo présente un risque. La garde collaborative permet d'avoir un tiers de sécurité.",
            exit_lazy_sol: "Solutions Recommandées",

            metal_tier3_note: "Patrimoine vital : nous privilégions les sauvegardes les plus résistantes, même pour un incendie domestique. Le surcoût est faible comparé au risque.",

            // Procédures (MODIFICATION 4 - Ajouts)
            proc_setup: "Initialisation Sécurisée",
            proc_setup_desc: "Vérifiez l'intégrité du packaging. Mettez à jour le firmware. Ne saisissez jamais vos mots sur un appareil connecté (Ordi/Tel).",
            proc_restore: "Test de Restauration (Obligatoire)",
            proc_restore_desc: "Avant tout dépôt important : envoyez un petit montant, réinitialisez le matériel, et restaurez-le avec vos mots pour valider la sauvegarde.",
            proc_decoy: "Mise en place du Leurre",
            proc_decoy_desc: "Stockez une petite somme (~5%) sur le code PIN standard. Stockez le reste sur le code PIN secret lié à la Passphrase.",
            proc_entropy: "Entropie par les Dés",
            proc_entropy_desc: "Utilisez 100 lancers de dés pour générer votre clé. Cela garantit que le secret est purement mathématique et inconnu du fabricant.",
            
            // NOUVEAU
            proc_border: "Passage de Frontière",
            proc_border_desc: "Ne voyagez JAMAIS avec votre clé principale. Utilisez un 'Border Wallet' (12 mots temporaires mémorisés) ou une clé microSD chiffrée dissimulée.",
            
            proc_privacy: "Connexion Privée",
            proc_privacy_desc: "Évitez les logiciels par défaut en mode standard. Couplez votre matériel à un logiciel comme Sparrow Wallet via le réseau Tor.",
            
            // NOUVEAU
            proc_solo_multisig: "Multisig Solo (Isolation Géographique)",
            proc_solo_multisig_desc: "Utilisez 3 hardwares de marques différentes ou identiques (ex: Coldcard). Générez 3 seeds distincts. Stockez-les : 1 chez vous, 1 au coffre, 1 chez un tiers passif. Aucun tiers de confiance n'est requis pour la sécurité, juste pour le stockage.",
            
            proc_multisig: "Sauvegarde des Descripteurs",
            proc_multisig_desc: "CRITIQUE : En Multisig, sauvegarder les mots ne suffit pas. Vous devez impérativement sauvegarder le fichier de configuration (XPUBS + Derivation Paths) de tous les participants.",
            
            // NOUVEAU
            proc_test_multisig: "Répétition Générale (Drill)",
            proc_test_multisig_desc: "Avant de transférer le gros du patrimoine : Créez le multisig, déposez un petit montant, effacez TOUS les wallets, restaurez-les, et effectuez une transaction sortante. C'est le seul moyen de valider votre setup.",

            proc_liana: "Rafraîchissement Time-Lock",
            proc_liana_desc: "Connectez-vous au moins une fois par an pour signer une transaction et repousser l'activation automatique du plan d'héritage.",
            proc_legacy_legal: "Instructions au Tiers",
            proc_legacy_legal_desc: "Rédigez un document indiquant OÙ se trouvent les éléments de sécurité, sans jamais écrire les codes ou les mots eux-mêmes.",
            proc_family: "Fiche Réflexe Famille",
            proc_family_desc: "Une fiche simple pour vos héritiers : 'Ne répondez à personne. Contactez [Nom expert]. Mes clés sont dans [Lieu physique].'",
            proc_passphrase_legacy: "Transmission Passphrase",
            proc_passphrase_legacy_desc: "La Passphrase doit être transmise via un canal différent de la sauvegarde principale (ex: Notaire ou Coffre bancaire distinct).",
            proc_passphrase_storage: "Stockage Passphrase",
            proc_passphrase_storage_desc: "Ne stockez jamais la Passphrase avec la liste de mots. Mémorisez-la ou gravez-la sur un support métal caché séparément.",
            
            proc_health: "Audit Annuel (Santé)",
            proc_health_desc: "Bloquez une date récurrente. Vérifiez l'intégrité physique des sauvegardes métal. Mettez à jour les firmwares. Vérifiez que vos proches savent toujours où chercher.",

            // NOUVEAU : Traductions Matrix & Tooltips
            matrix_model: "Modèle",
            matrix_tactile: "Tactile/Clavier",
            matrix_secure: "Puce Sécu.",
            matrix_stealth: "Discret",
            matrix_opensource: "Open Source",
            matrix_airgap: "AirGap",
            matrix_btc: "BTC Only",
            matrix_ble: "Bluetooth",
            matrix_nfc: "NFC",
            matrix_tor: "Tor",
            matrix_shamir: "Shamir",

            metal_badge_ultra: "ULTRA",
            metal_tip_shamir: "Compatible Shamir Backup (Découpage de clé)",
            metal_tip_punch: "Méthode : Frappe (Indélébile / Marteau)",
            metal_tip_tiles: "Méthode : Tuiles (Glissières / Réutilisable)",
            metal_tip_fire: "Résistance Thermique",

            // --- JURIDIQUE & OFFLINE ---
            legal_title: "Conditions Générales & Avertissements",
            
            // P1 : NATURE DU SERVICE (ÉDUCATION VS CONSEIL)
            legal_p1: "<strong>1. Objet Pédagogique et Absence de Conseil :</strong> Ce site est un simulateur éducatif théorique. Il ne constitue ni un conseil en investissement financier, ni un service sur actifs numériques (PSAN), ni un audit de sécurité informatique certifié. L'éditeur ne fournit aucun service de garde (custody) et n'a jamais accès à vos fonds.",
            
            // P2 : RESPONSABILITÉ (OBLIGATION DE MOYENS)
            legal_p2: "<strong>2. Limitation de Responsabilité :</strong> La sécurité est une démarche active qui incombe à l'utilisateur. L'éditeur décline toute responsabilité en cas de perte de fonds, vol, phishing, erreur humaine, oubli de code d'accès ou défaillance technique. L'utilisateur reconnaît être le seul responsable de la mise en œuvre des procédures suggérées.",
            
            // P3 : RISQUES MATÉRIELS (HARDWARE)
            legal_p3: "<strong>3. Matériels Tiers :</strong> Les portefeuilles (Hardware Wallets) et supports recommandés sont fabriqués par des sociétés tierces indépendantes. L'éditeur ne garantit pas la fiabilité, l'absence de bugs ou la pérennité de ces matériels et ne saurait être tenu responsable d'un défaut de fabrication ou logiciel de ces produits.",
            
            // P4 : DONNÉES (PRIVACY) & ACCEPTATION
            legal_p4: "<strong>4. Données & Acceptation :</strong> Aucun cookie traceur tiers n'est utilisé. Les seuls logs existants sont les logs techniques standards de l'hébergeur, qui collectent temporairement les adresses IP à des fins de sécurité réseau. En continuant, vous acceptez d'utiliser ces informations à vos propres risques et périls.",
            
            legal_checkbox_offline: "J'ai compris que je peux désactiver ma connexion internet (Mode Avion) dès maintenant pour utiliser l'outil en toute confidentialité.",
            legal_checkbox_terms: "Je certifie avoir lu et accepté les conditions d'utilisation et les avertissements ci-dessus.",
            
            nav_online: "EN LIGNE",
            nav_offline: "HORS LIGNE",
            status_online: "Connecté (Standard)",
            status_offline: "Hors-ligne (Recommandé)",

            legal_btn_start: "Accéder au simulateur",
            btn_validate: "Valider la sélection",
            btn_prev: "Précédent",
            btn_restart: "Recommencer l'analyse",
            btn_cancel: "Annuler",           
            engine_version: "Engine V3.1 (Multi-Lang)",

            // --- HERO & HOME ---
            hero_title_1: "Sécurisez vos bitcoins.",
            hero_title_2: "Sans faille.",
            hero_desc: "Définissez votre <strong>dispositif de sécurité personnalisé</strong> <span class='text-[#f7931a] font-bold'>en une minute</span> et en totale confidentalité. Obtenez une recommandation complète (Matériel + Sauvegarde + Procédures) adaptée à votre situation réelle.",
            hero_btn: "Configurer mon dispositif",
            
            // BLOCS RASSURANCE
            block_anon_title: "Confidentialité Totale",
            block_anon_desc: "Tout le calcul s'effectue sur votre navigateur. Aucune donnée personnelle n'est envoyée sur un serveur. Fonctionne hors-ligne.",
            block_agnostic_title: "Sélection Technique",
            block_agnostic_desc: "Les matériels et solutions proposés sont sélectionnés sur la base stricte de leurs fonctionnalités de sécurité (Code source, Élément sécurisé, Airgap etc.).",
            block_full_title: "Code Vérifiable",
            block_full_desc: "Le code source de cet outil est public. Conformément à la philosophie Bitcoin ('Don't Trust, Verify'), vous pouvez l'auditer librement.",
            
            footer_github: "Code Source (GitHub)",

            // --- SYNTHÈSE PROFIL (DEBUG/RESUME) ---
            sum_title: "Synthèse de votre profil",
            sum_default: "Standard / Non spécifié",
            sum_risk_none: "Aucun risque spécifique",
            
            // Labels des catégories du résumé
            cat_q1: "Enjeu Financier",
            cat_q1_bis: "Stratégie",
            cat_q2: "Compétence",
            cat_q2_bis: "Accessibilité",
            cat_q3: "Matériel",
            cat_q3_bis: "Mobilité",
            cat_q4: "Menace Physique",
            cat_q5: "Risques Stockage",
            cat_q6: "Transmission",
            cat_q7: "Confidentialité",
            cat_q8: "Entropie (Aléa)",

            // --- PAGE GARDE COLLABORATIVE (Lazy Exit) ---
            exit_casa_title: "Casa Premium / Private",
            exit_casa_desc: "Le standard pour les patrimoines élevés. Support humain 24/7.",
            
            exit_nunchuk_title: "Nunchuk Honey Badger",
            exit_nunchuk_desc: "Souveraineté maximale, Zero KYC, Idéal pour la privacy.",
            
            exit_unchained_title: "Unchained Capital / TheYa",
            exit_unchained_desc: "Solutions collaboratives réputées (USA/Europe).",

            // --- PRODUITS (Traductions) ---
            // Clés construites sur : 'desc_' + id_wallet et 'mat_' + id_metal
            
            // WALLETS
            desc_coldcard_q1: "Station AirGap ultime. Clavier QWERTY complet.",
            desc_trezor_safe7: "Standard 2025. Haptic Touch & Puce Transparente.",
            desc_ledger_flex: "Écran E-Ink sécurisé. Lisibilité parfaite.",
            desc_ledger_nanox: "Format clé USB discret. Standard Bluetooth éprouvé.",
            desc_bitkey: "Simplicité absolue. Multisig assisté.",
            desc_trezor_safe5: "L'expérience tactile 100% Open Source.",
            desc_bitbox02: "Discrète, Suisse, redoutable d'efficacité.",
            desc_jade: "Sécurité AirGap accessible via QR Code.",
            desc_keystone3: "Expérience Smartphone 100% AirGap.",
            desc_passport: "Design Premium Bitcoin-only.",
            desc_trezor_safe3: "Entrée de gamme robuste.",
            desc_seedsigner: "À construire soi-même. Stateless.",
            desc_ledger_stax: "Écran incurvé géant.",
            desc_tangem: "Format carte NFC, backup multi-cartes, EAL6+.",
            desc_ngrave_zero: "100% airgap QR, EAL7, auto-destruction.",
            desc_ellipal_titan2: "Airgap total QR, écran 4\".",
            desc_cypherock_x1: "Shamir split sur 5 cartes NFC, sans Seed.",
            desc_ledger_nanogen5: "L'héritier du Nano S. Écran tactile E-Ink.",
            desc_bitbox02_nova: "Évolution avec verre trempé et Bluetooth.",
            desc_jade_plus: "Version Premium : écran IPS plus grand.",
            desc_passport_prime: "Le 'Blackberry' du Bitcoin devient tactile.",
            desc_onekey_pro: "4 Éléments Sécurisés & Biométrie.",
            desc_tangem_ring: "Bague de paiement/accès crypto.",

            // METALS (Matériaux & Résistance)
            // Format : mat_ + id : "Nom Matériau"
            // Format : res_ + id : "Température"
            
            mat_cryptotag_zeus: "Titane Grade 2",
            
            mat_coinkite_seedplate: "Acier Inox 316L",
            
            mat_hodlinox: "Acier Inox 304",
            
            mat_blockplate: "Acier Inox 304",
            
            mat_coinplate: "Acier Inox 304",
            
            mat_trezor_keep_triple: "Acier 304",
            
            mat_cryptotag_thor: "Titane Grade 2",
            
            mat_ngrave_graphene: "Acier Inox (Embossage)",
            
            mat_billfodl: "Acier Inox 316 Marine",
            
            mat_cryptosteel_capsule: "Acier Inox 304",
            
            mat_safepal_cypher: "Acier Inox 304",
            
            mat_keystone_tablet: "Acier Inox 304",
            
            mat_safeseed_moly: "Molybdène",
            
            mat_secux_xseed_pro: "Acier Inox 304",
            
            mat_cryptosteel_seed12: "Acier Inox 304",
            
            mat_stampseed_kit: "Titane Aerospace",

            mat_imkey_heirbox_s1: "Acier Inox 304",
            
            mat_ellipal_seed_phrase_steel: "Acier Inox 316",
            
            mat_bitbox_steelwallet: "Acier Inox 304",
            
            mat_tinyseed: "Titane Pur",
            
            mat_coldti: "Titane",

            don_title: "Soutenir le projet",
            don_text: "Si cet outil vous a fait gagner du temps, vous pouvez soutenir le code, la maintenance et les futures mises à jour.",
            don_copied: "Copié !",
            don_funny: "(Je sais qu'il y a 99% de chances que vous ne le fassiez pas, mais pour le 1% de légendes : merci ! ⚡️)",
            don_copy_ln: "Copier Lightning ⚡️",
            don_copy_btc: "Copier Bitcoin ₿",
            don_action_aff: "Ou utilisez les liens ci-dessus pour vos achats : cela finance l'outil sans surcoût.",
        },

        en: {
            // SEO & Branding
            app_title_text: "MySecureBTC | Bitcoin Security Architect",
            app_brand_html: '<i class="fa-solid fa-shield-halved text-[#f7931a] mr-2"></i>MySecure<span class="text-[#f7931a]">BTC</span>',
            
            // Loaders
            loading_1: "Analyzing attack vectors...",
            loading_2: "Calculating relevance score...",
            loading_3: "Finalizing sovereignty protocol...",
            load_title: "Analysis in progress...",
            load_text: "Engine initializing...",

            // --- QUESTIONS ---
            q1: { 
                text: "If you lost access to your bitcoins tomorrow, what would be the impact?", 
                info: "Helps calibrate the necessary budget and security complexity.", 
                opt_1: "Manageable (Modest sum / Pocket money)", 
                opt_2: "Painful (Significant savings)", 
                opt_3: "Life-Changing (Life savings / Retirement)" 
            },
            q1_bis: { 
                text: "To manage these assets, what is your approach?", 
                info: "Total autonomy requires rigor. Assistance reduces the risk of technical errors.", 
                opt_sovereign: "Sovereign (I want to master the tech from A to Z)", 
                opt_assisted: "Assisted Security (I prefer to delegate technical complexity)" 
            },
            q2: { 
                text: "What is your comfort level with IT/Computers?", 
                info: "A protocol too complex for your skills increases the risk of mistakes.", 
                opt_beginner: "Standard (I want a simple, guided interface)", 
                opt_intermediate: "Intermediate (I can install software and follow a tutorial)", 
                opt_expert: "Advanced (Command line, PGP, compiling...)" 
            },
            q2_bis: { 
                text: "Do you have any physical constraints (Vision or Dexterity)?", 
                info: "Poor eyesight or shaky hands drastically increase the risk of error when copying addresses.", 
                opt_ok: "No, standard vision and motor skills", 
                opt_handicap: "Yes (I need a large screen or very airy interface)" 
            },
            q3: { 
                text: "Which devices will you use? (Multi-choice)", 
                info: "Select all devices likely to handle transactions. The proposed hardware will be compatible with all.", 
                opt_ios: "iPhone (iOS)", 
                opt_android: "Android", 
                opt_desktop: "Computer (Mac / Windows / Linux)" 
            },
            q3_bis: { 
                text: "Will this hardware need to cross borders?", 
                info: "Traveling with a physical hardware wallet can attract attention at security checkpoints.", 
                opt_static: "No, sedentary storage (Home/Safe)", 
                opt_nomad: "Yes, I plan to travel with my keys (Customs risk)" 
            },
            q4: { 
                text: "Against which physical threat do you want protection?", 
                info: "If a malicious person forces you to unlock your device.", 
                opt_low: "Simple Theft (Burglary in my absence)", 
                opt_decoy: "Duress (I want to be able to give a credible 'fake' PIN code)", 
                opt_bunker: "Kidnapping (Impossible to pay even under threat)", 
                opt_dk: "I don't know (Recommended: Decoy Mode)" 
            },
            q5: { 
                text: "What environmental risks threaten your backup (Words)?", 
                info: "Paper burns. Ink fades. Select all potential risks.", 
                opt_fire_std: "Domestic Fire (~600°C)", 
                opt_fire_ext: "Extreme/Industrial Fire (>1000°C)", 
                opt_water: "Flood / Humidity / Corrosion", 
                opt_social: "Prying Eyes (I want my words to be unreadable to others)", 
                opt_none: "None (Secure bank vault)" 
            },
            q6: { 
                text: "Have you organized the transmission of your assets (Inheritance)?", 
                info: "Without an explicit protocol, your bitcoins risk being lost in case of death.", 
                opt_none: "No (Risk accepted for now)", 
                opt_legal: "Yes, via a trusted third party (Notary/Lawyer)", 
                opt_tech_heir: "Yes, I have a technically competent relative", 
                opt_family: "Yes, I have heirs but they are beginners" 
            },
            q7: { 
                text: "What importance do you place on privacy?", 
                info: "Determines software choices to avoid linking your identity to your funds.", 
                opt_kyc: "Standard (I use regulated platforms)", 
                opt_no_kyc: "High (I want to minimize my digital footprint)", 
                opt_dk: "Standard" 
            },
            q8: { 
                text: "Private Key Generation (Entropy):", 
                info: "How your 12/24 words are chosen. Physical randomness is the gold standard.", 
                opt_chip: "Automatic (Recommended: Secure Chip or Open Source)", 
                opt_dice: "Dice / Math (Max Sovereignty - Expert Mode)", 
                opt_dk: "I don't know (Automatic)" 
            },

            // --- RESULTS ---
            res_arch_title: "Security Architecture",
            res_hw_title: "Hardware Selection (Compatible)",
            res_metal_title: "Backup Medium (Metal)",
            res_proc_title: "Operational Procedures",
            res_tag: "PROTOCOL GENERATED",
            res_subtitle: "Here is the recommended configuration based on your constraints.",
            res_compat: "Compatible models:",
            
            // Descriptions
            arch_single: "Standard Single-Sig",
            arch_single_desc: "The reference architecture. You own a single key (12 or 24 words). It is the best security/complexity balance for starting out.",
            arch_passphrase: "Single-Sig + Passphrase (Decoy)",
            arch_passphrase_desc: "Advanced architecture. You add a memorized password to your backup. This generates two wallets: a 'decoy' for daily use, and a 'secret' one for savings.",
            arch_multisig: "Distributed Multisig (2-of-3)",
            arch_multisig_desc: "The digital vault. Requires 2 keys out of 3 to authorize a transaction. Global standard for significant wealth (eliminates single point of failure).",
            arch_liana: "Time-Lock (Automated Inheritance)",
            arch_liana_desc: "Using the Liana protocol. If funds do not move for a defined period (e.g., 1 year), a recovery key automatically activates for your heirs.",
            arch_shamir: "Shamir Backup (Fragmentation)",
            arch_shamir_desc: "Your key is mathematically divided into multiple shards. No single shard allows access to funds. Offers robust physical redundancy.",

            warn_shamir: "Note: The Shamir standard (SLIP-39) restricts the choice of compatible hardware.",
            warn_passphrase: "Caution: If you forget the Passphrase, funds in the secret wallet are lost forever.",
            
            exit_lazy: "Recommendation: Collaborative Custody",
            exit_lazy_desc: "Given the importance of the assets and your wish for assistance, solo management presents a risk. Collaborative custody provides a security partner.",
            exit_lazy_sol: "Recommended Solutions",
            
            exit_casa_title: "Casa Premium / Private",
            exit_casa_desc: "The standard for high net worth. 24/7 human support.",
            exit_nunchuk_title: "Nunchuk Honey Badger",
            exit_nunchuk_desc: "Max sovereignty, Zero KYC, Ideal for privacy.",
            exit_unchained_title: "Unchained Capital / TheYa",
            exit_unchained_desc: "Reputable collaborative solutions (USA/Europe).",

            metal_tier3_note: "Life savings: we prioritize the most resistant backups, even for domestic fire. The extra cost is negligible compared to the risk.",

            // Procedures
            proc_setup: "Secure Initialization",
            proc_setup_desc: "Check packaging integrity. Update firmware. Never enter your words on a connected device (Computer/Phone).",
            proc_restore: "Recovery Test (Mandatory)",
            proc_restore_desc: "Before any large deposit: send a small amount, reset the hardware, and restore it with your words to validate the backup.",
            proc_decoy: "Setting up the Decoy",
            proc_decoy_desc: "Store a small amount (~5%) on the standard PIN code. Store the rest on the secret PIN code linked to the Passphrase.",
            proc_entropy: "Dice Entropy",
            proc_entropy_desc: "Use 100 dice rolls to generate your key. This ensures the secret is purely mathematical and unknown to the manufacturer.",
            
            proc_border: "Border Crossing",
            proc_border_desc: "NEVER travel with your main key. Use a 'Border Wallet' (12 temporary memorized words) or a hidden encrypted microSD.",
            
            proc_privacy: "Private Connection",
            proc_privacy_desc: "Avoid default software in standard mode. Pair your hardware with software like Sparrow Wallet via the Tor network.",
            
            proc_solo_multisig: "Solo Multisig (Geo-Isolation)",
            proc_solo_multisig_desc: "Use 3 hardware wallets (different brands or same). Generate 3 distinct seeds. Store them: 1 at home, 1 in a safe, 1 with a passive third party. No trusted third party required for security, only storage.",
            
            proc_multisig: "Descriptor Backup",
            proc_multisig_desc: "CRITICAL: In Multisig, saving words is not enough. You MUST save the configuration file (XPUBS + Derivation Paths) of all participants.",
            
            proc_test_multisig: "Drill (Rehearsal)",
            proc_test_multisig_desc: "Before transferring the bulk of assets: Create multisig, deposit small amount, wipe ALL wallets, restore them, and perform an outgoing transaction.",

            proc_liana: "Time-Lock Refresh",
            proc_liana_desc: "Connect at least once a year to sign a transaction and push back the automatic inheritance plan activation.",
            proc_legacy_legal: "Instructions to Third Party",
            proc_legacy_legal_desc: "Draft a document indicating WHERE security items are located, without ever writing the codes or words themselves.",
            proc_family: "Family Response Card",
            proc_family_desc: "A simple card for heirs: 'Do not reply to anyone. Contact [Expert Name]. My keys are in [Physical Location].'",
            proc_passphrase_legacy: "Passphrase Transmission",
            proc_passphrase_legacy_desc: "The Passphrase must be transmitted via a different channel than the main backup (e.g., Notary or separate bank vault).",
            proc_passphrase_storage: "Passphrase Storage",
            proc_passphrase_storage_desc: "Never store the Passphrase with the word list. Memorize it or engrave it on a metal support hidden separately.",
            
            proc_health: "Annual Audit (Health Check)",
            proc_health_desc: "Block a recurring date. Check physical integrity of metal backups. Update firmwares. Verify that your loved ones still know where to look.",

            // Matrix & Tooltips
            matrix_model: "Model",
            matrix_tactile: "Touch/Keyboard",
            matrix_secure: "Secure Chip",
            matrix_stealth: "Stealth",
            matrix_opensource: "Open Source",
            matrix_airgap: "AirGap",
            matrix_btc: "BTC Only",
            matrix_ble: "Bluetooth",
            matrix_nfc: "NFC",
            matrix_tor: "Tor",
            matrix_shamir: "Shamir",

            metal_badge_ultra: "ULTRA",
            metal_tip_shamir: "Compatible with Shamir Backup (Key splitting)",
            metal_tip_punch: "Method: Punch (Indelible / Hammer)",
            metal_tip_tiles: "Method: Tiles (Sliding / Reusable)",
            metal_tip_fire: "Thermal Resistance",

            // Profile Summary
            sum_title: "Profile Summary",
            sum_default: "Standard / Unspecified",
            sum_risk_none: "No specific risk",
            
            cat_q1: "Financial Stake",
            cat_q1_bis: "Strategy",
            cat_q2: "Skill Level",
            cat_q2_bis: "Accessibility",
            cat_q3: "Device(s)",
            cat_q3_bis: "Mobility",
            cat_q4: "Physical Threat",
            cat_q5: "Storage Risks",
            cat_q6: "Transmission",
            cat_q7: "Privacy",
            cat_q8: "Entropy (Randomness)",

            // LEGAL
            legal_title: "Terms & Warnings",
            legal_p1: "<strong>1. Educational Purpose & No Advice:</strong> This site is a theoretical educational simulator. It constitutes neither financial investment advice, nor a digital asset service (CASP), nor a certified security audit. The publisher provides no custody service and never has access to your funds.",
            legal_p2: "<strong>2. Limitation of Liability:</strong> Security is an active process incumbent upon the user. The publishing company declines all responsibility in case of loss of funds, theft, phishing, human error, forgotten access codes, or technical failure. The user acknowledges being solely responsible for implementing suggested procedures.",
            legal_p3: "<strong>3. Third-Party Hardware:</strong> Recommended wallets and supports are manufactured by independent third-party companies. The publisher does not guarantee the reliability, absence of bugs, or longevity of these devices and cannot be held liable for a manufacturing or software defect of these products.",
            legal_p4: "<strong>4. Data & Acceptance:</strong> No third-party tracking cookies are used. The only existing logs are standard technical host logs, which temporarily collect IP addresses for network security. By continuing, you agree to use this information at your own risk.",
            
            legal_checkbox_offline: "I understand I can turn off my internet connection (Airplane Mode) right now to use the tool in total confidentiality.",
            legal_checkbox_terms: "I certify that I have read and accepted the terms of use and warnings above.",
            
            nav_online: "ONLINE",
            nav_offline: "OFFLINE",
            status_online: "Online (Standard)",
            status_offline: "Offline (Recommended)",

            legal_btn_start: "Start Simulator",
            
            // HERO
            hero_title_1: "Secure your bitcoins.",
            hero_title_2: "Faultlessly.",
            hero_desc: "Define your <strong>personalized security setup</strong> <span class='text-[#f7931a] font-bold'>in one minute</span> with total confidentiality. Get a full recommendation (Hardware + Backup + Procedures) adapted to your real situation.",
            hero_btn: "Configure my setup",
            btn_validate: "Validate selection",
            btn_prev: "Previous",
            btn_restart: "Restart analysis",
            btn_cancel: "Cancel",
            engine_version: "Engine V3.1 (Multi-Lang)",
            
            // RASSURANCE
            block_anon_title: "Total Privacy",
            block_anon_desc: "All calculation happens in your browser. No personal data is sent to a server. Works offline.",
            block_agnostic_title: "Technical Selection",
            block_agnostic_desc: "Proposed hardware and solutions are selected strictly on their security features (Source code, Secure element, Airgap, etc.).",
            block_full_title: "Verifiable Code",
            block_full_desc: "The source code of this tool is public. In accordance with Bitcoin philosophy ('Don't Trust, Verify'), you can audit it freely.",
            
            footer_github: "Source Code (GitHub)",

            // WALLETS
            desc_coldcard_q1: "Ultimate AirGap Station. Full QWERTY keyboard.",
            desc_trezor_safe7: "2025 Standard. Haptic Touch & Transparent Chip.",
            desc_ledger_flex: "Secure E-Ink screen. Perfect readability.",
            desc_ledger_nanox: "Discreet USB key format. Proven Bluetooth standard.",
            desc_bitkey: "Absolute simplicity. Assisted multisig.",
            desc_trezor_safe5: "The 100% Open Source tactile experience.",
            desc_bitbox02: "Discreet, Swiss, frighteningly efficient.",
            desc_jade: "AirGap security accessible via QR Code.",
            desc_keystone3: "100% AirGap Smartphone experience.",
            desc_passport: "Premium Bitcoin-only design.",
            desc_trezor_safe3: "Robust entry-level choice.",
            desc_seedsigner: "Build it yourself. Stateless.",
            desc_ledger_stax: "Giant curved E-Ink screen.",
            desc_tangem: "NFC card format, multi-card backup, EAL6+.",
            desc_ngrave_zero: "100% airgap QR, EAL7, self-destruct.",
            desc_ellipal_titan2: "Total Airgap QR, 4\" screen.",
            desc_cypherock_x1: "Shamir split on 5 NFC cards, No Seed.",
            desc_ledger_nanogen5: "The Nano S heir. E-Ink touchscreen.",
            desc_bitbox02_nova: "Evolution with tempered glass and Bluetooth.",
            desc_jade_plus: "Premium Version: larger IPS screen.",
            desc_passport_prime: "The 'Blackberry' of Bitcoin goes touch.",
            desc_onekey_pro: "4 Secure Elements & Biometrics.",
            desc_tangem_ring: "Crypto payment/access ring.",

            // METALS (Note: Fahrenheit added here too)
            mat_cryptotag_zeus: "Titanium Grade 2",
            
            mat_coinkite_seedplate: "Stainless Steel 316L",
            
            mat_hodlinox: "Stainless Steel 304",
            
            mat_blockplate: "Stainless Steel 304",
            
            mat_coinplate: "Stainless Steel 304",
            
            mat_trezor_keep_triple: "Steel 304",
            
            mat_cryptotag_thor: "Titanium Grade 2",
            
            mat_ngrave_graphene: "Stainless Steel (Embossed)",
            
            mat_billfodl: "Marine Grade 316 Steel",
            
            mat_cryptosteel_capsule: "Stainless Steel 304",
            
            mat_safepal_cypher: "Stainless Steel 304",
            
            mat_keystone_tablet: "Stainless Steel 304",
            
            mat_safeseed_moly: "Molybdenum",
            
            mat_secux_xseed_pro: "Stainless Steel 304",
            
            mat_cryptosteel_seed12: "Stainless Steel 304",
            
            mat_stampseed_kit: "Aerospace Titanium",

            mat_imkey_heirbox_s1: "Stainless Steel 304",
            
            mat_ellipal_seed_phrase_steel: "Stainless Steel 316",
            
            mat_bitbox_steelwallet: "Stainless Steel 304",
            
            mat_tinyseed: "Pure Titanium",
            
            mat_coldti: "Titanium",

            don_title: "Support the project",
            don_text: "If this tool saved you time, you can support the code, maintenance, and future updates.",
            don_copied: "Copied!",
            don_funny: "(I know there's a 99% chance you won't, but for the 1% legends out there: thank you! ⚡️)",
            don_copy_ln: "Copy Lightning ⚡️",
            don_copy_btc: "Copy Bitcoin ₿",
            don_action_aff: "Or use the links above for your gear: it funds the tool at no extra cost.",

        }
    },
    
    // BASE DE DONNÉES PRODUITS
    WALLETS: [
        { 
            id: 'coldcard_q1', name: 'Coldcard Q1', 
            features: ['airgap', 'keyboard', 'stealth', 'btc_only', 'dice', 'opensource', 'secure_element', 'nfc', 'tor', 'qr', 'usb_c'], 
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 199,
            desc: "Station AirGap ultime. Clavier QWERTY complet."
        },
        { 
            id: 'trezor_safe7', name: 'Trezor Safe 7', 
            features: ['opensource', 'tactile', 'shamir', 'ble', 'btc_only_opt', 'secure_element', 'tor', 'nfc', 'dice', 'usb_c'], 
            screen: 'large', skill: 'beginner', btc_only: true, price: 219,
            desc: "Standard 2025. Haptic Touch & Puce Transparente."
        },
        { 
            id: 'ledger_flex', name: 'Ledger Flex', 
            features: ['ble', 'large_screen', 'eink', 'secure_element', 'nfc', 'tactile', 'recover_ready', 'usb_c'], 
            screen: 'large', skill: 'beginner', btc_only: false, price: 249,
            desc: "Écran E-Ink sécurisé. Lisibilité parfaite."
        },
        { 
            id: 'ledger_nanox', name: 'Ledger Nano X', 
            features: ['ble', 'secure_element', 'stealth', 'recover_ready', 'usb_c'], 
            screen: 'small', skill: 'beginner', btc_only: false, price: 149,
            desc: "Format clé USB discret. Standard Bluetooth éprouvé."
        },
        { 
            id: 'bitkey', name: 'Bitkey', 
            features: ['ble', 'nfc', 'simple', 'multisig_assist', 'secure_element', 'btc_only', 'fingerprint', 'usb_c'], 
            screen: 'none', skill: 'beginner', btc_only: true, price: 150,
            desc: "Simplicité absolue. Multisig assisté."
        },
        { 
            id: 'trezor_safe5', name: 'Trezor Safe 5', 
            features: ['opensource', 'large_screen', 'tactile', 'shamir', 'dice', 'btc_only_opt', 'secure_element', 'tor', 'nfc', 'usb_c'], 
            screen: 'large', skill: 'beginner', btc_only: true, price: 169,
            desc: "L'expérience tactile 100% Open Source."
        },
        { 
            id: 'bitbox02', name: 'BitBox02 (BTC-Only)', 
            features: ['opensource', 'usb_c', 'stealth', 'btc_only', 'tor', 'dice', 'secure_element', 'tactile'], 
            screen: 'mid', skill: 'beginner', btc_only: true, price: 139,
            desc: "Discrète, Suisse, redoutable d'efficacité."
        },
        { 
            id: 'jade', name: 'Blockstream Jade', 
            features: ['airgap', 'camera', 'btc_only', 'opensource', 'tor', 'qr', 'ble', 'virtual_se', 'usb_c'], 
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 69,
            desc: "Sécurité AirGap accessible via QR Code."
        },
        { 
            id: 'keystone3', name: 'Keystone 3 Pro', 
            features: ['airgap', 'large_screen', 'fingerprint', 'shamir', 'opensource', 'secure_element', 'camera', 'qr', 'tactile', 'dice', 'usb_c'], 
            screen: 'large', skill: 'beginner', btc_only: false, price: 129,
            desc: "Expérience Smartphone 100% AirGap."
        },
        { 
            id: 'passport', name: 'Foundation Passport', 
            features: ['airgap', 'design', 'btc_only', 'dice', 'opensource', 'secure_element', 'camera', 'qr', 'usb_c'], 
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 199,
            desc: "Design Premium Bitcoin-only."
        },
        { 
            id: 'trezor_safe3', name: 'Trezor Safe 3', 
            features: ['opensource', 'secure_element', 'shamir', 'btc_only_opt', 'tor', 'usb_c'], 
            screen: 'small', skill: 'beginner', btc_only: true, price: 79,
            desc: "Entrée de gamme robuste."
        },
        { 
            id: 'seedsigner', name: 'SeedSigner (DIY)', 
            features: ['airgap', 'stateless', 'btc_only', 'dice', 'opensource', 'camera', 'qr'], 
            screen: 'mid', skill: 'expert', btc_only: true, price: 50,
            desc: "À construire soi-même. Stateless."
        },
        { 
            id: 'ledger_stax', name: 'Ledger Stax', 
            features: ['ble', 'huge_screen', 'eink', 'secure_element', 'wireless', 'nfc', 'tactile', 'recover_ready', 'usb_c'], 
            screen: 'huge', skill: 'beginner', btc_only: false, price: 399,
            desc: "Écran incurvé géant."
        },
        { 
            id: "tangem", name: "Tangem Wallet (card/ring)", 
            features: ["secure_element", "nfc", "no_seed_option", "multicard_backup", "waterproof", "no_screen"], 
            screen: "none", skill: "beginner", btc_only: false, price: 60, 
            desc: "Format carte NFC, backup multi-cartes, EAL6+."
        },
        { 
            id: "ngrave_zero", name: "NGRAVE Zero", 
            features: ["airgap", "qr", "secure_element_eal7", "tactile", "fingerprint", "camera", "usb_c"], 
            screen: "large", skill: "advanced", btc_only: false, price: 398, 
            desc: "100% airgap QR, EAL7, auto-destruction."
        },
        { 
            id: "ellipal_titan2", name: "Ellipal Titan 2.0", 
            features: ["airgap", "qr", "secure_element", "large_screen", "tactile", "camera", "usb_c"], 
            screen: "large", skill: "intermediate", btc_only: false, price: 199, 
            desc: "Airgap total QR, écran 4\"."
        },
        { 
            id: "cypherock_x1", name: "Cypherock X1", 
            features: ["shamir", "opensource", "no_seed_single", "multisig_assist", "usb_c", "nfc"], 
            screen: "vault", skill: "intermediate", btc_only: false, price: 249, 
            desc: "Shamir split sur 5 cartes NFC, aucun point de défaillance unique."
        },
        {
            id: 'ledger_nanogen5', name: 'Ledger Nano Gen5',
            features: ['eink', 'tactile', 'ble', 'nfc', 'secure_element', 'recover_ready', 'usb_c'],
            screen: 'large', skill: 'beginner', btc_only: false, price: 179,
            desc: "L'héritier du Nano S. Écran tactile E-Ink monochrome & NFC."
        },
        {
            id: 'bitbox02_nova', name: 'BitBox02 Nova',
            features: ['opensource', 'ble', 'glass_screen', 'secure_element', 'btc_only_opt', 'tactile', 'usb_c'],
            screen: 'mid', skill: 'beginner', btc_only: true, price: 159,
            desc: "Évolution avec verre trempé et Bluetooth (compatible iOS)."
        },
        {
            id: 'jade_plus', name: 'Blockstream Jade Plus',
            features: ['airgap', 'camera', 'btc_only', 'opensource', 'qr', 'virtual_se', 'tor', 'dice', 'ble', 'usb_c'], 
            screen: 'large', skill: 'intermediate', btc_only: true, price: 149,
            desc: "Version Premium : écran IPS plus grand et meilleure caméra."
        },
        {
            id: 'passport_prime', name: 'Foundation Passport Prime',
            features: ['airgap', 'tactile', 'design', 'btc_only', 'opensource', 'secure_element', 'camera', 'qr', 'usb_c'],
            screen: 'large', skill: 'intermediate', btc_only: true, price: 299,
            desc: "Le 'Blackberry' du Bitcoin devient tactile. Finition luxe."
        },
        {
            id: 'onekey_pro', name: 'OneKey Pro',
            features: ['airgap', 'fingerprint', 'tactile', 'shamir', 'opensource', 'secure_element', 'qr', 'camera', 'usb_c'],
            screen: 'large', skill: 'intermediate', btc_only: false, price: 278,
            desc: "4 Éléments Sécurisés & Biométrie. Le challenger du Stax."
        },
        {
            id: 'tangem_ring', name: 'Tangem Ring',
            features: ['nfc', 'wearable', 'waterproof', 'secure_element', 'no_screen', 'no_seed_option', 'multicard_backup'],
            screen: 'none', skill: 'beginner', btc_only: false, price: 99,
            desc: "Bague de paiement/accès crypto. Céramique & Puce EAL6+."
        }
    ],
    // BASE DE DONNÉES METAL
    METALS: [        
    { 
        id: 'cryptotag_zeus', name: 'Cryptotag Zeus', 
        features: ['titanium', 'plate', 'punch', 'diy'],
        material: 'Titane Grade 2', resistance: 'A+ (>1660°C / 3020°F)', shamir: false, price: 129 
    },
    { 
        id: 'coinkite_seedplate', name: 'Coinkite SEEDPLATE', 
        features: ['steel_316', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 316L', resistance: 'A (~1450°C / 2642°F)', shamir: false, price: 39 
    },
    { 
        id: 'hodlinox', name: 'Hodlinox (Sound Bitcoin)', 
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'B (~1400°C / 2552°F)', shamir: false, price: 29 
    },
    { 
        id: 'blockplate', name: 'Blockplate', 
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'A (~1400°C / 2552°F)', shamir: false, price: 45 
    },
    { 
        id: 'coinplate', name: 'Coinplate Alpha', 
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'A (>1400°C / 2552°F)', shamir: false, price: 79 
    },
    { 
        id: 'trezor_keep_triple', name: 'Trezor Keep Metal (Triple)', 
        features: ['steel_304', 'capsule', 'punch', 'shamir', 'diy'],
        material: 'Acier 304', resistance: 'A (~1400°C / 2552°F)', shamir: true, price: 99 
    },
    { 
        id: 'cryptotag_thor', name: 'Cryptotag Thor (Kit Shamir)', 
        features: ['titanium', 'plate', 'punch', 'shamir', 'diy'],
        material: 'Titane Grade 2', resistance: 'A+ (>1660°C / 3020°F)', shamir: true, price: 199 
    },
    { 
        id: 'ngrave_graphene', name: 'NGRAVE Graphene', 
        features: ['steel_304', 'plate', 'punch', 'shamir'],
        material: 'Acier Inox (Embossage)', resistance: 'A+ (>1375°C / 2507°F)', shamir: true, price: 149 
    },
    { 
        id: "billfodl", name: "Billfodl", 
        features: ['steel_316', 'cassette', 'tiles'],
        material: "Acier Inox 316 Marine", resistance: "A (>1300°C / 2372°F)", shamir: false, price: 99 
    },
    { 
        id: "cryptosteel_capsule", name: "Cryptosteel Capsule Solo", 
        features: ['steel_304', 'capsule', 'tiles'],
        material: "Acier Inox 304", resistance: "A (1400°C / 2552°F)", shamir: false, price: 89 
    },
    { 
        id: "safepal_cypher", name: "SafePal Cypher", 
        features: ['steel_304', 'cassette', 'tiles'],
        material: "Acier Inox 304", resistance: "~1400°C / 2552°F", shamir: false, price: 49 
    },
    { 
        id: "keystone_tablet", name: "Keystone Tablet Plus", 
        features: ['steel_304', 'cassette', 'tiles'],
        material: "Acier Inox 304", resistance: "1455°C / 2651°F", shamir: false, price: 49 
    },
    { 
        id: 'safeseed_moly', name: 'Safe Seed Molybdenum', 
        features: ['molybdenum', 'plate', 'punch', 'diy'],
        material: 'Molybdène', resistance: 'S (>2620°C / 4750°F)', shamir: false, price: 89 
    },
    { 
        id: 'secux_xseed_pro', name: 'SecuX X-SEED PRO', 
        features: ['steel_304', 'cassette', 'tiles'], 
        material: 'Acier Inox 304 & Alu', resistance: 'A (1454°C / 2649°F)', shamir: false, price: 89 
    },
    { 
        id: 'cryptosteel_seed12', name: 'Cryptosteel Seed12', 
        features: ['steel_304', 'capsule', 'tiles', 'shamir'],
        material: 'Acier Inox 304', resistance: 'A (~1450°C / 2642°F)', shamir: true, price: 45 
    },
    {
        id: "stampseed_kit", name: "StampSeed Titanium Stamping Kit", 
        features: ['titanium', 'plate', 'punch', 'shamir', 'diy'],
        material: "Titane Aerospace Grade", resistance: "A+ (>1660°C / 3020°F)", shamir: true, price: 139 
    },
    {
        id: 'imkey_heirbox_s1', name: 'imKey HeirBOX S1',
        features: ['steel_304', 'capsule', 'tiles'],
        material: 'Acier Inox 304', resistance: 'A (1398°C / 2548°F)', shamir: false, price: 45
    },
    {
        id: 'ellipal_seed_phrase_steel', name: 'ELLIPALIP Seed Phrase Steel',
        features: ['steel_316', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 316', resistance: 'A+ (1454°C / 2649°F)', shamir: false, price: 49
    },
    {
        id: 'bitbox_steelwallet', name: 'BitBox Steelwallet',
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'A (~1400°C / 2552°F)', shamir: false, price: 65
    },
    {
        id: 'tinyseed', name: 'Tinyseed',
        features: ['titanium', 'plate', 'punch', 'diy', 'shamir'],
        material: 'Titane Pur', resistance: 'A+ (>1660°C / 3020°F)', shamir: true, price: 49
    },
    {
        id: 'coldti', name: 'ColdTi Titanium Plates',
        features: ['titanium', 'plate', 'punch', 'diy'],
        material: 'Titane', resistance: 'A+ (>1660°C / 3020°F)', shamir: false, price: 69
    }
    ]
};