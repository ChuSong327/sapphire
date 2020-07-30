import React, { useState, useEffect } from 'react';
import moment from 'moment'

import Header from '../../components/header/header';
import TextCard from '../../components/card/text-card';
import Overlay from '../../components/overlay/overlay';

import './shu-dong.css';

export default function ShuDong() {
    const [tags, setTags] = useState([
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'},
            {text: '告白', count: 1, url: '/qqh/gaobai'},
            {text: '家庭', count: 2, url: '/qqh/family'},
            {text: '心情', count: 10, url: '/qqh/mood'}
    ]);
    const [cards, setCards] = useState([
        {id: `${Math.random().toString(36).substring(5)}`,date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵, 叽叽叽叽叽叽叽，叽叽叽叽叽叽叽，叽叽叽叽叽叽叽，叽叽叽叽叽叽叽，叽叽叽叽叽叽叽，叽叽叽叽叽叽叽，叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽,叽叽叽叽叽叽叽', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。讲述了四个即将毕业的大学女生，在即将迈向社会的一年中，经历一系列挫折，但最终在生活和职场上收获了爱与成长的故事。站在校园与社会的分水岭，每个人都有自己要打败的困难和要解决的难题。《二十不惑》通过细小的生活琐碎，真实的情感表达，解读当下的年轻人青春最好的模样。在这个青春未脱、成熟不达的年纪，二十岁的她们遇到了很多疑惑，关于事业、友情、亲情和爱情。所幸的是她们总是对未来充满期待，对她们而言二十没有定义，怎样都对怎样都好，即使过得不获，也要活得不惑。', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '正在看第一集，笑得我上气不接下气，感觉自己挖到了宝！又是一年毕业季，大批的学生涌入职场，每个年轻人都在用着自己的方式向那个之前从未接触过的世界问好。感觉这个剧和其他的青春剧不太一样，这个剧大篇幅都在讲四个女孩子之间的友情和成长，挺暖心，挺真实的，没有那些乱七八糟的塑料姐妹情或是狗血恋情桥段。不知道别人了，反正对我这种普普通通的人来说，看着特别有代入感！', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '我的天，二十岁的青春是什么亚子的，三十岁的老阿姨从姜小果身上找回了记忆，我也太喜欢她了，为了实习工作拼命努力的亚子，还有金句不断“搞定工作没什么了不起的，搞倒一个渣男才有成就感”，啊哈哈哈哈哈哈。不过这部剧明显是宿舍四人友谊故事的成长史啊，看完我赶紧打开好久没发言但一直都在的204群，找姐妹叙旧去！', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '终于看到置景靠谱的青春剧了，四个女生目前都挺可爱的，有点小时候看《十七岁不哭》内味儿。但最大问题是这四个人没有姐妹感，后面剧情起来不知道会不会好些', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '还钱剧情可真尴尬，虚假的姐妹情，真正的姐妹能一起骂死她', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '好尴尬…这是青春剧？这编剧又在意淫什么？无病呻吟狗血青春？这是20岁疑惑？四位主演怎么做到没有丝毫默契的？关晓彤看出尽力了可是不搭，李庚希也是好尴尬……整个宿舍就像神经病 虚扯姐妹情深？凭什么你10.30想睡觉别人跟你一样？？？导演编剧完全不知道20的困惑在哪里就扯吧，糊弄傻逼群众吧886', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵', likes: 24},
        {id: `${Math.random().toString(36).substring(5)}`, date: moment().format('lll'), text: '小小老鼠小小老鼠穿花衣，大脸猫大脸猫长胡须，一个尾巴细又长，一个脸大长胡须，喵咪咪喵', likes: 24},
    ]);
    const[selectedCard, setSelectedCard] = useState(null);
    const [view, setView] = useState('grid');

    // When click the card, pop up the card in detail view
    const handleCardClick = (evt, id) => {
        evt.stopPropagation();
        setSelectedCard(() => (
           cards.find(card => card.id === id)
        ));
        const container = document.getElementById('shudong');
        container.classList.add('blur');
    };

    // When heart icon is clicked, increment the count by 1
    const handleLikeClick = (evt, id) => {
        evt.stopPropagation();
        // todo: increment the likes count
    };

    const handleViewChange = (evt) => {
        switch (evt.currentTarget.id) {
            case 'list':
                setView('list');
                break;
            case 'grid':
                setView('grid');
                break;
            default:
                setView('grid');
        }
    };

    window.onclick = (evt) => {
        const overlay = document.getElementById('overlay');
        if (evt.target == overlay) {
            setSelectedCard(null);
            const container = document.getElementById('shudong');
            container.classList.remove('blur');
        }
    };

    return (
        <>
            <div id='shudong' className='Shudong-container'>
                {/* header row */}
                    <Header title={'树洞悄悄话'} tags={tags} handleViewChange={handleViewChange}/>
                {/* card row */}
                    <div className={`ShuDong-content ${view}`}>
                        {cards.map((card, index) => (
                            <TextCard
                                card={card}
                                key={index}
                                id={card['id']}
                                view={view}
                                handleCardClick={handleCardClick}
                                handleLikeClick={handleLikeClick}
                            /> 
                        ))}
                    </div>
            </div>
            {!!selectedCard
                ? <Overlay card={selectedCard} id={selectedCard.id} handleLikeClick={handleLikeClick}/>
                : null}
        </>
    )
}