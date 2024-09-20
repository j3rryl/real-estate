export const truncateText = (description: string, wordLimit: number = 120) => {
  return description.length > wordLimit
    ? description.slice(0, wordLimit) + "..."
    : description;
};

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const headers = {
    ...options.headers,
  };
  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw { status: res.status, statusText: res.statusText };
  }

  return res.json();
};
