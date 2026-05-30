const fs = require('fs');
const path = './app.js';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
    "Portugal Home 2026": "assets-dump/images/portugal_jersey.png",
    "Real Madrid Home 2026": "assets-dump/images/real_madrid_jersey.png",
    "Manchester City Away 2026": "assets-dump/images/manchester_city.png",
    "Argentina Retro 1986": "assets-dump/images/argentina_jersey.png",
    "Germany Goalkeeper 2026": "assets-dump/images/germany_jersey.png",
    "Verse Training Half-Zip": "assets-dump/images/verse_training_jersey.png",
    "Australia Home 2026": "assets-dump/images/australia_jersey.png",
    "Belgium Home 2026": "assets-dump/images/belgium_jersey.png",
    "Cameroon Home 2026": "assets-dump/images/cameroon_jersey.png",
    "Canada Home 2026": "assets-dump/images/canada_jersey.png",
    "Chile Home 2026": "assets-dump/images/chile_jersey.png",
    "Colombia Home 2026": "assets-dump/images/colombia_jersey.png",
    "Costa Rica Home 2026": "assets-dump/images/costarica_jersey.png",
    "Croatia Home 2026": "assets-dump/images/croatia_jersey.png",
    "Denmark Home 2026": "assets-dump/images/denmark_jersey.png",
    "Ecuador Home 2026": "assets-dump/images/ecuador_jersey.png",
    "Egypt Home 2026": "assets-dump/images/egypt_jersey.png",
    "England Home 2026": "assets-dump/images/england_jersey.png",
    "Ghana Home 2026": "assets-dump/images/gahan_jersey.png",
    "Iran Home 2026": "assets-dump/images/iran_jersey.png",
    "Italy Home 2026": "assets-dump/images/italy_jersey.png",
    "Mexico Home 2026": "assets-dump/images/mexico_jersey.png",
    "Morocco Home 2026": "assets-dump/images/morocco_jersey.png",
    "Netherlands Home 2026": "assets-dump/images/netherlands_jersey.png",
    "Nigeria Home 2026": "assets-dump/images/nigeria_jersey.png",
    "Paraguay Home 2026": "assets-dump/images/praguay_jersey.png",
    "Peru Home 2026": "assets-dump/images/peru_jersey.png",
    "Poland Home 2026": "assets-dump/images/poland_jersey.png",
    "Qatar Home 2026": "assets-dump/images/qatar_jersey.png",
    "Saudi Arabia Home 2026": "assets-dump/images/saudiarabia_jersey.png",
    "Senegal Home 2026": "assets-dump/images/senegal_jersey.jpeg",
    "South Korea Home 2026": "assets-dump/images/sout_korea_jersey.png",
    "Spain Home 2026": "assets-dump/images/spain_jersey.png",
    "Switzerland Home 2026": "assets-dump/images/switzerland_jersey.png",
    "United States Home 2026": "assets-dump/images/usa_jersey.png",
    "Uruguay Home 2026": "assets-dump/images/uruguay_jersey.png",
    "Algeria Home 2026": "assets-dump/images/algeria_jersey.png",
    "Argentina Home 2026": "assets-dump/images/argentina_jersey.png", // Ensure all references to root calls are wiped out
    "France Away 2026": "assets-dump/images/france_jersey.png", // Added just in case, though there is no image
};

const lines = content.split('\n');
let insideProducts = false;
let currentName = "";
let foundBracket = false;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const PRODUCTS = [')) {
        insideProducts = true;
    }
    
    if (insideProducts) {
        if (lines[i].match(/^\s*name:\s*"(.*)"/)) {
            const match = lines[i].match(/^\s*name:\s*"(.*)"/);
            currentName = match[1];
        }
        
        if (lines[i].match(/^\s*image:\s*".*"/)) {
            if (currentName && replacements[currentName]) {
                lines[i] = lines[i].replace(/image:\s*".*"/, `image: "${replacements[currentName]}"`);
            } else if (currentName) {
                // If it's a product not in the mapping but it has a googleusercontent URL, clear it or point to a local path
                // Specifically for France if the user meant to clear all URLs.
            }
            currentName = ""; // reset for next
        }
        
        // Stop if we exit PRODUCTS array
        // We know PRODUCTS array ends with ]; at line 635.
        if (lines[i].trim() === '];' && i > 600) {
            insideProducts = false;
        }
    }
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Successfully updated app.js');
