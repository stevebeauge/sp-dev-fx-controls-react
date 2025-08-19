import React from 'react';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IStackStyles } from '@fluentui/react/lib/Stack';
import { FontWeights } from '@fluentui/react/lib/Styling';
import { ITextStyles } from '@fluentui/react/lib/Text';
import { useAtom } from 'jotai';

import { globalState } from '../../jotai/atoms/globalState';

export interface UploadFilesStyles {
  titleStyles: ITextStyles;
  mainContainer: IStackStyles;
}

export const useUploadFilesStyles = (): UploadFilesStyles => {
  const [appGlobalState] = useAtom(globalState);
  const { themeVariant } = appGlobalState;

  const titleStyles: ITextStyles = React.useMemo(() => {
    return {
      root: {
        paddingRight: 20,
        paddingLeft: 20,

        fontWeight: FontWeights.semibold,
      },
    };
  }, [themeVariant]);

  const mainContainer: IStackStyles = React.useMemo(() => {
    return {
      root: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      },
    };
  }, [themeVariant]);

  return { titleStyles, mainContainer };
};
