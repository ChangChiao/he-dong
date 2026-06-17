import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "和東雕刻佛具行",
    short_name: "和東佛具",
    description:
      "彰化和美手工木雕神像、佛龕桌圍、祭祀禮器，傳承三代職人工藝",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#1A1612",
    icons: [
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
