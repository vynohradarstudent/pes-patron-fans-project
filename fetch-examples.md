Метод для авторизації
``` js
async function login(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
```

Метод для реєстрації
``` js
async function register(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
```

Метод для отримання інформації про користувача
``` js
async function getMe(url = "", token) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}
```