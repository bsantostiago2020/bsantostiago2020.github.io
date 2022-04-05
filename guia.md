# GUIA BÁSICO DE COMANDOS GIT

Referência: <https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/>

---

## Configure a ferramenta
Configure informações de usuário para todos os repositórios locais

`git config --global user.name "[nome]"`

Configura o nome que você quer ligado às suas transações de commit

`git config --global user.email "[endereco-de-email]"`

Configura o email que você quer ligado às suas transações de commit

---

## Crie repositórios
Inicie um novo repositório ou obtenha de uma URL existente

`git init [nome-do-projeto]`

Cria um novo repositório local com um nome especificado

`git clone [url]`

Baixa um projeto e seu histórico de versão inteiro

---

## Suprima o monitoramento
Ignore arquivos e diretórios temporários

```
*.log
build/
temp-*
```

Um arquivo de texto chamado **.gitignore** suprime o versionamento acidental de arquivos e diretórios correspondentes aos padrões especificados

`git ls-files --others --ignored --exclude-standard`

Lista todos os arquivos ignorados neste projeto

---

## Faça mudanças
Revise edições e crie uma transação de commit

`git status`

Lista todos os arquivos novos ou modificados para serem commitados

`git add [arquivo]`

Faz o snapshot de um arquivo na preparação para versionamento

`git reset [arquivo]`

Retira o arquivo da área de preparação, mas preserva seu conteúdo

`git commit -m "[mensagem descritiva]"`

Grava o snapshot permanentemente do arquivo no histórico de versão

---

# Revise o histórico
Navegue e inspecione a evolução dos arquivos do projeto

`git log`

Lista o histórico de versões para o branch atual

---


## Desfaça commits
Apague enganos e crie um histórico substituto

`git reset [commit]`

Desfaz todos os commits depois de [commit], preservando mudanças locais

`git reset --hard [commit]`

Descarta todo histórico e mudanças para o commit especificado

---

## Sincronize mudanças
Registre um repositório remoto e troque o histórico de versão

`git fetch [nome-remoto]`

Baixe todo o histórico de um repositório remoto

`git merge [nome-remoto]/[branch]`

Combina o branch remoto ao branch local atual

`git push [alias] [branch]`

Envia todos os commits do branch local para o GitHub

`git pull`

Baixa o histórico e incorpora as mudanças