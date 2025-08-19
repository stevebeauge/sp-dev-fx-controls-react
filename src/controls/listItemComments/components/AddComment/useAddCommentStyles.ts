import { IDocumentCardStyles } from '@fluentui/react/lib/DocumentCard';
import { IStackStyles } from '@fluentui/react/lib/Stack';
import {
  IStyle,
  mergeStyleSets,
  type IProcessedStyleSet,
} from '@fluentui/react/lib/Styling';
import * as React from 'react';
import type { MentionsInputStyle } from 'react-mentions';
import { AppContext } from '../../common';

type AddCommentStyles = {
  documentCardUserStyles: Partial<IDocumentCardStyles>;
  deleteButtonContainerStyles: Partial<IStackStyles>;
  reactMentionStyles: MentionsInputStyle;
  itemContainerStyles: IStackStyles;
  searchMentionContainerStyles: Partial<IStackStyles>;
  mentionsClasses: IProcessedStyleSet<{ mention: IStyle }>;
  componentClasses: IProcessedStyleSet<{ container: IStyle }>;
};

export const useAddCommentStyles = (): AddCommentStyles => {
  // explicit return type
  const { theme } = React.useContext(AppContext);
  const itemContainerStyles: IStackStyles = {
    root: {
      paddingTop: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    } satisfies IStyle,
  };

  const deleteButtonContainerStyles: Partial<IStackStyles> = {
    root: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  };

  const searchMentionContainerStyles: Partial<IStackStyles> = {
    root: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'silver',
      width: '100%',
      boxSizing: 'border-box',
      ':focus': {
        borderColor: theme.themePrimary,
      },
      ':hover': {
        borderColor: theme.themePrimary,
        boxSizing: 'border-box',
      },
    },
  };

  const documentCardUserStyles: Partial<IDocumentCardStyles> = {
    root: {
      marginTop: 2,
      backgroundColor: theme?.white,
      boxShadow: '0 5px 15px rgba(50, 50, 90, .1)',
      boxSizing: 'border-box',
      ':hover': {
        borderColor: theme.themePrimary,
        backgroundColor: theme.neutralLighterAlt,
        borderWidth: 1,
        boxSizing: 'border-box',
      } as IStyle,
    } as IStyle,
  };

  const componentClasses = mergeStyleSets({
    container: {
      borderWidth: 1,
      borderStyle: 'solid',
      display: 'block',
      borderColor: 'silver',
      overflow: 'hidden',
      width: '100%',
      boxSizing: 'border-box',
      paddingTop: 1,
      paddingLeft: 1,
      ':focus': {
        borderWidth: 2,
        borderColor: theme.themePrimary,
        paddingTop: 0,
        paddingLeft: 0,
      },
      ':hover': {
        borderWidth: 2,
        borderColor: theme.themePrimary,
        paddingTop: 0,
        paddingLeft: 0,
      },
    } satisfies IStyle,
  });

  const mentionsClasses = mergeStyleSets({
    mention: {
      position: 'relative',
      zIndex: 9999,
      color: theme.themePrimary,
      pointerEvents: 'none',
    } satisfies IStyle,
  });

  const reactMentionStyles: MentionsInputStyle = {
    control: {
      backgroundColor: '#fff',
      fontSize: 12,
      border: 'none',
      fontWeight: 'normal',
      outlineColor: theme.themePrimary,
      borderRadius: 0,
    } satisfies IStyle,
    '&multiLine': {
      control: {
        border: 'none',
        fontFamily:
          '"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue"',
        minHeight: 35,
        fontSize: 14,
        fontWeight: 400,
        borderRadius: 0,
        height: 35, // Valeur par défaut
      },
      highlighter: {
        padding: 9,
        border: 'none',
        borderWidth: 0,
        borderRadius: 0,
      } satisfies IStyle,
      input: {
        padding: 9,
        border: 'none',
        outline: 'none',
      } satisfies IStyle,
    },

    '&singleLine': {
      display: 'inline-block' as const,
      height: 50,
      outlineColor: theme.themePrimary,
      border: 'none' as const,
      highlighter: {
        padding: 1,
        border: '1px inset transparent',
      } satisfies IStyle,
      input: {
        padding: 1,
        width: '100%',
        borderRadius: 0,
        border: 'none',
      } satisfies IStyle,
    },

    suggestions: {
      list: {
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.15)',
        fontSize: 14,
      },
      item: {
        padding: '5px 15px',
        borderBottom: '1px solid',
        borderBottomColor: theme.themeLight,
        '&focused': {
          backgroundColor: theme.neutralLighterAlt,
        },
      },
    },
  };

  return {
    documentCardUserStyles,
    deleteButtonContainerStyles,
    reactMentionStyles,
    itemContainerStyles,
    searchMentionContainerStyles,
    mentionsClasses,
    componentClasses,
  };
};
