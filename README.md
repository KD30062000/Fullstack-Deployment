# Simple Next.js + FastAPI

A small fullstack starter designed for one DigitalOcean Droplet.

## Structure

- `frontend/` Next.js app on port 3000
- `backend/` FastAPI app on port 8000

## Run locally first

Use Node.js 20.9+ for the frontend. With `nvm`, run `nvm install 20 && nvm use 20` once in your terminal.

Start the backend:

```bash
cd backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

In a second terminal, start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`. The frontend calls the local API at `http://localhost:8000`.

## Deploy manually later

When you are ready, copy the project to an Ubuntu Droplet and configure the services there:

1. Install Node.js 20.9+, Python 3.12+, and Nginx on the VM.
2. Run the FastAPI app with Uvicorn on `127.0.0.1:8000`.
3. Build and run the Next.js app on `127.0.0.1:3000`.
4. Create `systemd` services so both apps restart automatically.
5. Configure Nginx to proxy `/` to Next.js and `/api` to FastAPI.
6. Point your domain to the Droplet and add HTTPS with Certbot.

The exact VM commands can be added when the Droplet is created and its domain, username, and Ubuntu version are known.

The application is intentionally stateless. Add a database service and environment variables when the app needs persistence or secrets.
