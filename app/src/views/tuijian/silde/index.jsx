import React, { useState, useEffect } from 'react';
import './index.scss'

function Silde() {
    const [silde, changeSilde] = useState([
        {
            title: '千丝万缕虾',
            background: 'https://st-cn.meishij.net/p2/20200218/20200218143108_256.jpg',
            useheard: "https://st-cn.meishij.net/user/165/105/t7651415_147168121259643.jpg",
            usename: "橙子小厨"
        },
        {
            title: '家常烧茄子',
            background: 'https://st-cn.meishij.net/p2/20200218/20200218143255_894.jpg',
            useheard: "https://st-cn.meishij.net/user/12/47/t13511762_154779376819795.jpg",
            usename: "聚宝美食"
        },
        {
            title: '番茄开胃汤',
            background: 'https://st-cn.meishij.net/p2/20200218/20200218143339_150.jpg',
            useheard: "https://st-cn.meishij.net/user/239/212/t13115739_153509264588394.jpg",
            usename: "丸子美食666"
        }
    ])
    useEffect(function () {

        // const fetch_promise=fetch("/api/meishijie/getlist?type=1&page=1&pageSize=3")
        // fetch_promise.then(function(res){
        //     return res.json()
        // })
        // .then(function(json){
        //     console.log(json);
        // })
        // .catch(function(){
        //     console.log(arguments);
        // })
    })
    return (
        <div className="con1w">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {silde.map(item => {
                        return (
                            <div className="swiper-slide" key={item.title} >
                                <div className="img">
                                    <img className="background_img" src={item.background} alt="" />
                                    <h4 className="t">{item.title}</h4>
                                    <p className="p">
                                        <img className="ico" src={item.useheard} alt="" />
                                        <span className="name">{item.usename}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </div >
    )
}
export default Silde