# ROBOTS.md

## 1. Zadanie i oczekiwany rezultat

Zbuduj prostą, dopracowaną i responsywną stronę-wizytówkę **Moniki Wolińskiej — psycholożki i psychoterapeutki**. Strona ma być one-pagerem: jedna długa strona z sekcjami i nawigacją przez kotwice, bez osobnych podstron.

Projekt ma wyglądać profesjonalnie i być łatwy do utrzymania przez backend/data engineera, który zna Pythona, ale ma niewielkie doświadczenie frontendowe. Stosuj zwykłe, idiomatyczne Astro, HTML, TypeScript i CSS. Modułowość ma ułatwiać zmiany; nie buduj architektury większej od samej witryny.

**Priorytety:**
1. Wierność treściom i kierunkowi wizualnemu materiałów źródłowych.
2. Dobra czytelność i responsywność, szczególnie na telefonie.
3. Prosty kod i mała liczba zależności.
4. Poprawny statyczny build i deployment na GitHub Pages.
5. Podstawowe SEO i dostępność.

## 2. Materiały źródłowe — przeczytaj przed kodowaniem

### `/old_page`

Przejrzyj cały folder rekurencyjnie przed implementacją. Zawiera materiały migracyjne: treści, projekt wizualny i assety. Dopasuj nazwy plików do zdjęć na makietach na podstawie ich zawartości, nie tylko nazw.

- Zachowaj wszystkie istotne treści, dane kontaktowe, kwalifikacje, ceny i kolejność sekcji.
- Wykorzystaj dostępne oryginalne zdjęcia w możliwie najlepszej jakości.
- Nie odwołuj się z finalnego kodu do ścieżek `/old_page`.
- Przenieś wszystkie potrzebne assety do projektu. Po zakończeniu `/old_page` zostanie usunięty, więc strona musi działać niezależnie.

### Makieta PDF (`whole_page.pdf`)

PDF składa się z siedmiu plansz/projektów sekcji. Traktuj go jako główną referencję wizualną i kontrolną listę zawartości. **Nie odtwarzaj go jako siedmiu osobnych stron ani nie wymuszaj wymiarów plansz 16:9**. Zbuduj jedną spójną stronę, przewijaną pionowo, na której poszczególne projekty stają się sekcjami. Zachowaj charakter układu, zdjęcia, hierarchię typografii i paletę, ale dostosuj odstępy i kompozycję do rzeczywistej strony internetowej.

### Zapis HTML (`Monika Wolińska – Witryna internetowa.html`)

To zapis strony edytora Canva, a nie samodzielny, gotowy kod produkcyjnej witryny. Zawiera runtime, skrypty i style interfejsu Canva oraz metadane `noindex, nofollow`. Używaj go wyłącznie pomocniczo, jeśli pozwala zweryfikować materiał źródłowy.

- Nie kopiuj runtime'u Canva, jej klas CSS, skryptów ani ścieżek do jej zasobów.
- Nie kopiuj do nowej strony metadanych `noindex, nofollow`.
- Nie dodawaj zależności od CDN-ów Canva.
- Jeśli dane z pliku HTML są trudne do odczytania, korzystaj z czytelnego projektu PDF i rzeczywistych plików z `/old_page`.

Jeśli tekst, dane lub kwalifikacje różnią się między źródłami, nie wymyślaj rozstrzygnięcia. Priorytetem są treści i oryginalne assety z `/old_page`; użyj PDF do weryfikacji układu i oczekiwanego zakresu. Wyraźnie odnotuj w raporcie końcowym istotne niejasności dotyczące kwalifikacji zawodowych lub danych, zamiast samodzielnie zmieniać ich znaczenie.

## 3. Treść i kolejność sekcji

Zachowaj następującą kolejność z PDF:

1. Hero / przedstawienie osoby.
2. O mnie i mojej pracy.
3. Wykształcenie i doświadczenie.
4. Terapia — obszary wsparcia, sposób pracy, forma spotkań i koszt.
5. Rodzaje terapii — CBT, inne podejścia (ACT i Terapia Schematów) oraz psychosomatyka.
6. EMDR.
7. Kontakt.

### 3.1 Hero

Wyeksponuj:
- **Monika Wolińska**;
- zawód i podejścia terapeutyczne zgodnie z zatwierdzonym tekstem źródłowym: psycholog, psychoterapeutka poznawczo-behawioralna / CBT oraz EMDR;
- rekomendację lub certyfikację tylko w brzmieniu potwierdzonym przez materiały źródłowe — nie dopisuj nowych uprawnień;
- lokalizację i formę spotkań: **Warszawa | sesje online**;
- przycisk **„UMÓW SPOTKANIE”**, prowadzący do sekcji kontaktu (`#kontakt`). Nie kieruj do nieistniejącego systemu rezerwacyjnego.

### 3.2 O mnie i mojej pracy

Zachowaj wszystkie cztery akapity źródłowe. Ich główne tematy to: trudność i odwaga związane z rozpoczęciem psychoterapii, znaczenie relacji terapeutycznej, empatia/autentyczność/szacunek/uważność, możliwość zmiany oraz rozwijanie kompetencji poprzez szkolenia i superwizje. Nie skracaj ich do ogólnikowego tekstu marketingowego.

### 3.3 Wykształcenie i doświadczenie

Zachowaj informacje źródłowe o:
- wykształceniu psychologicznym i certyfikacie psychoterapeuty CBT, w tym numerze certyfikatu PTTPB, jeśli jest potwierdzony w źródle;
- pracy z EMDR;
- studiach podyplomowych z psychosomatyki i somatopsychologii na Uniwersytecie SWPS;
- doświadczeniu w MSCZ w Pruszkowie, Ośrodku Leczenia Uzależnień „Terapia Bieszczady”, Poradni Zdrowia Psychicznego w Ustrzykach Dolnych, własnej praktyce oraz warsztatach/psychoedukacji;
- członkostwie w towarzystwach związanych z terapią poznawczo-behawioralną i EMDR oraz stałej superwizji.

Nie dopisuj stanowisk, dat ani numerów certyfikatów, których nie potwierdza materiał źródłowy.

### 3.4 Terapia: obszary wsparcia i koszt

Zachowaj informację, że praca jest skierowana do osób dorosłych mierzących się m.in. z trudnościami w relacjach, kryzysem emocjonalnym, zaburzeniami depresyjnymi i/lub lękowymi, konsekwencjami przeżyć traumatycznych oraz wyzwaniami związanymi z ADHD i/lub spektrum autyzmu.

Uwzględnij informację, że podczas pierwszej konsultacji terapeutka ocenia, czy będzie mogła pomóc w danym problemie, oraz że prowadzi terapię indywidualną online i w gabinecie w Warszawie.

Ceny mają być widoczne i łatwe do odnalezienia:
- pierwsza konsultacja — 50 min, **160 zł**;
- kolejne sesje — 50 min, **230 zł**.

Nie zmieniaj cen, długości spotkań ani zakresu usług bez potwierdzenia.

### 3.5 Rodzaje terapii

Zachowaj trzy obszary treści z makiety:
- **Psychoterapia poznawczo-behawioralna (CBT)** — wyjaśnienie związku myśli, emocji, zachowania i objawów fizjologicznych oraz pracy nad wzorcami myślenia i zachowania;
- **Inne podejścia: ACT, Terapia Schematów** — opis szerszego spojrzenia na osobę, relację terapeutyczną, wartości i uważność;
- **Psychosomatyka** — przykład z wyobrażeniem sobie soczystej cytryny oraz opis powiązań między ciałem, emocjami, myślami, zachowaniem i stanami chorobowymi.

Zachowaj pełną treść źródłową tych opisów, zamiast zastępować ją własnymi definicjami. Możesz poprawić oczywiste literówki i interpunkcję, ale nie przepisuj samodzielnie twierdzeń merytorycznych ani nie dodawaj medycznych obietnic.

### 3.6 EMDR

Zachowaj oddzielną sekcję EMDR i pełny tekst z materiału źródłowego: opis zastosowania w pracy z traumą, trudnymi doświadczeniami z przeszłości oraz objawami lękowymi i psychosomatycznymi, przetwarzania obciążających przeżyć i przekonań na swój temat. Nie wzmacniaj deklaracji skuteczności ani nie dopisuj gwarancji efektów.

### 3.7 Kontakt

Wyeksponuj dane zgodne z materiałem źródłowym:
- telefon: **+48 503 950 603** — link `tel:+48503950603`;
- e-mail: **wolinska.m@gmail.com** — link `mailto:wolinska.m@gmail.com`;
- gabinet: **ul. Wspólna Droga 20/19, Warszawa**;
- sesje online: **Google Meet**.

Nagłówek/lead: „KONTAKT” oraz „Zadzwoń, napisz, porozmawiajmy.” Przycisk „UMÓW SPOTKANIE” kieruje do tej sekcji. Nie twórz formularza kontaktowego, rezerwacji online ani linku do spotkania Google Meet, jeśli źródło nie zawiera takiego adresu.

## 4. Kierunek wizualny — potraktuj jako wymaganie

Wizualnie strona ma być **spokojna, ciepła, naturalna, elegancka i editorialowa**, a nie wyglądać jak typowy landing SaaS, panel aplikacji lub gotowy szablon korporacyjny. Zachowaj dużo oddechu, miękkie fotografie, oszczędne dekoracje i subtelną typografię.

### Typografia

- Referencyjny krój to **Cormorant Garamond** — elegancki krój szeryfowy z wyraźnym kontrastem kresek.
- Stosuj regular/medium do tekstu, semibold do mocniejszych akcentów i italic w podtytułach lub wybranych nagłówkach, zgodnie z makietą.
- Główne nagłówki są często wersalikami, z umiarkowanym zwiększeniem `letter-spacing`.
- Nie ustawiaj zbyt małej wielkości tekstu tylko po to, aby na desktopie zmieścić tyle tekstu, co na planszy PDF. Na rzeczywistej stronie tekst ma być wygodny do czytania.
- Jeśli font jest dostępny w `/old_page`, wykorzystaj go lokalnie. W przeciwnym razie załaduj Cormorant Garamond w prosty, udokumentowany sposób i zapewnij fallback `Georgia, serif`.

### Paleta i kształty

Użyj kolorów zbliżonych do makiety; poniższe wartości są punktem wyjścia, a nie wymogiem co do pojedynczego piksela:

- ciepła kość słoniowa / krem: `#FFF9F2`;
- ciepły brąz dla tekstu: około `#6F5547`;
- stonowany karmelowo-miedziany akcent/linię: około `#A87955`;
- ciemna oliwka dla głównych przycisków: około `#414225`;
- biel lub ciepła biel w sekcjach z dużą ilością oddechu.

Przyciski mają być proste, raczej prostokątne, bez mocnego zaokrąglenia, ciężkich cieni i efektu „pigułki”. W makiecie przyciski są ciemno-oliwkowe z jasnym tekstem, a na hero jasne z tekstem w kolorze brązowym. Używaj cienkich poziomych linii w ciepłym brązie jako separatorów.

### Zdjęcia i ich rola

Odnajdź oryginalne odpowiedniki zdjęć w `/old_page` i dopasuj je do sekcji:

- **Hero:** portret terapeutki na tle drewnianych desek oraz jasne, miękko rozmyte tło z trawami/roślinami w ciepłym świetle.
- **O mnie:** portret terapeutki przy ceglanej ścianie, po prawej stronie tekstu na desktopie.
- **Wykształcenie:** pionowe zdjęcie górskiego/łąkowego krajobrazu oświetlonego słońcem, po lewej stronie.
- **Terapia:** zdjęcie traw i łąki jako tło sekcji, z dużym, jasnokremowym panelem na treść.
- **Rodzaje terapii:** poziome zdjęcie górskiej łąki w środkowej kolumnie.
- **EMDR:** pionowe zdjęcie traw i jasnych kwiatów w ciepłym świetle, po prawej stronie tekstu.
- **Kontakt:** duże zdjęcie bukietu polnych kwiatów na tle zachodzącego słońca, po lewej stronie.

Zdjęcia są istotną częścią projektu, a nie dekoracyjnym dodatkiem do dowolnej podmiany. Nie zastępuj ich emoji, abstrakcyjnymi gradientami ani przypadkowymi zdjęciami stockowymi, jeśli oryginały są dostępne. Nie ładuj zdjęć z adresów Canva; skopiuj używane pliki do projektu. Dobieraj `object-fit: cover` i `object-position` tak, by nie ucinać twarzy ani głównych elementów zdjęć.

### Kompozycja poszczególnych sekcji na desktopie

- **Hero:** pełne tło z miękką fotografią; duży portret po lewej (jasna/biała ramka), tekst po prawej. Imię i nazwisko to najmocniejszy element typograficzny.
- **O mnie:** jasnokremowe tło; tekst i nagłówek po lewej, portret przy ceglanej ścianie po prawej; CTA pod tekstem.
- **Wykształcenie:** jasne tło; zdjęcie krajobrazu po lewej, tytuł i kilka akapitów po prawej.
- **Terapia:** fotografia łąki jako tło; centralnie duży panel kremowy, w nim nagłówek, podtytuł, obszary wsparcia, informacja o formie pracy, separator, ceny i CTA.
- **Rodzaje terapii:** tło białe; wyśrodkowany tytuł wersalikami i cienka linia. Trzy kolumny: CBT po lewej, zdjęcie i ACT/Terapia Schematów pośrodku, psychosomatyka po prawej.
- **EMDR:** dużo białej przestrzeni; nagłówek i tekst po lewej, pionowe zdjęcie po prawej.
- **Kontakt:** układ dzielony; bukiet po lewej, panel kremowy z nagłówkiem, krótkim zaproszeniem, separatorem i danymi po prawej.

To są wytyczne układu, nie sztywne współrzędne. Użyj elastycznych proporcji, max-width i responsywnych odstępów. Strona powinna wyglądać jak jedna witryna, a nie jak plansze prezentacji połączone bez dopracowania.

## 5. Responsywność

Makiety PDF pokazują głównie szeroki ekran. Zadbaj o rzeczywiste zachowanie na wąskim ekranie:

- sekcje dwukolumnowe przechodzą w jedną kolumnę bez poziomego przewijania;
- portret i krajobrazy zachowują rozsądne kadrowanie i nie wypychają treści poza viewport;
- treść, ceny i dane kontaktowe pozostają czytelne bez powiększania;
- sekcja „Rodzaje terapii” układa się w czytelne, pionowe bloki, zachowując kolejność treści;
- panel kremowy w sekcji „Terapia” ma wystarczające marginesy i kontrast na zdjęciu tła;
- CTA są łatwe do kliknięcia dotykiem;
- nagłówki nie łamią się przypadkowo na pojedyncze litery, a tekst nie jest justowany z nadmiernymi odstępami.

Na telefonie nie próbuj zmieścić desktopowego układu w miniaturze. Stosuj sensowne breakpointy, `clamp()` dla skali typografii, elastyczne szerokości oraz odpowiednie `aspect-ratio`/kadrowanie zdjęć.

## 6. Stack i zależności

### Wymagane

- Astro jako główny framework.
- TypeScript tam, gdzie występuje logika JS/TS.
- Komponenty Astro i semantyczny HTML.
- Zwykły CSS w `src/styles/global.css`; mała liczba zmiennych CSS dla kolorów, fontów i szerokości.
- Minimalny JavaScript po stronie klienta.
- Statyczny build, bez potrzeby uruchamiania serwera aplikacyjnego.

### Nie dodawaj bez realnej potrzeby

React/Vue/Svelte, Tailwind, biblioteki UI, client-side routera, global state managementu, CMS-a, bazy danych, API/backendu, formularza, systemu rezerwacji, animacyjnych bibliotek ani dodatkowych warstw architektury.

Nie buduj folderów `domain/`, `repositories/`, `services/`, `controllers/`, `application/` ani podobnych backendowych warstw. Nie twórz osobnego `content/`, jeśli treści kilku sekcji można czytelnie utrzymać w komponentach. Nie twórz komponentu dla każdego wrappera `<div>`.

## 7. Proponowana struktura projektu

Dostosuj nazwy, jeśli poprawia to czytelność, ale zachowaj strukturę niewielką i zgodną z Astro:

```text
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── About.astro
│   │       ├── Education.astro
│   │       ├── Therapy.astro
│   │       ├── TherapyTypes.astro
│   │       ├── Emdr.astro
│   │       └── Contact.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── <lockfile>
├── tsconfig.json
├── README.md
└── ROBOTS.md
```

Nie twórz pustych komponentów tylko po to, aby odtworzyć przykład. Możesz dodać wspólny komponent CTA tylko wtedy, gdy rzeczywiście ograniczy duplikację. Nie twórz osobnego komponentu `Header` lub `Footer`, jeśli projekt wizualny nie potrzebuje tych elementów. Jeżeli dodasz nawigację, niech będzie dyskretna i spójna z makietą; nie przykrywaj nią hero ani nie dodawaj rozbudowanego, korporacyjnego paska.

### Odpowiedzialności

- `src/pages/index.astro` — składa sekcje w prawidłowej kolejności.
- `src/layouts/BaseLayout.astro` — podstawowy dokument HTML, wspólne `<head>`, title/description, favicon i globalny CSS.
- `src/components/sections/` — większe sekcje one-pagera.
- `src/assets/images/` — używane zdjęcia przetwarzane przez Astro.
- `src/styles/global.css` — bazowy styl, zmienne, układ, typografia, responsywność i stany interakcji.
- `public/` — pliki wymagające bezpośredniej ścieżki, np. `robots.txt` i favicon, jeśli taki format wybrano.

## 8. Nawigacja i zachowanie CTA

Strona jest jednym dokumentem. Użyj identyfikatorów sekcji i kotwic, np. `#o-mnie`, `#wyksztalcenie`, `#terapia`, `#rodzaje-terapii`, `#emdr`, `#kontakt`.

Wszystkie przyciski **„UMÓW SPOTKANIE”** prowadzą do `#kontakt`, ponieważ w aktualnym zakresie nie ma systemu rezerwacji. W sekcji kontakt dane telefonu i e-maila muszą być prawdziwymi linkami `tel:` i `mailto:`. Nie dodawaj formularza kontaktowego ani backendu/API.

Jeśli mobilna nawigacja będzie potrzebna, zrealizuj ją prostym, dostępnym skryptem w Astro/TypeScript. Zapewnij obsługę klawiaturą, etykietę dostępności przycisku, możliwość zamknięcia menu i poprawne zachowanie `aria-expanded`. Nie wprowadzaj frameworka UI wyłącznie dla menu.

Nie dodawaj FAQ, opinii klientów, cennika innych usług, bloga, mapy, integracji kalendarza, widgetu czatu ani dodatkowych sekcji, których nie ma w materiale źródłowym.

## 9. SEO

Zaimplementuj podstawy bez rozbudowanego SEO:

- unikalny, opisowy `<title>` po polsku, np. dotyczący Moniki Wolińskiej, psychoterapii CBT/EMDR i Warszawy;
- krótki `meta description` opisujący rzeczywiście oferowane usługi;
- canonical URL, kiedy znana będzie ostateczna domena;
- poprawne `lang="pl"`, semantyczny HTML i hierarchię nagłówków;
- znaczące `alt` dla zdjęć informacyjnych i `alt=""` dla zdjęć czysto dekoracyjnych;
- favicon;
- podstawowe Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`), z lokalnie przechowywanym obrazem, jeśli jest dostępny;
- `public/robots.txt`, który nie blokuje indeksowania publicznej strony;
- sitemap generowany podczas buildu, np. za pomocą oficjalnej integracji `@astrojs/sitemap`.

Nie umieszczaj `noindex` ani `nofollow` w metadanych strony. Nie kopiuj tych dyrektyw z zapisanego HTML Canva. `robots.txt` ma zezwalać na crawling; nie traktuj go jako sposobu wymuszania indeksacji.

Nie wymyślaj domeny. Gdy domena produkcyjna będzie znana, ustaw ją w `site` w konfiguracji Astro. Ta wartość musi odpowiadać domenie używanej w produkcji i służyć do poprawnego generowania sitemap i canonical URL. Dopóki domena nie jest znana, nie publikuj fałszywego canonical URL ani przykładowego adresu sitemap.

Nie dodawaj schema.org/JSON-LD z niepotwierdzonymi informacjami. Jeśli wdrożenie podstawowych danych strukturalnych dla osoby/usługi jest łatwe i wszystkie pola są potwierdzone, można to rozważyć, ale nie jest to warunek ukończenia.

## 10. Dostępność i jakość

- Stosuj semantyczne elementy (`header`, `nav`, `main`, `section`, `footer`) tam, gdzie mają sens.
- Zapewnij widoczny focus i kontrast tekstu, zwłaszcza na fotografii oraz w jasnokremowym panelu.
- Każdy interaktywny element musi być osiągalny klawiaturą i mieć zrozumiałą nazwę.
- Nie używaj koloru jako jedynego nośnika informacji.
- Jeśli dodasz animacje, respektuj `prefers-reduced-motion`; nie dodawaj animacji wyłącznie dla ozdoby.
- Nie poświęcaj czytelności na rzecz ścisłego kopiowania małych rozmiarów tekstu z PDF.

## 11. Hosting i deployment

Docelowy hosting to **GitHub Pages**, bez serwera Python/Node w produkcji:

```text
git push
  -> GitHub Actions
  -> instalacja zależności z lockfile
  -> astro build
  -> statyczne pliki wynikowe
  -> GitHub Pages
  -> własna domena + HTTPS
```

- Użyj oficjalnej, aktualnej procedury Astro dla GitHub Pages i standardowego workflow GitHub Actions.
- Projekt musi budować się jako statyczna strona. Nie włączaj SSR ani adaptera serwerowego.
- Nie commituj `dist/`.
- Zadbaj o poprawne uprawnienia workflow do publikacji Pages i zależności między jobami zgodnie z aktualną dokumentacją.
- Własną domenę konfiguruj w ustawieniach GitHub Pages i przez rekordy DNS odpowiednie dla konkretnego rejestratora. Nie zgaduj tych rekordów, jeśli nie wiadomo, jakiej domeny i konfiguracji używa właściciel.
- HTTPS musi być możliwe do włączenia po prawidłowym skonfigurowaniu DNS.
- Nie dodawaj `public/CNAME` automatycznie bez sprawdzenia, czy jest wymagane dla użytego wariantu publikacji przez Actions. Postępuj zgodnie z bieżącą dokumentacją GitHub Pages/Astro.

## 12. README.md

`README.md` powinien być użyteczną instrukcją dla kolejnego developera, nie tutorialem podstaw frontendu. Ma zawierać:

- cel strony i stack;
- krótki opis struktury projektu oraz odpowiedzialności katalogów;
- wymagania środowiskowe;
- instalację zależności i lokalne uruchomienie;
- komendy do `dev`, `build` i lokalnego `preview` zgodne z `package.json`;
- wyjaśnienie, gdzie zmieniać treści, zdjęcia, style i metadane SEO;
- opis przepływu GitHub Actions -> build Astro -> GitHub Pages;
- instrukcję konfiguracji własnej domeny w GitHub Pages oraz DNS, bez wymyślonych rekordów;
- sposób weryfikacji HTTPS i podstawowej indeksowalności w Google;
- informację, że `/old_page` było wyłącznie źródłem migracji i nie jest wymagane do uruchomienia projektu.

Nie wpisuj instrukcji, które nie odpowiadają rzeczywistym skryptom projektu. Commituj lockfile i opisuj użyty package manager.

## 13. Walidacja i kryteria ukończenia

Przed zakończeniem:

1. Przejrzyj `/old_page` oraz porównaj finalny układ z PDF.
2. Zweryfikuj, że wszystkie kluczowe sekcje, istotne teksty, ceny, dane kontaktowe i kwalifikacje zostały zachowane.
3. Zweryfikuj dopasowanie oryginalnych zdjęć do sekcji i ich prawidłowe ładowanie z repozytorium.
4. Uruchom produkcyjny build Astro i lokalny preview z builda.
5. Sprawdź całą stronę na dużym ekranie i na szerokości mobilnej.
6. Sprawdź wszystkie CTA, anchor links, `tel:` i `mailto:`.
7. Sprawdź, czy nie występuje poziome przewijanie, przycięte twarze, nachodzący tekst ani nieczytelne akapity.
8. Sprawdź konsolę przeglądarki i brak błędów ładowania assetów.
9. Zweryfikuj title, description, canonical (gdy domena znana), Open Graph, `robots.txt` i sitemap.
10. Sprawdź, że strona nie zawiera `noindex`, nie kopiuje skryptów/klas Canva i nie zależy od `/old_page`.
11. Sprawdź, że workflow GitHub Actions jest poprawny i README opisuje rzeczywistą implementację.

W raporcie końcowym podaj krótko: co zostało zbudowane, jakie komendy/walidacje uruchomiono, czy build przeszedł, co wymaga ręcznej konfiguracji (np. domena/DNS/Google Search Console) oraz wszelkie nierozstrzygnięte rozbieżności w źródłach.

## 14. Zasada nadrzędna

To ma być **niewielka, elegancka strona produkcyjna**, nie platforma. Wybieraj prostsze rozwiązanie, jeżeli zapewnia ten sam efekt. Nie dodawaj bibliotek ani warstw architektury „na przyszłość”. Zachowaj nastrój, układ, zdjęcia i treść projektu, ale projektuj prawdziwą responsywną stronę, a nie statyczną kopię plansz PDF.

## 15. Dokumentacja techniczna

Korzystaj z aktualnej dokumentacji, jeśli szczegóły konfiguracji uległy zmianie:

- Astro + GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
- Astro configuration: https://docs.astro.build/en/guides/configuring-astro/
- Astro sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- GitHub Pages custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
