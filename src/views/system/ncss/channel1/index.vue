<template>
    <a-card :loading="loading" :bordered="false" :body-style="{ padding: '0' }">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{ marginBottom: '24px', paddingLeft: '16px' }">
            <template #rightExtra>
                <div class="extra-wrapper">
                    <div class="extra-item">
                    <a>今日</a>
                    <a>本周</a>
                    <a>本月</a>
                    <a>本年</a>
                    </div>
                    <a-range-picker :style="{ width: '256px' }" />
                </div>
            </template>
            <a-tab-pane loading="true" tab="受理监管" key="1">
                <a-row>
                    <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <Bar :chartData="barData" :option="{ title: { text: '受理量统计', textStyle: { fontWeight: 'lighter' } } }" height="40vh" />
                    </a-col>
                    <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                        <QuickNav :loading="loading" class="enter-y" :bordered="false" :body-style="{ padding: 0 }" />
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane tab="交互监管" key="2">
                <a-row>
                    <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <BarMulti
                        :chartData="barMultiData"
                        :option="{ title: { text: '平台与部门交互量统计', textStyle: { fontWeight: 'lighter' } } }"
                        height="40vh"
                    />
                    </a-col>
                    <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                        <QuickNav :loading="loading" class="enter-y" :bordered="false" :body-style="{ padding: 0 }" />
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane tab="ChannelList" key="3">
                <a-row>
                    <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                        <Channel1List></Channel1List>
                    </a-col>
                    <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                        <QuickNav :loading="loading" class="enter-y" :bordered="false" :body-style="{ padding: 0 }" />
                    </a-col> 
                </a-row>
            </a-tab-pane>
            <a-tab-pane tab="BaiduMap" key="4">
              <a-row>
                    <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                      <ChannelMap style="heigth:300, width: 300;"></ChannelMap>
                    </a-col>
                    <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                        <QuickNav :loading="loading" class="enter-y" :bordered="false" :body-style="{ padding: 0 }" />
                    </a-col> 
                </a-row>
            </a-tab-pane>            
        </a-tabs>
    </a-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Bar from '/@/components/chart/Bar.vue';
import BarMulti from '/@/components/chart/BarMulti.vue';
import QuickNav from './components/QuickNav.vue';
import Channel1List from './Channel1List.vue';
import ChannelMap from './ChannelMap.vue';

  defineProps({
    loading: {
      type: Boolean,
    },
  });

  const barData = [];
  for (let i = 0; i < 12; i += 1) {
    barData.push({
      name: `${i + 1}月`,
      value: Math.floor(Math.random() * 1000) + 200,
    });
  }

  const barMultiData = [];
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 12; i += 1) {
      barMultiData.push({
        type: j == 0 ? 'jeecg' : 'jeebt',
        name: `${i + 1}月`,
        value: Math.floor(Math.random() * 1000) + 200,
      });
    }
  }  
</script>


<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }
</style>