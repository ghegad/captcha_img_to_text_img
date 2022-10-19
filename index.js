import Jimp from 'jimp';
async function captcha_to_image_base64(base64_captcha){
    var result = null;
    await Jimp.read(Buffer.from(
        base64_captcha,"base64")
      ).then(img => {
        for(var i = 0;i<img.bitmap.data.length;i =i+ 4)
        {
            if(img.bitmap.data[i] >= 190 && img.bitmap.data[i+1] >= 190 && img.bitmap.data[i+2] >= 190)
            {
                img.bitmap.data[i] = 255;
                img.bitmap.data[i+1] = 255;
                img.bitmap.data[i+2] = 255;
            }
            if(img.bitmap.data[i+2] < 140 || img.bitmap.data[i] > 80)
            {
                img.bitmap.data[i] = 255;
                img.bitmap.data[i+1] = 255;
                img.bitmap.data[i+2] = 255;
            }
            if(i>(img.bitmap.data.length-(img.bitmap.width*4)))
            {
                img.bitmap.data[i] = 255;
                img.bitmap.data[i+1] = 255;
                img.bitmap.data[i+2] = 255;
            }
        }
    
        for(var i = 0;i<img.bitmap.data.length;i =i+ 4)
        {
            if(img.bitmap.data[i] == 255 && img.bitmap.data[i+1] == 255 && img.bitmap.data[i+2] == 255)
            {           
                    if(img.bitmap.data[i+8] == 255 && img.bitmap.data[i+1+8] == 255 && img.bitmap.data[i+2+8] == 255)
                    { 
                            if(img.bitmap.data[i+4+(img.bitmap.width*4)] != 255 && img.bitmap.data[i+1+4+(img.bitmap.width*4)] != 255 && img.bitmap.data[i+2+4+(img.bitmap.width*4)] != 255)
                            {       
                                    if(img.bitmap.data[i+(img.bitmap.width*8)] == 255 && img.bitmap.data[i+1+(img.bitmap.width*8)] == 255 && img.bitmap.data[i+2+(img.bitmap.width*8)] == 255)
                                    {       
                                            if(img.bitmap.data[i+8+(img.bitmap.width*8)] == 255 && img.bitmap.data[i+1+8+(img.bitmap.width*8)] == 255 && img.bitmap.data[i+2+8+(img.bitmap.width*8)] == 255)
                                            { 
                                                img.bitmap.data[i+4]=255;img.bitmap.data[i+4+1]=255;img.bitmap.data[i+4+2]=255;
                                                img.bitmap.data[i+(img.bitmap.width*4)]=255;img.bitmap.data[i+1+(img.bitmap.width*4)]=255;img.bitmap.data[i+2+(img.bitmap.width*4)]=255;
                                                img.bitmap.data[i+4+(img.bitmap.width*4)]=255;img.bitmap.data[i+4+1+(img.bitmap.width*4)]=255;img.bitmap.data[i+4+2+(img.bitmap.width*4)]=255;
                                                img.bitmap.data[i+8+(img.bitmap.width*4)]=255;img.bitmap.data[i+8+1+(img.bitmap.width*4)]=255;img.bitmap.data[i+8+2+(img.bitmap.width*4)]=255;
                                                img.bitmap.data[i+4+(img.bitmap.width*8)]=255;img.bitmap.data[i+4+1+(img.bitmap.width*8)]=255;img.bitmap.data[i+4+2+(img.bitmap.width*8)]=255;
                                            }
                                        }   
                            }
                        }
                    }
                }
        img.getBase64(Jimp.AUTO,async (err, res) => {
            result = res;
          })
      })
      return result;
}
module.exports = captcha_to_image_base64;

