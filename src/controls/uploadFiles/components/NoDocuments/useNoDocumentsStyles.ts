import * as React from 'react';

import { IIconStyles } from '@fluentui/react/lib/Icon';
import { IStackStyles } from '@fluentui/react/lib/Stack';
import {
  IProcessedStyleSet,
  mergeStyles,
  mergeStyleSets,
} from '@fluentui/react/lib/Styling';
import { useAtom } from 'jotai';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { globalState } from '../../jotai/atoms';

export interface NoDocumentsStyles {
  stackContainerStyles: IStackStyles;
  controlStyles: IProcessedStyleSet<{
    iconStyles: IIconStyles;
  }>;
}

export const useNoDocumentsStyles = (): NoDocumentsStyles => {
  const [appGlobalState] = useAtom(globalState);
  const { themeVariant } = appGlobalState;

  const controlStyles = React.useMemo(
    () =>
      mergeStyleSets({
        iconStyles: mergeStyles({
          fontSize: 34,
          color: themeVariant?.palette?.themePrimary,
        }) as IIconStyles,
      }),
    [themeVariant]
  );

  const stackContainerStyles: IStackStyles = React.useMemo(() => {
    return {
      root: {
        width: '100%',
        height: 450,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeVariant?.palette?.neutralLighterAlt,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: themeVariant?.palette?.neutralTertiaryAlt,
      },
    };
  }, [themeVariant]);

  return { stackContainerStyles, controlStyles };
};
