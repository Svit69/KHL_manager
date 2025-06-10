#!/usr/bin/env node

/**
 * Скрипт для парсинга CSV файла с ростером команды и создания TypeScript файла
 * Использование: node scripts/parse-roster-csv.js path/to/roster.csv
 */

const fs = require('fs');
const path = require('path');

// Функция для парсинга CSV
function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',');
  const players = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const player = {};
    
    headers.forEach((header, index) => {
      player[header.trim()] = values[index]?.trim() || '';
    });
    
    players.push(player);
  }

  return players;
}

// Функция для корректного парсинга CSV строки с учетом кавычек
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
}

// Функция для генерации ID игрока
function generatePlayerId(teamId, index) {
  // Определяем диапазоны ID для команд
  const teamIdRanges = {
    'ak-bars': 100,
    'avtomobilist': 0,
    'ska': 200,
    'cska': 300,
    'avangard': 400,
    'dynamo-moscow': 500,
    'lokomotiv': 600,
    'metallurg': 700,
    'salavat-yulaev': 800,
    'torpedo': 900,
    'traktor': 1000,
    'spartak': 1100,
    'dynamo-minsk': 1200,
    'barys': 1300,
    'admiral': 1400,
    'amur': 1500,
    'kunlun': 1600,
    'lada': 1700,
    'neftekhimik': 1800,
    'severstal': 1900,
    'sibir': 2000,
    'sochi': 2100,
    'vityaz': 2200
  };

  const baseId = teamIdRanges[teamId] || 9000;
  return `player-${baseId + index + 1}`;
}

// Функция для создания TypeScript файла
function generateTypeScriptFile(players, teamId, teamName) {
  const tsPlayers = players.map((player, index) => {
    const favoriteClubs = player.favoriteClubs
      .replace(/"/g, '')
      .split(',')
      .map(club => `'${club.trim()}'`)
      .join(', ');

    return `  {
    id: '${generatePlayerId(teamId, index)}',
    firstName: '${player.firstName}',
    lastName: '${player.lastName}',
    position: '${player.position}',
    birthDate: '${player.birthDate}',
    nationality: '${player.nationality}',
    teamId: '${teamId}',
    contract: {
      endDate: '${player.contractEndDate}',
      type: '${player.contractType}',
      salaryPerYear: ${player.salaryPerYear}, // ${player.salaryPerYear} млн рублей
      signedDate: '${player.contractSignedDate}',
      isActive: true
    },
    overallRating: ${player.overallRating},
    potential: ${player.potential},
    physicalCondition: ${player.physicalCondition},
    favoriteClubs: [${favoriteClubs}],
    photoUrl: '/players/photos/${generatePlayerId(teamId, index)}.png',
    status: '${player.status}'
  }`;
  });

  const camelCaseTeamName = teamId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  return `import { Player } from '../../types/player';

// Ростер команды "${teamName}"
export const ${camelCaseTeamName}Roster: Player[] = [
${tsPlayers.join(',\n')}
];

// Экспорт для использования в других файлах
export default ${camelCaseTeamName}Roster;
`;
}

// Основная функция
function main() {
  const csvFilePath = process.argv[2];
  
  if (!csvFilePath) {
    console.error('❌ Укажите путь к CSV файлу');
    console.error('Использование: node scripts/parse-roster-csv.js path/to/roster.csv');
    process.exit(1);
  }

  if (!fs.existsSync(csvFilePath)) {
    console.error(`❌ Файл не найден: ${csvFilePath}`);
    process.exit(1);
  }

  try {
    console.log('📖 Читаем CSV файл...');
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    
    console.log('🔍 Парсим данные...');
    const players = parseCSV(csvContent);
    
    if (players.length === 0) {
      console.error('❌ Не найдено игроков в файле');
      process.exit(1);
    }

    const teamId = players[0].teamId;
    const teamName = players[0].teamName;
    
    console.log(`🏒 Найдено ${players.length} игроков для команды "${teamName}" (${teamId})`);
    
    console.log('⚡ Генерируем TypeScript файл...');
    const tsContent = generateTypeScriptFile(players, teamId, teamName);
    
    const outputPath = `src/data/players/${teamId}.ts`;
    fs.writeFileSync(outputPath, tsContent, 'utf-8');
    
    console.log(`✅ Файл создан: ${outputPath}`);
    console.log('');
    console.log('📋 Следующие шаги:');
    console.log(`1. Добавьте импорт в src/data/players/index.ts:`);
    console.log(`   import ${teamId.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Roster from './${teamId}';`);
    console.log('');
    console.log(`2. Добавьте в массив allPlayers:`);
    console.log(`   ...${teamId.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Roster,`);
    console.log('');
    console.log(`3. Добавьте в teamRosters:`);
    console.log(`   '${teamId}': {`);
    console.log(`     teamId: '${teamId}',`);
    console.log(`     players: ${teamId.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Roster,`);
    console.log(`     lastUpdated: new Date().toISOString()`);
    console.log(`   },`);
    
  } catch (error) {
    console.error('❌ Ошибка при обработке файла:', error.message);
    process.exit(1);
  }
}

main();
