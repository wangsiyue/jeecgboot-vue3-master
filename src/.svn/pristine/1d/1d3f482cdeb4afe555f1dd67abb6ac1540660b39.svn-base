import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '样品谱名',
    align:"center",
    dataIndex: 'spectrumName'
   },
   {
    title: '样品量（m3）',
    align:"center",
    dataIndex: 'sampleSize'
   },
   {
    title: '样品测时（s）',
    align:"center",
    dataIndex: 'sampleTiming'
   },
   {
    title: '本底谱名',
    align:"center",
    dataIndex: 'backgroundSpectrum'
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
    title: '采样衰变（d）',
    align:"center",
    dataIndex: 'samplingDecay'
   },
   {
    title: '本底测时（s）',
    align:"center",
    dataIndex: 'backgroundChronometry'
   },
   {
    title: '效率刻度',
    align:"center",
    dataIndex: 'efficiencyScale'
   },
   {
    title: '放置衰变（d）',
    align:"center",
    dataIndex: 'placementDecay'
   },
   {
    title: '测量衰变(d)',
    align:"center",
    dataIndex: 'measuringDecay'
   },
   {
    title: '采样起始日期',
    align:"center",
    dataIndex: 'samplingStartDate'
   },
   {
    title: '采样结束时间',
    align:"center",
    dataIndex: 'samplingEndDate'
   },
   {
    title: '测量时间',
    align:"center",
    dataIndex: 'measuringTime'
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
    title: '分析日期',
    align:"center",
    dataIndex: 'analysisDate'
   },
   {
    title: '复核日期',
    align:"center",
    dataIndex: 'reviewDate'
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
      label: "样品谱名",
      field: "spectrumName",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '样品谱名',
    field: 'spectrumName',
    component: 'Input',
  },
  {
    label: '样品量（m3）',
    field: 'sampleSize',
    component: 'Input',
  },
  {
    label: '样品测时（s）',
    field: 'sampleTiming',
    component: 'Input',
  },
  {
    label: '本底谱名',
    field: 'backgroundSpectrum',
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
    label: '采样衰变（d）',
    field: 'samplingDecay',
    component: 'Input',
  },
  {
    label: '本底测时（s）',
    field: 'backgroundChronometry',
    component: 'Input',
  },
  {
    label: '效率刻度',
    field: 'efficiencyScale',
    component: 'Input',
  },
  {
    label: '放置衰变（d）',
    field: 'placementDecay',
    component: 'Input',
  },
  {
    label: '测量衰变(d)',
    field: 'measuringDecay',
    component: 'Input',
  },
  {
    label: '采样起始日期',
    field: 'samplingStartDate',
    component: 'Input',
  },
  {
    label: '采样结束时间',
    field: 'samplingEndDate',
    component: 'Input',
  },
  {
    label: '测量时间',
    field: 'measuringTime',
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
    label: '分析日期',
    field: 'analysisDate',
    component: 'InputNumber',
  },
  {
    label: '复核日期',
    field: 'reviewDate',
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
export const originalSpectrumAnalysisDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '核素',
      key: 'nuclide',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '能量（kev）',
      key: 'energy',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '分支比',
      key: 'branchingRatio',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '探测效率',
      key: 'detectionEfficiency',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '空盒净计数',
      key: 'emptyboxCount',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品总计数',
      key: 'totalSampleCount',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品净计数',
      key: 'netSampleCount',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '误差',
      key: 'error',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '探测下限',
      key: 'lowerDetectionLimit',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品活度',
      key: 'sampleActivity',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量u值(k=2）',
      key: 'measuredValue',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '采样时样品活度',
      key: 'activityDuringSampling',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品u值(k=2)',
      key: 'sampleValue',
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