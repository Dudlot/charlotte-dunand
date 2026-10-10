import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Lecteur de la base GeoIP : chargé tel quel par Node plutôt que bundlé
  serverExternalPackages: ['maxmind', 'mmdb-lib'],
  // Ne pas annoncer la technologie utilisée (en-tête x-powered-by)
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // HTTPS obligatoire pendant 1 an (sans includeSubDomains pour ne pas impacter d'autres sous-domaines)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          // Empêche d'afficher le site dans une iframe sur un autre domaine
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
