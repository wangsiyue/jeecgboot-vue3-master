<template>
  <BasicModal v-bind="$attrs" @register="registerModal" destroyOnClose :title="title" :width="1280" @ok="handleSubmit">
      <BasicForm @register="registerForm" ref="formRef"/>
  <!-- 子表单区域 -->
    <a-tabs v-model:activeKey="activeKey" @change="handleChangeTabs">
      <a-tab-pane tab="α、β表面污染测量记录明细表" key="contaminationMeasurementDetails" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="contaminationMeasurementDetails"
          :loading="contaminationMeasurementDetailsTable.loading"
          :columns="contaminationMeasurementDetailsTable.columns"
          :dataSource="contaminationMeasurementDetailsTable.dataSource"
          :height="340"
          :rowNumber="true"
          :rowSelection="true"
          :disabled="formDisabled"
          :toolbar="true"
          />
      </a-tab-pane>
      <a-tab-pane tab="α、β表面污染测量记录明细表1" key="contaminationMeasurementDetails2" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="contaminationMeasurementDetails2"
          :loading="contaminationMeasurementDetails2Table.loading"
          :columns="contaminationMeasurementDetails2Table.columns"
          :dataSource="contaminationMeasurementDetails2Table.dataSource"
          :height="340"
          :rowNumber="true"
          :rowSelection="true"
          :disabled="formDisabled"
          :toolbar="true"
          />
      </a-tab-pane>
    </a-tabs>
  </BasicModal>
</template>

<script lang="ts" setup>
    import {ref, computed, unref,reactive} from 'vue';
    import {BasicModal, useModalInner} from '/@/components/Modal';
    import {BasicForm, useForm} from '/@/components/Form/index';
    import { JVxeTable } from '/@/components/jeecg/JVxeTable'
    import { useJvxeMethod } from '/@/hooks/system/useJvxeMethods.ts'
    import {formSchema,contaminationMeasurementDetailsColumns,contaminationMeasurementDetails2Columns} from '../ContaminationMeasurement.data';
    import {saveOrUpdate,contaminationMeasurementDetailsList,contaminationMeasurementDetails2List} from '../ContaminationMeasurement.api';
    import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils'
    // Emits声明
    const emit = defineEmits(['register','success']);
    const isUpdate = ref(true);
    const formDisabled = ref(false);
    const refKeys = ref(['contaminationMeasurementDetails', 'contaminationMeasurementDetails2', ]);
    const activeKey = ref('contaminationMeasurementDetails');
    const contaminationMeasurementDetails = ref();
    const contaminationMeasurementDetails2 = ref();
    const tableRefs = {contaminationMeasurementDetails, contaminationMeasurementDetails2, };
    const contaminationMeasurementDetailsTable = reactive({
          loading: false,
          dataSource: [],
          columns:contaminationMeasurementDetailsColumns
    })
    const contaminationMeasurementDetails2Table = reactive({
          loading: false,
          dataSource: [],
          columns:contaminationMeasurementDetails2Columns
    })
    //表单配置
    const [registerForm, {setProps,resetFields, setFieldsValue, validate}] = useForm({
        //labelWidth: 150,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {span: 6}
    });
     //表单赋值
    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        //重置表单
        await reset();
        setModalProps({confirmLoading: false,showCancelBtn:data?.showFooter,showOkBtn:data?.showFooter});
        isUpdate.value = !!data?.isUpdate;
        formDisabled.value = !data?.showFooter;
        if (unref(isUpdate)) {
            //表单赋值
            await setFieldsValue({
                ...data.record,
            });
             requestSubTableData(contaminationMeasurementDetailsList, {id:data?.record?.id}, contaminationMeasurementDetailsTable)
             requestSubTableData(contaminationMeasurementDetails2List, {id:data?.record?.id}, contaminationMeasurementDetails2Table)
        }
        // 隐藏底部时禁用整个表单
       setProps({ disabled: !data?.showFooter })
    });
    //方法配置
    const [handleChangeTabs,handleSubmit,requestSubTableData,formRef] = useJvxeMethod(requestAddOrEdit,classifyIntoFormData,tableRefs,activeKey,refKeys);

    //设置标题
    const title = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

    async function reset(){
      await resetFields();
      activeKey.value = 'contaminationMeasurementDetails';
      contaminationMeasurementDetailsTable.dataSource = [];
      contaminationMeasurementDetails2Table.dataSource = [];
    }
    function classifyIntoFormData(allValues) {
         let main = Object.assign({}, allValues.formValue)
         return {
           ...main, // 展开
           contaminationMeasurementDetailsList: allValues.tablesValue[0].tableData,
           contaminationMeasurementDetails2List: allValues.tablesValue[1].tableData,
         }
       }
    //表单提交事件
    async function requestAddOrEdit(values) {
        try {
            setModalProps({confirmLoading: true});
            //提交表单
            await saveOrUpdate(values, isUpdate.value);
            //关闭弹窗
            closeModal();
            //刷新列表
            emit('success');
        } finally {
            setModalProps({confirmLoading: false});
        }
    }
</script>

<style lang="less" scoped>
	/** 时间和数字输入框样式 */
    :deep(.ant-input-number){
		width: 100%
	}

	:deep(.ant-calendar-picker){
		width: 100%
	}
</style>