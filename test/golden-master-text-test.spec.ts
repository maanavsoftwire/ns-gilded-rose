import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

describe('Gilded Rose Golden Master Test', function () {
    it('should match the golden master output', function() {
        // Create a GildedRose instance with a set of items
        const gildedRose = new GildedRose([
            new Item('Aged Brie', 2, 0),
            new Item('Elixir of the Mongoose', 5, 7),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 9, 50),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 10, 20),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 5, 3),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 0, 3),
            new Item('Conjured Mana Cake', 3, 6)
        ]);

        // Call the updateQuality method to simulate a day passing
        const items = gildedRose.updateQuality();

        // Compare the output with the expected golden master output
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1);

        expect(items[1].name).to.equal('Elixir of the Mongoose');
        expect(items[1].sellIn).to.equal(4);
        expect(items[1].quality).to.equal(6);  
        
        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);
        
        expect(items[3].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[3].sellIn).to.equal(14);
        expect(items[3].quality).to.equal(21);
        
        expect(items[4].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[4].sellIn).to.equal(8);
        expect(items[4].quality).to.equal(50);

        expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[5].sellIn).to.equal(9);
        expect(items[5].quality).to.equal(22);
        
        expect(items[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[6].sellIn).to.equal(4);
        expect(items[6].quality).to.equal(6);
        
        expect(items[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[7].sellIn).to.equal(-1);
        expect(items[7].quality).to.equal(0);

        expect(items[8].name).to.equal('Conjured Mana Cake');
        expect(items[8].sellIn).to.equal(2);
        expect(items[8].quality).to.equal(5);
    });
});