# Helvabase — Codex und ChatGPT Work · Pilotversion 1.4.5

[Français](./README.md) · [English](./README.en.md) · [Deutsch](./README.de.md)

![Helvabase](./assets/logo.png)

Dieses Plugin verbindet Ihren Assistenten mit dem von Ihnen freigegebenen Helvabase-Arbeitsbereich. Ihr Assistent erstellt Entwürfe; Helvabase bewahrt Quellen und Prüfentscheidungen auf. Eine Verbindung ist keine Dokumentfreigabe.

[Vollständige Installationsanleitung](./INSTALL.de.md)

## Den einfachsten Weg wählen

- **Codex ohne eingerichteten Katalog**: Folgen Sie der [Anleitung zur direkten Verbindung](https://helvabase.com/connect?lang=de&surface=codex-desktop&step=1). Dafür müssen Sie kein ZIP installieren.
- **Claude Cowork**: Installieren Sie das folgende Plugin, um Verbindung und geführte Arbeitsabläufe zu bündeln.
- **Claude Chat oder Mistral**: Nutzen Sie die [Anleitung für Ihren Assistenten](https://helvabase.com/connect?lang=de). Die verfügbaren Installationsmöglichkeiten hängen vom Client und Ihrem Konto ab.
- **ChatGPT Work im Web**: Ein lokales ZIP reicht nicht aus. Die Serververbindung im Entwicklermodus und die verfügbare Verteilung hängen von Ihrem Konto und den Berechtigungen Ihrer Organisation ab.

Eine Methode genügt. Dieses Plugin wird nicht als Eintrag in den offiziellen Verzeichnissen angeboten.

## Claude Cowork: installieren und verbinden

1. Laden Sie `helvabase-claude.zip` in Version **1.4.5** herunter. Öffnen Sie in Cowork **Customize → Plugins → Add → Upload plugin** und wählen Sie das ZIP aus.
2. Verbinden Sie Helvabase im Tab **Connectors** des Plugins. Verwenden Sie eine vorhandene Produktverbindung, falls angeboten. Folgen Sie der Helvabase-Anmeldung und prüfen Sie Arbeitsbereich und Berechtigungen vor der Freigabe.
3. Starten Sie eine neue Cowork-Aufgabe und führen Sie die erste Prüfung unten durch.

Der Upload muss in Ihrer Claude-Version verfügbar und von Ihrer Organisation erlaubt sein. Bei Team oder Enterprise muss gegebenenfalls ein Administrator den Connector hinzufügen. [Offizielle Hilfe](https://claude.com/docs/plugins/overview#find-and-add-a-plugin).

## Codex: optionales Plugin mit eingerichtetem Katalog

1. Laden Sie `helvabase-codex.zip` in Version **1.4.5** herunter, entpacken Sie es in einen Ordner namens `helvabase` und fügen Sie diesen Ihrem zugelassenen persönlichen oder Team-Katalog hinzu.
2. Wählen Sie in der Plugin-Verwaltung des Clients diesen Katalog aus und installieren Sie Helvabase. Das ZIP erstellt keinen Katalog. Ohne vorhandenen Katalog ist die direkte Verbindung oben einfacher.
3. Öffnen Sie einen neuen Chat, aktivieren Sie das Plugin und folgen Sie der Helvabase-Verbindung. Wählen Sie den richtigen Arbeitsbereich aus.

Die Verfügbarkeit in Codex oder Work Desktop hängt vom Client und Ihrer Organisation ab. Ein lokaler Katalog veröffentlicht das Plugin nicht automatisch in Work Web.

## Erste Prüfung

> Verbinde meinen Helvabase-Arbeitsbereich und zeige meine Dossiers. Erstelle vorerst nichts.

Prüfen Sie den tatsächlich zurückgegebenen Arbeitsbereich. Wählen Sie danach ein Testdossier und synthetische oder freigegebene Dateien. Die vier Abläufe sind **verbinden**, **vorbereiten**, **prüfen** und **eine Prüfungskopie bereitstellen** (`helvabase-connect`, `helvabase-prepare`, `helvabase-check`, `helvabase-deliver`). Stellen Sie Ihre Anfrage auf Französisch, Englisch oder Deutsch.

## Verbindung, Aktualisierung und Grenzen

- Der Produkt-Connector heisst `helvabase-product` und verwendet `https://helvabase.com/mcp`. Sie müssen weder ein Snipara-Konto anlegen noch API-Schlüssel oder Tokens in den Chat kopieren. Ersetzen Sie keinen Connector für Entwicklungskontext.
- Die Installation überträgt keine Dokumente und gewährt keine zusätzlichen Zugriffsrechte. Wählen Sie Dateien aus, erlauben Sie deren Übertragung und prüfen Sie den Empfang. Ein Link oder Metadaten beweisen nicht, dass eine Datei heruntergeladen und geöffnet wurde.
- Deaktivieren Sie alte Skills aus Paket 1.3.0, wenn Sie das Plugin nutzen. Behalten Sie nur eine Produktverbindung. Kopieren Sie die Skills nicht zusätzlich zum Plugin.
- Menschliche Prüfung, endgültige Freigabe und Versand an den Kunden bleiben getrennte Schritte. Geben Sie dem Assistenten keinen menschlichen Bestätigungscode, damit er in Ihrem Namen freigibt.
- Dies ist eine Pilotversion: Paketprüfungen belegen weder native Installation noch vollständiges OAuth oder erfolgreiche Dateiübertragung in jedem Client. Serverseitig deaktivierte Funktionen bleiben deaktiviert.
- Bei verweigertem Zugriff oder blockierter OAuth-Rückleitung wenden Sie sich an den Client-Support oder Ihren Administrator. Umgehen Sie keine Schutzmassnahmen.
- Das Entfernen des Plugins löscht keine Dossiers und kündigt kein Abonnement. Widerrufen Sie die Verbindung separat, um ihren Zugriff zu entfernen.

Die Pakete enthalten das abgerundete Helvabase-Symbol und die Logos. Ihre Anzeige im Claude-Katalog hängt von dessen Veröffentlichungskonfiguration ab. Es sind keine Hooks, ausführbaren Programme oder Geheimnisse enthalten. Downloadgrössen und SHA-256-Prüfsummen stehen in `manifest.json` neben den Downloads.

Herausgeber: **Starbox Group Gmbh**. Die Plugin-Dateien stehen unter der MIT-Lizenz; Name, Logos und Symbole von Helvabase sind ausgenommen. Siehe `LICENSE` und `NOTICE`. Backend und gehosteter Dienst sind nicht umfasst.

[Privacy](https://helvabase.com/privacy) · [Support](https://helvabase.com/contact) · [Terms](https://helvabase.com/terms) · [Documentation](https://helvabase.com/connect#codex)
