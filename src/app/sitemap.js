export default function sitemap() {
  const baseUrl = "https://www.trustpointsecurityagency.sl";

  const routes = [
    "",
    "/services",
    "/industries",
    "/about",
    "/why-choose-us",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}