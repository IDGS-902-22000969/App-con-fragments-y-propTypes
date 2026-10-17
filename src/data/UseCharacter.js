import { useEffect, useState } from "react";

export function useCharacters(page) {
  const API_URL = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacter] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function loadCharacters() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}?page=${page}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        setCharacter(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadCharacters();
    return () => controller.abort();
  }, [page]);

  return { characters, totalPages, loading, error };
}