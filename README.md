# Cypress - Assignment

Este projeto tem como objetivo apresentar um desafio completo de testes automatizados utilizando Cypress para validar tanto a API REST quanto a interface web disponibilizadas em:

🧪 API: https://serverest.dev

🖥️ Frontend: https://front.serverest.dev

## ✅ Tecnologias e Ferramentas

**Cypress** para automação de testes end-to-end

**Faker** para geração dinâmica de dados de teste

**GitHub Actions** para integração contínua (CI)

**Cypress Cloud** para execução remota, dashboards e rastreabilidade de execuções

## 🎯 Objetivo do Projeto

Criar uma suíte de testes confiável e organizada que possa:

- Validar fluxos completos da aplicação (Cadastro, Login, Produtos, Carrinho, etc.)

- Verificar integrações entre frontend e backend

- Servir como exercício prático ou avaliação técnica

## ⚙️ Funcionalidades e Estratégias Adotadas

### ✅ Integração Contínua com GitHub Actions

O projeto executa os testes automaticamente a cada push ou pull request usando GitHub Actions, com integração direta com o Cypress Cloud. Isso garante feedback rápido e visibilidade em tempo real dos testes.

### ✅ Cypress Cloud

Os testes são enviados para o Cypress Cloud, onde é possível acompanhar:

- Status de execuções

- Screenshots e vídeos

- Histórico de builds

### ✅ Geração de Dados com Faker

Todos os testes utilizam dados randômicos gerados pela biblioteca Faker para:

- Evitar conflitos de dados

- Garantir testes independentes

- Simular cenários mais realistas

### ✅ Tipagem de Custom Commands

Todos os comandos customizados foram tipados com suporte a autocompletar e verificação de tipos. Isso:

- Melhora a experiência durante a escrita dos testes

- Facilita o onboarding de novos desenvolvedores/testadores

- Garante maior controle e manutenção do projeto

## 🧪 Como Executar Localmente

### Instale as dependências

`npm install`

### Execute os testes no modo interativo

`npx cypress open`

### Execute os testes em modo headless

`npx cypress run`

## ☁️ Executar no GitHub Actions

Os testes são executados automaticamente via CI. Você pode visualizar o fluxo no menu Actions do repositório.

## 👨‍💻 Autor

Projeto desenvolvido por **Victor Gomes de Camilo**

SDET focado em qualidade de software, automação e integração contínua.
