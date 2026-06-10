/**
 * Server-side fetch wrapper.
 * Use this in Server Components / Route Handlers instead of Axios.
 * Leverages Next.js extended fetch (caching, revalidation, deduplication).
 */

type FetchOptions = RequestInit & {
  revalidate?: number | false;
  tags?: string[];
};

export async function serverFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate, tags, ...rest } = options;

  const res = await fetch(url, {
    ...rest,
    next: {
      ...(revalidate !== undefined && { revalidate }),
      ...(tags && { tags }),
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
