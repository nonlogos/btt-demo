/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = null;
let basePath = '';

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
