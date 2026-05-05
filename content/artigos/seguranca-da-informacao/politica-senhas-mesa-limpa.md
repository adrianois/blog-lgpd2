# Política de Senhas e Mesa Limpa: o básico que ninguém faz

**Autor:** Adriano Israel  
**Data:** 18 abr 2025  
**Tempo de leitura:** 9 min  
**Categorias:** Segurança, Senhas, Mesa Limpa

## Introdução

Estudos de segurança da informação apontam que entre 60% e 80% dos incidentes de violação de dados envolvem credenciais comprometidas ou acesso físico indevido. Em outras palavras: **a maioria dos vazamentos não acontece por ataques sofisticados de hackers — acontece porque alguém usou "123456" como senha ou deixou um documento sigiloso em cima da mesa**.

A Política de Senhas e a Política de Mesa Limpa e Tela Bloqueada são as duas medidas de menor custo e maior impacto em segurança da informação. E, paradoxalmente, são as menos implementadas de forma consistente.

> **⚠ Impacto na LGPD:** O art. 46 da LGPD exige que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas, aptas a proteger dados pessoais de acessos não autorizados. Senhas fracas e documentos expostos são falhas diretas nessa obrigação legal.

## Parte 1: Política de Senhas

### Por que senhas fracas ainda são um problema em 2025?

Apesar de décadas de alertas, as senhas mais usadas no Brasil ainda incluem variações de "123456", "senha", o nome da empresa e datas de aniversário. O motivo é simples: **senhas complexas são difíceis de lembrar** — e sem uma política clara e ferramentas de apoio, as pessoas inevitavelmente escolhem o caminho mais fácil.

### O que uma boa Política de Senhas deve conter

| Elemento | Requisito Mínimo | Recomendado |
|----------|---|---|
| **Comprimento** | Mínimo 8 caracteres | Mínimo 12 caracteres |
| **Complexidade** | Letras + números | Letras + números + símbolos |
| **Troca periódica** | A cada 90 dias | A cada 180 dias com MFA ativo |
| **Reutilização** | Proibir as últimas 5 senhas | Proibir as últimas 12 senhas |
| **Compartilhamento** | Estritamente proibido | Estritamente proibido |
| **Senhas padrão** | Trocar no primeiro acesso | Trocar no primeiro acesso |
| **MFA / 2FA** | Para sistemas críticos | Para todos os sistemas |

> **💡 A melhor alternativa às senhas difíceis:** Em vez de senhas complexas e difíceis de lembrar, incentive o uso de **frases-senha** (passphrases). "Meu-cachorro-chama-Rex-2025!" tem 26 caracteres, é fácil de lembrar e extremamente difícil de quebrar — muito mais seguro do que "Tr@b@lh0!" e sem o esforço de memorização.

### Autenticação Multifator (MFA): não é mais opcional

O MFA (ou 2FA — autenticação de dois fatores) adiciona uma segunda camada de verificação além da senha. Mesmo que a senha seja comprometida, o invasor não consegue acessar o sistema sem o segundo fator. Para sistemas que contêm dados pessoais, o MFA deve ser considerado **obrigatório**, não opcional.

**Onde ativar primeiro:**
- E-mail corporativo
- Sistemas de RH
- Folha de pagamento
- Acesso remoto (VPN)

**Opções gratuitas de MFA:**
- Google Authenticator
- Microsoft Authenticator
- Authy

**Custo:** Zero para a maioria dos sistemas — é uma configuração, não um produto

### Gerenciadores de senha: a solução para o problema de memorização

A única forma de ter senhas únicas e complexas para cada sistema sem precisar memorizá-las é usar um gerenciador de senhas. Ferramentas como **Bitwarden** (gratuito e open source) permitem que o servidor tenha uma senha master forte e deixe o gerenciador criar e armazenar senhas únicas e complexas para cada sistema.

## Parte 2: Política de Mesa Limpa e Tela Bloqueada

### O que é a Política de Mesa Limpa?

A política de mesa limpa (*clean desk policy*) estabelece que, ao se ausentar da estação de trabalho — especialmente ao final do expediente — o servidor deve garantir que **nenhum documento físico ou dispositivo de armazenamento contendo dados pessoais ou informações sensíveis fique exposto ou desprotegido**.

### O que está em jogo

Um funcionário de uma câmara municipal deixou sobre sua mesa, ao sair para o almoço, uma lista impressa com nome, CPF e dados de saúde de servidores aposentados. Um visitante que passou pelo corredor fotografou o documento com o celular. Esse é um incidente de segurança real — e o tratamento inadequado de dados que ele representa pode resultar em sanção da ANPD.

### As 5 regras de ouro da Mesa Limpa

- **Documentos físicos:** Ao se ausentar, guardar em gaveta ou armário trancado. Nunca deixar visíveis em cima da mesa.
- **Dispositivos de armazenamento:** Pendrives, HDs externos e cartões de memória devem ser guardados quando não estiverem em uso.
- **Impressões:** Nunca deixar documentos impressos na impressora sem retirar imediatamente. Impressoras compartilhadas são um risco sério.
- **Descarte:** Documentos com dados pessoais devem ser destruídos com picotadora — nunca jogados no lixo comum.
- **Whiteboard e quadros:** Dados pessoais ou informações sensíveis anotados em quadros devem ser apagados antes de sair da sala.

### Tela Bloqueada: o complemento digital da Mesa Limpa

A política de tela bloqueada determina que o computador deve ser bloqueado **sempre que o servidor se afastar da estação de trabalho** — mesmo que por poucos minutos. No Windows: `Win + L`. No Mac: `Ctrl + Cmd + Q`.

Além do bloqueio manual, configure o bloqueio automático após 5 minutos de inatividade em todos os equipamentos da organização. Essa é uma configuração simples de aplicar por GPO (política de grupo) em ambientes Windows.

> **Regra de ouro:** Trate a tela do seu computador como trataria um documento sigiloso em papel. Você não deixaria um prontuário de paciente aberto sobre a mesa enquanto vai ao banheiro. Não deixe o sistema de RH aberto na tela pelos mesmos motivos.

## Como implementar as duas políticas na sua organização

### Passo 01: Documentação — formalizar as políticas em documento oficial

Crie um único documento — "Política de Segurança da Informação" — que contenha as regras de senha, mesa limpa e tela bloqueada. Deve ser aprovado pela direção, publicado em canal interno acessível a todos os servidores e revisado anualmente.

### Passo 02: Treinamento — comunicar e treinar toda a equipe

Políticas que existem só no papel não funcionam. Realize um treinamento de 1 hora com todos os servidores, explicando o porquê das regras (não apenas o quê), demonstrando como usar o gerenciador de senhas e o MFA, e simulando situações práticas de mesa limpa.

### Passo 03: Técnica — aplicar controles técnicos

Configure o bloqueio automático de tela em todos os equipamentos. Ative o MFA nos sistemas críticos. Se possível, implante um gerenciador de senhas corporativo. Esses controles técnicos *reforçam* a política — não substituem o treinamento.

### Passo 04: Fiscalização — fazer rondas periódicas de verificação

O DPO ou um gestor designado deve fazer verificações periódicas (mensais ou bimensais) do cumprimento da política de mesa limpa — especialmente no final do expediente. Não para punir, mas para identificar onde há resistência ou dificuldade e corrigir antes de um incidente.

## Conclusão: segurança começa no comportamento

Nenhum firewall, nenhum antivírus e nenhum sistema de DLP substitui um servidor que sabe criar uma senha forte, usar o MFA e deixar a mesa limpa ao fim do dia. A tecnologia complementa o comportamento humano — mas nunca o substitui.

As políticas descritas neste artigo custam zero reais para implementar. O único investimento necessário é tempo de treinamento e comprometimento da liderança. E o retorno — em termos de redução de risco de incidentes e conformidade com a LGPD — é imediato.

---

**Tags:** Segurança da Informação, Senhas, Mesa Limpa, LGPD, MFA, Treinamento
