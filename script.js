/* ==========================================================================
   ҶДММ "БАҲОРИ ПУРФАЙЗ" — 3D САЙТИ ИНТЕРАКТИВӢ
   100% MONTSERRAT | 3 ЗАБОН (TG / RU / UZ) | LIGHT & DARK MODE | ОПТИМИЗИРОВАН
   АНИМАТСИЯИ ВОҚЕИИ МОҲИИ АСЛӢ БЕ ФОН (100% TRANSPARENT REAL CATFISH)
   WHATSAPP & PHONE: +992 556 57 53 53
   ========================================================================== */

const WHATSAPP_PHONE = '992556575353';
const DISPLAY_PHONE = '+992 556 57 53 53';

// ──────────────────────────────────────────────────────────────────────────
// 1. TRANSLATIONS (ТОҶИКӢ, РУССКИЙ, O'ZBEKCHA)
// ──────────────────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  tg: {
    logo_title: "БАҲОРИ ПУРФАЙЗ",
    logo_subtitle: "ҶДММ • МОҲИПАРВАРӢ ВА КОРКАРД",
    nav_home: "Асосӣ",
    nav_catalog: "Маҳсулотҳо",
    nav_process: "Аз Ҳавз то Дастархон",
    nav_calc: "Ҳисобкунак",
    nav_gallery: "Галерея",
    nav_about: "Дар бораи мо",
    nav_contact: "Тамос",
    header_order_btn: "Фармоиш: +992 556 57 53 53",
    hero_badge: "100% МОҲИИ ЗИНДАИ ТАБИӢ ВА МАҲСУЛОТИ ОЛӢ",
    hero_title_1: "Моҳипарварии Муосир,",
    hero_title_2: "Лаззати Беназири Табиӣ",
    hero_desc: "Парвариш аз 0 дар оби тозаи чашмаҳои кӯҳӣ: аз молёк ва моҳии зиндаи калон то маҳсулоти болаззати тайёр ва нимтайёр (Котлет, Шашлик, Нарезной, Филе, Духовка ва Заморозка) барои оила ва зиёфатҳои шумо.",
    hero_btn_catalog: "Дидани Маҳсулотҳо",
    hero_btn_process: "Раванди Парвариш",
    stat_1_val: "Аз 0",
    stat_1_lbl: "Парвариши пурраи молёк",
    stat_2_lbl: "Экологӣ ва бе кимиёвӣ",
    stat_3_lbl: "Намуди маҳсулоти тайёр",
    stat_4_lbl: "Интиқоли тозаву сард",
    scroll_down: "Ба поён гузаред",
    cat_tag: "МАҲСУЛОТИ БОСИФАТ ВА ТАБИӢ",
    cat_title_1: "Каталоги Маҳсулоти",
    cat_title_2: "\"Баҳори Пурфайз\"",
    cat_desc: "Ҳамаи маҳсулотҳо бо аксҳои воқеӣ, таркиб ва тарзи пухтан. Барои дидани ҳамаи аксҳои гурӯҳ ва маълумоти муфассал рӯи маҳсулот клик намоед.",
    filter_all: "Ҳамаи Маҳсулотҳо",
    filter_semi: "Нимтайёр (Котлет, Шашлик, Духовка)",
    filter_fresh: "Тару тоза (Филе, Нарезной)",
    filter_frozen: "Яхкардашуда (Заморозка)",
    filter_live: "Моҳии Зинда ва Молёк",
    search_placeholder: "Ҷустуҷӯи маҳсулот...",
    view_details: "Муфассал",
    order_btn: "Фармоиш",
    price_approx: "Нархи тахминӣ:",
    order_whatsapp_btn: "Фармоиш бо WhatsApp",
    call_btn: "Занг задан",
    tab_cooking: "Тарзи пухтан",
    tab_benefits: "Фоида ва Таркиб",
    tab_packaging: "Бастабандӣ",
    modal_quality_guarantee: "(100% Сифати кафолатнок ва гигиена)",
    proc_tag: "ТЕХНОЛОГИЯИ ТОЗА ВА АЗ 0",
    proc_title_1: "Аз Ҳавзи Тозаи Кӯҳӣ то",
    proc_title_2: "Дастархони Шумо",
    proc_desc: "Моҳии мо дар обҳои равони мусаффо ва ҳавои тоза парвариш ёфта, бо риояи тамоми қоидаҳои санитарӣ ба маҳсулоти болаззат табдил дода мешавад.",
    pstep1_title: "1. Парвариш аз 0",
    pstep1_desc: "Интихоби насли тоза ва парвариши молёкҳо дар ҳавзҳои махсуси инкубатсионӣ бо оби ҳамеша гардишкунанда.",
    pstep2_title: "2. Ғизои 100% Табиӣ",
    pstep2_desc: "Истифодаи танҳо хӯрокҳои табиии дорои витаминҳо ва минералҳо, бе иловаҳои кимиёвӣ ва антибиотикҳо.",
    pstep3_title: "3. Сайди Моҳии Зинда",
    pstep3_desc: "Сайди фаврии моҳии калон ва солим аз ҳавзҳо бевосита пеш аз коркард ва бастабандӣ.",
    pstep4_title: "4. Коркарди Махсус",
    pstep4_desc: "Тозакунии касбӣ, филе кардан, маринад кардани шашлик ва тайёр намудани котлетҳои хушбӯй.",
    pstep5_title: "5. Интиқоли Сард",
    pstep5_desc: "Бастабандии бехатар дар қуттиҳои сард (термобокс) ва расонидани зуд ба дастархони шумо.",
    calc_badge: "ҲИСОБКУНАКИ ОСОН",
    calc_title: "Фармоиши худро дар 1 дақиқа ҳисоб кунед",
    calc_desc: "Маҳсулоти дилхоҳ ва миқдори лозимаро интихоб намоед. Система паёми омодашударо барои WhatsApp тартиб медиҳад!",
    calc_step1: "1. Маҳсулотро интихоб кунед:",
    calc_step2: "2. Миқдор (Кг / Порсия):",
    calc_step3: "3. Тарзи қабул:",
    calc_unit_kg: "Кг",
    deliv_address: "Интиқол ба суроға",
    deliv_box: "Дар термобокси сард",
    deliv_pickup: "Худам мегирам (Самовывоз)",
    deliv_pond: "Аз ҳавз ё нуқтаи фурӯш",
    summary_choice: "Интихоб:",
    summary_volume: "Ҳаҷм:",
    summary_status: "Ҳолат:",
    summary_fresh_live: "Тару тоза аз моҳии зинда",
    send_whatsapp_btn: "Фармоиш ба WhatsApp (+992 556 57 53 53)",
    send_telegram_btn: "Фармоиш ба Telegram",
    gallery_tag: "АКСҲОИ ВОҚЕӢ",
    gallery_title_1: "Галереяи Аксҳои",
    gallery_title_2: "Маҳсулот ва Ҳавзҳо",
    gallery_desc: "Ҳамаи суратҳо бе филтр ва мустақиман аз маҳсулоти тайёркардаи худамон мебошанд. Барои калон дидан клик кунед.",
    about_tag: "СИФАТИ КАФОЛАТНОК",
    about_title_1: "Чаро ҶДММ",
    about_title_2: "\"Баҳори Пурфайз\"",
    about_title_3: "-ро интихоб мекунанд?",
    about_desc: "Мо на танҳо фурӯшанда, балки истеҳсолкунандаи воқеӣ ҳастем. Ҳамаи марҳилаҳо — аз наслгирӣ ва парвариши молёк то сайди моҳии калони зинда ва тайёр намудани маҳсулоти нимтайёр дар зери назорати қатъии мутахассисони мо қарор дорад.",
    adv1_title: "Оби Тозаи Чашмаҳо",
    adv1_desc: "Ҳавзҳои мо бо оби равони кӯҳӣ таъмин буда, гӯшти моҳиро ниҳоят болаззат ва бе бӯи лой мегардонад.",
    adv2_title: "Моҳии Ҳамеша Зинда",
    adv2_desc: "Маҳсулот танҳо аз моҳии зинда омода шуда, тозагӣ ва табииии он 100% кафолат дода мешавад.",
    adv3_title: "Нархи Истеҳсолкунанда",
    adv3_desc: "Шумо маҳсулотро бе миёнаравҳо, бо нархи дастраси яклухт ва чакана харидорӣ мекунед.",
    adv4_title: "Ҳамкорӣ бо Хоҷагиҳо",
    adv4_desc: "Таъмини доимии молёк ва моҳии вазнин барои дигар ҳавзҳо, ошхонаҳо ва ресторанҳо.",
    eco_badge_title: "Сатҳи Олии Экологӣ",
    eco_badge_sub: "Парвариши тоза аз 0",
    faq_tag: "САВОЛҲОИ МУҲИМ",
    faq_title_1: "Саволу Ҷавобҳои",
    faq_title_2: "Зуд-зуд пурсидашаванда",
    faq_q1: "Оё моҳӣ ва маҳсулоти шумо 100% ҳалол ва табиӣ аст?",
    faq_a1: "Бале! Ҳамаи маҳсулоти мо танҳо аз моҳии зинда бо ғизои табиӣ парвариш ёфта, бо риояи тамоми талаботҳои шариат ва гигиена коркард мешаванд. Ягон намуди маводи кимиёвӣ истифода намешавад.",
    faq_q2: "Интиқол чӣ тавр сурат мегирад?",
    faq_a2: "Мо маҳсулотро дар қуттиҳои термобокси махсуси хунуккунанда интиқол медиҳем, то ки тару тоза ва яхбастагии маҳсулот то расидан ба дасти шумо пурра ҳифз шавад.",
    faq_q3: "Оё молёкро барои ҳавзҳои шахсӣ ё хоҷагиҳо харидан мумкин аст?",
    faq_a3: "Бале, мо молёки зотӣ ва солимро бо нархи яклухт пешниҳод менамоем. Инчунин барои дуруст парвариш кардан ва ғизодиҳӣ машварати касбии ройгон медиҳем.",
    faq_q4: "Чӣ тавр метавонам маҳсулотро фармоиш диҳам?",
    faq_a4: "Шумо метавонед тавассути сомона тугмаи WhatsApp-ро пахш намуда (+992 556 57 53 53) мустақиман фармоиш диҳед ё ба рақамҳои мо занг занед.",
    contacts_tag: "АЛОҚА ВА СУРОҒА",
    contacts_title: "Бо Мо Дар Тамос Бошед",
    contacts_desc: "Барои фармоиши яклухт ва чакана, харидани молёк ё ҳамкории доимӣ бо мо тамос гиред:",
    c_wa_label: "Фармоиш дар WhatsApp",
    c_phone_label: "Занги телефонӣ",
    c_loc_label: "Ҷойгиршавӣ",
    c_loc_val: "Ҷумҳурии Тоҷикистон, Хоҷагии Моҳипарварӣ",
    c_time_label: "Реҷаи корӣ",
    c_time_val: "Ҳамарӯза аз соати 08:00 то 20:00",
    form_title: "Паёми худро фиристед",
    form_name_lbl: "Номи Шумо:",
    form_name_ph: "Номатонро нависед...",
    form_phone_lbl: "Рақами телефон:",
    form_prod_lbl: "Маҳсулоти дилхоҳ:",
    form_msg_lbl: "Шарҳ ё савол:",
    form_msg_ph: "Миқдор, суроға ё шарҳи иловагӣ...",
    form_submit_btn: "Фиристодани паём ба WhatsApp",
    footer_bio: "Истеҳсолкунандаи боэътимоди моҳии зинда, молёк ва маҳсулоти болаззати нимтайёри табиӣ дар Тоҷикистон.",
    footer_prods_title: "Маҳсулотҳо",
    footer_pages_title: "Саҳифаҳо",
    footer_contacts_title: "Тамос ва Шабакаҳо",
    all_rights: "Ҳамаи ҳуқуқҳо маҳфузанд.",
    footer_credit: "Муосиртарин сайти 3D моҳипарварӣ бо сифати олӣ"
  },
  ru: {
    logo_title: "БАХОРИ ПУРФАЙЗ",
    logo_subtitle: "ООО • РЫБОВОДСТВО И ПЕРЕРАБОТКА",
    nav_home: "Главная",
    nav_catalog: "Продукция",
    nav_process: "От бассейна до стола",
    nav_calc: "Калькулятор",
    nav_gallery: "Галерея",
    nav_about: "О компании",
    nav_contact: "Контакты",
    header_order_btn: "Заказ: +992 556 57 53 53",
    hero_badge: "100% НАТУРАЛЬНАЯ ЖИВАЯ РЫБА И ПОЛУФАБРИКАТЫ",
    hero_title_1: "Современное Рыбоводство,",
    hero_title_2: "Неповторимый Натуральный Вкус",
    hero_desc: "Выращивание с нуля в чистейшей родниковой воде: от малька и отборной живой рыбы до вкуснейших полуфабрикатов (Котлеты, Шашлык, Нарезной стейк, Филе, Для духовки и Заморозка) к вашему столу.",
    hero_btn_catalog: "Смотреть продукцию",
    hero_btn_process: "Процесс выращивания",
    stat_1_val: "С 0",
    stat_1_lbl: "Выращивание малька с икры",
    stat_2_lbl: "Экологично, без химикатов",
    stat_3_lbl: "Видов готовой продукции",
    stat_4_lbl: "Свежая доставка 24/7",
    scroll_down: "Листайте вниз",
    cat_tag: "КАЧЕСТВЕННАЯ И НАТУРАЛЬНАЯ РЫБА",
    cat_title_1: "Каталог Продукции",
    cat_title_2: "\"Бахори Пурфайз\"",
    cat_desc: "Вся продукция с реальными фото, составом и рецептами приготовления. Нажмите на товар, чтобы увидеть все фото и подробную информацию.",
    filter_all: "Вся продукция",
    filter_semi: "Полуфабрикаты (Котлеты, Шашлык, Духовка)",
    filter_fresh: "Свежая рыба (Филе, Стейки)",
    filter_frozen: "Шоковая заморозка",
    filter_live: "Живая рыба и Малёк",
    search_placeholder: "Поиск продукции...",
    view_details: "Подробнее",
    order_btn: "Заказать",
    price_approx: "Ориентировочная цена:",
    order_whatsapp_btn: "Заказать в WhatsApp",
    call_btn: "Позвонить",
    tab_cooking: "Как готовить",
    tab_benefits: "Польза и состав",
    tab_packaging: "Упаковка",
    modal_quality_guarantee: "(100% Контроль качества и гигиены)",
    proc_tag: "ЧИСТЫЕ ТЕХНОЛОГИИ С НУЛЯ",
    proc_title_1: "От горных бассейнов до",
    proc_title_2: "Вашего стола",
    proc_desc: "Наша рыба растет в чистой проточной воде на натуральных кормах, проходя строгий санитарный контроль на каждом этапе.",
    pstep1_title: "1. Выращивание с нуля",
    pstep1_desc: "Селекция чистых пород и бережное выращивание малька в инкубационных бассейнах с постоянным протоком воды.",
    pstep2_title: "2. 100% Натуральный корм",
    pstep2_desc: "Только сбалансированные натуральные корма без гормонов роста, химии и антибиотиков.",
    pstep3_title: "3. Вылов живой рыбы",
    pstep3_desc: "Быстрый вылов здоровой крупной рыбы непосредственно перед переработкой и разделкой.",
    pstep4_title: "4. Профессиональная разделка",
    pstep4_desc: "Идеальная филейная разделка, фирменный маринад для шашлыка и нежные рыбные котлеты.",
    pstep5_title: "5. Холодная доставка",
    pstep5_desc: "Вакуумная упаковка и доставка в термобоксах со льдом с гарантией свежести.",
    calc_badge: "УДОБНЫЙ КАЛЬКУЛЯТОР",
    calc_title: "Рассчитайте ваш заказ за 1 минуту",
    calc_desc: "Выберите товар и нужное количество. Система автоматически составит сообщение для WhatsApp!",
    calc_step1: "1. Выберите продукт:",
    calc_step2: "2. Количество (Кг / Порции):",
    calc_step3: "3. Способ получения:",
    calc_unit_kg: "Кг",
    deliv_address: "Доставка по адресу",
    deliv_box: "В охлаждаемом термобоксе",
    deliv_pickup: "Самовывоз",
    deliv_pond: "С рыбного хозяйства или точки",
    summary_choice: "Выбрано:",
    summary_volume: "Объем:",
    summary_status: "Статус:",
    summary_fresh_live: "Свежая из живой рыбы",
    send_whatsapp_btn: "Заказать в WhatsApp (+992 556 57 53 53)",
    send_telegram_btn: "Заказать в Telegram",
    gallery_tag: "РЕАЛЬНЫЕ ФОТОГРАФИИ",
    gallery_title_1: "Галерея Фотографий",
    gallery_title_2: "Продукции и Хозяйства",
    gallery_desc: "Все фото без фильтров и сделаны напрямую с нашей готовой продукции. Нажмите для увеличения.",
    about_tag: "ГАРАНТИЯ КАЧЕСТВА",
    about_title_1: "Почему выбирают ООО",
    about_title_2: "\"Бахори Пурфайз\"",
    about_title_3: "?",
    about_desc: "Мы не просто продавцы, а прямой производитель с полным циклом. От икринки и малька до отборной живой рыбы и полуфабрикатов ресторанного уровня.",
    adv1_title: "Чистая родниковая вода",
    adv1_desc: "Проточные горные бассейны делают мясо рыбы нежным, сладким и абсолютно без запаха тины.",
    adv2_title: "Всегда живая рыба",
    adv2_desc: "Продукция готовится исключительно из свежевыловленной живой рыбы в день заказа.",
    adv3_title: "Честная цена производителя",
    adv3_desc: "Покупка напрямую без наценок посредников оптом и в розницу.",
    adv4_title: "Сотрудничество с хозяйствами",
    adv4_desc: "Поставки здорового малька и товарной рыбы для ресторанов и других рыбоводных ферм.",
    eco_badge_title: "Высший Эко-Стандарт",
    eco_badge_sub: "Чистое выращивание с нуля",
    faq_tag: "ВАЖНЫЕ ВОПРОСЫ",
    faq_title_1: "Часто Задаваемые",
    faq_title_2: "Вопросы и Ответы",
    faq_q1: "Продукция на 100% Халяль и натуральная?",
    faq_a1: "Да! Вся рыба выращивается на чистой воде и натуральном питании с соблюдением всех норм шариата и строгой гигиены.",
    faq_q2: "Как осуществляется доставка?",
    faq_a2: "Мы доставляем рыбу в специальных термобоксах со льдом, сохраняя идеальную температуру и свежесть.",
    faq_q3: "Можно ли купить малька для своего пруда?",
    faq_a3: "Да, мы реализуем здорового племенного малька оптом и предоставляем бесплатные консультации по выращиванию.",
    faq_q4: "Как сделать заказ?",
    faq_a4: "Нажмите кнопку WhatsApp (+992 556 57 53 53) на сайте или позвоните по указанным номерам телефона.",
    contacts_tag: "СВЯЗЬ И АДРЕС",
    contacts_title: "Свяжитесь С Нами",
    contacts_desc: "Для оптовых и розничных заказов, покупки малька или постоянного сотрудничества:",
    c_wa_label: "Заказ в WhatsApp",
    c_phone_label: "Телефонный звонок",
    c_loc_label: "Местоположение",
    c_loc_val: "Республика Таджикистан, Рыбоводное Хозяйство",
    c_time_label: "Режим работы",
    c_time_val: "Ежедневно с 08:00 до 20:00",
    form_title: "Отправьте заявку",
    form_name_lbl: "Ваше имя:",
    form_name_ph: "Введите ваше имя...",
    form_phone_lbl: "Номер телефона:",
    form_prod_lbl: "Желаемый продукт:",
    form_msg_lbl: "Комментарий:",
    form_msg_ph: "Количество, адрес доставки...",
    form_submit_btn: "Отправить заказ в WhatsApp",
    footer_bio: "Надежный производитель живой рыбы, малька и натуральных рыбных деликатесов в Таджикистане.",
    footer_prods_title: "Продукция",
    footer_pages_title: "Навигация",
    footer_contacts_title: "Контакты и соцсети",
    all_rights: "Все права защищены.",
    footer_credit: "Современный 3D сайт рыбоводного комплекса"
  },
  uz: {
    logo_title: "BAHORI PURFAYZ",
    logo_subtitle: "MCHJ • BALIQCHILIK VA QAYTA ISHLASH",
    nav_home: "Bosh sahifa",
    nav_catalog: "Mahsulotlar",
    nav_process: "Hovuzdan dasturxongacha",
    nav_calc: "Kalkulyator",
    nav_gallery: "Galereya",
    nav_about: "Biz haqimizda",
    nav_contact: "Aloqa",
    header_order_btn: "Buyurtma: +992 556 57 53 53",
    hero_badge: "100% TABIIY TIRIK BALIQ VA YARIM TAYYOR MAHSULOTLAR",
    hero_title_1: "Zamonaviy Baliqchilik,",
    hero_title_2: "Betakror Tabiiy Ta'm",
    hero_desc: "Tog' buloq suvlarida 0 dan yetishtirish: mayda baliqcha (molyok) va yirik tirik baliqlardan tortib, eng lazzatli tayyor va yarim tayyor mahsulotlargacha (Kotlet, Shashlik, Steyk, File, Duxovka va Muzlatilgan).",
    hero_btn_catalog: "Mahsulotlarni ko'rish",
    hero_btn_process: "Yetishtirish jarayoni",
    stat_1_val: "0 dan",
    stat_1_lbl: "Urug'dan to'liq yetishtirish",
    stat_2_lbl: "Ekologik va kimyosiz",
    stat_3_lbl: "Turli xil mahsulotlar",
    stat_4_lbl: "24/7 Yangi yetkazib berish",
    scroll_down: "Pastga tushing",
    cat_tag: "SIFATLI VA TABIIY BALIQ",
    cat_title_1: "Mahsulotlar Katalogi",
    cat_title_2: "\"Bahori Purfayz\"",
    cat_desc: "Barcha mahsulotlar haqiqiy fotosuratlar, tarkib va pishirish usullari bilan. Barcha rasmlarni ko'rish uchun mahsulot ustiga bosing.",
    filter_all: "Barcha Mahsulotlar",
    filter_semi: "Yarim tayyor (Kotlet, Shashlik, Duxovka)",
    filter_fresh: "Yangi baliq (File, Steyk)",
    filter_frozen: "Muzlatilgan (Zamorozka)",
    filter_live: "Tirik Baliq va Molyok",
    search_placeholder: "Mahsulotni qidirish...",
    view_details: "Batafsil",
    order_btn: "Buyurtma",
    price_approx: "Taxminiy narx:",
    order_whatsapp_btn: "WhatsApp orqali buyurtma",
    call_btn: "Qo'ng'iroq qilish",
    tab_cooking: "Pishirish usuli",
    tab_benefits: "Foydasi va Tarkibi",
    tab_packaging: "Qadoqlash",
    modal_quality_guarantee: "(100% Sifat va gigiyena kafolati)",
    proc_tag: "0 DAN TOZA TEXNOLOGIYA",
    proc_title_1: "Tog' hovuzlaridan to",
    proc_title_2: "Dasturxoningizgacha",
    proc_desc: "Bizning baliqlar toza oqar tog' suvlarida, tabiiy ozuqalar bilan parvarish qilinadi va barcha gigiyena qoidalariga rioya qilingan holda tayyorlanadi.",
    pstep1_title: "1. 0 dan yetishtirish",
    pstep1_desc: "Toza zotlarni tanlash va inkubatsiya hovuzlarida toza oqar suvda chavoq yetishtirish.",
    pstep2_title: "2. 100% Tabiiy Ozuqa",
    pstep2_desc: "Faqat tabiiy vitaminlarga boy ozuqalar, kimyoviy moddalar va antibiotiklarsiz.",
    pstep3_title: "3. Tirik Baliqni Tutish",
    pstep3_desc: "Qayta ishlashdan oldin bevosita hovuzdan sog'lom va yirik baliqlarni tutish.",
    pstep4_title: "4. Maxsus Ishlov Berish",
    pstep4_desc: "Professional tozalash, filesini ajratish, shashlikni marinadlash va mazali kotletlar tayyorlash.",
    pstep5_title: "5. Sovuq Yetkazib Berish",
    pstep5_desc: "Vakuumli qadoqlash va muzli termobokslarda yangiligini saqlagan holda tezkor yetkazish.",
    calc_badge: "QULAY KALKULYATOR",
    calc_title: "Buyurtmangizni 1 daqiqada hisoblang",
    calc_desc: "Mahsulot va kerakli miqdorni tanlang. Tizim avtomatik tarzda WhatsApp uchun xabar tayyorlaydi!",
    calc_step1: "1. Mahsulotni tanlang:",
    calc_step2: "2. Miqdor (Kg / Porsiya):",
    calc_step3: "3. Qabul qilish usuli:",
    calc_unit_kg: "Kg",
    deliv_address: "Manzilga yetkazish",
    deliv_box: "Sovuq termoboksda",
    deliv_pickup: "O'zim olib ketaman",
    deliv_pond: "Hovuz yoki savdo nuqtasidan",
    summary_choice: "Tanlov:",
    summary_volume: "Hajm:",
    summary_status: "Holat:",
    summary_fresh_live: "Tirik baliqdan yangi tayyorlangan",
    send_whatsapp_btn: "WhatsApp ga yuborish (+992 556 57 53 53)",
    send_telegram_btn: "Telegram ga yuborish",
    gallery_tag: "HAQIQIY FOTOLAR",
    gallery_title_1: "Mahsulotlar va",
    gallery_title_2: "Hovuzlar Galereyasi",
    gallery_desc: "Barcha fotosuratlar filtrsiz, to'g'ridan-to'g'ri o'z mahsulotlarimizdan olingan. Kattalashtirish uchun bosing.",
    about_tag: "KAFOLATLANGAN SIFAT",
    about_title_1: "Nega MCHJ",
    about_title_2: "\"Bahori Purfayz\"",
    about_title_3: "ni tanlashadi?",
    about_desc: "Biz shunchaki sotuvchi emas, balki to'liq siklli haqiqiy ishlab chiqaruvchimiz. Urug'dan tortib to dasturxongacha bo'lgan barcha jarayonlar nazorat ostida.",
    adv1_title: "Toza Buloq Suvlari",
    adv1_desc: "Hovuzlarimiz tog' suvlari bilan ta'minlangan bo'lib, baliq go'shtini juda mazali va loy hidsiz qiladi.",
    adv2_title: "Har Doim Tirik Baliq",
    adv2_desc: "Mahsulotlar faqat buyurtma kuni yangi tutilgan tirik baliqlardan tayyorlanadi.",
    adv3_title: "Ishlab Chiqaruvchi Narxi",
    adv3_desc: "Vositalarsiz, ulgurji va chakana qulay narxlarda to'g'ridan-to'g'ri xarid qilasiz.",
    adv4_title: "Xo'jaliklar Bilan Hamkorlik",
    adv4_desc: "Restoranlar va boshqa baliqchilik xo'jaliklari uchun sog'lom chavoq va tayyor baliq yetkazish.",
    eco_badge_title: "Oliy Eko-Standart",
    eco_badge_sub: "0 dan toza yetishtirish",
    faq_tag: "MUHIM SAVOLLAR",
    faq_title_1: "Ko'p Beriladigan",
    faq_title_2: "Savollar va Javoblar",
    faq_q1: "Mahsulotlaringiz 100% Halol va tabiiymi?",
    faq_a1: "Ha! Barcha baliqlar toza suvda tabiiy ozuqa bilan boqiladi va shariat hamda gigiyena qoidalariga to'liq mos keladi.",
    faq_q2: "Yetkazib berish qanday amalga oshiriladi?",
    faq_a2: "Biz mahsulotlarni yangiligini saqlash uchun maxsus muzli termobokslarda yetkazib beramiz.",
    faq_q3: "Shaxsiy hovuz uchun chavoq (molyok) sotib olsa bo'ladimi?",
    faq_a3: "Ha, biz sog'lom zotli chavoqlarni ulgurji narxlarda taqdim etamiz va yetishtirish bo'yicha bepul maslahat beramiz.",
    faq_q4: "Qanday qilib buyurtma bersa bo'ladi?",
    faq_a4: "Saytdagi WhatsApp tugmasini bosing (+992 556 57 53 53) yoki telefon raqamlarimizga qo'ng'iroq qiling.",
    contacts_tag: "ALOQA VA MANZIL",
    contacts_title: "Biz Bilan Bog'laning",
    contacts_desc: "Ulgurji va chakana buyurtmalar, chavoq xaridi yoki doimiy hamkorlik uchun:",
    c_wa_label: "WhatsApp orqali buyurtma",
    c_phone_label: "Telefon qo'ng'irog'i",
    c_loc_label: "Manzil",
    c_loc_val: "Tojikiston Respublikasi, Baliqchilik Xo'jaligi",
    c_time_label: "Ish vaqti",
    c_time_val: "Har kuni 08:00 dan 20:00 gacha",
    form_title: "Xabaringizni yuboring",
    form_name_lbl: "Ismingiz:",
    form_name_ph: "Ismingizni yozing...",
    form_phone_lbl: "Telefon raqami:",
    form_prod_lbl: "Kerakli mahsulot:",
    form_msg_lbl: "Izoh:",
    form_msg_ph: "Miqdori, yetkazish manzili...",
    form_submit_btn: "WhatsApp ga yuborish",
    footer_bio: "Tojikistonda tirik baliq, chavoq va tabiiy lazzatli baliq mahsulotlarining ishonchli ishlab chiqaruvchisi.",
    footer_prods_title: "Mahsulotlar",
    footer_pages_title: "Sahifalar",
    footer_contacts_title: "Aloqa va ijtimoiy tarmoqlar",
    all_rights: "Barcha huquqlar himoyalangan.",
    footer_credit: "Zamonaviy 3D baliqchilik veb-sayti"
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 2. PRODUCT DATABASE (DIRECT ROOT ASSETS)
// ──────────────────────────────────────────────────────────────────────────
const PRODUCTS_DATA = [
  {
    id: "kotlet",
    names: { tg: "Котлетҳои моҳӣ", ru: "Рыбные котлеты", uz: "Baliq kotletlari" },
    category: "semi",
    categoryLabels: { tg: "Маҳсулоти нимтайёр", ru: "Полуфабрикаты", uz: "Yarim tayyor mahsulot" },
    badge: "Хит-фурӯш 🔥",
    mainImage: "kotlet-1.jpg",
    gallery: [
      { src: "kotlet-1.jpg", title: "Котлети моҳии табиӣ (Қуттии аслӣ)" },
      { src: "kotlet-2.jpg", title: "Котлети моҳӣ дар бастаи калон" }
    ],
    price: "26.5 сом. / 1 уп (10 шт)",
    calcPrice: 26.5,
    calcUnit: "уп (10 шт)",
    portion: "1 упаковка (10 дона)",
    descriptions: {
      tg: "Котлетҳои болаззат аз гӯшти холиси моҳии зинда, бе устухон, бо адвиёти махсус ва кабудиҳои тару тоза. Хеле нарм ва зуд пухта мешавад.",
      ru: "Нежнейшие котлеты из чистого мяса живой рыбы без костей, с натуральными специями и зеленью. Готовятся за считанные минуты.",
      uz: "Tirik baliqning suyaksiz toza go'shtidan, maxsus ziravorlar bilan tayyorlangan shirin kotletlar. Tez va oson pishadi."
    },
    cooking: [
      { title: "Дар тоба (Сковорода)", icon: "fa-fire", text: "Дар равғани гарм ҳар ду тарафашро 4-5 дақиқа то тиллоранг шудан бирён кунед." },
      { title: "Дар Духовка (Тафдон)", icon: "fa-temperature-arrow-up", text: "Дар ҳарорати 180°C барои 15-20 дақиқа пазед." },
      { title: "Дар буғ (Парҳезӣ)", icon: "fa-cloud", text: "Дар деги мантупазӣ 15 дақиқа барои кӯдакон ва парҳездорон." }
    ],
    benefits: [
      { label: "100% Табиӣ", desc: "Бе ягон иловаи сунъӣ ва консервант" },
      { label: "Бои сафеда (Белок)", desc: "19г сафеда дар 100г маҳсулот" },
      { label: "Бе устухон", desc: "Гӯшти комилан тозакардашуда" }
    ],
    packaging: "Бастабандии вакуумии гигиении босифат бо яхдони термобокс барои ҳифзи тозагӣ."
  },
  {
    id: "shashlik",
    names: { tg: "Шашлики моҳӣ (Сихдор ва маринад)", ru: "Шашлык из рыбы (На шпажках и маринад)", uz: "Baliq shashligi (Sixli va marinad)" },
    category: "semi",
    categoryLabels: { tg: "Маҳсулоти нимтайёр", ru: "Полуфабрикаты", uz: "Yarim tayyor mahsulot" },
    badge: "Махсус барои Манқал 🍢",
    mainImage: "shashlik-sikh.jpg",
    gallery: [
      { src: "shashlik-sikh.jpg", title: "Шашлики сихдор омода барои манқал" },
      { src: "shashlik-1.jpg", title: "Шашлики моҳӣ бо маринади махсус" },
      { src: "shashlik-2.jpg", title: "Пораҳои шашлики моҳӣ дар табақ" },
      { src: "shashlik-3.jpg", title: "Гӯшти маринадшуда бо лимӯ ва адвияҷот" },
      { src: "shashlik-4.jpg", title: "Маҷмӯаи шашлики моҳӣ барои зиёфат" }
    ],
    price: "65 сом. / 1 пакет",
    calcPrice: 65,
    calcUnit: "пакет",
    portion: "Барои 1 пакет",
    descriptions: {
      tg: "Шашлики лазизи моҳӣ бо маринади махсуси лимӯ, сирпиёз ва гиёҳҳои кӯҳӣ. Омодаи зуд ва таъми шоҳона дар болои оташи манқал.",
      ru: "Премиальный рыбный шашлык в авторском маринаде с лимоном и горными травами. Идеален для мангала, гриля и отдыха на природе.",
      uz: "Limon va tog' giyohlari bilan marinadlangan shohona baliq shashligi. Mangal va gril uchun ajoyib tanlov."
    },
    cooking: [
      { title: "Дар манқал (Болои ангишт)", icon: "fa-fire-flame-curved", text: "Дар оташи пасти ангишт 8-10 дақиқа тобонед, мунтазам гардонед." },
      { title: "Дар электрогриль", icon: "fa-bolt", text: "Дар ҳарорати 200°C барои 7-8 дақиқа пухта мешавад." },
      { title: "Дар духовка бо реҷаи гриль", icon: "fa-temperature-high", text: "Дар қисми болоии духовка 12 дақиқа то қабати тиллоӣ." }
    ],
    benefits: [
      { label: "Маринади ширинсубҳ", desc: "Таъми нарм ва бӯи гуворо" },
      { label: "Омега-3 ва витаминҳо", desc: "Барои саломатии дил ва мағзи сар" },
      { label: "Сайди рӯз", desc: "Фақат аз моҳии ҳамонрӯза сайдшуда" }
    ],
    packaging: "Бастаи махсуси маринаддор, сихҳои тоза ва омода барои истифода дар табиат ва хона."
  },
  {
    id: "nareznoi",
    names: { tg: "Нарезной / Стейкҳои моҳӣ", ru: "Нарезка / Рыбные стейки", uz: "Baliq steyki (Kesilgan)" },
    category: "fresh",
    categoryLabels: { tg: "Тару тоза ва Коркардшуда", ru: "Свежая разделка", uz: "Yangi baliq go'shti" },
    badge: "Стейки Олӣ 🥩",
    mainImage: "nareznoi-1.jpg",
    gallery: [
      { src: "nareznoi-1.jpg", title: "Пораҳои стейки моҳӣ (Нарезной) 1" },
      { src: "nareznoi-2.jpg", title: "Стейкҳои тозаи моҳӣ дар баста 2" }
    ],
    price: "50 сом. / кг",
    calcPrice: 50,
    calcUnit: "кг",
    portion: "Буриши 1.5 - 2 см",
    descriptions: {
      tg: "Пораҳои мукаммал ва баробар буридашудаи моҳӣ. Беҳтарин барои бирён кардан, дам дода пухтан ё тайёр кардани шӯрбои моҳӣ (Уха).",
      ru: "Аккуратные ровные стейки свежей рыбы. Отлично подходят для жарки, запекания с овощами и наваристой ухи.",
      uz: "Bir tekis kesilgan sifatli baliq steyklari. Qovurish, dimlash va mazali baliq sho'rva (Uxa) uchun mo'ljallangan."
    },
    cooking: [
      { title: "Бирён дар тоба", icon: "fa-fire", text: "Бо орд ё бе орд дар равғани зағир ё офтобпараст 5 дақиқа ҳар тараф." },
      { title: "Шӯрбои хушбӯй (Уха)", icon: "fa-bowl-rice", text: "Бо картошка, сабзӣ ва кабудиҳо дар 20 дақиқа тайёр мешавад." },
      { title: "Дар тафдон бо сабзавот", icon: "fa-kitchen-set", text: "Бо помидор ва қаланфури булғорӣ барои 20 дақиқа дам диҳед." }
    ],
    benefits: [
      { label: "Буриши дақиқ", desc: "Ҳамаи пораҳо якхела ва зебо" },
      { label: "Шарбатнок ва мулоим", desc: "Рутубати табиӣ ҳифз мешавад" },
      { label: "Фосфор ва Калсий", desc: "Мустаҳкамкунандаи устухонҳо" }
    ],
    packaging: "Контейнери термо ва вакууми бехатар."
  },
  {
    id: "file",
    names: { tg: "Филеи тоза ва бе устухон", ru: "Филе рыбы (Без костей)", uz: "Toza baliq filesi (Suyaksiz)" },
    category: "fresh",
    categoryLabels: { tg: "Тару тоза ва Коркардшуда", ru: "Свежая разделка", uz: "Yangi baliq go'shti" },
    badge: "Премиум Филе 💎",
    mainImage: "file-1.jpg",
    gallery: [
      { src: "file-1.jpg", title: "Филеи сафеди моҳӣ (Бе устухон) 1" },
      { src: "file-2.jpg", title: "Филеи тозакардашуда дар табақ 2" },
      { src: "file-3.jpg", title: "Филеи тайёри моҳӣ 3" }
    ],
    price: "50 сом. / кг",
    calcPrice: 50,
    calcUnit: "кг",
    portion: "100% Гӯшти холис",
    descriptions: {
      tg: "Гӯшти сафеди мусаффои моҳӣ, бе устухон ва бе пӯст. Беҳтарин интихоб барои кӯдакон, пиронсолон, парҳез ва тарабхонаҳои бонуфуз.",
      ru: "Чистейшее филе без костей и кожи. Идеально для детского и диетического питания, а также ресторанных блюд.",
      uz: "Suyaksiz va terisiz toza oq baliq go'shti. Bolalar, parhez taomlar va restoranlar uchun eng zo'r tanlov."
    },
    cooking: [
      { title: "Дар тоба бо равғани маска", icon: "fa-fire", text: "Бо лимӯ ва равғани маска 3-4 дақиқа ҳар ду тараф." },
      { title: "Филе дар хамир (Кляр)", icon: "fa-egg", text: "Дар тухм ва орд тар карда дар равғани фаровон сурх кунед." },
      { title: "Дар буғ", icon: "fa-cloud", text: "Барои таоми парҳезӣ ва солим." }
    ],
    benefits: [
      { label: "0% Устухон", desc: "Барои кӯдакон комилан бехатар" },
      { label: "Зудҳазм", desc: "Дар 1 соат дар организм ҳазм мешавад" },
      { label: "Диетикӣ", desc: "Калорияи кам ва фоидаи зиёд" }
    ],
    packaging: "Бастаи вакуумии 0.5кг ва 1кг."
  },
  {
    id: "dukhovka",
    names: { tg: "Моҳӣ барои Духовка (Тафдон)", ru: "Рыба для запекания в духовке", uz: "Duxovka uchun tayyor baliq" },
    category: "semi",
    categoryLabels: { tg: "Маҳсулоти нимтайёр", ru: "Полуфабрикаты", uz: "Yarim tayyor mahsulot" },
    badge: "Осон ва Лазиз 🍋",
    mainImage: "dukhovka.jpg",
    gallery: [
      { src: "dukhovka.jpg", title: "Моҳии омода бо лиму ва розмарин барои духовка" },
      { src: "nareznoi-1.jpg", title: "Пораҳои моҳӣ барои тафдон" }
    ],
    price: "55 сом. / 1 уп",
    calcPrice: 55,
    calcUnit: "уп",
    portion: "1 упаковка (штучный)",
    descriptions: {
      tg: "Моҳии покшуда бо буришҳои зебо, маринадшуда бо ҳалқаҳои лимӯ, сирпиёз, шохаҳои розмарин ва равғани зайтун. Танҳо ба тафдон гузоред!",
      ru: "Подготовленная цельная рыба с лимоном, розмарином и оливковым маслом. Просто поставьте в духовку на 25 минут!",
      uz: "Limon, rozmarin va zaytun moyi bilan tayyorlangan butun baliq. Shunchaki duxovkaga qo'ying va 25 daqiqada tayyor bo'ladi!"
    },
    cooking: [
      { title: "Дар духовка бо фолга", icon: "fa-fire-burner", text: "Дар фолга печонида дар 190°C барои 25 дақиқа пазед." },
      { title: "Тафдони кушода", icon: "fa-temperature-high", text: "Барои қабати хушбӯй ва сурхчатоб 5 дақиқаи охир фолгаро кушоед." }
    ],
    benefits: [
      { label: "Вақтро сарфа мекунад", desc: "Ҳама чиз тайёр, танҳо пазед" },
      { label: "Таъми ресторанӣ", desc: "Рецепти махсуси ошпази касбӣ" }
    ],
    packaging: "Дар зарфи махсуси фолгадори омода барои тафдон."
  },
  {
    id: "zamorozka",
    names: { tg: "Моҳии Замороженный (Шоковая заморозка)", ru: "Замороженная рыба (Шоковая IQF)", uz: "Muzlatilgan baliq (Shokli IQF)" },
    category: "frozen",
    categoryLabels: { tg: "Яхкардашуда", ru: "Замороженная", uz: "Muzlatilgan" },
    badge: "Шок-заморозка ❄️",
    mainImage: "zamorozka.jpg",
    gallery: [
      { src: "zamorozka.jpg", title: "Моҳии тоза бо технологияи IQF яхбандии фаврӣ" },
      { src: "file-2.jpg", title: "Филеи яхкардашуда" }
    ],
    price: "30 сом. / кг",
    calcPrice: 30,
    calcUnit: "кг",
    portion: "Бастаҳои 1кг, 2кг, 5кг",
    descriptions: {
      tg: "Моҳии тоза сайдшуда, ки фавран бо технологияи шоковой заморозки (IQF) дар -18°C ях карда мешавад. Тамоми мазза ва сохтори гӯшт бе осеб ҳифз мегардад.",
      ru: "Свежевыловленная рыба мгновенной шоковой заморозки при -18°C. Сохраняет 100% полезных свойств и сочность структуры.",
      uz: "-18°C da tezkor shokli muzlatilgan yangi baliq. Go'shtning shirasi va barcha vitaminlarini to'liq saqlaydi."
    },
    cooking: [
      { title: "Обкунии табиӣ", icon: "fa-droplet", text: "Дар яхдон (холодильник) оҳиста об кунед то шарбаташ нарезад." },
      { title: "Ҳама намуди пухтупаз", icon: "fa-kitchen-set", text: "Пас аз об шудан ба монанди моҳии тоза пухта мешавад." }
    ],
    benefits: [
      { label: "Муҳлати 6 моҳ", desc: "Нигоҳдории дарозмуддат" },
      { label: "Тамоми витаминҳо ҳифз", desc: "Яхбандии ултра-тез" }
    ],
    packaging: "Бастаи вакуумии бисёрқабата."
  },
  {
    id: "live-fish",
    names: { tg: "Моҳии Зиндаи Калон (Аз Ҳавз)", ru: "Живая товарная рыба (Из пруда)", uz: "Tirik yirik baliq (Hovuzdan)" },
    category: "live",
    categoryLabels: { tg: "Зинда ва Парваришӣ", ru: "Живая рыба", uz: "Tirik baliq" },
    badge: "100% Зинда 🐟",
    mainImage: "real-fish.png",
    gallery: [
      { src: "real-fish.png", title: "Моҳии аслии соми ҶДММ Баҳори Пурфайз" },
      { src: "live-fish.jpg", title: "Моҳии зинда дар оби мусаффои чашма" },
      { src: "farm-scenic.jpg", title: "Ҳавзҳои парваришии Баҳори Пурфайз" }
    ],
    price: "40 сом. / кг",
    calcPrice: 40,
    calcUnit: "кг",
    portion: "Аз 1кг то 4кг ҳар дона",
    descriptions: {
      tg: "Моҳии солим ва фаъол, ки дар оби равони чашмаҳои кӯҳӣ калон шудааст. Сайди фаврӣ дар назди муштарӣ ё интиқоли зинда бо зарфҳои оксигендор.",
      ru: "Здоровая активная рыба, выращенная в чистейшей проточной горной воде. Вылов при вас или доставка в живом виде с кислородом.",
      uz: "Tog' buloq suvlarida yetishtirilgan sog'lom va toza tirik baliqlar. Sizning ko'z o'ngingizda tutib beriladi yoki kislorodli idishda yetkaziladi."
    },
    cooking: [
      { title: "Сайди тоза", icon: "fa-water", text: "Барои тӯйҳо, маъракаҳо ва ошхонаҳо." },
      { title: "Ҳамаи таомҳои миллӣ", icon: "fa-utensils", text: "Аз кабоби моҳӣ то моҳии бирён ва шӯрбои шоҳона." }
    ],
    benefits: [
      { label: "Гӯшти ширин", desc: "Аз сабаби оби равони кӯҳӣ" },
      { label: "Бе бӯи лой", desc: "Ҳавзҳои тозаи бетонӣ ва проточный" }
    ],
    packaging: "Интиқол дар об бо оксиген ё сабадҳои махсус."
  },
  {
    id: "molyok",
    names: { tg: "Молёк барои парвариш дар ҳавзҳо", ru: "Малек для зарыбления водоемов", uz: "Chavoq (Molyok) hovuzlar uchun" },
    category: "live",
    categoryLabels: { tg: "Зинда ва Парваришӣ", ru: "Живая рыба", uz: "Tirik baliq" },
    badge: "Барои Бизнес 📈",
    mainImage: "molyok.jpg",
    gallery: [
      { src: "molyok.jpg", title: "Молёкҳои солим ва фаъол дар инкубатор" },
      { src: "farm-scenic.jpg", title: "Маҷмааи парвариш" }
    ],
    price: "Шартномавӣ",
    calcPrice: 0,
    calcUnit: "дона",
    portion: "Аз 5г то 50г барои дона",
    descriptions: {
      tg: "Молёкҳои зотии солим ва боқувват барои хоҷагиҳои моҳипарварӣ, соҳибкорон ва ҳавзҳои шахсӣ. Фоизи баланди зиндамонӣ (98%) ва рушди босуръат.",
      ru: "Высокопродуктивный породистый малек для фермерских и частных прудов. Выживаемость 98%, быстрый набор массы.",
      uz: "Baliqchilik xo'jaliklari va shaxsiy hovuzlar uchun sog'lom zotli chavoqlar (molyok). Yuqori yashovchanlik (98%) va tez o'sish."
    },
    cooking: [
      { title: "Парвариши фоидаовар", icon: "fa-chart-line", text: "Дар 6-8 моҳ то вазни фурӯшӣ (1-2кг) калон мешавад." },
      { title: "Машварати ройгон", icon: "fa-user-doctor", text: "Мутахассисони мо дар ташкили ҳавз ва ғизодиҳӣ ёрӣ мерасонанд." }
    ],
    benefits: [
      { label: "Зоти интихобӣ", desc: "Мутобиқ ба иқлими кишвар" },
      { label: "Эмгузаронидашуда", desc: "Муҳофизат аз бемориҳо" }
    ],
    packaging: "Зарфҳои махсуси интиқоли молёк бо компрессори оксиген."
  }
];

// GALLERY ASSETS
const GALLERY_ITEMS = [
  { src: "real-fish.png", title: "Моҳии аслии соми ҶДММ Баҳори Пурфайз" },
  { src: "shashlik-sikh.jpg", title: "Шашлики сихдор дар табиат" },
  { src: "kotlet-1.jpg", title: "Котлетҳои табиии Баҳори Пурфайз" },
  { src: "file-1.jpg", title: "Филеи тозаи бе устухон" },
  { src: "nareznoi-1.jpg", title: "Стейкҳои нарезной" },
  { src: "shashlik-1.jpg", title: "Маринади шашлики моҳӣ" },
  { src: "kotlet-2.jpg", title: "Бастабандии котлет" },
  { src: "file-2.jpg", title: "Гӯшти сафеди филе" },
  { src: "nareznoi-2.jpg", title: "Пораҳои омодаи нарезной" },
  { src: "shashlik-2.jpg", title: "Пораҳои шашлики махсус" },
  { src: "shashlik-3.jpg", title: "Маринади лимӯӣ" },
  { src: "shashlik-4.jpg", title: "Зиёфати шашлики моҳӣ" },
  { src: "file-3.jpg", title: "Филеи касбӣ" }
];

// ──────────────────────────────────────────────────────────────────────────
// 3. 100% PURE TRANSPARENT REAL CATFISH UNDERWATER SIMULATION ENGINE
// ──────────────────────────────────────────────────────────────────────────
class PureTransparentCatfishAquarium {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.fishes = [];
    this.ripples = [];
    this.bubbles = [];
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.time = 0;
    this.lastFrame = performance.now();

    // Load and Process Real Catfish Image into a Pure Transparent Canvas Sprite
    this.transparentFishCanvas = null;
    this.isReady = false;

    const rawImg = new Image();
    rawImg.crossOrigin = "anonymous";
    rawImg.onload = () => {
      this.transparentFishCanvas = this.createTransparentMask(rawImg);
      this.isReady = true;
    };
    // Load cutout or real-fish
    rawImg.src = 'catfish-cutout.png';
    rawImg.onerror = () => {
      rawImg.src = 'real-fish.png';
    };

    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    window.addEventListener('mousemove', (e) => this.onMouseMove(e), { passive: true });
    window.addEventListener('click', (e) => this.onClick(e), { passive: true });

    this.initFishes();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  // Pixel-level background eraser (Removes any background, grass, or checkerboard completely)
  createTransparentMask(img) {
    const w = img.naturalWidth || img.width || 600;
    const h = img.naturalHeight || img.height || 400;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);

    const imgData = ctx.getImageData(0, 0, w, h);
    const d = imgData.data;

    // Remove background pixels (anything light, checkerboard, or background ground)
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];

      // Checkerboard or white/light background detection
      const isNeutralLight = (Math.abs(r - g) < 12 && Math.abs(g - b) < 12 && r > 165);
      const isPureWhite = (r > 215 && g > 215 && b > 215);
      const isGroundStraw = (r > 130 && g > 115 && b < 100);

      if (isNeutralLight || isPureWhite || isGroundStraw) {
        d[i + 3] = 0; // 100% Transparent
      } else if (r > 140 && g > 140 && b > 140) {
        // Feather edge
        d[i + 3] = Math.floor(d[i + 3] * Math.max(0, (170 - r) / 30));
      }
    }

    ctx.putImageData(imgData, 0, 0);
    return canvas;
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    if (Math.random() > 0.88) {
      this.ripples.push({ x: e.clientX, y: e.clientY, r: 3, alpha: 0.5, maxR: 60 });
    }
  }

  onClick(e) {
    this.ripples.push({ x: e.clientX, y: e.clientY, r: 6, alpha: 0.8, maxR: 120 });
    for (let i = 0; i < 8; i++) {
      this.bubbles.push({
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        r: 2 + Math.random() * 3.5,
        speedY: 1 + Math.random() * 2,
        alpha: 0.7
      });
    }
    // Make fish swim playfully towards click
    this.fishes.forEach(fish => {
      if (Math.random() > 0.3) {
        fish.targetAngle = Math.atan2(e.clientY - fish.y, e.clientX - fish.x) + (Math.random() - 0.5) * 0.4;
        fish.speed = fish.baseSpeed * 1.8;
      }
    });
  }

  initFishes() {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 3 : 5;
    for (let i = 0; i < count; i++) {
      this.fishes.push(new RealCatfishEntity(this.width, this.height, i));
    }
  }

  animate(now) {
    const dt = Math.min((now - this.lastFrame) / 1000, 0.1);
    this.lastFrame = now;
    this.time += dt * 1.2;

    const ctx = this.ctx;
    const W = this.width;
    const H = this.height;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    // Beautiful Pure Water Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    if (isLight) {
      bgGrad.addColorStop(0, '#eaf5fd');
      bgGrad.addColorStop(0.35, '#d6edfc');
      bgGrad.addColorStop(0.75, '#bfe1f8');
      bgGrad.addColorStop(1, '#a8d5f4');
    } else {
      bgGrad.addColorStop(0, '#020b12');
      bgGrad.addColorStop(0.3, '#041522');
      bgGrad.addColorStop(0.7, '#062337');
      bgGrad.addColorStop(1, '#092d46');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Caustic Light Rays shimmering through water
    for (let i = 0; i < 6; i++) {
      const rx = (W / 6) * i + Math.sin(this.time + i) * 60;
      const ray = ctx.createLinearGradient(rx, 0, rx + 100, H * 0.75);
      if (isLight) {
        ray.addColorStop(0, 'rgba(2, 132, 199, 0.08)');
        ray.addColorStop(1, 'rgba(2, 132, 199, 0)');
      } else {
        ray.addColorStop(0, 'rgba(0, 242, 254, 0.06)');
        ray.addColorStop(1, 'rgba(0, 242, 254, 0)');
      }
      ctx.fillStyle = ray;
      ctx.beginPath();
      ctx.moveTo(rx, 0);
      ctx.lineTo(rx + 80, 0);
      ctx.lineTo(rx + 130 + Math.sin(this.time * 0.8) * 25, H * 0.75);
      ctx.lineTo(rx + 15, H * 0.75);
      ctx.closePath();
      ctx.fill();
    }

    // Render Clean Background-Free Real Catfish
    this.fishes.forEach(fish => {
      fish.update(W, H, this.mouseX, this.mouseY, this.time, dt);
      fish.draw(ctx, this.time, this.transparentFishCanvas, this.isReady, isLight);

      if (Math.random() < 0.03) {
        this.bubbles.push({
          x: fish.x,
          y: fish.y,
          r: 1.5 + Math.random() * 3,
          speedY: 0.8 + Math.random() * 1.5,
          alpha: 0.6
        });
      }
    });

    // Bubbles rising
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.y -= b.speedY;
      b.x += Math.sin(b.y * 0.05) * 0.5;
      b.alpha -= 0.003;
      if (b.y < -10 || b.alpha <= 0) {
        this.bubbles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = b.alpha;
      ctx.strokeStyle = isLight ? '#0284c7' : '#00f2fe';
      ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.15)' : 'rgba(0, 242, 254, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // Water Surface Ripples
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const rp = this.ripples[i];
      rp.r += 1.8;
      rp.alpha -= 0.015;
      if (rp.alpha <= 0 || rp.r > rp.maxR) {
        this.ripples.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = rp.alpha;
      ctx.strokeStyle = isLight ? '#0284c7' : '#00f2fe';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(this.animate);
  }
}

// Catfish Entity Class (Draws ONLY the clean catfish body with dynamic whiskers and waves)
class RealCatfishEntity {
  constructor(w, h, index) {
    this.index = index;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.scale = 0.52 + Math.random() * 0.45;
    this.baseSpeed = (1.2 + Math.random() * 1.1) * (1 / this.scale);
    this.speed = this.baseSpeed;
    this.angle = Math.random() * Math.PI * 2;
    this.targetAngle = this.angle;
    this.alpha = 0.82 + Math.random() * 0.18;
    this.width = 230 * this.scale;
    this.height = 130 * this.scale;
  }

  update(w, h, mx, my, time, dt) {
    this.speed += (this.baseSpeed - this.speed) * 0.03;

    if (Math.random() < 0.02) {
      this.targetAngle += (Math.random() - 0.5) * 1.3;
    }

    // Interactive cursor reaction
    const dx = mx - this.x;
    const dy = my - this.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 130) {
      this.targetAngle = Math.atan2(this.y - my, this.x - mx);
      this.speed = this.baseSpeed * 1.4;
    }

    const margin = 70;
    if (this.x < margin) this.targetAngle = 0;
    else if (this.x > w - margin) this.targetAngle = Math.PI;
    if (this.y < margin) this.targetAngle = Math.PI / 2;
    else if (this.y > h - margin) this.targetAngle = -Math.PI / 2;

    let diff = this.targetAngle - this.angle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.angle += diff * 0.045;

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
  }

  draw(ctx, time, transparentSprite, isReady, isLight) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    // Natural body swimming undulation
    const tailWave = Math.sin(time * 5 + this.index) * 0.08;
    ctx.rotate(tailWave);

    ctx.globalAlpha = this.alpha;

    const drawW = this.width;
    const drawH = this.height;

    if (isReady && transparentSprite) {
      // Draw 100% Clean Isolated Transparent Real Catfish with realistic swimming slice-distortion
      const slices = 20;
      const sliceW = drawW / slices;
      for (let i = 0; i < slices; i++) {
        const xPos = -drawW * 0.5 + (i * sliceW);
        const normPos = i / slices; // 0 (tail) to 1 (head) assuming head is on the right
        // Tail wiggles more than the head
        const wiggle = Math.sin(time * 12 - normPos * 6 + this.index) * (18 * (1 - normPos));
        
        ctx.drawImage(
          transparentSprite,
          (transparentSprite.width / slices) * i, 0,
          transparentSprite.width / slices, transparentSprite.height,
          xPos, -drawH * 0.5 + wiggle,
          sliceW + 1, drawH
        );
      }

      // Subtle water shimmer on the catfish skin
      ctx.strokeStyle = isLight ? 'rgba(2, 132, 199, 0.25)' : 'rgba(0, 242, 254, 0.3)';
      ctx.lineWidth = 1.8 * this.scale;
      ctx.beginPath();
      ctx.moveTo(-drawW * 0.3, -drawH * 0.1);
      ctx.quadraticCurveTo(0, -drawH * 0.2 + tailWave * 15, drawW * 0.35, drawH * 0.1);
      ctx.stroke();

      // Flowing dynamic whiskers from head
      ctx.strokeStyle = isLight ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 1.8 * this.scale;
      const whiskerFlex = Math.sin(time * 6 + this.index) * 8 * this.scale;

      // Left whisker
      ctx.beginPath();
      ctx.moveTo(-drawW * 0.35, -drawH * 0.14);
      ctx.quadraticCurveTo(-drawW * 0.5, -drawH * 0.35 + whiskerFlex, -drawW * 0.65, -drawH * 0.45 + whiskerFlex);
      ctx.stroke();

      // Right whisker
      ctx.beginPath();
      ctx.moveTo(-drawW * 0.35, drawH * 0.14);
      ctx.quadraticCurveTo(-drawW * 0.5, drawH * 0.35 - whiskerFlex, -drawW * 0.65, drawH * 0.45 - whiskerFlex);
      ctx.stroke();

    } else {
      // Clean silhouette while loading
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.beginPath();
      ctx.ellipse(0, 0, 45 * this.scale, 20 * this.scale, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

// ──────────────────────────────────────────────────────────────────────────
// 4. UI APPLICATION LOGIC: I18N, THEME, MODALS, CALCULATOR
// ──────────────────────────────────────────────────────────────────────────
class BahoriPurfayzApp {
  constructor() {
    this.currentLang = localStorage.getItem('bp_lang') || 'tg';
    this.currentTheme = localStorage.getItem('bp_theme') || 'dark';
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.currentModalProduct = null;
    this.currentModalImgIdx = 0;
    this.selectedCalcProduct = PRODUCTS_DATA[0];

    this.initDOM();
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLang);
    this.renderProducts();
    this.renderCalculatorSelector();
    this.renderGallery();
    this.bindEvents();
  }

  initDOM() {
    this.themeToggle = document.getElementById('themeToggle');
    this.langBtns = document.querySelectorAll('.lang-btn');
    this.productsContainer = document.getElementById('productsContainer');
    this.filterTabs = document.getElementById('filterTabs');
    this.productSearch = document.getElementById('productSearch');
    
    // Modal
    this.modal = document.getElementById('productModal');
    this.closeModalBtn = document.getElementById('closeModalBtn');
    this.modalMainImg = document.getElementById('modalMainImg');
    this.modalBadge = document.getElementById('modalBadge');
    this.currentImgIndex = document.getElementById('currentImgIndex');
    this.totalImgCount = document.getElementById('totalImgCount');
    this.modalThumbnails = document.getElementById('modalThumbnails');
    this.modalCategory = document.getElementById('modalCategory');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalDescription = document.getElementById('modalDescription');
    this.modalCookingSteps = document.getElementById('modalCookingSteps');
    this.modalBenefits = document.getElementById('modalBenefits');
    this.modalPackaging = document.getElementById('modalPackaging');
    this.modalPrice = document.getElementById('modalPrice');
    this.modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
    this.prevImgBtn = document.getElementById('prevImgBtn');
    this.nextImgBtn = document.getElementById('nextImgBtn');

    // Calculator
    this.calcProductSelector = document.getElementById('calcProductSelector');
    this.calcQuantity = document.getElementById('calcQuantity');
    this.qtyMinus = document.getElementById('qtyMinus');
    this.qtyPlus = document.getElementById('qtyPlus');
    this.summaryProductName = document.getElementById('summaryProductName');
    this.summaryQuantity = document.getElementById('summaryQuantity');
    this.sendWhatsAppOrder = document.getElementById('sendWhatsAppOrder');
    this.sendTelegramOrder = document.getElementById('sendTelegramOrder');

    // Gallery & Lightbox
    this.galleryGrid = document.getElementById('galleryGrid');
    this.lightboxModal = document.getElementById('lightboxModal');
    this.lightboxImg = document.getElementById('lightboxImg');
    this.lightboxCaption = document.getElementById('lightboxCaption');
    this.closeLightboxBtn = document.getElementById('closeLightboxBtn');

    // Header & Mobile Nav
    this.header = document.getElementById('mainHeader');
    this.menuToggle = document.getElementById('menuToggle');
    this.navMenu = document.getElementById('navMenu');
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bp_theme', theme);
  }

  applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('bp_lang', lang);

    this.langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.placeholder = dict[key];
    });

    this.renderProducts();
    this.renderCalculatorSelector();
  }

  renderProducts() {
    if (!this.productsContainer) return;

    const filtered = PRODUCTS_DATA.filter(p => {
      const name = p.names[this.currentLang] || p.names.tg;
      const desc = p.descriptions[this.currentLang] || p.descriptions.tg;
      const matchCat = this.currentCategory === 'all' || p.category === this.currentCategory;
      const matchSearch = name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          desc.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      this.productsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
          <i class="fa-solid fa-fish" style="font-size: 3rem; color: var(--cyan-bright); opacity: 0.5; margin-bottom: 14px;"></i>
          <h3 style="font-size: 1.4rem;">Маҳсулот ёфт нашуд</h3>
        </div>
      `;
      return;
    }

    const dict = TRANSLATIONS[this.currentLang];

    this.productsContainer.innerHTML = filtered.map(product => {
      const name = product.names[this.currentLang] || product.names.tg;
      const desc = product.descriptions[this.currentLang] || product.descriptions.tg;
      const catLabel = product.categoryLabels[this.currentLang] || product.categoryLabels.tg;

      const thumbsHtml = product.gallery.map((g, idx) => `
        <div class="thumb-mini ${idx === 0 ? 'active' : ''}" data-prod-id="${product.id}" data-img-src="${g.src}" title="${g.title}">
          <img src="${g.src}" alt="${g.title}" loading="lazy" />
        </div>
      `).join('');

      return `
        <div class="product-card-3d" data-id="${product.id}">
          <div class="card-img-container">
            <img src="${product.mainImage}" alt="${name}" id="card-img-${product.id}" loading="lazy" />
            <div class="card-badge">${product.badge}</div>
            <div class="card-photo-count">
              <i class="fa-solid fa-camera"></i> ${product.gallery.length}
            </div>
            <div class="card-thumbs-mini">
              ${thumbsHtml}
            </div>
          </div>

          <div class="card-body">
            <div class="card-category">${catLabel}</div>
            <h3 class="card-title">${name}</h3>
            <p class="card-desc">${desc}</p>

            <div class="card-features-row">
              <span class="feature-pill"><i class="fa-solid fa-shield-halved"></i> 100% Табиӣ</span>
              <span class="feature-pill"><i class="fa-solid fa-cube"></i> ${product.portion}</span>
            </div>

            <div class="card-footer-row">
              <div class="card-price-block">
                <span class="card-price-label">${dict.price_approx}</span>
                <span class="card-price-value">${product.price}</span>
              </div>

              <div class="card-btn-group">
                <button class="btn-card-view" data-view-id="${product.id}">
                  <i class="fa-solid fa-eye"></i> ${dict.view_details}
                </button>
                <button class="btn-card-order" data-order-id="${product.id}">
                  <i class="fa-brands fa-whatsapp"></i> ${dict.order_btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind thumb clicks
    this.productsContainer.querySelectorAll('.thumb-mini').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = thumb.getAttribute('data-prod-id');
        const imgSrc = thumb.getAttribute('data-img-src');
        const targetImg = document.getElementById(`card-img-${prodId}`);
        if (targetImg) targetImg.src = imgSrc;
        thumb.parentElement.querySelectorAll('.thumb-mini').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // Bind buttons
    this.productsContainer.querySelectorAll('[data-view-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-view-id');
        this.openProductModal(id);
      });
    });

    this.productsContainer.querySelectorAll('[data-order-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-order-id');
        this.directWhatsAppOrder(id);
      });
    });
  }

  openProductModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    this.currentModalProduct = product;
    this.currentModalImgIdx = 0;

    const name = product.names[this.currentLang] || product.names.tg;
    const desc = product.descriptions[this.currentLang] || product.descriptions.tg;
    const catLabel = product.categoryLabels[this.currentLang] || product.categoryLabels.tg;

    this.modalTitle.textContent = name;
    this.modalCategory.textContent = catLabel;
    this.modalBadge.textContent = product.badge;
    this.modalDescription.textContent = desc;
    this.modalPrice.textContent = product.price;

    this.modalCookingSteps.innerHTML = product.cooking.map(c => `
      <div class="cooking-step-item">
        <i class="fa-solid ${c.icon}"></i>
        <div>
          <strong>${c.title}</strong>
          <p>${c.text}</p>
        </div>
      </div>
    `).join('');

    this.modalBenefits.innerHTML = product.benefits.map(b => `
      <div class="benefit-card-mini">
        <strong>${b.label}</strong>
        <p>${b.desc}</p>
      </div>
    `).join('');

    this.modalPackaging.innerHTML = `
      <p><i class="fa-solid fa-box-open" style="color: var(--cyan-bright); margin-right: 8px;"></i> ${product.packaging}</p>
    `;

    this.updateModalGallery();
    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  updateModalGallery() {
    const gallery = this.currentModalProduct.gallery;
    this.totalImgCount.textContent = gallery.length;
    this.currentImgIndex.textContent = this.currentModalImgIdx + 1;
    this.modalMainImg.src = gallery[this.currentModalImgIdx].src;

    this.modalThumbnails.innerHTML = gallery.map((item, idx) => `
      <div class="modal-thumb-item ${idx === this.currentModalImgIdx ? 'active' : ''}" data-idx="${idx}">
        <img src="${item.src}" alt="${item.title}" />
      </div>
    `).join('');

    this.modalThumbnails.querySelectorAll('.modal-thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        this.currentModalImgIdx = parseInt(thumb.getAttribute('data-idx'));
        this.updateModalGallery();
      });
    });
  }

  closeModal() {
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  renderCalculatorSelector() {
    if (!this.calcProductSelector) return;
    this.calcProductSelector.innerHTML = PRODUCTS_DATA.map((p) => {
      const name = p.names[this.currentLang] || p.names.tg;
      return `
        <div class="calc-product-chip ${p.id === this.selectedCalcProduct.id ? 'active' : ''}" data-calc-id="${p.id}">
          <img src="${p.mainImage}" alt="${name}" />
          <span>${name}</span>
        </div>
      `;
    }).join('');

    this.calcProductSelector.querySelectorAll('.calc-product-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this.calcProductSelector.querySelectorAll('.calc-product-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const id = chip.getAttribute('data-calc-id');
        this.selectedCalcProduct = PRODUCTS_DATA.find(p => p.id === id);
        this.updateCalculatorSummary();
      });
    });

    this.updateCalculatorSummary();
  }

  updateCalculatorSummary() {
    if (!this.summaryProductName) return;
    const qty = this.calcQuantity.value || 1;
    const name = this.selectedCalcProduct.names[this.currentLang] || this.selectedCalcProduct.names.tg;
    const unit = this.selectedCalcProduct.calcUnit || "Кг";
    const price = this.selectedCalcProduct.calcPrice || 0;
    const total = price > 0 ? (price * qty).toFixed(2) : "Шартномавӣ";
    
    this.summaryProductName.textContent = name;
    this.summaryQuantity.textContent = `${qty} ${unit} = ${total} сом.`;
  }

  renderGallery() {
    if (!this.galleryGrid) return;
    this.galleryGrid.innerHTML = GALLERY_ITEMS.map((item, idx) => `
      <div class="gallery-item-card" data-idx="${idx}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay-badge">
          <span>${item.title}</span>
          <i class="fa-solid fa-expand"></i>
        </div>
      </div>
    `).join('');

    this.galleryGrid.querySelectorAll('.gallery-item-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-idx'));
        const item = GALLERY_ITEMS[idx];
        this.lightboxImg.src = item.src;
        this.lightboxCaption.textContent = item.title;
        this.lightboxModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  directWhatsAppOrder(productId) {
    const p = PRODUCTS_DATA.find(item => item.id === productId);
    if (!p) return;
    const name = p.names[this.currentLang] || p.names.tg;
    const msg = `Салом ҶДММ "Баҳори Пурфайз"!\n\n🐟 Маҳсулот: ${name}\n💰 Нарх: ${p.price}\n📦 Сифат: 100% Табиӣ аз моҳии зинда.\n\nЛутфан қабули фармоишро тасдиқ кунед.`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  bindEvents() {
    // Theme Toggle
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(nextTheme);
      });
    }

    // Language Buttons
    this.langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.applyLanguage(lang);
      });
    });

    // Header Scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) this.header.classList.add('scrolled');
      else this.header.classList.remove('scrolled');
    }, { passive: true });

    // Mobile Menu
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.navMenu.classList.toggle('open'));
      this.navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.navMenu.classList.remove('open'));
      });
    }

    // Filter tabs
    if (this.filterTabs) {
      this.filterTabs.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentCategory = btn.getAttribute('data-filter');
          this.renderProducts();
        });
      });
    }

    // Search
    if (this.productSearch) {
      this.productSearch.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderProducts();
      });
    }

    // Modal
    if (this.closeModalBtn) this.closeModalBtn.addEventListener('click', () => this.closeModal());
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    if (this.prevImgBtn) {
      this.prevImgBtn.addEventListener('click', () => {
        if (!this.currentModalProduct) return;
        const count = this.currentModalProduct.gallery.length;
        this.currentModalImgIdx = (this.currentModalImgIdx - 1 + count) % count;
        this.updateModalGallery();
      });
    }

    if (this.nextImgBtn) {
      this.nextImgBtn.addEventListener('click', () => {
        if (!this.currentModalProduct) return;
        const count = this.currentModalProduct.gallery.length;
        this.currentModalImgIdx = (this.currentModalImgIdx + 1) % count;
        this.updateModalGallery();
      });
    }

    // Modal Tabs
    document.querySelectorAll('.tab-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        pill.classList.add('active');
        const tabKey = pill.getAttribute('data-tab');
        const target = document.getElementById(`tab-${tabKey}`);
        if (target) target.classList.add('active');
      });
    });

    if (this.modalWhatsAppBtn) {
      this.modalWhatsAppBtn.addEventListener('click', () => {
        if (this.currentModalProduct) {
          this.directWhatsAppOrder(this.currentModalProduct.id);
        }
      });
    }

    // Calculator Qty
    if (this.qtyMinus) {
      this.qtyMinus.addEventListener('click', () => {
        let val = parseInt(this.calcQuantity.value) || 1;
        if (val > 1) {
          this.calcQuantity.value = val - 1;
          this.updateCalculatorSummary();
        }
      });
    }

    if (this.qtyPlus) {
      this.qtyPlus.addEventListener('click', () => {
        let val = parseInt(this.calcQuantity.value) || 1;
        this.calcQuantity.value = val + 1;
        this.updateCalculatorSummary();
      });
    }

    if (this.calcQuantity) {
      this.calcQuantity.addEventListener('input', () => this.updateCalculatorSummary());
    }

    document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.delivery-radio-card').forEach(c => c.classList.remove('active'));
        radio.closest('.delivery-radio-card').classList.add('active');
      });
    });

    // Send WhatsApp Order
    if (this.sendWhatsAppOrder) {
      this.sendWhatsAppOrder.addEventListener('click', () => {
        const qty = this.calcQuantity.value || 1;
        const delivery = document.querySelector('input[name="deliveryType"]:checked')?.value === 'delivery' ? 'Интиқол ба суроға' : 'Худам мегирам (Самовывоз)';
        const prodName = this.selectedCalcProduct.names[this.currentLang] || this.selectedCalcProduct.names.tg;
        const unit = this.selectedCalcProduct.calcUnit || "Кг";
        const price = this.selectedCalcProduct.calcPrice || 0;
        const total = price > 0 ? (price * qty).toFixed(2) + " сом." : "Шартномавӣ";
        const msg = `Салом ҶДММ "Баҳори Пурфайз"!\n\n📋 Фармоиш:\n🐟 Маҳсулот: ${prodName}\n⚖️ Ҳаҷм: ${qty} ${unit}\n💰 Сумма: ${total}\n🚚 Қабул: ${delivery}\n💳 Пардохт: Корти Алиф / Душанбе Сити\n\nЛутфан нархи ниҳоӣ ва вақти расониданро тасдиқ намоед.`;
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
      });
    }

    // Send Telegram Order
    if (this.sendTelegramOrder) {
      this.sendTelegramOrder.addEventListener('click', () => {
        const qty = this.calcQuantity.value || 1;
        const prodName = this.selectedCalcProduct.names[this.currentLang] || this.selectedCalcProduct.names.tg;
        const msg = `Салом! Фармоиш: ${prodName}, Миқдор: ${qty} Кг. Телефон: ${DISPLAY_PHONE}`;
        window.open(`https://t.me/share/url?url=https://wa.me/${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`, '_blank');
      });
    }

    // Lightbox
    if (this.closeLightboxBtn) {
      this.closeLightboxBtn.addEventListener('click', () => {
        this.lightboxModal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    if (this.lightboxModal) {
      this.lightboxModal.addEventListener('click', (e) => {
        if (e.target === this.lightboxModal) {
          this.lightboxModal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('userName')?.value;
        const phone = document.getElementById('userPhone')?.value;
        const product = document.getElementById('userProduct')?.value;
        const msg = document.getElementById('userMsg')?.value;

        const telegramText = `📩 Паёми нав аз сомона:\n👤 Ном: ${name}\n📞 Телефон: ${phone}\n🐟 Маҳсулот: ${product}\n💬 Шарҳ: ${msg}`;
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(telegramText)}`, '_blank');
      });
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────
// 5. INITIALIZE ON DOM READY
// ──────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new PureTransparentCatfishAquarium('waterCanvas');
  new BahoriPurfayzApp();
});
