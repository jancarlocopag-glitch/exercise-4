# Pixel Notes – Next.js Note App (Exercise 4)

## Run
```
npm install
npm run dev
```
Open http://localhost:3000

## Login rules
- Email must not be empty and must be a `@gmail.com` address
- Password must be more than 6 characters (change `MIN_PASSWORD_LENGTH` in `app/page.js`)
- If all checks pass → redirected to `/welcome` (placeholder page)

## Bonus
- Error message shown below the Login button
- Logout button on the notes page returns to the login screen
