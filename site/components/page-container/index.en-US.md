---
title: PageContainer - Page Container
order: 2
nav:
  title: Components
  order: 100
  path: /components
---

# PageContainer - Page Container

## When to Use

PageContainer is a page container component that provides a unified page layout structure. Use it when you need:

- Unified page titles and breadcrumb navigation
- Page-level operation buttons
- Standardized page layouts

## Code Examples

### Basic Usage

```tsx
import { PageContainer } from '@ant-design/pro-components';

export default () => {
  return (
    <PageContainer title="Page Title" subTitle="Page Subtitle">
      Page Content
    </PageContainer>
  );
};
```

## API

| Parameter | Description         | Type        | Default |
| --------- | ------------------- | ----------- | ------- |
| title     | Page title          | `string`    | -       |
| subTitle  | Page subtitle       | `string`    | -       |
| extra     | Page operation area | `ReactNode` | -       |

## Design Guidelines

PageContainer provides standardized page layouts, ensuring consistency in page structure across the entire application.
