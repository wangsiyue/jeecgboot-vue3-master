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
      { title: '类型', dataIndex: 'level' },
      { title: '备注', dataIndex: 'point' },

    ],
    dataSource: [
      {level:'放射性药物诊断',point:'γ相机、ECT、PET、SPECT、体外放射免疫分析'},
      {level:'放射性药物治疗',point:'核医学'},
      {level:'放射性同位素示踪',point:''},
      {level:'工业用非密封放射性物质',point:'特种灯泡、汽灯纱罩、发光涂料等  '},
      {level:'教学科研',point:''},
      {level:'放射性药物生产',point:''},
      {level:'其它',point:''},
    ],

  });


</script>
