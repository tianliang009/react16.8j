import { Image } from '@douyinfe/semi-ui';
import { useState } from 'react';
import img1 from '../image/old.png';
import img2 from '../image/new.png';

const GeYuan = () => {
    const [imgRoute, setImg] = useState(img1)
    const changeImg = (index) => {
        if(index === 0) {
            setImg(img1)
        } else {
            setImg(img2)
        }
    }
    return (
        <div>
            <button onClick={()=>{changeImg(0)}}>old</button>
            <button onClick={()=>{changeImg(1)}}>new</button>
            {/* <Image 
                width={360}
                height={200}
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg"
            /> */}
            <Image width={1400} src={imgRoute}></Image>
        </div>
    );
}
export default GeYuan;