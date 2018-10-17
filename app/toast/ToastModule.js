
'use strict';

const {
    NativeModules
} = require('react-native');

const ReactToast = NativeModules.ToastModule;
const Toast = {
    show(text) {
            ReactToast.show(text,100);
    },
};
module.exports = Toast;
