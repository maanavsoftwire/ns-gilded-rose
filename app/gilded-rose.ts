export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const name = item.name;

            if (name != 'Sulfuras, Hand of Ragnaros') {
                item.sellIn = item.sellIn - 1;
            }

            switch (name) {
                case 'Aged Brie':
                    if (item.quality < 50) {
                        if (item.sellIn >= 0) {
                        item.quality = item.quality + 1;
                        } else {
                            item.quality = item.quality + 2;
                        }
                    }
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (item.quality < 50){
                        if (item.sellIn >= 0) {
                            item.quality = item.quality + 1;
                            if (item.sellIn < 10) {
                                if (item.quality < 50) {
                                    item.quality = item.quality + 1;
                                }
                            }
                            if (item.sellIn < 5) {
                                if (item.quality < 50) {
                                    item.quality = item.quality + 1;
                                }
                            }
                        } else {
                        item.quality = 0;
                        }
                    }
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    // Sulfuras does not change in quality or sellIn
                    break;

                case 'Conjured Mana Cake':
                    if (item.quality > 0) {
                        if (item.sellIn >= 0) {
                            item.quality = item.quality - 2;
                        } else {
                            item.quality = item.quality - 4;
                        }
                    }
                    item.quality = Math.max(item.quality, 0); // Ensure quality doesn't go below 0
                    break;
                default:
                    if (item.quality > 0) {
                        if (item.sellIn >= 0) {
                            item.quality = item.quality - 1;
                        } else {
                            item.quality = item.quality - 2;
                            item.quality = Math.max(item.quality, 0); // Ensure quality doesn't go below 0
                        }
                    }
                    break;
            }

        }

        return this.items;
    }
}
