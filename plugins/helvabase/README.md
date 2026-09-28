# Helvabase pour Codex et ChatGPT Work — pilote 1.4.3

[Français](./README.md) · [English](./README.en.md) · [Deutsch](./README.de.md)


[Guide d’installation complet](./INSTALL.fr.md)

![Helvabase](./assets/logo.png)

Ce paquet relie votre assistant aux dossiers Helvabase de l’espace que vous autorisez. L’assistant prépare les réponses ; Helvabase conserve les sources, contributions et décisions de revue. Une connexion réussie ne vaut pas approbation d’un document.

La version 1.4.3 poursuit la version 1.3.0 existante ; le numéro de version ne constitue pas une certification de compatibilité native.

## Contenu du paquet

- `plugin.json` et `mcp.json` : format portable Agent Plugins.
- `.codex-plugin/plugin.json` et `.mcp.json` : format de compatibilité Codex.
- `assets/` : icône arrondie et logos pour fonds clairs et sombres, inclus par le build.
- `skills/` : parcours communs ajoutés par la construction du paquet, absents de ce répertoire source. Installez le paquet construit, pas cette source incomplète.

Les deux formats déclarent le même serveur `helvabase-product` vers `https://helvabase.com/mcp`. Le format portable utilise `streamable-http`, le format historique `http`. Les chemins sont internes au paquet. La structure suit la [documentation OpenAI de packaging](https://developers.openai.com/plugins/build/plugins), consultée le 28 septembre 2026.

## Choisir le chemin le plus simple

Sans catalogue personnel ou d’équipe déjà configuré, commencez par la [connexion directe dans Codex](https://helvabase.com/connect?lang=fr&surface=codex-desktop&step=1). Le téléchargement de ce ZIP ne crée pas de catalogue et n’est pas une installation en un clic. Ce paquet est destiné aux utilisateurs dont le catalogue accepte déjà un plugin local.

## Installer le pilote sur desktop

1. Obtenir l’archive `helvabase-codex.zip` de la distribution `1.4.3`, contenant les skills, puis ajouter son dossier extrait à un marketplace local ou d’équipe autorisé ; son entrée doit viser la racine `helvabase`.
2. Dans l’application desktop, ouvrir les plugins, sélectionner ce marketplace et installer **Helvabase · pilote**. Dans Codex CLI, utiliser `/plugins` depuis un marketplace déjà configuré.
3. Ouvrir un nouveau chat avec le plugin activé. Suivre la connexion OAuth native proposée par le client, se connecter à Helvabase et choisir l’espace approprié.
4. Demander : « Montre mes dossiers Helvabase et les prochaines étapes. » Vérifier l’espace et le dossier retournés avant de modifier des données.

Aucun marketplace ni compte n’est créé par ces fichiers. La [documentation des surfaces supportées](https://learn.chatgpt.com/docs/plugins) décrit l’installation et le démarrage d’un nouveau chat ; la disponibilité dépend du client et de la politique de votre organisation.

## ChatGPT Work sur le web

Un dossier local ou une archive ne crée pas automatiquement une installation disponible dans Work web. Le marketplace local desktop et la distribution hébergée sont distincts. Pour un pilote web, faire enregistrer le serveur distant dans le mode développeur autorisé, puis vérifier la connexion et les outils. Une éventuelle association au paquet doit utiliser l’identifiant réel fourni par OpenAI. Ce paquet ne contient ni `.app.json` ni identifiant enregistré inventé. Voir [connexion et tests officiels](https://developers.openai.com/plugins/deploy/connect-chatgpt).

Un compte éligible et les droits nécessaires dans votre organisation sont requis ; leur disponibilité dans Work web n’est pas garantie par ce paquet. La publication ou distribution hébergée, ses autorisations administratives et son association MCP restent des étapes séparées. Ne pas annoncer ce pilote comme déjà installé ou publié sur Work web.

## Connexion et limites

- OAuth est géré par le client. Aucune clé API, clé Snipara ou copie de jeton ne doit être ajoutée au paquet ou au chat.
- `helvabase-product` désigne le produit utilisateur. Ne pas le remplacer par le serveur de contexte de développement Helvabase/Snipara, ni écraser ce dernier.
- Le paquet ne lance aucun serveur local, script ou hook. Il ne change pas les permissions de vos dossiers.
- Si le navigateur bloque le retour OAuth, conserver l’erreur et suivre le dépannage normal du client ; ne pas désactiver ses protections ni fabriquer une session. Un échange de jeton réussi ne prouve pas que la page de retour fonctionne.
- Installation native, OAuth complet, transfert de fichiers et parcours source → réponse → revue → export restent à tester dans chaque client. La version 1.4.3 ne certifie ni format universel ni validation humaine ni disponibilité commerciale.

Pour le premier essai, utiliser un dossier synthétique autorisé. Ne partager aucun document externe, envoyer aucune invitation ou confirmer aucune revue sans l’autorisation correspondant à cette action.

## Identité visuelle

La version 1.4.3 adopte l’icône Helvabase aux angles arrondis, sans changer le texte du logo ni ses couleurs. Les fichiers `assets/icon.png`, `assets/logo.png` et `assets/logo-dark.png` sont inclus dans les deux plugins. Codex les référence dans ses métadonnées d’interface. Le manifeste Claude ne déclare pas de champ d’icône non documenté : l’affichage dans son catalogue dépend de la configuration de publication du catalogue.

Éditeur : **Starbox Group Gmbh**. Les fichiers du plugin sont sous licence MIT ; le nom, les logos et les icônes Helvabase sont exclus. Voir `LICENSE` et `NOTICE`. Le backend et le service hébergé ne sont pas couverts.
