# GEUNBON Cocktail Menu - Design Guideline & Data Export

## 1. Design Guidelines

### 1.1. Color Palette

The design utilizes a sophisticated, vintage, and earthy color palette.

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Kraft** | `#c9b99a` | Primary background color (paper texture feel) |
| **Kraft Light** | `#d4c6a8` | Lighter accents |
| **Kraft Dark** | `#b5a07a` | Darker accents |
| **Ink** | `#1a1a1a` | Primary text color (deep black/dark grey) |
| **Ink Soft** | `#2d2519` | Secondary text, borders, softer elements |
| **Gold** | `#6b5b3e` | Accent elements |
| **Red** | `#7a1a1a` | Highlights, destructive/important text |
| **Red Bright** | `#8b1a1a` | Brighter highlights |
| **Wrapper** | `#23201d` | Web presentation background color |

### 1.2. Typography

Two primary font families are used to balance a modern, clean look with a classic, elegant feel:

1. **Sans-Serif (English & Numbers)**: `'Cutive Mono', 'Courier New', monospace`
   - Used for primary English titles, prices, ABV, and numeric data.
   - Provides a clean, typewriter-like aesthetic.
2. **Serif (Korean text & Subtitles)**: `'Nanum Myeongjo', 'Batang', serif`
   - Used for Korean names, descriptions, and elegant textual elements.

### 1.3. Page Layout

- **Page Size & Printing**: The layout is designed to print two A5 pages side-by-side on a single A4 landscape sheet (`297mm x 210mm`), which is then cut in half to create individual menu cards.
  - **Menu Page Block**: `148.5mm x 210mm` (A5 portrait dimensions).
- **Padding & Margins**: 
  - Base padding: `7mm 9mm 6mm`. Top padding increases to `14mm` for interior pages to account for clipboard clips.
- **Decorative Elements**:
  - Inner and outer delicate borders (`0.5px` and `0.3px` solid lines with low opacity).
  - Corner box-drawing characters (`╭`, `╮`, `╰`, `╯`) for a refined vintage look.
  - Page numbers at the bottom in a small, spaced-out sans-serif font (e.g., `01 / 03`).

### 1.4. Component Styles

* **Section Headers**:
  - English titles are uppercase, sans-serif, letter-spaced (`2px`), and bold (`weight 800`).
  - A double border line `border-b-[3px] border-double border-ink/20` separates the title from the items.
  - Korean sub-titles use the serif font in a softer ink color.

* **Cocktail/Menu Items**:
  - **Layout**: Flexbox baseline alignment.
  - **Name**: Korean name favored, serif font, bold (`13.5px`).
  - **ABV**: Sans-serif, small text (`9.5px`).
  - **Dotted Line**: Connects the name to the price (`border-b border-dotted border-ink/20`).
  - **Price**: Sans-serif, bold, displayed to one decimal place (e.g., `14.0`).
  - **Description**: Displayed below the item name in a smaller serif font (`9px`, opacity 85%).

---

## 2. Menu Data Export

Below is the complete menu data currently structured in `menu-data.ts`.

### Signature & Curated Cocktails

| Category | Name (EN) | Name (KR) | Price | ABV | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Curated Cocktails** | Black Manhattan | 블랙 맨하탄 | 16.0 | 40% | 호밀 위스키와 달콤쌉싸름 허브 리큐르 |
| **Signature Cocktails** | Bomdong Margarita | 봄동 겉절이 마가리타 | Coming Soon | - | 참기름 향 데킬라와 향긋한 봄동의 만남 |
| **Signature Cocktails** | Hip-Hop | 힙합 | Coming Soon | - | ???, 비트 주스, 라임 |

### Special Shots & Event Bottles

| Category | Name (EN) | Name (KR) | Price (Glass) | Price (Bottle) | ABV | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Event Bottle** | Noah's Mill | 노아스밀 | 16.0 | 250.0 | 57.15% |
| **Event Bottle** | Codigo Blanco | 코디고 블랑코 | - | 190.0 | 40% | 부드럽고 깔끔한 마무리의 프리미엄 데킬라 |
| **Event Bottle** | Hennessy VSOP | 헤네시 VSOP | - | 190.0 | 40% | 부드러운 바닐라와 달콤한 과일 향의 꼬냑 |
| **Special Shots** | House Tequila Shot | 하우스 데킬라 샷 | 11.0 | - | 40% | 코디고 블랑코 |
| **Special Shots** | House Cognac Shot | 하우스 꼬냑 샷 | 11.0 | - | 40% | 헤네시 VSOP |
| **Special Shots** | House Whisky Shot | 하우스 위스키 샷 | 11.0 | - | 40% | 듀어스 화이트 라벨 |
| **Special Shots** | Nikolashka | 니콜라시카 | 12.0 | - | 40% | 설탕 올린 레몬과 즐기는 브랜디 |
| **Special Shots** | 2 Lemon Drop | 레몬 드랍 2잔 | 16.0 | - | 27% | 상큼하고 새콤달콤한 보드카 샷 |
| **Special Shots** | 2 Irish Car Bomb | 아이리쉬 카밤 2잔 | 21.0 | - | 8% | 기네스에 베일리스, 위스키 빠뜨린 폭탄주 |

### Light, Refreshing Cocktail

| Name (EN) | Name (KR) | Price | ABV | Description |
| :--- | :--- | :--- | :--- | :--- |
| Random Light | 가벼운 거 랜덤 | 12.0 | - | 상큼하고 가벼운 칵테일 랜덤(히든 메뉴 포함) |
| Highball | 하이볼 | 13.0 | 11% | 가쿠빈 위스키와 탄산수의 청량함 |
| Gin, Tonic | 진 토닉 | 13.0 | 11% | 진과 토닉워터가 어우러진 깔끔한 맛 |
| Peach Crush | 피치 크러시 | 13.0 | 6% | 복숭아, 크랜베리의 새콤달콤한 맛 |
| Midori Sour | 미도리 사워 | 13.0 | 7% | 달콤방긋 메론 맛의 편안한 칵테일 |
| Mojito | 모히토 | 13.0 | 12% | 라임과 애플민트가 가득한 상쾌함 |
| Gin Fizz | 진 피즈 | 13.0 | 12% | 레몬과 탄산이 조화로운 상큼한 진 |
| Jack, Coke | 잭콕 | 13.0 | 11% | 잭다니엘에 콜라를 섞은 친숙한 맛 |
| Moscow Mule | 모스코 뮬 | 13.0 | 11% | 진저와 라임이 터지는 시원하고 깔끔한 맛 |

### Balanced Cocktail

| Name (EN) | Name (KR) | Price | ABV | Description |
| :--- | :--- | :--- | :--- | :--- |
| Random Balanced | 밸런스 좋은 거 랜덤 | 13.0 | - | 술맛 단맛 밸런스 좋은 칵테일 (히든 포함) |
| Gimlet | 김렛 | 14.0 | 25% | 진과 향긋한 라임이 상큼하게 터지는 맛 |
| Daiquiri | 다이키리 | 14.0 | 25% | 부드러운 럼과 새콤한 라임의 클래식 |
| Whisky Sour | 위스키 사워 | 14.0 | 25% | 버번의 풍미와 레몬의 새콤쌉싸름한 조화 |
| Espresso Martini | 에스프레소 마티니 | 14.0 | 27% | 진한 에스프레소의 달달쌉싸름한 향연 |
| Margarita | 마가리타 | 14.0 | 29% | 데킬라, 라임, 소금의 짭짤새콤한 조화 |
| Sidecar | 사이드카 | 15.0 | 29% | 꼬냑에 오렌지와 레몬의 향긋함 |

### Bold, Intense Cocktail

| Name (EN) | Name (KR) | Price | ABV | Description |
| :--- | :--- | :--- | :--- | :--- |
| Random Bold | 묵직한 거 랜덤 | 14.0 | - | 술맛 확 오르는 강렬한 칵테일 랜덤(히든 포함) |
| Long Island Iced Tea | 롱 아일랜드 아이스티 | 15.0 | 25% | 쭉쭉 마시다 훅 가는 아이스티 |
| Manhattan | 맨하탄 | 15.0 | 29% | 칵테일의 여왕 |
| Negroni | 네그로니 | 15.0 | 30% | 기분 좋은 쌉싸름함과 은은한 단맛의 매력 |
| Old Fashioned | 올드 패션드 | 15.0 | 36% | 버번 풍미에 달달함과 묵직함을 얹은 클래식 |
| Vesper Martini | 베스퍼 마티니 | 15.0 | 37% | 제임스 본드가 사랑한 그 마티니 |
| Faust | 파우스트 | 16.0 | 48% | 달콤함 뒤에 알코올이 올라오는 칵테일 |

### Premium Spirits (Tequila, Brandy/Cognac, Bourbon/Whisky)

| Category | Name (EN) | Name (KR) | Glass Price | Bottle Price | ABV |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tequila** | Codigo Blanco | 코디고 블랑코 | 11.0 | 190.0 | 40% |
| **Tequila** | Cincoro Reposado | 싱코로 레포사도 | 19.0 | 340.0 | 40% |
| **Tequila** | Don Julio Añejo | 돈 훌리오 아녜호 | 15.0 | 250.0 | 40% |
| **Tequila** | Don Julio 1942 | 돈 훌리오 1942 | 25.0 | 470.0 | 38% |
| **Tequila** | Clase Azul Reposado | 클라세아줄 레포사도 | 27.0 | 550.0 | 40% |
| **Brandy** | Rémy Martin VSOP | 레미마틴 VSOP | 13.0 | 190.0 | 40% |
| **Brandy** | Hennessy VSOP | 헤네시VSOP | 11.0 | 190.0 | 40% |
| **Brandy** | Rémy Martin 1738 | 레미마틴 1738 | 15.0 | 230.0 | 40% |
| **Brandy** | Hennessy XO | 헤네시XO | 29.0 | 550.0 | 40% |
| **Bourbon** | Maker's Mark | 메이커스 마크 | 13.0 | 150.0 | 45% |
| **Bourbon** | Noah's Mill | 노아스밀 | 16.0 | 250.0 | 57.15% |
| **Whisky** | Johnnie Walker Black Label | 조니워커 블랙 | 13.0 | 150.0 | 40% |
| **Whisky** | Talisker 10Y | 탈리스커 10년 | 15.0 | 210.0 | 46% |
| **Whisky** | Laphroaig 10Y | 라프로익 10년 | 15.0 | 210.0 | 40% |
| **Whisky** | Macallan 12Y Double Cask | 맥캘란 12년 더블캐스크 | 15.0 | 230.0 | 40% |
| **Whisky** | Balvenie 12Y DoubleWood | 발베니 12년 더블우드 | 15.0 | 230.0 | 40% |
| **Whisky** | Lagavulin 16Y | 라가불린 16년 | 19.0 | 310.0 | 43% |
| **Whisky** | Glenmorangie Signet | 글렌모렌지 시그넷 | 25.0 | 470.0 | 46% |

### Non-Alcoholic, Bar Food & Etc.

| Category | Name (EN) | Name (KR) | Price | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Non-Alcoholic** | Non-Alcoholic Mojito | 논알콜 모히토 | 12.0 | 상쾌한 라임과 무알콜 모히토 |
| **Non-Alcoholic** | Non-Alcoholic Moscow Mule | 논알콜 모스코뮬 | 12.0 | 진저와 라임이 터지는 시원하고 깔끔한 맛 |
| **Non-Alcoholic** | Orange Spirits | 오렌지 스피리츠 | 12.0 | 오렌지 풍미 가득한 논알콜 스피리츠 |
| **Bar Food** | Banana Brûlée | 바나나 브륄레 | 11.0 | 겉바속달, 설탕을 구운 디저트 |
| **Bar Food** | Sour Dough & KAZAK | 사워도우 & 카다이프 스프레드 | 12.0 | 사워도우와 고소한 카다이프 스프레드의 조화 |
| **Bar Food** | Cube Chicken Feet | 닭발 편육 큐브 | 13.0 | 매콤달콤 쫄깃한 무뼈 닭발 |
| **Etc.** | Milkshake | 밀크쉐이크 | 11.0 | 바닐라 아이스크림을 갈아넣은 쉐이크 |
| **Etc.** | Hangover Drink | 깨수깡 | 3.0 | 숙취해소제 원탑 |
