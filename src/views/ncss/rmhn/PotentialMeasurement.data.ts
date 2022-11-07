import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '测量地点',
    align:"center",
    dataIndex: 'measurementLocation'
   },
   {
    title: '测量日期',
    align:"center",
    dataIndex: 'measurementDate'
   },
   {
    title: '测量编号',
    align:"center",
    dataIndex: 'measurementNo'
   },
   {
    title: '测量仪器',
    align:"center",
    dataIndex: 'monitoringInstrument'
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
    title: '计量检定证书编号',
    align:"center",
    dataIndex: 'metrologicalCertificateNo'
   },
   {
    title: '有效期至',
    align:"center",
    dataIndex: 'validUntil'
   },
   {
    title: '检验依据',
    align:"center",
    dataIndex: 'testBasis'
   },
   {
    title: '测量环境温度T,℃',
    align:"center",
    dataIndex: 'detectionTemperature'
   },
   {
    title: '测量环境相对湿度HR，%',
    align:"center",
    dataIndex: 'testHumidity'
   },
   {
    title: '测量结果',
    align:"center",
    dataIndex: 'measurementResult'
   },
   {
    title: '分析人',
    align:"center",
    dataIndex: 'analyst'
   },
   {
    title: '复核人',
    align:"center",
    dataIndex: 'reviewed'
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
      label: "测量地点",
      field: "measurementLocation",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '测量地点',
    field: 'measurementLocation',
    component: 'Input',
  },
  {
    label: '测量日期',
    field: 'measurementDate',
    component: 'Input',
  },
  {
    label: '测量编号',
    field: 'measurementNo',
    component: 'Input',
  },
  {
    label: '测量仪器',
    field: 'monitoringInstrument',
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
    label: '计量检定证书编号',
    field: 'metrologicalCertificateNo',
    component: 'Input',
  },
  {
    label: '有效期至',
    field: 'validUntil',
    component: 'Input',
  },
  {
    label: '检验依据',
    field: 'testBasis',
    component: 'Input',
  },
  {
    label: '测量环境温度T,℃',
    field: 'detectionTemperature',
    component: 'Input',
  },
  {
    label: '测量环境相对湿度HR，%',
    field: 'testHumidity',
    component: 'Input',
  },
  {
    label: '测量结果',
    field: 'measurementResult',
    component: 'Input',
  },
  {
    label: '分析人',
    field: 'analyst',
    component: 'InputNumber',
  },
  {
    label: '复核人',
    field: 'reviewed',
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
export const potentialMeasurementDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '点位描述',
      key: 'pointDescription',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '氡-222比活度（Bq/ m3）',
      key: 'activity',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '氡子体α潜能值（nJm-3）',
      key: 'potentialValue',
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