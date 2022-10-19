
# captcha_img_to_text_img

convert captcha image to simple image

![Logo](https://i.postimg.cc/fL4mhQmq/captcha-img-to-text-img.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@Fares Ghegad](https://github.com/ghegad/)


## Usage/Examples

```javascript
import {captcha_to_image_base64} from 'captcha_to_image_base64'
import fs from "fs";
var base64_captcha_img = await fs.readFileSync('./captcha.jpg', 'base64');
var base64_new_img = await captcha_to_image_base64(base64_captcha_img);
console.log(base64_new_img);
```

