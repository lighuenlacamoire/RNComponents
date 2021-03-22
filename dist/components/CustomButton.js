import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#fff',
    }
});
;
var defaultProps = {
    customContainerClass: {},
    buttonColor: 'blue',
    disabled: false
};
var CustomButton = function (props) {
    var handlePress = function () {
        props.onClick ? props.onClick() : null;
    };
    var title = props.text || 'Native Button';
    return (React.createElement(View, { style: [styles.viewContainer, props.customContainerClass] }, props.children ? props.children : React.createElement(Button, { title: title, onPress: handlePress, color: props.buttonColor })));
};
CustomButton.defaultProps = defaultProps;
export default CustomButton;
//# sourceMappingURL=CustomButton.js.map