import { __assign } from "tslib";
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import platform from '../theme/platform';
/**
 * Componente de Boton Rectangular
 * @param {JSX.Element | string} content Texto o contenido de tipo <Text />
 * @param {boolean} inverse Indica si es tipo inverso
 * @param {boolean} disabled Indica si esta deshabilitado
 * @param {Function} onPress Funcion al presionar el boton
 * @param {string} color Color principal para aplicar
 * @param {StyleProp<ViewStyle> | null} style Estilo para el boton
 */
var Button = function (props) {
    var content = props.content, inverse = props.inverse, disabled = props.disabled, onPress = props.onPress, color = props.color, style = props.style;
    var buttonStyle = styles.buttonDefault;
    var textStyle = styles.textDefault;
    if (inverse) {
        buttonStyle = __assign(__assign({}, buttonStyle), styles.buttonSecondary);
        textStyle = __assign(__assign({}, textStyle), styles.textSecondary);
    }
    else {
        buttonStyle = __assign(__assign(__assign({}, buttonStyle), styles.buttonPrimary), { backgroundColor: color });
        textStyle = __assign(__assign({}, textStyle), styles.textPrimary);
    }
    if (disabled) {
        buttonStyle = __assign(__assign({}, buttonStyle), styles.buttonDisabled);
        textStyle = __assign(__assign({}, textStyle), styles.textDisabled);
    }
    return (React.createElement(View, { style: { flex: 1 } },
        React.createElement(TouchableOpacity, { activeOpacity: inverse ? 0.5 : 0.6, disabled: disabled, style: [buttonStyle, style], onPress: onPress },
            React.createElement(Text, { style: [textStyle] }, content))));
};
export default Button;
/**
 * Estilos del Boton
 */
var styles = StyleSheet.create({
    buttonDefault: {
        borderRadius: 8,
    },
    buttonDisabled: {
        backgroundColor: platform.colors.disabled,
    },
    buttonPrimary: {
        backgroundColor: platform.colors.primary,
    },
    buttonSecondary: {
        backgroundColor: platform.colors.secondary,
    },
    textDefault: {
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: '500',
        fontSize: 16,
        textTransform: 'capitalize',
    },
    textDisabled: {
        color: platform.colors.subtitle,
    },
    textPrimary: {
        color: '#FFF',
    },
    textSecondary: {
        color: platform.colors.primary,
    },
});
//# sourceMappingURL=Button.js.map