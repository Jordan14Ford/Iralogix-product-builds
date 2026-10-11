/** Prefix public-folder URLs when the site is built under a subpath. */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
