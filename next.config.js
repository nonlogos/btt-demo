/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true,
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
