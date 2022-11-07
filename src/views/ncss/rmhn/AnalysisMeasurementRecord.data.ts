import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'taskName'
   },
   {
    title: '样品名称',
    align:"center",
    dataIndex: 'sampleName'
   },
   {
    title: '样品编号',
    align:"center",
    dataIndex: 'sampleNo'
   },
   {
    title: '分析日期',
    align:"center",
    dataIndex: 'analysisDate'
   },
   {
    title: '仪器型号',
    align:"center",
    dataIndex: 'instrumentModel'
   },
   {
    title: '仪器编号',
    align:"center",
    dataIndex: 'instrumentNo'
   },
   {
    title: '探头',
    align:"center",
    dataIndex: 'probe'
   },
   {
    title: '本底计数率, min-1',
    align:"center",
    dataIndex: 'backgroundCountRate'
   },
   {
    title: '本底计数时间，min',
    align:"center",
    dataIndex: 'backgroundTechnicalTime'
   },
   {
    title: '参考源计数率,min-1',
    align:"center",
    dataIndex: 'referenceCountRate'
   },
   {
    title: '刻度仪器效率时参考源计数率, min-1',
    align:"center",
    dataIndex: 'instrumentCountRate'
   },
   {
    title: '分析人',
    align:"center",
    dataIndex: 'analyst'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'checkeDate'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '上传人',
    align:"center",
    dataIndex: 'uploader'
   },
   {
    title: '上传时间',
    align:"center",
    dataIndex: 'uploadTime'
   },
   {
    title: '上传图片',
    align:"center",
    dataIndex: 'uploadPictures',
    slots: { customRender: 'fileSlot' },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "任务名称",
      field: "taskName",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "样品名称",
      field: "sampleName",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '任务名称',
    field: 'taskName',
    component: 'Input',
  },
  {
    label: '样品名称',
    field: 'sampleName',
    component: 'Input',
  },
  {
    label: '样品编号',
    field: 'sampleNo',
    component: 'Input',
  },
  {
    label: '分析日期',
    field: 'analysisDate',
    component: 'Input',
  },
  {
    label: '仪器型号',
    field: 'instrumentModel',
    component: 'Input',
  },
  {
    label: '仪器编号',
    field: 'instrumentNo',
    component: 'Input',
  },
  {
    label: '探头',
    field: 'probe',
    component: 'Input',
  },
  {
    label: '本底计数率, min-1',
    field: 'backgroundCountRate',
    component: 'Input',
  },
  {
    label: '本底计数时间，min',
    field: 'backgroundTechnicalTime',
    component: 'Input',
  },
  {
    label: '参考源计数率,min-1',
    field: 'referenceCountRate',
    component: 'Input',
  },
  {
    label: '刻度仪器效率时参考源计数率, min-1',
    field: 'instrumentCountRate',
    component: 'Input',
  },
  {
    label: '分析人',
    field: 'analyst',
    component: 'InputNumber',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '校核日期',
    field: 'checkeDate',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputNumber',
  },
  {
    label: '上传人',
    field: 'uploader',
    component: 'Input',
  },
  {
    label: '上传时间',
    field: 'uploadTime',
    component: 'InputNumber',
  },
  {
    label: '上传图片',
    field: 'uploadPictures',
    component: 'JUpload',
    componentProps:{
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
//子表表格配置
export const analysisMeasurementRecordDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '平行样品号',
      key: 'parallelSampleNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总α1',
      key: 'a1One',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总α2',
      key: 'a2Two',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总a3',
      key: 'b1One',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}