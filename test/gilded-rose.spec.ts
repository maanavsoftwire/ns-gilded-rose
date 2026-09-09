import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });

});
// describe('Gilded Rose Golden Master Test', function () {
//     it('should match the golden master output', function() {
//         // Create a GildedRose instance with a set of items
//         const gildedRose = new GildedRose([
//             new Item('Aged Brie', 2, 0),
//             new Item('Elixir of the Mongoose', 5, 7),
//             new Item('Sulfuras, Hand of Ragnaros', 0, 80),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
//             new Item('Conjured Mana Cake', 3, 6)
//         ]);

//         // Call the updateQuality method to simulate a day passing
//         const items = gildedRose.updateQuality();

//         // Compare the output with the expected golden master output
//         expect(items[0].name).to.equal('Aged Brie');
//         expect(items[0].sellIn).to.equal(1);
//         expect(items[0].quality).to.equal(1);

//         expect(items[1].name).to.equal('Elixir of the Mongoose');
//         expect(items[1].sellIn).to.equal(4);
//         expect(items[1].quality).to.equal(6);  
        
//         expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
//         expect(items[2].sellIn).to.equal(0);
//         expect(items[2].quality).to.equal(80);
        
//         expect(items[3].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
//         expect(items[3].sellIn).to.equal(14);
//         expect(items[3].quality).to.equal(21);
        
//         expect(items[4].name).to.equal('Conjured Mana Cake');
//         expect(items[4].sellIn).to.equal(2);
//         expect(items[4].quality).to.equal(5);
//     });
// });