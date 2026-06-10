import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { QUERY_KEYS } from "@/constants";

export function useUsers() {
  return useQuery({
    queryKey: QUERY_KEYS.users,
    queryFn:  () => userService.getAll(),
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.user(id),
    queryFn:  () => userService.getById(id),
    enabled:  !!id,
  });
}

export function useCreateUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: userService.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: QUERY_KEYS.users }),
  });
}
