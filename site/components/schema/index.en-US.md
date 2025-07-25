---
title: Schema - Universal Configuration
order: 1
nav:
  title: Components
  order: 100
  path: /components
---

# Schema - Universal Configuration

## When to Use

Schema is a universal configuration system for defining and managing component configuration structures. Use it when you need to:

- Unify configuration management for multiple components
- Dynamically generate forms and tables
- Implement configuration-driven interfaces

## Code Examples

### Basic Usage

```tsx
import { Schema } from '@ant-design/pro-components';

export default () => {
  return <Schema />;
};
```

## API

| Parameter | Description             | Type     | Default |
| --------- | ----------------------- | -------- | ------- |
| schema    | Configuration structure | `object` | -       |

## Design Guidelines

The Schema component follows the "configuration as code" design philosophy, defining interface structures through JSON configuration.
