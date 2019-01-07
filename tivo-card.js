
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(188, 70);
        frameRate(16);

        draw = function () {

            // canvas color
            background(208, 216, 248);

            // global
            strokeCap(SQUARE);

            // electrical arc
            var arcPoint = random(16, 22);
            strokeWeight(1);
            stroke(0, 64, 248);
            line(6, 20, 11, arcPoint);
            line(11, arcPoint, 16, 20);

            // reset
            noFill();
            stroke(0, 0, 0);

            // T
            strokeWeight(6);
            line(47, 24, 82, 24);
            strokeWeight(7);
            line(64, 26, 64, 51);

            // i
            strokeWeight(7);
            line(91, 28, 91, 51);
            // blue dot
            stroke(0, 64, 248);
            line(91, 21, 91, 26);

            // V
            var centerOfV = 120;
            stroke(0, 0, 0);
            strokeJoin(BEVEL);
            beginShape();
            vertex(centerOfV - 17, 19);
            vertex(centerOfV, 51);
            vertex(centerOfV + 17, 19);
            endShape();
            noStroke();
            fill(208, 216, 248);
            rect(100, 13, 40, 8)

            // reset
            noFill();

            // underscore arc
            strokeWeight(3);
            stroke(0, 64, 248);
            arc(centerOfV, 32, 58, 58, 7.4, 8.3);

            // O
            stroke(0, 0, 0);
            strokeCap(ROUND);
            // top
            strokeWeight(6);
            line(149, 24, 174, 24);
            // right
            strokeWeight(8);
            line(176, 26, 176, 46);
            // bottom
            strokeWeight(6);
            line(149, 49, 174, 49);
            // left
            strokeWeight(8);
            line(148, 26, 148, 46);

            // Registered Trademark
            strokeWeight(1);
            ellipse(185, 24, 6, 6);
            textSize(5);
            fill(0, 0, 0);
            text("R", 183.5, 26);

        }
    }
};

