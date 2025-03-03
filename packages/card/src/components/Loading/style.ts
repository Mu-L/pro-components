﻿import type { GenerateStyle, ProAliasToken } from '@ant-design/pro-utils';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';

export interface ProToken extends ProAliasToken {
  componentCls: string;
}

const genProStyle: GenerateStyle<ProToken> = (token) => {
  return {
    [token.componentCls]: {
      '&-loading': {
        overflow: 'hidden',
      },
      '&-loading &-body': {
        userSelect: 'none',
      },
      [`${token.componentCls}-loading-content`]: {
        width: '100%',
        p: {
          marginBlock: 0,
          marginInline: 0,
        },
      },
      [`${token.componentCls}-loading-block`]: {
        height: '14px',
        marginBlock: '4px',
        background: `linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))`,
        backgroundSize: '600% 600%',
        borderRadius: token.borderRadius,
        animationName: 'card-loading',
        animationDuration: '1.4s',
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite',
      },
      '@keyframes card-loading': {
        '0%': { backgroundPosition: '0 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0 50 % ' },
      },
    },
  };
};

export function useStyle(prefixCls: string) {
  return useAntdStyle('ProCardLoading', (token) => {
    const proToken: ProToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };

    return [genProStyle(proToken)];
  });
}
