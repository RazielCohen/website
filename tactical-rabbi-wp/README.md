# The Tactical Rabbi — WordPress / Elementor Integration

This package converts the HTML design concepts into a fully working WordPress site using **Elementor Free** and a custom child theme.

---

## What's Included

```
tactical-rabbi-wp/
├── theme/                        ← Hello Elementor child theme
│   ├── style.css                 ← design tokens, fonts, all utility classes
│   └── functions.php             ← enqueue styles, register Course CPT + meta
└── elementor-templates/
    ├── homepage.json             ← Homepage
    ├── about.json                ← About page
    ├── courses.json              ← Course catalog / listing page
    ├── contact.json              ← Contact page
    └── course-detail.json        ← Shared template for ALL 7 course pages
```

---

## Requirements

- WordPress 6.0+
- [Hello Elementor](https://wordpress.org/themes/hello-elementor/) theme (free, official)
- [Elementor](https://wordpress.org/plugins/elementor/) plugin (free tier)

---

## Step 1 — Install Hello Elementor

1. In WordPress admin → **Appearance → Themes → Add New**
2. Search for **Hello Elementor**, install and activate it

---

## Step 2 — Install the Child Theme

1. Zip the `theme/` folder and rename the zip to `tactical-rabbi.zip`
2. In WordPress admin → **Appearance → Themes → Add New → Upload Theme**
3. Upload `tactical-rabbi.zip` and activate it
4. The parent (Hello Elementor) stays installed; the child theme sits on top

---

## Step 3 — Import Elementor Templates

For each `.json` file in `elementor-templates/`:

1. In WordPress admin → **Pages → Add New**
2. Give the page a title (e.g. "Homepage", "About", "Courses", "Contact")
3. Click **Edit with Elementor**
4. In the Elementor editor, click the **folder icon** (Import Template) in the bottom panel → **My Templates → Import Templates**
5. Upload the corresponding `.json` file
6. Click **Insert** to apply the template to the page
7. Save and publish

### Page → Template mapping

| WordPress Page Title | Template File |
|---|---|
| Homepage | `homepage.json` |
| About | `about.json` |
| Courses | `courses.json` |
| Contact | `contact.json` |
| Each course (see below) | `course-detail.json` |

### Set the Homepage

**Settings → Reading → Your homepage displays → A static page** → select "Homepage"

---

## Step 4 — Set Up Course Pages

Each course is its own WordPress **Page** using the shared `course-detail.json` template. The template uses `[tr_meta key="..."]` shortcodes to pull per-course data from custom fields.

### Create a course page

1. **Pages → Add New**
2. Title: the course name (e.g. "Tactical Pistol")
3. Set the URL slug (e.g. `/courses/tactical-pistol`)
4. Open with Elementor → import `course-detail.json`
5. In the WordPress editor sidebar, scroll down to **Custom Fields** (enable via Screen Options if hidden)
6. Add these fields for each course:

| Field Name | Example Value |
|---|---|
| `tr_category` | Pistol |
| `tr_duration` | 4 Hours |
| `tr_location` | Henryville, PA |
| `tr_skill_level` | Beginner |
| `tr_group_size` | Up to 8 |
| `tr_price` | $275 |
| `tr_price_note` | per student |
| `tr_covers` | Grip and stance, Trigger control, Malfunction clearing, Position transitions, Stress inoculation drills |
| `tr_bring` | Your firearm (pistol/rifle), 200 rounds of ammunition, Eye and ear protection, Sturdy belt and holster |
| `tr_airtable_url` | (paste Airtable embed URL here) |

### Course slugs (use these exactly so the Courses page links work)

| Course | Slug |
|---|---|
| Tactical Pistol | `/courses/tactical-pistol` |
| Advanced Tactical Pistol | `/courses/advanced-tactical-pistol` |
| Tactical Rifle | `/courses/tactical-rifle` |
| Advanced Tactical Rifle | `/courses/advanced-tactical-rifle` |
| Active Shooter Response | `/courses/active-shooter-response` |
| Stress Box | `/courses/stress-box` |
| Private Lesson | `/courses/private-lesson` |

---

## Step 5 — Upload Images

Upload your course and hero images to **Media Library** and update the image widgets in each Elementor template. Placeholder paths used in templates:

| Placeholder | Replace with |
|---|---|
| `/wp-content/uploads/hero-bg.jpg` | Hero background photo |
| `/wp-content/uploads/rabbi-about.jpg` | About section portrait |
| `/wp-content/uploads/rabbi-hero.jpg` | About page hero photo |
| `/wp-content/uploads/course-tactical-pistol.jpg` | Tactical Pistol card image |
| `/wp-content/uploads/course-advanced-pistol.jpg` | Advanced Tactical Pistol card image |
| `/wp-content/uploads/course-tactical-rifle.jpg` | Tactical Rifle card image |
| `/wp-content/uploads/course-advanced-rifle.jpg` | Advanced Tactical Rifle card image |
| `/wp-content/uploads/course-active-shooter.jpg` | Active Shooter Response card image |
| `/wp-content/uploads/course-stress-box.jpg` | Stress Box card image |

---

## Step 6 — Airtable Registration Forms

The course detail template has a placeholder block for your Airtable registration form.

1. In Airtable, open your registration base → **Share → Embed this view**
2. Copy the `<iframe>` embed code
3. In Elementor, find the **Airtable embed placeholder** widget on the course detail page
4. Replace the placeholder content with your `<iframe>` code
5. Repeat per course (or use one shared form and filter by course name via a hidden field)

---

## Step 7 — Navigation & Permalinks

1. **Settings → Permalinks → Post name** (required for clean URLs like `/courses/tactical-pistol`)
2. **Appearance → Menus** — create a menu with: About, Courses, Merch, Contact. Assign to any location (the nav in each template is hardcoded HTML, so this is optional but good practice)

---

## Customizing Content

All text, images, and links are in **Elementor Custom HTML widgets** — just click the widget in the editor to edit. No coding needed.

To update the press marquee (logos/outlet names), edit the HTML widget in the press strip section on the Homepage or About page.

To update testimonials, edit the testimonials HTML widget on the Homepage.

---

## Notes on Elementor Free vs Pro

| Feature | Free | Pro |
|---|---|---|
| Page templates (used here) | ✅ | ✅ |
| Custom HTML widgets | ✅ | ✅ |
| Shared header/footer via Theme Builder | ❌ | ✅ |
| Dynamic tags (auto-fill from custom fields) | ❌ | ✅ |

With **Elementor Free**, the header and footer are baked into each page template (the approach used here). If you upgrade to Pro later, you can extract them into a single Theme Builder template that auto-applies site-wide.

The `[tr_meta key="..."]` shortcodes in the course detail template work with Elementor Free — they pull custom field values via the shortcode registered in `functions.php`.
