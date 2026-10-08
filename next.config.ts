import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Lecteur de la base GeoIP : chargé tel quel par Node plutôt que bundlé
  serverExternalPackages: ['maxmind', 'mmdb-lib'],
};

export default withNextIntl(nextConfig);
