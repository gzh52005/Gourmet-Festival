import React, { useState } from 'react';
import { SketchOutlined, SlackOutlined, CommentOutlined, AppstoreOutlined, FlagOutlined, PlayCircleOutlined } from '@ant-design/icons';
import './index.scss'
function Tjlinksw() {
    const [links, changelinks] = useState([
        {
            ico: <SketchOutlined />,
            href: "javasrcipt:;",
            title: "每日优惠"
        },
        {
            ico: <SlackOutlined />,
            href: "javasrcipt:;",
            title: "食材大全"
        },
        {
            ico: <CommentOutlined />,
            href: "javasrcipt:;",
            title: "热门专题"
        },
        {
            ico: <AppstoreOutlined />,
            href: "javasrcipt:;",
            title: "菜谱分类"
        },
        {
            ico: <FlagOutlined />,
            href: "javasrcipt:;",
            title: "本周流行"
        },
        {
            ico: <PlayCircleOutlined />,
            href: "javasrcipt:;",
            title: "视频菜谱"
        }
    ])
    const [current,changecurrent]=useState(0)

    return (
        <div id="tjlinkbox">
            {links.map((item,index) => {
                return (
                    <div className={index==current?"tjlink tjlink_spe":"tjlink"} 
                    key={item.title}
                    >
                        <a href={item.href}>
                            {item.ico}
                            <p>{item.title}</p>
                        </a>
                    </div>

                )
            })}

        </div>
    )
}
export default Tjlinksw