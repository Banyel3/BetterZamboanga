const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9999;
const ORDINANCES_PATH = path.join(__dirname, '../src/data/ordinances.json');

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const extracted = JSON.parse(body);
                const existing = JSON.parse(fs.readFileSync(ORDINANCES_PATH, 'utf8'));

                // Merge data
                const merged = {
                    __metadata: {
                        source: 'Official Zamboanga City Government Website (zamboangacity.gov.ph)',
                        extractedDate: new Date().toISOString().split('T')[0],
                        totalCount: existing.appropriation.length + extracted.revenue.length + extracted.regulatory.length,
                        categories: {
                            revenue: extracted.revenue.length,
                            appropriation: existing.appropriation.length,
                            regulatory: extracted.regulatory.length
                        },
                        yearRange: '1974-2025'
                    },
                    appropriation: existing.appropriation,
                    revenue: extracted.revenue.map(o => ({
                        number: o.n || o.number,
                        title: o.t || o.title,
                        year: o.y || o.year || 'Prior'
                    })),
                    regulatory: extracted.regulatory.map(o => ({
                        number: o.n || o.number,
                        title: o.t || o.title,
                        year: o.y || o.year || 'Prior'
                    }))
                };

                fs.writeFileSync(ORDINANCES_PATH, JSON.stringify(merged, null, 2));

                console.log('\n✅ SUCCESS!');
                console.log(`   Appropriation: ${merged.appropriation.length}`);
                console.log(`   Revenue: ${merged.revenue.length}`);
                console.log(`   Regulatory: ${merged.regulatory.length}`);
                console.log(`   Total: ${merged.__metadata.totalCount}`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, total: merged.__metadata.totalCount }));

                // Close server after success
                setTimeout(() => {
                    console.log('\nServer shutting down...');
                    process.exit(0);
                }, 1000);
            } catch (e) {
                console.error('Error:', e.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: e.message }));
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`\n🚀 Ordinance data receiver running at http://localhost:${PORT}`);
    console.log('\nWaiting for data from browser...');
});
