import { baseURL } from "@/resources";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/meeting/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
