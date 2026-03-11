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
    // PAGE 1: Signatures & Lights
    [
        {
            title: "Signature Cocktails",
            items: [
                { nameEn: "Black Manhattan", nameKr: "블랙 맨하탄", price: 16.0, abv: "40%", description: "호밀 위스키와 달콤쌉싸름 허브 리큐르" },
                { nameEn: "Bomdong Margarita", nameKr: "봄동 겉절이 마가리타", isComingSoon: true, description: "참기름 향 데킬라와 향긋한 봄동의 만남" },
                { nameEn: "Hip-Hop", nameKr: "힙합", isComingSoon: true, description: "???, 비트 주스, 라임" },
            ],
        },
        {
            title: "Light & Refreshing",
            subtitle: "가볍고 시원한 칵테일",
            items: [
                { nameEn: "Random Light", nameKr: "가벼운 거 랜덤", price: 12.0, description: "히든 메뉴 포함" },
                { nameEn: "Highball", nameKr: "하이볼", price: 13.0, abv: "11%", description: "가쿠빈 위스키와 탄산수" },
                { nameEn: "Gin, Tonic", nameKr: "진 토닉", price: 13.0, abv: "11%" },
                { nameEn: "Peach Crush", nameKr: "피치 크러시", price: 13.0, abv: "6%" },
                { nameEn: "Midori Sour", nameKr: "미도리 사워", price: 13.0, abv: "7%" },
                { nameEn: "Mojito", nameKr: "모히토", price: 13.0, abv: "12%" },
                { nameEn: "Gin Fizz", nameKr: "진 피즈", price: 13.0, abv: "12%" },
                { nameEn: "Jack, Coke", nameKr: "잭콕", price: 13.0, abv: "11%" },
                { nameEn: "Moscow Mule", nameKr: "모스코 뮬", price: 13.0, abv: "11%" },
            ],
        },
    ],

    // PAGE 2: Balanced & Bold 
    [
        {
            title: "Balanced Cocktail",
            subtitle: "밸런스 좋은 칵테일",
            items: [
                { nameEn: "Random Balanced", nameKr: "밸런스 랜덤", price: 13.0 },
                { nameEn: "Gimlet", nameKr: "김렛", price: 14.0, abv: "25%" },
                { nameEn: "Daiquiri", nameKr: "다이키리", price: 14.0, abv: "25%" },
                { nameEn: "Whisky Sour", nameKr: "위스키 사워", price: 14.0, abv: "25%" },
                { nameEn: "Espresso Martini", nameKr: "에스프레소 마티니", price: 14.0, abv: "27%" },
                { nameEn: "Margarita", nameKr: "마가리타", price: 14.0, abv: "29%" },
                { nameEn: "Sidecar", nameKr: "사이드카", price: 15.0, abv: "29%" },
            ],
        },
        {
            title: "Bold, Intense",
            subtitle: "묵직하고 강렬한 칵테일",
            items: [
                { nameEn: "Random Bold", nameKr: "묵직한 거 랜덤", price: 14.0 },
                { nameEn: "Long Island Iced Tea", nameKr: "롱 아일랜드 아이스티", price: 15.0, abv: "25%" },
                { nameEn: "Manhattan", nameKr: "맨하탄", price: 15.0, abv: "29%" },
                { nameEn: "Negroni", nameKr: "네그로니", price: 15.0, abv: "30%" },
                { nameEn: "Old Fashioned", nameKr: "올드 패션드", price: 15.0, abv: "36%" },
                { nameEn: "Vesper Martini", nameKr: "베스퍼 마티니", price: 15.0, abv: "37%" },
                { nameEn: "Faust", nameKr: "파우스트", price: 16.0, abv: "48%" },
            ],
        },
    ],

    // PAGE 3: Shots & Spirits & Food
    [
        {
            title: "Shots & Events",
            subtitle: "스페셜 샷 및 바틀",
            items: [
                { nameEn: "Noah's Mill", nameKr: "노아스밀", glassPrice: 16.0, bottlePrice: 250.0, abv: "57.15%" },
                { nameEn: "Codigo Blanco", nameKr: "코디고 블랑코", bottlePrice: 190.0, abv: "40%" },
                { nameEn: "Hennessy VSOP", nameKr: "헤네시 VSOP", bottlePrice: 190.0, abv: "40%" },
                { nameEn: "House Teq/Cog/Whisky", nameKr: "하우스 샷 (데킬라/꼬냑/위스키)", price: 11.0, abv: "40%" },
                { nameEn: "Nikolashka", nameKr: "니콜라시카", price: 12.0, abv: "40%" },
                { nameEn: "2 Lemon Drop", nameKr: "레몬 드랍 2잔", price: 16.0, abv: "27%" },
                { nameEn: "2 Irish Car Bomb", nameKr: "아이리쉬 카밤 2잔", price: 21.0, abv: "8%" },
            ],
        },
        {
            title: "Non-Alcoholic & Food",
            subtitle: "논알콜 & 안주",
            items: [
                { nameEn: "N.A. Mojito/Mule", nameKr: "논알콜 모히토/모스코뮬", price: 12.0 },
                { nameEn: "Orange Spirits", nameKr: "오렌지 스피리츠", price: 12.0 },
                { nameEn: "Banana Brûlée", nameKr: "바나나 브륄레", price: 11.0 },
                { nameEn: "Sour Dough & KAZAK", nameKr: "사워도우 & 카다이프", price: 12.0 },
                { nameEn: "Cube Chicken Feet", nameKr: "닭발 편육 큐브", price: 13.0 },
                { nameEn: "Milkshake", nameKr: "밀크쉐이크", price: 11.0 },
                { nameEn: "Hangover Drink", nameKr: "깨수깡", price: 3.0 },
            ],
        },
    ],

    // PAGE 4: Premium Spirits (Tequila/Brandy/Whisky grouped)
    [
        {
            title: "Tequila & Brandy",
            subtitle: "스피릿",
            items: [
                { nameEn: "Codigo / Cincoro", nameKr: "코디고 / 싱코로", glassPrice: 11.0, bottlePrice: 340.0, abv: "40%" },
                { nameEn: "Don Julio Añejo / 1942", nameKr: "돈훌리오 아녜호 / 1942", glassPrice: 15.0, bottlePrice: 470.0, abv: "38-40%" },
                { nameEn: "Clase Azul Reposado", nameKr: "클라세아줄 레포사도", glassPrice: 27.0, bottlePrice: 550.0, abv: "40%" },
                { nameEn: "Rémy/Hennessy VSOP", nameKr: "레미 / 헤네시 VSOP", glassPrice: 11.0, bottlePrice: 190.0, abv: "40%" },
                { nameEn: "Rémy 1738 / Hennessy XO", nameKr: "레미 1738 / 헤네시 XO", glassPrice: 15.0, bottlePrice: 550.0, abv: "40%" },
            ],
        },
        {
            title: "Whisky & Bourbon",
            subtitle: "위스키 & 버번",
            items: [
                { nameEn: "Maker's Mark / Noah's Mill", nameKr: "메이커스 / 노아스밀", glassPrice: 13.0, bottlePrice: 250.0, abv: "45-57%" },
                { nameEn: "Johnnie Black / Talisker 10", nameKr: "조니블랙 / 탈리스커 10", glassPrice: 13.0, bottlePrice: 210.0, abv: "40-46%" },
                { nameEn: "Laphroaig 10 / Macallan 12", nameKr: "라프로익 10 / 맥캘란 12", glassPrice: 15.0, bottlePrice: 230.0, abv: "40%" },
                { nameEn: "Balvenie 12 / Lagavulin 16", nameKr: "발베니 12 / 라가불린 16", glassPrice: 15.0, bottlePrice: 310.0, abv: "40-43%" },
                { nameEn: "Glenmorangie Signet", nameKr: "글렌모렌지 시그넷", glassPrice: 25.0, bottlePrice: 470.0, abv: "46%" },
            ],
        },
    ],
];
