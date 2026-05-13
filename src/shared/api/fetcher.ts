export const get = async <T>(endpoint: string): Promise<T | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`${res.status}`);

    return (await res.json()) as T;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
