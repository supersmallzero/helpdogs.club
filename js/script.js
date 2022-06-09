window.onload = function () {

    // 获取浏览器去除地址栏、搜索栏的高度和宽度
    {
        function getBrowserInterfaceSize() {
            var pageWidth = window.innerWidth;
            var pageHeight = window.innerHeight;

            if (typeof pageWidth != "number") {
                //在标准模式下面
                if (document.compatMode == "CSS1Compat") {
                    pageWidth = document.documentElement.clientWidth;
                    pageHeight = document.documentElement.clientHeight;
                } else {
                    pageWidth = document.body.clientWidth;
                    pageHeight = window.body.clientHeight;
                }
            }

            return {
                pageWidth: pageWidth,
                pageHeight: pageHeight
            }
        }
        // 定义pageInfo用于获取getBrowserInterfaceSize的返回值
        var pageInfo = getBrowserInterfaceSize();

    }

    // 设置底部的页面切换部分
    {
        // 获取整个页面切换底栏,设置页面切换底栏的高度和宽度
        var pageChooseWrapper = document.getElementById("pageChooseWrapper");
        pageChooseWrapper.style.height = pageInfo.pageHeight * 0.1 + "px";
        pageChooseWrapper.style.width = pageInfo.pageWidth + "px";

        // 实现按钮的点击切换功能
        var adoptDogs = document.getElementById("adoptDogs");
        var dogStory = document.getElementById("dogStory");
        var joinUs = document.getElementById("joinUs");

        adoptDogs.onclick = function(){
            adoptDogsPageWrapper.style.zIndex = 1; 
            dogStoryPageWrapper.style.zIndex = 0; 
            joinUsPageWrapper.style.zIndex = 0; 
        }
        dogStory.onclick = function(){
            adoptDogsPageWrapper.style.zIndex = 0; 
            dogStoryPageWrapper.style.zIndex = 1; 
            joinUsPageWrapper.style.zIndex = 0; 
        }
        joinUs.onclick = function(){
            adoptDogsPageWrapper.style.zIndex = 0; 
            dogStoryPageWrapper.style.zIndex = 0; 
            joinUsPageWrapper.style.zIndex = 1; 
        }

    }

    // 设置领养目录页面
    {
        // 设置领养目录页面的外部容器
        {
            // 获取领养目录页面的外部容器，设置宽度和高度
            var adoptDogsPageWrapper = document.getElementById("adoptDogsPageWrapper");
            adoptDogsPageWrapper.style.height = (pageInfo.pageHeight - pageChooseWrapper.offsetHeight) + "px";
            adoptDogsPageWrapper.style.width = pageInfo.pageWidth + "px";
        }

        // 设置领养目录页面顶部的轮播图
        {
            // 设置轮播图的整体宽度（图片个数×图片的大小）
            {
                // 获取图片
                var imglistImg = document.getElementsByClassName("imglistImg");
                // 设置图片的大小（或许没有必要）
                for (var i = 0; i < imglistImg.length; i++) {
                    imglistImg[i].style.width = pageInfo.pageWidth + "px";
                }
                // 设置轮播图的宽度
                var imglist = document.getElementById("imglist");
                imglist.style.width = pageInfo.pageWidth * imglistImg.length + "px";
                // 获取轮播图
                var imglistWrapper = document.getElementById("imglistWrapper");
            }

        }

        // 设置领养目录页面的banner区域
        {
            // 获取banner区域,设置整体高度
            var bannerWrapper = document.getElementById("bannerWrapper");
            bannerWrapper.style.height = adoptDogsPageWrapper.offsetHeight - imglistWrapper.offsetHeight + "px";

            // 设置左侧index的样式
            {
                var leftIndexWrapper = document.getElementById("leftIndexWrapper");
                leftIndexWrapper.style.width = pageInfo.pageWidth * 0.2 + "px";
                leftIndexWrapper.style.height = bannerWrapper.offsetHeight + "px";

                // 设置每一个小index的格式
                var leftIndexBox = document.getElementsByClassName("leftIndexBox");
                for (var i = 0; i < leftIndexBox.length; i++) {
                    leftIndexBox[i].style.height = leftIndexWrapper.offsetHeight / leftIndexBox.length + "px";
                }

                // 给index按钮添加动态效果
                // 与后续的onclick函数发生冲突
                // for (var i = 0; i < leftIndexBox.length; i++) {

                //     // 为每一个按钮添加一个num属性
                //     leftIndexBox[i].num = i;

                //     leftIndexBox[i].onclick = function () {

                //         indexButton = this.num;
                //         for (var j = 0; j < leftIndexBox.length; j++) {
                //             leftIndexBox[j].style.backgroundColor = "#E1E3E6";
                //         }
                //         leftIndexBox[indexButton].style.backgroundColor = "#fff";
                //     }
                // }

                // 单独设置按钮的单机响应函数
                {
                    var allDogsButton = document.getElementById("allDogsButton");
                    var childDogsButton = document.getElementById("childDogsButton");
                    var maleDogsButton = document.getElementById("maleDogsButton");
                    var femaleDogsButton = document.getElementById("femaleDogsButton");
                    var uncompletedDogsButton = document.getElementById("uncompletedDogsButton");
                    var completedDogsButton = document.getElementById("completedDogsButton");
                    var smallDogsButton = document.getElementById("smallDogsButton");
                    var bigDogsButton = document.getElementById("bigDogsButton");
                    var happyDogsButton = document.getElementById("happyDogsButton");

                    var allDogs = document.getElementsByClassName("dogsCardBox");
                    var childDogs = document.getElementsByClassName("childDogs");
                    var maleDogs = document.getElementsByClassName("maleDogs");
                    var femaleDogs = document.getElementsByClassName("femaleDogs");
                    var uncompletedDogs = document.getElementsByClassName("uncompletedDogs");
                    var completedDogs = document.getElementsByClassName("completedDogs");
                    var smallDogs = document.getElementsByClassName("smallDogs");
                    var bigDogs = document.getElementsByClassName("bigDogs");
                    var happyDogs = document.getElementsByClassName("happyDogs");

                    allDogsButton.style.backgroundColor = "#fff";
                    allDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        allDogsButton.style.backgroundColor = "#fff";
                    }
                    childDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<childDogs.length;i++){
                            childDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        childDogsButton.style.backgroundColor = "#fff";
                    }
                    maleDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<maleDogs.length;i++){
                            maleDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        maleDogsButton.style.backgroundColor = "#fff";
                    }
                    femaleDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<femaleDogs.length;i++){
                            femaleDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        femaleDogsButton.style.backgroundColor = "#fff";
                    }
                    uncompletedDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<uncompletedDogs.length;i++){
                            uncompletedDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        uncompletedDogsButton.style.backgroundColor = "#fff";
                    }
                    completedDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<completedDogs.length;i++){
                            completedDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        completedDogsButton.style.backgroundColor = "#fff";
                    }
                    smallDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<smallDogs.length;i++){
                            smallDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        smallDogsButton.style.backgroundColor = "#fff";
                    }
                    bigDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<bigDogs.length;i++){
                            bigDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        bigDogsButton.style.backgroundColor = "#fff";
                    }
                    happyDogsButton.onclick = function(){
                        for(var i = 0;i<allDogs.length;i++){
                            allDogs[i].style.display = "none";
                        }
                        for (var i=0;i<happyDogs.length;i++){
                            happyDogs[i].style.display = "block";
                        }
                        for(var i=0;i<leftIndexBox.length;i++){
                            leftIndexBox[i].style.backgroundColor = "#E1E3E6";
                        }
                        happyDogsButton.style.backgroundColor = "#fff";
                    }
                }



            }

            // 设置右侧狗狗卡片的样式
            {
                // 设置展示区域的大小
                var rightDogsCardWrapper = document.getElementById("rightDogsCardWrapper");
                rightDogsCardWrapper.style.width = bannerWrapper.offsetWidth - leftIndexWrapper.offsetWidth + "px";
                rightDogsCardWrapper.style.height = leftIndexWrapper.offsetHeight + "px";

                // 设置每一个卡片的样式（为设置下边框）
                var dogsCardBox = document.getElementsByClassName("dogsCardBox");
                for (var i = 0; i < dogsCardBox.length; i++) {
                    dogsCardBox[i].style.width = rightDogsCardWrapper.offsetWidth * (259 / 293) + "px";
                    dogsCardBox[i].style.height = dogsCardBox[i].offsetWidth * (116 / 259) + "px";
                }
                // 设置每一个小卡片的样式
                var dogsCardInnerBox = document.getElementsByClassName("dogsCardInnerBox");
                for (var i = 0; i < dogsCardInnerBox.length; i++) {
                    dogsCardInnerBox[i].style.width = dogsCardBox[i].offsetWidth + "px";
                    dogsCardInnerBox[i].style.height = dogsCardBox[i].offsetHeight - 20 + "px";
                }
                // 设置左侧图片展示的大小
                var dogsCardLeftImg = document.getElementsByClassName("dogsCardLeftImg");
                for (var i = 0; i < dogsCardLeftImg.length; i++) {
                    dogsCardLeftImg[i].style.width = dogsCardInnerBox[i].offsetWidth * (150 / 259) + "px";
                    dogsCardLeftImg[i].style.height = dogsCardLeftImg[i].offsetWidth * (100 / 150) + "px";
                }

                // 设置右侧信息陈列区域
                var linkBox = document.getElementsByClassName("linkBox");
                for (var i = 0; i < linkBox.length; i++) {
                    linkBox[i].style.width = dogsCardLeftImg[i].offsetWidth * (86 / 150) + "px";
                    linkBox[i].style.height = dogsCardLeftImg[i].offsetHeight * (27 / 100) + "px";
                }


            }
        }

        // adoptDogsPageWrapper.style.display = "none";
    }

    // 设置狗狗故事页面
    {
        // 设置狗狗故事页面的外部容器
        {
            var dogStoryPageWrapper = document.getElementById("dogStoryPageWrapper");
            dogStoryPageWrapper.style.height = (pageInfo.pageHeight - pageChooseWrapper.offsetHeight) + "px";
            dogStoryPageWrapper.style.width = pageInfo.pageWidth + "px";
        }

        // 设置每一个狗狗故事卡片
        {
            var dogStoryCard = document.getElementsByClassName("dogStoryCard");
            for (var i = 0; i < dogStoryCard.length; i++) {
                dogStoryCard[i].style.width = pageInfo.pageWidth * (353 / 375) + "px";
                dogStoryCard[i].style.height = dogStoryCard[i].offsetWidth * (141 / 353) + "px";
            }

            // 设置左侧信息页面的大小
            var dogStoryLeftInfo = document.getElementsByClassName("dogStoryLeftInfo");
            for (var i=0;i<dogStoryLeftInfo.length;i++){
                dogStoryLeftInfo[i].style.width = dogStoryCard[i].offsetWidth*(221/353) + "px";
                dogStoryLeftInfo[i].style.height = dogStoryCard[i].offsetWidth*(80/353) + "px";
            }

            // 设置右侧图片卡片的大小
            var dogStroyRightPic = document.getElementsByClassName("dogStroyRightPic");
            for (var i=0;i<dogStroyRightPic.length;i++){
                dogStroyRightPic[i].style.width = dogStoryCard[i].offsetWidth*(80/353) + "px";
                dogStroyRightPic[i].style.height = dogStroyRightPic[i].offsetWidth + "px";
            }
        }
        
    }

    // 设置加入我们页面
    {
        // 设置加入我们页面的外部容器
        {
            var joinUsPageWrapper = document.getElementById("joinUsPageWrapper");
            joinUsPageWrapper.style.height = (pageInfo.pageHeight - pageChooseWrapper.offsetHeight) + "px";
            joinUsPageWrapper.style.width = pageInfo.pageWidth + "px";
        }

        // 设置每一个textBox
        {
            var joinUsTextBox = document.getElementsByClassName("joinUsTextBox");
            for (var i=0;i<joinUsTextBox.length;i++){
                joinUsTextBox[i].style.width = joinUsPageWrapper.offsetWidth*(344/375) + "px";
            }

            var bottomPicBar = document.getElementsByClassName("bottomPicBar");
            for (var i=0;i<bottomPicBar.length;i++){
                bottomPicBar[i].style.width = joinUsTextBox[i].offsetWidth*(0.9) + "px";
                // bottomPicBar[i].style.height = bottomPicBar[i].offsetWidth*(120/305) + "px";
            }

            // var bottomPic = document.getElementsByClassName("bottomPic");
            // for (var i=0;i<bottomPic.length;i++){
            //     bottomPic[i].style.height = bottomPicBar[i].offsetHeight + "px";
            // }
        }
    }

    {
        console.log("pageHeight =" + pageInfo.pageHeight);
    }

}