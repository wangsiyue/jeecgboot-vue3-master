<template>
  <Card :tab-list="tabListTitle" v-bind="$attrs" :active-tab-key="activeKey" @tabChange="onTabChange">
    <p v-if="activeKey === 'tab1'">

    </p>
    <p v-if="activeKey === 'tab2'">

    </p>
    <p v-if="activeKey === 'tab3'">
      <ChannelMap style="heigth:300, width: 300;"></ChannelMap>
    </p>
    <p v-if="activeKey === 'tab4'">

    </p>
  </Card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Card } from 'ant-design-vue';
import ChannelMap from './ChannelMap.vue';
const activeKey = ref('tab1');

const tabListTitle = [
  {
    key: 'tab1',
    tab: '实时监控',
  },
  {
    key: 'tab2',
    tab: '参数设置',
  },
  {
    key: 'tab3',
    tab: '历史轨迹',
  },
  {
    key: 'tab4',
    tab: '监控设置',
  },
];

function onTabChange(key) {
  activeKey.value = key;
}
</script>
<style>
.ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
  font-size: 14px;
}
</style>
