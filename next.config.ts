import type { NextConfig } from "next";

// const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressHostname = "pixelgamesstudio.org"
const wordpressUrl = process.env.WORDPRESS_URL;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns:[
          {
            protocol: "https",
            hostname: wordpressHostname,
            port: ":3000",
            pathname: "/wordpress/wp-content/uploads/**",
          },
        ]
      ,
  },
  async redirects() {
    if (!wordpressUrl) {
      return [];
    }
    return [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
