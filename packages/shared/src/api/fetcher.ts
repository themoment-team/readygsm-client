interface ApiFetcherOptions {
  endpoint: string;
  context: string;
  errorMessage: string;
}

export const apiFetcher = async <T>({
  endpoint,
  context,
  errorMessage,
}: ApiFetcherOptions): Promise<T | undefined> => {
  try {
    // client/admin은 데이터 캐시가 분리돼 있어 admin의 updateTag가 client에 닿지 않으므로 캐시하지 않음
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error(`${res.status}`);

    return res.json() as Promise<T>;
  } catch (error) {
    console.error(`[${context}] ${errorMessage}`, error);
    return undefined;
  }
};
