/**
 * URL для входу користувача.
 * POST запит на цей URL дозволяє користувачам увійти до системи.
 * @constant {string}
 */
const LOGIN_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/auth/login";

/**
 * URL для реєстрації нового користувача.
 * POST запит на цей URL дозволяє зареєструвати нового користувача в системі.
 * @constant {string}
 */
const REGISTER_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/auth/register";

/**
 * URL для оновлення токену доступу.
 * POST запит на цей URL дозволяє отримати новий токен доступу на основі оновленого токену оновлення.
 * @constant {string}
 */
const REFRESH_TOKEN_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/auth/refresh";

/**
 * URL для отримання інформації про поточного користувача.
 * GET запит на цей URL повертає інформацію про користувача, що виконав запит (на основі токена).
 * @constant {string}
 */
const GET_ME_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/users/me";

/**
 * URL для отримання інформації про всіх користувачів.
 * GET запит на цей URL повертає список всіх користувачів.
 * @constant {string}
 */
const GET_ALL_USERS_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/users/all";

/**
 * URL для отримання інформації про всі ігри.
 * GET запит на цей URL повертає список всіх ігор.
 * @constant {string}
 */
const GET_ALL_GAMES_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/games/all";

/**
 * URL для створення нової гри.
 * POST запит на цей URL дозволяє адміністраторам створювати нову гру з використанням токена.
 * @constant {string}
 */
const CREATE_GAME_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/games/create";

/**
 * URL для отримання інформації про гру за її ID.
 * GET запит на цей URL, з додаванням ID гри в кінці, повертає інформацію про конкретну гру.
 * @constant {string}
 */
const GET_GAME_BY_ID_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/games/";

/**
 * URL для створення нового жанру.
 * POST запит на цей URL дозволяє адміністраторам створювати новий жанр з використанням токена.
 * @constant {string}
 */
const CREATE_GENRE_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/genre";

/**
 * URL для отримання інформації про всі жанри.
 * GET запит на цей URL повертає список всіх жанрів.
 * @constant {string}
 */
const GET_ALL_GENRES_URL = "https://maker-time-server-6dc0ba9fb22f.herokuapp.com/api/genre/all";

export {
    LOGIN_URL,
    REGISTER_URL,
    REFRESH_TOKEN_URL,
    GET_ALL_GENRES_URL,
    GET_ME_URL,
    CREATE_GAME_URL,
    CREATE_GENRE_URL,
    GET_GAME_BY_ID_URL,
    GET_ALL_GAMES_URL,
    GET_ALL_USERS_URL
};