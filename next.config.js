/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
	// trim off `<owner>/`
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

	assetPrefix = `/${repo}/`;
	basePath = `/${repo}`;
}
const nextConfig = {
	assetPrefix: assetPrefix,
	basePath: basePath,
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
	webpack: (config, { isServer }) => {
		const prefix = config.assetPrefix ?? config.basePath ?? '';
		config.module.rules.push({
			test: /\.(mp4|pdf|webm)$/,
			type: 'asset',
			generator: {
				filename: 'static/chunks/[path][name].[hash][ext]',
			},
		});

		return config;
	},
};

module.exports = nextConfig;
