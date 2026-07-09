import React, { useMemo, useState } from 'react';

const colors = {
  bg: '#FCFAF2',
  ink: '#22201D',
  muted: '#6B6259',
  line: '#E5DAC8',
  card: '#FFFDF8',
  card2: '#F7F0E3',
  navy: '#0F2540',
  red: '#CB4042',
  blue: '#2EA9DF',
  green: '#5DAC81',
  gold: '#D9A62E',
  brown: '#8A6B4F',
  purple: '#8F77B5',
  softRed: '#F8E9E8',
  softBlue: '#EAF5FA',
  softGreen: '#EAF4EE',
  softGold: '#F8F0D9',
  softPurple: '#F1EDF7',
};

const googleMapList = 'https://maps.app.goo.gl/3V7D3rmZY6j4Umih6';

const mapLinks = {
  loganC: 'https://maps.app.goo.gl/ZAD5jzY97FQXXQiD9',
  dcaT2: 'https://maps.app.goo.gl/Ak1smXPiGH3N7vLv9',
  teaism: 'https://maps.app.goo.gl/sKG3LQYGEfaLxyXW8',
  nga: 'https://maps.app.goo.gl/kkXZtoZULe6e9axWA',
  oldEbbitt: 'https://maps.app.goo.gl/NsfkM1p8iVsKgHMT8',
  jefferson: 'https://maps.app.goo.gl/6EdYq4FoGTCVoye89',
  whiteHouse: 'https://maps.app.goo.gl/2SheKfyfhMby4Yu87',
  monument: 'https://maps.app.goo.gl/Z8j8Cj55fGEtsPnr9',
  wwii: 'https://maps.app.goo.gl/q9miJLMVuwVSyF4D7',
  reflectingPool: 'https://maps.app.goo.gl/2Kw6NaoRHTJgxPxB7',
  lincoln: 'https://maps.app.goo.gl/1xq6i65gQ1kk7N9B6',
  vietnam: 'https://maps.app.goo.gl/wNYVdZGpJum1EPa67',
  korean: 'https://maps.app.goo.gl/xnmJ5iQ3QsK47Xuu7',
  marsCafe: 'https://maps.app.goo.gl/UdKFKbP9Psf5E5x66',
  airSpace: 'https://maps.app.goo.gl/jXJ7ghNd5GxqjRiz5',
  loc: 'https://maps.app.goo.gl/SM1yBD1T8ci9oPN7A',
  daikaya: 'https://maps.app.goo.gl/2m96QpntsgBbs9QH6',
  georgetown: 'https://maps.app.goo.gl/PAUmnaQ2bmPfF6Ms9',
  mStreetCanal: 'https://maps.app.goo.gl/ine9n9thbZEDH8MC8',
  waterfrontPark: 'https://maps.app.goo.gl/NYvHe4ogQdRaiTck7',
  waterTaxi: 'https://maps.app.goo.gl/6y1wGtJxCuZSe76EA',
  wharf: 'https://maps.app.goo.gl/f8ByZ5mj7thS97VF9',
  bantamKing: 'https://maps.app.goo.gl/Ma3KkMjs529UysY18',
};

const officialSources = [
  ['Washington Monument', 'https://www.recreation.gov/ticket/facility/234635'],
  ['National Air and Space Museum', 'https://airandspace.si.edu/visit/museum-dc'],
  ['Library of Congress', 'https://www.loc.gov/visit/'],
  ['U.S. Capitol Tour', 'https://www.visitthecapitol.gov/visit/book-a-tour'],
  ['United States Holocaust Memorial Museum', 'https://www.ushmm.org/information/visit-the-museum/admission-tickets'],
  ['National Museum of African American History and Culture', 'https://nmaahc.si.edu/visit/passes'],
  ['Freedom 250 Great American State Fair', 'https://www.freedom250.org/celebration/the-great-american-state-fair'],
  ['Freedom 250 Food', 'https://freedom250.org/media-center/press-release/freedom-250-food-showcases-americas-culinary-tradition'],
  ['National Gallery of Art', 'https://www.nga.gov/visit'],
  ['Natural History Museum', 'https://naturalhistory.si.edu/visit'],
  ['American History Museum', 'https://americanhistory.si.edu/visit'],
  ['National Museum of Asian Art', 'https://asia.si.edu/visit/'],
  ['Hirshhorn Museum and Sculpture Garden', 'https://hirshhorn.si.edu/visit/'],
  ['White House Visitor Center', 'https://www.nps.gov/whho/planyourvisit/white-house-visitor-center.htm'],
  ['Georgetown Waterfront Park', 'https://www.nps.gov/places/georgetown-waterfront-park.htm'],
  ['The Wharf DC', 'https://www.wharfdc.com/'],
  ['The Wharf Parks and Piers', 'https://www.wharfdc.com/things-to-do/parks-piers/'],
  ['Potomac Water Taxi', 'https://www.cityexperiences.com/washington-dc/city-cruises/water-taxi/'],
  ['Old Ebbitt Grill', 'https://www.ebbitt.com/'],
  ['DAIKAYA', 'https://www.daikaya.com/location/daikaya/'],
  ['Bantam King', 'https://www.bantamking.com/'],
  ['YELLOW Georgetown', 'https://www.yellowthecafe.com/georgetown'],
  ['Teaism Penn Quarter', 'https://www.teaism.com/restaurants/penn-quarter/'],
  ['Founding Farmers Fishers & Bakers', 'https://www.wearefoundingfarmers.com/location/founding-farmers-fishers-bakers/'],
  ['Dog Tag Bakery', 'https://www.dogtaginc.org/pages/contact-us'],
  ['Zaytinya', 'https://www.zaytinya.com/'],
];

const priority = [
  ['01', 'Washington Monument', '30 days, day before, or same day walk up', '最容易影響動線。先查 30 天前票、前一日票與現場票。', '#monument'],
  ['02', 'National Air and Space Museum', 'Free timed entry required', '人氣高，D.C. 本館需要免費時段票。', '#airspace'],
  ['03', 'Library of Congress', 'Free timed entry required', 'Thomas Jefferson Building 必看，當日票 9:00 AM ET 釋出。', '#loc'],
  ['04', 'U.S. Capitol Tour', 'Reservation recommended', '免費導覽，建議先預約。安檢時間需保守估計。', '#capitol'],
  ['05', 'Holocaust Memorial Museum', 'Permanent Exhibition ticket', 'Permanent Exhibition 需要免費 timed entry ticket。', '#ushmm'],
  ['06', 'NMAAHC', 'High demand timed entry pass', '內容量大，所有訪客都需要 pass。', '#nmaahc'],
];

const ticketedSpots = [
  {
    id: 'monument',
    name: 'Washington Monument',
    area: 'National Mall',
    address: '2 15th St NW, Washington, DC 20024',
    maps: mapLinks.monument,
    official: 'https://www.recreation.gov/ticket/facility/234635',
    status: 'Book first',
    statusZh: '優先搶票',
    time: 'Usually 9:00 AM to 5:00 PM. Last tour is commonly 4:00 PM. Closed Dec 25, July 4, and part of July 3.',
    timeZh: '通常 9:00 AM 至 5:00 PM，最後參觀票常為 4:00 PM。12 月 25 日、7 月 4 日及 7 月 3 日部分時段關閉。',
    ticket: 'Free ticket. Online reservation has a nonrefundable $1 service fee. 30 day advance tickets release at 10:00 AM ET. Day before tickets release at 3:00 PM ET. Same day walk up tickets begin at 8:45 AM at Washington Monument Lodge when available.',
    ticketZh: '門票免費，線上預約每張收不可退 $1 手續費。30 天前票 10:00 AM ET 釋出，前一日票 3:00 PM ET 釋出。若有現場同日票，8:45 AM 起在 Washington Monument Lodge 發放。',
    value: 'Best high view on the Mall. Four direction windows show the White House, Capitol, Lincoln Memorial, Jefferson Memorial, and Potomac River.',
    valueZh: 'National Mall 最具代表性的高處視角。四面窗景可看 White House、Capitol、Lincoln Memorial、Jefferson Memorial 與 Potomac River。',
    see: ['500 foot observation level', 'Small museum near 490 feet', 'Interior commemorative stones', 'Reflecting Pool and Capitol axis'],
    caution: 'Arrive at least 15 minutes early. Do not bring knives, scissors, multitools, large bags, glass bottles, aerosol cans, food, or drinks. No restroom, water, food service, or storage inside.',
    cautionZh: '至少提早 15 分鐘抵達。不要帶刀具、剪刀、多功能工具、大包、玻璃瓶、噴霧、食物或飲料。內部沒有洗手間、飲水、餐飲或置物服務。',
  },
  {
    id: 'airspace',
    name: 'National Air and Space Museum',
    area: 'National Mall',
    address: '650 Jefferson Drive SW, Washington, DC 20560',
    maps: mapLinks.airSpace,
    official: 'https://airandspace.si.edu/visit/museum-dc',
    status: 'Timed pass',
    statusZh: '需要時段票',
    time: 'Usually 10:00 AM to 5:30 PM. Free timed entry passes are required for the D.C. museum.',
    timeZh: '通常 10:00 AM 至 5:30 PM。D.C. 本館免費，但需要 timed entry pass。',
    ticket: 'Reserve before building the rest of the day. Entry is through Jefferson Drive SW. Gallery access can change because the museum is still affected by phased renovation.',
    ticketZh: '先預約入場時段，再安排其他點。入口在 Jefferson Drive SW。因分階段整修，展區狀態可能變動。',
    value: 'Best first visit museum for aviation, spaceflight, and American technology history.',
    valueZh: '航空、太空與美國科技史最核心的首訪博物館。',
    see: ['1903 Wright Flyer', 'Apollo 11 Command Module Columbia', 'Neil Armstrong Apollo 11 spacesuit', 'Spirit of St. Louis', 'Bell X 1', 'Friendship 7', 'X 15', 'Lunar Module LM 2'],
    caution: 'Plan 90 minutes to 2 hours. Do not try to read every label.',
    cautionZh: '建議 90 分鐘至 2 小時。不要試圖全館讀完。',
  },
  {
    id: 'loc',
    name: 'Library of Congress, Thomas Jefferson Building',
    area: 'Capitol Hill',
    address: '10 First Street SE, Washington, DC 20540',
    maps: mapLinks.loc,
    official: 'https://www.loc.gov/visit/',
    status: 'Timed pass',
    statusZh: '需要時段票',
    time: 'Free timed entry tickets are required. Tickets are available 30 days in advance. Same day tickets release online daily at 9:00 AM ET.',
    timeZh: '需要免費 timed entry ticket。票券 30 天前開放。當日票每日 9:00 AM ET 線上釋出。',
    ticket: 'Thursday Live at the Library evenings are especially useful when available.',
    ticketZh: '若週四晚間 Live at the Library 開放，特別值得安排。',
    value: 'One of D.C.’s strongest interiors. It combines architecture, national memory, congressional symbolism, and library culture.',
    valueZh: 'D.C. 最值得看的室內空間之一，結合建築、國家記憶、國會象徵與圖書館文化。',
    see: ['Great Hall', 'Main Reading Room overlook or walkthrough', 'Thomas Jefferson’s Library', 'Current exhibitions', 'Library Store'],
    caution: 'Enter at the First Street SE ground or driveway level, not the top of the grand staircase. Ask volunteers early about Main Reading Room walkthrough availability.',
    cautionZh: '入口在 First Street SE 的 ground 或 driveway level，不是大階梯頂端。進館後先問志工 Main Reading Room walkthrough 是否仍有名額。',
  },
  {
    id: 'capitol',
    name: 'U.S. Capitol Tour',
    area: 'Capitol Hill',
    address: 'U.S. Capitol Visitor Center, Washington, DC 20510. Entrance is on the east side underground visitor center.',
    official: 'https://www.visitthecapitol.gov/visit/book-a-tour',
    status: 'Reserve',
    statusZh: '建議預約',
    time: 'Capitol Visitor Center is open Monday to Saturday, 8:30 AM to 4:30 PM. Closed Thanksgiving, Christmas Day, and New Year’s Day.',
    timeZh: 'Capitol Visitor Center 週一至週六 8:30 AM 至 4:30 PM 開放。感恩節、聖誕節與元旦關閉。',
    ticket: 'Tours and entry are free. Reservations are recommended. Same day passes may be available, but should not be assumed during busy periods.',
    ticketZh: '導覽與入場免費，建議預約。現場同日票可能有，但旺季不要假設一定拿得到。',
    value: 'The official congressional building experience, with the Rotunda, National Statuary Hall, Crypt, and Exhibition Hall.',
    valueZh: '正式的國會大廈參觀體驗，重點包含 Rotunda、National Statuary Hall、Crypt 與 Exhibition Hall。',
    see: ['Capitol Rotunda', 'National Statuary Hall', 'Crypt', 'Exhibition Hall', 'East and west exterior views'],
    caution: 'Arrive early for security. Do not bring food or drinks. No luggage storage.',
    cautionZh: '安檢可能耗時，請提早抵達。不可帶食物與飲料。不提供行李寄放。',
  },
  {
    id: 'ushmm',
    name: 'United States Holocaust Memorial Museum',
    area: 'National Mall South',
    address: '100 Raoul Wallenberg Place SW, Washington, DC 20024',
    official: 'https://www.ushmm.org/information/visit-the-museum/admission-tickets',
    status: 'Timed ticket',
    statusZh: '展覽票優先',
    time: 'Museum and exhibitions are open 10:00 AM to 5:30 PM ET. Last entrance into the Permanent Exhibition is 4:30 PM.',
    timeZh: '博物館與展覽 10:00 AM 至 5:30 PM ET 開放。Permanent Exhibition 最晚入場 4:30 PM。',
    ticket: 'Permanent Exhibition requires a free timed entry ticket. Advance tickets are online. Limited same day tickets release online daily at 7:00 AM ET.',
    ticketZh: 'Permanent Exhibition 需要免費 timed entry ticket。可線上預約。有限當日票每日 7:00 AM ET 線上釋出。',
    value: 'A major museum for Holocaust history, memory, documentation, and moral reflection.',
    valueZh: '美國最重要的 Holocaust 主題博物館之一，重點在歷史、記憶、檔案與道德反思。',
    see: ['Permanent Exhibition', 'Daniel’s Story', 'Special exhibitions', 'Memorial spaces'],
    caution: 'Do not place it at the end of an exhausting day. The subject matter is heavy and deserves focus.',
    cautionZh: '不要排在極度疲累的一天最後。內容沉重，需要完整注意力。',
  },
  {
    id: 'nmaahc',
    name: 'National Museum of African American History and Culture',
    area: 'National Mall',
    address: '1400 Constitution Ave NW, Washington, DC 20560',
    official: 'https://nmaahc.si.edu/visit/passes',
    status: 'High demand',
    statusZh: '高需求票券',
    time: 'All visitors, regardless of age, need a timed entry pass. Advance passes release 30 days in advance on a rolling basis. Same day passes release online daily by 8:15 AM ET.',
    timeZh: '所有訪客不分年齡都需要 timed entry pass。預約票 30 天前 rolling release。當日票每日 8:15 AM ET 僅線上釋出。',
    ticket: 'Book before planning the rest of a National Mall day. This is not a quick stop.',
    ticketZh: '先搶票，再排 National Mall 其他點。若要真正理解內容，這不是快速打卡點。',
    value: 'One of the deepest Smithsonian museums, covering slavery, civil rights, culture, music, sports, politics, and contemporary America.',
    valueZh: 'Smithsonian 內容量最大的館之一，涵蓋奴隸制度、民權、文化、音樂、體育、政治與當代美國。',
    see: ['History Galleries', 'Slavery and Freedom', 'Defending Freedom, Defining Freedom', 'A Changing America', 'Culture Galleries', 'Sweet Home Café'],
    caution: 'Leave at least 2.5 to 3 hours. Avoid squeezing it between two fixed reservations.',
    cautionZh: '至少留 2.5 至 3 小時。避免塞在兩個固定預約中間。',
  },
];

const fair = {
  name: 'Freedom 250 Great American State Fair',
  official: 'https://www.freedom250.org/celebration/the-great-american-state-fair',
  foodOfficial: 'https://freedom250.org/media-center/press-release/freedom-250-food-showcases-americas-culinary-tradition',
  dates: 'June 25 to July 10, 2026',
  datesZh: '2026 年 6 月 25 日至 7 月 10 日',
  location: 'National Mall, roughly 14th Street to 4th Street',
  locationZh: 'National Mall，範圍約在 14th Street 至 4th Street 之間',
  hours: [
    ['Sun to Wed', '10:00 AM to 9:00 PM', '週日至週三'],
    ['Thu to Sat', '10:00 AM to 11:00 PM', '週四至週六'],
    ['July 4', '12:00 PM to 12:00 AM', '7 月 4 日'],
  ],
  gates: ['7th Street and Jefferson Drive SW', '7th Street and Madison Drive NW', '12th Street and Jefferson Drive SW', '12th Street and Madison Drive NW'],
  highlights: ['150 plus exhibits', '56 states and territories', 'State pavilions', 'Industry displays', 'Daily cultural programming', 'Military ensembles', 'Movie screenings', '110 foot Ferris wheel'],
  food: ['Mac and cheese', 'Italian sausage', 'Burgers and hot dogs', 'Chicken tenders', 'Corn dogs', 'Chicago style pizza', 'NY style pizza', 'Asian chicken rice bowl', 'Thai iced tea and coffee', 'Lemonade', 'Ice cream and Italian ice', 'Elote', 'Fried yucca and thick cut fries'],
  caution: 'Go in the evening if possible. Security gates, fences, heat, thunderstorms, and crowd control can add walking time. If the day is already tight, plan 1.5 to 2 hours.',
  cautionZh: '能晚上去就晚上去。安檢入口、圍欄、高溫、午後雷雨與人流管制都可能增加步行時間。若時間有限，抓 1.5 至 2 小時即可。',
};

const museums = [
  {name:'National Gallery of Art', area:'National Mall', address:'6th St and Constitution Ave NW, Washington, DC 20565', maps:mapLinks.nga, official:'https://www.nga.gov/visit', duration:'90 min highlight, 2 to 3 hr normal', durationZh:'精華 90 分鐘，正常 2 至 3 小時', value:'Best free art stop for a first D.C. visit. Prioritize the West Building if time is limited.', valueZh:'第一次來 D.C. 最值得排的免費藝術館。時間有限時優先看 West Building。', see:['Leonardo da Vinci, Ginevra de’ Benci','Raphael, The Alba Madonna','Vermeer, Woman Holding a Balance','Fragonard, Young Girl Reading','Impressionism galleries','East Building modern art and architecture']},
  {name:'Smithsonian National Museum of Natural History', area:'National Mall', address:'10th St. and Constitution Ave. NW, Washington, DC 20560', official:'https://naturalhistory.si.edu/visit', duration:'60 to 90 min highlight, 2 hr normal', durationZh:'精華 60 至 90 分鐘，正常 2 小時', value:'Easy first visit museum for families, mixed groups, and visitors who do not want an art heavy day.', valueZh:'適合第一次來、親子、混合興趣同行者，也適合不想整天看藝術的人。', see:['Hope Diamond','T. rex and Triceratops','African Bush Elephant','Sant Ocean Hall','Human Origins','Ancient Egyptian Mummies','Gems and Minerals'], caution:'Use Constitution Ave entrance when Mall routes are constrained. No bag or locker storage. Avoid knives, scissors, tools, selfie sticks, and tripods.', cautionZh:'National Mall 動線受限時，優先使用 Constitution Ave entrance。館內沒有 bag 或 locker storage。避免帶刀具、剪刀、工具、自拍棒與腳架。'},
  {name:'Smithsonian National Museum of American History', area:'National Mall', address:'1300 Constitution Ave NW, Washington, DC 20560', official:'https://americanhistory.si.edu/visit', duration:'60 to 90 min highlight, 2 hr normal', durationZh:'精華 60 至 90 分鐘，正常 2 小時', value:'Strong fit for D.C. and America 250 themes, especially politics, culture, technology, war, transportation, and pop culture.', valueZh:'很符合 D.C. 與 America 250 主題，尤其適合看政治、文化、科技、戰爭、交通與流行文化。', see:['Star Spangled Banner','Lincoln’s Top Hat','Dorothy’s Ruby Slippers','Greensboro Lunch Counter','First Ladies','The American Presidency','America on the Move','The Price of Freedom','Entertainment Nation']},
  {name:'National Museum of Asian Art', area:'National Mall South', address:'1050 Independence Ave SW, Washington, DC 20560', official:'https://asia.si.edu/visit/', duration:'60 to 90 min', durationZh:'60 至 90 分鐘', value:'Quieter and more refined than the busiest Mall museums. Good heat or rain shelter.', valueZh:'比熱門博物館安靜細緻，適合炎熱或下雨時安排室內休息。', see:['Peacock Room','Chinese bronzes and ceramics','Islamic art','Japanese screens and prints','Buddhist art']},
  {name:'Hirshhorn Museum and Sculpture Garden', area:'National Mall South', address:'Independence Ave SW and 7th St SW, Washington, DC 20560', official:'https://hirshhorn.si.edu/visit/', duration:'45 to 90 min', durationZh:'45 至 90 分鐘', value:'Modern and contemporary art can be more memorable for visitors less interested in classical art.', valueZh:'對古典藝術興趣較低的同行者，現代與當代藝術反而可能更有記憶點。', see:['Circular building','Modern art exhibitions','Sculpture Garden','Large scale installations']},
];

const outdoor = [
  {name:'National Mall Memorials', area:'Monument Core', anchor:'Washington Monument, WWII Memorial, Reflecting Pool, Lincoln Memorial, Vietnam Veterans Memorial, Korean War Veterans Memorial', maps:[['Washington Monument', mapLinks.monument], ['World War II Memorial', mapLinks.wwii], ['Reflecting Pool', mapLinks.reflectingPool], ['Lincoln Memorial', mapLinks.lincoln], ['Vietnam Memorial', mapLinks.vietnam], ['Korean War Veterans Memorial', mapLinks.korean]], value:'The classic outdoor D.C. axis. Distances look shorter on a map than they feel in summer heat.', valueZh:'D.C. 最經典戶外軸線。地圖上看似很近，夏天實際走起來會更累。', see:['Reflecting Pool','Lincoln Memorial steps','WWII Memorial fountain','Vietnam Veterans Memorial wall','Korean War Veterans Memorial statues'], advice:'Go early morning or near sunset. Do not force the full walk at midday.', adviceZh:'早上或傍晚去。不要在中午硬走完整段。'},
  {name:'Thomas Jefferson Memorial and Tidal Basin', area:'Tidal Basin', anchor:'16 E Basin Dr SW, Washington, DC 20242', maps:[['Google Maps', mapLinks.jefferson]], value:'One of the best sunset and night views in D.C., usually calmer than the central Mall.', valueZh:'D.C. 最適合黃昏與夜景的區域之一，通常比 National Mall 中央更安靜。', see:['Jefferson statue','Tidal Basin water view','Washington Monument reflection','Evening lighting'], advice:'A short segment is enough. Do not loop the whole basin unless weather is comfortable.', adviceZh:'選一段短走即可。天氣不舒服時不必繞完整圈。'},
  {name:'White House and White House Visitor Center', area:'Downtown', anchor:'Visitor Center, 1450 Pennsylvania Ave NW, Washington, DC 20230', maps:[['White House', mapLinks.whiteHouse]], official:'https://www.nps.gov/whho/planyourvisit/white-house-visitor-center.htm', value:'The building itself is viewed from outside. The Visitor Center adds artifacts, a short film, history, and a retail store.', valueZh:'白宮本體主要是外觀拍照。Visitor Center 補足歷史文物、短片、歷史脈絡與禮品店。', see:['North view from Lafayette Square','South view from The Ellipse','Visitor Center artifacts','White House Historical Association retail store'], advice:'The Visitor Center is not an interior White House tour. Roads nearby can close without much warning.', adviceZh:'Visitor Center 不是白宮內部參觀。周邊道路可能臨時封閉。'},
  {name:'Georgetown', area:'Northwest Waterfront', anchor:'Wisconsin Ave, M Street, C&O Canal, Georgetown Waterfront Park, Washington Harbour', maps:[['Georgetown', mapLinks.georgetown], ['M Street and C&O Canal', mapLinks.mStreetCanal], ['Waterfront Park', mapLinks.waterfrontPark]], official:'https://www.nps.gov/places/georgetown-waterfront-park.htm', value:'Best half day neighborhood walk when you want D.C. beyond museums. Historic houses, canal paths, water views, food, and shops.', valueZh:'若想看博物館以外的 D.C. 城市生活，這是最適合半天慢走的街區之一，有歷史街屋、運河、水岸、餐廳與商店。', see:['Wisconsin Avenue','M Street','Old Stone House','C&O Canal','Georgetown Waterfront Park','Washington Harbour','Key Bridge and Rosslyn views'], advice:'Pair it with the Water Taxi to The Wharf when weather is good.', adviceZh:'天氣好時，很適合搭配 Water Taxi 前往 The Wharf。'},
  {name:'The Wharf DC', area:'Southwest Waterfront', anchor:'760 Maine Ave SW, Washington, DC 20024', maps:[['The Wharf DC', mapLinks.wharf]], official:'https://www.wharfdc.com/', value:'Modern waterfront D.C. Good for evening walks, dinner, water taxi transfer, and a less museum heavy finish.', valueZh:'D.C. 現代水岸區，適合傍晚散步、晚餐、Water Taxi 轉接，也適合作為不再看博物館的一天收尾。', see:['Transit Pier','District Square Fountain','District Pier','Recreation Pier','Municipal Fish Market','Washington Channel','Evening lights'], advice:'Strongest near golden hour and dinner time.', adviceZh:'黃昏與晚餐時段最有價值。'},
  {name:'Potomac Water Taxi', area:'Water Route', anchor:'Georgetown Dock, 3100 K St NW. The Wharf Transit Pier, 950 Wharf St SW.', maps:[['Potomac Water Taxi', mapLinks.waterTaxi]], official:'https://www.cityexperiences.com/washington-dc/city-cruises/water-taxi/', value:'Not the cheapest transportation, but a worthwhile scenic transfer between Georgetown and The Wharf.', valueZh:'不是最便宜交通工具，但若要串接 Georgetown 與 The Wharf，是很值得的水上景觀體驗。', see:['Georgetown Waterfront','Kennedy Center','Lincoln Memorial river direction','Washington Monument','Jefferson Memorial','Memorial Bridge','The Wharf waterfront'], advice:'Buy one way. Arrive 15 to 25 minutes early. Prefer upper outdoor seating. Skip it in poor weather.', adviceZh:'買 one way 即可。提早 15 至 25 分鐘到碼頭。優先坐上層戶外。天候差時不要硬搭。'},
];

const restaurants = [
  {name:'Old Ebbitt Grill', area:'White House', address:'675 15th Street NW, Washington, DC 20005', maps:mapLinks.oldEbbitt, official:'https://www.ebbitt.com/', type:'Classic D.C. sit down meal', typeZh:'經典 D.C. 正餐', order:'Jumbo Lump Crab Cake, New England Clam Chowder, oysters, seafood', note:'Reserve if possible. Best for a historic meal near the White House.', noteZh:'能訂位就訂。適合在 White House 附近安排有歷史感的一餐。'},
  {name:'DAIKAYA', area:'Chinatown', address:'705 6th St NW, Washington, DC 20001', maps:mapLinks.daikaya, official:'https://www.daikaya.com/location/daikaya/', type:'Ramen and izakaya split by floor', typeZh:'拉麵與居酒屋分樓層', order:'Shio ramen, shoyu ramen, miso ramen. Second floor is izakaya, not ramen.', note:'For ramen, go to the first floor Ramen Shop.', noteZh:'若目標是拉麵，去一樓 Ramen Shop。'},
  {name:'Bantam King', area:'Penn Quarter', address:'501 G St NW, Washington, DC 20001', maps:mapLinks.bantamKing, official:'https://www.bantamking.com/', type:'Casual ramen and fried chicken', typeZh:'雞湯拉麵與炸雞', order:'Curry Snow Fried Chicken Plate with dark meat, shio ramen plus nitamago, shoyu ramen, spicy miso ramen, Big Fat Chocolate Chip Cookie', note:'Spicy miso may involve peanuts. Good casual ending near Penn Quarter.', noteZh:'Spicy miso 需注意花生過敏。適合在 Penn Quarter 附近輕鬆收尾。'},
  {name:'YELLOW Georgetown', area:'Georgetown', address:'1524 Wisconsin Ave NW, Washington, DC 20007', official:'https://www.yellowthecafe.com/georgetown', type:'Levantine café by Michael Rafidi', typeZh:'Michael Rafidi 的 Levantine café', order:'Shakshuka style breakfast, pastries, Smoked Amba Chicken, Shatta Batata, baklava latte, sumac lemonade, Yellow Spro', note:'High quality and higher price. Best for Georgetown brunch or café stop.', noteZh:'品質高，價格也較高。適合 Georgetown 早午餐或咖啡點心。'},
  {name:'Teaism Penn Quarter', area:'Penn Quarter', address:'400 8th Street NW, Washington, DC 20004', maps:mapLinks.teaism, official:'https://www.teaism.com/restaurants/penn-quarter/', type:'Tea and simple meal break', typeZh:'茶與簡餐休息點', order:'Bento style meals, tea, chai, ochazuke or soba if available, salty oat cookie if available', note:'Useful between National Gallery, American History, and Natural History.', noteZh:'適合穿插在 National Gallery、American History、Natural History 之間當簡單午餐。'},
  {name:'Founding Farmers Fishers & Bakers', area:'Georgetown Waterfront', address:'3000 K Street NW, Washington, DC 20007', official:'https://www.wearefoundingfarmers.com/location/founding-farmers-fishers-bakers/', type:'Waterfront full meal', typeZh:'水岸正式坐下用餐', order:'Crab Cake Benedict, breakfast, brunch, waterfront lunch, First Bake café', note:'Use when Georgetown needs a proper sit down meal.', noteZh:'適合 Georgetown 行程中需要完整坐下用餐。'},
  {name:'Dog Tag Bakery', area:'Georgetown', address:'3206 Grace St NW, Washington, DC 20007', official:'https://www.dogtaginc.org/pages/contact-us', type:'Bakery with veteran and military family mission', typeZh:'具退伍軍人與軍眷公益背景的 bakery', order:'Breakfast sandwich, quiche, cinnamon roll, coffee, pastry', note:'Light breakfast or rest stop in Georgetown.', noteZh:'適合 Georgetown 輕早餐或中途休息。'},
  {name:'Zaytinya', area:'Penn Quarter', address:'701 9th St NW, Washington, DC 20001', official:'https://www.zaytinya.com/', type:'José Andrés meze restaurant', typeZh:'José Andrés 的 meze 餐廳', order:'Pita, hummus, spreads, halloumi, lamb or chicken skewers, octopus, small plates', note:'Best for groups. Solo dining works but limits how many dishes can be ordered.', noteZh:'最適合多人分食。一個人也可吃，但比較難多點。'},
  {name:'Mars Cafe', area:'Support Stop', address:'Google Maps link provided', maps:mapLinks.marsCafe, type:'Quick café stop', typeZh:'彈性咖啡休息點', order:'Check current menu before going', note:'Kept as a map based backup stop because the provided source is a Google Maps link.', noteZh:'依提供的 Google Maps 連結保留為備用咖啡休息點，出發前再查現場資訊。'},
];

const transit = [
  ['Logan Terminal C', mapLinks.loganC, 'Boston departure anchor', '波士頓出發定位'],
  ['DCA Terminal 2', mapLinks.dcaT2, 'Washington arrival anchor', 'D.C. 抵達定位'],
];

const dayLogic = [
  ['Morning', 'Outdoor memorials or high demand ticketed entry', '早上', '戶外紀念碑，或固定票券景點'],
  ['Midday', 'Smithsonian museums, National Gallery, Library of Congress', '中午', 'Smithsonian、National Gallery、Library of Congress'],
  ['Late afternoon', 'Georgetown, Tidal Basin, Water Taxi', '下午後段', 'Georgetown、Tidal Basin、Water Taxi'],
  ['Evening', 'The Wharf, Jefferson Memorial, Freedom 250 Fair', '晚上', 'The Wharf、Jefferson Memorial、Freedom 250 Fair'],
];

const rules = [
  ['Tickets first', 'Check Washington Monument, Air and Space, Library of Congress, Capitol, Holocaust Museum, and NMAAHC before choosing food or neighborhoods.', '先處理票券', '先查 Washington Monument、Air and Space、Library of Congress、Capitol、Holocaust Museum、NMAAHC，再決定餐廳與街區。'],
  ['Small bag only', 'Avoid knives, scissors, multitools, sprays, glass, large backpacks, selfie sticks, tripods, and luggage.', '小包即可', '不要帶刀具、剪刀、多功能工具、噴霧、玻璃瓶、大型後背包、自拍棒、腳架與行李箱。'],
  ['Heat logic', 'Do outdoor sights early or late. Put museums in the middle of the day. Use Fair and The Wharf at night.', '高溫邏輯', '戶外排早晚，中午進博物館，Fair 與 The Wharf 優先晚上。'],
  ['Mall walking', 'Fences and event gates can add 10 to 15 minutes between places that look close on the map.', 'Mall 步行', '圍欄與活動入口可能讓看似很近的點多走 10 至 15 分鐘。'],
  ['Food areas', 'Safer food clusters are Penn Quarter, Georgetown, The Wharf, Foggy Bottom, and Dupont Circle.', '餐飲區域', '較穩的餐區是 Penn Quarter、Georgetown、The Wharf、Foggy Bottom、Dupont Circle。'],
];

function Badge({ children, tone = 'blue' }) {
  const palette = {
    red: [colors.softRed, colors.red],
    blue: [colors.softBlue, colors.blue],
    green: [colors.softGreen, colors.green],
    gold: [colors.softGold, colors.gold],
    purple: [colors.softPurple, colors.purple],
  };
  const selected = palette[tone] || palette.blue;
  return <span className="badge" style={{ background: selected[0], color: selected[1] }}>{children}</span>;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="sectionTitle">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function LinkButtons({ official, maps, compact = false }) {
  return (
    <div className={compact ? 'linkRow compactLinks' : 'linkRow'}>
      {official ? <a href={official} target="_blank" rel="noreferrer">Official</a> : null}
      {maps ? <a href={maps} target="_blank" rel="noreferrer">Google Maps</a> : null}
    </div>
  );
}

function Bilingual({ en, zh }) {
  return (
    <div className="bilingual">
      <p><b>EN</b>{en}</p>
      <p><b>中</b>{zh}</p>
    </div>
  );
}

function MiniMap() {
  const cells = [
    ['Georgetown', 'Water Taxi', 'The Wharf'],
    ['White House', 'Monument Core', 'Capitol Hill'],
    ['Fair Gates', 'Smithsonian', 'Tidal Basin'],
  ].flat();
  return (
    <aside className="miniMap" aria-label="D.C. cluster map">
      <div className="mapTitle">Cluster view</div>
      <div className="mapGrid">
        {cells.map((cell, index) => <span key={cell} className={'mapNode node' + index}>{cell}</span>)}
      </div>
      <div className="legend">
        <span><i className="dot redDot" />ticket pressure</span>
        <span><i className="dot blueDot" />water route</span>
        <span><i className="dot greenDot" />walkable cluster</span>
      </div>
    </aside>
  );
}

function TicketCard({ item, index }) {
  const tone = index < 2 ? 'red' : index < 4 ? 'gold' : 'purple';
  return (
    <article className="spotCard" id={item.id}>
      <div className="cardHead">
        <div>
          <span className="number">{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.name}</h3>
          <p className="areaLine">{item.area}</p>
        </div>
        <Badge tone={tone}>{item.status}｜{item.statusZh}</Badge>
      </div>

      <div className="factGrid">
        <div><b>Address</b><span>{item.address}</span></div>
        <div><b>Time</b><span>{item.time}</span><small>{item.timeZh}</small></div>
        <div><b>Ticket</b><span>{item.ticket}</span><small>{item.ticketZh}</small></div>
      </div>

      <Bilingual en={item.value} zh={item.valueZh} />

      <details className="detailsBlock" open={index < 3}>
        <summary>Highlights and cautions｜重點與注意事項</summary>
        <ul className="chipList">{item.see.map((point) => <li key={point}>{point}</li>)}</ul>
        <Bilingual en={item.caution} zh={item.cautionZh} />
      </details>

      <LinkButtons official={item.official} maps={item.maps} />
    </article>
  );
}

function MuseumCard({ item }) {
  return (
    <article className="compactCard">
      <div className="cardHead slim">
        <div>
          <h3>{item.name}</h3>
          <p className="areaLine">{item.area}</p>
        </div>
        <Badge tone="green">{item.duration}</Badge>
      </div>
      <Bilingual en={item.value} zh={item.valueZh} />
      <details className="detailsBlock">
        <summary>What to see｜值得看</summary>
        <ul className="chipList">{item.see.map((point) => <li key={point}>{point}</li>)}</ul>
        {item.caution ? <Bilingual en={item.caution} zh={item.cautionZh} /> : null}
      </details>
      <div className="addressLine">{item.address}</div>
      <LinkButtons official={item.official} maps={item.maps} compact />
    </article>
  );
}

function OutdoorCard({ item }) {
  return (
    <article className="compactCard outdoorCard">
      <div className="routeLabel">{item.area}</div>
      <h3>{item.name}</h3>
      <div className="addressLine">{item.anchor}</div>
      <Bilingual en={item.value} zh={item.valueZh} />
      <details className="detailsBlock">
        <summary>Route notes｜動線提醒</summary>
        <ul className="chipList">{item.see.map((point) => <li key={point}>{point}</li>)}</ul>
        <Bilingual en={item.advice} zh={item.adviceZh} />
      </details>
      <div className="multiMapLinks">
        {item.maps?.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>)}
        {item.official ? <a href={item.official} target="_blank" rel="noreferrer">Official</a> : null}
      </div>
    </article>
  );
}

function RestaurantRow({ item }) {
  return (
    <article className="restaurantRow">
      <div>
        <h3>{item.name}</h3>
        <p className="areaLine">{item.area}</p>
      </div>
      <div><b>Order</b><span>{item.order}</span></div>
      <div><b>Use</b><span>{item.type}</span><small>{item.typeZh}</small><small>{item.note}</small><small>{item.noteZh}</small></div>
      <div className="restaurantLinks">
        <span>{item.address}</span>
        <LinkButtons official={item.official} maps={item.maps} compact />
      </div>
    </article>
  );
}

export default function DCSpotsInfrastructure() {
  const [foodFilter, setFoodFilter] = useState('all');
  const filteredRestaurants = useMemo(() => {
    if (foodFilter === 'all') return restaurants;
    return restaurants.filter((item) => item.area.toLowerCase().includes(foodFilter));
  }, [foodFilter]);

  return (
    <main className="dcGuide">
      <style>{`
        .dcGuide { min-height: 100vh; background: ${colors.bg}; color: ${colors.ink}; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; line-height: 1.58; }
        .dcGuide * { box-sizing: border-box; }
        .dcGuide a { color: ${colors.navy}; text-underline-offset: 3px; text-decoration-thickness: 1px; overflow-wrap: anywhere; }
        .hero { max-width: 1180px; margin: 0 auto; padding: 34px 18px 22px; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr); gap: 18px; align-items: stretch; }
        .heroPanel, .miniMap, .spotCard, .compactCard, .fairPanel, .logicCard, .ruleCard, .sourceCard { background: ${colors.card}; border: 1px solid ${colors.line}; border-radius: 28px; box-shadow: 0 16px 42px rgba(64, 43, 22, 0.055); }
        .heroPanel { padding: clamp(24px, 5vw, 54px); position: relative; overflow: hidden; }
        .heroPanel:after { content: ""; position: absolute; width: 240px; height: 240px; right: -90px; top: -90px; border-radius: 999px; background: ${colors.softGold}; z-index: 0; }
        .heroPanel > * { position: relative; z-index: 1; }
        .eyebrow { color: ${colors.red}; font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
        h1 { font-size: clamp(3rem, 10vw, 7.4rem); line-height: 0.86; letter-spacing: -0.075em; margin: 18px 0; max-width: 780px; }
        h2 { font-size: clamp(1.7rem, 5vw, 3.2rem); line-height: 1.02; letter-spacing: -0.055em; margin: 8px 0 10px; }
        h3 { font-size: clamp(1.05rem, 2vw, 1.32rem); line-height: 1.14; letter-spacing: -0.025em; margin: 0; }
        p { margin: 0.55rem 0; }
        .lead { max-width: 720px; font-size: clamp(1rem, 2.2vw, 1.32rem); color: ${colors.ink}; }
        .heroMeta { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 20px; }
        .badge { display: inline-flex; align-items: center; border-radius: 999px; padding: 7px 10px; font-size: 0.78rem; line-height: 1.1; font-weight: 800; white-space: nowrap; }
        .miniMap { padding: 18px; }
        .mapTitle { font-weight: 900; color: ${colors.navy}; margin-bottom: 10px; }
        .mapGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 10px; min-height: 292px; border-radius: 22px; border: 1px dashed ${colors.line}; background: radial-gradient(circle at 50% 44%, #EFE3CF, transparent 58%); }
        .mapNode { display: flex; align-items: center; justify-content: center; text-align: center; min-height: 78px; padding: 8px; border-radius: 18px; border: 1px solid ${colors.line}; background: ${colors.card2}; font-size: 0.84rem; font-weight: 850; }
        .node1 { background: ${colors.softBlue}; }
        .node3, .node4, .node5 { background: ${colors.softRed}; }
        .node0, .node2, .node6, .node7, .node8 { background: ${colors.softGreen}; }
        .legend { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; color: ${colors.muted}; font-size: 0.78rem; }
        .legend span { display: inline-flex; align-items: center; gap: 5px; }
        .dot { width: 9px; height: 9px; border-radius: 999px; display: inline-block; }
        .redDot { background: ${colors.red}; } .blueDot { background: ${colors.blue}; } .greenDot { background: ${colors.green}; }
        .stickyNav { position: sticky; top: 0; z-index: 20; border-top: 1px solid ${colors.line}; border-bottom: 1px solid ${colors.line}; background: rgba(252, 250, 242, 0.94); backdrop-filter: blur(16px); }
        .stickyInner { max-width: 1180px; margin: 0 auto; padding: 9px 18px; display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
        .stickyInner a { flex: 0 0 auto; text-decoration: none; background: ${colors.card}; border: 1px solid ${colors.line}; border-radius: 999px; padding: 7px 11px; font-size: 0.84rem; font-weight: 800; color: ${colors.ink}; }
        .content { max-width: 1180px; margin: 0 auto; padding: 18px; }
        .section { margin: 30px 0 48px; scroll-margin-top: 76px; }
        .sectionTitle { max-width: 860px; margin-bottom: 16px; }
        .sectionTitle p { color: ${colors.muted}; font-size: 1rem; }
        .priorityGrid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 10px; }
        .priorityCard { text-decoration: none; color: inherit; background: ${colors.card}; border: 1px solid ${colors.line}; border-radius: 22px; padding: 13px; min-height: 138px; display: flex; flex-direction: column; gap: 6px; }
        .priorityCard strong { color: ${colors.red}; font-size: 1.45rem; line-height: 1; }
        .priorityCard span { font-weight: 850; line-height: 1.18; }
        .priorityCard small { color: ${colors.muted}; line-height: 1.35; }
        .logicGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
        .logicCard { padding: 15px; }
        .logicCard strong { color: ${colors.green}; display: block; margin-bottom: 4px; }
        .ticketStack { display: grid; gap: 16px; }
        .spotCard, .compactCard, .fairPanel, .sourceCard { padding: clamp(16px, 3vw, 26px); }
        .cardHead { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; margin-bottom: 14px; }
        .cardHead.slim { align-items: center; }
        .number { display: inline-block; color: ${colors.red}; font-weight: 950; margin-bottom: 6px; letter-spacing: 0.04em; }
        .areaLine, .addressLine { color: ${colors.muted}; font-size: 0.9rem; margin-top: 5px; }
        .factGrid { display: grid; grid-template-columns: 0.82fr 1fr 1.1fr; gap: 10px; margin: 12px 0; }
        .factGrid > div, .addressLine, .detailsBlock { background: ${colors.card2}; border: 1px solid ${colors.line}; border-radius: 18px; padding: 12px; }
        b { font-size: 0.78rem; letter-spacing: 0.035em; text-transform: uppercase; }
        .factGrid span, .factGrid small, .restaurantRow span, .restaurantRow small { display: block; color: ${colors.muted}; margin-top: 4px; }
        .bilingual { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 12px 0; }
        .bilingual p { margin: 0; padding: 12px; border-left: 3px solid ${colors.line}; background: rgba(255, 253, 248, 0.7); border-radius: 12px; }
        .bilingual b { display: inline-flex; min-width: 30px; color: ${colors.red}; margin-right: 7px; }
        .detailsBlock { margin: 12px 0; }
        .detailsBlock summary { cursor: pointer; font-weight: 900; color: ${colors.navy}; }
        .chipList { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-wrap: wrap; gap: 7px; }
        .chipList li { background: ${colors.card}; border: 1px solid ${colors.line}; border-radius: 999px; padding: 7px 10px; font-size: 0.88rem; font-weight: 750; }
        .linkRow, .multiMapLinks { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
        .linkRow a, .multiMapLinks a { text-decoration: none; border-radius: 999px; padding: 8px 11px; border: 1px solid ${colors.line}; background: ${colors.ink}; color: #fff; font-size: 0.84rem; font-weight: 850; }
        .compactLinks { margin-top: 8px; }
        .compactLinks a { background: ${colors.card}; color: ${colors.navy}; }
        .fairPanel { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr); gap: 18px; }
        .infoGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 13px 0; }
        .infoBox { background: ${colors.card2}; border: 1px solid ${colors.line}; border-radius: 18px; padding: 12px; }
        .hoursTable { width: 100%; border-collapse: separate; border-spacing: 0 7px; }
        .hoursTable td { background: ${colors.card2}; padding: 9px; border-top: 1px solid ${colors.line}; border-bottom: 1px solid ${colors.line}; }
        .hoursTable td:first-child { border-left: 1px solid ${colors.line}; border-radius: 14px 0 0 14px; font-weight: 850; }
        .hoursTable td:last-child { border-right: 1px solid ${colors.line}; border-radius: 0 14px 14px 0; color: ${colors.muted}; }
        .cardGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .routeLabel { color: ${colors.green}; font-weight: 900; text-transform: uppercase; letter-spacing: 0.06em; font-size: 0.78rem; margin-bottom: 7px; }
        .restaurantControls { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 13px; }
        .restaurantControls button { border: 1px solid ${colors.line}; background: ${colors.card}; color: ${colors.ink}; border-radius: 999px; padding: 8px 12px; font-weight: 850; cursor: pointer; }
        .restaurantControls button.active { background: ${colors.navy}; color: #fff; border-color: ${colors.navy}; }
        .restaurantTable { display: grid; gap: 10px; }
        .restaurantRow { display: grid; grid-template-columns: 0.8fr 1fr 1fr 0.85fr; gap: 12px; background: ${colors.card}; border: 1px solid ${colors.line}; border-radius: 22px; padding: 14px; }
        .restaurantLinks .linkRow { margin-top: 8px; }
        .ruleGrid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
        .ruleCard { padding: 14px; }
        .ruleCard h3 { color: ${colors.red}; font-size: 1rem; margin-bottom: 6px; }
        .sourceGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
        .sourceCard { padding: 11px; border-radius: 16px; box-shadow: none; }
        .sourceCard strong { display: block; margin-bottom: 3px; color: ${colors.ink}; }
        .footerNote { color: ${colors.muted}; margin: 20px 0 80px; font-size: 0.92rem; }
        .mapListFab { position: fixed; right: 18px; bottom: 18px; z-index: 30; display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; padding: 12px 15px; background: ${colors.red}; color: #fff !important; text-decoration: none; font-weight: 900; box-shadow: 0 18px 36px rgba(203, 64, 66, 0.28); }
        @media (max-width: 980px) {
          .hero, .fairPanel { grid-template-columns: 1fr; }
          .priorityGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .logicGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .factGrid, .restaurantRow { grid-template-columns: 1fr; }
          .ruleGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 680px) {
          .dcGuide { font-size: 15px; }
          .hero { padding: 18px 12px 12px; }
          .content { padding: 12px; }
          .heroPanel, .miniMap, .spotCard, .compactCard, .fairPanel { border-radius: 22px; }
          h1 { font-size: clamp(3.1rem, 18vw, 5.2rem); }
          .lead { font-size: 1rem; }
          .mapGrid { grid-template-columns: 1fr; min-height: auto; }
          .mapNode { min-height: 42px; }
          .priorityGrid, .logicGrid, .cardGrid, .bilingual, .infoGrid, .sourceGrid, .ruleGrid { grid-template-columns: 1fr; }
          .cardHead { flex-direction: column; }
          .stickyInner { padding: 8px 12px; }
          .stickyInner a { font-size: 0.8rem; padding: 7px 10px; }
          .mapListFab { right: 12px; bottom: 12px; padding: 11px 13px; font-size: 0.86rem; }
        }
        @media print {
          .stickyNav, .mapListFab, .restaurantControls { display: none; }
          .dcGuide { background: #fff; }
          .heroPanel, .miniMap, .spotCard, .compactCard, .fairPanel, .logicCard, .ruleCard { box-shadow: none; break-inside: avoid; }
        }
      `}</style>

      <a className="mapListFab" href={googleMapList} target="_blank" rel="noreferrer">Google Maps List</a>

      <header className="hero">
        <section className="heroPanel">
          <div className="eyebrow">DC Spots</div>
          <h1>D.C. 2026</h1>
          <p className="lead">Ticket pressure, museum choices, outdoor clusters, food, and exact map links for a short Washington, D.C. visit.</p>
          <p className="lead">中英同步。先看票券，再看區域。夏天中午少走戶外，晚上再安排 Fair、The Wharf 或 Tidal Basin。</p>
          <div className="heroMeta">
            <Badge tone="red">Updated｜2026.07.08</Badge>
            <Badge tone="gold">Background｜#FCFAF2</Badge>
            <Badge tone="green">Mobile first｜手機優先</Badge>
          </div>
        </section>
        <MiniMap />
      </header>

      <nav className="stickyNav" aria-label="D.C. guide sections">
        <div className="stickyInner">
          <a href="#priority">Priority</a>
          <a href="#logic">Day Logic</a>
          <a href="#tickets">Timed Entry</a>
          <a href="#fair">Freedom 250</a>
          <a href="#museums">Museums</a>
          <a href="#outdoor">Outdoor</a>
          <a href="#food">Food</a>
          <a href="#maps">Maps</a>
          <a href="#rules">Rules</a>
        </div>
      </nav>

      <div className="content">
        <section className="section" id="priority">
          <SectionTitle eyebrow="Start here" title="Ticket pressure" subtitle="If nothing is reserved yet, check these first. Missing one can change the whole day." />
          <div className="priorityGrid">
            {priority.map((item) => (
              <a className="priorityCard" href={item[4]} key={item[0]}>
                <strong>{item[0]}</strong>
                <span>{item[1]}</span>
                <small>{item[2]}</small>
                <small>{item[3]}</small>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="logic">
          <SectionTitle eyebrow="Visual planning" title="Simple day logic" subtitle="Use this as a fast reading layer before opening the detailed cards." />
          <div className="logicGrid">
            {dayLogic.map((item) => (
              <article className="logicCard" key={item[0]}>
                <strong>{item[0]}｜{item[2]}</strong>
                <p>{item[1]}</p>
                <p>{item[3]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="tickets">
          <SectionTitle eyebrow="Timed entry" title="Places to reserve or check first" subtitle="Addresses, official links, exact map links, ticket notes, and real visit value." />
          <div className="ticketStack">
            {ticketedSpots.map((item, index) => <TicketCard key={item.id} item={item} index={index} />)}
          </div>
        </section>

        <section className="section" id="fair">
          <SectionTitle eyebrow="Limited event" title="Freedom 250 Great American State Fair" subtitle="A temporary National Mall event. It affects routes, food choices, security gates, and crowd flow." />
          <div className="fairPanel">
            <div>
              <h3>{fair.name}</h3>
              <div className="infoGrid">
                <div className="infoBox"><b>Dates</b><p>{fair.dates}</p><p>{fair.datesZh}</p></div>
                <div className="infoBox"><b>Location</b><p>{fair.location}</p><p>{fair.locationZh}</p></div>
              </div>
              <table className="hoursTable"><tbody>{fair.hours.map((row) => <tr key={row[0]}><td>{row[0]}<br />{row[2]}</td><td>{row[1]}</td></tr>)}</tbody></table>
              <Bilingual en={fair.caution} zh={fair.cautionZh} />
              <LinkButtons official={fair.official} />
              <div className="linkRow compactLinks"><a href={fair.foodOfficial} target="_blank" rel="noreferrer">Food source</a></div>
            </div>
            <div>
              <div className="infoBox"><b>Gates</b><ul>{fair.gates.map((gate) => <li key={gate}>{gate}</li>)}</ul></div>
              <div className="infoBox"><b>Highlights</b><ul className="chipList">{fair.highlights.map((point) => <li key={point}>{point}</li>)}</ul></div>
              <div className="infoBox"><b>Food snapshot</b><ul className="chipList">{fair.food.map((food) => <li key={food}>{food}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="section" id="museums">
          <SectionTitle eyebrow="Flexible museums" title="Free museums for heat, rain, and schedule buffers" subtitle="Do not try to finish every museum. Pick by interest and energy." />
          <div className="cardGrid">
            {museums.map((item) => <MuseumCard key={item.name} item={item} />)}
          </div>
        </section>

        <section className="section" id="outdoor">
          <SectionTitle eyebrow="City clusters" title="Outdoor sights, neighborhoods, and water route" subtitle="Read these as clusters, not isolated checkboxes." />
          <div className="cardGrid">
            {outdoor.map((item) => <OutdoorCard key={item.name} item={item} />)}
          </div>
        </section>

        <section className="section" id="food">
          <SectionTitle eyebrow="Food" title="Restaurants and café picks" subtitle="Choose by area first. That prevents wasted walking around the Mall." />
          <div className="restaurantControls">
            {[['all', 'All'], ['georgetown', 'Georgetown'], ['penn', 'Penn Quarter'], ['white', 'White House'], ['chinatown', 'Chinatown'], ['support', 'Support Stop']].map(([key, label]) => <button type="button" key={key} className={foodFilter === key ? 'active' : ''} onClick={() => setFoodFilter(key)}>{label}</button>)}
          </div>
          <div className="restaurantTable">
            {filteredRestaurants.map((item) => <RestaurantRow item={item} key={item.name} />)}
          </div>
        </section>

        <section className="section" id="maps">
          <SectionTitle eyebrow="Exact maps" title="Map anchors" subtitle="The bottom right button opens the full Google Maps spot list. These are the individual anchors added from the provided links." />
          <div className="cardGrid">
            <article className="compactCard">
              <h3>Transport</h3>
              <div className="multiMapLinks">{transit.map(([label, url, en, zh]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}<br />{en}｜{zh}</a>)}</div>
            </article>
            <article className="compactCard">
              <h3>Full list</h3>
              <p>Use this when opening the guide on mobile.</p>
              <p>手機觀看時，直接用這個清單最省時間。</p>
              <div className="linkRow"><a href={googleMapList} target="_blank" rel="noreferrer">Google Maps Spots List</a></div>
            </article>
          </div>
        </section>

        <section className="section" id="rules">
          <SectionTitle eyebrow="Practical rules" title="Avoid the common D.C. mistakes" subtitle="Short rules for readers using this on the move." />
          <div className="ruleGrid">
            {rules.map((rule) => (
              <article className="ruleCard" key={rule[0]}>
                <h3>{rule[0]}</h3>
                <p>{rule[2]}</p>
                <p>{rule[1]}</p>
                <p>{rule[3]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="sources">
          <SectionTitle eyebrow="Sources" title="Official links" subtitle="Check same day opening status, pass inventory, weather, and security rules before leaving." />
          <div className="sourceGrid">
            {officialSources.map(([label, url]) => <a className="sourceCard" key={url} href={url} target="_blank" rel="noreferrer"><strong>{label}</strong>{url}</a>)}
          </div>
          <p className="footerNote">No lodging information included. Content check date: July 8, 2026. Exact day operations may change.</p>
        </section>
      </div>
    </main>
  );
}
