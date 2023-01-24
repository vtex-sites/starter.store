const nextConfig = {
  distDir: ".faststore/.next",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, ".faststore"),
  },
};

module.exports = nextConfig;
