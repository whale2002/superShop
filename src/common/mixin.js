import { POP, NEW, SELL } from "./const";

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    toTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
      //scroll外面的tabcontrol，小写
      this.$refs.tabcontrol.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    }
  }
}