export type Locale = "zh" | "en";

export function stripLocale(pathname: string): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (path === "/en/") return "/";
  if (path.startsWith("/en/")) return path.slice(3);
  return path;
}

export function localize(path: string, locale: Locale): string {
  const bare = path.startsWith("/") ? path : `/${path}`;
  const withSlash = bare.endsWith("/") ? bare : `${bare}/`;
  if (locale === "zh") return withSlash;
  return withSlash === "/" ? "/en/" : `/en${withSlash}`;
}

export function localizeHref(href: string, locale: Locale): string {
  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const path = hashAt >= 0 ? href.slice(0, hashAt) || "/" : href;
  return `${localize(path, locale)}${hash}`;
}

export function isoDay(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Shanghai",
  }).format(date);
}
