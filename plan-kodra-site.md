# Plan de refonte complet — kodra.ca

## Contexte

Kodra Conseil est une entreprise québécoise (société en nom collectif) cofondée par Sébastien Bélisle, basée en Abitibi-Témiscamingue. L'entreprise offre deux services principaux :

1. **Facilitation et intelligence collective** — Accompagnement d'équipes dans la résolution de problèmes complexes (planification stratégique, Design Sprint, teambuilding, alignement, etc.)
2. **Formations en intelligence artificielle** — Formations pratiques pour aider les professionnels et les organisations à intégrer l'IA dans leur travail quotidien (plus de 1 000 personnes formées depuis 2024)

Le site actuel est hébergé sur Squarespace. Cette refonte concerne la structure, le contenu et le design de la page d'accueil et des pages intérieures.

---

## Identité de marque

### Ton et voix
- Professionnel mais accessible, jamais corporatif froid
- Langage direct, orienté résultats (pas de jargon académique)
- Tutoiement possible dans les accroches, vouvoiement dans les descriptions de services
- Esprit québécois authentique sans être familier
- Confiant sans arrogance — l'expertise se démontre, elle ne se proclame

### Palette de couleurs

**Couleurs principales :**

| Rôle | HEX | Utilisation |
|------|-----|-------------|
| Bleu foncé (fond) | `#0B1529` | Arrière-plan principal, navbar, footer |
| Bleu foncé clair | `#111D35` | Cartes, sections secondaires, blocs alternés |
| Orange (accent) | `#F97316` | Boutons, liens, accents, CTA, chiffres clés |
| Orange hover | `#EA580C` | État survol des boutons et liens |

**Couleurs utilitaires (classes Tailwind) :**

| Rôle | Classe Tailwind | HEX approximatif |
|------|----------------|-------------------|
| Texte principal (clair) | `text-white` | `#FFFFFF` |
| Texte secondaire | `text-gray-400` | `#9CA3AF` |
| Texte discret | `text-gray-500` | `#6B7280` |
| Texte très discret | `text-gray-600` | `#4B5563` |
| Bordures subtiles | `border-white/5` | blanc à 5% d'opacité |
| Bordures hover | `border-white/10` | blanc à 10% d'opacité |
| Fond sections claires | `bg-gray-50` | `#F9FAFB` |
| Fond cartes (clair) | `bg-white` | `#FFFFFF` |

**Les 4 couleurs essentielles : `#0B1529`, `#111D35`, `#F97316`, `#EA580C`**

### Typographie

- **Police unique** : **Inter** (Google Fonts), `font-sans`
- Poids utilisés : 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Intégration dans le `<head>` :
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```
- Taille minimale du corps de texte : 18px sur desktop

### Imagerie
- Conserver le style d'images abstraites/organiques actuelles (formes en mouvement, particules, réseaux) — elles représentent bien l'intelligence collective
- Ajouter des photos authentiques de l'équipe en action (ateliers, formations, facilitation)
- Éviter les photos stock génériques de gens en réunion

---

## Structure du site

### Navigation principale
```
Logo (gauche)                    Accueil | Services | À propos | Réflexions | Contact (droite)
```

### Pages du site
1. **Accueil** (page principale)
2. **Services** (page détaillée avec sous-sections)
3. **À propos** (équipe + philosophie)
4. **Réflexions** (blog — existante, à conserver)
5. **Contact** (formulaire + prise de rendez-vous)

---

## Page d'accueil — Structure détaillée

### Section 1 : Hero

**Layout** : Plein écran (100vh), image de fond sombre (forêt brumeuse actuelle ou similaire), contenu centré.

**Contenu** :
```
[Logo Kodra — version blanche]

Titre principal (H1) :
"Vos équipes ont les réponses. On les aide à les trouver."

Sous-titre :
"Facilitation stratégique et formations en IA pour les organisations
qui veulent résoudre leurs vrais problèmes — ensemble."

[Bouton CTA principal] : "Réserver un appel découverte"  →  lien vers page Contact ou Calendly
[Bouton CTA secondaire] : "Découvrir nos services"  →  ancre vers section services
```

**Design** : Fond principal `#0B1529`. Les deux boutons côte à côte. CTA principal = bouton plein orange (`#F97316`, hover `#EA580C`). CTA secondaire = bouton outline/ghost blanc (`border-white/10`).

---

### Section 2 : Preuve sociale — Bandeau chiffres clés

**Layout** : Bandeau horizontal, fond légèrement différent (gris foncé ou accent subtil). 3-4 chiffres en grand avec libellé court.

**Contenu** :
```
+1 000                    25 ans                     50+                        2 services
personnes formées         d'expérience               organisations              complémentaires
en IA depuis 2024         en gestion et leadership   accompagnées               facilitation + IA
```

**Design** : Chiffres en très grand (60-80px), police Inter bold, couleur orange accent (`#F97316`). Libellés en petit dessous, couleur `text-gray-400`. Fond de section en bleu foncé clair (`#111D35`). Animation au scroll : compteur progressif.

---

### Section 3 : Nos deux expertises

**Layout** : Deux colonnes égales (50/50), séparées visuellement. Chaque colonne est une "carte" cliquable qui mène vers la section correspondante de la page Services.

**Colonne gauche — Facilitation stratégique** :
```
[Icône ou image abstraite — réseau/connexions]

Titre (H2) : "Facilitation stratégique"
Sous-titre : "L'intelligence collective au service de vos décisions"

Texte court :
"Vos défis sont complexes. Les réponses sont rarement dans la tête
d'une seule personne. On crée les conditions pour que votre équipe
réfléchisse mieux, ensemble — et passe à l'action."

• Planification stratégique
• Alignement d'équipe
• Design Sprint
• Résolution de problèmes

[Lien] : "En savoir plus →"
```

**Colonne droite — Formations IA** :
```
[Icône ou image abstraite — particules/lumière]

Titre (H2) : "Formations en intelligence artificielle"
Sous-titre : "Travailler mieux. Se concentrer sur ce qui compte."

Texte court :
"L'IA ne remplace pas les humains — elle amplifie ce qu'ils font
de mieux. Nos formations pratiques permettent à vos équipes de
gagner du temps sur les tâches répétitives pour se concentrer
sur la réflexion, la créativité et les relations."

• Formations en entreprise (sur mesure)
• Ateliers pratiques
• Conférences
• Consultation stratégique IA

[Lien] : "En savoir plus →"
```

**Design** : Cartes sur fond bleu foncé clair (`#111D35`) avec bordure `border-white/5`. Les deux cartes doivent avoir un traitement visuel identique pour montrer qu'elles sont d'importance égale. Effet hover : `border-white/10`. Liens en orange (`#F97316`).

---

### Section 4 : Notre approche — Comprendre, Créer, Tester

**Layout** : 3 colonnes ou 3 blocs empilés avec icônes/numéros.

**Contenu réécrit (version concise)** :

```
Titre de section (H2) : "Une approche simple et éprouvée"

[01] Comprendre
On plonge dans votre réalité. On écoute vos équipes, on cartographie
vos enjeux et on identifie ce qui bloque vraiment — avant de chercher
des solutions.

[02] Créer
On anime des ateliers structurés où votre équipe génère et développe
des solutions concrètes. Pas de PowerPoint théorique : du travail
collaboratif intense et productif.

[03] Tester
On valide les solutions avec les personnes concernées avant de tout
déployer. On ajuste, on raffine, on s'assure que ça tient la route
dans le vrai monde.
```

**Design** : Numéros en très grand et semi-transparent en arrière-plan (orange `#F97316` à 10-15% d'opacité). Titres en `font-semibold` blanc. Textes courts (3 lignes max chacun) en `text-gray-400`.

---

### Section 5 : Témoignages clients

**Layout** : Carrousel ou grille de 2-3 témoignages.

**Contenu** (à remplir avec de vrais témoignages — voici le format) :
```
Titre de section (H2) : "Ce qu'ils en disent"

"[Citation du client — 2-3 phrases maximum sur l'impact concret
de l'accompagnement ou de la formation.]"

— Prénom Nom, Titre, Organisation

[Répéter x3]
```

**Note pour Sébastien** : Collecter 3-5 témoignages courts de clients récents. Idéalement un mix : un témoignage facilitation, un témoignage formation IA, un témoignage planification stratégique.

**Design** : Guillemets décoratifs en grand, couleur orange (`#F97316`). Photo du client si disponible (petit cercle). Fond en bleu foncé clair (`#111D35`) pour différencier la section.

---

### Section 6 : L'équipe (aperçu)

**Layout** : Photo + texte côte à côte.

**Contenu** :
```
Titre (H2) : "Qui sommes-nous"

[Photo de Sébastien — portrait professionnel mais humain, pas corporate]

Sébastien Bélisle
Co-fondateur, facilitateur et formateur

"Après 25 ans à diriger un organisme communautaire et 12 ans à
enseigner le leadership stratégique à l'université, j'ai co-fondé
Kodra pour aider les équipes à résoudre des problèmes complexes
en misant sur ce qu'elles ont de plus puissant : leur intelligence
collective. Depuis 2024, j'ai aussi formé plus de 1 000 personnes
à utiliser l'IA de manière concrète et responsable."

[Bouton] : "En savoir plus sur l'équipe →"  →  page À propos
```

**Design** : Photo en cercle ou avec un traitement visuel distinctif. Texte à la première personne pour créer de la proximité.

---

### Section 7 : Infolettre / Substack

**Layout** : Bandeau d'appel à l'action.

**Contenu** :
```
Titre (H2) : "Humains augmentés — l'infolettre"
Sous-titre : "Chaque semaine, des réflexions pratiques sur l'IA,
le leadership et l'intelligence collective."

[Bouton] : "S'abonner gratuitement"  →  lien vers kodraconseil.substack.com
```

**Design** : Fond bleu foncé clair (`#111D35`), bouton orange (`#F97316`). Simple et direct.

---

### Section 8 : Appel à l'action final

**Layout** : Bandeau pleine largeur, fond `#0B1529` avec bordure supérieure ou accent orange subtil.

**Contenu** :
```
Titre (H2) : "Prêt à passer à l'action ?"
Sous-titre : "Réservez un appel découverte gratuit de 30 minutes.
On discute de vos besoins, sans engagement."

[Bouton CTA] : "Planifier un appel"  →  Calendly ou formulaire de contact
[Lien secondaire] : "Ou écrivez-nous à seb@kodra.ca"
```

---

### Footer

**Layout** : 3-4 colonnes.

```
Colonne 1 : Logo Kodra + phrase courte
"Facilitation stratégique et formations en IA — Abitibi-Témiscamingue, Québec"

Colonne 2 : Navigation
- Accueil
- Services
- À propos
- Réflexions
- Contact

Colonne 3 : Contact
- seb@kodra.ca
- La Sarre, Québec, Canada
- Lien LinkedIn
- Lien Substack

Colonne 4 (optionnel) : Infolettre
- Champ d'inscription rapide ou lien vers Substack

Bas de page : © 2025 Kodra Conseil s.e.n.c. | Tous droits réservés
```

---

## Page Services — Structure détaillée

### Section 1 : En-tête

```
Titre (H1) : "Nos services"
Sous-titre : "Deux expertises complémentaires pour vous aider à travailler mieux."
```

### Section 2 : Facilitation stratégique

```
Titre (H2) : "Facilitation stratégique"
Introduction (2-3 phrases) :
"Les problèmes complexes ne se règlent pas en silo. On conçoit et anime
des ateliers sur mesure qui mobilisent l'intelligence de votre équipe
pour prendre de meilleures décisions et passer à l'action."
```

**Liste des services de facilitation** (chacun = bloc avec icône, titre, description courte, bénéfice client) :

```
Planification stratégique
Définissez une vision claire et des priorités concrètes
avec l'ensemble de vos parties prenantes.
Idéal pour : conseils d'administration, équipes de direction, OBNL

Alignement stratégique
Harmonisez vos priorités, clarifiez les rôles et renforcez
la collaboration au sein de votre équipe de gestion.
Idéal pour : équipes de direction, comités de gestion

Clarification de la vision commune
Élaborez une vision partagée qui guide la prise de décision
au quotidien.
Idéal pour : organisations en transition, fusions, nouveaux projets

Analyse de la situation
Identifiez vos défis prioritaires, mobilisez vos acteurs clés
et définissez un plan d'action concret.
Idéal pour : organisations qui sentent qu'elles tournent en rond

Teambuilding
Améliorez la communication et la cohésion de votre équipe
à travers des activités immersives et significatives.
Idéal pour : nouvelles équipes, équipes en difficulté

Résolution de problèmes
Générez des idées, testez des solutions et accélérez la prise
de décision avec des méthodes structurées.
Idéal pour : défis opérationnels ou stratégiques urgents

Design Sprint (5 jours)
Passez de l'idée au prototype testé par de vrais utilisateurs
en une semaine. Méthode développée chez Google Ventures.
Idéal pour : lancement de produit/service, innovation
```

### Section 3 : Formations en intelligence artificielle

```
Titre (H2) : "Formations en intelligence artificielle"
Introduction :
"L'IA change la façon dont on travaille. Nos formations pratiques
permettent à vos équipes de maîtriser les outils d'IA pour gagner
du temps, améliorer la qualité de leur travail et se concentrer
sur ce qui compte vraiment : les relations humaines."
```

**Formats de formation** :

```
Formations en entreprise (sur mesure)
Contenu adapté à votre secteur, vos outils et vos besoins
spécifiques. De l'initiation à l'utilisation avancée.
Durée : demi-journée à journée complète

Ateliers pratiques
Sessions interactives où les participants apprennent en faisant.
Hands-on, avec leurs propres cas concrets.
Durée : 2 à 4 heures

Conférences et présentations
Sensibilisation et inspiration pour vos événements, colloques
ou assemblées.
Durée : 45 à 90 minutes

Consultation stratégique IA
Accompagnement personnalisé pour intégrer l'IA dans vos processus.
Évaluation de maturité, plan d'implantation, accompagnement au changement.
Durée : sur mesure
```

**Thèmes couverts** (liste concise) :
```
- Introduction à l'IA générative (ChatGPT, Claude, etc.)
- L'art du prompt : communiquer efficacement avec l'IA
- IA et productivité : automatiser les tâches répétitives
- IA pour les gestionnaires : prise de décision augmentée
- IA et ressources humaines
- IA pour le secteur communautaire et les OBNL
- Enjeux éthiques et utilisation responsable de l'IA
```

### Section 4 : CTA

```
"Vous ne savez pas par où commencer ?"
"Réservez un appel découverte gratuit — on identifie ensemble
le meilleur point de départ pour votre organisation."

[Bouton] : "Planifier un appel"
```

---

## Page À propos — Structure détaillée

### Section 1 : En-tête
```
Titre (H1) : "L'intelligence collective, amplifiée."
Sous-titre : "Kodra est née d'une conviction : les meilleures
solutions émergent quand on réunit les bonnes personnes,
avec les bonnes méthodes et les bons outils."
```

### Section 2 : Notre philosophie
```
Titre (H2) : "Ce qu'on croit"

On croit que les équipes portent en elles la majorité des réponses
à leurs défis. Notre rôle n'est pas d'arriver avec des solutions
toutes faites, mais de créer les conditions pour que l'intelligence
collective s'exprime pleinement.

On croit aussi que l'intelligence artificielle est un amplificateur,
pas un remplaçant. Bien utilisée, elle libère du temps pour ce qui
ne peut pas être automatisé : la réflexion profonde, la créativité,
les relations humaines.

C'est cette double conviction — la puissance du collectif et le
potentiel de l'IA — qui est au cœur de tout ce qu'on fait chez Kodra.
```

### Section 3 : L'équipe

```
Sébastien Bélisle
Co-fondateur | Facilitateur | Formateur en IA

[Photo portrait]

Sébastien cumule 25 ans d'expérience comme directeur général d'un
organisme communautaire en Abitibi-Témiscamingue et 12 ans comme
chargé de cours en leadership stratégique au MBA exécutif de l'UQAT.

Passionné par l'intelligence collective et les approches systémiques,
il a accompagné des dizaines d'organisations dans leur planification
stratégique, leur gestion du changement et leur résolution de problèmes
complexes.

Depuis 2024, il a formé plus de 1 000 personnes à l'utilisation
pratique de l'IA en milieu de travail. Il publie chaque semaine
l'infolettre "Humains augmentés" sur Substack.

LinkedIn : [lien]
Substack : [lien]
```

```
[Ajouter les autres co-fondateurs/associés avec le même format]
```

### Section 4 : CTA
```
"Envie de collaborer ?"
[Bouton] : "Contactez-nous"
```

---

## Page Contact — Structure détaillée

### Contenu
```
Titre (H1) : "Parlons-en."
Sous-titre : "Un appel de 30 minutes, gratuit et sans engagement,
pour discuter de vos besoins."

[Intégration Calendly ou outil de prise de rendez-vous]

OU

Formulaire de contact :
- Nom
- Courriel
- Organisation
- Sujet (menu déroulant : Facilitation / Formation IA / Autre)
- Message
- [Bouton] : Envoyer

Informations de contact :
- seb@kodra.ca
- La Sarre, Québec, Canada
- LinkedIn
```

---

## Spécifications techniques pour Squarespace

### Template et personnalisation Squarespace
Utiliser Squarespace 7.1 avec un template minimaliste. Configurer les couleurs du site dans les paramètres de design :
- Fond de site : `#0B1529`
- Couleur d'accent : `#F97316`
- Texte principal : `#FFFFFF`

Si nécessaire, injecter du CSS personnalisé dans **Design > Custom CSS** pour affiner les couleurs et la typographie Inter. Ajouter la police Inter via l'injection de code dans **Settings > Advanced > Code Injection > Header**.

### Responsive
- Toutes les sections doivent être entièrement responsive
- Les colonnes 50/50 passent en empilé sur mobile
- Le hero reste lisible sur tous les formats
- Les boutons CTA doivent être facilement cliquables au pouce sur mobile

### Performance
- Optimiser toutes les images (WebP, compression)
- Lazy loading sur les images sous le fold
- Limiter les animations au scroll aux éléments essentiels

### SEO — Balises essentielles
```
Page d'accueil :
- Title : "Kodra Conseil | Facilitation stratégique et formations IA — Abitibi-Témiscamingue"
- Meta description : "Kodra accompagne les organisations en facilitation stratégique et formations en intelligence artificielle. Basé en Abitibi-Témiscamingue, Québec. Plus de 1 000 personnes formées."

Page Services :
- Title : "Services | Facilitation stratégique et formations IA — Kodra Conseil"
- Meta description : "Planification stratégique, Design Sprint, alignement d'équipe, formations IA en entreprise. Des services sur mesure pour les organisations qui veulent travailler mieux ensemble."

Page À propos :
- Title : "À propos | L'équipe Kodra Conseil"
- Meta description : "25 ans d'expérience en gestion et leadership. Plus de 1 000 personnes formées en IA. Découvrez l'équipe derrière Kodra Conseil."

Page Contact :
- Title : "Contact | Kodra Conseil"
- Meta description : "Contactez Kodra Conseil pour discuter de vos besoins en facilitation stratégique ou en formation IA. Appel découverte gratuit de 30 minutes."
```

### Intégrations
- Calendly (ou similaire) pour la prise de rendez-vous
- Substack pour l'infolettre (lien externe, pas d'iframe)
- LinkedIn (icône dans le footer et la page À propos)
- Google Analytics ou Squarespace Analytics

---

## Éléments de contenu à fournir par Sébastien

Avant l'implémentation, les éléments suivants doivent être préparés :

1. ☐ 3-5 témoignages clients (courts, avec nom + titre + organisation)
2. ☐ Logos des organisations accompagnées (avec leur accord)
3. ☐ Photo portrait professionnelle de qualité
4. ☐ Photos d'ateliers/formations en action (si disponibles)
5. ☐ Biographies des co-fondateurs/associés
6. ☐ Lien Calendly ou outil de prise de rendez-vous configuré
7. ☐ Valider les chiffres clés (1 000+ personnes, 25 ans, nombre d'organisations)
8. ☐ Liste finale des thèmes de formation IA offerts

---

## Résumé des priorités d'implémentation

| Priorité | Action | Impact |
|----------|--------|--------|
| 1 | Réécrire le hero (accroche + CTA) | Premier contact — critique |
| 2 | Structurer les deux offres en sections égales | Clarté du positionnement |
| 3 | Ajouter le bandeau de chiffres clés | Crédibilité immédiate |
| 4 | Réécrire Comprendre/Créer/Tester (version courte) | Lisibilité |
| 5 | Créer la page À propos | Confiance et connexion humaine |
| 6 | Ajouter les témoignages | Preuve sociale |
| 7 | Refondre la page Contact avec prise de RDV | Conversion |
| 8 | Restructurer la page Services | Parcours client clair |
| 9 | Optimiser le footer | Professionnalisme |
| 10 | SEO (titres, meta, alt text) | Visibilité long terme |
