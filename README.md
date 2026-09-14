# Helvabase MCP installer

This repository is the public installation surface for the hosted Helvabase MCP
connector. It does not contain the Helvabase application, customer data,
backend credentials or a standalone replacement server.

## Install

Use Node.js 20 or newer:

```sh
npx --yes github:alopez3006/helvabase-mcp \
  --url https://YOUR-DEPLOYED-HOST/mcp
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

Only this installation surface is public. The private Helvabase source
repository syncs it after the corresponding changes land on `main`.
