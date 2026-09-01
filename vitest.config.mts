import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        // The surface is server-side: routes, CDP, process control. No DOM.
        environment: 'node',
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        globals: true
    }
});
