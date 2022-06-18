// pages/sqzzbtn/sqzzbtn.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btlx: '',
        
        policy_list: [{

            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "吸纳就业困难人员社保补贴",
            pcontent: "招用就业困难人员或本省及协作地区的脱贫人口。",
            pfont_size: "12px",
            pdetail: "每位符合条件的员工最长可补贴3年",
            pcolor: "blue",
            btlx: "社保补贴",
            btvar: [0, 0, 0, 1, 0],
            btamt: 500,
            btnum: 36

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "小微企业社保补贴",
            pcontent: "小微企业招用毕业2年内高校毕业生。",
            pfont_size: "12px",
            pdetail: "按单位实际实际缴纳社保额补贴，最长可补贴2年",
            pcolor: "blue",
            btlx: "社保补贴",
            btvar: [0, 1, 0, 0, 0],
            btamt: 500,
            btnum: 24

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "一般性岗位补贴",
            pcontent: "招用就业困难人员或本省及协作地区的脱贫人口。",
            pdetailcontent:"",
            pfont_size: "12px",
            pdetail: "每人每月补贴200元，最长可补贴3年",
            pcolor: "blue",
            btlx: "岗位补贴",
            btvar: [0, 0, 0, 1, 0],
            btamt: 200,
            btnum: 36

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "公益性岗位补贴",
            pcontent:"开发公益岗位，聘用就业困难人员。",
            pdetailcontent: "用人单位开发经人力资源社会保障部门认定的公益性岗位，并招用就业困难人员或本省脱贫人口。",
            pfont_size: "12px",
            pdetail: "按当地最低工资补贴，最长可补贴3年",
            pcolor: "blue",
            btlx: "岗位补贴",
            btvar: [0, 0, 0, 0, 1],
            btamt: 2000,
            btnum: 36

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "就业见习补贴",
            pcontent:"组织毕业实习，按不低于最低工资80%支付报酬。",
            pdetailcontent: "组织毕业2年内高校毕业生或16-24岁失业青年参加就业见习，每月按不低于当地最低工资80%的标准对见习人员支付工作补贴。",
            pfont_size: "12px",
            pdetail: "补贴期限最长12个月。",
            pcolor: "blue",
            btlx: "吸纳就业",
            btvar: [0, 0, 0, 0, 1],
            btamt: 1600,
            btnum: 12

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "吸纳退役军人就业补贴",
            pcontent: "用人单位招用退役1年内军人，签订一年以上劳动合同。",
            pfont_size: "12px",
            pdetail: "一次性每人10000元。",
            pcolor: "blue",
            btlx: "吸纳就业",
            btvar: [0, 0, 1, 0, 0],
            btamt: 10000,
            btnum: 1

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "吸纳脱贫人口就业补贴",
            pcontent: "本省及协作地区脱贫人口，签订一年以上劳动合同并缴纳6个月以上社会保险费。",
            pfont_size: "12px",
            pdetail: "一次性每人5000元。",
            pcolor: "blue",
            btlx: "吸纳就业",
            btvar: [0, 0, 0, 1, 0],
            btamt: 5000,
            btnum: 1

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "一次性创业补助",
            pcontent:'符合条件人员创业并带动社会就业。',
            pdetailcontent: "普通高等学校、中等职业学校、技工院校学生（在校及毕业5年内）和毕业5年内的出国（境）留学回国人员，军转干部、退役军人，登记失业人员、就业困难人员、本省脱贫人口，返乡创业人员，创办驿道客栈、民宿、农家乐的人员。",
            pfont_size: "12px",
            pdetail: "初创企业登记注册满6个月，申请补贴前连续3个月有在职员工（不含法定代表人或经营者）正常缴纳社保。一次性每人10000元。",
            pcolor: "blue",
            btlx: "创新创业",
            btvar: [0, 0, 0, 0, 1],
            btamt: 10000,
            btnum: 1

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "创业租金补贴",
            pcontent:"符合条件人员新创办企业，予以租金补贴。",
            pdetailcontent: "普通高等学校、中等职业学校、技工院校学生（在校及毕业5年内）和毕业5年内的出国（境）留学回国人员，军转干部、退役军人，登记失业人员、就业困难人员、本省脱贫人口，返乡创业人员，创办驿道客栈、民宿、农家乐的人员。",
            pfont_size: "12px",
            pdetail: "初创企业，人员（不含法人）缴纳社保。每年补贴4-6千元。",
            pcolor: "blue",
            btlx: "租金补贴",
            btamt: 6000,
            btvar: [0, 0, 0, 0, 1],
            btnum: 3

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "创业带动就业",
            pcontent:"初创企业带动就业，每人予以2-3千元补贴。",
            pdetailcontent: "初创企业带动就业补贴，签订一年以上期限劳动合同、申请补贴前连续6个月为招用员工缴纳社会保险费且申请补贴时仍在本企业就业。",
            pfont_size: "12px",
            pdetail: "3人以下每人2000元，第4人起每人3000元补贴，最高3万。",
            pcolor: "blue",
            btlx: "吸纳就业",
            btvar: [0, 0, 0, 0, 1],
            btamt: 2000,
            btnum: 1

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "专精特新认定",
            pfont_size: "12px",
            pcontent: "各级专精特新企业认定",
            pdetail: "通过后有30-500万补贴",
            btlx: "资质认证",
            pcolor: "blue",
            btvar: [0, 0, 0, 0, 1],
            btamt: "30-500万",
            btnum: 1

        },
        {
            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "高新企业认定",
            pfont_size: "12px",
            pcontent: "高新技术企业认定与查询",
            pdetail: "30-100万补贴",
            btlx: "资质认证",
            pcolor: "blue",
            btvar: [0, 0, 0, 0, 1],
            btamt: "30-100万",
            btnum: 1
        },
        {

            fcolor: "blue",
            bcolor: "green",
            ffont_size: "36rpx",
            pclass: "龙头企业补贴",
            pcontent: "各行业龙头企业，特别是链主企业",
            pdetail: "各地区各级别补贴或优惠政策",
            pfont_size: "12px",
            btlx: "资质认证",
            pcolor: "blue",
            btvar: [0, 0, 0, 0, 1],
            btamt: "",
            btnum: 1
        },
        {
            ffont_size: "36rpx",
            fcolor: "blue",
            bcolor: "green",
            pclass: "行业示范补贴",
            pcontent: "包括农村电商、家庭农场、专业合作社、乡村振兴等示范项目或示范企业。",
            pdetail: "各级财政补贴及政策优惠",
            btlx: "资质认证",
            pfont_size: "12px",
            pcolor: "blue",
            btvar: [0, 0, 0, 0, 1],
            btamt: "",
            btnum: 1

        }
    ]},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            btlx: options.btlx
        })


    },
    cyddjy: function () {
        var runpage = this.data.policy_list[0].runpage
        wx.navigateTo({
            url: '../InputKey/InputKey?runpage=' + runpage

        })

        /*
   wx.navigateTo({
     url: '../cxbt/cxbt',
   })*/
    },
    nav_page: function (e) {

        wx.navigateTo({
            url: '../cxbt/cxbt?btlxA=' + e.currentTarget.dataset.index.pclass +
                '&co_name=' + "",
        })
    },
    grcybt: function () {
        wx.navigateTo({
            url: '../cxbt/cxbt',
        })
    },
    cyzjbt: function () {
        wx.navigateTo({
            url: '../cxbt/cxbt',
        })
    },
    xnknrybt: function () {},
    yjbysbt: function () {},
    tyjrbt: function () {},
    sssbt: function () {},
    sgpxbt: function () {},
    xxxtbt: function () {},
    jntsbt: function () {},
    ygdxbt: function () {},
    sgmbt: function () {},
    zjtxbt: function () {},
    gxqybt: function () {},
    ydbt: function () {},
    sybt: function () {},
    txdkbt: function () {},
    cydkbt: function () {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
    })
