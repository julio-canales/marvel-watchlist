import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    let text = "";
    
    if (value > 1440) { //greater than a day
      let days = Math.floor(value / 1440);

      text = text + `${days} day`;
      days == 1? text = text + " ": text = text + "s ";

      value -= (days * 1440);
    }
    if (value > 60) {
      let hours = Math.floor(value / 60);

      text = text + `${hours} hour`;
      hours == 1? text = text + " ": text = text + "s ";

      value -= (hours * 60);
    }
    if (value != 0) {
      text = text + `${value} minute`;
      if (value != 1) {
        text = text + "s";
      }
    }

    return text;
  }

}
