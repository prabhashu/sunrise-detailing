import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('src', (filepath) => {
    if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
        let content = fs.readFileSync(filepath, 'utf8');
        let original = content;

        // Don't touch the heroes and navs, they look premium dark
        if (filepath.includes('Hero.tsx') || filepath.includes('Navbar.tsx') || filepath.includes('PageHero.tsx') || filepath.includes('FinalCTA.tsx')) return;

        if (filepath.includes('layout.tsx')) {
            content = content.replace('bg-[#050B14]', 'bg-sunrise-white');
            content = content.replace('text-white', 'text-sunrise-navy');
        } else {
            // Sections that used to be slate or white
            content = content.replace(/\bbg-\[#050B14\]/g, 'bg-sunrise-slate');

            // Cards that used to be white
            content = content.replace(/\bbg-\[#0A111A\]\/95/g, 'bg-white/95');
            content = content.replace(/\bbg-\[#0A111A\]\/80/g, 'bg-white/80');
            content = content.replace(/\bbg-\[#0A111A\]/g, 'bg-white');

            // Transparent backgrounds
            content = content.replace(/\bbg-white\/5\b/g, 'bg-gray-50');
            content = content.replace(/\bbg-white\/10\b/g, 'bg-gray-100');

            // Text
            content = content.replace(/\btext-white\b/g, 'text-sunrise-navy');
            content = content.replace(/\btext-gray-100\b/g, 'text-gray-800');
            content = content.replace(/\btext-gray-200\b/g, 'text-gray-700');
            content = content.replace(/\btext-gray-300\b/g, 'text-gray-600');
            content = content.replace(/\btext-gray-400\b/g, 'text-gray-500');
            content = content.replace(/\btext-blue-100\b/g, 'text-gray-600');
            content = content.replace(/\btext-blue-400\b/g, 'text-sunrise-steel');

            // Borders
            content = content.replace(/\bborder-white\/5\b/g, 'border-gray-100');
            content = content.replace(/\bborder-white\/10\b/g, 'border-gray-200');
            content = content.replace(/\bborder-[#0A111A]\b/g, 'border-sunrise-navy');
            // specifically on buttons or elements that revert:
            content = content.replace(/\bhousing\b/g, 'border'); // example

            // Because "text-white" was blindly replaced, some things like the sunrise-orange icons or buttons inside might have "text-sunrise-navy" now instead of "text-white".
            // Example: The "Book Now" Button has text-white inside it by default, but if it was replaced, it might be ruined. 
            // We will manually fix `Button.tsx` afterwards, so skip Button for text? 
            // We'll just let it run and manually patch Button and a few others if needed.
        }

        if (content !== original) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log('Restored light theme in', filepath);
        }
    }
});
