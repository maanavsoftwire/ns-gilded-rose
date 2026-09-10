import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('General', function () {

    it('SellIn should decrease by 1', function() {
        const gildedRose = new GildedRose([ new Item('Rose', 10, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Rose');
        expect(items[0].sellIn).to.equal(9);
    });


    it('Quality should decrease by 1', function() {
        const gildedRose = new GildedRose([ new Item('Rose', 10, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Rose');
        expect(items[0].quality).to.equal(7);
    });

    it('Quality decreases twice as fast when SellIn is less than 0', function() {
        const gildedRose = new GildedRose([ new Item('Rose', -2, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Rose');
        expect(items[0].sellIn).to.equal(-3);
        expect(items[0].quality).to.equal(6);
    });

    it('Quality cannot be negative', function() {
        const gildedRose = new GildedRose([ new Item('Rose', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Rose');
        expect(items[0].quality).to.equal(0);
    });


    it('Quality cannot be greater than 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });


});

describe('Aged Brie', function () {
    it('Quality increases the older it gets', function() {
        const gildedRose = new GildedRose([
            new Item('Aged Brie', 2, 0),
            
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1);
    });
    it('Quality increases twice as fast when SellIn is negative', function() {
        const gildedRose = new GildedRose([
            new Item('Aged Brie', -2, 3),
            
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-3);
        expect(items[0].quality).to.equal(5);
    });
});

describe('Sulfuras', function () {
    it('Quality and SellIn do not change', function() {
        const gildedRose = new GildedRose([
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        ]);
        
        const items = gildedRose.updateQuality();   
        
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    });
});

describe('Backstage passes', function () {
    it('Quality increases by 1 when SellIn is greater than 10', function() {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(21);
    });

    it('Quality increases by 2 when SellIn is between 6 and 10', function() {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(8);
        expect(items[0].quality).to.equal(22);
    });

    it('Quality increases by 3 when SellIn is between 1 and 5', function() {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(23);
    });

    it('Quality drops to 0 when SellIn is less than or equal to 0', function() {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});