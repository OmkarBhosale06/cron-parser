"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CronParser_1 = require("./parser/CronParser");
function format(label, values) {
    return label.padEnd(14) + (Array.isArray(values) ? values.join(' ') : values);
}
const cronLine = process.argv[2];
if (!cronLine) {
    console.error("Usage: ts-node src/cli.ts '<cron_expression>'");
    process.exit(1);
}
try {
    const parser = new CronParser_1.CronParser(cronLine);
    const result = parser.parse();
    for (const key of Object.keys(result)) {
        console.log(format(key, result[key]));
    }
}
catch (e) {
    console.error('Error:', e.message);
}
