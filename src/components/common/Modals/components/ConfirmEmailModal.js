System.register(["aws-amplify", "../styles", "react", "../../../../aws-exports", "react-router-dom"], function (exports_1, context_1) {
    "use strict";
    var aws_amplify_1, styles_1, react_1, aws_amplify_2, aws_exports_1, react_router_dom_1, React, ConfirmEmailModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
                aws_amplify_2 = aws_amplify_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (aws_exports_1_1) {
                aws_exports_1 = aws_exports_1_1;
            },
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            }
        ],
        execute: function () {
            aws_amplify_2.Amplify.configure(aws_exports_1.default);
            exports_1("ConfirmEmailModal", ConfirmEmailModal = ({ email, toggleModal }) => {
                const navigate = react_router_dom_1.useNavigate();
                const [code, setCode] = react_1.useState('');
                const [modalTitle, setModalTitle] = react_1.useState('Confirm your email');
                const handleConfirm = async () => {
                    try {
                        await aws_amplify_1.Auth.confirmSignUp(email, code);
                        setModalTitle('Email confirmed');
                    }
                    catch (error) {
                        if (error.code === 'CodeMismatchException') {
                            setModalTitle('Incorrect code');
                        }
                        else if (error.code === 'ExpiredCodeException') {
                            setModalTitle('Code expired, please request a new one');
                        }
                        else if (error.code === 'LimitExceededException') {
                            setModalTitle('Too many attempts, please request a new code');
                        }
                        else if (error.toString().includes('Confirmation code cannot be empty')) {
                            setModalTitle('Please enter a code');
                        }
                    }
                };
                return (React.createElement(styles_1.ConfirmEmailModal, null,
                    React.createElement("div", { className: "confirmEmailModalContent" },
                        React.createElement("div", { className: "confirmEmailModalTitle" }, modalTitle),
                        React.createElement("div", { className: "confirmEmailModalText" },
                            React.createElement("p", null, "We have sent you a confirmation code to your email address. Please enter it below to confirm your email address.")),
                        React.createElement("input", { className: "confirmEmailModalInput", type: "text", placeholder: "Confirmation code", value: code, onChange: (e) => setCode(e.target.value) }),
                        React.createElement("div", { className: "confirmEmailModalButtons" },
                            React.createElement("button", { className: "confirmEmailButton", onClick: handleConfirm }, "Confirm"),
                            modalTitle === 'Email confirmed' && React.createElement("button", { className: "closeButton", onClick: () => { toggleModal(); navigate('/login'); } }, "Close")))));
            });
        }
    };
});
//# sourceMappingURL=ConfirmEmailModal.js.map