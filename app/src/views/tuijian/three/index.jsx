import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss'
class Three extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    id: 1,
                    text1: '孜然土豆饼',
                    des1: '营养丰富，早餐最爱',
                    img1: 'https://st-cn.meishij.net/r/44/110/4152544/s4152544_151805579914363.jpg',
                    path1: 'javascript:;',
                    text2: '快手快脚云朵早餐',
                    des2: '营养与口味并存，全家都爱',
                    img2: 'https://st-cn.meishij.net/r/21/118/3967021/s3967021_151797589944229.jpg',
                    path2: 'javascript:;',
                },
                {
                    id: 2,
                    text1: '板栗烧排骨',
                    des1: '经典家常，上桌就光盘',
                    img1: "https://st-cn.meishij.net/r/235/148/3349735/s3349735_148207219017220.jpg",
                    path1: 'javascript:;',
                    text2: '红烧日本豆腐',
                    des2: '鲜美入味，好吃到爆',
                    img2: "https://st-cn.meishij.net/r/21/119/2654771/s2654771_24558.jpg",
                    path2: 'javascript:;',
                },
                {
                    id: 3,
                    text1: '自制奶茶',
                    des1: '香气扑鼻，好吃过瘾',
                    img1: "https://st-cn.meishij.net/r/193/12/2378193/s2378193_143166161493547.jpg",
                    path1: 'javascript:;',
                    text2: '烤红薯片',
                    des2: '惊艳味蕾，好吃到爆',
                    img2: "https://st-cn.meishij.net/r/238/143/1348488/s1348488_10779.jpg",
                    path2: 'javascript:;',
                },
                {
                    id: 4,
                    text1: '板栗烧排骨',
                    des1: '美味飘香，满足味蕾',
                    img1: "https://st-cn.meishij.net/r/235/148/3349735/s3349735_148207219017220.jpg",
                    path1: 'javascript:;',
                    text2: '红烧日本豆腐',
                    des2: '家常经典，上桌被抢光',
                    img2: "https://st-cn.meishij.net/r/21/119/2654771/s2654771_24558.jpg",
                    path2: 'javascript:;',
                },
                {
                    id: 5,
                    text1: '晾干豆角',
                    des1: '均衡营养，滋补养生',
                    img1: "https://st-cn.meishij.net/r/184/180/4420184/s4420184_156854735764285.jpg",
                    path1: 'javascript:;',
                    text2: '炸蘑菇',
                    des2: '鲜香美味，让人口水直流',
                    img2: "https://st-cn.meishij.net/r/131/154/4351131/s4351131_147641329615204.jpg",
                    path2: 'javascript:;',
                },
            ],
            imgHeight: 176
        }
    }
    render() {
        const { data, imgHeight } = this.state
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {data.map(item => (
                        <div key={item.id}>
                            <a
                                href={item.path1}
                                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                            >
                                <img
                                    src={item.img1}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                            <a
                                href={item.path2}
                                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                            >
                                <img
                                    src={item.img2}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        </div>

                    ))}
                </Carousel>
            </WingBlank>

        )
    }

}
export default Three