function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactNative = require('react-native');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var platform = {
  isIphoneX: false,
  isIOS: false,
  colors: {
    primary: '#2097F6',
    secondary: '#E6F4FF',
    error: '',
    title: '#5A5A5A',
    subtitle: '#929292',
    disabled: '#E9E9E9',
    form: '#FFF'
  }
};

var Button = function Button(props) {
  var content = props.content,
      inverse = props.inverse,
      disabled = props.disabled,
      onPress = props.onPress,
      style = props.style;
  var buttonStyle = styles.buttonDefault;
  var textStyle = styles.textDefault;

  if (inverse) {
    buttonStyle = _extends({}, buttonStyle, styles.buttonSecondary);
    textStyle = _extends({}, textStyle, styles.textSecondary);
  } else {
    buttonStyle = _extends({}, buttonStyle, styles.buttonPrimary);
    textStyle = _extends({}, textStyle, styles.textPrimary);
  }

  if (disabled) {
    buttonStyle = _extends({}, buttonStyle, styles.buttonDisabled);
    textStyle = _extends({}, textStyle, styles.textDisabled);
  }

  return React.createElement(reactNative.View, {
    style: {
      flex: 1
    }
  }, React.createElement(reactNative.TouchableOpacity, {
    activeOpacity: inverse ? 0.5 : 0.6,
    disabled: disabled,
    style: [buttonStyle, style],
    onPress: onPress
  }, React.createElement(reactNative.Text, {
    style: [textStyle]
  }, content)));
};
var styles = reactNative.StyleSheet.create({
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
});

exports.Button = Button;
//# sourceMappingURL=index.js.map
