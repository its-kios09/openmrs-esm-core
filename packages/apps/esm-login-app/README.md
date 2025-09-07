# @digihmis/esm-login-app

A customized login microfrontend for DigiHMIS built on the OpenMRS SPA framework.

## Overview

This package provides the authentication and session management interface for DigiHMIS, including:

- **Loading Page**: Initial application loading screen with DigiHMIS branding
- **Login Page**: User authentication interface with form validation
- **Location Picker**: Healthcare facility/location selection for users with multiple access points

## Installation

```bash
npm install @digihmis/esm-login-app
```

## Usage

### In an OpenMRS SPA ImportMap

```json
{
  "frontendModules": {
    "@digihmis/esm-login-app": "^8.0.1"
  }
}
```

---

**Version**: 8.0.1  
**Maintainer**: DigiHMIS Team  
**Keywords**: digihmis, openmrs, microfrontends, healthcare, spa