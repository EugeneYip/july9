import React, { useMemo, useState } from 'react';

const mapListUrl = 'https://maps.app.goo.gl/3V7D3rmZY6j4Umih6';

const maps = {
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

const official = [
  ['Washington Monument', 'https://www.recreation.gov/ticket/facility/234635'],
  ['National Air and Space Museum', 'https://airandspace.si.edu/visit/museum-dc'],
  ['Library of Congress', 'https://www.loc.gov/visit/'],
  ['U.S. Capitol Tour', 'https://www.visitthecapitol.gov/visit/book-a-tour'],
  ['Freedom 250 Great American State Fair', 'https://www.freedom250.org/celebration/the-great-american-state-fair'],
  ['Freedom 250 Food', 'https://freedom250.org/media-center/press-release/freedom-250-food-showcases-americas-culinary-tradition'],
  ['National Gallery of Art', 'https://www.nga.gov/visit'],
  ['Natural History Museum', 'https://naturalhistory.si.edu/visit'],
  ['American History Museum', 'https://americanhistory.si.edu/visit'],
  ['National Museum of Asian Art', 'https://asia.si.edu/visit/'],
  ['Hirshhorn Museum', 'https://hirshhorn.si.edu/visit/'],
  ['White House Visitor Center', 'https://www.nps.gov/whho/planyourvisit/white-house-visitor-center.htm'],
  ['Georgetown Waterfront Park', 'https://www.nps.gov/places/georgetown-waterfront-park.htm'],
  ['The Wharf DC', 'https://www.wharfdc.com/'],
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

const navItems = [
  ['map', 'Map', '地圖'],
  ['tickets', 'Tickets', '票券'],
  ['fair', 'Fair', '期間限定'],
  ['museums', 'Museums', '博物館'],
  ['outdoors', 'Outdoors', '戶外'],
  ['food', 'Food', '美食'],
  ['links', 'Links', '連結'],
];

const ticketCards = [
  {
    no: '01',
    name: 'Washington Monument',
    maps: maps.monument,
    official: official[0][1],
    tag: 'Book first',
    zhTag: '最優先',
    key: '$1 service fee. Day before tickets release at 3:00 PM ET. Walk up tickets begin at 8:45 AM at Washington Monument Lodge when available.',
    zh: '免費票，線上每張收 $1 手續費。前一日票 3:00 PM ET 釋出。若有現場票，8:45 AM 起在 Washington Monument Lodge 發放。',
    see: ['500 ft view', '490 ft museum', 'Interior stones', 'Reflecting Pool axis'],
    avoid: 'No restroom, water, food, or storage inside. Travel light.',
    avoidZh: '內部沒有洗手間、飲水、餐飲或置物服務。小包最穩。',
  },
  {
    no: '02',
    name: 'National Air and Space Museum',
    maps: maps.airSpace,
    official: official[1][1],
    tag: 'Timed pass',
    zhTag: '需要時段票',
    key: 'Free timed entry pass required for the D.C. museum. Entry is through Jefferson Drive SW.',
    zh: 'D.C. 本館免費，但需要 timed entry pass。入口在 Jefferson Drive SW。',
    see: ['1903 Wright Flyer', 'Apollo 11 Columbia', 'Neil Armstrong spacesuit', 'Spirit of St. Louis', 'Bell X 1'],
    avoid: 'Plan 90 minutes to 2 hours. Do not try to read every label.',
    avoidZh: '建議 90 分鐘至 2 小時。不要試圖全館讀完。',
  },
  {
    no: '03',
    name: 'Library of Congress',
    maps: maps.loc,
    official: official[2][1],
    tag: 'Timed pass',
    zhTag: '需要時段票',
    key: 'Tickets are free. Same day tickets release online at 9:00 AM ET. Check the time slot before going to Capitol Hill.',
    zh: '免費票。當日票每日 9:00 AM ET 線上釋出。前往 Capitol Hill 前先確認時段。',
    see: ['Great Hall', 'Main Reading Room', 'Jefferson Library', 'Current exhibitions', 'Library Store'],
    avoid: 'Enter from First Street SE at ground or driveway level, not the top of the staircase.',
    avoidZh: '入口在 First Street SE 的 ground 或 driveway level，不是大階梯頂端。',
  },
  {
    no: '04',
    name: 'U.S. Capitol Tour',
    official: official[3][1],
    tag: 'Reserve',
    zhTag: '建議預約',
    key: 'Free tour. Capitol Visitor Center is usually Monday to Saturday, 8:30 AM to 4:30 PM.',
    zh: '免費導覽。Capitol Visitor Center 通常週一至週六 8:30 AM 至 4:30 PM 開放。',
    see: ['Rotunda', 'National Statuary Hall', 'Crypt', 'Exhibition Hall', 'Exterior views'],
    avoid: 'Arrive early for security. No food, drinks, or luggage storage.',
    avoidZh: '安檢時間需保守估計。不可帶食物與飲料，不提供行李寄放。',
  },
];

const fair = {
  name: 'Freedom 250 Great American State Fair',
  date: 'June 25 to July 10, 2026',
  zhDate: '2026 年 6 月 25 日至 7 月 10 日',
  place: 'National Mall, roughly 14th Street to 4th Street',
  zhPlace: 'National Mall，約 14th Street 至 4th Street',
  official: official[4][1],
  food: official[5][1],
  hours: [
    ['Sun to Wed', '10:00 AM to 9:00 PM', '週日至週三'],
    ['Thu to Sat', '10:00 AM to 11:00 PM', '週四至週六'],
    ['July 4', '12:00 PM to 12:00 AM', '7 月 4 日'],
  ],
  gates: ['7th and Jefferson SW', '7th and Madison NW', '12th and Jefferson SW', '12th and Madison NW'],
  see: ['State and territory pavilions', '110 ft Ferris wheel', 'Cultural programming', 'Military ensembles', 'Industry displays', 'Evening setting'],
  zh: '免費入場，walk up 可進場。若時間有限，晚上抓 1.5 至 2 小時即可。National Mall 可能有圍欄、安檢與人潮，實際步行時間會變長。',
  foods: ['Mac and cheese', 'Italian sausage', 'Burgers', 'Hot dogs', 'Corn dogs', 'Chicago pizza', 'NY pizza', 'Asian chicken rice bowl', 'Thai iced tea', 'Lemonade', 'Ice cream', 'Elote'],
};

const museums = [
  {
    name: 'National Gallery of Art',
    maps: maps.nga,
    official: official[6][1],
    time: '90 min essential route, 2 to 3 hr normal route',
    zh: '第一次來優先看 West Building。藝術興趣普通也值得排。',
    see: ['Ginevra de’ Benci', 'The Alba Madonna', 'Woman Holding a Balance', 'Young Girl Reading', 'Impressionism', 'East Building'],
  },
  {
    name: 'Natural History Museum',
    official: official[7][1],
    time: '60 to 90 min essential route, 2 hr normal route',
    zh: '適合第一次到訪、親子與非藝術取向旅客。近期動線受限時，優先確認 Constitution Ave entrance。',
    see: ['Hope Diamond', 'T. rex and Triceratops', 'African Bush Elephant', 'Sant Ocean Hall', 'Human Origins', 'Mummies'],
  },
  {
    name: 'American History Museum',
    official: official[8][1],
    time: '60 to 90 min essential route, 2 hr normal route',
    zh: '與 America 250 主題關聯高，涵蓋政治、文化、科技、戰爭與流行文化。',
    see: ['Star Spangled Banner', 'Lincoln’s Top Hat', 'Ruby Slippers', 'Greensboro Lunch Counter', 'First Ladies', 'American Presidency'],
  },
  {
    name: 'National Museum of Asian Art',
    official: official[9][1],
    time: '60 to 90 min',
    zh: '館內節奏安靜，適合炎熱或下雨時安排室內停留。',
    see: ['Peacock Room', 'East Asian ceramics', 'Bronzes', 'Islamic art', 'Japanese screens', 'Buddhist art'],
  },
  {
    name: 'Hirshhorn Museum',
    official: official[10][1],
    time: '45 to 90 min',
    zh: '現代與當代藝術。若同行者偏好裝置作品與建築空間，可作為古典藝術館以外的選項。',
    see: ['Round building', 'Modern art', 'Sculpture Garden', 'Large installations'],
  },
];

const outdoor = [
  {
    name: 'National Mall Memorials',
    maps: maps.lincoln,
    pins: [
      ['Washington Monument', maps.monument],
      ['WWII Memorial', maps.wwii],
      ['Reflecting Pool', maps.reflectingPool],
      ['Lincoln Memorial', maps.lincoln],
      ['Vietnam Memorial', maps.vietnam],
      ['Korean Memorial', maps.korean],
    ],
    zh: 'D.C. 核心戶外軸線。Washington Monument 到 Lincoln Memorial 實際不短，夏天中午不建議硬走完整段。',
    best: 'Morning or sunset',
    see: ['Reflecting Pool', 'Lincoln steps view', 'WWII fountain', 'Vietnam wall', 'Memorial sculptures'],
  },
  {
    name: 'Thomas Jefferson Memorial and Tidal Basin',
    maps: maps.jefferson,
    pins: [['Thomas Jefferson Memorial', maps.jefferson]],
    zh: '黃昏或夜間適合短停留，可拍 Washington Monument 倒影。不必繞 Tidal Basin 完整一圈。',
    best: 'Sunset or night',
    see: ['Jefferson statue', 'Tidal Basin water', 'Monument reflection', 'Evening setting'],
  },
  {
    name: 'White House',
    maps: maps.whiteHouse,
    pins: [['White House', maps.whiteHouse]],
    zh: '以外觀拍照與短停留為主。Visitor Center 免費，內容包含白宮歷史文物、互動展示、影片與 store。',
    best: 'Short stop',
    see: ['North side', 'South side', 'Visitor Center'],
  },
  {
    name: 'Georgetown',
    maps: maps.georgetown,
    pins: [
      ['Georgetown', maps.georgetown],
      ['M Street and C&O Canal', maps.mStreetCanal],
      ['Waterfront Park', maps.waterfrontPark],
      ['Water Taxi', maps.waterTaxi],
    ],
    zh: '可安排半天慢走。街屋、運河、水岸、商店與餐廳集中，節奏不同於 National Mall。',
    best: 'Late morning to afternoon',
    see: ['Wisconsin Ave', 'M Street', 'Old Stone House', 'C&O Canal', 'Waterfront Park', 'Key Bridge view'],
  },
  {
    name: 'The Wharf DC',
    maps: maps.wharf,
    pins: [['The Wharf DC', maps.wharf]],
    zh: '現代水岸區，可安排傍晚、晚餐或短程散步。也能銜接 Georgetown water taxi。',
    best: 'Evening',
    see: ['Transit Pier', 'District Pier', 'Municipal Fish Market', 'Washington Channel', 'Evening setting'],
  },
  {
    name: 'Potomac Water Taxi',
    maps: maps.waterTaxi,
    pins: [['Potomac Water Taxi', maps.waterTaxi]],
    zh: '不是最低成本交通，但 Georgetown 到 The Wharf 可用水上路線銜接。買 one way 即可。',
    best: 'Clear weather',
    see: ['Kennedy Center', 'Lincoln river view', 'Washington Monument', 'Jefferson Memorial', 'Memorial Bridge'],
  },
];

const food = [
  {
    name: 'Old Ebbitt Grill',
    maps: maps.oldEbbitt,
    official: official[15][1],
    area: 'Near White House',
    zh: '靠近 White House 的經典餐廳。想安排較正式的一餐，可訂位。',
    picks: ['Jumbo Lump Crab Cake', 'New England Clam Chowder', 'Oysters', 'Seafood'],
    mood: 'Classic',
  },
  {
    name: 'DAIKAYA',
    maps: maps.daikaya,
    official: official[16][1],
    area: 'Penn Quarter',
    zh: '拉麵在一樓 Ramen Shop。二樓是 Izakaya，不是拉麵店。',
    picks: ['Shio Ramen', 'Shoyu Ramen', 'Miso Ramen'],
    mood: 'Ramen',
  },
  {
    name: 'Bantam King',
    maps: maps.bantamKing,
    official: official[17][1],
    area: 'Chinatown',
    zh: '雞湯拉麵與炸雞。適合安排在 Penn Quarter 或 Chinatown 附近收尾。',
    picks: ['Curry Snow Fried Chicken Plate', 'Shio Ramen with nitamago', 'Shoyu Ramen', 'Spicy Miso Ramen', 'Chocolate Chip Cookie'],
    mood: 'Casual',
  },
  {
    name: 'YELLOW Georgetown',
    official: official[18][1],
    area: 'Georgetown',
    zh: 'Levantine café。適合 Georgetown 早午餐或咖啡點心，價格偏高。',
    picks: ['Smoked Amba Chicken', 'Shatta Batata', 'Baklava latte', 'Sumac lemonade', 'Yellow Spro'],
    mood: 'Cafe',
  },
  {
    name: 'Teaism Penn Quarter',
    maps: maps.teaism,
    official: official[19][1],
    area: 'Penn Quarter',
    zh: 'National Mall 附近的簡餐與茶選擇，適合博物館中間休息。',
    picks: ['Bento', 'Tea', 'Chai', 'Ochazuke', 'Soba', 'Salty oat cookie'],
    mood: 'Light meal',
  },
  {
    name: 'Founding Farmers Fishers & Bakers',
    official: official[20][1],
    area: 'Georgetown Waterfront',
    zh: '水岸完整坐下用餐。適合 Georgetown 行程中段或 brunch。',
    picks: ['Crab Cake Benedict', 'Breakfast', 'Brunch', 'Waterfront lunch', 'First Bake café'],
    mood: 'Waterfront',
  },
  {
    name: 'Dog Tag Bakery',
    official: official[21][1],
    area: 'Georgetown',
    zh: '輕早餐、咖啡、點心。也有退伍軍人與軍眷培訓背景。',
    picks: ['Breakfast sandwich', 'Quiche', 'Cinnamon roll', 'Coffee', 'Pastry'],
    mood: 'Bakery',
  },
  {
    name: 'Zaytinya',
    official: official[22][1],
    area: 'Penn Quarter',
    zh: '地中海 meze。多人分食最適合，一個人也能吃但較難多點。',
    picks: ['Pita', 'Hummus', 'Halloumi', 'Chicken skewers', 'Octopus'],
    mood: 'Dinner',
  },
  {
    name: 'Mars Cafe',
    maps: maps.marsCafe,
    area: 'Personal map pin',
    zh: '已納入地圖連結，保留為可查點位。',
    picks: ['Google Maps pin'],
    mood: 'Map pin',
  },
];

const exactLinks = [
  ['Logan Terminal C', maps.loganC],
  ['DCA Terminal 2', maps.dcaT2],
  ['Teaism Penn Quarter', maps.teaism],
  ['National Gallery of Art', maps.nga],
  ['Old Ebbitt Grill', maps.oldEbbitt],
  ['Thomas Jefferson Memorial', maps.jefferson],
  ['White House', maps.whiteHouse],
  ['Washington Monument', maps.monument],
  ['World War II Memorial', maps.wwii],
  ['Reflecting Pool', maps.reflectingPool],
  ['Lincoln Memorial', maps.lincoln],
  ['Vietnam Memorial', maps.vietnam],
  ['Korean Memorial', maps.korean],
  ['Mars Cafe', maps.marsCafe],
  ['Air and Space Museum', maps.airSpace],
  ['Library of Congress', maps.loc],
  ['DAIKAYA', maps.daikaya],
  ['Georgetown', maps.georgetown],
  ['M Street and C&O Canal', maps.mStreetCanal],
  ['Waterfront Park', maps.waterfrontPark],
  ['Potomac Water Taxi', maps.waterTaxi],
  ['The Wharf DC', maps.wharf],
  ['Bantam King', maps.bantamKing],
];

const mapZones = [
  {
    no: '01',
    area: 'Georgetown',
    zh: '西北水岸',
    tone: 'green',
    route: 'M Street, C&O Canal, Waterfront Park, Water Taxi',
    places: [
      ['Georgetown', maps.georgetown],
      ['M Street and C&O Canal', maps.mStreetCanal],
      ['Waterfront Park', maps.waterfrontPark],
      ['Water Taxi', maps.waterTaxi],
    ],
  },
  {
    no: '02',
    area: 'Memorial axis',
    zh: '紀念碑軸線',
    tone: 'gold',
    route: 'Lincoln, Vietnam, Korean, WWII, Reflecting Pool, Monument',
    places: [
      ['Lincoln Memorial', maps.lincoln],
      ['Vietnam Memorial', maps.vietnam],
      ['Korean Memorial', maps.korean],
      ['WWII Memorial', maps.wwii],
      ['Reflecting Pool', maps.reflectingPool],
      ['Washington Monument', maps.monument],
    ],
  },
  {
    no: '03',
    area: 'Mall museums',
    zh: '博物館核心',
    tone: 'blue',
    route: 'National Gallery, Natural History, American History, Air and Space',
    places: [
      ['National Gallery', maps.nga],
      ['Natural History', official[7][1]],
      ['American History', official[8][1]],
      ['Air and Space', maps.airSpace],
      ['White House', maps.whiteHouse],
    ],
  },
  {
    no: '04',
    area: 'Capitol side',
    zh: '國會東側',
    tone: 'purple',
    route: 'Library of Congress, Capitol, Penn Quarter food',
    places: [
      ['Library of Congress', maps.loc],
      ['U.S. Capitol', official[3][1]],
      ['DAIKAYA', maps.daikaya],
      ['Bantam King', maps.bantamKing],
    ],
  },
  {
    no: '05',
    area: 'South waterfront',
    zh: '南側水岸',
    tone: 'red',
    route: 'Jefferson Memorial, The Wharf, DCA Terminal 2',
    places: [
      ['Jefferson Memorial', maps.jefferson],
      ['The Wharf DC', maps.wharf],
      ['DCA Terminal 2', maps.dcaT2],
    ],
  },
];

const mapRoutes = [
  ['Museum row', 'National Gallery → Natural History → American History → Air and Space', '室內動線'],
  ['Memorial walk', 'Washington Monument → WWII → Reflecting Pool → Lincoln', '早上或傍晚'],
  ['Water route', 'Georgetown → Potomac Water Taxi → The Wharf', '天候正常時'],
  ['Capitol side', 'LOC → Capitol → DAIKAYA or Bantam King', '東側收尾'],
];

function JumpNav() {
  return (
    <nav className="jumpNav" aria-label="Section navigation">
      {navItems.map(([id, en, zh]) => (
        <a key={id} href={`#${id}`}>
          <span>{en}</span>
          <small>{zh}</small>
        </a>
      ))}
    </nav>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="sectionHead">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function OutLink({ href, children, variant = 'plain' }) {
  if (!href) return null;
  return (
    <a className={`outLink ${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ChipList({ items }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function TicketCard({ item }) {
  return (
    <article className="ticketCard">
      <div className="ticketTop">
        <b>{item.no}</b>
        <div>
          <h3>{item.name}</h3>
          <p>{item.tag} · {item.zhTag}</p>
        </div>
      </div>
      <p className="tight">{item.key}</p>
      <p className="zhLine">{item.zh}</p>
      <ChipList items={item.see} />
      <details>
        <summary>Details 詳細</summary>
        <p>{item.avoid}</p>
        <p>{item.avoidZh}</p>
      </details>
      <div className="cardActions">
        <OutLink href={item.maps}>Map</OutLink>
        <OutLink href={item.official}>Official</OutLink>
      </div>
    </article>
  );
}

function MuseumCard({ item }) {
  return (
    <article className="simpleCard">
      <div className="miniHead">
        <h3>{item.name}</h3>
        <span>{item.time}</span>
      </div>
      <p>{item.zh}</p>
      <ChipList items={item.see} />
      <div className="cardActions">
        <OutLink href={item.maps}>Map</OutLink>
        <OutLink href={item.official}>Official</OutLink>
      </div>
    </article>
  );
}

function OutdoorCard({ item }) {
  return (
    <article className="visualCard">
      <div className="miniHead">
        <h3>{item.name}</h3>
        <span>{item.best}</span>
      </div>
      <p>{item.zh}</p>
      <ChipList items={item.see} />
      <details>
        <summary>Map pins 地圖點位</summary>
        <div className="pinList">
          {item.pins.map(([name, href]) => (
            <OutLink key={name} href={href}>{name}</OutLink>
          ))}
        </div>
      </details>
    </article>
  );
}

function FoodCard({ item }) {
  return (
    <article className="foodCard">
      <div className="foodTag">{item.mood}</div>
      <h3>{item.name}</h3>
      <p className="area">{item.area}</p>
      <p>{item.zh}</p>
      <ChipList items={item.picks} />
      <div className="cardActions">
        <OutLink href={item.maps}>Map</OutLink>
        <OutLink href={item.official}>Official</OutLink>
      </div>
    </article>
  );
}

function SchematicMap() {
  return (
    <div className="schematicWrap">
      <div className="mapHeader">
        <div>
          <h3>D.C. area map</h3>
          <p>核心點位按區域整理，適合用來決定當天移動順序。</p>
        </div>
        <OutLink href={mapListUrl} variant="solid">Google Maps list</OutLink>
      </div>
      <div className="zoneMap" aria-label="D.C. area map grouped by zone">
        {mapZones.map((zone) => (
          <article className={`zoneCard ${zone.tone}`} key={zone.area}>
            <div className="zoneTop">
              <i>{zone.no}</i>
              <div>
                <span>{zone.area}</span>
                <b>{zone.zh}</b>
              </div>
            </div>
            <p className="zoneRoute">{zone.route}</p>
            <div className="zonePlaces">
              {zone.places.map(([name, href]) => (
                <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="routeBoard">
        {mapRoutes.map(([name, path, note]) => (
          <div key={name}>
            <b>{name}</b>
            <span>{path}</span>
            <small>{note}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function FairPanel() {
  return (
    <div className="fairPanel">
      <div className="fairHero">
        <div>
          <p className="label">Limited time 期間限定</p>
          <h3>{fair.name}</h3>
          <p>{fair.date} · {fair.zhDate}</p>
          <p>{fair.place} · {fair.zhPlace}</p>
        </div>
        <OutLink href={fair.official} variant="solid">Official</OutLink>
      </div>
      <div className="fairGrid">
        <div className="glassBox">
          <h4>Hours</h4>
          {fair.hours.map(([day, hour, zh]) => (
            <div className="rowLine" key={day}>
              <span>{day}</span>
              <b>{hour}</b>
              <small>{zh}</small>
            </div>
          ))}
        </div>
        <div className="glassBox">
          <h4>Gates</h4>
          <ChipList items={fair.gates} />
        </div>
        <div className="glassBox wide">
          <h4>Best use</h4>
          <p>{fair.zh}</p>
          <ChipList items={fair.see} />
        </div>
        <div className="glassBox wide">
          <h4>Food</h4>
          <ChipList items={fair.foods} />
          <OutLink href={fair.food}>Food official</OutLink>
        </div>
      </div>
    </div>
  );
}

function LinkGrid() {
  return (
    <div className="linkGrid">
      {exactLinks.map(([name, href]) => (
        <OutLink key={name} href={href}>{name}</OutLink>
      ))}
    </div>
  );
}

function SourceGrid() {
  return (
    <details className="sourcesBox">
      <summary>Official sources 官方來源</summary>
      <div className="sourceGrid">
        {official.map(([name, href]) => (
          <OutLink key={name} href={href}>{name}</OutLink>
        ))}
      </div>
    </details>
  );
}

function DCSpotsInfrastructure() {
  const [foodFilter, setFoodFilter] = useState('All');
  const foodTypes = useMemo(() => ['All', ...Array.from(new Set(food.map((item) => item.mood)))], []);
  const filteredFood = foodFilter === 'All' ? food : food.filter((item) => item.mood === foodFilter);

  return (
    <main className="dcPage">
      <style>{css}</style>
      <a className="floatingMap" href={mapListUrl} target="_blank" rel="noreferrer">Maps</a>

      <header className="hero">
        <div className="heroText">
          <p className="kicker">Washington, D.C.</p>
          <h1>D.C. 2026</h1>
          <div className="heroBadges">
            <span>Tickets first</span>
            <span>National Mall</span>
            <span>Georgetown</span>
            <span>The Wharf</span>
          </div>
        </div>
      </header>

      <JumpNav />

      <section className="priorityStrip" aria-label="Quick rules">
        <div><b>3:00</b><span>Monument next day pass</span><small>華盛頓紀念碑前一日票</small></div>
        <div><b>8:45</b><span>Monument walk up</span><small>現場票先到先得</small></div>
        <div><b>9:00</b><span>LOC same day</span><small>國會圖書館當日票</small></div>
        <div><b>PM</b><span>Fair or waterfront</span><small>晚上排 Fair 或水岸</small></div>
      </section>

      <Section id="map" eyebrow="01" title="Map view">
        <SchematicMap />
      </Section>

      <Section id="tickets" eyebrow="02" title="Tickets first">
        <div className="ticketGrid">
          {ticketCards.map((item) => <TicketCard key={item.name} item={item} />)}
        </div>
      </Section>

      <Section id="fair" eyebrow="03" title="Freedom 250 Fair">
        <FairPanel />
      </Section>

      <Section id="museums" eyebrow="04" title="Free museums">
        <div className="cardGrid">
          {museums.map((item) => <MuseumCard key={item.name} item={item} />)}
        </div>
      </Section>

      <Section id="outdoors" eyebrow="05" title="Outdoor clusters">
        <div className="cardGrid two">
          {outdoor.map((item) => <OutdoorCard key={item.name} item={item} />)}
        </div>
      </Section>

      <Section id="food" eyebrow="06" title="Food picks">
        <div className="filterRow">
          {foodTypes.map((type) => (
            <button key={type} type="button" className={foodFilter === type ? 'active' : ''} onClick={() => setFoodFilter(type)}>
              {type}
            </button>
          ))}
        </div>
        <div className="foodGrid">
          {filteredFood.map((item) => <FoodCard key={item.name} item={item} />)}
        </div>
      </Section>

      <Section id="links" eyebrow="07" title="Exact map links">
        <LinkGrid />
        <SourceGrid />
      </Section>

      <section className="rulesPanel">
        <h2>Practical rules 實用規則</h2>
        <div className="rulesGrid">
          <div><b>Bag</b><p>小包。不要帶刀具、剪刀、多功能工具、玻璃瓶、噴霧、自拍棒、tripod 或行李箱。</p></div>
          <div><b>Heat</b><p>夏天中午少走 National Mall。戶外排早上或傍晚，中午排博物館。</p></div>
          <div><b>Storm</b><p>午後雷雨常見。Water Taxi 與戶外行程保留備案。</p></div>
          <div><b>Food</b><p>National Mall 食物偏活動場地價。穩定餐區看 Penn Quarter、Georgetown、The Wharf。</p></div>
        </div>
      </section>
    </main>
  );
}

const css = `
:root {
  --bg: #FCFAF2;
  --ink: #332A22;
  --muted: #4B4036;
  --soft: #5B4E43;
  --line: #D8C5A8;
  --card: #FFFDF8;
  --paper: #F2E7D4;
  --red: #CB4042;
  --blue: #58B2DC;
  --green: #5DAC81;
  --gold: #D9A62E;
  --navy: #1D354D;
  --purple: #8F77B5;
  --shadow: 0 24px 80px rgba(65, 48, 31, 0.12);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  color: var(--muted);
  background: var(--bg);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--muted); }
a { color: inherit; }
button { font: inherit; }

.dcPage h1,
.dcPage h2,
.dcPage h3,
.dcPage h4,
.dcPage p,
.dcPage b,
.dcPage span,
.dcPage small,
.dcPage summary,
.dcPage a,
.dcPage button {
  opacity: 1;
}

.dcPage h1,
.dcPage h2,
.dcPage h3,
.dcPage h4 {
  color: var(--ink);
}

.dcPage {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(217, 166, 46, 0.18), transparent 34rem),
    radial-gradient(circle at 80% 18%, rgba(88, 178, 220, 0.16), transparent 30rem),
    var(--bg);
  padding: 24px;
  color: var(--muted);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.hero,
.section,
.rulesPanel {
  max-width: 1180px;
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
  padding: 44px 0 18px;
}

.heroText {
  background: linear-gradient(135deg, rgba(255, 253, 248, 0.92), rgba(247, 240, 227, 0.82));
  border: 1px solid rgba(231, 217, 195, 0.9);
  border-radius: 34px;
  padding: clamp(28px, 6vw, 56px);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.heroText::after {
  content: "";
  position: absolute;
  width: 240px;
  height: 240px;
  right: -90px;
  top: -90px;
  border-radius: 50%;
  background: rgba(203, 64, 66, 0.10);
}

.kicker,
.label {
  margin: 0 0 10px;
  color: #B33A3C;
  font-size: 0.9rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  font-weight: 800;
}

h1, h2, h3, h4, p { margin-top: 0; }

h1 {
  color: #3A3028;
  opacity: 1;
  font-weight: 900;
  font-size: clamp(3.2rem, 10vw, 6.8rem);
  line-height: 0.88;
  letter-spacing: -0.08em;
  margin: 0 0 18px;
}


.heroBadges,
.chips,
.cardActions,
.filterRow,
.pinList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.heroBadges span,
.chips span,
.filterRow button,
.outLink {
  border: 1px solid #D5C1A3;
  background: rgba(255, 253, 248, 0.94);
  border-radius: 999px;
  padding: 8px 11px;
  font-size: 0.9rem;
  line-height: 1;
  text-decoration: none;
  color: var(--ink);
}


.jumpNav {
  position: sticky;
  top: 0;
  z-index: 20;
  max-width: 1180px;
  margin: 0 auto 24px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 10px;
  border: 1px solid rgba(231, 217, 195, 0.86);
  background: rgba(252, 250, 242, 0.88);
  backdrop-filter: blur(16px);
  border-radius: 24px;
}

.jumpNav a {
  text-decoration: none;
  text-align: center;
  padding: 10px 8px;
  border-radius: 16px;
  color: var(--soft);
}

.jumpNav a:hover {
  background: var(--card);
  color: var(--ink);
}

.jumpNav span {
  display: block;
  font-weight: 850;
  font-size: 0.9rem;
}

.jumpNav small {
  display: block;
  font-size: 0.82rem;
  margin-top: 2px;
  font-weight: 720;
}

.priorityStrip {
  max-width: 1180px;
  margin: 0 auto 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.priorityStrip div {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 253, 248, 0.84);
}

.priorityStrip b {
  display: block;
  color: var(--ink);
  opacity: 1;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.priorityStrip span,
.priorityStrip small {
  display: block;
  color: var(--soft);
  line-height: 1.35;
}

.priorityStrip span { font-weight: 800; color: var(--ink); }
.priorityStrip small { margin-top: 4px; }

.section {
  padding: 34px 0;
}

.sectionHead {
  display: flex;
  align-items: end;
  gap: 12px;
  margin-bottom: 16px;
}

.sectionHead span {
  min-width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #3A3028;
  color: #FCFAF2;
  font-weight: 900;
}

.sectionHead h2 {
  margin: 0;
  color: #3A3028;
  opacity: 1;
  font-weight: 900;
  font-size: clamp(1.65rem, 4vw, 3.4rem);
  letter-spacing: -0.06em;
}

.schematicWrap,
.fairPanel,
.rulesPanel {
  border: 1px solid var(--line);
  border-radius: 32px;
  background: rgba(255, 253, 248, 0.86);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.schematicWrap {
  border: 1px solid var(--line);
  border-radius: 32px;
  background: rgba(255, 253, 248, 0.9);
  box-shadow: var(--shadow);
  overflow: hidden;
  padding: 18px;
}

.mapHeader {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 6px 6px 16px;
}

.mapHeader h3 {
  margin: 0 0 4px;
  color: var(--ink);
  opacity: 1;
  font-size: clamp(1.45rem, 3vw, 2.35rem);
  letter-spacing: -0.055em;
}

.mapHeader p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.5;
}

.zoneMap {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  position: relative;
}


.zoneCard {
  position: relative;
  z-index: 1;
  min-height: 238px;
  border-radius: 26px;
  padding: 16px;
  border: 1px solid rgba(231, 217, 195, 0.95);
  background: #FFFDF8;
  box-shadow: 0 14px 40px rgba(35, 29, 20, 0.07);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.zoneCard.green { background: linear-gradient(180deg, rgba(93, 172, 129, 0.14), #FFFDF8 56%); }
.zoneCard.gold { background: linear-gradient(180deg, rgba(217, 166, 46, 0.18), #FFFDF8 56%); }
.zoneCard.blue { background: linear-gradient(180deg, rgba(88, 178, 220, 0.16), #FFFDF8 56%); }
.zoneCard.purple { background: linear-gradient(180deg, rgba(143, 119, 181, 0.14), #FFFDF8 56%); }
.zoneCard.red { background: linear-gradient(180deg, rgba(203, 64, 66, 0.12), #FFFDF8 56%); }

.zoneTop {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  align-items: start;
}

.zoneTop i {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: #3A3028;
  color: #FCFAF2;
  font-style: normal;
  font-weight: 900;
  font-size: 0.9rem;
}

.zoneTop span {
  display: block;
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -0.025em;
}

.zoneTop b {
  display: block;
  margin-top: 3px;
  color: var(--soft);
  font-size: 0.98rem;
}

.zoneRoute {
  margin: 0;
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.45;
  font-weight: 720;
}

.zonePlaces {
  display: grid;
  gap: 8px;
}

.zonePlaces a {
  text-decoration: none;
  color: var(--ink);
  background: rgba(255, 253, 248, 0.9);
  border: 1px solid rgba(231, 217, 195, 0.95);
  border-radius: 16px;
  padding: 10px 11px;
  font-size: 0.96rem;
  font-weight: 780;
  line-height: 1.22;
}

.zonePlaces a:hover {
  border-color: var(--red);
  color: var(--red);
}

.routeBoard {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;
}

.routeBoard div {
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: 20px;
  padding: 12px;
}

.routeBoard b,
.routeBoard span,
.routeBoard small {
  display: block;
}

.routeBoard b {
  color: var(--ink);
  font-size: 0.98rem;
  margin-bottom: 5px;
}

.routeBoard span {
  color: var(--ink);
  font-size: 0.94rem;
  line-height: 1.35;
  font-weight: 760;
}

.routeBoard small {
  color: var(--soft);
  margin-top: 5px;
  font-weight: 760;
}

.ticketGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.cardGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.cardGrid.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.foodGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.ticketCard,
.simpleCard,
.visualCard,
.foodCard,
.glassBox,
.rulesGrid div {
  border: 1px solid var(--line);
  background: rgba(255, 253, 248, 0.88);
  border-radius: 26px;
  padding: 18px;
  box-shadow: 0 14px 40px rgba(35, 29, 20, 0.06);
}

.ticketTop {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  align-items: start;
  margin-bottom: 12px;
}

.ticketTop b {
  height: 42px;
  width: 42px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: var(--red);
  color: #fff;
}

.ticketTop h3,
.simpleCard h3,
.visualCard h3,
.foodCard h3 {
  margin: 0;
  color: var(--ink);
  opacity: 1;
  font-size: 1.08rem;
  line-height: 1.18;
  letter-spacing: -0.035em;
}

.ticketTop p,
.area,
.miniHead span {
  margin: 4px 0 0;
  color: var(--soft);
  font-size: 0.92rem;
  font-weight: 760;
}

.tight,
.zhLine,
.simpleCard p,
.visualCard p,
.foodCard p,
.rulesGrid p,
details p {
  color: var(--muted);
  line-height: 1.6;
  font-size: 1rem;
}

.zhLine { color: #3F3A34; }

.miniHead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.miniHead span {
  flex: 0 0 auto;
  padding: 6px 8px;
  border-radius: 999px;
  background: var(--paper);
  border: 1px solid var(--line);
  margin: 0;
  max-width: 48%;
  text-align: right;
}

.chips {
  margin: 12px 0;
}

.chips span {
  background: #F3E8D6;
  color: #4A4036;
  line-height: 1.25;
  border-color: #D5C1A3;
}

.cardActions { margin-top: 14px; }
.outLink:hover, .filterRow button:hover { border-color: var(--red); color: var(--red); }
.outLink.solid {
  background: #3A3028;
  color: #FCFAF2;
  border-color: var(--ink);
  width: fit-content;
}
.outLink.solid:hover { background: var(--red); color: #fff; border-color: var(--red); }

details {
  margin-top: 12px;
  border-top: 1px dashed var(--line);
  padding-top: 10px;
}

summary {
  cursor: pointer;
  font-weight: 850;
  color: var(--ink);
}

.fairPanel { padding: 18px; }
.fairHero {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(203, 64, 66, 0.10), rgba(217, 166, 46, 0.14));
  margin-bottom: 14px;
}
.fairHero h3 { margin: 0 0 8px; font-size: clamp(1.5rem, 3vw, 2.6rem); letter-spacing: -0.06em; }
.fairHero p { margin-bottom: 4px; color: var(--muted); font-weight: 650; }
.fairGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.glassBox.wide { grid-column: span 2; }
.glassBox h4 { margin-bottom: 12px; font-size: 1.05rem; color: #3A3028; }
.glassBox p, .glassBox span, .glassBox small { color: var(--muted); }
.rowLine {
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.8fr;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  align-items: baseline;
}
.rowLine:last-child { border-bottom: 0; }
.rowLine span, .rowLine small { color: var(--muted); }
.rowLine b { font-size: 0.98rem; color: #3A3028; font-weight: 850; }

.filterRow { margin-bottom: 14px; }
.filterRow button {
  cursor: pointer;
  color: var(--soft);
}
.filterRow button.active {
  background: #3A3028;
  border-color: #3A3028;
  color: #FCFAF2;
}

.foodCard { position: relative; overflow: hidden; }
.foodCard::before {
  content: "";
  position: absolute;
  width: 86px;
  height: 86px;
  right: -26px;
  top: -26px;
  border-radius: 50%;
  background: rgba(88, 178, 220, 0.16);
}
.foodTag {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 7px 9px;
  border-radius: 999px;
  background: var(--paper);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 850;
}

.linkGrid,
.sourceGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}
.linkGrid .outLink,
.sourceGrid .outLink {
  border-radius: 18px;
  line-height: 1.25;
  padding: 12px;
  background: rgba(255, 253, 248, 0.9);
}
.sourcesBox {
  max-width: 1180px;
  margin: 18px auto 0;
  border: 1px solid var(--line);
  background: rgba(255, 253, 248, 0.7);
  border-radius: 22px;
  padding: 16px;
}
.sourcesBox summary { margin-bottom: 12px; }

.rulesPanel {
  margin-top: 28px;
  padding: 22px;
}
.rulesPanel h2 { font-size: clamp(1.5rem, 4vw, 2.8rem); letter-spacing: -0.06em; }
.rulesGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}
.rulesGrid b { display: block; font-size: 1.1rem; margin-bottom: 8px; }
.rulesGrid p { margin-bottom: 0; }

.floatingMap {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 40;
  text-decoration: none;
  border-radius: 999px;
  padding: 13px 16px;
  background: var(--red);
  color: #fff;
  font-weight: 900;
  box-shadow: 0 16px 40px rgba(203, 64, 66, 0.28);
}


.glassBox,
.ticketCard,
.simpleCard,
.visualCard,
.foodCard,
.rulesGrid div,
.zoneCard,
.priorityStrip div {
  color: var(--muted);
}

.ticketTop p,
.area,
.miniHead span,
.routeBoard small,
.zoneTop b,
.priorityStrip small {
  color: var(--soft);
}

.routeBoard b,
.routeBoard span,
.priorityStrip b,
.priorityStrip span,
.zoneTop span,
.zonePlaces a,
.ticketTop h3,
.simpleCard h3,
.visualCard h3,
.foodCard h3 {
  color: #3A3028;
}

.outLink,
.filterRow button,
.heroBadges span {
  color: #3A3028;
  font-weight: 700;
}

.outLink.solid,
.filterRow button.active,
.zoneTop i,
.sectionHead span {
  color: #FCFAF2;
}


/* Final contrast pass: warm dark brown palette. */
.dcPage { color: var(--muted); }
.dcPage p,
.dcPage small,
.dcPage details p,
.dcPage .glassBox p,
.dcPage .glassBox span,
.dcPage .glassBox small,
.dcPage .rowLine span,
.dcPage .rowLine small,
.dcPage .mapHeader p,
.dcPage .fairHero p,
.dcPage .zoneRoute,
.dcPage .tight,
.dcPage .zhLine,
.dcPage .simpleCard p,
.dcPage .visualCard p,
.dcPage .foodCard p,
.dcPage .rulesGrid p {
  color: #4B4036;
}
.dcPage h1,
.dcPage h2,
.dcPage h3,
.dcPage h4,
.dcPage strong,
.dcPage b,
.dcPage summary,
.dcPage .rowLine b,
.dcPage .priorityStrip b,
.dcPage .priorityStrip span,
.dcPage .routeBoard b,
.dcPage .routeBoard span,
.dcPage .zoneTop span,
.dcPage .zonePlaces a,
.dcPage .ticketTop h3,
.dcPage .simpleCard h3,
.dcPage .visualCard h3,
.dcPage .foodCard h3 {
  color: #3A3028;
}
.dcPage .kicker,
.dcPage .label { color: #B33A3C; }
.dcPage .ticketTop p,
.dcPage .area,
.dcPage .miniHead span,
.dcPage .routeBoard small,
.dcPage .zoneTop b,
.dcPage .priorityStrip small,
.dcPage .foodTag {
  color: #5B4E43;
}
.dcPage .chips span,
.dcPage .heroBadges span,
.dcPage .outLink,
.dcPage .filterRow button {
  color: #44392F;
  border-color: #D5C1A3;
}
.dcPage .outLink.solid,
.dcPage .filterRow button.active,
.dcPage .zoneTop i,
.dcPage .sectionHead span,
.dcPage .ticketTop b,
.dcPage .floatingMap {
  color: #FCFAF2;
}
.dcPage .sectionHead span,
.dcPage .zoneTop i,
.dcPage .filterRow button.active,
.dcPage .outLink.solid {
  background: #3A3028;
  border-color: #3A3028;
}
.dcPage .floatingMap {
  background: #CB4042;
}

@media (max-width: 1060px) {
  .hero { grid-template-columns: 1fr; }
  .zoneMap { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .routeBoard { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ticketGrid, .foodGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .cardGrid, .cardGrid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .linkGrid, .sourceGrid, .rulesGrid, .priorityStrip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 720px) {
  .dcPage { padding: 14px; }
  :root { font-size: 17px; }
  .zoneMap { grid-template-columns: 1fr; }
  .zoneCard { min-height: auto; }
  .routeBoard { grid-template-columns: 1fr; }
  .mapHeader { display: block; }
  .mapHeader .outLink { margin-top: 12px; display: inline-flex; }
  .hero { padding-top: 18px; gap: 12px; }
  .heroText { border-radius: 26px; padding: 26px; }
  .jumpNav {
    overflow-x: auto;
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: minmax(86px, 1fr);
    border-radius: 20px;
    margin-bottom: 16px;
  }
  .jumpNav a { padding: 9px 6px; }
  .priorityStrip, .ticketGrid, .cardGrid, .cardGrid.two, .foodGrid, .fairGrid, .linkGrid, .sourceGrid, .rulesGrid {
    grid-template-columns: 1fr;
  }
  .glassBox.wide { grid-column: span 1; }
  .section { padding: 26px 0; }
  .sectionHead { align-items: center; }
  .sectionHead span { width: 34px; height: 34px; min-width: 34px; font-size: 0.85rem; }
  .miniHead { display: block; }
  .miniHead span { display: inline-flex; max-width: 100%; margin-top: 8px; text-align: left; }
  .ticketCard, .simpleCard, .visualCard, .foodCard, .glassBox, .rulesGrid div { border-radius: 22px; padding: 16px; }
  .rowLine { grid-template-columns: 1fr; gap: 2px; }
  .floatingMap { right: 14px; bottom: 14px; padding: 12px 14px; }
}

@media (max-width: 420px) {
  .heroBadges span, .chips span, .outLink, .filterRow button { font-size: 0.92rem; }
  .tight, .zhLine, .simpleCard p, .visualCard p, .foodCard p, .rulesGrid p, details p { font-size: 0.98rem; }
}
`;

export { DCSpotsInfrastructure };
export default DCSpotsInfrastructure;
