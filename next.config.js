/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: 'export', // Important for static export
  assetPrefix: isGithubPages ? '/myspaceportfolio/' : '',
  basePath: isGithubPages ? '/myspaceportfolio
' : '',
};

module.exports = nextConfig;
