export function extractQueryParams(query: any) {
    const { difficulty = "", time = "" } = query;
    return { difficulty, time };
  }
  
  export function buildQueryString(query: { difficulty: string; time: string }) {
    return {
      pathname: "/categories",
      query,
    };
  }