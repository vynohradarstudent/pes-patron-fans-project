/**
 * Метод для авторизації
 * @param {object} data Об'єкт з електронною адресою та паролем користувача
 * @param {string} data.email Електронна адреса користувача
 * @param {string} data.password Пароль користувача
 *
 * @returns {object} Object з токенами доступу та оновлення
 * @returns {string} Object.accessToken Токен доступу для авторизованого користувача
 * @returns {string} Object.refreshToken Токен оновлення для поновлення токену доступу
 */
async function login(data = {}) {
    const response = await fetch(
        LOGIN_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    return await response.json();
}

/**
 * Метод для реєстрації нового користувача
 * @param {object} data Об'єкт з даними для реєстрації
 * @param {string} data.displayName Ім'я користувача
 * @param {string} data.email Електронна адреса користувача
 * @param {string} data.password Пароль користувача
 * @param {string} data.confirmPassword Підтвердження пароля користувача
 *
 * @returns {object} Object з токенами доступу та оновлення
 * @returns {string} Object.accessToken Токен доступу для авторизованого користувача
 * @returns {string} Object.refreshToken Токен оновлення для поновлення токену доступу
 */
async function register(data = {}) {
    const response = await fetch(
        REGISTER_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    return await response.json();
}

/**
 * Метод для отримання інформації про поточного користувача
 * @param {string} token Токен доступу для авторизованого користувача
 *
 * @returns {object} Object з інформацією про користувача
 * @returns {string} Object.displayName Ім'я користувача
 * @returns {string} Object.email Електронна адреса користувача
 * @returns {object} Object.role Об'єкт, що містить інформацію про роль користувача
 * @returns {string} Object.role.name Назва ролі користувача
 */
async function getMe(token) {
    const response = await fetch(
        GET_ME_URL,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
    return await response.json();
}

/**
 * Метод для отримання оновленого токену
 * @param {string} refreshToken Токен оновлення для поновлення токену доступу
 *
 * @returns {object} Object з токенами доступу та оновлення
 * @returns {string} Object.accessToken Токен доступу для авторизованого користувача
 * @returns {string} Object.refreshToken Токен оновлення для поновлення токену доступу
 */
async function refreshToken(refreshToken) {
    const response = await fetch(
        REFRESH_TOKEN_URL,
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${refreshToken}`,
                "Content-Type": "application/json"
            }
        });
    return await response.json();
}