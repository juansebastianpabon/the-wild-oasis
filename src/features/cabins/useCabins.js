import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
export function useCabins() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    staleTime: 0,
  });

  return { isPending, cabins, error };
}
