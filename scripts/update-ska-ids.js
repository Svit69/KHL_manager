const fs = require('fs');
const path = require('path');

// Читаем файл СКА
const skaFilePath = path.join(__dirname, '../src/data/players/ska.ts');
let content = fs.readFileSync(skaFilePath, 'utf8');

// Маппинг старых ID на новые
const idMapping = {
  'player-1001': 'player-1101',
  'player-1002': 'player-1102', 
  'player-1003': 'player-1103',
  'player-1004': 'player-1104',
  'player-1005': 'player-1105',
  'player-1006': 'player-1106',
  'player-1007': 'player-1107',
  'player-1008': 'player-1108',
  'player-1009': 'player-1109',
  'player-1010': 'player-1110',
  'player-1011': 'player-1111',
  'player-1012': 'player-1112',
  'player-1013': 'player-1113',
  'player-1014': 'player-1114',
  'player-1015': 'player-1115',
  'player-1016': 'player-1116',
  'player-1017': 'player-1117',
  'player-1018': 'player-1118',
  'player-1019': 'player-1119',
  'player-1020': 'player-1120',
  'player-1021': 'player-1121',
  'player-1022': 'player-1122',
  'player-1023': 'player-1123',
  'player-1024': 'player-1124'
};

// Маппинг фамилий на новые ID для фотографий
const photoMapping = {
  'Заваргин': 'player-1101',
  'Иванов': 'player-1102',
  'Моисевич': 'player-1103',
  'Выдренков': 'player-1104',
  'Галенюк': 'player-1105',
  'Зайцев': 'player-1106',
  'Земченок': 'player-1107',
  'Карпухин': 'player-1108',
  'Педан': 'player-1109',
  'Сапего': 'player-1110',
  'Юдин': 'player-1111',
  'Акользин': 'player-1112',
  'Алистров': 'player-1113',
  'Андронов': 'player-1114',
  'Воробьев': 'player-1115',
  'Григоренко': 'player-1116',
  'Дедунов': 'player-1117',
  'Зинченко': 'player-1118',
  'Зыков': 'player-1119',
  'Короткий': 'player-1120',
  'Плотников': 'player-1121',
  'Толчинский': 'player-1122',
  'Хайруллин': 'player-1123',
  'Чивилев': 'player-1124'
};

// Обновляем ID в файле
Object.entries(idMapping).forEach(([oldId, newId]) => {
  content = content.replace(new RegExp(`id: '${oldId}'`, 'g'), `id: '${newId}'`);
});

// Обновляем пути к фотографиям
Object.entries(photoMapping).forEach(([surname, newId]) => {
  content = content.replace(
    new RegExp(`photoUrl: '/players/photos/${surname}\\.png'`, 'g'),
    `photoUrl: '/players/photos/${newId}.png'`
  );
});

// Записываем обновленный файл
fs.writeFileSync(skaFilePath, content, 'utf8');

console.log('✅ ID игроков СКА обновлены с 1001-1024 на 1101-1124');
console.log('✅ Пути к фотографиям обновлены');

// Выводим маппинг для переименования фотографий
console.log('\n📸 Команды для переименования фотографий:');
Object.entries(photoMapping).forEach(([surname, newId]) => {
  console.log(`Rename-Item "${surname}.png" "${newId}.png"`);
});
