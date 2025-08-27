# Project 1: Secure CI/CD

## Overview

Security scanning integrated into CI/CD pipeline for Node.js application. Automated checks for code vulnerabilities, dependency issues, and exposed secrets.

## Technologies

- Node.js - Application runtime and package manager
- GitHub Actions - CI/CD automation
- Semgrep - Static application security testing (SAST)
- npm audit - Software composition analysis (SCA)
- Gitleaks - Secret detection

## Implementation

### Security Scans
- SAST: Semgrep scans source code for vulnerabilities
- SCA: npm audit checks third-party dependencies for CVEs
- Secrets: Gitleaks detects exposed credentials or API tokens

### Workflow
1. Trigger: Push or PR to `Project-1/**`
2. Install npm dependencies
3. Run security scans:
   - Semgrep for code analysis
   - npm audit for dependency vulnerabilities
   - Gitleaks for secret detection
4. Pipeline fails if critical issues found

## Project Structure

```
Project-1-Secure-CI-CD/
├── .github/
│   └── workflows/
│       └── security.yml    # CI/CD pipeline
├── src/
│   └── app.js             # Node.js application
├── package.json           # Dependencies
└── .semgrep/
    └── rules.yml          # Custom security rules
```

## Pipeline Features

- Automated security checks on every commit
- Early vulnerability detection
- Fail-fast approach for critical issues
- Security scan results in GitHub Actions logs