export class LineStyle {
  constructor({
    color = 0xffffff,
    dashed = false,
    dashSize = 0.2,
    gapSize = 0.1,
    lineWidth = 1
  } = {}) {
    this.color = color;
    this.dashed = dashed;
    this.dashSize = dashSize;
    this.gapSize = gapSize;
    this.lineWidth = lineWidth;
  }
}
