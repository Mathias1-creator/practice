# Aquacraft Plumbing Website — Owner Guide
**Hi Ramzy! This guide explains how to make common edits to your website.**
You don't need any coding knowledge — just a free text editor (Notepad on Windows, TextEdit on Mac).

---

## The Files in This Folder

| File | What it is |
|---|---|
| `index.html` | The entire website — all text, links, and structure |
| `styles.css` | Controls colors, fonts, and layout (rarely needs editing) |
| `script.js` | Handles the menu and form — leave this alone |
| `/images/` | Folder for your real photos when you have them |
| `CLIENT-README.md` | This guide |

---

## How to Edit the Files

1. Right-click `index.html` → **Open with** → choose **Notepad** (Windows) or **TextEdit** (Mac).
2. Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for the text you want to change.
3. Make your edit, then **Save** (Ctrl+S / Cmd+S).
4. Double-click `index.html` in Finder/Explorer to preview in your browser.
5. When happy, drag the whole folder into Netlify Drop to go live (see bottom of this guide).

---

## Changing the Phone Number

Your phone number appears in **several places** in `index.html`. Search for:
```
+17077573838
```
Replace every instance with your new number in the format `+1XXXXXXXXXX` (no dashes or spaces — this is the dialing code). Also search for:
```
(707) 757-3838
```
and replace those with the display version of your new number (e.g. `(707) 555-0000`).

**There are roughly 6–8 places the number appears.** Use "Replace All" in your text editor to catch them all.

---

## Changing the Email Address

Search for `aquacraftplumbing.us@gmail.com` and replace every instance with your new email. It appears in 3 places (the nav, the contact section, and the footer).

---

## Updating Business Hours

Search for this block in `index.html`:
```
Mon–Fri: 8:00 AM – 6:00 PM
Saturday: 9:00 AM – 3:00 PM
Sunday: Emergency service only
```
You'll find it in the **Contact section** and the **Footer** — update both. Also update the JSON-LD block near the top of the file if your weekday hours change (search for `"opens": "08:00"` to find it).

---

## Swapping a Photo

**Option A — Use an Unsplash URL (no file needed):**
Find the `<img src="https://images.unsplash.com/...">` line for the photo you want to change and replace the URL with a new one. URLs must be publicly accessible.

**Option B — Use your own photo:**
1. Put your photo in the `/images/` folder.
2. Name it clearly (e.g. `ramzy-plumbing.jpg`).
3. In `index.html`, find the relevant `<img src="...">` line and change the `src` to `/images/ramzy-plumbing.jpg`.

The two main photos are:
- **Hero (top banner):** search for `hero.jpg` or `558618666` to find it.
- **About section:** search for `about.jpg` or `504328345` to find it.

Each photo has a comment above it (starting with `<!-- PHOTO SWAP:`) that tells you what kind of image works best there.

---

## Updating or Adding a Review

Find the **Reviews section** in `index.html` (search for `<!-- 7. REVIEWS`). Each review looks like this:

```html
<article class="review-card">
  ...
  <blockquote>
    <p>&ldquo;The review text goes here.&rdquo;</p>
  </blockquote>
  <footer><cite>Reviewer Name</cite>...</footer>
</article>
```

- To **edit** a review: change the text inside `<p>` and the name inside `<cite>`.
- To **add** a new review: copy an entire `<article class="review-card">...</article>` block and paste it after the last one, then fill in the new text and name.
- Use `&ldquo;` for an opening quote and `&rdquo;` for a closing quote. Or just use plain straight quotes `"`.

---

## Re-Deploying After Edits

1. Go to **netlify.com** and log in.
2. Click your site → **Deploys** tab → **Deploy dropzone** at the bottom.
3. Drag your entire project folder (the one containing `index.html`) onto that zone.
4. Wait about 30 seconds — your live site will update automatically.

---

## Setting Up the Contact Form

The form on the site currently shows a confirmation message but does **not** send emails. To enable real submissions, choose one of these free options:

**Option 1 — Tally (easiest):**
1. Sign up at [tally.so](https://tally.so) (free).
2. Build a matching form and click **Share → Embed**.
3. In `index.html`, find `<!-- TALLY EMBED: paste Tally iframe here at deploy -->` and paste the iframe code right below it. You can hide or remove the HTML form above it.

**Option 2 — Netlify Forms (automatic when hosted on Netlify):**
Find the `<form class="contact-form"` line and add the word `netlify` inside it, so it reads `<form class="contact-form" netlify ...>`. Netlify will handle submissions automatically — no backend needed.

---

## Questions?

If you get stuck, a web developer or even a tech-savvy friend can help with any of these edits in minutes — the code is clean and well-labeled throughout.

Good luck, Ramzy! The site is yours.
