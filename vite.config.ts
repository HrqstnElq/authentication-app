import WindiCSS from "vite-plugin-windicss";
import reactRefresh from "@vitejs/plugin-react-refresh";
import {defineConfig} from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), WindiCSS()],
	esbuild: {
		jsxInject: 'import React from "react"',
	},
});
