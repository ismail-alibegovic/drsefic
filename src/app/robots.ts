import type { MetadataRoute } from "next";

// Demo koncept se ne indeksira – službena stranica poliklinike je sefic.ba.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
