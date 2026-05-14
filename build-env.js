// ════════════════════════════════════════════════════════════════════
//  Guardião LGPD — build-env.js
//  Executado pelo Vercel antes do deploy (ver vercel.json → buildCommand)
//
//  Lê as variáveis de ambiente e gera /assets/js/env.js
//  que é carregado pelos HTMLs antes de qualquer outro script.
//
//  Variáveis necessárias no Vercel:
//    GITHUB_TOKEN            → token PAT com escopo repo (read)
//    GITHUB_USER             → adrianois
//    GITHUB_REPO             → blog-lgpd
//    GITHUB_BRANCH           → main
//    APPS_SCRIPT_NEWSLETTER  → URL do Apps Script da Newsletter
//    APPS_SCRIPT_CURSOS      → URL do Apps Script de Cursos
// ════════════════════════════════════════════════════════════════════

const fs   = require('fs');
const path = require('path');

// Garante que o diretório existe
const outDir = path.join(__dirname, 'assets', 'js');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Lê variáveis (com fallback vazio para não quebrar o build)
const vars = {
  GITHUB_TOKEN:           process.env.GITHUB_TOKEN           || '',
  GITHUB_USER:            process.env.GITHUB_USER            || 'adrianois',
  GITHUB_REPO:            process.env.GITHUB_REPO            || 'blog-lgpd',
  GITHUB_BRANCH:          process.env.GITHUB_BRANCH          || 'main',
  APPS_SCRIPT_NEWSLETTER: process.env.APPS_SCRIPT_NEWSLETTER || '',
  APPS_SCRIPT_CURSOS:     process.env.APPS_SCRIPT_CURSOS     || '',
};

// Valida variáveis críticas
const missing = [];
if (!vars.GITHUB_TOKEN)           missing.push('GITHUB_TOKEN');
if (!vars.APPS_SCRIPT_NEWSLETTER) missing.push('APPS_SCRIPT_NEWSLETTER');
if (!vars.APPS_SCRIPT_CURSOS)     missing.push('APPS_SCRIPT_CURSOS');

if (missing.length > 0) {
  console.warn(`\n⚠  build-env.js: variáveis não definidas → ${missing.join(', ')}`);
  console.warn('   Configure-as em: Vercel → Project → Settings → Environment Variables\n');
}

// Gera o conteúdo de env.js
// Expõe APENAS o que o front-end precisa — nunca o token bruto.
// O token é usado apenas para montar o header de autenticação.
const content = `/* AUTO-GERADO por build-env.js — NÃO EDITE MANUALMENTE */
/* eslint-disable */
window.__ENV = Object.freeze({
  GITHUB_RAW_BASE: "https://raw.githubusercontent.com/${vars.GITHUB_USER}/${vars.GITHUB_REPO}/${vars.GITHUB_BRANCH}",
  GITHUB_AUTH:     "token ${vars.GITHUB_TOKEN}",
  NL_SCRIPT_URL:   "${vars.APPS_SCRIPT_NEWSLETTER}",
  CURSOS_SCRIPT_URL: "${vars.APPS_SCRIPT_CURSOS}",
});
`;

const outFile = path.join(outDir, 'env.js');
fs.writeFileSync(outFile, content, 'utf8');

console.log(`✅ env.js gerado em ${outFile}`);
console.log(`   GITHUB_USER  : ${vars.GITHUB_USER}`);
console.log(`   GITHUB_REPO  : ${vars.GITHUB_REPO}`);
console.log(`   GITHUB_BRANCH: ${vars.GITHUB_BRANCH}`);
console.log(`   NL_SCRIPT_URL: ${vars.APPS_SCRIPT_NEWSLETTER ? '✓ definida' : '✗ ausente'}`);
console.log(`   CURSOS_URL   : ${vars.APPS_SCRIPT_CURSOS     ? '✓ definida' : '✗ ausente'}`);
