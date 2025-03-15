import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "dashboard",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Dashboard": "./pages/index", // Expondo o dashboard
        },
        shared: {},
        extraOptions: {}, // Necessário para evitar erro de tipagem
      })
    );
    return config;
  },
};

export default nextConfig;
