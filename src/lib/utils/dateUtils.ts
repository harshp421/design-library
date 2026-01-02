import moment from "moment-timezone";

export type DateFormatType =
  | "ONLY-DATE"
  | "DATE-TIME"
  | "TIME"
  | "DURATION-PAST"
  | "DURATION";

 class DateUtils {
  private timezone: string;

  constructor(timezone?: string) {
    // auto-detect user timezone if not passed
    this.timezone =
      timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

 
  format(epochMs: number, type: DateFormatType): string {
    const m = moment.tz(epochMs, this.timezone);

    switch (type) {
      case "ONLY-DATE":
        return m.format("YYYY-MM-DD");

      case "DATE-TIME":
        return m.format("YYYY-MM-DD HH:mm");

      case "TIME":
        return m.format("HH:mm");

      case "DURATION-PAST":
        console.log(moment.duration(moment().diff(m)/1000).humanize(true));
        return moment.duration(moment().diff(m)/1000).humanize(true); 
        // e.g. "5 minutes ago"

      case "DURATION":
        return moment.duration(m.diff(0)).humanize(); 
        // e.g. "2 hours", "3 days"

      default:
        throw new Error("Unknown date format type");
    }
  }
}


export const dateUtils = new DateUtils();