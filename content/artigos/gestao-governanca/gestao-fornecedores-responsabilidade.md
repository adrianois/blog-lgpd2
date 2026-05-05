# Gestão de fornecedores: como evitar responsabilidade solidária na LGPD

**Autor:** Adriano Israel  
**Data:** 05 abr 2025  
**Tempo de leitura:** 9 min  
**Categorias:** Governança, Fornecedores, Contratos

## Introdução

Um sistema de folha de pagamento de uma prefeitura é fornecido por uma empresa terceirizada. Um dia, essa empresa sofre um ataque de ransomware. Os dados de 3 mil servidores municipais — nome, CPF, salário, dados bancários — são vazados na internet.

Pergunta: quem é responsável perante a ANPD e perante os titulares? **Os dois: a prefeitura e a empresa fornecedora.**

Esse é o cerne da responsabilidade solidária na LGPD — e é exatamente por isso que a gestão de fornecedores é um dos pilares mais críticos de qualquer programa de conformidade, especialmente no setor público.

> **⚠ Base legal da responsabilidade solidária:** O art. 42 da LGPD estabelece que o operador responde solidariamente pelos danos causados quando agiu em descumprimento à legislação ou quando não seguiu as instruções lícitas do controlador. E o art. 44 prevê que o controlador responde por danos causados por operadores de dados que não atendam aos requisitos de segurança.

## Controlador e Operador: quem é quem

Para entender a responsabilidade solidária, é preciso entender esses dois papéis:

| Aspecto | Controlador | Operador |
|--------|------------|----------|
| **Quem é** | Quem decide o "quê" e o "porquê" do tratamento | Quem executa o tratamento conforme instruções do controlador |
| **Exemplo público** | A Prefeitura Municipal | A empresa de software de folha de pagamento |
| **Exemplo privado** | O hospital | A empresa de sistema de prontuários eletrônicos |
| **Responsabilidade** | Escolhe o operador e define as instruções | Segue as instruções do controlador |
| **Solidariedade** | Responde por danos causados pelo operador que escolheu mal | Responde por danos causados por descumprimento das instruções |

Na prática, qualquer empresa ou órgão que contrata um serviço de tecnologia que envolva dados pessoais é **controlador** e o fornecedor do serviço é **operador**. A relação deve ser formalizada por contrato com cláusulas específicas.

## Due Diligence de Fornecedores: antes de contratar

O primeiro passo para evitar responsabilidade solidária é **selecionar bem os fornecedores**. Antes de contratar qualquer empresa que terá acesso a dados pessoais, conduza uma due diligence básica:

### Verificação 01: Política de Privacidade e Segurança

O fornecedor tem uma Política de Privacidade publicada e atualizada? Tem uma Política de Segurança da Informação? Se a empresa não tem nem o básico publicado, é um sinal de alerta sério sobre sua maturidade em proteção de dados.

### Verificação 02: Encarregado de Dados (DPO)

O fornecedor tem um DPO nomeado? Há um canal de contato para assuntos de proteção de dados? A presença de um DPO indica que a empresa tem uma estrutura mínima de conformidade com a LGPD.

### Verificação 03: Histórico de incidentes

O fornecedor já teve incidentes de segurança noticiados ou registrados na ANPD? Uma busca simples no Google e no portal da ANPD pode revelar um histórico problemático que justifica não contratar ou exigir garantias adicionais.

### Verificação 04: Onde os dados são armazenados

Os dados ficarão no Brasil ou em servidores no exterior? Transferências internacionais de dados têm regras específicas na LGPD. Se os dados forem para fora do país, o fornecedor precisa garantir nível de proteção equivalente ao brasileiro.

## As cláusulas contratuais obrigatórias

Todo contrato com fornecedor que envolva tratamento de dados pessoais deve conter, no mínimo, as seguintes cláusulas:

### 1. Finalidade e instrução

O operador só pode tratar os dados para as finalidades expressamente autorizadas pelo controlador. Qualquer uso adicional é proibido e deve ser especificado como cláusula de vedação.

### 2. Obrigações de segurança

O fornecedor deve adotar medidas técnicas e organizacionais de segurança adequadas ao risco do tratamento. Liste as medidas mínimas exigidas: criptografia, controle de acesso, backup, gestão de vulnerabilidades.

### 3. Subcontratação

O fornecedor pode usar subcontratados (outros terceiros que acessam os dados)? Se sim, precisa da sua autorização prévia e os subcontratados devem estar vinculados às mesmas obrigações contratuais.

### 4. Notificação de incidentes

O fornecedor é obrigado a notificar o controlador sobre qualquer incidente de segurança que envolva os dados tratados, em prazo definido (recomendado: 24 horas após a constatação).

### 5. Eliminação ou devolução ao término

Ao término do contrato, o fornecedor deve eliminar ou devolver todos os dados pessoais tratados, conforme instrução do controlador, e fornecer comprovante da eliminação.

### 6. Auditoria e cooperação

O controlador tem o direito de auditar as práticas do operador — diretamente ou por terceiro designado. O operador deve cooperar com as autoridades de proteção de dados.

### 7. Responsabilidade e penalidades

Cláusula de responsabilidade civil por danos causados pelo descumprimento das obrigações de proteção de dados, com previsão de multa contratual e ressarcimento de custos de gestão do incidente.

> **💡 Para o setor público:** Em licitações, inclua um edital de critérios de habilitação que exija dos concorrentes: apresentação de Política de Privacidade atualizada, existência de DPO nomeado e declaração de conformidade com a LGPD. Isso filtra fornecedores sem estrutura mínima antes mesmo da contratação.

## Gestão contínua: após contratar

Contratar um fornecedor com cláusulas LGPD corretas é o começo, não o fim. A gestão de fornecedores deve ser contínua:

- **Inventário de operadores:** Mantenha uma lista atualizada de todos os fornecedores que têm acesso a dados pessoais, com o tipo de dado e a finalidade do tratamento.
- **Revisão periódica dos contratos:** Ao renovar contratos, revise as cláusulas LGPD e atualize conforme novas regulamentações da ANPD.
- **Monitoramento de incidentes:** Estabeleça um canal formal para que fornecedores notifiquem incidentes e defina o fluxo de resposta.
- **Avaliação de desempenho:** Inclua conformidade com a LGPD como critério de avaliação de desempenho dos fornecedores em contratos de longo prazo.

> **Caso prático:** Uma câmara municipal do interior de MS contratou um sistema de gestão de recursos humanos por R$ 800/mês. O contrato tinha 15 cláusulas — nenhuma sobre proteção de dados. O fornecedor sofreu um incidente e os dados de 45 servidores foram expostos. A câmara, como controladora, respondeu perante a ANPD por não ter incluído as cláusulas contratuais obrigatórias. O resultado foi uma advertência com determinação de adequação em 90 dias.

## Conclusão: a responsabilidade começa na escolha do fornecedor

A proteção de dados pessoais não termina na porta da sua organização. Ela se estende a todos os fornecedores e parceiros que, de alguma forma, têm acesso aos dados que você trata.

Implementar uma gestão de fornecedores orientada à LGPD não é burocracia — é gestão de risco. O custo de incluir uma cláusula contratual é zero. O custo de responder por um incidente causado por um fornecedor despreparado pode ser imensuravelmente maior.

---

**Tags:** Fornecedores, Responsabilidade Solidária, Contratos, LGPD, Governança, Operador
