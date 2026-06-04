# Port Store Launch Hub

A GitHub Pages app that reads live from a Monday.com board and renders a launch day hub for the team.

---

## Files

```
launch-hub/
├── index.html    ← The app (open this in a browser)
└── config.js     ← Update this for each new launch
```

---

## How to deploy (GitHub Pages)

1. Create a new GitHub repository (e.g. `port-store-launch-hub`)
2. Upload both `index.html` and `config.js`
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your hub will be live at `https://yourusername.github.io/port-store-launch-hub/`

---

## How to reuse for a new launch

1. **In Monday.com** — go to board `Retail Launches 2026` (ID: 18388701820)
2. Clear out the items in each group and add your new launch's data
3. Update `config.js` with the new launch name if needed
4. Push — the page auto-refreshes from Monday on every load

### Board structure (board ID: 18388701820)

| Group | Purpose | Key columns |
|---|---|---|
| 🚀 Launch Info | Launch name, date, time | Name, Launch Date, Launch Time |
| 🕐 Timeline | Tasks with times & owners | Name, Launch Time, Owner, Notes |
| 🔗 Resources | Links to assets & docs | Name, URL |
| 👕 Products | Products with BC URLs | Name, BigCommerce URL |
| ⚠️ Important Notes | Warnings & reminders | Name, Notes, Severity |

### Column IDs (for reference)

| Column | ID |
|---|---|
| Launch Date | `date_mm40n3fz` |
| Launch Time | `text_mm4027gn` |
| Owner | `text_mm40pc5j` |
| Notes | `long_text_mm405hdn` |
| URL | `link_mm40t1br` |
| BigCommerce URL | `link_mm40z35t` |
| Severity | `color_mm403mv0` |

---

## Product images

Images are auto-fetched from BigCommerce using the product URL stored in the **BigCommerce URL** column. No manual image management needed — just paste the product URL and the hub pulls the image automatically.

---

## Security note

The API token in `config.js` has read/write access to your Monday account. For a public GitHub repo, consider using GitHub Actions to inject the token at build time via a secret, rather than committing it directly.
