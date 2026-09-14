#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}
function fail(message) {
  console.error(`helvabase-mcp: ${message}`);
  process.exit(1);
}

const url = option("--url");
const output = resolve(option("--out", "./helvabase-mcp-config"));
if (!url) fail("missing --url (the HTTPS URL of your deployed Helvabase /mcp endpoint)");

let endpoint;
try { endpoint = new URL(url); } catch { fail("--url must be a valid URL"); }
if (endpoint.protocol !== "https:") fail("--url must use HTTPS");
if (!endpoint.pathname.endsWith("/mcp")) fail("--url must point to the deployed /mcp endpoint");

const mcpUrl = endpoint.toString().replace(/\/+$/, "");
const files = {
  "codex.toml": `[mcp_servers.helvabase]
url = "${mcpUrl}"
`,
  "claude.json": JSON.stringify({ mcpServers: { helvabase: { type: "http", url: mcpUrl } } }, null, 2) + "\n",
  "mistral.json": JSON.stringify({
    name: "helvabase",
    description: "Helvabase hosted MCP connector",
    server: mcpUrl,
    visibility: "private",
    system_prompt: "Use Helvabase only for the authorized workspace. Preserve sources, caveats, blockers and human-review gates."
  }, null, 2) + "\n",
  "README.txt": `Generated for ${mcpUrl}

Codex: add codex.toml to your Codex config, then run:
  codex mcp login helvabase

Claude: import claude.json through remote custom connector settings and complete OAuth.
Mistral: import mistral.json in Mistral Work custom connector settings and complete OAuth.

This installer never asks for or stores a bearer token.
`
};
await mkdir(output, { recursive: true });
await Promise.all(Object.entries(files).map(([name, content]) =>
  writeFile(resolve(output, name), content, "utf8")
));
console.log(`Helvabase MCP configuration written to ${output}`);
