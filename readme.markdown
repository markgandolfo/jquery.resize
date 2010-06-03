Easy to use jquery plugin that allows a maximum size for an image is defined. 

### How to use 

By default the max size is set at 920. 

    $('img#resize).resize();
    <img id="resize" src="image.png" />

Although you can set it by setting maxWidth

    $('img#resize).resize({ maxWidth: 400 });
    <img id="resize" src="image.png" />