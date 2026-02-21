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

        if (filepath.includes('Hero.tsx') || filepath.includes('Navbar.tsx')) return;

        // Fix remaining text colors that weren't caught
        content = content.replace(/\btext-sunrise-navy\b/g, 'text-white');
        content = content.replace(/\btext-sunrise-steel\b/g, 'text-blue-400');
        content = content.replace(/\bbg-[#0A111A] text-white hover:bg-white\/10 shadow-lg focus:ring-white\b/g, 'bg-white text-[#050B14] hover:bg-white/90 shadow-lg focus:ring-white');
        content = content.replace(/\btext-gray-900\b/g, 'text-gray-100');
        content = content.replace(/\btext-gray-800\b/g, 'text-gray-200');

        // Fix borders
        content = content.replace(/\bborder-sunrise-navy\b/g, 'border-[#0A111A]');
        content = content.replace(/\bbg-[#0A111A]\/5\b/g, 'bg-white/5');

        // Backgrounds
        content = content.replace(/\bbg-sunrise-steel\b/g, 'bg-blue-900/50');
        content = content.replace(/\btext-sunrise-slate\b/g, 'text-gray-400');
        content = content.replace(/\bbg-sunrise-slate\b/g, 'bg-[#0A111A]');

        if (content !== original) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log('Fixed stragglers in', filepath);
        }
    }
});
