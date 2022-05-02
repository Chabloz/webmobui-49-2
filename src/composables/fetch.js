import { ref } from "vue";

export function useFetch(url) {
  const data = ref(null);

  async function loadJson() {
    const res = await fetch(url, {
      credentials: 'include'
    });
    const json = await res.json();
    data.value = json;
  }

  loadJson();

  return { data, refetch: loadJson};

}