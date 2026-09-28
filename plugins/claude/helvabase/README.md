# Helvabase pour Claude Cowork — 1.4.4, pilote

[Français](./README.md) · [English](./README.en.md) · [Deutsch](./README.de.md)


[Guide d’installation complet](./INSTALL.fr.md)

![Helvabase](./assets/logo.png)

Ce plugin réunit le connecteur Helvabase et les instructions de préparation de
dossiers sourcés, de bibliothèque commerciale et de relecture humaine. Il ne
crée pas de compte, ne donne aucun droit à un dossier et ne modifie pas votre
abonnement. Son installation et son autorisation OAuth sont deux étapes séparées.
Le parcours natif complet dans Cowork reste à vérifier pour cette version.

## Installer dans Cowork

Prévoyez un compte Helvabase vérifié et une version de Claude donnant accès à
Cowork et aux plugins. Les politiques de votre organisation peuvent limiter
l’installation. L’abonnement Claude reste distinct de celui d’Helvabase.

1. Utilisez l’archive de cette version, `helvabase-claude.zip`. Vérifiez qu’elle
   contient un seul plugin nommé `helvabase`, en version `1.4.4`, et les quatre
   skills annoncés ci-dessous. Ce paquet pilote n’est pas une inscription au
   répertoire officiel Anthropic.
2. Dans Claude, ouvrez **Cowork**, puis **Customize / Personnaliser → Plugins →
   Add / Ajouter → Upload plugin / Importer un plugin**. Sélectionnez le ZIP.
   Commencez une nouvelle tâche Cowork après l’installation. L’import d’un fichier
   est documenté par Claude ; sa présence effective dépend de votre client et
   des droits de votre organisation. [Installation officielle](https://claude.com/docs/plugins/overview#find-and-add-a-plugin)
3. Ouvrez l’onglet **Connectors / Connecteurs** du plugin. Vérifiez que le serveur
   `helvabase-product` pointe exactement vers `https://helvabase.com/mcp`.
   Si la connexion existe déjà, réutilisez-la. Sinon, ajoutez le connecteur puis
   connectez-le depuis cet onglet. Sur Team ou Enterprise, un propriétaire peut
   devoir l’ajouter avant votre connexion individuelle. [Connecteurs inclus](https://claude.com/docs/plugins/overview#bundled-connectors)
4. Suivez la connexion OAuth native avec votre compte Helvabase. Vérifiez le
   compte, l’espace et les permissions avant d’autoriser. Ne collez ni clé API,
   ni jeton, ni secret Snipara dans Claude ou dans les fichiers du plugin.
   Si vous refusez ou si l’autorisation échoue, arrêtez-vous ; reprenez cette même
   connexion lorsque vous êtes prêt.

Installer le plugin ne suffit pas à rendre le connecteur opérationnel. Si l’import
ou le connecteur est interdit par votre organisation, demandez l’accès au
responsable concerné. Le [guide Helvabase](https://helvabase.com/connect?lang=fr#claude)
reste disponible ; ne contournez pas la restriction par une clé ou un serveur local.

## Premier contrôle, sans document client

Dans une nouvelle tâche **Cowork**, demandez :

> Utilise Helvabase pour inspecter mon espace avec `helvabase_workspace` et
> `helvabase_workspace_setup_status`. Indique l’espace réellement retourné.
> Ne crée aucun espace ni dossier, ne configure aucun accès et n’importe aucun fichier.

Vérifiez que les outils et l’espace attendus sont réellement retournés. Le nom du
plugin, la présence d’un skill ou un login web ne prouve pas cet appel. Si les
outils ne sont pas disponibles, revenez à l’onglet Connecteurs plutôt que de
laisser l’assistant inventer un résultat.

Ensuite, choisissez vous-même un dossier et de petits fichiers synthétiques ou
autorisés. L’assistant doit prévisualiser les fichiers, recueillir votre accord,
transférer leurs octets et contrôler les reçus avant d’affirmer leur réception.
Une réception passée ne prouve pas l’accès actuel, la lecture complète ou la
validation humaine. Aucun document n’est envoyé par l’installation de ce paquet.

Le build inclut les instructions communes suivantes :

- `helvabase-connect` : vérifier la connexion et le bon espace.
- `helvabase-prepare` : préparer ou reprendre le dossier avec les sources choisies.
- `helvabase-check` : contrôler exigences, preuves et état de relecture.
- `helvabase-deliver` : créer une copie de revue et vérifier ses octets au retour.

Demandez le workflow par son nom, dans votre langue, ou sélectionnez le skill
présent dans le menu `/` de votre client. Les autorisations, quotas, versions et
accords humains restent contrôlés par Helvabase ; le plugin ne les remplace pas.

## Mise à jour depuis 1.3.0

Le nom reste `helvabase` et la version progresse de `1.3.0` à `1.4.4`. L’ancien
paquet `integrations/helvabase/` et ses téléchargements restent intacts. Vérifiez
les différences avant de remplacer votre copie installée. Évitez d’activer à la
fois l’ancien pack et ce plugin, ou plusieurs connexions vers le même endpoint.
Ne remplacez pas un connecteur de contexte développeur nommé `helvabase` ou
`snipara` : le serveur produit de ce paquet s’appelle `helvabase-product`.

Pour arrêter de l’utiliser, désactivez ou retirez le plugin dans Personnaliser.
Déconnectez le connecteur séparément si vous souhaitez retirer cet accès.
Cela n’efface pas vos dossiers et ne résilie pas votre abonnement Helvabase.
[Gestion dans Cowork](https://claude.com/docs/cowork/guide/plugins)

## Structure et construction

Ce répertoire est une source de paquet. Le build copie les skills communs ; ils
ne sont pas dupliqués ici. Le ZIP final attendu contient :

```text
.claude-plugin/plugin.json
.mcp.json
README.md
skills/
  helvabase-connect/SKILL.md
  helvabase-prepare/SKILL.md
  helvabase-check/SKILL.md
  helvabase-deliver/SKILL.md
```

Conservez les fichiers cachés dans le ZIP. Notre build place les contenus
directement à la racine, avec exactement un manifeste ; n’archivez pas la chaîne
`integrations/plugins/…`. Claude accepte également un unique dossier de tête.
Les emplacements
standards `skills/` et `.mcp.json` sont découverts sans chemins additionnels dans
le manifeste. Aucun hook, exécutable, serveur local, fichier de configuration
utilisateur ou secret n’entre dans ce paquet. Il ne s’agit pas d’une extension
MCP locale `.mcpb` ou `.dxt`. [Structure officielle](https://claude.com/docs/plugins/build)

Artefact prévu par l’intégration : `/plugins/1.4.4/helvabase-claude.zip`.
Ce chemin prévu n’affirme ni sa publication ni sa disponibilité en production.

## Validation et limites de preuve

Contrôlez le manifeste et l’inventaire du ZIP final, puis rejouez l’installation
sur la version de Cowork visée. Pour un contrôle statique complémentaire :

```sh
claude plugin validate /chemin/absolu/vers/helvabase
```

Ce validateur appartient à **Claude Code**. Son succès ne prouve ni l’import
Cowork, ni OAuth, ni l’apparition des skills, ni un transfert ou téléchargement de
fichier dans Cowork. Le CLI disponible lors de la préparation est `2.1.100` ; les
contrôles MCP plus récents de la documentation nécessitent `2.1.281` ou supérieur.
Un lancement avec `claude --plugin-dir` serait lui aussi une recette Claude Code,
pas une recette Cowork. [Référence du validateur](https://code.claude.com/docs/en/plugins-reference#validate-the-manifest)

La recette native devra noter séparément : version du client, import du ZIP,
skills affichés, connecteur OAuth autorisé pour le bon espace, appel métier réel,
transfert des octets et retour d’un fichier lisible. Ni un test CLI ni un reçu
serveur historique ne permettent de cocher ces étapes à la place de l’utilisateur.

Documentation officielle consultée le **28 septembre 2026** : les liens ci-dessus
font autorité pour le format et le parcours documenté. Le paquet reste pilote
jusqu’à réception de ces preuves natives ; aucune installation de compte,
publication, création de marketplace ou configuration globale n’est réalisée par
ces fichiers.

## Identité visuelle

La version 1.4.4 adopte l’icône Helvabase aux angles arrondis, sans changer le texte du logo ni ses couleurs. L’icône et les variantes du logo pour fonds clairs et sombres sont incluses dans les deux plugins. Codex les référence dans ses métadonnées d’interface. Le manifeste Claude ne déclare pas de champ d’icône non documenté : l’affichage dans son catalogue dépend de la configuration de publication du catalogue.

Éditeur : **Starbox Group Gmbh**. Les fichiers du plugin sont sous licence MIT ; le nom, les logos et les icônes Helvabase sont exclus. Voir `LICENSE` et `NOTICE`. Le backend et le service hébergé ne sont pas couverts.

[Privacy](https://helvabase.com/privacy) · [Support](https://helvabase.com/contact) · [Terms](https://helvabase.com/terms) · [Documentation](https://helvabase.com/connect#claude)
