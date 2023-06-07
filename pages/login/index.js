// pages/login/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        stuId: '',
        password: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    login() {
        const postData = {
            stuId: this.data.stuId,
            password: this.data.password
        }

        wx.request({
          url: 'http://localhost:3000/login',
          data: postData,
          method: 'POST',
          success(res) {
              if (res.data.code === -1) {
                  wx.showToast({
                    title: res.data.msg,
                    icon: 'none'
                  })
                  return
              }
              wx.setStorageSync('token', res.data.data.cookie)
              wx.showToast({
                title: '登陆成功',
                icon: 'success'
              })
          }
        })
    }
})