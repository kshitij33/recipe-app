import { useQuery } from "@tanstack/react-query";

export function pause(milliseconds: number) {
  const start = Date.now();
  while (Date.now() - start <= milliseconds) {
    // setTimeout(()=>{
    //     console.log("hi");
    // }, milliseconds);
  }
}

const fetchRecipes = async () => {
    const response = await fetch("http://localhost:5000/recipes");
      pause(1000);
  if (!response.ok) {
    throw new Error("Something wrong with response");
  }
  return response.json();
};

export function useRecipes() {
  // return useQuery(["recipes"], fetchRecipes)
  return useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });
}
