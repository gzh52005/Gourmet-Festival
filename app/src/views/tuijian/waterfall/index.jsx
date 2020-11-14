import React, { useState, useEffect } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Tuijian from '../../../api/tuijian'
function WaterFall() {
    const tabs = [
        { title: '推荐' },
        { title: '时令' },
        { title: '食肉' },
        { title: '素食' },
        { title: '烘焙' },
    ]
    const [data, changedata] = useState([])
    const [renderData, addData] = useState([])

    useEffect(async function () {
        try {
            let p = await Tuijian.tuijianWaterFall(1, 1, 1)
            changedata(p.data.datalist)
            let newdata = renderData.concat(data)
            addData(newdata)
        } catch (err) {
            console.log(err);
        }
    }, [])

    const tabRender = async function (tab, index) {
        addData([])
        console.log(tab, index);
        let type = index + 1
        try {
            let p = await Tuijian.tuijianWaterFall(type, 1, 1)
            changedata(p.data.datalist)
            let newdata = renderData.concat(data)
            addData(newdata)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <WhiteSpace />
            <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false} onTabClick={(tab, index) => { tabRender(tab, index) }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    {renderData.map(item => {
                        return (
                            <div>
                                <figure>
                                    {item.img?<img src={item.img} alt="" />:<img src={item.img[0]} alt="" />}
                                    {item.title}
                                </figure>
                            </div>
                        )
                    })}
                </div>

            </Tabs>
            <WhiteSpace />
        </div>
    )
}
export default WaterFall