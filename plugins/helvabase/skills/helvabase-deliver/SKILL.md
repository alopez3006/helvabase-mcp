---
name: helvabase-deliver
description: "Créer et récupérer une copie de revue d’un dossier Helvabase existant. Déclencheurs : livrer une copie de revue, exporter le brouillon ; export a review copy, download draft ; Prüfungskopie exportieren, Entwurf herunterladen. Ne soumet pas au client final et ne signe rien."
---

# Livrer une copie de revue vérifiable

Utiliser `helvabase-product` à `https://helvabase.com/mcp`, jamais le MCP de contexte
`api.snipara.com`. Lire les schémas vivants via `tools/list` ou découverte équivalente.
Si absent, indiquer `https://helvabase.com/connect`. Ne demander ni extraire aucun
secret, ne modifier aucune configuration globale et ne contourner aucun droit.

Reprendre l’espace/dossier déjà choisi ; sinon lire `helvabase_workspace({})` et
`helvabase_list_dossiers({})`, puis clarifier uniquement une ambiguïté réelle.
Lire `helvabase_read_context({projectId,includeRfpText:false})`. Une conversation
n’est pas un draft enregistré : si `expectedDraftRevision` est absent, expliquer
ce qui doit être préparé, sans créer artificiellement un nouveau dossier.

Pour un document autonome demandé, utiliser la révision exacte du draft :

```js
helvabase_export_dossier({
  revision: exactDraftRevision,
  edition: 'review',
  locale: 'fr',
  idempotencyKey: stableKeyForThisExport
});
```

Choisir `locale` parmi `fr`, `en`, `de` selon le draft : cela localise les titres
produit, sans traduire le contenu rédigé. `revision` contient `outputJobId` et
`payloadHash` réels. Le schéma ne prend pas `projectId`. L’export est une écriture ;
les droits de gestion/ACL restent requis. L’édition review ne réclame pas le scope
review et n’envoie pas de code. Conserver les lacunes et le statut non approuvé.
Ne pas redemander l’accord de créer cette copie quand la demande le couvre déjà.

Lire les erreurs MCP/métier : HTTP 200, un ID de job ou un lien ne prouvent pas la
production réussie. Après résultat incertain, inspecter `helvabase_jobs` par ID
retourné ou liste bornée. Reprendre une mutation uniquement avec les mêmes clé et
arguments ; ne pas générer une clé différente pour forcer un export.

Pour un artefact existant, `helvabase_output_download({jobId})` peut retourner le
lien. Télécharger via la capacité authentifiée déjà disponible du client ou fournir
le lien de connexion autorisé si cette capacité manque. Ne pas extraire OAuth du
stockage client pour bricoler un téléchargement. Le lien n’est pas public ; ne
jamais transmettre un bearer à un autre domaine ou le montrer à l’utilisateur.

Quand les octets sont accessibles : vérifier taille et SHA-256 annoncés, sauvegarder
un nouveau fichier, ouvrir/rendre le document avec les outils du client, contrôler
les pages et la mention de revue. Un échec d’accès ou un hash discordant arrête la
livraison vérifiée. Si seul le lien est fourni, dire explicitement « téléchargement
et contenu non vérifiés » ; ne pas déclarer le fichier reçu ou inspecté.

## Préserver les formulaires et les validations distinctes

Lire `helvabase_document_pack_capabilities` si le dossier exige des originaux ou un
pack. `fileProcessingEnabled:false` bloque les actions gérées de fichiers, y compris
création et pièces inchangées ; un accord n’active pas ce flag. Ne pas substituer
un DOCX générique à un formulaire obligatoire et ne pas appeler une note autonome
« pack complet ». Le handoff de valeurs (`helvabase_read_filling_handoff` puis
`helvabase_read_filling_field`, révision fixe) peut guider une copie locale de
l’original réel si demandée et techniquement possible. Cette copie reste non
acceptée/non approuvée par Helvabase tant que le round-trip requis n’est pas reçu.
Pas de reconstruction d’un original depuis ses extraits ; pas de recalcul Excel promis.

Ne pas demander/renvoyer de code de validation, lire une boîte mail, simuler un
réviseur ou appeler une confirmation dans ce parcours. La décision de soumission,
l’accord de production, les revues individuelles, la revue finale et la promotion
bibliothèque restent distincts. Une demande explicite de revue par e-mail doit
être traitée séparément, avec son périmètre et uniquement le code fourni par la
personne après inspection ; ne pas répéter un consentement déjà valable.
Ne pas signer, envoyer au destinataire final ou publier à partir d’une demande
de copie de revue.

Terminer avec édition, révision, fichier/lien, vérifications réellement faites,
lacunes et prochaine action humaine. Une réussite HTTP ou un plugin installé ne
valide pas le parcours natif du client ni sa capacité à transférer des fichiers.
