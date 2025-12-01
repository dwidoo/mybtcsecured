const KB = {
    // TEXTES & TRADUCTIONS
    LANG: {
        fr: {
            // SEO & Branding
            app_title_text: "MyBTCSecured | Architecte de Sécurité Bitcoin",
            app_brand_html: '<i class="fa-solid fa-shield-halved text-[#f7931a] mr-2"></i>MyBTC<span class="text-[#f7931a]">Secured</span>',
            
            // Loaders
            loading_1: "Analyse des vecteurs d'attaque...",
            loading_2: "Calcul de pertinence (Scoring)...",
            loading_3: "Finalisation du protocole de souveraineté...",

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
            q3: { text: "Quel appareil utiliserez-vous pour gérer vos transactions ?", info: "Détermine la connectique du matériel (USB-C, Lightning, Bluetooth...).", opt_ios: "iPhone (iOS)", opt_android: "Android", opt_desktop: "Ordinateur (Mac / Windows / Linux)" },
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
            
            status_online: "Connecté (Standard)",
            status_offline: "Hors-ligne (Recommandé)",

            legal_btn_start: "Accéder au simulateur",           
            
            // --- HERO & HOME ---
            hero_title_1: "Sécurisez vos bitcoins.",
            hero_title_2: "Sans faille.",
            hero_desc: "Définissez votre <strong>dispositif de sécurité personnalisé</strong> en une minute et en totale confidentalité. Obtenez une recommandation complète (Matériel + Sauvegarde + Procédures) adaptée à votre situation réelle.",
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
        material: 'Titane Grade 2', resistance: 'A+ (>1660°C)', shamir: false, price: 129 
    },
    { 
        id: 'coinkite_seedplate', name: 'Coinkite SEEDPLATE', 
        features: ['steel_316', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 316L', resistance: 'A (~1450°C)', shamir: false, price: 39 
    },
    { 
        id: 'hodlinox', name: 'Hodlinox (Sound Bitcoin)', 
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'B (~1400°C)', shamir: false, price: 29 
    },
    { 
        id: 'blockplate', name: 'Blockplate', 
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'A (~1400°C)', shamir: false, price: 45 
    },
    { 
        id: 'coinplate', name: 'Coinplate Alpha', 
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'A (>1400°C)', shamir: false, price: 79 
    },
    { 
        id: 'trezor_keep_triple', name: 'Trezor Keep Metal (Triple)', 
        features: ['steel_304', 'capsule', 'punch', 'shamir', 'diy'],
        material: 'Acier 304', resistance: 'A', shamir: true, price: 99 
    },
    { 
        id: 'cryptotag_thor', name: 'Cryptotag Thor (Kit Shamir)', 
        features: ['titanium', 'plate', 'punch', 'shamir', 'diy'],
        material: 'Titane Grade 2', resistance: 'A+ (>1660°C)', shamir: true, price: 199 
    },
    { 
        id: 'ngrave_graphene', name: 'NGRAVE Graphene', 
        features: ['steel_304', 'plate', 'punch', 'shamir'],
        material: 'Acier Inox (Embossage)', resistance: 'A+ (>1375°C)', shamir: true, price: 149 
    },
    { 
        id: "billfodl", name: "Billfodl", 
        features: ['steel_316', 'cassette', 'tiles'],
        material: "Acier Inox 316 Marine", resistance: "A (>1300°C réel)", shamir: false, price: 99 
    },
    { 
        id: "cryptosteel_capsule", name: "Cryptosteel Capsule Solo", 
        features: ['steel_304', 'capsule', 'tiles'],
        material: "Acier Inox 304", resistance: "1400°C", shamir: false, price: 89 
    },
    { 
        id: "safepal_cypher", name: "SafePal Cypher", 
        features: ['steel_304', 'cassette', 'tiles'],
        material: "Acier Inox 304", resistance: "~1400°C", shamir: false, price: 49 
    },
    { 
        id: "keystone_tablet", name: "Keystone Tablet Plus", 
        features: ['steel_304', 'cassette', 'tiles'],
        material: "Acier Inox 304", resistance: "1455°C", shamir: false, price: 49 
    },
    { 
        id: 'safeseed_moly', name: 'Safe Seed Molybdenum', 
        features: ['molybdenum', 'plate', 'punch', 'diy'],
        material: 'Molybdène', resistance: 'S (>2620°C)', shamir: false, price: 89 
    },
    { 
        id: 'secux_xseed_pro', name: 'SecuX X-SEED PRO', 
        features: ['steel_304', 'cassette', 'tiles'], 
        material: 'Acier Inox 304 & Alu', resistance: 'A (1454°C)', shamir: false, price: 89 
    },
    { 
        id: 'cryptosteel_seed12', name: 'Cryptosteel Seed12', 
        features: ['steel_304', 'capsule', 'tiles', 'shamir'],
        material: 'Acier Inox 304', resistance: 'A (~1450°C)', shamir: true, price: 45 
    },
    {
        id: "stampseed_kit", name: "StampSeed Titanium Stamping Kit", 
        features: ['titanium', 'plate', 'punch', 'shamir', 'diy'],
        material: "Titane Aerospace Grade", resistance: "A+ (>1660°C)", shamir: true, price: 139 
    },
    {
        id: 'imkey_heirbox_s1', name: 'imKey HeirBOX S1',
        features: ['steel_304', 'capsule', 'tiles'],
        material: 'Acier Inox 304', resistance: 'A (1398°C)', shamir: false, price: 45
    },
    {
        id: 'ellipal_seed_phrase_steel', name: 'ELLIPALIP Seed Phrase Steel',
        features: ['steel_316', 'plate', 'punch', 'diy'], // ou 'cassette', 'tiles' si modèle clamshell
        material: 'Acier Inox 316', resistance: 'A+ (1454°C)', shamir: false, price: 49
    },
    {
        id: 'bitbox_steelwallet', name: 'BitBox Steelwallet',
        features: ['steel_304', 'plate', 'punch', 'diy'],
        material: 'Acier Inox 304', resistance: 'A (~1400°C)', shamir: false, price: 65
    },
    {
        id: 'tinyseed', name: 'Tinyseed',
        features: ['titanium', 'plate', 'punch', 'diy', 'shamir'],
        material: 'Titane Pur', resistance: 'A+ (>1660°C)', shamir: true, price: 49
    },
    {
        id: 'coldti', name: 'ColdTi Titanium Plates',
        features: ['titanium', 'plate', 'punch', 'diy'],
        material: 'Titane', resistance: 'A+ (>1660°C)', shamir: false, price: 69
    }
]
};