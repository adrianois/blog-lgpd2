# Auditoria de Dependências Externas - Blog LGPD
# Última atualização: Maio 2026

## Dependências Externas Críticas

### Marked.js (Markdown Parser)
- **URL**: https://cdn.jsdelivr.net/npm/marked/marked.min.js
- **Versão**: Latest (via CDN)
- **Uso**: Conversão de Markdown para HTML nos artigos
- **Riscos**: XSS se não configurado adequadamente
- **Mitigações**:
  - SRI implementado
  - Sanitização com DOMPurify
  - Configurações seguras do Marked.js
- **Última verificação**: Maio 2026
- **Hash SRI**: sha384-948ahk4ZmxYVYOc+rxN1H2gM1EJ2Duhp7uHtZ4WSLkV4Vtx5MUqnV+l7u9B+jFv+

### DOMPurify (HTML Sanitizer)
- **URL**: https://cdn.jsdelivr.net/npm/dompurify@3/dist/purify.min.js
- **Versão**: 3.x (latest)
- **Uso**: Sanitização de HTML gerado pelo Marked.js
- **Riscos**: Baixo (biblioteca de sanitização confiável)
- **Mitigações**: SRI implementado
- **Última verificação**: Maio 2026

### Google Fonts
- **URLs**:
  - https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Source+Sans+3:wght@300;400;500;600&display=swap
  - https://fonts.gstatic.com (font files)
- **Uso**: Fontes tipográficas
- **Riscos**: Baixo (serviço confiável)
- **Mitigações**: CSP permite apenas domínios específicos

## Monitoramento de Segurança

### Verificações Regulares
- [ ] Verificar vulnerabilidades conhecidas no Marked.js
- [ ] Atualizar hashes SRI quando dependências forem atualizadas
- [ ] Revisar CSP headers anualmente
- [ ] Testar sanitização de conteúdo com payloads XSS

### Ferramentas de Monitoramento
- OWASP Dependency Check (quando aplicável)
- Manual review de changelogs
- SRI hash verification

## Contato para Atualizações
Em caso de vulnerabilidades descobertas, contatar: security@bloglgpd.dev