const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()

/** @type {import('next').NextConfig} */

let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export",
  images: {
    unoptimized: envImageUnoptimize,
  },
};


module.exports = nextConfig;
