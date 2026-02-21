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

const colorMap = [
    // Backgrounds
    { search: /\bbg-sunrise-white\b/g, replace: 'bg-[#050B14]' },
    { search: /\bbg-white\b/g, replace: 'bg-[#0A111A]' },
    { search: /\bbg-gray-50\b/g, replace: 'bg-white/5' },
    { search: /\bbg-gray-100\b/g, replace: 'bg-white/10' },
    { search: /\bbg-gray-200\b/g, replace: 'bg-white/10' },
    { search: /\bbg-sunrise-slate\b/g, replace: 'bg-[#050B14]' },
    { search: /\bborder-gray-100\b/g, replace: 'border-white/5' },
    { search: /\bborder-gray-200\b/g, replace: 'border-white/10' },

    // Texts
    { search: /\btext-sunrise-navy\b/g, replace: 'text-white' },
    { search: /\btext-gray-800\b/g, replace: 'text-gray-100' },
    { search: /\btext-gray-700\b/g, replace: 'text-gray-200' },
    { search: /\btext-gray-600\b/g, replace: 'text-gray-300' },
    { search: /\btext-gray-500\b/g, replace: 'text-gray-400' },

    // Exceptions where bg-white is necessary (like the navbar logo background)
    // We'll leave it simple, but for buttons:
    { search: /\bbg-\[#0A111A\] text-white\b/g, replace: 'bg-white text-sunrise-navy' }
];

walk('src', (filepath) => {
    if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
        let content = fs.readFileSync(filepath, 'utf8');
        let original = content;

        // We shouldn't replace the Hero or Navbar as they're already dark and styled correctly
        if (filepath.includes('Hero.tsx') || filepath.includes('Navbar.tsx')) return;

        colorMap.forEach(mapping => {
            content = content.replace(mapping.search, mapping.replace);
        });

        // Quick fix for UI glass cards / liquid backgrounds since they depend heavily on the old navy
        content = content.replace(/\bfrom-sunrise-navy\b/g, 'from-[#050B14]');
        content = content.replace(/\bto-sunrise-navy\b/g, 'to-[#050B14]');
        content = content.replace(/\bvia-sunrise-navy\b/g, 'via-[#050B14]');
        content = content.replace(/\bbg-sunrise-navy\b/g, 'bg-[#050B14]');

        if (content !== original) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log('Fixed themes in', filepath);
        }
    }
});
