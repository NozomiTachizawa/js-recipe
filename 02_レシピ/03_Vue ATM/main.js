const now = new Date();

new Vue({
    el: '#ATM',
    data: {
        nyuryokugaku: 0,
        zandaka: 0,
        logs: [],
    },
    methods: {
        nyukin: function () {
            this.zandaka += Number(this.nyuryokugaku);
            this.logs.push("日付：" + now, "操作：入金", "金額：" + this.nyuryokugaku + "円");
        },
        syukkin: function () {
            this.zandaka -= Number(this.nyuryokugaku);
            this.logs.push("日付：" + now, "操作：出金", "金額：" + this.nyuryokugaku + "円");
        },
    },
    computed: {
        sagaku: function () {
            let price = 0
            price = Number(this.nyuryokugaku) - Number(this.zandaka) - 1
            return price
        },
    },
})
