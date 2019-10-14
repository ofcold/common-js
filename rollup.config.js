import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
	input: './src/common.ts',
	output: [
		{ file: './dist/common.js', format: 'esm' },
		{ file: './dist/common.common.js', format: 'cjs' },
		{ file: './dist/common.iife.js', format: 'iife', name: 'Echo' },
	],
	plugins: [
		typescript(),
		babel({
			exclude: 'node_modules/**',
			presets: ['es2015-rollup', 'stage-2'],
			plugins: ['transform-object-assign'],
		}),
	],
};
