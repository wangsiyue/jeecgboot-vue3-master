<template>
  <PageWrapper>
    <a-card :bordered="false">
      <BasicTable @register="registerTable" />
      <div>非密封源分类<br>
        　　　非密封源工作场所按放射性核素日等效最大操作量分为甲、乙、丙三级，具体分级标准见《电离辐射防护与辐射源安全标准》（GB 18871-2002）。<br>
        　　　甲级非密封源工作场所的安全管理参照Ⅰ类放射源。<br>
        　　　乙级和丙级非密封源工作场所的安全管理参照Ⅱ、Ⅲ类放射源。

      </div>
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

      { title: '级别', dataIndex: 'point' },
      { title: '日等效最大操作量/Bq', dataIndex: 'level' },

    ],
    dataSource: [
      {     point: '甲', level: '>4×10^9'  },
      {     point: '乙', level: '2×10^7~4×10^9' },
      {     point:'丙', level: '豁免活度值以上~2×10^7'},

    ],

  });


</script>
