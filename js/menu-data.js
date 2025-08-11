// 菜单数据
const menuData = {
    categories: [
        {
            id: 1,
            name: "经典鸡尾酒",
            image: "https://s21.ax1x.com/2025/05/20/pEx8gUO.webp",
            description: "传统经典，永不过时的鸡尾酒选择"
        }
    ],
    items: [
        // 经典鸡尾酒
        {
            id: 101,
            categoryId: 1,
            name: "龙舌兰日出",
            price: 38,
            image: "https://s21.ax1x.com/2025/05/21/pExgbdO.webp",
            description: "如同墨西哥日出般绚丽的层次感，龙舌兰的烈性与橙汁的甜美，红石榴糖浆点缀如朝霞",
            ingredients: "龙舌兰、橙汁、红石榴糖浆",
            stats: {alcohol: 2, sweetness: 4, acidity: 2, bitterness: 1, complexity: 2, body: 3}
        },
        {
            id: 102,
            categoryId: 1,
            name: "今夜不回家",
            price: 38,
            image: "https://pic1.imgdb.cn/item/68994deb58cb8da5c8180745.webp",
            description: "浓郁的酒香与甜美的果香完美融合，让人沉醉其中，不愿离去",
            ingredients: "龙舌兰、朗姆、金酒、生命之水、蓝橙利口酒、苦精",
            stats: {alcohol: 5, sweetness: 2, acidity: 1, bitterness: 2, complexity: 4, body: 2}
        },
        {
            id: 103,
            categoryId: 1,
            name: "恋爱脑",
            price: 48,
            image: "https://s21.ax1x.com/2025/08/10/pVdZUUg.webp",
            description: "甜美而微醺的口感，如同恋爱中的甜蜜感觉，让人沉浸在幸福的氛围中",
            ingredients: "金酒、伏特加、朗姆、龙舌兰、君度、柠檬汁、红石榴糖浆、苏打水",
            stats: {alcohol: 5, sweetness: 3, acidity: 3, bitterness: 1, complexity: 3, body: 2}
        },
        {
            id: 104,
            categoryId: 1,
            name: "莫斯科骡子",
            price: 28,
            image: "https://s21.ax1x.com/2025/08/10/pVdEcQ0.webp",
            description: "俄罗斯风情的经典鸡尾酒，伏特加的烈性与姜汁啤酒的辛辣，青柠汁带来清新平衡",
            ingredients: "伏特加、姜汁啤酒、青柠汁",
            stats: {alcohol: 2, sweetness: 2, acidity: 3, bitterness: 1, complexity: 2, body: 2}
        },
        {
            id: 105,
            categoryId: 1,
            name: "僵尸",
            price: 48,
            image: "https://pic1.imgdb.cn/item/68994deb58cb8da5c8180748.webp",
            description: "多种朗姆酒的完美融合，加入热带水果汁和香料，口感复杂而强烈，如同被唤醒的僵尸般令人震撼",
            ingredients: "多种朗姆酒、热带水果汁、香料",
            stats: {alcohol: 5, sweetness: 4, acidity: 3, bitterness: 2, complexity: 5, body: 4}
        },
        {
            id: 106,
            categoryId: 1,
            name: "特别的人",
            price: 38,
            image: "https://pic1.imgdb.cn/item/68994deb58cb8da5c8180746.webp",
            description: "为特别的人调制的特别鸡尾酒，清新果香与温和酒精的完美平衡，如同那个特别的人给你的感觉",
            ingredients: "金酒、朗姆、红石榴糖浆、养乐多",
            stats: {alcohol: 3, sweetness: 4, acidity: 3, bitterness: 1, complexity: 2, body: 4}
        },
        {
            id: 107,
            categoryId: 1,
            name: "尼格罗尼",
            price: 38,
            image: "https://s21.ax1x.com/2025/08/10/pVdZB2n.webp",
            description: "意大利经典鸡尾酒，金酒、红味美思和金巴利的完美融合，苦中带甜的复杂口感",
            ingredients: "金酒、红味美思、金巴利",
            stats: {alcohol: 5, sweetness: 3, acidity: 1, bitterness: 5, complexity: 4, body: 3}
        },
        {
            id: 108,
            categoryId: 1,
            name: "蓝色夏威夷",
            price: 38,
            image: "https://s21.ax1x.com/2025/08/10/pVdZa5Q.webp",
            description: "如同夏威夷海滩般湛蓝的鸡尾酒，朗姆酒的醇厚与蓝柑橘的甜美，椰浆增添热带风情",
            ingredients: "朗姆、蓝柑橘利口酒、菠萝汁、柠檬汁",
            stats: {alcohol: 2, sweetness: 4, acidity: 3, bitterness: 1, complexity: 2, body: 3}
        },
        {
            id: 109,
            categoryId: 1,
            name: "长岛冰茶",
            price: 48,
            image: "https://s21.ax1x.com/2025/05/21/pExgjWd.webp",
            description: "据说在二十世纪二十年代美国禁酒令期间，酒保将烈酒与可乐混成一杯看似茶的饮品。另一种说是在1972年，由长岛橡树滩客栈的酒保发明了这种以四种基酒混制出来的饮料。四种基酒的完美融合，口感如同冰茶般顺滑，却蕴含着强大的力量",
            ingredients: "金酒、伏特加、朗姆、龙舌兰、君度、柠檬汁、可乐",
            stats: {alcohol: 5, sweetness: 3, acidity: 3, bitterness: 1, complexity: 3, body: 2}
        },
        {
            id: 110,
            categoryId: 1,
            name: "椰林飘香",
            price: 38,
            image: "https://pic1.imgdb.cn/item/68994dcf58cb8da5c8180737.webp",
            description: "热带风情的经典鸡尾酒，朗姆酒的醇厚与椰子的香甜，菠萝汁增添一丝酸甜",
            ingredients: "白朗姆、椰子利口酒、菠萝汁、椰奶",
            stats: {alcohol: 2, sweetness: 5, acidity: 2, bitterness: 1, complexity: 2, body: 5}
        },
        {
            id: 111,
            categoryId: 1,
            name: "帕洛玛",
            price: 28,
            image: "https://s21.ax1x.com/2025/08/10/pVdZjGd.webp",
            description: "墨西哥经典鸡尾酒，龙舌兰的烈性与西柚的清新，苏打水增添气泡感",
            ingredients: "龙舌兰、西柚汁、青柠汁、苏打水",
            stats: {alcohol: 2, sweetness: 2, acidity: 3, bitterness: 2, complexity: 2, body: 2}
        },
        {
            id: 112,
            categoryId: 1,
            name: "极光",
            price: 38,
            image: "https://s21.ax1x.com/2025/08/10/pVdZwCj.webp",
            description: "如同北极光般绚丽的层次感，伏特加的清爽与蓝柑橘的甜美，柠檬汁带来清新平衡",
            ingredients: "伏特加、蓝柑橘利口酒、水溶C、红石榴糖浆",
            stats: {alcohol: 2, sweetness: 5, acidity: 3, bitterness: 1, complexity: 1, body: 3}
        },
        {
            id: 113,
            categoryId: 1,
            name: "沦陷",
            price: 28,
            image: "https://s21.ax1x.com/2025/08/10/pVdZNVS.webp",
            description: "醇厚的巧克力香气与咖啡的苦香完美融合，如同沦陷在甜蜜的诱惑中",
            ingredients: "伏特加、蓝橙利口酒、水溶C、红石榴糖浆",
            stats: {alcohol: 2, sweetness: 5, acidity: 3, bitterness: 1, complexity: 1, body: 3}
        },
        {
            id: 114,
            categoryId: 1,
            name: "金汤力",
            price: 28,
            image: "https://s21.ax1x.com/2025/05/20/pExYGDI.webp",
            description: "清爽提神的经典调酒，金酒的草本香气与汤力水的苦甜完美融合",
            ingredients: "金酒、汤力水",
            stats: {alcohol: 2, sweetness: 2, acidity: 1, bitterness: 3, complexity: 3, body: 1}
        },
        {
            id: 115,
            categoryId: 1,
            name: "高潮",
            price: 28,
            image: "https://s21.ax1x.com/2025/08/10/pVdZ08s.webp",
            description: "层次丰富的口感，从清爽到醇厚，如同情绪的起伏，最终达到高潮",
            ingredients: "百利甜、君度、橙汁",
            stats: {alcohol: 2, sweetness: 4, acidity: 2, bitterness: 1, complexity: 2, body: 4}
        },
        {
            id: 116,
            categoryId: 1,
            name: "蒂芙尼蓝",
            price: 28,
            image: "https://pic1.imgdb.cn/item/68994deb58cb8da5c8180747.webp",
            description: "如同蒂芙尼蓝宝石般优雅的鸡尾酒，伏特加的清爽与蓝柑橘的甜美，柠檬汁增添一丝酸爽",
            ingredients: "椰子利口酒、蓝柑橘利口酒、君度、牛奶",
            stats: {alcohol: 2, sweetness: 4, acidity: 1, bitterness: 1, complexity: 2, body: 5}
        }
    ]
};