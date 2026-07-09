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
    key: '$1 service fee. 30 day tickets release 10:00 AM ET. Day before tickets release 3:00 PM ET. Walk up tickets begin 8:45 AM at Washington Monument Lodge when available.',
    zh: '免費票，線上每張收 $1 手續費。30 天前票 10:00 AM ET 釋出，前一日票 3:00 PM ET 釋出。若有現場票，8:45 AM 起在 Washington Monument Lodge 發放。',
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
    key: 'Tickets are free. Advance tickets are available 30 days out. Same day tickets release online at 9:00 AM ET.',
    zh: '免費票。30 天前可預約，當日票每日 9:00 AM ET 線上釋出。',
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
  see: ['State and territory pavilions', '110 ft Ferris wheel', 'Cultural programming', 'Military ensembles', 'Industry displays', 'Night lights'],
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
    zh: '親子、第一次 D.C.、非藝術取向都適合。近期動線受限時，優先確認 Constitution Ave entrance。',
    see: ['Hope Diamond', 'T. rex and Triceratops', 'African Bush Elephant', 'Sant Ocean Hall', 'Human Origins', 'Mummies'],
  },
  {
    name: 'American History Museum',
    official: official[8][1],
    time: '60 to 90 min essential route, 2 hr normal route',
    zh: '最貼近 America 250 主題。政治、文化、科技、戰爭、流行文化都能接上。',
    see: ['Star Spangled Banner', 'Lincoln’s Top Hat', 'Ruby Slippers', 'Greensboro Lunch Counter', 'First Ladies', 'American Presidency'],
  },
  {
    name: 'National Museum of Asian Art',
    official: official[9][1],
    time: '60 to 90 min',
    zh: '安靜、精緻，適合炎熱或下雨時躲進室內。',
    see: ['Peacock Room', 'East Asian ceramics', 'Bronzes', 'Islamic art', 'Japanese screens', 'Buddhist art'],
  },
  {
    name: 'Hirshhorn Museum',
    official: official[10][1],
    time: '45 to 90 min',
    zh: '現代與當代藝術。同行者若不愛古典藝術，這館通常更容易有印象。',
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
    zh: '最經典軸線。Washington Monument 到 Lincoln Memorial 實際不短，夏天中午不建議硬走完整段。',
    best: 'Morning or sunset',
    see: ['Reflecting Pool', 'Lincoln steps view', 'WWII fountain', 'Vietnam wall', 'Memorial sculptures'],
  },
  {
    name: 'Thomas Jefferson Memorial and Tidal Basin',
    maps: maps.jefferson,
    pins: [['Thomas Jefferson Memorial', maps.jefferson]],
    zh: '黃昏與夜景很強。可拍 Washington Monument 倒影，不必繞完整圈。',
    best: 'Sunset or night',
    see: ['Jefferson statue', 'Tidal Basin water', 'Monument reflection', 'Evening lights'],
  },
  {
    name: 'White House',
    maps: maps.whiteHouse,
    pins: [['White House', maps.whiteHouse]],
    zh: '主要是外觀拍照。Visitor Center 免費，內容是白宮歷史文物、互動展示、影片與 store。',
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
    zh: '最適合半天慢走的街區。街屋、運河、水岸、商店與餐廳比 National Mall 更像城市生活。',
    best: 'Late morning to afternoon',
    see: ['Wisconsin Ave', 'M Street', 'Old Stone House', 'C&O Canal', 'Waterfront Park', 'Key Bridge view'],
  },
  {
    name: 'The Wharf DC',
    maps: maps.wharf,
    pins: [['The Wharf DC', maps.wharf]],
    zh: '現代水岸區，適合傍晚、晚餐與散步。也能接 Georgetown water taxi。',
    best: 'Evening',
    see: ['Transit Pier', 'District Pier', 'Municipal Fish Market', 'Washington Channel', 'Night lights'],
  },
  {
    name: 'Potomac Water Taxi',
    maps: maps.waterTaxi,
    pins: [['Potomac Water Taxi', maps.waterTaxi]],
    zh: '不是最便宜交通，但 Georgetown 到 The Wharf 的水上視角很值得。買 one way 即可。',
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
    zh: '經典正式餐廳。第一次來 D.C. 想吃一餐有歷史感，可訂位。',
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
    zh: '雞湯拉麵與炸雞。適合 casual 收尾。',
    picks: ['Curry Snow Fried Chicken Plate', 'Shio Ramen with nitamago', 'Shoyu Ramen', 'Spicy Miso Ramen', 'Chocolate Chip Cookie'],
    mood: 'Casual',
  },
  {
    name: 'YELLOW Georgetown',
    official: official[18][1],
    area: 'Georgetown',
    zh: 'Levantine café。早午餐品質高，價格也較高。',
    picks: ['Smoked Amba Chicken', 'Shatta Batata', 'Baklava latte', 'Sumac lemonade', 'Yellow Spro'],
    mood: 'Cafe',
  },
  {
    name: 'Teaism Penn Quarter',
    maps: maps.teaism,
    official: official[19][1],
    area: 'Penn Quarter',
    zh: 'National Mall 附近穩定簡餐與茶。適合博物館中間休息。',
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

const mapNodes = [
  { label: 'Georgetown', x: 11, y: 38, tone: 'green' },
  { label: 'Water Taxi', x: 19, y: 53, tone: 'green' },
  { label: 'Lincoln', x: 30, y: 45, tone: 'gold' },
  { label: 'WWII', x: 41, y: 45, tone: 'gold' },
  { label: 'Washington Monument', x: 52, y: 43, tone: 'red' },
  { label: 'White House', x: 50, y: 25, tone: 'navy' },
  { label: 'NGA / Natural History', x: 64, y: 43, tone: 'blue' },
  { label: 'Air and Space', x: 73, y: 51, tone: 'blue' },
  { label: 'LOC / Capitol', x: 87, y: 41, tone: 'purple' },
  { label: 'Jefferson / Tidal Basin', x: 56, y: 70, tone: 'gold' },
  { label: 'The Wharf', x: 74, y: 72, tone: 'green' },
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
      <div className="mapSurface" aria-label="D.C. schematic map">
        <div className="river" />
        <div className="mallAxis" />
        <div className="mallLabel">National Mall</div>
        {mapNodes.map((node) => (
          <a
            key={node.label}
            className={`mapNode ${node.tone}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            href={mapListUrl}
            target="_blank"
            rel="noreferrer"
          >
            {node.label}
          </a>
        ))}
      </div>
      <div className="mapSide">
        <h3>Relative map</h3>
        <p>相對位置示意，非精準比例。點位以你整理的 Google Maps list 為準。</p>
        <div className="legendGrid">
          <span><i className="dot red" />Timed</span>
          <span><i className="dot blue" />Museum</span>
          <span><i className="dot green" />Waterfront</span>
          <span><i className="dot gold" />Memorial</span>
        </div>
        <OutLink href={mapListUrl} variant="solid">Open full Google Maps list</OutLink>
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
          <p className="heroLine">先訂票，後排區域。中午進館，早晚走戶外。</p>
          <div className="heroBadges">
            <span>Tickets first</span>
            <span>National Mall</span>
            <span>Georgetown</span>
            <span>The Wharf</span>
          </div>
        </div>
        <div className="heroCard">
          <span className="bigNo">04</span>
          <p>票券優先</p>
          <b>Monument · Air and Space · LOC · Capitol</b>
        </div>
      </header>

      <JumpNav />

      <section className="priorityStrip" aria-label="Quick rules">
        <div><b>10:00</b><span>Monument 30 day release</span><small>華盛頓紀念碑 30 天前票</small></div>
        <div><b>3:00</b><span>Monument day before</span><small>前一日票</small></div>
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
  --ink: #24211D;
  --muted: #665F56;
  --line: #E7D9C3;
  --card: #FFFDF8;
  --paper: #F7F0E3;
  --red: #CB4042;
  --blue: #58B2DC;
  --green: #5DAC81;
  --gold: #D9A62E;
  --navy: #0F2540;
  --purple: #8F77B5;
  --shadow: 0 24px 80px rgba(35, 29, 20, 0.10);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--bg);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); }
a { color: inherit; }
button { font: inherit; }

.dcPage {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(217, 166, 46, 0.18), transparent 34rem),
    radial-gradient(circle at 80% 18%, rgba(88, 178, 220, 0.16), transparent 30rem),
    var(--bg);
  padding: 24px;
}

.hero,
.section,
.rulesPanel {
  max-width: 1180px;
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
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
  color: var(--red);
  font-size: 0.78rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  font-weight: 800;
}

h1, h2, h3, h4, p { margin-top: 0; }

h1 {
  font-size: clamp(3.2rem, 11vw, 8rem);
  line-height: 0.88;
  letter-spacing: -0.08em;
  margin: 0 0 18px;
}

.heroLine {
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.55;
  max-width: 680px;
  margin-bottom: 20px;
  color: var(--muted);
  font-weight: 600;
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
  border: 1px solid var(--line);
  background: rgba(255, 253, 248, 0.85);
  border-radius: 999px;
  padding: 8px 11px;
  font-size: 0.82rem;
  line-height: 1;
  text-decoration: none;
  color: var(--ink);
}

.heroCard {
  border-radius: 34px;
  padding: 28px;
  background: var(--navy);
  color: #FFFDF8;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 260px;
}

.bigNo {
  font-size: 5.6rem;
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: -0.08em;
  color: #F4C45F;
}

.heroCard p {
  margin: 18px 0 8px;
  color: rgba(255, 253, 248, 0.78);
}

.heroCard b { line-height: 1.35; }

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
  color: var(--muted);
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
  font-size: 0.72rem;
  margin-top: 2px;
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
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.priorityStrip span,
.priorityStrip small {
  display: block;
  color: var(--muted);
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
  gap: 14px;
  margin-bottom: 16px;
}

.sectionHead span {
  min-width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--ink);
  color: var(--bg);
  font-weight: 900;
}

.sectionHead h2 {
  margin: 0;
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
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
}

.mapSurface {
  min-height: 480px;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(90deg, transparent 49.8%, rgba(36, 33, 29, 0.07) 50%, transparent 50.2%),
    linear-gradient(0deg, transparent 49.8%, rgba(36, 33, 29, 0.07) 50%, transparent 50.2%),
    #FFFDF8;
}

.river {
  position: absolute;
  left: -12%;
  bottom: -10%;
  width: 72%;
  height: 44%;
  border-radius: 50% 50% 0 0;
  border: 28px solid rgba(88, 178, 220, 0.28);
  border-bottom: 0;
  transform: rotate(-10deg);
}

.mallAxis {
  position: absolute;
  left: 29%;
  right: 9%;
  top: 46%;
  height: 18px;
  border-radius: 99px;
  background: rgba(217, 166, 46, 0.22);
  border: 1px solid rgba(217, 166, 46, 0.38);
}

.mallLabel {
  position: absolute;
  left: 49%;
  top: 49%;
  transform: translateX(-50%);
  color: rgba(36, 33, 29, 0.34);
  font-size: clamp(1.8rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.07em;
  pointer-events: none;
}

.mapNode {
  position: absolute;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  max-width: 150px;
  min-height: 34px;
  padding: 8px 10px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 850;
  line-height: 1.12;
  color: #fff;
  box-shadow: 0 10px 24px rgba(35, 29, 20, 0.16);
  border: 2px solid rgba(255, 253, 248, 0.84);
}

.mapNode.red { background: var(--red); }
.mapNode.blue { background: var(--blue); }
.mapNode.green { background: var(--green); }
.mapNode.gold { background: var(--gold); color: #2A2216; }
.mapNode.navy { background: var(--navy); }
.mapNode.purple { background: var(--purple); }

.mapSide {
  padding: 24px;
  background: var(--paper);
  border-left: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

.mapSide h3 { margin: 0; font-size: 1.5rem; letter-spacing: -0.04em; }
.mapSide p { color: var(--muted); line-height: 1.6; margin: 0; }

.legendGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  font-size: 0.88rem;
}

.legendGrid span { display: flex; align-items: center; gap: 7px; }
.dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
.dot.red { background: var(--red); }
.dot.blue { background: var(--blue); }
.dot.green { background: var(--green); }
.dot.gold { background: var(--gold); }

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
  font-size: 1.08rem;
  line-height: 1.18;
  letter-spacing: -0.035em;
}

.ticketTop p,
.area,
.miniHead span {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.tight,
.zhLine,
.simpleCard p,
.visualCard p,
.foodCard p,
.rulesGrid p,
details p {
  color: var(--muted);
  line-height: 1.55;
  font-size: 0.94rem;
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
  background: var(--paper);
  color: #3D3832;
  line-height: 1.25;
}

.cardActions { margin-top: 14px; }
.outLink:hover, .filterRow button:hover { border-color: var(--red); color: var(--red); }
.outLink.solid {
  background: var(--ink);
  color: var(--bg);
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
.fairHero p { margin-bottom: 4px; color: var(--muted); }
.fairGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.glassBox.wide { grid-column: span 2; }
.glassBox h4 { margin-bottom: 12px; font-size: 1rem; }
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
.rowLine b { font-size: 0.94rem; }

.filterRow { margin-bottom: 14px; }
.filterRow button {
  cursor: pointer;
  color: var(--muted);
}
.filterRow button.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
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
  font-size: 0.78rem;
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

@media (max-width: 1060px) {
  .hero { grid-template-columns: 1fr; }
  .heroCard { min-height: auto; }
  .schematicWrap { grid-template-columns: 1fr; }
  .mapSide { border-left: 0; border-top: 1px solid var(--line); }
  .ticketGrid, .foodGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .cardGrid, .cardGrid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .linkGrid, .sourceGrid, .rulesGrid, .priorityStrip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 720px) {
  .dcPage { padding: 14px; }
  .hero { padding-top: 18px; gap: 12px; }
  .heroText { border-radius: 26px; padding: 26px; }
  .heroCard { border-radius: 26px; padding: 22px; }
  .bigNo { font-size: 4rem; }
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
  .mapSurface { min-height: 420px; }
  .mapNode {
    font-size: 0.68rem;
    max-width: 112px;
    min-height: 30px;
    padding: 7px 8px;
  }
  .miniHead { display: block; }
  .miniHead span { display: inline-flex; max-width: 100%; margin-top: 8px; text-align: left; }
  .ticketCard, .simpleCard, .visualCard, .foodCard, .glassBox, .rulesGrid div { border-radius: 22px; padding: 16px; }
  .rowLine { grid-template-columns: 1fr; gap: 2px; }
  .floatingMap { right: 14px; bottom: 14px; padding: 12px 14px; }
}

@media (max-width: 420px) {
  .heroBadges span, .chips span, .outLink, .filterRow button { font-size: 0.78rem; }
  .tight, .zhLine, .simpleCard p, .visualCard p, .foodCard p, .rulesGrid p, details p { font-size: 0.9rem; }
  .mapNode:nth-of-type(6) { transform: translate(-40%, -50%); }
}
`;

export { DCSpotsInfrastructure };
export default DCSpotsInfrastructure;
