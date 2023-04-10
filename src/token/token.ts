export const setToken = (token: string): void => {
  localStorage.setItem('access_token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('access_token');
};

export const deleteToken = (): void => {
  localStorage.removeItem('access_token');
};
