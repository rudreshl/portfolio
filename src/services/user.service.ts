import api from "@/lib/axios";
import type { User, ApiResponse } from "@/types";

export const userService = {
  getAll:   ()                          => api.get<ApiResponse<User[]>>("/users").then(r => r.data),
  getById:  (id: string)                => api.get<ApiResponse<User>>(`/users/${id}`).then(r => r.data),
  create:   (payload: Partial<User>)    => api.post<ApiResponse<User>>("/users", payload).then(r => r.data),
  update:   (id: string, payload: Partial<User>) => api.put<ApiResponse<User>>(`/users/${id}`, payload).then(r => r.data),
  delete:   (id: string)                => api.delete<ApiResponse<null>>(`/users/${id}`).then(r => r.data),
};
