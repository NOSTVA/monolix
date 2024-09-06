/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        "@node-rs/argon2": "commonjs @node-rs/argon2",
      });
    }
    return config;
  },
};

export default nextConfig;
