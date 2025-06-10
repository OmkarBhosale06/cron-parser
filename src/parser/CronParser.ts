import { FieldParser } from './FieldParser';

export class CronParser {
    private fields: string[];
    private command: string;

    constructor(cronLine: string) {
        this.fields = cronLine.trim().split(' ');
        console.log(this.fields);
        if (this.fields.length < 6) throw new Error('Invalid cron line');
        this.command = this.fields.slice(5).join(' ');
    }

    parse() {
        const [min, hr, dom, mon, dow] = this.fields;
        return {
            minute: FieldParser.parse(min, 'minute'),
            hour: FieldParser.parse(hr, 'hour'),
            dayOfMonth: FieldParser.parse(dom, 'dayOfMonth'),
            month: FieldParser.parse(mon, 'month'),
            dayOfWeek: FieldParser.parse(dow, 'dayOfWeek'),
            command: this.command,
        };
    }
}
