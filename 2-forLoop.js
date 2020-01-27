// CREATING 200 x 200 PIXEL IMAGE + RECOLOR IT FROM BLACK TO YELLOW

var img = new SimpleImage(200,200);
print(img);

for (var pixel of img.values()) {
    var red = 255 - pixel.getRed();
    pixel.setRed(red);
    var green = 255 - pixel.getGreen();
    pixel.setGreen(green);
}

print(img);