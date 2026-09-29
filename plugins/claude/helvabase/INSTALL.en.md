# Install Helvabase — pilot 1.4.5

[Français](./INSTALL.fr.md) · [English](./INSTALL.en.md) · [Deutsch](./INSTALL.de.md)

Helvabase connects your assistant to your dossiers and their sources. You need a Helvabase account and a compatible assistant; their subscriptions are separate.

## Choose the simplest route

- **Codex without a configured catalogue**: follow the [direct connection guide](https://helvabase.com/connect?lang=en&surface=codex-desktop&step=1). This connection requires no ZIP installation.
- **Claude Cowork**: install the plugin below to bundle the connection with guided workflows.
- **Claude Chat or Mistral**: use [your assistant's guide](https://helvabase.com/connect?lang=en). Available installation options depend on the client and your account.
- **ChatGPT Work web**: a local ZIP is not enough. Developer-mode server connection and available distribution depend on your account and organisation's permissions.

One method is enough. This plugin is not advertised as listed in the official directories.

## Claude Cowork: install, then connect

1. Download `helvabase-claude.zip` version **1.4.5**. In Cowork, open **Customize → Plugins → Add → Upload plugin** and select the ZIP.
2. In the plugin's **Connectors** tab, connect Helvabase. Reuse an existing product connection if offered. Follow the Helvabase sign-in flow and check the workspace and permissions before authorising.
3. Start a new Cowork task and run the first check below.

Upload must be available in your Claude version and permitted by your organisation; on Team or Enterprise, an administrator may need to add the connector. [Official help](https://claude.com/docs/plugins/overview#find-and-add-a-plugin).

## Codex: optional plugin with a configured catalogue

1. Download `helvabase-codex.zip` version **1.4.5**, extract it into a folder named `helvabase`, and add that folder to your authorised personal or team catalogue.
2. In the client's plugins, select that catalogue and install Helvabase. The ZIP does not create a catalogue. Without an existing catalogue, prefer the direct connection above.
3. Open a new chat, enable the plugin, then follow the Helvabase connection prompt and select the correct workspace.

Availability in Codex or Work desktop depends on the client and your organisation. A local catalogue does not automatically publish the plugin to Work web.

## First check

> Connect my Helvabase workspace and show my dossiers. Do not create anything yet.

Check the workspace actually returned. Then choose a test dossier and synthetic or authorised files. The four workflows are **connect**, **prepare**, **check**, and **deliver a review copy** (`helvabase-connect`, `helvabase-prepare`, `helvabase-check`, `helvabase-deliver`). Ask in French, English, or German.

## Connection, updates, and limits

- The product connector is `helvabase-product`, at `https://helvabase.com/mcp`. No Snipara account, API key, or token needs to be copied into chat. Do not replace a development-context connector.
- Installation transfers no documents and grants no extra access. Choose files and authorise their transfer; check receipt. A link or metadata does not prove that a file was downloaded and opened.
- Disable old skills from pack 1.3.0 when using the plugin; keep one product connection. Do not copy skills separately alongside the plugin.
- Human review, final approval, and delivery to the customer remain separate steps. Do not give the assistant a human validation code to approve on your behalf.
- This is a pilot: package checks do not prove native installation, complete OAuth, or successful file transfer in each client. Features disabled on the server remain disabled.
- If access is denied or the OAuth return is blocked, use client support or ask your administrator. Do not bypass protections.
- Removing the plugin does not delete your dossiers or cancel your subscription. Revoke the connection separately to remove its access.

Packages include the rounded Helvabase icon and logos. Their display in Claude's catalogue depends on its publishing configuration. No hooks, executables, or secrets are included. Download sizes and SHA-256 hashes are listed in `manifest.json` alongside the downloads.
