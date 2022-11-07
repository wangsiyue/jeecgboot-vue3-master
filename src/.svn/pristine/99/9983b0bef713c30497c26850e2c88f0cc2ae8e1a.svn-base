<template>
  <PageWrapper>
    <a-card :bordered="false">
      <BasicTable @register="registerTable" />
    </a-card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable } from '/@/components/Table';
  import { mapTableTotalSummary } from '/@/utils/common/compUtils';

  const [registerTable] = useTable({
    rowKey: 'id',
    bordered: true,
    canResize: false,
    columns: [
      { title: '用途编码', dataIndex: 'level' },
      { title: '用途名称', dataIndex: 'point' },

    ],
    dataSource: [

      {level:1,point:'辐照装置'},
      {level:2,point:'血液辐照仪'},
      {level:3,point:'热电发生器'},
      {level:4,point:'远距放射治疗装置'},
      {level:5,point:'伽玛刀'},
      {level:6,point:'后装治疗机'},
      {level:7,point:'敷贴器'},
      {level:8,point:'移动使用伽玛探伤机'},
      {level:9,point:'核子秤'},
      {level:10,point:'料位计'},
      {level:11,point:'液位计'},
      {level:12,point:'测厚仪'},
      {level:13,point:'骨密度仪'},
      {level:14,point:'密度计'},
      {level:15,point:'测井仪'},
      {level:16,point:'核子湿密度仪'},
      {level:17,point:'静电消除仪'},
      {level:18,point:'永久植入源'},
      {level:19,point:'荧光分析仪'},
      {level:20,point:'气相色谱仪'},
      {level:21,point:'穆斯堡尔谱仪'},
      {level:22,point:'刻度/校准源'},
      {level:23,point:'科研实验用'},
      {level:24,point:'其他'},
      {level:25,point:'其他-电站发电'},
      {level:26,point:'其他-成分分析'},
      {level:27,point:'其他-灰分仪'},
      {level:28,point:'固定使用伽玛探伤机'},
    ],

  });


</script>
