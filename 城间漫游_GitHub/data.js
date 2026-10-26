window.CITY = {
  updated: '2026-10-22',
  sources: {
    policy: {label:'青岛市文化和旅游局 · 散客免预约公告',url:'https://www.qingdao.gov.cn/zwgk/xxgk/whly/ywfl/202408/t20240828_8203870.shtml'},
    cathedral: {label:'In Qingdao · 浙江路天主教堂参观指南',url:'https://inqingdao.com/en/explore/attractions/stmichael-cathedral'},
    street: {label:'青岛政务网 · 中山路商业街',url:'https://www.qingdao.gov.cn/yfqd/qdwl/cjfw/wyqgw/202009/t20200910_522317.shtml'},
    laoshe: {label:'青岛日报 · 名人故居与城市文化',url:'https://epaper.guanhai.com.cn/conpaper/qdrb/resfile/2025-07-23/03/qdrb2025072303.pdf'},
    hill: {label:'In Qingdao · 小鱼山公园',url:'https://www.inqingdao.com/zh/explore/attractions/xiaoyushan-park'},
    park: {label:'青岛政务网 · 鲁迅公园',url:'https://www.qingdao.gov.cn/yfqd/qdwl/cjfw/wyqgy/202009/t20200903_520363.shtml'},
    island: {label:'青岛新闻网 · 小青岛公园闭园时间公告',url:'https://news.qingdaonews.com/qingdao/2026-07/19/content_23746649.htm'}
  },
  places: [
    {id:'cathedral',name:'浙江路天主教堂',short:'钟声与红瓦',theme:'建筑',image:'church',address:'市南区浙江路15号',hours:'08:30—17:00，16:30 停止入场',booking:'教堂参观与宗教活动安排不同，出发前查看当日公告。',release:'未查得固定放票时间',stay:'建议 40—60 分钟',best:'上午，适合观察建筑外立面',source:'cathedral',description:'双塔从老城街巷间升起，红色屋顶与浅色立面，在不同光线里呈现出细微变化。',story:'先在广场边停一会儿，再试着沿街转一个弯。远看双塔的轮廓，近看门窗与墙面的细节，同一栋建筑也会有不同的表情。进入教堂时保持安静，尊重正在进行的宗教活动。',gallery:['church','interior','window'],photoNote:'浙江路天主教堂实拍'},
    {id:'zhongshan',name:'中山路街区',short:'老城的日常',theme:'街巷',image:'street',address:'市南区中山路及周边街巷',hours:'公共街区可步行浏览，店铺各自营业',booking:'街区步行无需预约；展馆、店铺另行确认。',release:'街区无统一放票时间',stay:'建议 60—90 分钟',best:'白天，适合留意招牌与街巷细节',source:'street',description:'沿着商街走进支路，招牌、坡道和旧建筑把城市的日常慢慢展开。',story:'中山路曾是老青岛的商业中心，今天仍能从沿街建筑和街巷的转折中读到不同年代的痕迹。试着暂时收起目的地清单，选一条感兴趣的小街走进去。城市的故事，也藏在日常生活里。',gallery:['street','facade'],photoNote:'青岛老城街巷实拍'},
    {id:'laoshe',name:'老舍故居',short:'文字里的城市',theme:'文学',image:'house',address:'市南区黄县路12号',hours:'当日开放及闭馆安排请向场馆确认',booking:'散客免预约政策可作参考，团体及活动需单独确认。',release:'未查得当前固定放票时间',stay:'建议 40—60 分钟',best:'白天，给展陈阅读留出时间',source:'laoshe',description:'走进黄县路的小院，让一次城市漫游从文字与阅读重新开始。',story:'老舍故居与骆驼祥子博物馆，是这条路线里的阅读停靠点。不要急着把所有展板看完，可以先挑一段让你产生兴趣的文字，再带着它走回街上，看看阅读如何改变你观察城市的方式。',gallery:['house','courtyard','reading'],photoNote:'老舍故居院落实拍'},
    {id:'xiaoyushan',name:'小鱼山公园',short:'把城市看成一幅画',theme:'建筑',image:'coast',address:'市南区福山支路24号',hours:'06:00—20:00（参考城市旅游指南）',booking:'免费公园；遇特殊安排以现场公告为准。',release:'无需按固定时间抢票',stay:'建议 40—60 分钟',best:'晴朗天气，适合登高眺望',source:'hill',description:'沿着山路向上，红瓦、绿树与海湾逐渐在眼前连成一幅城市图景。',story:'小鱼山是一座可以登高观景的山头园林。换一个高度，刚才走过的街巷就有了新的关系。选一栋印象最深的房子，或者一段弯曲的海岸，试着在视野中找一找它的位置。',gallery:['coast','hill'],photoNote:'青岛海湾眺望实拍；用于表达登高视野'},
    {id:'luxun',name:'鲁迅公园',short:'松影与礁石之间',theme:'海岸',image:'sunset',address:'市南区琴屿路1号',hours:'临海公园，开放及临时管控以现场为准',booking:'普通步行浏览无需提前预约，特殊活动另行确认。',release:'无统一放票时间',stay:'建议 40—60 分钟',best:'傍晚，留意天气与海边安全提示',source:'park',description:'把脚步交给沿海小路，在树影、礁石和潮声之间留出一点空白。',story:'公园以海滨自然风光为特色，松树和礁石构成了沿途的节奏。走到这里，可以把“下一站”暂时放一边。沿正规步道停留，听一会儿潮声，把看到的颜色或一句感受记下来。',gallery:['sunset','sea','shore'],photoNote:'青岛临海步道与礁石实拍'},
    {id:'xiaoqingdao',name:'小青岛公园',short:'走向海中的小岛',theme:'海岸',image:'sea',address:'市南区琴屿路沿海方向',hours:'20:00 闭园；当天开园与入园安排请确认',booking:'出发前查看景区公告，临时安排可能调整。',release:'未查得固定放票时间',stay:'建议 45—60 分钟',best:'天气晴好时，沿岸风景更清楚',source:'island',description:'从城市走向海边，把远处的轮廓与近处的潮水一起留在记忆里。',story:'小岛与城市隔海相望，让这段漫游有了一个面向海的结尾。慢一点走，回头看一眼来时的岸线。照片记录风景，也可以记录你在这里停留的时间。',gallery:['sea','shore'],photoNote:'青岛海湾实拍；非小青岛公园入口定位照片'}
  ],
  routes: [
    {id:'red-roofs',title:'在红瓦与钟声之间',theme:'建筑',subtitle:'从一栋建筑，到一条街，再到一座小院。',image:'church',time:'建议留出半天',duration:'half',places:['cathedral','zhongshan','laoshe'],intro:'先看双塔的轮廓，再沿着中山路走进日常。让建筑、街巷与阅读，成为认识老城的三个入口。',quote:'一座城的细节，值得你多停留一会儿。',essay:'看建筑，可以从轮廓开始，也可以从一扇窗开始。走过广场与街巷，试着记住一个反复出现的颜色、一种门窗的形状，或一块仍在使用的旧招牌。\n路线给出一个建议顺序，观察的方式留给你自己。你可以在感兴趣的地方多待一会儿，也可以跳过某一站。\n来到故居时，把街上的节奏放慢。读一段文字，再走回城市里，看看你注意到的东西有没有变化。'},
    {id:'pages-and-lanes',title:'把一座城，读成几页',theme:'文学',subtitle:'在文字与街巷之间，找到自己的阅读方式。',image:'house',time:'建议留出半天',duration:'half',places:['laoshe','xiaoyushan','luxun'],intro:'从黄县路的小院出发，登高看看海湾，再在临海公园结束。让阅读从展陈延伸到城市。',quote:'走过的路，也可以成为读过的一页。',essay:'城市里的阅读，并不只发生在一本书里。小院的树影、坡道的转折、登高时展开的海湾，都可以成为你想记住的段落。\n这一条路线给阅读留出时间，也给发呆留出时间。在故居挑一段文字，在高处挑一个视角，在海边挑一处可以安静停留的地方。\n不用急着得出结论。带走一个问题、一张照片，或者一句自己的描述，这次漫游就有了属于你的内容。'},
    {id:'along-the-sea',title:'沿着海风，慢慢走',theme:'海岸',subtitle:'从一片海湾的全景，走到身边的浪花。',image:'coast',time:'建议留出 2—3 小时',duration:'short',places:['xiaoyushan','luxun','xiaoqingdao'],intro:'先登高，把海岸看成一条线；再下到海边，让礁石、松影和潮声成为沿途的节奏。',quote:'有时，停下来就是最好的下一站。',essay:'从高处看海，海岸像一条柔和的线。走到近处，它又变成了石头的纹理、风的方向和不断变化的潮声。\n把同一片海看两遍：一遍从远处，一遍从身边。可以拍两张照片，也可以写下两种不同的感受。\n沿正规的步道行走，根据天气与体力调整终点。路线是一种邀请，你的节奏才是这次漫游的尺度。'}
  ],
  photos: [
    {id:'p1',file:'church',title:'红瓦之上，双塔之间',theme:'建筑',place:'cathedral'},
    {id:'p2',file:'street',title:'转过街角，走进日常',theme:'街巷',place:'zhongshan'},
    {id:'p3',file:'coast',title:'把海湾收进视野',theme:'海岸',place:'xiaoyushan'},
    {id:'p4',file:'window',title:'光穿过彩色玻璃',theme:'建筑',place:'cathedral'},
    {id:'p5',file:'house',title:'一座小院，一段文字',theme:'文学',place:'laoshe'},
    {id:'p6',file:'sunset',title:'给傍晚多留一点时间',theme:'海岸',place:'luxun'},
    {id:'p7',file:'interior',title:'抬头，看见另一种秩序',theme:'建筑',place:'cathedral'},
    {id:'p8',file:'sea',title:'城市的另一面是海',theme:'海岸',place:'luxun'},
    {id:'p9',file:'reading',title:'把故事再读一遍',theme:'文学',place:'laoshe'},
    {id:'p10',file:'facade',title:'屋檐与天空的交界',theme:'街巷',place:'zhongshan'},
    {id:'p11',file:'shore',title:'近处的浪花',theme:'海岸',place:'luxun'},
    {id:'p12',file:'courtyard',title:'院落里的一次停留',theme:'文学',place:'laoshe'}
  ]
};
