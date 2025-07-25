---
title: PageContainer - 页容器
order: 2
nav:
  title: 组件
  order: 100
  path: /components
---

# PageContainer - 页容器

## 何时使用

PageContainer 是一个页面容器组件，提供了统一的页面布局结构。当您需要：

- 统一的页面标题、面包屑导航
- 页面级别的操作按钮
- 标准化的页面布局

## 代码演示

### 基础用法

```tsx
import { PageContainer } from '@ant-design/pro-components';

export default () => {
  return (
    <PageContainer title="页面标题" subTitle="页面副标题">
      页面内容
    </PageContainer>
  );
};
```

## API

| 参数     | 说明       | 类型        | 默认值 |
| -------- | ---------- | ----------- | ------ |
| title    | 页面标题   | `string`    | -      |
| subTitle | 页面副标题 | `string`    | -      |
| extra    | 页面操作区 | `ReactNode` | -      |

## 设计规范

PageContainer 提供了标准化的页面布局，确保整个应用的页面结构一致性。
