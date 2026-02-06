import Image from "next/image";

export default function GuidePage() {
  return (
    <div className="guide-root">
      <style>{`
        @media print {
          body { margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .guide-root { font-size: 11pt; line-height: 1.5; }
          .page-break { break-before: page; }
          .no-print { display: none !important; }
          .cover-page { height: 100vh; display: flex; flex-direction: column; justify-content: center; }
          h1, h2, h3 { break-after: avoid; }
          .exercise-box, .tip-box { break-inside: avoid; }
          .page-number { display: block; }
        }
        @media screen {
          .guide-root { max-width: 816px; margin: 0 auto; background: white; }
          .page-break { border-top: 2px dashed #e5e7eb; margin: 3rem 0; padding-top: 3rem; }
          .page-number { display: none; }
        }
      `}</style>

      {/* ===== COVER PAGE ===== */}
      <section className="cover-page bg-blue-dark text-white min-h-screen flex flex-col justify-center items-center px-12 py-16 text-center">
        <div className="mb-12">
          <Image
            src="/logo.png"
            alt="Kodra Conseil"
            width={180}
            height={60}
            className="mx-auto"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase mb-6">
            Guide pratique
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Mobiliser l&apos;intelligence collective de votre équipe
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            5 leviers pour résoudre des problèmes complexes avec votre équipe
          </p>
          <div className="w-24 h-1 bg-orange-brand mx-auto mb-12" />
          <p className="text-gray-400 text-sm">
            Seb Bélisle — Kodra Conseil
          </p>
          <p className="text-gray-500 text-xs mt-2">
            kodra.ca
          </p>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="page-break px-12 py-16">
        <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase mb-4">
          Introduction
        </p>
        <h2 className="text-3xl font-bold text-blue-dark tracking-tight mb-8">
          Pourquoi les équipes intelligentes prennent des décisions médiocres
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Vous avez probablement déjà vécu cette situation : une salle remplie de
          gens brillants, une discussion qui tourne en rond, et une décision
          finale qui ne satisfait personne. Ou pire, pas de décision du tout.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Ce n&apos;est pas un problème d&apos;intelligence. C&apos;est un problème de
          <strong className="text-blue-dark"> méthode</strong>.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Après 25 ans à diriger des équipes, faciliter des ateliers stratégiques
          et accompagner des dirigeants, j&apos;ai identifié un constat récurrent :
          les organisations possèdent déjà les réponses à leurs problèmes les
          plus complexes. Elles ne savent simplement pas comment les faire
          émerger.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          L&apos;intelligence collective, ce n&apos;est pas un buzzword. C&apos;est la
          capacité structurée d&apos;un groupe à produire des solutions supérieures
          à ce que chaque individu pourrait générer seul. Mais elle ne se
          manifeste pas spontanément. Elle se <em>facilite</em>.
        </p>

        <div className="bg-gray-50 border-l-4 border-orange-brand rounded-r-lg p-6 my-8">
          <p className="text-blue-dark font-semibold mb-2">
            Ce que vous trouverez dans ce guide
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            5 leviers concrets, testés sur le terrain, pour transformer vos
            réunions en moteurs de décision et d&apos;innovation. Chaque levier
            inclut un exercice pratique que vous pouvez appliquer dès votre
            prochaine rencontre d&apos;équipe.
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          Ces leviers sont tirés de mon expérience comme directeur général,
          de ma certification avec AJ&Smart (la firme derrière le Design Sprint
          et le Lightning Decision Jam), de mon eMBA à l&apos;UQAT, et de centaines
          d&apos;ateliers facilités avec des équipes de toutes tailles.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Que vous soyez dirigeant, gestionnaire ou responsable d&apos;équipe, ce
          guide vous donnera des outils immédiatement actionnables.
        </p>
      </section>

      {/* ===== LEVIER 1 ===== */}
      <section className="page-break px-12 py-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-brand text-white text-2xl font-bold flex items-center justify-center">
            1
          </span>
          <div>
            <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase">
              Levier 1
            </p>
            <h2 className="text-3xl font-bold text-blue-dark tracking-tight">
              Créer le bon cadre
            </h2>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4">
          La sécurité psychologique : le fondement invisible
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Le projet Aristote de Google a étudié 180 équipes pour identifier ce
          qui distingue les équipes performantes. Le facteur numéro un ?
          La <strong className="text-blue-dark">sécurité psychologique</strong> —
          la conviction partagée que l&apos;on peut prendre des risques sans être
          jugé ou puni.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Sans sécurité psychologique, les meilleures idées restent dans la tête
          des gens. Les opinions divergentes sont étouffées. Le groupe converge
          vers la solution la plus sûre, pas la meilleure.
        </p>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          Atelier vs réunion : une différence fondamentale
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Une réunion classique suit un format libre qui favorise les
          personnalités dominantes. Un atelier structuré crée un cadre où chaque
          voix a le même poids.
        </p>

        <div className="grid grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="font-semibold text-blue-dark mb-3">Réunion classique</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>→ Discussion ouverte</li>
              <li>→ Les extravertis dominent</li>
              <li>→ Pas de timeboxing</li>
              <li>→ Décisions floues</li>
              <li>→ « On en reparle »</li>
            </ul>
          </div>
          <div className="bg-blue-dark rounded-xl p-6">
            <p className="font-semibold text-orange-brand mb-3">Atelier structuré</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>→ Travail individuel d&apos;abord</li>
              <li>→ Chaque voix compte</li>
              <li>→ Chrono strict</li>
              <li>→ Décisions claires</li>
              <li>→ Actions concrètes</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          La clé est de commencer chaque atelier par un moment qui installe la
          confiance et la présence. C&apos;est le rôle du <em>check-in</em>.
        </p>

        <div className="exercise-box border-2 border-orange-brand/30 bg-orange-brand/5 rounded-xl p-6 my-8">
          <p className="text-orange-brand font-bold text-sm uppercase tracking-widest mb-3">
            Exercice pratique
          </p>
          <h4 className="text-lg font-semibold text-blue-dark mb-3">
            Le check-in de 2 minutes
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Au début de votre prochaine rencontre d&apos;équipe, posez cette
            question à tour de rôle (30 secondes max par personne) :
          </p>
          <div className="bg-white rounded-lg p-4 border border-orange-brand/20 mb-4">
            <p className="text-blue-dark font-medium text-center italic">
              « En un mot, comment arrivez-vous aujourd&apos;hui ? »
            </p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Règles :</strong> Pas de commentaire, pas de jugement. On
            écoute, on hoche la tête, on passe au suivant. Ce simple rituel
            change immédiatement l&apos;énergie de la salle.
          </p>
        </div>
      </section>

      {/* ===== LEVIER 2 ===== */}
      <section className="page-break px-12 py-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-brand text-white text-2xl font-bold flex items-center justify-center">
            2
          </span>
          <div>
            <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase">
              Levier 2
            </p>
            <h2 className="text-3xl font-bold text-blue-dark tracking-tight">
              Poser les bonnes questions
            </h2>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4">
          Questions divergentes vs convergentes
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          La plupart des équipes sautent directement à la solution. « Qu&apos;est-ce
          qu&apos;on fait ? » est une question convergente — elle pousse vers une
          réponse unique. Mais avant de converger, il faut d&apos;abord
          <strong className="text-blue-dark"> diverger</strong> : explorer le
          problème sous tous ses angles.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Les meilleures sessions de résolution de problèmes alternent entre ces
          deux modes. D&apos;abord, on ouvre le champ des possibles. Ensuite, on
          filtre et on priorise.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-blue-dark mb-3">Diverger</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>→ Explorer toutes les pistes</li>
                <li>→ Quantité avant qualité</li>
                <li>→ Pas de jugement</li>
                <li>→ Bâtir sur les idées des autres</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-blue-dark mb-3">Converger</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>→ Regrouper et catégoriser</li>
                <li>→ Critères de sélection clairs</li>
                <li>→ Vote structuré</li>
                <li>→ Décision explicite</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          La technique « How Might We » (HMW)
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Inspirée du Design Thinking et popularisée par AJ&Smart dans le
          Design Sprint, la formulation « How Might We » (Comment pourrions-nous)
          transforme un problème en opportunité d&apos;innovation.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          La formule est simple :
        </p>
        <div className="bg-blue-dark rounded-xl p-6 my-6 text-center">
          <p className="text-white text-lg font-medium">
            « Comment pourrions-nous{" "}
            <span className="text-orange-brand">[verbe d&apos;action]</span>{" "}
            pour{" "}
            <span className="text-orange-brand">[bénéfice recherché]</span> ? »
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Cette formulation est puissante parce qu&apos;elle :
        </p>
        <ul className="text-gray-600 leading-relaxed space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-blue-dark">« Comment »</strong> — implique
            qu&apos;une solution existe
          </li>
          <li>
            <strong className="text-blue-dark">« Pourrions-nous »</strong> —
            invite la collaboration sans pression
          </li>
          <li>
            <strong className="text-blue-dark">« Nous »</strong> — crée un
            sentiment d&apos;appropriation collective
          </li>
        </ul>

        <div className="exercise-box border-2 border-orange-brand/30 bg-orange-brand/5 rounded-xl p-6 my-8">
          <p className="text-orange-brand font-bold text-sm uppercase tracking-widest mb-3">
            Exercice pratique
          </p>
          <h4 className="text-lg font-semibold text-blue-dark mb-3">
            Transformer un problème en question HMW
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Prenez un irritant actuel de votre équipe et reformulez-le :
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-400 text-xs uppercase font-semibold mb-1">
                Problème
              </p>
              <p className="text-gray-600 text-sm">
                « Nos réunions n&apos;aboutissent jamais à des décisions concrètes. »
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-orange-brand text-2xl">↓</span>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-brand/30">
              <p className="text-orange-brand text-xs uppercase font-semibold mb-1">
                Question HMW
              </p>
              <p className="text-blue-dark text-sm font-medium">
                « Comment pourrions-nous restructurer nos réunions pour que
                chacune se termine avec au moins une décision claire ? »
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Astuce :</strong> Générez 5 à 8 questions HMW différentes
            pour le même problème. La diversité des angles révèle des solutions
            auxquelles personne n&apos;avait pensé.
          </p>
        </div>
      </section>

      {/* ===== LEVIER 3 ===== */}
      <section className="page-break px-12 py-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-brand text-white text-2xl font-bold flex items-center justify-center">
            3
          </span>
          <div>
            <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase">
              Levier 3
            </p>
            <h2 className="text-3xl font-bold text-blue-dark tracking-tight">
              Structurer la prise de décision
            </h2>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4">
          Pourquoi le consensus tue l&apos;innovation
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Le consensus est le réflexe naturel des équipes qui veulent bien faire.
          Tout le monde doit être d&apos;accord avant d&apos;avancer. Le problème ? Le
          consensus produit des solutions diluées — le plus petit dénominateur
          commun.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Les équipes les plus performantes utilisent plutôt des mécanismes de
          décision explicites qui séparent la génération d&apos;idées de la
          sélection.
        </p>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          Le vote par points (dot voting)
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chaque participant reçoit un nombre limité de votes (généralement 3)
          qu&apos;il place sur les idées qui lui semblent les plus prometteuses. C&apos;est
          rapide, démocratique, et visuel.
        </p>
        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <p className="font-semibold text-blue-dark mb-3">Comment l&apos;appliquer</p>
          <ol className="text-gray-600 text-sm space-y-2 list-decimal ml-4">
            <li>Affichez toutes les idées sur un mur ou un tableau virtuel</li>
            <li>Donnez 3 votes (gommettes ou points) à chaque participant</li>
            <li>
              Chacun vote en silence, en même temps (pas de discussion pendant le
              vote)
            </li>
            <li>Comptez les votes — les top 3 idées passent à l&apos;étape suivante</li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          La méthode du décideur
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Dans un Design Sprint, Jake Knapp (Google Ventures) propose un rôle
          clair : le <strong className="text-blue-dark">Décideur</strong>. Cette
          personne a le dernier mot après avoir entendu toutes les perspectives.
          Elle tranche, et l&apos;équipe avance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Ce n&apos;est pas de l&apos;autocratie — c&apos;est de la clarté. Le décideur écoute
          activement, puis assume la responsabilité du choix. L&apos;équipe sait que
          sa voix a été entendue, même si sa proposition n&apos;a pas été retenue.
        </p>

        <div className="tip-box bg-blue-dark rounded-xl p-6 my-8">
          <p className="text-orange-brand font-bold text-sm uppercase tracking-widest mb-3">
            Framework : Lightning Decision Jam
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Le Lightning Decision Jam (LDJ) d&apos;AJ&Smart combine ces techniques
            en un atelier de 45 minutes :
          </p>
          <ol className="text-gray-300 text-sm space-y-2 list-decimal ml-4">
            <li>
              <strong className="text-white">Identifier les problèmes</strong>{" "}
              — 7 min, travail individuel sur post-its
            </li>
            <li>
              <strong className="text-white">Prioriser</strong> — Dot voting
              sur les problèmes
            </li>
            <li>
              <strong className="text-white">Reformuler en HMW</strong> —
              Transformer le top problème en question
            </li>
            <li>
              <strong className="text-white">Générer des solutions</strong> —
              7 min, travail individuel
            </li>
            <li>
              <strong className="text-white">Voter et décider</strong> — Dot
              voting + décideur
            </li>
            <li>
              <strong className="text-white">Planifier l&apos;action</strong> —
              Transformer en tâches concrètes
            </li>
          </ol>
        </div>

        <div className="exercise-box border-2 border-orange-brand/30 bg-orange-brand/5 rounded-xl p-6 my-8">
          <p className="text-orange-brand font-bold text-sm uppercase tracking-widest mb-3">
            Exercice pratique
          </p>
          <h4 className="text-lg font-semibold text-blue-dark mb-3">
            Mini Lightning Decision Jam
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Lors de votre prochaine réunion d&apos;équipe, essayez cette version
            condensée en 15 minutes :
          </p>
          <ol className="text-gray-600 text-sm space-y-1 list-decimal ml-4">
            <li>3 min — Chacun écrit ses irritants sur des post-its (1 par post-it)</li>
            <li>2 min — Affichez tous les post-its</li>
            <li>2 min — Chacun vote (3 points) sur les irritants prioritaires</li>
            <li>3 min — Reformulez le top irritant en question HMW</li>
            <li>5 min — Chacun propose une solution en silence, puis vote</li>
          </ol>
        </div>
      </section>

      {/* ===== LEVIER 4 ===== */}
      <section className="page-break px-12 py-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-brand text-white text-2xl font-bold flex items-center justify-center">
            4
          </span>
          <div>
            <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase">
              Levier 4
            </p>
            <h2 className="text-3xl font-bold text-blue-dark tracking-tight">
              Intégrer l&apos;IA comme coéquipier
            </h2>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          L&apos;intelligence artificielle ne remplace pas l&apos;intelligence collective
          — elle l&apos;amplifie. Utilisée correctement, l&apos;IA devient un
          coéquipier silencieux qui accélère chaque étape de vos ateliers.
        </p>

        <h3 className="text-xl font-semibold text-blue-dark mb-4">
          3 rôles de l&apos;IA en atelier
        </h3>

        <div className="space-y-4 my-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="font-semibold text-blue-dark mb-2">
              1. Accélérateur de brainstorming
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Demandez à l&apos;IA de générer 20 idées brutes à partir de votre
              question HMW. Utilisez ces idées comme tremplin — pas comme
              réponses finales. Votre équipe rebondira sur certaines, en
              combinera d&apos;autres, et cela débloquera des pistes qu&apos;elle
              n&apos;aurait pas explorées seule.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="font-semibold text-blue-dark mb-2">
              2. Synthétiseur de discussions
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Après une session de brainstorming, l&apos;IA peut regrouper les
              idées par thème, identifier les patterns, et produire un résumé
              structuré en quelques secondes. Ce travail de synthèse qui prenait
              30 minutes se fait maintenant en temps réel.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="font-semibold text-blue-dark mb-2">
              3. Avocat du diable
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Soumettez votre solution préférée à l&apos;IA et demandez-lui de la
              critiquer sans ménagement. Quelles sont les failles ? Qu&apos;est-ce
              qui pourrait mal tourner ? Ce regard externe et impartial
              renforce la robustesse de vos décisions.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          La règle d&apos;or : l&apos;IA propose, l&apos;humain dispose
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Le piège est de déléguer la décision à l&apos;IA. L&apos;intelligence collective
          tire sa force de l&apos;expérience terrain, de l&apos;intuition et du contexte
          que seule votre équipe possède. L&apos;IA ne comprend pas les dynamiques
          politiques de votre organisation ni les contraintes non dites. Utilisez-la
          comme un outil, pas comme un oracle.
        </p>

        <div className="exercise-box border-2 border-orange-brand/30 bg-orange-brand/5 rounded-xl p-6 my-8">
          <p className="text-orange-brand font-bold text-sm uppercase tracking-widest mb-3">
            Exercice pratique
          </p>
          <h4 className="text-lg font-semibold text-blue-dark mb-3">
            L&apos;IA comme sparring partner
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Avant votre prochaine réunion stratégique, essayez ce prompt :
          </p>
          <div className="bg-white rounded-lg p-4 border border-orange-brand/20 mb-4">
            <p className="text-blue-dark text-sm font-mono leading-relaxed">
              « Nous sommes une équipe de [contexte]. Notre défi principal est
              [problème]. Génère 15 questions provocantes que nous devrions nous
              poser pour challenger nos hypothèses sur ce sujet. »
            </p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Imprimez les questions et utilisez-les comme amorces de discussion
            en atelier. Vous serez surpris de voir à quel point elles
            déverrouillent des conversations que l&apos;équipe n&apos;osait pas avoir.
          </p>
        </div>
      </section>

      {/* ===== LEVIER 5 ===== */}
      <section className="page-break px-12 py-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-brand text-white text-2xl font-bold flex items-center justify-center">
            5
          </span>
          <div>
            <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase">
              Levier 5
            </p>
            <h2 className="text-3xl font-bold text-blue-dark tracking-tight">
              Passer de l&apos;atelier à l&apos;action
            </h2>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4">
          Le piège des post-its qui finissent au mur
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Vous connaissez le scénario : un atelier énergisant, des dizaines
          d&apos;idées brillantes, une énergie palpable dans la salle… puis plus
          rien. Les post-its jaunissent sur le mur. Les photos du tableau
          s&apos;enterrent dans Slack. Trois mois plus tard, personne ne se
          souvient des décisions prises.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          C&apos;est le talon d&apos;Achille de l&apos;intelligence collective : sans
          mécanisme de passage à l&apos;action, même le meilleur atelier reste
          un exercice académique.
        </p>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          Le sprint d&apos;exécution : qui fait quoi, pour quand
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Les 10 dernières minutes de chaque atelier sont les plus importantes.
          C&apos;est là que vous transformez les idées en engagements concrets :
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-brand text-white text-sm font-bold flex items-center justify-center mt-0.5">
                1
              </span>
              <div>
                <p className="font-semibold text-blue-dark">Qui</p>
                <p className="text-gray-600 text-sm">
                  Une seule personne responsable par action. Pas « l&apos;équipe ».
                  Un nom, un prénom.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-brand text-white text-sm font-bold flex items-center justify-center mt-0.5">
                2
              </span>
              <div>
                <p className="font-semibold text-blue-dark">Quoi</p>
                <p className="text-gray-600 text-sm">
                  Une action spécifique et vérifiable. Pas « améliorer le
                  processus », mais « rédiger le nouveau template de réunion
                  hebdomadaire ».
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-brand text-white text-sm font-bold flex items-center justify-center mt-0.5">
                3
              </span>
              <div>
                <p className="font-semibold text-blue-dark">Pour quand</p>
                <p className="text-gray-600 text-sm">
                  Une date précise. Idéalement dans les 7 jours — au-delà, la
                  motivation chute.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-dark mb-4 mt-8">
          Le suivi : maintenir le momentum
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Un atelier sans suivi est un événement. Un atelier avec suivi est un
          processus de transformation. Voici trois mécanismes simples :
        </p>
        <ul className="text-gray-600 leading-relaxed space-y-3 mb-6 ml-4">
          <li>
            <strong className="text-blue-dark">Le check-in de 5 min</strong> —
            En début de réunion suivante, faites le tour : « Où en est ton
            action ? » Pas de jugement, juste de la transparence.
          </li>
          <li>
            <strong className="text-blue-dark">Le tableau visible</strong> — Un
            Kanban partagé (Notion, Trello, tableau physique) où chaque action
            est visible de tous.
          </li>
          <li>
            <strong className="text-blue-dark">La célébration</strong> —
            Soulignez les actions complétées. La reconnaissance renforce le
            comportement.
          </li>
        </ul>

        <div className="exercise-box border-2 border-orange-brand/30 bg-orange-brand/5 rounded-xl p-6 my-8">
          <p className="text-orange-brand font-bold text-sm uppercase tracking-widest mb-3">
            Exercice pratique
          </p>
          <h4 className="text-lg font-semibold text-blue-dark mb-3">
            Le template de suivi post-atelier
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            À la fin de votre prochain atelier, remplissez ce tableau :
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-dark text-white">
                  <th className="text-left p-3 font-semibold">Action</th>
                  <th className="text-left p-3 font-semibold">Responsable</th>
                  <th className="text-left p-3 font-semibold">Échéance</th>
                  <th className="text-left p-3 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-3 text-gray-500 italic">Ex: Rédiger le nouveau template</td>
                  <td className="p-3 text-gray-500 italic">Marie</td>
                  <td className="p-3 text-gray-500 italic">Vendredi</td>
                  <td className="p-3 text-gray-500 italic">En cours</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 text-gray-400">...</td>
                  <td className="p-3 text-gray-400">...</td>
                  <td className="p-3 text-gray-400">...</td>
                  <td className="p-3 text-gray-400">...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            Envoyez ce tableau à toute l&apos;équipe dans l&apos;heure suivant l&apos;atelier.
            Le momentum se perd vite — agissez tant que l&apos;énergie est là.
          </p>
        </div>
      </section>

      {/* ===== CONCLUSION + CTA ===== */}
      <section className="page-break px-12 py-16">
        <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase mb-4">
          Conclusion
        </p>
        <h2 className="text-3xl font-bold text-blue-dark tracking-tight mb-8">
          Récapitulatif des 5 leviers
        </h2>

        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-brand text-white font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-blue-dark">Créer le bon cadre</p>
              <p className="text-gray-500 text-sm">
                Sécurité psychologique et structure d&apos;atelier
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-brand text-white font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-blue-dark">
                Poser les bonnes questions
              </p>
              <p className="text-gray-500 text-sm">
                Divergence, convergence et technique HMW
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-brand text-white font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-blue-dark">
                Structurer la prise de décision
              </p>
              <p className="text-gray-500 text-sm">
                Dot voting, décideur et Lightning Decision Jam
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-brand text-white font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <p className="font-semibold text-blue-dark">
                Intégrer l&apos;IA comme coéquipier
              </p>
              <p className="text-gray-500 text-sm">
                Brainstorming, synthèse et avocat du diable
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-brand text-white font-bold flex items-center justify-center">
              5
            </span>
            <div>
              <p className="font-semibold text-blue-dark">
                Passer de l&apos;atelier à l&apos;action
              </p>
              <p className="text-gray-500 text-sm">
                Sprint d&apos;exécution et mécanismes de suivi
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-dark rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à mobiliser l&apos;intelligence collective de votre équipe ?
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-lg mx-auto">
            Ce guide vous a donné les fondations. Mais chaque équipe est unique.
            Si vous voulez aller plus loin — un atelier sur mesure, un
            accompagnement stratégique, ou simplement une conversation pour
            explorer vos défis — je suis là.
          </p>
          <div className="w-16 h-1 bg-orange-brand mx-auto mb-6" />
          <p className="text-white font-semibold text-lg mb-2">
            Seb Bélisle
          </p>
          <p className="text-gray-400 mb-1">Kodra Conseil</p>
          <p className="text-orange-brand font-medium mb-1">
            seb@kodra.ca
          </p>
          <p className="text-gray-400 text-sm">kodra.ca</p>
        </div>

        <p className="text-gray-400 text-xs text-center mt-12">
          © Kodra Conseil — Tous droits réservés
        </p>
      </section>
    </div>
  );
}
