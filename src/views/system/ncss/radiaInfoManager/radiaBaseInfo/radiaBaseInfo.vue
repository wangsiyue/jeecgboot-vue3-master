<template>
  <Card :tab-list="tabListTitle" v-bind="$attrs" :active-tab-key="activeKey" @tabChange="onTabChange">
    <p v-if="activeKey === 'tab1'">

    </p>
    <p v-if="activeKey === 'tab2'">

    </p>
    <p v-if="activeKey === 'tab3'">

    </p>

  </Card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Card } from 'ant-design-vue';
const activeKey = ref('tab1');

const tabListTitle = [
  {
    key: 'tab1',
    tab: '巡查记录单录入',
  },
  {
    key: 'tab2',
    tab: '企业信息变更',
  },
  {
    key: 'tab3',
    tab: '放射源信息变更',
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
