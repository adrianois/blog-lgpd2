# Guia de Criptografia para não técnicos

**Autor:** Adriano Israel  
**Data:** 28 mar 2025  
**Tempo de leitura:** 8 min  
**Categorias:** Segurança, Criptografia, Técnico

## Introdução

Você não precisa entender como um motor funciona para saber que seu carro precisa de revisão. Da mesma forma, você não precisa entender algoritmos matemáticos para saber que seus dados precisam de criptografia — e para cobrar dos seus fornecedores que ela esteja ativa.

Este guia foi escrito para gestores, DPOs, advogados e servidores públicos que precisam tomar decisões sobre proteção de dados sem formação técnica em TI. O objetivo não é ensinar a programar — é dar o vocabulário e o critério para fazer as perguntas certas.

> **Por que isso importa para a LGPD:** O art. 46 da LGPD exige medidas de segurança técnicas e administrativas aptas a proteger dados pessoais. A criptografia é citada explicitamente em regulamentações da ANPD como medida técnica esperada para dados sensíveis e dados em alto volume. Não adotá-la é um risco de conformidade concreto.

## O que é criptografia, em termos simples

Criptografia é o processo de **transformar informação legível em informação ilegível** para quem não tem a "chave" para decifrá-la. É como colocar uma mensagem em um cofre: qualquer pessoa pode ver o cofre, mas só quem tem a combinação consegue abrir.

Na prática: quando você envia seus dados bancários em um site com "https://", esses dados são criptografados antes de sair do seu computador. Mesmo que alguém intercepte o tráfego no meio do caminho, o que verá é uma sequência ininteligível de caracteres — não os seus dados reais.

## Os 3 tipos de criptografia que você precisa conhecer

### Tipo 01: Criptografia em trânsito (dados em movimento)

Protege os dados enquanto eles se movem de um ponto a outro — do seu computador para um servidor, de um sistema para outro. O protocolo mais comum é o TLS (que produz o famoso "https://"). Se um sistema que armazena dados pessoais não usa HTTPS, os dados trafegam abertos — qualquer um na mesma rede pode interceptar.

### Tipo 02: Criptografia em repouso (dados armazenados)

Protege os dados enquanto estão guardados — em servidores, bancos de dados, discos rígidos, pendrives. Se o servidor onde seu sistema está hospedado for invadido, os dados criptografados em repouso são inúteis para o invasor — ele não tem a chave para decifrá-los. Esse é o tipo menos implementado e o que mais causa problemas em incidentes de segurança.

### Tipo 03: Criptografia ponta a ponta (E2E)

O nível mais elevado de proteção: os dados são criptografados no dispositivo do remetente e só decifrados no dispositivo do destinatário. Nem o servidor no meio consegue ler o conteúdo. É o tipo usado pelo WhatsApp para mensagens. Para comunicações que envolvam dados pessoais sensíveis, é a proteção ideal.

## As perguntas certas para fazer aos seus fornecedores

Você não precisa saber implementar criptografia — precisa saber **cobrar que ela exista**. Quando contratar ou avaliar um sistema que armazena dados pessoais, faça estas perguntas:

| Pergunta | Resposta esperada | Sinal de alerta |
|---------|-------------------|---|
| Os dados são criptografados em trânsito? | "Sim, usamos TLS 1.2 ou superior" | "Sim, temos HTTPS" sem especificar versão |
| Os dados estão criptografados em repouso no banco de dados? | "Sim, usamos AES-256" ou equivalente | Hesitação ou "é seguro por outros meios" |
| As senhas dos usuários são armazenadas como hash? | "Sim, usamos bcrypt ou Argon2" | "Sim, armazenamos a senha de forma segura" |
| Quem tem acesso às chaves de criptografia? | Processo documentado com acesso restrito | "Só nossa equipe de TI" sem mais detalhes |
| Os backups também são criptografados? | "Sim, com a mesma política de criptografia" | "Os backups são armazenados com segurança" |

> **💡 Dica para contratos:** Inclua no contrato com fornecedores de sistemas a exigência de criptografia AES-256 em repouso e TLS 1.2+ em trânsito. São padrões da indústria, gratuitos de implementar e verificáveis. Se o fornecedor resistir a essa cláusula, é um sinal de que os dados não estão bem protegidos.

## Criptografia no dia a dia: onde você já usa e não sabe

A boa notícia é que muitos dos serviços que você usa já aplicam criptografia automaticamente:

- **HTTPS no navegador:** O cadeado na barra de endereços indica que a conexão está criptografada em trânsito. Sites sem HTTPS devem ser evitados para qualquer operação com dados pessoais.
- **WhatsApp e Signal:** Usam criptografia ponta a ponta por padrão. Conversas com dados sensíveis de cidadãos devem usar canais com E2E.
- **Google Drive e OneDrive:** Criptografam os arquivos em repouso e em trânsito. São opções aceitáveis para armazenamento de documentos institucionais, desde que com controle de acesso adequado.
- **Smartphones modernos:** A maioria dos smartphones iOS e Android (versões recentes) tem a memória criptografada por padrão. Habilitar o PIN/biometria ativa essa proteção.

## Criptografia e a LGPD: o que a ANPD espera

A ANPD não define um padrão técnico único obrigatório para criptografia, mas suas regulamentações e guias orientam que:

- Dados sensíveis devem ter proteção técnica reforçada — a criptografia é a medida mais citada
- Dados armazenados em dispositivos móveis ou mídias removíveis devem ser criptografados
- Em caso de incidente, a criptografia pode ser um fator mitigante: dados criptografados vazados são menos prejudiciais do que dados em texto claro
- A ausência de criptografia em sistemas que tratam dados pessoais é considerada falha de medida de segurança para fins de análise de sanção

> **⚠ Atenção: criptografia não é anonimização:** Dados criptografados ainda são dados pessoais para fins da LGPD — porque podem ser decifrados com a chave correta. Dados anonimizados, quando a anonimização é irreversível, deixam de ser dados pessoais. Não confunda os dois conceitos: são proteções diferentes, com efeitos jurídicos diferentes.

## Checklist de criptografia para gestores

Use este checklist para avaliar se sua organização tem o mínimo em termos de criptografia:

- ✅ O site e todos os sistemas da organização usam HTTPS (TLS 1.2+)
- ✅ Os bancos de dados com dados pessoais têm criptografia em repouso
- ✅ As senhas dos usuários são armazenadas como hash (não em texto puro)
- ✅ Os backups são criptografados e armazenados em local separado
- ✅ Dispositivos móveis institucionais têm criptografia e PIN habilitados
- ✅ Pendrives e HDs externos usados para dados pessoais são criptografados
- ✅ Contratos com fornecedores incluem requisitos de criptografia
- ✅ Há processo documentado para gestão das chaves de criptografia

## Conclusão: criptografia é infraestrutura, não luxo

A criptografia deixou de ser um recurso de organizações sofisticadas. Hoje é um padrão básico esperado de qualquer sistema que trate dados pessoais — e, com a LGPD, é uma obrigação legal implícita.

O gestor ou DPO que entende os conceitos básicos de criptografia consegue fazer as perguntas certas, incluir as cláusulas contratuais adequadas e identificar quando um fornecedor está deixando dados pessoais expostos. Isso, por si só, é suficiente para reduzir significativamente o risco de incidentes de segurança e de sanções da ANPD.

Não precisa saber fazer — precisa saber exigir.

---

**Tags:** Criptografia, Segurança da Informação, LGPD, TLS, HTTPS, Proteção de Dados
