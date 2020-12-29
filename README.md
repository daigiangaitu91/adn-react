# AdonisJS sockets demo


## API 🔧

- `cd api`
- copy `.env.example` as `.env`
- change required values, like `CLEARDB_DATABASE_URL=mysql://username:password@host:port/database?reconnect=true` (or configure your db connection manually)
- `npm start` or `adonis serve --dev` if you have Adonis CLI installed (provides hot reloading)
  - `npm i -g @adonisjs/cli` 
  
## Front-end 🎀
- `cd frontend`
- open the `.env` file and change `REACT_APP_API_URL` if you want to use your local back-end
- `yarn start`
