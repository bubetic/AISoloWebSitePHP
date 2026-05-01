# AISoloWebSitePHP

A small PHP website that mirrors the colours and structure of
[phpdmsite.azurewebsites.net](https://phpdmsite.azurewebsites.net/).

This is a UI-only clone: the Home, Login, Register, and Reset Password pages
match the look of the live site, and a clean PDO-based SQL connection is
included so real auth handlers can be plugged in later.

## Pages

- `index.php` - landing page with the same hero text as the reference site
- `login.php` - styled login form (button is stubbed in `script.js`)
- `register.php` - styled signup form (button is stubbed in `script.js`)
- `resetPassword.php` - styled reset-request form (button is stubbed in `script.js`)

## Palette

- Background: `rgb(206, 233, 201)` (mint)
- Nav / footer / text: `rgb(40, 40, 40)` (near-black)
- Font: `IntroBlackRegular.otf` (bundled)

## Project layout

```
AISoloWebSitePHP/
|-- .gitignore
|-- ENV_TEMPLATE
|-- README.md
|-- IntroBlackRegular.otf
|-- header.php
|-- footer.php
|-- index.php
|-- login.php
|-- register.php
|-- resetPassword.php
|-- style.css
|-- script.js
|-- tables.sql
`-- php/
    |-- db.php       (PDO SQL connection)
    `-- config.php   (env loader; gitignored)
```

## Local setup

1. Copy `ENV_TEMPLATE` to `.env` and fill in your MySQL credentials.
2. Create the schema:
   ```
   mysql -u root -p < tables.sql
   ```
3. Serve the folder with PHP's built-in server:
   ```
   php -S localhost:8000
   ```
4. Open <http://localhost:8000>.

`php/config.php` reads the `.env` file at the project root and exposes
`DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`, `DB_CHARSET`.
`php/db.php` exports a `db()` function returning a singleton `PDO` instance.

## Notes

- `php/config.php` is gitignored so credentials never reach the repo.
- The Login / Register / Reset buttons are wired to placeholder JS handlers
  for now - they show an alert instead of submitting. Replace the bodies of
  `login()`, `register()`, and `resetPassword()` in `script.js` (and add real
  endpoints under `php/`) when you wire up authentication.
