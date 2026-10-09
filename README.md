# monio-page

Strona-wizytówka **Moniki Wolińskiej – psycholożki i psychoterapeutki (CBT, EMDR)**.
Jeden długi dokument HTML z sekcjami i nawigacją po kotwicach, budowany statycznie
i publikowany na GitHub Pages. W produkcji nie działa żaden serwer aplikacyjny – tylko pliki.

## Stack

| Element | Wybór | Po co |
| --- | --- | --- |
| Framework | [Astro 7](https://docs.astro.build) (output `static`) | Komponenty `.astro` = HTML + odrobina TS; zero JS w przeglądarce |
| Style | zwykły CSS (`src/styles/global.css` + `<style>` w komponentach) | Bez Tailwinda i bibliotek UI |
| Font | Cormorant Garamond przez wbudowane [Fonts API](https://docs.astro.build/en/guides/fonts/) Astro | Pobierany podczas builda i serwowany z własnej domeny (brak zapytań do Google w runtime) |
| Zdjęcia | `astro:assets` (`<Image>`) | Automatyczne WebP + `srcset` z plików w `src/assets/images/` |
| Sitemap | `@astrojs/sitemap` | Generowana przy buildzie |
| Hosting | GitHub Pages przez GitHub Actions | `git push` → build → publikacja |
| Package manager | **npm** (lockfile: `package-lock.json`) | |

Jedyne zależności runtime to `astro` i `@astrojs/sitemap`; `@astrojs/check` + `typescript`
służą wyłącznie do sprawdzania typów (`npm run check`).

## Struktura projektu

```text
.
├── .github/workflows/deploy.yml   # CI: build Astro + deploy na GitHub Pages
├── public/                        # pliki kopiowane 1:1 do dist/
│   ├── favicon.svg
│   └── og-image.jpg               # obraz Open Graph (1200x630)
├── src/
│   ├── assets/images/             # zdjęcia przetwarzane przez Astro (WebP, srcset)
│   ├── components/
│   │   ├── Nav.astro              # dyskretna nawigacja po kotwicach (bez JS)
│   │   └── sections/              # po jednym komponencie na sekcję one-pagera
│   │       ├── Hero.astro         #   przedstawienie osoby + CTA
│   │       ├── About.astro        #   "O mnie i mojej pracy..."
│   │       ├── Education.astro    #   wykształcenie i doświadczenie
│   │       ├── Therapy.astro      #   obszary wsparcia, forma pracy, ceny
│   │       ├── TherapyTypes.astro #   CBT / ACT i Terapia Schematów / psychosomatyka
│   │       ├── Emdr.astro         #   EMDR
│   │       └── Contact.astro      #   kontakt (tel:, mailto:, adres)
│   ├── layouts/BaseLayout.astro   # <html>/<head>: title, description, canonical, OG, font, CSS
│   ├── pages/
│   │   ├── index.astro            # składa sekcje w kolejności + stopka; tu są title/description
│   │   └── robots.txt.ts          # robots.txt generowany z `site`/`base` (adres sitemapy)
│   └── styles/global.css          # zmienne (kolory, fonty, szerokości), typografia, .button, .rule
├── astro.config.mjs               # site, base, trailingSlash, sitemap, konfiguracja fontu
├── package.json / package-lock.json
├── tsconfig.json
├── README.md
└── ROBOTS.md                      # specyfikacja, wg której strona powstała
```

Zasada podziału: **wszystko, co dotyczy jednej sekcji (treść + jej układ CSS), jest w jednym pliku
`src/components/sections/*.astro`**. W `global.css` są tylko rzeczy współdzielone: paleta,
skala typografii, przyciski, separator, kontener. Nie ma osobnych warstw „content”, „services” itp.

## Wymagania

- **Node.js ≥ 22.12** (LTS; na Arch/CachyOS: `sudo pacman -S nodejs-lts-jod npm`)
- **npm ≥ 9.6** (dołączony do Node)
- Dostęp do internetu podczas `npm run build` / `npm run dev` – Astro pobiera wtedy pliki fontu
  (cache w `node_modules/.astro/fonts`, w dev dodatkowo `.astro/fonts`)

## Uruchomienie lokalne

```bash
npm ci            # instalacja dokładnie tych wersji, które są w package-lock.json
npm run dev       # serwer deweloperski z hot reload: http://localhost:4321/monio-page/
```

Pozostałe komendy (zgodne z `package.json`):

| Komenda | Działanie |
| --- | --- |
| `npm run build` | produkcyjny build statyczny do `dist/` (katalog jest w `.gitignore`) |
| `npm run preview` | serwuje gotowy `dist/` lokalnie – to samo, co zobaczy użytkownik po deployu |
| `npm run check` | sprawdzenie typów i błędów w plikach `.astro`/`.ts` |

Adres w dev/preview zawiera `/monio-page/`, bo tak jest ustawione `base` (patrz niżej).

## Gdzie co zmieniać

### Treści

Teksty są bezpośrednio w HTML komponentów sekcji – edytujesz `src/components/sections/<Sekcja>.astro`
i zapisujesz; dev server przeładuje stronę. Kolejność sekcji ustala `src/pages/index.astro`.

- Dane kontaktowe (telefon, e-mail, adres, platforma online): `Contact.astro`. Linki
  `tel:`/`mailto:` są wpisane obok wyświetlanego tekstu – zmieniając numer, zmień oba.
- Ceny i długości sesji: `Therapy.astro` (lista `.therapy__prices`).
- Kwalifikacje, numer certyfikatu, towarzystwa: `Education.astro`.
- Podpis pod portretem w hero (tytuł zawodowy, rekomendacja): `Hero.astro`.
- Pozycje nawigacji: tablica `links` na górze `src/components/Nav.astro`. Linki prowadzą do
  `id` sekcji (`#o-mnie`, `#wyksztalcenie`, `#terapia`, `#rodzaje-terapii`, `#emdr`, `#kontakt`).
- Wszystkie przyciski „Umów spotkanie” to zwykłe linki do `#kontakt` (brak systemu rezerwacji).

### Zdjęcia

1. Wrzuć plik do `src/assets/images/` (JPG/PNG; Astro sam zrobi WebP i warianty rozmiarów).
2. W komponencie sekcji zmień `import ... from '../../assets/images/<plik>.jpg'`.
3. W `<Image>` dopasuj `widths` (szerokości wariantów, nie większe niż oryginał) i `sizes`
   (ile miejsca zajmuje zdjęcie na ekranie – używane przez przeglądarkę do wyboru wariantu).
4. Kadrowanie regulujesz w `<style>` komponentu: `aspect-ratio`, `object-fit: cover`,
   `object-position` (np. żeby nie uciąć twarzy).

Zdjęcia portretowe mają opisowy `alt`; krajobrazy i tła są dekoracyjne (`alt=""`).
Obraz do podglądów w social media to `public/og-image.jpg` (1200×630).

### Wygląd

- Paleta, fonty, szerokości, skala typografii: zmienne `:root` na początku `src/styles/global.css`.
- Przyciski (`.button`, `.button--light`), separator (`.rule`), kontener, odstępy sekcji: dalej w tym samym pliku.
- Układ konkretnej sekcji (siatka, kolumny, breakpoint `60em`, kadrowanie zdjęć): `<style>` w jej komponencie.
  Style w komponentach są automatycznie scope'owane – nie wyciekają do innych sekcji.
- Krój pisma / wagi / warianty fontu: sekcja `fonts` w `astro.config.mjs`. Font jest używany
  przez zmienną `--font-serif`, którą Astro wstrzykuje w `<head>` (komponent `<Font />` w `BaseLayout.astro`).

### SEO i metadane

- `<title>` i `meta description`: stałe `title` i `description` w `src/pages/index.astro`.
- Canonical, Open Graph, favicon, link do sitemapy: `src/layouts/BaseLayout.astro`. Adresy
  absolutne budowane są z `site` + `base`, więc **nie trzeba ich edytować przy zmianie domeny**.
- `robots.txt`: `src/pages/robots.txt.ts` (zezwala na indeksowanie, podaje adres sitemapy).
- `sitemap-index.xml` / `sitemap-0.xml`: generowane przez `@astrojs/sitemap` z `site`.
- Strona celowo **nie** zawiera `noindex`/`nofollow`.

## Deployment na GitHub Pages

### Jak to działa

```text
git push (branch main)
  -> GitHub Actions (.github/workflows/deploy.yml)
       job "build":  actions/checkout -> withastro/action (npm ci + astro build, upload dist/ jako artefakt Pages)
       job "deploy": actions/deploy-pages (publikacja artefaktu; wymaga sukcesu "build")
  -> https://adriansabas.github.io/monio-page/
```

Workflow ma uprawnienia `pages: write` i `id-token: write` (wymagane przez `deploy-pages`) oraz
`concurrency: pages`, żeby dwa deploye nie nadpisywały się nawzajem. Można go też uruchomić ręcznie
(zakładka **Actions → Deploy to GitHub Pages → Run workflow**).

### Pierwsze uruchomienie (jednorazowo)

1. W repozytorium na GitHubie: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. `git push` na `main` (lub ręczny run workflow).
3. Po zakończeniu joba `deploy` adres strony jest widoczny w jego podsumowaniu i w Settings → Pages.

### Adres publikacji: `site` i `base`

W `astro.config.mjs`:

```js
site: 'https://adriansabas.github.io',
base: '/monio-page',
```

To konfiguracja dla „project page” (`https://<użytkownik>.github.io/<repo>/`). `site` + `base`
sterują canonical URL, adresami Open Graph, `robots.txt` i sitemapą – muszą odpowiadać adresowi,
pod którym realnie serwowana jest strona. Jeżeli zmienisz nazwę repozytorium, zmień `base`.

### Własna domena

1. **Kod** – w `astro.config.mjs` ustaw docelowy adres i usuń podkatalog:
   ```js
   site: 'https://twoja-domena.pl',
   base: '/',
   ```
   Zrób `npm run build && npm run preview` i sprawdź, że strona działa pod `http://localhost:4321/`.
2. **GitHub** – Settings → Pages → **Custom domain**: wpisz domenę i zapisz. Przy publikacji przez
   GitHub Actions plik `public/CNAME` **nie jest potrzebny** (GitHub go ignoruje; domena jest zapisana
   w ustawieniach repozytorium). Zalecane: najpierw [zweryfikuj domenę](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
   w ustawieniach konta GitHub, co chroni przed przejęciem subdomeny.
3. **DNS u rejestratora** – konkretne rekordy zależą od tego, czy używasz domeny głównej
   (`twoja-domena.pl`), czy subdomeny (`www.twoja-domena.pl`). Dokładne, aktualne wartości
   (adresy IP GitHub Pages dla rekordów `A`/`AAAA`, rekord `CNAME` dla subdomeny wskazujący na
   `adriansabas.github.io`) są w oficjalnej dokumentacji:
   [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
   Nie używaj rekordów wildcard (`*.twoja-domena.pl`). Propagacja DNS może potrwać do 24 h.
4. **HTTPS** – po poprawnym DNS w Settings → Pages pojawi się (do 24 h) opcja **Enforce HTTPS**;
   zaznacz ją. Certyfikat wystawia GitHub (Let's Encrypt) automatycznie.
5. Zrób `git push` zmiany z pkt 1, żeby wygenerować stronę z nowymi adresami absolutnymi.

Weryfikacja DNS z terminala (wartości porównaj z dokumentacją GitHub):

```bash
dig twoja-domena.pl +noall +answer -t A
dig www.twoja-domena.pl +noall +answer -t CNAME
```

### Weryfikacja po wdrożeniu

HTTPS i poprawność plików:

```bash
curl -I https://adriansabas.github.io/monio-page/            # 200, nagłówki HTTPS
curl    https://adriansabas.github.io/monio-page/robots.txt  # Allow: / + adres sitemapy
curl    https://adriansabas.github.io/monio-page/sitemap-index.xml
```

W przeglądarce: kłódka w pasku adresu, brak błędów w konsoli (F12), sekcja „Network” bez
zasobów 404. Szybki test SEO: `view-source:` i sprawdź `<title>`, `<meta name="description">`,
`<link rel="canonical">` oraz brak `noindex`.

Indeksowalność w Google:

1. [Google Search Console](https://search.google.com/search-console) → dodaj usługę
   (dla własnej domeny: typ „Domena” z weryfikacją przez rekord DNS TXT; dla `github.io`: typ „Prefiks adresu URL”).
2. **Sitemaps** → wyślij `sitemap-index.xml`.
3. **Sprawdzenie adresu URL** → wklej adres strony → „Poproś o zindeksowanie”.
4. Po kilku dniach: raport „Strony” pokaże status indeksowania; w Google możesz też wpisać `site:twoja-domena.pl`.

## Uwagi

- Katalog `/old_page` (eksport z Canvy: PDF, HTML, PNG) był **wyłącznie źródłem migracji** –
  nie jest wymagany do uruchomienia ani builda projektu i jest w `.gitignore`. Wszystkie
  używane zdjęcia zostały skopiowane do `src/assets/images/` i `public/`.
- Nie commituj `dist/`, `node_modules/` ani `.astro/` (są w `.gitignore`).
- Aktualizacja zależności: `npm outdated`, potem `npm install <pakiet>@latest`; po aktualizacji
  Astro przeczytaj [upgrade guide](https://docs.astro.build/en/upgrade-astro/). Zawsze commituj
  zmieniony `package-lock.json`.
