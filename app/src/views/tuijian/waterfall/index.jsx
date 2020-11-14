import React from 'react';
import { Icon } from 'antd-mobile';

import './index.scss'
import Tuijian from '../../../api/tuijian'
class WaterFall extends React.Component {
    constructor() {
        super()
        this.state = {
            tabs: [
                { title: '推荐' },
                { title: '时令' },
                { title: '食肉' },
                { title: '素食' },
                { title: '烘焙' },
            ],
            data: [],
            loading: true,
            num: 0,
            page:1
        }

        this.tabRender = this.tabRender.bind(this)
        this.handle = this.handle.bind(this)
        this.updataData=debounce(this.updataData,100)
    }
    async componentDidMount() {
        window.addEventListener("scroll", this.handle.bind(this))
        try {
            let p = await Tuijian.tuijianWaterFall(1, 1, 4)
            this.setState({
                data: p.data.datalist
            })
            console.log('挂载前');
        } catch (err) {
            console.log(err);
        }
    }


    //切换菜品
    async tabRender(index) {
        this.setState({
            data: [],
            num: index,
            page:1,
            loading: false
        })
        let type = index + 1
        try {
            let p = await Tuijian.tuijianWaterFall(type, 1, 4)
            this.setState({
                data: p.data.datalist,
                loading: true
            })
        } catch (err) {
            console.log(err);
        }
    }
    handle() {
        // console.log("数据的高-----------------------", this.onPullUp.clientHeight);
        // console.log("滚动的高----------------------", document.documentElement.scrollTop);
        // console.log("屏幕的高----------------------", document.documentElement.clientHeight)
        try{
            let refHeight=this.onPullUp.clientHeight
            let classHeight=document.documentElement.scrollTop
            let watchHeight=document.documentElement.clientHeight
            if(classHeight>=refHeight+watchHeight-150){
                console.log('到底了');
                this.updataData()
            }
        }catch(err){
            console.log(err);
        }
        
    }
    async updataData(){
        const {num,page,data}=this.state
        let type=num+1
        try {
            let p = await Tuijian.tuijianWaterFall(type, page, 4)
            let newdata=data.concat(p.data.datalist)
            this.setState({
                data: newdata,
                page:page+1
            })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
   
        const { tabs, loading, num, data } = this.state
        return (
            <div className="wf" onScroll={this.handle} ref={(el)=>this.onPullUp=el}>
                <div className="wft_box">
                    <h2 className="title_s1" id="wfwtop">大家都在做</h2>
                    <div className="wf_nav" id="wf_nav">
                        {tabs.map((item, index) => {
                            return (
                                <span
                                    data_tab={index}
                                    className={num == index ? "t current" : "t"}
                                    key={index}
                                    onClick={this.tabRender.bind(null, index)}
                                ><em>{item.title}</em></span>
                            )
                        })}
                    </div>
                </div>


                { loading ?
                    <div
                        // style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}
                        className='wf_content'
                    >
                        {
                            data.map(item => {
                                return (
                                    <div className='wf_item'>
                                        <figure className='wf_box'>
                                            {item.img ? <img src={item.img} alt="" /> : <img src={item.img[0]} alt="" />}
                                            <figcaption className='wf_text'>
                                                {item.title}
                                            </figcaption>
                                        </figure>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <Icon type='loading' />
                }

            </div >
        )
    }

}
function debounce(fn, ms) {
    let timeoutId
    return function () {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        fn.apply(this, arguments)
      }, ms)
    }
  }
export default WaterFall