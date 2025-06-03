import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const theme = {
  // Colors
  colors: {
    primary: '#e63946',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    transparent: 'transparent',
  },

  // Typography
  typography: {
    sizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
    },
    weights: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },

  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    base: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },

  // Border Radius
  borderRadius: {
    none: 0,
    sm: 4,
    base: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  // Shadows
  shadows: {
    none: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    base: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
  },

  // Screen Dimensions
  screen: {
    width,
    height,
  },

  // Layout
  layout: {
    container: {
      paddingHorizontal: 16,
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
  },

  // Common Styles
  common: {
    // Card styles
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      ...{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    },

    // Button styles
    button: {
      primary: {
        backgroundColor: '#e63946',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      },
      secondary: {
        backgroundColor: '#6c757d',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      },
      outline: {
        backgroundColor: 'transparent',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e63946',
      },
    },

    // Input styles
    input: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#ced4da',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
    },

    // List item styles
    listItem: {
      backgroundColor: '#ffffff',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6',
    },
  },
};
