export async function signUpUser(username: string, password: string) {
  const response = await fetch("http://localhost:8080/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return response;
}