# Vercel Deployment Guide

This project is configured for deployment on Vercel.

## Deployment Steps

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository: `https://github.com/Parth7487/Villabellafinal.git`
   - Vercel will automatically detect the configuration

2. **Build Settings (Auto-detected):**
   - Build Command: `npm run build:client`
   - Output Directory: `dist/spa`
   - Install Command: `npm install` (or `pnpm install` if using pnpm)

3. **Environment Variables (if needed):**
   - Add any environment variables in Vercel dashboard
   - Example: `PING_MESSAGE` (optional)

4. **Deploy:**
   - Click "Deploy" and Vercel will build and deploy your application

## Project Structure for Vercel

- **Frontend**: Built SPA in `dist/spa/`
- **API Routes**: Serverless functions in `api/` folder
- **Configuration**: `vercel.json` handles routing and rewrites

## API Endpoints

- `GET /api/ping` - Health check endpoint
- `GET /api/demo` - Demo endpoint

All API routes are handled by the serverless function at `api/index.ts`.

## Notes

- The SPA routing is handled by Vercel rewrites (all non-API routes serve `index.html`)
- API routes are automatically routed to the serverless function
- Static assets are cached for optimal performance

