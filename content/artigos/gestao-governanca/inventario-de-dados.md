# Guia para criar um Inventário de Dados sem erros

**Autor:** Adriano Israel  
**Data:** 25 abr 2025  
**Tempo de leitura:** 10 min  
**Categorias:** Governança, RoPA, Mapeamento

## Introdução

O inventário de dados — formalmente chamado de **Registro de Atividades de Tratamento (RoPA)**, sigla em inglês para *Record of Processing Activities* — é a espinha dorsal de qualquer programa de conformidade com a LGPD. É o documento que responde, de forma organizada, à pergunta: *"Quais dados pessoais esta organização trata, como, por quê e com quem?"*

O problema é que a maioria dos inventários criados por organizações brasileiras — especialmente no setor público — está incompleta, desatualizada ou estruturada de forma incorreta. Neste guia, apresento o método que uso com clientes para criar um inventário que realmente funciona.

> **Por que o inventário importa além da conformidade:** Um RoPA bem feito permite identificar onde estão os maiores riscos de vazamento, quais tratamentos carecem de base legal, quais fornecedores têm acesso excessivo a dados e onde você pode otimizar processos eliminando coleta desnecessária.

## O que é e o que não é um inventário de dados

Antes de começar, é fundamental entender o que estamos construindo. O inventário de dados **não é**:

- Uma lista dos sistemas de TI da organização
- Um mapeamento de ativos de informação (isso é outra coisa)
- Um documento que lista apenas os bancos de dados formais

O inventário de dados **é** um registro de cada *atividade de tratamento* de dados pessoais, independentemente de ser feita em sistema, planilha, papel ou e-mail. O que importa é a atividade — o processo — não o suporte técnico onde os dados estão.

## As 12 colunas essenciais do RoPA

Um RoPA completo deve registrar, para cada atividade de tratamento, as seguintes informações:

| # | Campo | O que registrar |
|---|-------|---|
| 1 | **Nome da atividade** | Nome claro e descritivo (ex: "Gestão da folha de pagamento") |
| 2 | **Área responsável** | Setor ou departamento que realiza o tratamento |
| 3 | **Finalidade** | Por que esses dados são coletados e tratados |
| 4 | **Base legal** | Qual das 10 hipóteses legais da LGPD justifica o tratamento |
| 5 | **Categorias de dados** | Quais tipos de dados (nome, CPF, saúde, financeiro...) |
| 6 | **Dados sensíveis?** | Sim/Não — se sim, exige proteção reforçada |
| 7 | **Titulares** | Quem são as pessoas (servidores, cidadãos, fornecedores...) |
| 8 | **Volume estimado** | Quantos registros aproximadamente |
| 9 | **Origem dos dados** | Como são coletados (formulário, sistema, e-mail...) |
| 10 | **Compartilhamento** | Com quem são compartilhados (órgãos, fornecedores, público) |
| 11 | **Prazo de retenção** | Por quanto tempo os dados são mantidos e critério de descarte |
| 12 | **Medidas de segurança** | Controles técnicos e organizacionais aplicados |

## Passo a passo: como fazer na prática

### Passo 01: Mapeamento por entrevistas de área

Não dá para mapear dados sentado na sua mesa. Você precisa conversar com cada área da organização. Prepare um roteiro de perguntas simples e agende reuniões de 30 a 45 minutos com o responsável de cada setor. Pergunte: "O que você recebe de dado pessoal? Onde armazena? Com quem compartilha? Por quanto tempo guarda?"

### Passo 02: Inventário dos sistemas de TI

Junto com a área de TI, liste todos os sistemas, softwares, plataformas e aplicativos utilizados. Para cada um, identifique: quais dados pessoais processa, quem tem acesso, onde os dados ficam armazenados (servidor local, nuvem, datacenter do fornecedor) e se há contrato de processamento de dados com o fornecedor.

### Passo 03: Mapeamento do papel e dos e-mails

Este é o passo que mais surpreende os gestores: uma parcela enorme dos dados pessoais de organizações brasileiras ainda circula em papel e e-mail. Formulários físicos, ofícios, processos administrativos, e-mails com CPFs e dados de saúde anexados — tudo isso é dado pessoal que precisa entrar no inventário.

### Passo 04: Classificação e análise de risco

Com o levantamento em mãos, classifique cada atividade por nível de risco: baixo (dados comuns, uso interno, sem compartilhamento), médio (compartilhamento com terceiros, volume elevado) ou alto (dados sensíveis, dados de crianças, dados financeiros, alto volume). Atividades de alto risco podem exigir um RIPD (Relatório de Impacto).

### Passo 05: Validação e manutenção contínua

Valide o inventário com as áreas, obtenha aprovação da liderança e defina um processo de atualização. O RoPA deve ser atualizado sempre que um novo sistema for implantado, um processo for modificado ou um novo tratamento de dados for iniciado. Revisões semestrais são o mínimo recomendado.

## Os 7 erros mais comuns no RoPA

1. **Mapear sistemas em vez de atividades.** O inventário deve registrar o processo de negócio, não o software. "Sistema de RH" não é uma atividade — "Gestão de benefícios de servidores" é.

2. **Deixar campos em branco por incerteza.** Se você não sabe a base legal de um tratamento, isso é um problema de conformidade, não de preenchimento. Investigue e resolva.

3. **Não incluir tratamentos em papel.** Formulários físicos, processos impressos e arquivos em gaveta também são tratamentos de dados.

4. **Ignorar o e-mail como canal de tratamento.** Caixas de e-mail corporativas contêm dados pessoais de titulares e precisam ser consideradas.

5. **Não definir prazo de retenção.** A LGPD exige que os dados sejam eliminados quando não forem mais necessários. Sem prazo definido, não há como cumprir isso.

6. **Criar o inventário e nunca mais atualizá-lo.** Um RoPA desatualizado é pior do que nenhum — cria falsa sensação de conformidade.

7. **Não envolver as áreas de negócio.** O inventário criado apenas pela TI ou pelo jurídico sempre fica incompleto. É um trabalho multidisciplinar.

> **⚠ Ponto crítico: a base legal:** O campo mais importante do inventário é a base legal. Muitas organizações preenchem "consentimento" para tudo, mas no setor público a base mais comum é "cumprimento de obrigação legal" ou "execução de políticas públicas". Usar a base legal errada é tão grave quanto não ter base legal nenhuma.

## Ferramentas: precisa de software especial?

Não. Um inventário de dados pode ser feito e mantido em:

- **Planilha Excel ou Google Sheets** — suficiente para organizações de pequeno e médio porte
- **Notion ou Confluence** — boa opção para equipes que já usam essas ferramentas
- **Software específico de GRC** — vale o investimento apenas para organizações com +50 atividades de tratamento e equipe dedicada de privacidade

Para câmaras municipais e prefeituras de pequeno porte, a planilha Excel com as 12 colunas descritas neste artigo é mais do que suficiente — e está disponível para download gratuito na Central de Downloads deste blog.

> **💡 Dica de ouro:** Crie uma coluna adicional no seu RoPA chamada "Status de adequação" com os valores: ✅ Adequado, ⚠️ Em adequação, ❌ Não adequado. Isso transforma o inventário em um painel de gestão de conformidade, não apenas em um registro passivo.

## Conclusão: o inventário é o ponto de partida, não o destino

O Registro de Atividades de Tratamento não é um objetivo em si — é uma ferramenta de gestão. Um inventário bem feito permite que sua organização tome decisões de conformidade com base em dados reais, identifique riscos antes que se tornem incidentes e demonstre, de forma documentada, seu comprometimento com a proteção de dados.

Comece com o que você tem. Um inventário de 30% completo e atualizado é infinitamente mais valioso do que um inventário de 100% completo e desatualizado.

---

**Tags:** RoPA, Inventário de Dados, LGPD, Governança, Mapeamento, Base Legal
