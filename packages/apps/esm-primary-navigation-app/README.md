# @digihmis/esm-primary-navigation-app

A microfrontend for rendering the primary navigation bar in OpenMRS SPA applications.

## Overview

This package provides the main navigation interface for OpenMRS Electronic Medical Record systems, including:

- **Top Navigation Bar**: Consistent navigation header across all OpenMRS applications
- **User Menu**: Authentication status, user profile, and logout functionality  
- **App Switcher**: Quick access to different OpenMRS modules and applications
- **Global Search**: Patient and clinical data search functionality
- **Notifications**: System alerts and messaging integration

## Installation

```bash
npm install @digihmis/esm-primary-navigation-app
```

## Usage

### In an OpenMRS SPA ImportMap

```json
{
  "frontendModules": {
    "@digihmis/esm-primary-navigation-app": "^5.0.0"
  }
}
```

### Extension Slots

- `top-nav-actions-slot`: Custom action buttons in the navigation bar
- `user-menu-items-slot`: Additional user menu items
- `app-menu-items-slot`: Custom application switcher items

---

**Version**: 5.0.0  
**Maintainer**: DigiHMIS Team  
**Keywords**: digihmis, microfrontends, navigation, healthcare, spa