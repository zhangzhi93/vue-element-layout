<template>
  <div id="app">
    <vue-element-layout :menu-data="data" default-active="one"
      :default-openeds="['dashboard','status']" :unique-opened="true" @onMenuHeaderClick="goHome"
      :collapse.sync="expand">
      <layout-tabs slot="navTabs" :tabs-data="tabs" :active-name="active" @tab-click="onTabClick"
        @contextmenu="onContextmenu" type="flex"></layout-tabs>
      <div slot="rightContent" class="avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
        </el-avatar>
      </div>
      <div class="content">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </el-avatar>
        </div>
      </div>
      <div slot="footer">
        <p>这是页脚</p>
      </div>
    </vue-element-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      expand: false,
      active: '',
      tabs: [{
        title: 'Tab 1',
        name: 'a',
        closable: 'false'
      }, {
        title: 'Tab 2',
        name: 'b',
        url: 'www.baidu.com'
      }, {
        title: 'Tab 3',
        name: 'c',
      }, {
        title: 'Tab 4',
        name: 'd',
      }, {
        title: 'Tab 5',
        name: 'e',
        // }, {
        //   title: 'Tab 6',
        //   name: '6',
        // }, {
        //   title: 'Tab 7',
        //   name: '7',
        // }, {
        //   title: 'Tab 8',
        //   name: '8',
        // }, {
        //   title: 'Tab 9',
        //   name: '9',
        // }, {
        //   title: 'Tab 10',
        //   name: '10',
        // }, {
        //   title: 'Tab 11',
        //   name: '11',
        // }, {
        //   title: 'Tab 12',
        //   name: '12',
        // }, {
        //   title: 'Tab 13',
        //   name: '13',
        // }, {
        //   title: 'Tab 14',
        //   name: '14',
        // }, {
        //   title: 'Tab 15',
        //   name: '15',
        // }, {
        //   title: 'Tab 16',
        //   name: '16',
        // }, {
        //   title: 'Tab 17',
        //   name: '17',
        // }, {
        //   title: 'Tab 18',
        //   name: '18',
        // }, {
        //   title: 'Tab 19',
        //   name: '19',
        // }, {
        //   title: 'Tab 20',
        //   name: '20',
        // }, {
        //   title: 'Tab 21',
        //   name: '21',
        // }, {
        //   title: 'Tab 22',
        //   name: '22',
        // }, {
        //   title: 'Tab 23',
        //   name: '23',
        // }, {
        //   title: 'Tab 24',
        //   name: '24',
        // }, {
        //   title: 'Tab 25',
        //   name: '25',
        // }, {
        //   title: 'Tab 26',
        //   name: '26',
        // }, {
        //   title: 'Tab 27',
        //   name: '27',
        // }, {
        //   title: 'Tab 28',
        //   name: '28',
        // }, {
        //   title: 'Tab 29',
        //   name: '29',
        // }, {
        //   title: 'Tab 30',
        //   name: '30',
      }],
      data: [{
        name: 'dashboard',
        title: '状态概览',
        icon: 'el-icon-eleme',
        children: [{
          name: 'status',
          title: '状态概览',
          icon: 'el-icon-user',
          children: [{
            name: 'one',
            title: '状态概览',
            icon: 'el-icon-menu',
          }, {
            name: 'two',
            title: '更新日志',
            icon: 'el-icon-menu',
          }],
        }, {
          name: 'update',
          title: '更新日志',
          icon: 'el-icon-menu',
        }],
      }, {
        name: 'wechat',
        title: '微信配置',
        icon: 'el-icon-ice-cream',
        children: [{
          name: 'menu',
          title: '菜单管理',
          icon: 'el-icon-menu',
        }, {
          name: 'reply',
          title: '关键词回复',
          icon: 'el-icon-menu',
        }],
      }, {
        name: 'plugin',
        title: '插件测试',
        icon: 'el-icon-sugar',
        children: [{
          name: 'venn',
          title: '韦恩图',
          icon: 'el-icon-menu',
        }, {
          name: 'tree-select',
          title: '树选择',
          icon: 'el-icon-menu',
        }, {
          name: 'calendar',
          title: '日历',
          icon: 'el-icon-menu',
        }],
      }, {
        name: 'function',
        title: '自定义功能',
        icon: 'el-icon-star-off',
        children: [{
          name: 'diy-tree-select',
          title: '自定义树选择',
          icon: 'el-icon-menu',
        }, {
          name: 'moveable',
          title: '拖动布局',
          icon: 'el-icon-menu',
        }, {
          name: 'fullscreen1',
          title: '自定义全屏',
          icon: 'el-icon-menu',
        }],
      }, {
        name: 'fullscreen',
        title: '自定义全屏',
        icon: 'el-icon-picture-outline-round',
      }],
    };
  },
  watch: {
    expand(val) {
      console.log(val)
    }
  },
  methods: {
    goHome() {
      window.open('https://www.baidu.com');
    },
    onTabClick(data) {
      this.active = data.name;
    },
    onContextmenu(e, data) {
      console.log(e, data);
    }
  },
};
</script>

<style lang="less" scoped>
.avatar {
  margin-top: 10px;
}
.content {
  margin: 20px;
  background: #fff;
}
.expand {
  position: absolute;
  bottom: 0;
  background-color: #efefef;
  width: 100%;
}
</style>
