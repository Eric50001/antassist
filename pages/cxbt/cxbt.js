// pages/cxbt/cxbt.js
const db = wx.cloud.database()
const cuinput = db.collection('custom_input_db')
const industryA = db.collection('industry_A')
const FindResult = db.collection('Find_CoName_Result')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        co_name: '',
        cu_no: '',
        ind_a: "农、林、牧、渔业",
        ind_b: "农业",
        sele_ind_a: [],
        sele_ind_b: [],
        sele_co_name: '',
        sele_co_name_group: [],
        start_date: "2020-01-01",
        cregion: '广东省,广州市,越秀区',
        boss_type: "其他",
        credit_no: "",
        cscrity: '',
        social_scruity_qty: 0,
        students:0,
        soldiers:0,
        olderperson:0,
        applie_wether: false,
        int_phone: "",
        contactName: '',
        submitmark: false,
        Key_Word: '',
        btlxA: '',
        btlxB: true,
        btlxC: false,
        sele_obj: []

    },

    app_custom: function (e) {
        var co_name = e.detail.value
        this.setData({
            co_name: co_name
        })
    },
    app_cu_no: function (e) {
        var cu_no = e.detail.value
        this.setData({
            cu_no: cu_no
        })
    },
    fsele_co_name: function (e) {
        this.setData({
            sele_co_name: this.data.sele_co_name_group[e.detail.value]
        })
        FindResult.where({
            name: this.data.sele_co_name
        }).get().then(res => {
            console.log("RES", res)
            this.setData({
                start_date: res.data[0].start_date,
                credit_no: res.data[0].credit_no
            })
        })
    },

    app_ind_a: function (e) {
        var ind_a = this.data.ind_a
        var ind_b = this.data.ind_b
        var sele_ind_a = this.data.sele_ind_a
        var sele_ind_b = this.data.sele_ind_b
        var industryB = db.collection('industry_B')
        this.setData({
            ind_a: sele_ind_a[e.detail.value]
        })


        industryB.where({
            grouphy: this.data.ind_a
        }).get().then(res => {
            var lenthB = res.data.length


            for (var i = 0; i < lenthB; i++) {

                sele_ind_b.push(res.data[i].classhy)

            }

            this.setData({
                sele_ind_b: sele_ind_b,
                ind_b: sele_ind_b[0]
            })

        })


    },
    app_ind_b(e) {
        var ind_b = this.data.ind_b
        this.setData({
            ind_b: this.data.sele_ind_b[e.detail.value]
        })

    },
    cubirthday: function (e) {
        var cdate = this.data.cdate
        this.setData({
            start_date: e.detail.value
        })
    },
    cregion: function (e) {
        var cregion = this.data.cregion
        this.setData({
            cregion: e.detail.value
        })
    },
    cboss_type: function (e) {

        this.setData({
            boss_type: e.detail.value
        })
    },

    cscre: function (e) {

        this.setData({
            cscrity: e.detail.value
        })
    },
    Social_Scruity_Qty: function (e) {
        this.setData({
            social_scruity_qty: e.detail.value
        })

    },

    Students: function (e) {
        this.setData({
            students: e.detail.value
        })

    },
    Soldiers: function (e) {
        this.setData({
            soldiers: e.detail.value
        })

    },
    Olderperson: function (e) {
        this.setData({
            olderperson: e.detail.value
        })

    },


    Applied_Wether: function (e) {
        this.setData({
            applie_wether: e.detail.value
        })
    },
    Check_phone_Number: function () {

        var check_phone = /^1[34578]\d{9}$/
        if (!check_phone.test(this.data.int_phone)) {
            wx.showToast({
                title: '手机号码不合法',
            })
        } else if (this.data.int_phone.length != 11) {
            wx.showToast({
                title: '号码长度不正确！',
            })
        }
    },
    Inp_Phone_Number: function (e) {
        this.setData({
            int_phone: e.detail.value
        })
    },

    Contact_Name: function (e) {
        this.setData({
            contactName: e.detail.value
        })

    },

    formsubmit: function (e) {
        if (!this.data.submitmark) {
            wx.showToast({
                title: '请点击信息保护协议',
            })
            return
        }
        let co_name = this.data.sele_co_name
        let cu_no = this.data.credit_no
        var now = new Date()
        cuinput.add({

            data: {
                co_name: co_name,
                cu_no: cu_no,
                ind_a: this.data.ind_a,
                ind_b: this.data.ind_b,
                cdate: this.data.start_date,
                cregion: this.data.cregion,
                boss_type: this.data.boss_type,
                cscrity: this.data.cscrity,
                social_scruity_qty: this.data.social_scruity_qty,
                students:this.data.students,
                soldiers:this.data.soldiers,
                olderperson:this.data.olderperson,
                applie_wether: this.data.applie_wether,
                int_phone: this.data.int_phone,
                contactName: this.data.contactName,
                submitmark: this.data.submitmark,
                inq_date: now



            }
        })
        wx.navigateTo({
            url: '../SummaryResult/SummaryResult?cu_name=' + this.data.sele_co_name,
        })
    },
    Submit_Mark: function () {
        this.setData({
            submitmark: !this.data.submitmark
        })
    },
    formreset: function () {},
    fKey_Word: function (e) {
        var sele_obj = []
        var sele_co_name_group = []
        this.setData({
            Key_Word: e.detail.value
        })

        FindResult.where({
            Key_Word: this.data.Key_Word
        }).get().then(res => {
            if (res.data.length != 0) {
                for (var i = 0; i < res.data.length; i++) {

                    sele_co_name_group.push(res.data[i].name)
                }
                this.setData({
                    sele_co_name_group: sele_co_name_group
                })
            } else {
                var that = this
                wx.request({
                        url: 'https://api.qixin.com/APIService/v2/search/advSearch',
                        data: {
                            keyword: this.data.Key_Word,
                            appkey: '6501913a-02f1-48e3-bb8c-26e7cfd51cc5',
                            secret_key: 'e92cb6b7-8035-40d3-aa1d-d2ee9522c30f',
                            region: 'GD'
                        },

                        success: function (res) {


                            for (var i = 0; i < res.data.data.num; i++) {
                                FindResult.add({
                                    data: {
                                        Key_Word: options.co_name,
                                        name: res.data.data.items[i].name,
                                        id: res.data.data.items[i].id,
                                        start_date: res.data.data.items[i].start_date,
                                        oper_name: res.data.data.items[i].oper_name,
                                        reg_no: res.data.data.items[i].reg_no,
                                        credit_no: res.data.data.items[i].credit_no,
                                        mathchItems: res.data.data.items[i].matchItems,
                                        matchType: res.data.data.items[i].matchType,
                                        type: res.data.data.items[i].type,
                                    }
                                })
                                sele_co_name_group.push(res.data.data.items[i].name)
                            }
                            that.setData({
                                sele_co_name_group: sele_co_name_group
                            })

                        }
                    }




                )
            }

        })
        this.setData({
            btlxB: !this.data.btlxB,
            btlxC: !this.data.btlxC
        })




    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log("ONLOAD", options)
        var sele_obj = []
        var sele_co_name_group = []
        this.setData({
            Key_Word: options.co_name,
            btlxA: options.btlxA
        })
        if (this.data.Key_Word != '') {
            console.log("before", this.data.btlxB, "BC", this.data.btlxC, this.data.Key_Word)
            this.setData({
                btlxB: !this.data.btlxB,
                btlxC: !this.data.btlxC
            })
            console.log("after", this.data.btlxB, "BC", this.data.btlxC, this.data.Key_Word)

            FindResult.where({
                Key_Word: this.data.Key_Word
            }).get().then(res => {
                if (res.data.length != 0) {
                    for (var i = 0; i < res.data.length; i++) {

                        sele_co_name_group.push(res.data[i].name)
                    }
                    this.setData({
                        sele_co_name_group: sele_co_name_group
                    })
                } else {
                    var that = this
                    wx.request({
                            url: 'https://api.qixin.com/APIService/v2/search/advSearch',
                            data: {
                                keyword: this.data.Key_Word,
                                appkey: '6501913a-02f1-48e3-bb8c-26e7cfd51cc5',
                                secret_key: 'e92cb6b7-8035-40d3-aa1d-d2ee9522c30f',
                                region: 'GD'
                            },

                            success: function (res) {


                                for (var i = 0; i < res.data.data.num; i++) {
                                    FindResult.add({
                                        data: {
                                            Key_Word: options.co_name,
                                            name: res.data.data.items[i].name,
                                            id: res.data.data.items[i].id,
                                            start_date: res.data.data.items[i].start_date,
                                            oper_name: res.data.data.items[i].oper_name,
                                            reg_no: res.data.data.items[i].reg_no,
                                            credit_no: res.data.data.items[i].credit_no,
                                            mathchItems: res.data.data.items[i].matchItems,
                                            matchType: res.data.data.items[i].matchType,
                                            type: res.data.data.items[i].type,
                                        }
                                    })
                                    sele_co_name_group.push(res.data.data.items[i].name)
                                }
                                that.setData({
                                    sele_co_name_group: sele_co_name_group
                                })

                            }
                        }




                    )
                }

            })


        }

        /*  setTimeout(() => {
            
         wx.request({
              url: 'https://api.qixin.com/APIService/v2/search/advSearch',
              data: {
                  keyword: this.data.Key_Word,
                  appkey: '6501913a-02f1-48e3-bb8c-26e7cfd51cc5',
                  secret_key: 'e92cb6b7-8035-40d3-aa1d-d2ee9522c30f',
                  region: 'GD'
              },

              success: function (res) {
                 
                console.log("RESDATA",res.data.data)
                      
                   for (var i = 0; i < res.data.data.num; i++) {
                  sele_co_name_group.push(res.data.data.items[i].name)
                  }
                                
              }}

              


          )}, 8000);*/

        var sele_ind_a = this.data.sele_ind_a
        industryA.get().then(res => {

            var lenthA = res.data.length
            for (var i = 0; i < lenthA; i++) {

                sele_ind_a.push(res.data[i].grouphy)

            }

            this.setData({
                sele_ind_a: sele_ind_a
            })

        })


    },

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