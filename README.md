# Helvabase plugins and connector

Published by **Starbox Group Gmbh**. The plugins provide workflows for sourced dossiers and human review, in French, English and German.

## Install the plugin from this repository

Add `https://github.com/alopez3006/helvabase-mcp` as a plugin marketplace in your client, then install **Helvabase** and authorize your Helvabase account. Repository catalogues are available for Claude and Codex. This repository is not an official directory approval; native end-to-end acceptance remains in progress.

- [Français](plugins/helvabase/INSTALL.fr.md)
- [English](plugins/helvabase/INSTALL.en.md)
- [Deutsch](plugins/helvabase/INSTALL.de.md)
- Claude complete plugin: `plugins/claude/helvabase`
- Codex complete plugin: `plugins/helvabase`

Plugin files are MIT licensed. Brand assets and the hosted service are excluded; see [LICENSE](LICENSE) and [NOTICE](NOTICE).

## Connector configuration fallback

This repository is the public installation surface for the hosted Helvabase MCP
connector. It does not contain the Helvabase application, customer data,
backend credentials or a standalone replacement server.

### Generate configuration

Use Node.js 20 or newer:

```sh
npx --yes github:alopez3006/helvabase-mcp \
  --url https://helvabase.com/mcp
```

The command writes `codex.toml`, `claude.json`, `mistral.json` and
`README.txt` to `./helvabase-mcp-config` (or the directory supplied with
`--out`).

Authentication is completed through each client’s OAuth flow. No API key or
bearer token is placed in a client configuration file.

The URL must be a deployed Helvabase HTTPS endpoint ending in `/mcp`. This kit
does not deploy Helvabase or provide a local server. Native-client compatibility,
file transfer, refresh/revocation and human-review workflows must be verified
against the deployed service.

Only files under `public/mcp` are published from the private Helvabase
repository. The source workflow syncs this directory after changes land on
`main`. It requires the `MCP_PUBLICATION_TOKEN` secret with write access to
`alopez3006/helvabase-mcp`.
