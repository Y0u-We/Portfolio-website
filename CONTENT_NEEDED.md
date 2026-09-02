# Content still needed from Yuvraj

Everything in the code is wired up and ready — these are just files/content to drop in.

## 1. Resume PDF
- Replace `public/resume.pdf` with your real resume (same filename, or update
  `resumeUrl` in `src/data/profile.ts` if you rename it).

## 2. Education certificates (10th & 12th)
- Add the school/board names to `education` in `src/data/credentials.ts`
  (currently blank for the two new SSC/HSC entries).
- Add PDF marksheets to `public/education/` (e.g. `ssc-marksheet.pdf`,
  `hsc-marksheet.pdf`) and set each entry's `downloadUrl` accordingly.

## 3. Certifications
- The certifications section is currently empty on purpose.
- Send certificate images/PDFs + names/issuers and I'll add each one back
  into `certifications` in `src/data/credentials.ts`, plus save the files
  under `public/certifications/`.

## 4. Project images
For each project in `src/data/projects.ts` (AdVision, Prestige University,
NSHM, CRM Sales Pipeline, Supermarket Transactions):
- A cover/thumbnail image → set `thumbnail`.
- 2–4 extra screenshots → set `gallery` (array of image paths).
Save actual image files under `public/projects/` and reference them like
`/projects/advision-cover.png`.

## 5. Power BI Dashboard Showcase images
- In `src/components/Dashboards.tsx`, each entry has an `image` field
  (currently blank). Add real Power BI screenshots to `public/dashboards/`
  and set the path per entry.

## 6. Contact form (optional upgrade)
- Right now the form opens the visitor's email client with the message
  pre-filled — this works everywhere, no setup needed.
- To make it submit silently in-page instead: create a free form at
  https://formspree.io, and paste the endpoint URL into
  `contactFormEndpoint` in `src/data/profile.ts`.

## Already done
- Profile photo enlarged with a decorative background.
- LinkedIn / GitHub / Mail icons linked to your real profiles.
- Phone number and email added.
- Experience section filled with your Croccle Internet internship.
- Education section updated with MCA/BCA org names + two new 10th/12th slots.
- Projects replaced with your 5 real Power BI projects (AdVision, Prestige
  University, NSHM, CRM Sales Pipeline, Supermarket Transactions), each with
  a downloadable one-page PDF case study already generated in
  `public/projects/`.
- Footer copyright now shows "Yuvraj Sunar".
