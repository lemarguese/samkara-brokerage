import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: 'export'
  /* config options here */
};

const withNextIntl = createNextIntlPlugin('./locale/request.ts');
export default withNextIntl(nextConfig);
