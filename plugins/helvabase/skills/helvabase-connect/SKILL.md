---
name: helvabase-connect
description: "Connecter Helvabase et diagnostiquer son accès dans l’assistant. Déclencheurs : connecter Helvabase, vérifier ma connexion ; connect Helvabase, troubleshoot connection ; Helvabase verbinden, Verbindung prüfen. Ne crée pas de dossier et ne configure pas le backend."
---

# Connecter et vérifier l’accès

Répondre dans la langue de l’utilisateur. Utiliser le serveur produit nommé
`helvabase-product`, à `https://helvabase.com/mcp`. Vérifier son URL : un serveur
contenant « Helvabase » dans son nom peut être un autre contexte. Ne jamais utiliser
le MCP de contexte `api.snipara.com` pour les opérations client. Ne modifier aucune
configuration globale ou connexion voisine. Ne demander ni mot de passe, clé ou token.

Si le connecteur est absent, ouvrir ou indiquer `https://helvabase.com/connect` et
expliquer l’étape d’autorisation adaptée au client et à sa version. Attendre le
consentement requis ; ne pas le simuler. Réutiliser une autorisation déjà donnée
si elle couvre le même compte, espace et périmètre. Ne pas extraire les secrets du
client pour fabriquer un transport de remplacement.

Lire les schémas actuellement exposés par `tools/list` (ou la découverte équivalente
du client). Les noms ci-dessous désignent les outils de **ce serveur produit**.
Exécuter les lectures suivantes avec leurs arguments exacts :

| Outil | Arguments |
|---|---|
| `helvabase_workspace` | `{}` |
| `helvabase_workspace_setup_status` | `{}` |
| `helvabase_list_dossiers` | `{}` |

Vérifier le compte/espace et le rôle réellement retournés. Ne pas créer de dossier
pour tester la connexion. Si plusieurs espaces ou dossiers correspondent à la
suite demandée, poser la question avant une opération dépendante ; poursuivre les
lectures indépendantes utiles. Un état de setup manquant n’autorise pas à appeler
`helvabase_setup_workspace` ou `helvabase_provision_project_access` automatiquement.
Expliquer le besoin et le rôle requis ; conserver tout accord déjà acquis.

Ne pas conclure depuis un HTTP 200 seul : inspecter les erreurs MCP (`isError`) et
le résultat métier (`ok:false`). Un login web, un clic d’autorisation ou un nom de
client déclaré ne prouve pas un appel réussi. La vérification manuelle sur
`/connect` peut montrer une interaction récente ; sa validité et l’espace observé
comptent. Un reçu historique de fichier ne prouve ni accès actuel ni transfert
par l’assistant choisi.

En cas de refus, expiration ou révocation, indiquer l’action précise : reconnecter
le même compte, sélectionner le bon espace ou obtenir les droits nécessaires.
Ne pas créer un autre espace/connecteur pour contourner un refus ou un quota.
Ces lectures peuvent enregistrer un reçu minimal de diagnostic, sans provisionner.

Terminer par : espace constaté, lecture réussie ou erreur, prochaine action et
limites non testées. Distinguer support HTTP, client natif/version et capacité à
lire/envoyer/télécharger les octets : aucun de ces constats ne prouve les autres.
