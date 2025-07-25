---
title: Schema - 通用配置
order: 1
nav:
  title: 组件
  order: 100
  path: /components
---

# Schema - 通用配置

## 何时使用

Schema 是一个通用的配置系统，用于定义和管理组件的配置结构。当您需要：

- 统一管理多个组件的配置
- 动态生成表单和表格
- 实现配置驱动的界面

## 代码演示

### 基础用法

```tsx
import { Schema } from '@ant-design/pro-components';

export default () => {
  return <Schema />;
};
```

## API

| 参数   | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| schema | 配置结构 | `object` | -      |

## 设计规范

Schema 组件遵循配置即代码的设计理念，通过 JSON 配置来定义界面结构。
