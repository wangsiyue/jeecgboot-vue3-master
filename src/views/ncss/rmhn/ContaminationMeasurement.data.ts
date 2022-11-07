import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'entryName'
   },
   {
    title: '地点',
    align:"center",
    dataIndex: 'place'
   },
   {
    title: '仪器型号与编号',
    align:"center",
    dataIndex: 'instrumentModel'
   },
   {
    title: '天气',
    align:"center",
    dataIndex: 'weather'
   },
   {
    title: '刻度系数',
    align:"center",
    dataIndex: 'scaleFactor'
   },
   {
    title: '仪器效率',
    align:"center",
    dataIndex: 'instrumentEfficiency'
   },
   {
    title: '污染核素',
    align:"center",
    dataIndex: 'contaminatedNuclide'
   },
   {
    title: '间接测量的表面类型',
    align:"center",
    dataIndex: 'indirectMeasurement'
   },
   {
    title: '擦试材料',
    align:"center",
    dataIndex: 'rubbingMaterial'
   },
   {
    title: '润湿剂',
    align:"center",
    dataIndex: 'wettingAgent'
   },
   {
    title: '去除因子',
    align:"center",
    dataIndex: 'removalFactor'
   },
   {
    title: '监测日期及时间',
    align:"center",
    dataIndex: 'monitoringDate'
   },
   {
    title: '测量人',
    align:"center",
    dataIndex: 'surveyor'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'checkDate'
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
      label: "项目名称",
      field: "entryName",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '项目名称',
    field: 'entryName',
    component: 'Input',
  },
  {
    label: '地点',
    field: 'place',
    component: 'Input',
  },
  {
    label: '仪器型号与编号',
    field: 'instrumentModel',
    component: 'Input',
  },
  {
    label: '天气',
    field: 'weather',
    component: 'Input',
  },
  {
    label: '刻度系数',
    field: 'scaleFactor',
    component: 'Input',
  },
  {
    label: '仪器效率',
    field: 'instrumentEfficiency',
    component: 'Input',
  },
  {
    label: '污染核素',
    field: 'contaminatedNuclide',
    component: 'Input',
  },
  {
    label: '间接测量的表面类型',
    field: 'indirectMeasurement',
    component: 'Input',
  },
  {
    label: '擦试材料',
    field: 'rubbingMaterial',
    component: 'Input',
  },
  {
    label: '润湿剂',
    field: 'wettingAgent',
    component: 'Input',
  },
  {
    label: '去除因子',
    field: 'removalFactor',
    component: 'Input',
  },
  {
    label: '监测日期及时间',
    field: 'monitoringDate',
    component: 'Input',
  },
  {
    label: '测量人',
    field: 'surveyor',
    component: 'InputNumber',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputNumber',
  },
  {
    label: '校核日期',
    field: 'checkDate',
    component: 'Input',
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
export const contaminationMeasurementDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '点位名',
      key: 'pointName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量类别',
      key: 'measurementCategory',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值',
      key: 'measuredValue',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const contaminationMeasurementDetails2Columns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测点描述',
      key: 'descriptionMeasuring',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '读数值（X±σ）',
      key: 'readingValues',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值（Bq/cm2）',
      key: 'measuredValue',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '备注',
      key: 'remark',
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