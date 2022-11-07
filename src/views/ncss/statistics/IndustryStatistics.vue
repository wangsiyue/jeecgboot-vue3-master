<template>
  <div>
    <!--引用表格-->
   <BasicTable @register="registerTable" :rowSelection="rowSelection">
     <!--插槽:table标题-->
      <template #tableTitle>
          <a-button  type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>
      </template>
       <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>
      </template>
      <!--字段回显插槽-->
      <template #htmlSlot="{text}">
         <div v-html="text"></div>
      </template>
      <!--省市区字段回显插槽-->
      <template #pcaSlot="{text}">
         {{ getAreaTextByCode(text) }}
      </template>
      <template #fileSlot="{text}">
         <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
         <a-button v-else :ghost="true" type="primary" preIcon="ant-design:download-outlined" size="small" @click="downloadFile(text)">下载</a-button>
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <TtLcrCompanyModal @register="registerModal" @success="handleSuccess"></TtLcrCompanyModal>
  </div>
</template>

<script lang="ts" name="" setup>
  import {ref, computed, unref} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import {useModal} from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import {columns, searchFormSchema} from './IndustryStatistics.data';
  import {list, getExportUrl} from './IndustryStatistics.api';
  import { downloadFile } from '/@/utils/common/renderUtils';
  const checkedKeys = ref<Array<string | number>>([]);
  //注册model
  const [registerModal, {openModal}] = useModal();
  //注册table数据
  const { prefixCls,tableContext,onExportXls } = useListPage({
      tableProps:{
           title: 'tt_lcr_company',
           api: list,
           columns,
           canResize:false,
           formConfig: {
              //labelWidth: 120,
              schemas: searchFormSchema,
              autoSubmitOnEnter:true,
              showAdvancedButton:true,
              fieldMapToNumber: [
              ],
              fieldMapToTime: [
                 ['startTime', ['startTime_begin', 'startTime_end'], 'YYYY-MM-DD'],
                 ['endTime', ['endTime_begin', 'endTime_end'], 'YYYY-MM-DD'],
              ],
            },
           actionColumn: {
               width: 120,
               fixed:'right'
            },
      },
       exportConfig: {
            name:"tt_lcr_company",
            url: getExportUrl,
          },
  })

  const [registerTable, {reload},{ rowSelection, selectedRowKeys }] = tableContext

  
   /**
    * 成功回调
    */
  function handleSuccess() {
      (selectedRowKeys.value = []) && reload();
   }

</script>

<style scoped>

</style>