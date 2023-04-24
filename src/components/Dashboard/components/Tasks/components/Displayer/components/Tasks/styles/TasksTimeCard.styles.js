System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, TasksTimeCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("TasksTimeCard", TasksTimeCard = styled_components_1.default.div `
   
   background-color: ${props => {
                if (props.actualDay === 'monday')
                    return 'rgba(255, 0, 36, 1)';
                else if (props.actualDay === 'tuesday')
                    return 'rgba(255, 128, 0, 1)';
                else if (props.actualDay === 'wednesday')
                    return 'rgba(255, 206, 0, 1)';
                else if (props.actualDay === 'thursday')
                    return 'rgba(255, 0, 36, 0.7)';
                else if (props.actualDay === 'friday')
                    return 'rgba(255, 128, 0, 0.7)';
                else if (props.actualDay === 'saturday')
                    return 'rgba(255, 206, 0, 0.7)';
                else if (props.actualDay === 'sunday')
                    return 'rgba(255, 0, 36, 0.5)';
                else if (props.actualDay === 'conflict')
                    return 'rgba(0, 0, 0, 0.7)';
            }};
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
   border-radius: 10px;
   width: 85px;
   height: 85px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right:18px;
   margin-bottom: 14px;
   
   font-weight: 600;
   color: ${props => props.actualDay === 'conflict' ? 'rgba(255, 255, 255, 1)' : 'rgba(0,0,0,1) '};

`);
        }
    };
});
//# sourceMappingURL=TasksTimeCard.styles.js.map