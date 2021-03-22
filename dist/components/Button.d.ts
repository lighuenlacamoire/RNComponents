/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
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
declare const Button: (props: Partial<Props>) => JSX.Element;
export default Button;
