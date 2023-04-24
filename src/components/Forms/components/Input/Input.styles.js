System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, Input;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("Input", Input = styled_components_1.default.input.attrs((props) => ({
                type: props.type || 'text',
                name: props.name,
                value: props.value,
                onChange: props.onChange,
                placeholder: props.placeholder,
                hasError: props.hasError,
            })) `
    width: 19vw;
    height: 5.5vh;
    padding-left: 25px;
    border: 1px solid ${props => props.hasError ? "#E9B425" : "#FFFFFF"};
    border-radius: 50px;
    color: #E0E0E0;
    background: #26292C;
    font-size: 16px;
    &:-webkit-autofill {
    -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:-webkit-autofill:hover {
        -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:placeholder {
        font-size: 12px;
    }

`);
        }
    };
});
//# sourceMappingURL=Input.styles.js.map