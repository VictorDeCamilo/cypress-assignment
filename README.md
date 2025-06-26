# Cypress - Assignment

This project aims to present a complete automated testing challenge using Cypress to validate both the **REST API** and the **web interface** available at:

🧪 API: https://serverest.dev  
🖥️ Frontend: https://front.serverest.dev

## ✅ Technologies and Tools

- **Cypress** for end-to-end test automation
- **Faker** for dynamic test data generation
- **GitHub Actions** for Continuous Integration (CI)
- **Cypress Cloud** for remote execution, dashboards, and test traceability

## 🎯 Project Goal

Build a reliable and well-structured test suite capable of:

- Validating complete application flows (Register, Login, Products, Cart, etc.)
- Verifying frontend and backend integration
- Serving as a hands-on exercise or technical assessment

## ⚙️ Features and Strategies

### ✅ Continuous Integration with GitHub Actions

The project runs tests automatically on every push or pull request using GitHub Actions, with direct integration with Cypress Cloud. This ensures fast feedback and real-time visibility of executions.

### ✅ Cypress Cloud

Tests are uploaded to Cypress Cloud, allowing for:

- Execution status monitoring
- Screenshots and videos of test runs
- Build history and insights

### ✅ Data Generation with Faker

All tests use randomly generated data through the Faker library to:

- Avoid data collisions
- Ensure independent test execution
- Simulate more realistic scenarios

### ✅ Typed Custom Commands

All custom Cypress commands were fully typed to support autocomplete and type checking. This:

- Enhances developer experience while writing tests
- Makes onboarding easier for new team members
- Increases maintainability and consistency of the codebase

## 🧪 How to Run Locally

### Install dependencies

```bash
npm install
```

### Run tests in interactive mode

```bash
npx cypress open
```

### Run tests in headless mode

```bash
npx cypress run
```

## Run with GitHub Actions

Tests are automatically executed via CI. You can view the workflow runs in the Actions tab of the repository.

## 👨‍💻 Author

Project developed by **Victor Gomes de Camilo**

SDET focused on software quality, automation, and continuous integration.
