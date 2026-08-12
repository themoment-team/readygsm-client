interface ApiFetcherOptions {
  endpoint: string;
  context: string;
  errorMessage: string;
  tags?: string[];
}

export const apiFetcher = async <T>({
  endpoint,
  context,
  errorMessage,
  tags,
}: ApiFetcherOptions): Promise<T | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      next: { revalidate: 3600, tags },
    });

    if (!res.ok) throw new Error(`${res.status}`);

    return res.json() as Promise<T>;
  } catch (error) {
    console.error(`[${context}] ${errorMessage}`, error);
    return undefined;
  }
};
