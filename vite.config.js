System.register(["vite", "@vitejs/plugin-react"], function (exports_1, context_1) {
    "use strict";
    var vite_1, plugin_react_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vite_1_1) {
                vite_1 = vite_1_1;
            },
            function (plugin_react_1_1) {
                plugin_react_1 = plugin_react_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vite_1.defineConfig({
                plugins: [plugin_react_1.default()],
                optimizeDeps: {
                    esbuildOptions: {
                        define: {
                            global: 'globalThis',
                        },
                    },
                },
                resolve: {
                    alias: {
                        './runtimeConfig': './runtimeConfig.browser',
                        'react-dom/client': 'react-dom/client',
                    },
                },
            }));
        }
    };
});
//# sourceMappingURL=vite.config.js.map