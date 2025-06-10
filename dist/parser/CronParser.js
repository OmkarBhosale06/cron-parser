"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronParser = void 0;
const FieldParser_1 = require("./FieldParser");
class CronParser {
    constructor(cronLine) {
        this.fields = cronLine.trim().split(' ');
        if (this.fields.length < 6)
            throw new Error('Invalid cron line');
        this.command = this.fields.slice(5).join(' ');
    }
    parse() {
        const [min, hr, dom, mon, dow] = this.fields;
        return {
            minute: FieldParser_1.FieldParser.parse(min, 'minute'),
            hour: FieldParser_1.FieldParser.parse(hr, 'hour'),
            dayOfMonth: FieldParser_1.FieldParser.parse(dom, 'dayOfMonth'),
            month: FieldParser_1.FieldParser.parse(mon, 'month'),
            dayOfWeek: FieldParser_1.FieldParser.parse(dow, 'dayOfWeek'),
            command: this.command,
        };
    }
}
exports.CronParser = CronParser;
