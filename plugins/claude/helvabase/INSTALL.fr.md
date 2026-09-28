# Installer Helvabase — pilote 1.4.4

[Français](./INSTALL.fr.md) · [English](./INSTALL.en.md) · [Deutsch](./INSTALL.de.md)

Helvabase relie votre assistant à vos dossiers et à leurs sources. Un compte Helvabase et un assistant compatible sont nécessaires ; leurs abonnements sont distincts.

## Choisir le parcours le plus simple

- **Codex sans catalogue configuré** : suivez la [connexion directe](https://helvabase.com/connect?lang=fr&surface=codex-desktop&step=1). Aucun ZIP à installer pour cette connexion.
- **Claude Cowork** : installez le plugin ci-dessous pour réunir connexion et parcours guidés.
- **Claude Chat ou Mistral** : utilisez le [guide de votre assistant](https://helvabase.com/connect?lang=fr). Les options d’installation disponibles dépendent du client et de votre compte.
- **ChatGPT Work web** : un ZIP local ne suffit pas. La connexion du serveur en mode développeur et la distribution disponible dépendent de votre compte et des autorisations de votre organisation.

Une seule méthode suffit. Le plugin n'est pas annoncé comme disponible dans les catalogues officiels.

## Claude Cowork : installer puis connecter

1. Téléchargez `helvabase-claude.zip` version **1.4.4**. Dans Cowork, ouvrez **Customize / Personnaliser → Plugins → Add / Ajouter → Upload plugin / Importer un plugin**, puis sélectionnez le ZIP.
2. Dans l'onglet **Connectors / Connecteurs** du plugin, connectez Helvabase. Réutilisez une connexion produit existante si proposée. Suivez la connexion Helvabase et vérifiez l'espace ainsi que les permissions avant d'autoriser.
3. Commencez une nouvelle tâche Cowork et faites le premier essai ci-dessous.

L'import doit être disponible dans votre version de Claude et autorisé par votre organisation ; sur Team ou Enterprise, le responsable peut devoir ajouter le connecteur. [Aide officielle](https://claude.com/docs/plugins/overview#find-and-add-a-plugin).

## Codex : plugin facultatif avec catalogue configuré

1. Téléchargez `helvabase-codex.zip` version **1.4.4**, extrayez-le dans un dossier nommé `helvabase` et ajoutez ce dossier à votre catalogue personnel ou d'équipe autorisé.
2. Dans les plugins du client, choisissez ce catalogue et installez Helvabase. Le ZIP ne crée pas de catalogue. Sans catalogue existant, préférez la connexion directe ci-dessus.
3. Ouvrez un nouveau chat, activez le plugin, puis suivez la connexion Helvabase proposée et choisissez le bon espace.

La disponibilité dans Codex ou Work desktop dépend du client et de votre organisation. Le catalogue local ne publie pas automatiquement le plugin sur Work web.

## Premier essai

> Connecte mon espace Helvabase et montre mes dossiers. Ne crée rien pour le moment.

Vérifiez l'espace réellement retourné. Choisissez ensuite un dossier de test et des fichiers synthétiques ou autorisés. Les quatre parcours sont **connecter**, **préparer**, **vérifier** et **livrer une copie de revue** (`helvabase-connect`, `helvabase-prepare`, `helvabase-check`, `helvabase-deliver`). Demandez-les en français, anglais ou allemand.

## Connexion, mise à jour et limites

- Le connecteur produit est `helvabase-product`, à l'adresse `https://helvabase.com/mcp`. Aucun compte Snipara, clé API ou jeton à copier dans le chat n'est nécessaire. Ne remplacez pas un connecteur de contexte de développement.
- L'installation ne transfère aucun document et ne donne aucun droit supplémentaire. Choisissez les fichiers et autorisez leur transfert ; vérifiez leur réception. Un lien ou des métadonnées ne prouvent pas qu'un fichier a été téléchargé et ouvert.
- Désactivez les anciens skills du pack 1.3.0 si vous utilisez le plugin ; gardez une seule connexion produit. Ne copiez pas les skills en plus du plugin.
- La relecture humaine, l'approbation finale et l'envoi au client restent distincts. Ne donnez pas à l'assistant un code de validation humaine pour qu'il approuve à votre place.
- Cette version est pilote : les vérifications du paquet ne prouvent pas une installation native, un OAuth complet ou un transfert de fichiers réussi dans chaque client. Les fonctions désactivées côté serveur restent désactivées.
- En cas de refus d'accès ou de retour OAuth bloqué, utilisez l'aide du client ou de votre administrateur. Ne contournez pas les protections.
- Retirer le plugin ne supprime pas vos dossiers et ne résilie pas votre abonnement. Révoquez la connexion séparément pour retirer son accès.

Les paquets incluent l'icône arrondie et les logos Helvabase. Leur affichage dans le catalogue Claude dépend de sa configuration de publication. Aucun hook, exécutable ni secret n'est inclus. Les tailles et SHA-256 figurent dans `manifest.json` à côté des téléchargements.
