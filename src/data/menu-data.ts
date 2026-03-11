export type MenuItemProps = {
    nameEn: string;
    nameKr: string;
    price?: string | number;
    glassPrice?: string | number;
    bottlePrice?: string | number;
    abv?: string;
    description?: string;
    isComingSoon?: boolean;
};

export type MenuSectionProps = {
    title: string;
    subtitle?: string;
    items: MenuItemProps[];
};

export const menuPages: MenuSectionProps[][] = [
    // PAGE 1
    [
        {
            title: "Signature & Curated Cocktails",
            items: [
                { nameEn: "Black Manhattan", nameKr: "블랙 맨하탄", price: 16.0, abv: "40%", description: "호밀 위스키와 달콤쌉싸름 허브 리큐르" },
                { nameEn: "Bomdong Margarita", nameKr: "봄동 겉절이 마가리타", isComingSoon: true, description: "참기름 향 데킬라와 향긋한 봄동의 만남" },
                { nameEn: "Hip-Hop", nameKr: "힙합", isComingSoon: true, description: "???, 비트 주스, 라임" },
            ],
        },
        {
            title: "Special Shots & Event Bottles",
            subtitle: "스페셜 샷 및 이벤트 바틀",
            items: [
                { nameEn: "Noah's Mill", nameKr: "노아스밀", glassPrice: 16.0, bottlePrice: 250.0, abv: "57.15%" },
                { nameEn: "Codigo Blanco", nameKr: "코디고 블랑코", bottlePrice: 190.0, abv: "40%", description: "부드럽고 깔끔한 마무리의 프리미엄 데킬라" },
                { nameEn: "Hennessy VSOP", nameKr: "헤네시 VSOP", bottlePrice: 190.0, abv: "40%", description: "부드러운 바닐라와 달콤한 과일 향의 꼬냑" },
                { nameEn: "House Tequila Shot", nameKr: "하우스 데킬라 샷", price: 11.0, abv: "40%", description: "코디고 블랑코" },
                { nameEn: "House Cognac Shot", nameKr: "하우스 꼬냑 샷", price: 11.0, abv: "40%", description: "헤네시 VSOP" },
                { nameEn: "House Whisky Shot", nameKr: "하우스 위스키 샷", price: 11.0, abv: "40%", description: "듀어스 화이트 라벨" },
                { nameEn: "Nikolashka", nameKr: "니콜라시카", price: 12.0, abv: "40%", description: "설탕 올린 레몬과 즐기는 브랜디" },
                { nameEn: "2 Lemon Drop", nameKr: "레몬 드랍 2잔", price: 16.0, abv: "27%", description: "상큼하고 새콤달콤한 보드카 샷" },
                { nameEn: "2 Irish Car Bomb", nameKr: "아이리쉬 카밤 2잔", price: 21.0, abv: "8%", description: "기네스에 베일리스, 위스키 빠뜨린 폭탄주" },
            ],
        },
    ],

    // PAGE 2
    [
        {
            title: "Light, Refreshing Cocktail",
            subtitle: "가볍고 시원한 칵테일",
            items: [
                { nameEn: "Random Light", nameKr: "가벼운 거 랜덤", price: 12.0, description: "상큼하고 가벼운 칵테일 랜덤(히든 메뉴 포함)" },
                { nameEn: "Highball", nameKr: "하이볼", price: 13.0, abv: "11%", description: "가쿠빈 위스키와 탄산수의 청량함" },
                { nameEn: "Gin, Tonic", nameKr: "진 토닉", price: 13.0, abv: "11%", description: "진과 토닉워터가 어우러진 깔끔한 맛" },
                { nameEn: "Peach Crush", nameKr: "피치 크러시", price: 13.0, abv: "6%", description: "복숭아, 크랜베리의 새콤달콤한 맛" },
                { nameEn: "Midori Sour", nameKr: "미도리 사워", price: 13.0, abv: "7%", description: "달콤방긋 메론 맛의 편안한 칵테일" },
                { nameEn: "Mojito", nameKr: "모히토", price: 13.0, abv: "12%", description: "라임과 애플민트가 가득한 상쾌함" },
                { nameEn: "Gin Fizz", nameKr: "진 피즈", price: 13.0, abv: "12%", description: "레몬과 탄산이 조화로운 상큼한 진" },
                { nameEn: "Jack, Coke", nameKr: "잭콕", price: 13.0, abv: "11%", description: "잭다니엘에 콜라를 섞은 친숙한 맛" },
                { nameEn: "Moscow Mule", nameKr: "모스코 뮬", price: 13.0, abv: "11%", description: "진저와 라임이 터지는 시원하고 깔끔한 맛" },
            ],
        },
    ],

    // PAGE 3
    [
        {
            title: "Balanced Cocktail",
            subtitle: "밸런스 좋은 칵테일",
            items: [
                { nameEn: "Random Balanced", nameKr: "밸런스 좋은 거 랜덤", price: 13.0, description: "술맛 단맛 밸런스 좋은 칵테일 (히든 포함)" },
                { nameEn: "Gimlet", nameKr: "김렛", price: 14.0, abv: "25%", description: "진과 향긋한 라임이 상큼하게 터지는 맛" },
                { nameEn: "Daiquiri", nameKr: "다이키리", price: 14.0, abv: "25%", description: "부드러운 럼과 새콤한 라임의 클래식" },
                { nameEn: "Whisky Sour", nameKr: "위스키 사워", price: 14.0, abv: "25%", description: "버번의 풍미와 레몬의 새콤쌉싸름한 조화" },
                { nameEn: "Espresso Martini", nameKr: "에스프레소 마티니", price: 14.0, abv: "27%", description: "진한 에스프레소의 달달쌉싸름한 향연" },
                { nameEn: "Margarita", nameKr: "마가리타", price: 14.0, abv: "29%", description: "데킬라, 라임, 소금의 짭짤새콤한 조화" },
                { nameEn: "Sidecar", nameKr: "사이드카", price: 15.0, abv: "29%", description: "꼬냑에 오렌지와 레몬의 향긋함" },
            ],
        },
        {
            title: "Bold, Intense Cocktail",
            subtitle: "묵직하고 강렬한 칵테일",
            items: [
                { nameEn: "Random Bold", nameKr: "묵직한 거 랜덤", price: 14.0, description: "술맛 확 오르는 강렬한 칵테일 랜덤(히든 포함)" },
                { nameEn: "Long Island Iced Tea", nameKr: "롱 아일랜드 아이스티", price: 15.0, abv: "25%", description: "쭉쭉 마시다 훅 가는 아이스티" },
                { nameEn: "Manhattan", nameKr: "맨하탄", price: 15.0, abv: "29%", description: "칵테일의 여왕" },
                { nameEn: "Negroni", nameKr: "네그로니", price: 15.0, abv: "30%", description: "기분 좋은 쌉싸름함과 은은한 단맛의 매력" },
                { nameEn: "Old Fashioned", nameKr: "올드 패션드", price: 15.0, abv: "36%", description: "버번 풍미에 달달함과 묵직함을 얹은 클래식" },
                { nameEn: "Vesper Martini", nameKr: "베스퍼 마티니", price: 15.0, abv: "37%", description: "제임스 본드가 사랑한 그 마티니" },
                { nameEn: "Faust", nameKr: "파우스트", price: 16.0, abv: "48%", description: "달콤함 뒤에 알코올이 올라오는 칵테일" },
            ],
        },
    ],

    // PAGE 4 (Premium Spirits: Tequila & Brandy)
    [
        {
            title: "Premium Spirits - Tequila",
            subtitle: "프리미엄 스피릿 - 데킬라",
            items: [
                { nameEn: "Codigo Blanco", nameKr: "코디고 블랑코", glassPrice: 11.0, bottlePrice: 190.0, abv: "40%" },
                { nameEn: "Cincoro Reposado", nameKr: "싱코로 레포사도", glassPrice: 19.0, bottlePrice: 340.0, abv: "40%" },
                { nameEn: "Don Julio Añejo", nameKr: "돈 훌리오 아녜호", glassPrice: 15.0, bottlePrice: 250.0, abv: "40%" },
                { nameEn: "Don Julio 1942", nameKr: "돈 훌리오 1942", glassPrice: 25.0, bottlePrice: 470.0, abv: "38%" },
                { nameEn: "Clase Azul Reposado", nameKr: "클라세아줄 레포사도", glassPrice: 27.0, bottlePrice: 550.0, abv: "40%" },
            ],
        },
        {
            title: "Premium Spirits - Brandy",
            subtitle: "프리미엄 스피릿 - 브랜디",
            items: [
                { nameEn: "Rémy Martin VSOP", nameKr: "레미마틴 VSOP", glassPrice: 13.0, bottlePrice: 190.0, abv: "40%" },
                { nameEn: "Hennessy VSOP", nameKr: "헤네시VSOP", glassPrice: 11.0, bottlePrice: 190.0, abv: "40%" },
                { nameEn: "Rémy Martin 1738", nameKr: "레미마틴 1738", glassPrice: 15.0, bottlePrice: 230.0, abv: "40%" },
                { nameEn: "Hennessy XO", nameKr: "헤네시XO", glassPrice: 29.0, bottlePrice: 550.0, abv: "40%" },
            ],
        },
    ],

    // PAGE 5 (Premium Spirits: Bourbon & Whisky)
    [
        {
            title: "Premium Spirits - Bourbon",
            subtitle: "프리미엄 스피릿 - 버번",
            items: [
                { nameEn: "Maker's Mark", nameKr: "메이커스 마크", glassPrice: 13.0, bottlePrice: 150.0, abv: "45%" },
                { nameEn: "Noah's Mill", nameKr: "노아스밀", glassPrice: 16.0, bottlePrice: 250.0, abv: "57.15%" },
            ],
        },
        {
            title: "Premium Spirits - Whisky",
            subtitle: "프리미엄 스피릿 - 위스키",
            items: [
                { nameEn: "Johnnie Walker Black Label", nameKr: "조니워커 블랙", glassPrice: 13.0, bottlePrice: 150.0, abv: "40%" },
                { nameEn: "Talisker 10Y", nameKr: "탈리스커 10년", glassPrice: 15.0, bottlePrice: 210.0, abv: "46%" },
                { nameEn: "Laphroaig 10Y", nameKr: "라프로익 10년", glassPrice: 15.0, bottlePrice: 210.0, abv: "40%" },
                { nameEn: "Macallan 12Y Double Cask", nameKr: "맥캘란 12년 더블캐스크", glassPrice: 15.0, bottlePrice: 230.0, abv: "40%" },
                { nameEn: "Balvenie 12Y DoubleWood", nameKr: "발베니 12년 더블우드", glassPrice: 15.0, bottlePrice: 230.0, abv: "40%" },
                { nameEn: "Lagavulin 16Y", nameKr: "라가불린 16년", glassPrice: 19.0, bottlePrice: 310.0, abv: "43%" },
                { nameEn: "Glenmorangie Signet", nameKr: "글렌모렌지 시그넷", glassPrice: 25.0, bottlePrice: 470.0, abv: "46%" },
            ],
        },
    ],

    // PAGE 6 (Non-Alcoholic & Food)
    [
        {
            title: "Non-Alcoholic Drinks",
            subtitle: "논알콜 음료",
            items: [
                { nameEn: "Non-Alcoholic Mojito", nameKr: "논알콜 모히토", price: 12.0, description: "상쾌한 라임과 무알콜 모히토" },
                { nameEn: "Non-Alcoholic Moscow Mule", nameKr: "논알콜 모스코뮬", price: 12.0, description: "진저와 라임이 터지는 시원하고 깔끔한 맛" },
                { nameEn: "Orange Spirits", nameKr: "오렌지 스피리츠", price: 12.0, description: "오렌지 풍미 가득한 논알콜 스피리츠" },
            ],
        },
        {
            title: "Bar Food & Snacks",
            subtitle: "간단한 안주",
            items: [
                { nameEn: "Banana Brûlée", nameKr: "바나나 브륄레", price: 11.0, description: "겉바속달, 설탕을 구운 디저트" },
                { nameEn: "Sour Dough & KAZAK", nameKr: "사워도우 & 카다이프 스프레드", price: 12.0, description: "사워도우와 고소한 카다이프 스프레드의 조화" },
                { nameEn: "Cube Chicken Feet", nameKr: "닭발 편육 큐브", price: 13.0, description: "매콤달콤 쫄깃한 무뼈 닭발" },
            ],
        },
        {
            title: "Etcetera",
            subtitle: "기타 메뉴",
            items: [
                { nameEn: "Milkshake", nameKr: "밀크쉐이크", price: 11.0, description: "바닐라 아이스크림을 갈아넣은 쉐이크" },
                { nameEn: "Hangover Drink", nameKr: "깨수깡", price: 3.0, description: "숙취해소제 원탑" },
            ],
        },
    ],
];
