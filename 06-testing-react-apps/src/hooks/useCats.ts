import useSWR from "swr";

import { API_URL } from "../config";

export type Cat = {
  _id: string;
  tags: string[];
  owner: string;
  createdAt: string;
};

const fetcher = async (tag: string) => {
  const response = await fetch(`${API_URL}${tag ? `/${tag}` : ""}`);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};

export const useCats = (tag = "") => {
  const { data, error } = useSWR<Cat[]>(["cats", tag], () => fetcher(tag), {
    shouldRetryOnError: false,
  });

  return {
    cats: data,
    isLoading: !error && !data,
    isError: error,
  };
};
