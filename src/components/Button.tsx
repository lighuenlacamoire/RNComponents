import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import platform from '../theme/platform';

type Props = {
  content: JSX.Element | string;
  inverse: boolean;
  disabled: boolean;
  onPress: <T>(a: T) => T | Promise<T> | void | Promise<void>;
  color: string;
  style: StyleProp<ViewStyle> | null;
};

/**
 * Componente de Boton Rectangular
 * @param {JSX.Element | string} content Texto o contenido de tipo <Text />
 * @param {boolean} inverse Indica si es tipo inverso
 * @param {boolean} disabled Indica si esta deshabilitado
 * @param {Function} onPress Funcion al presionar el boton
 * @param {string} color Color principal para aplicar
 * @param {StyleProp<ViewStyle> | null} style Estilo para el boton
 */
const Button = (props: Partial<Props>): JSX.Element => {
  const { content, inverse, disabled, onPress, style } = props;

  let buttonStyle = styles.buttonDefault;
  let textStyle = styles.textDefault;

  if (inverse) {
    buttonStyle = { ...buttonStyle, ...styles.buttonSecondary };
    textStyle = { ...textStyle, ...styles.textSecondary };
  } else {
    buttonStyle = { ...buttonStyle, ...styles.buttonPrimary };
    textStyle = { ...textStyle, ...styles.textPrimary };
  }

  if (disabled) {
    buttonStyle = { ...buttonStyle, ...styles.buttonDisabled };
    textStyle = { ...textStyle, ...styles.textDisabled };
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        activeOpacity={inverse ? 0.5 : 0.6}
        disabled={disabled}
        style={[buttonStyle, style]}
        onPress={onPress}>
        <Text style={[textStyle]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

/**
 * Estilos del Boton
 */
const styles = StyleSheet.create({
  buttonDefault: {
    borderRadius: 8
  },
  buttonDisabled: {
    backgroundColor: platform.colors.disabled
  },
  buttonPrimary: {
    backgroundColor: platform.colors.primary
  },
  buttonSecondary: {
    backgroundColor: platform.colors.secondary
  },
  textDefault: {
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'capitalize'
  },
  textDisabled: {
    color: platform.colors.subtitle
  },
  textPrimary: {
    color: '#FFF'
  },
  textSecondary: {
    color: platform.colors.primary
  }
})
