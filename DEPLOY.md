# Deploying to Cloudflare Pages

Your rebuilt site lives in the `site/` folder. Cloudflare Pages is free, fast, has unlimited bandwidth, and includes free SSL.

## Asset files

Already placed in `site/assets/images/`:
- ✅ `logo-white.png` — White logo (used on homepage hero + every page header)
- ✅ `logo-black.png` — Black version kept in case you want it later
- ✅ `logo-circle.png` — Circle version kept in case you want it later
- ✅ `favicon.png` — Browser tab icon
- ✅ `about-main.jpg` — Your headshot for the About page

Optional (not blocking deploy):
- `og-image.jpg` (1200×630) — image shown when your site is shared on Facebook/Instagram/iMessage. Drop it at `site/assets/images/og-image.jpg`.

---

## Step 1 — Sign up for Cloudflare

Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) → **Sign up** (free). Email and password is fine.

## Step 2 — Create a Pages project

1. Once logged in, on the left sidebar click **Workers & Pages**.
2. Click **Create application** → **Pages** tab → **Upload assets**.
3. Give your project a name like `timothydavidson` (this becomes your free `.pages.dev` URL: `timothydavidson.pages.dev`). Lowercase letters, numbers, and hyphens only.
4. Click **Create project**.

## Step 3 — Upload your site folder

1. Cloudflare shows a drag-and-drop box that says "Drag and drop your project folder here".
2. Open your file explorer to the workspace and find the `site/` folder.
3. Drag the **entire `site/` folder** onto Cloudflare's box.
4. Wait ~30 seconds for it to upload and process.
5. Click **Deploy site**.
6. You'll see a success page with your live URL: `https://timothydavidson.pages.dev`. Click it — your site is live.

## Step 4 — Connect your custom domain (timothydavidsonproductions.com)

There are two paths depending on where your domain currently lives. Most likely it's at Squarespace right now.

### Path A (recommended): Move DNS management to Cloudflare

This is the smoothest setup and gives you free DNS, free DDoS protection, and faster lookups. You don't have to move the registration — just where DNS is managed.

1. In Cloudflare dashboard: top-left **Add site** → enter `timothydavidsonproductions.com`.
2. Cloudflare scans your existing DNS records and copies them. Pick the **Free** plan.
3. Cloudflare gives you two **nameservers** (something like `ana.ns.cloudflare.com` and `bob.ns.cloudflare.com`).
4. Log into your current domain registrar (likely Squarespace's domain panel, or wherever you bought the domain) and change the nameservers to the two Cloudflare ones.
5. Wait 5 min – 24 hrs (usually under an hour) for the change to propagate.
6. Once Cloudflare confirms, go back to your **Pages project → Custom domains → Set up a custom domain** → enter `timothydavidsonproductions.com`. Cloudflare auto-creates the DNS records.
7. Repeat for `www.timothydavidsonproductions.com` so both versions work.

### Path B: Keep DNS where it is, add CNAME records

1. In your Pages project: **Custom domains → Set up a custom domain** → enter `timothydavidsonproductions.com`.
2. Cloudflare shows you a CNAME record (like `timothydavidson.pages.dev`).
3. Log into wherever your DNS is managed and add that CNAME record.
4. Wait for DNS propagation, then refresh the Pages dashboard until the domain shows as Active.

**⚠️ Important:** Don't cancel Squarespace yet. Confirm `https://timothydavidsonproductions.com` loads your new site first. Once it's working for a day or two, then cancel.

## Step 5 — HTTPS (automatic)

Cloudflare provisions a free SSL certificate automatically. You don't do anything — within 5–10 minutes of step 4, your site will load with a padlock icon at `https://timothydavidsonproductions.com`.

---

## Updating the site later

**To make a change:**
1. Edit any `.html`, `.css`, or `.js` file in your local `site/` folder.
2. In Cloudflare: **Workers & Pages → your project → Create deployment → Upload assets**.
3. Drag the `site/` folder again. New version goes live in ~30 seconds.
4. Cloudflare keeps every old deploy, so you can roll back from the **Deployments** tab if you ever break something.

**Want auto-deploy from a GitHub repo?** That's available later — Pages → Settings → Connect to Git. Optional, not needed.

---

## Optional polish

1. Drop `og-image.jpg` (1200×630) into `site/assets/images/` for social sharing previews.
2. If you want the exact Futura PT font back, sign up for [Adobe Fonts](https://fonts.adobe.com/) (included with any Creative Cloud plan) and swap the Google Fonts link in each HTML `<head>` for your Typekit link. The current font (Jost) is a close free alternative.
3. The 2 SoundCloud playlists with `secret_token` in their URLs are technically unlisted. If you made them public on SoundCloud, edit `audio.html` and strip the `%3Fsecret_token%3D...` portion of those URLs.
4. **Domain renewal note:** If you'd like to save money long-term, Cloudflare also offers domain registration at near-cost (typically $10/year for `.com`, no markup). Once your site is on Cloudflare, you can transfer the domain registration itself to Cloudflare from **Domain Registration → Transfer Domains**. Optional.
