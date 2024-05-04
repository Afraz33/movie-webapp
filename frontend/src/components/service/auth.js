async function signUp(formData) {
  try {
    const response = await fetch(`http://localhost:8000/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

async function login(formData) {
  try {
    const response = await fetch(`http://localhost:8000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("User not found");
      }
      if (response.status === 401) {
        throw new Error("Incorrect Password");
      }
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export { signUp, login };
