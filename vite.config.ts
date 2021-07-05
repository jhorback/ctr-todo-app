import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // strip ~ from sass imports
  // ~ is used for vscode node_modules navigation within sass files
  resolve: {
    // @ts-ignore replacement can be a function
    alias: [{
        find: /^~.+/,
        replacement: (val: string) => val.replace(/^~/, "")
    }],
  }
})
