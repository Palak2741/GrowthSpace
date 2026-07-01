# GrowthSpare Next.js Blog & CMS Integration

This project is built using Next.js (App Router) version 14.2.35 and is deployed to **Netlify** using native serverless hosting. It integrates **Sanity CMS** for dynamic content editing.

---

## 1. Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

---

## 2. Netlify Deployment Configuration

Next.js App Router works natively on Netlify without any custom adapter files.

### Environment Variables
Configure the following Environment Variables in your Netlify dashboard under **Site configuration > Environment variables**:

| Variable Name | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID | `yourProjectId` |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name | `production` |
| `NEXT_PUBLIC_SITE_URL` | Production website base URL | `https://growthspace.co` |
| `SANITY_REVALIDATE_SECRET` | Secret token verifying webhook calls | `yourSecretToken` |

### Netlify Build Settings
When you link your repository, Netlify automatically detects Next.js. Keep the default settings:
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`

---

## 3. Sanity CMS Webhook Integration (On-Demand Cache Revalidation)

To instantly purge the page cache when blog posts are modified in Sanity (without rebuilding the whole project):

1. Go to your **Sanity Management Console (sanity.io/manage)**, navigate to **Webhooks**, and click **Create Webhook**.
2. Set the **URL** to: `https://YOUR_DOMAIN.netlify.app/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET`.
3. Configure the webhook to trigger on `post` publishing.
