/**
 * Created by User on 18.05.2017.
 */
describe("Test", function () {
    describe("CoordinateCentr", function () {
        it("Считает начальные координаты центра зеленого круга, когда мышь не приблизилась к нему", function () {
            assert.equal(Test.CoordinateCentr(225, 225), 250);
        });
    });
    describe("CentrRedX", function () {
        it("Считает координату X центра красного круга", function () {
            assert.equal(Test.CentrRedX(), 250);
        });
    });
    describe("CentrRedY", function () {
        it("Считает координату Y центра красного круга", function () {
            assert.equal(Test.CentrRedY(), 250);
        });
    });
    describe("RadRed", function () {
        it("Радиус красного круга", function () {
            assert.equal(Test.RadRed(), 250);
        });
    });
});
