async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch. Status code ${response.status}`);
    } else {
      return (await response.json()) as T;
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export { fetcher };
