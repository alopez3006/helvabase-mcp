---
name: helvabase-connect
description: "Connecter Helvabase et diagnostiquer son accès dans l’assistant. Déclencheurs : connecter Helvabase, vérifier ma connexion ; connect Helvabase, troubleshoot connection ; Helvabase verbinden, Verbindung prüfen. Ne crée pas de dossier et ne configure pas le backend."
---

# Connecter et vérifier l’accès

## Appeler les opérations spécialisées

Le mode `?catalog=core` expose onze outils : huit opérations essentielles,
`helvabase_help`, `helvabase_execute_read` et `helvabase_execute_write`.
Les noms métier employés dans ce workflow désignent les opérations du serveur ;
ils ne supposent pas que le client charge un outil distinct pour chacune.

Si l’opération n’est pas directement appelable, chercher avec
`helvabase_help({query:"..."})`, puis demander son nom exact avec
`helvabase_help({tool:"helvabase_nom_operation"})`. Lire `inputSchema`,
`annotations`, `requiredScope` et `executionTool`. Appeler cet `executionTool`
avec `{toolName:"helvabase_nom_operation",arguments:{...argumentsOriginaux}}`.
Exemple de lecture sans modification : après son contrat exact,
`helvabase_execute_read({toolName:"helvabase_document_pack_capabilities",arguments:{}})`.
Pour une écriture, utiliser uniquement `helvabase_execute_write` si c’est le
point d’appel retourné, dans le périmètre déjà autorisé par la demande.

L’aide ne charge pas de liaison native et n’autorise aucune opération. Conserver
les arguments exacts, clés d’idempotence, révisions et confirmations humaines de
l’opération d’origine. Les points d’appel ont des annotations conservatrices ;
respecter aussi les confirmations demandées par le client. Inspecter `isError`
et `ok`, sans prendre un HTTP 200 pour un succès. Ne pas changer de compte,
espace, transport ou clé pour contourner un refus. Ne jamais extraire OAuth.

Un client exposant déjà le contrat individuel peut l’appeler directement.
Le catalogue individuel complet reste à `https://helvabase.com/mcp`, notamment
pour la revue ; ne pas modifier la connexion globale pour exécuter ce workflow.


Répondre dans la langue de l’utilisateur. Utiliser le serveur produit nommé
`helvabase-product`, à `https://helvabase.com/mcp?catalog=core`. Vérifier son URL : un serveur
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
