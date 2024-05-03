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

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export { signUp, login };
