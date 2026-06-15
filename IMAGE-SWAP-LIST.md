# SmartTasker Indonesia — Image Swap List

All images that require replacement with Indonesian content before launch.
Sourced from `assets/images/`. Some images are kept as-is (app screenshots, icons, logos, decorative).

---

## Images That MUST Be Replaced (Client Action Required)

| # | Current Filename | Used In | Replacement Required | Notes |
|---|---|---|---|---|
| 1 | `tasker-image.png` | Section 4 — Start Earning (left yellow panel) | Indonesian woman (Tasker). Name **Sari Wulandari**. | ✅ **Updated 2026-06-15** to a modest Indonesian muslimah (Pexels ID 10347517 — see attribution table). Meets full Islamic-modesty brief: hijab covers hair/neck/chest, long sleeves to wrist, loose clothing. Previous version backed up at `assets/images/originals/tasker-image.prev.png`. |
| 2 | `promote-image.png` | Section 6 — Promote Your Business (right column) | Indonesian service provider promoting their business. | Still the interim Pexels stock photo (Mudrik Sulaiman dispatch-desk worker). |

## ✅ Resolved — Client-Supplied Images Installed (2026-06-12)

| Slot | Source File (client) | Installed As | Section |
|---|---|---|---|
| Giveaway bike | `Honda giveaway.png` (2560×1440) | `honda-giveaway.jpg` (1280×720, JPEG q88, 141 KB) | Section 2 — Honda Vario 160 Giveaway |
| Post a task | `Post and task image 1.png` (1693×929) | `post-in-seconds.png` (1360×1136) + `post-in-seconds-mobile.png` (900×1136) | Section 3 — Post Your Task (desktop img + tablet/mobile CSS background) |
| Smart Secure | `Smart Secure page.png` (1721×914) | `secure-image.png` (1360×1136) + `secure-image-mobile.png` (900×1136) | Section 5 — Smart Secure Sorted (desktop img + tablet/mobile CSS background) |

> ⚠️ The client image reads **"HONDA VARIO 160"** — all page copy (EN + ID), the giveaway terms page, and meta tags were updated from "Vario 125" to "Vario 160" on 2026-06-12 to match. `change-requests.md` originally specified 125; confirm 160 is final with the client.
>
> Crops were generated with subject-aware anchors (gardener right-of-centre, handshake centred) so no people are clipped at any breakpoint. Previous stock versions are backed up as `assets/images/originals/*-stock.*`. The client source files remain in `assets/images/` untouched.

---

## Images That Are KEPT As-Is (No Replacement Needed)

| Filename | Used In | Reason |
|---|---|---|
| `logo.png` | Header | Brand logo — no change needed. |
| `logo-stacked-no-padding.png` | Footer | Brand logo — no change needed. |
| `logo-stacked-yellow2.png` | Favicon, OG image | Brand logo — no change needed. |
| `line-decoration.png` | Hero — decorative underline under H1 | Decorative brand element — keep. |
| `hero-image.png` | Hero right column | App screenshot — keep per spec. |
| `icon-describe-task.svg` | Post Your Task — Step 1 icon | UI icon — keep. |
| `icon-define-budget.svg` | Post Your Task — Step 2 icon | UI icon — keep. |
| `icon-receive-offers.svg` | Post Your Task — Step 3 icon | UI icon — keep. |
| `icon-get-underway.svg` | Post Your Task — Step 4 icon | UI icon — keep. |
| `tick-icon.svg` | Earn (benefit bullets) + Secure (Get verified item) | UI icon — keep. |
| `lock-icon.svg` | Smart Secure Sorted (feature bullets) | UI icon — keep. |
| `apple-badge.png` | *(NOT USED)* | App Store badge — removed per change-requests.md #3. |
| `google-play-badge.png` | *(NOT USED)* | Google Play badge — removed per change-requests.md #3. |

---

## How to Swap an Image

1. Save the new image file to `assets/images/` with the **same filename** as the original (e.g. rename your new tasker photo to `tasker-image.png` to replace in-place) — OR use a new filename and update the `src` attribute in `index.html`.
2. For tablet/mobile CSS background images (`post-in-seconds-mobile.png`, `secure-image-mobile.png`, `bg-mobile.png`): replace the file in `assets/images/` — the CSS in `css/style.css` references them by filename. Match the 1360×1136 (desktop) / 900×1136 (mobile) dimensions; `qa/process-new-images.ps1` shows how to cover-crop with an anchor.

---

## Imagery Guidelines (per change-requests.md)

- Represent **Indonesia as a whole** — not just Bali or tourist locations.
- Show **diverse Indonesian faces**: homeowners, families, urban workers, tradespeople, small business owners.
- Avoid: beach clubs, surfing, rice terraces as a generic "Indonesia" shorthand, colonial architecture for its own sake.
- Preferred contexts: Jakarta apartments, suburban homes, modern Indonesian urban settings, small workshops, domestic service environments.
- People should look **relatable and professional**, not stock-photo generic.

---

## Temporary Stock Images in Place (2026-06-11)

The following free stock photos have been placed as temporary stand-ins while the client supplies final photography. All three sources (Pexels, Pixabay, Unsplash) permit free commercial use under their respective free licenses. These images **must be replaced** with client-supplied photography before final launch.

Original placeholder files are backed up to `assets/images/originals/`.

| # | File | Source Page URL | Photographer | License | Final Dimensions | Notes |
|---|------|----------------|--------------|---------|-----------------|-------|
| 1 | `tasker-image.png` | https://www.pexels.com/photo/woman-in-hijab-in-office-holding-binders-10347517/ | Ron Lach | Pexels Free License (commercial use, no attribution required) | 1108 x 1166 px (cover-cropped from 2000×3000 portrait) | **Updated 2026-06-15 (modesty revision).** Modest Indonesian/SE-Asian muslimah in a grey hijab and grey blazer holding work binders in an office — professional "working / earning" context. Meets full Islamic-modesty requirement: hijab covers hair, neck AND chest; long sleeves to the wrist; loose, non-revealing clothing. Replaces the earlier 2026-06-15 laptop photo (Sewupari Studio 11719267), which had rolled sleeves and an open neckline. Other modesty-verified runners-up: 6282021 (bright smiling headshot, no work context), 7297451 (warm Indonesian street portrait, smiling), 33411403 (kebaya seamstress — very Indonesian but heavy black background). |
| 2 | `post-in-seconds.png` | https://www.pexels.com/photo/a-woman-holding-a-cellphone-11527802/ | Sewupari Studio | Pexels Free License | 1360 x 1136 px | Indonesian woman in hijab holding smartphone; confirmed Indonesia origin (Sewupari Studio is an Indonesian photographer). |
| 3 | `post-in-seconds-mobile.png` | https://www.pexels.com/photo/a-woman-holding-a-cellphone-11527802/ | Sewupari Studio | Pexels Free License | 900 x 1136 px | Same source photo as #2, portrait-cropped. |
| 4 | `secure-image.png` | https://www.pexels.com/photo/construction-worker-sitting-behind-a-desk-14147712/ | Mudrik Sulaiman | Pexels Free License | 1360 x 1136 px | Confirmed Indonesian professional in red-and-grey safety uniform with yellow hardhat, seated at a control/dispatch desk, speaking on radio. Indonesian text "LAKSANAKAN SO..." (Standard Operating Procedures) visible on wall in background. Bright, clean, professional feel. Replaces the Novantri Muhen street-vendor photo (36829740) which was rejected by the client as too cluttered/informal. |
| 5 | `secure-image-mobile.png` | https://www.pexels.com/photo/construction-worker-sitting-behind-a-desk-14147712/ | Mudrik Sulaiman | Pexels Free License | 900 x 1136 px | Same source photo as #4, portrait-cropped for mobile/tablet. Replaces the Novantri Muhen street-vendor photo (36829740) rejected by client. |
| 6 | `honda-vario-125.jpg` | https://www.pexels.com/photo/a-man-wearing-a-white-helmet-standing-beside-his-motorcycle-10516163/ | Naufal Fawwaz Assalam | Pexels Free License | 900 x 1200 px | Indonesian man (West Java) standing beside a motorcycle with white helmet. **Note:** the specific motorcycle brand/model in the photo is not confirmed as a Honda Vario 125 — this is a placeholder only. Client must supply an actual Honda Vario 125 photo for final launch. |

**Compromises noted:**
- `tasker-image.png`: The source photo (Antonius Ferret) features a Southeast Asian woman but is not confirmed as Indonesian. Acceptable as a temporary stand-in.
- `secure-image.png` / `secure-image-mobile.png`: Replaced 2026-06-11 at client request. Previous photo (Novantri Muhen, street vendor repairing fans in Jakarta) was rejected as too cluttered/informal for the "Smart, Secure, Sorted" section. Replaced with Mudrik Sulaiman photo (14147712) showing a confirmed-Indonesian professional in a red safety uniform with yellow hardhat at an indoor dispatch desk — bright, clean, and trustworthy.
- `honda-vario-125.jpg`: The motorcycle in the stock photo may not be a Honda Vario 125. The image conveys "Indonesian man with scooter" accurately but the specific model cannot be verified from stock photography. Client must supply actual prize vehicle photo.
- `bg-mobile.png` was kept as-is per task instructions (brand pattern, no swap needed).

---

*Last updated: 2026-06-11*
