

class MouseActions {
    static click() {
        console.log('Click');
    }
    rightClick() {
        console.log(' Right Click');
    }
    doubleClick() {
        console.log('Double Click');
    }

    scrollUp() {
        console.log('Scroll Up');
    }

    moveTo() {
        console.log('Move');
    }
    clickAndHold() {
        console.log('Click and hold');
    }
    release() {
        console.log('Release');
    }
    dragAndDrop(){
        this.moveTo();
    this.clickAndHold();
    this.moveTo();
    this.release();
    }
}


module.exports.MouseActions = MouseActions;