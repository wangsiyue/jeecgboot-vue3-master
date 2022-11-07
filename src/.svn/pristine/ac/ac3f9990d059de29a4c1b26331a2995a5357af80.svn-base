import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'detailId',
    align:"center",
    dataIndex: 'detailId'
   },
   {
    title: '放射源转让主键',
    align:"center",
    dataIndex: 'transferId'
   },
   {
    title: '业务id',
    align:"center",
    dataIndex: 'ywid'
   },
   {
    title: '业务主键id',
    align:"center",
    dataIndex: 'requeirYwid'
   },
   {
    title: '核素名称',
    align:"center",
    dataIndex: 'nuclide'
   },
   {
    title: '出厂日期',
    align:"center",
    dataIndex: 'leaveFactoryDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '出厂活度',
    align:"center",
    dataIndex: 'leaveFactoryActivity'
   },
   {
    title: '标号',
    align:"center",
    dataIndex: 'tab'
   },
   {
    title: '编码',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '类别',
    align:"center",
    dataIndex: 'category'
   },
   {
    title: '用途',
    align:"center",
    dataIndex: 'useType'
   },
   {
    title: '场所',
    align:"center",
    dataIndex: 'site'
   },
   {
    title: '批量',
    align:"center",
    dataIndex: 'batch'
   },
   {
    title: '活度幂',
    align:"center",
    dataIndex: 'power'
   },
   {
    title: '是否备份',
    align:"center",
    dataIndex: 'beBackup'
   },
   {
    title: '备份更新',
    align:"center",
    dataIndex: 'backUpdate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: '台账类型',
    align:"center",
    dataIndex: 'recordType'
   },
   {
    title: '台账ID',
    align:"center",
    dataIndex: 'recordId'
   },
   {
    title: '详细地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '是否发货（空未发货不为空发货）',
    align:"center",
    dataIndex: 'beReplenishInfo'
   },
   {
    title: '其他用途',
    align:"center",
    dataIndex: 'useTypeOther'
   },
   {
    title: '转入单位备案人',
    align:"center",
    dataIndex: 'inperson'
   },
   {
    title: '转出单位备案人',
    align:"center",
    dataIndex: 'outperson'
   },
   {
    title: '转入单位备案时间',
    align:"center",
    dataIndex: 'indate'
   },
   {
    title: '转出单位备案时间',
    align:"center",
    dataIndex: 'outdate'
   },
   {
    title: '发货日期',
    align:"center",
    dataIndex: 'sendDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '场所编码',
    align:"center",
    dataIndex: 'siteCode'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'detailId',
    field: 'detailId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入detailId!'},
          ];
     },
  },
  {
    label: '放射源转让主键',
    field: 'transferId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射源转让主键!'},
          ];
     },
  },
  {
    label: '业务id',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: '业务主键id',
    field: 'requeirYwid',
    component: 'Input',
  },
  {
    label: '核素名称',
    field: 'nuclide',
    component: 'Input',
  },
  {
    label: '出厂日期',
    field: 'leaveFactoryDate',
    component: 'DatePicker',
  },
  {
    label: '出厂活度',
    field: 'leaveFactoryActivity',
    component: 'InputNumber',
  },
  {
    label: '标号',
    field: 'tab',
    component: 'Input',
  },
  {
    label: '编码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '类别',
    field: 'category',
    component: 'Input',
  },
  {
    label: '用途',
    field: 'useType',
    component: 'Input',
  },
  {
    label: '场所',
    field: 'site',
    component: 'Input',
  },
  {
    label: '批量',
    field: 'batch',
    component: 'InputNumber',
  },
  {
    label: '活度幂',
    field: 'power',
    component: 'InputNumber',
  },
  {
    label: '是否备份',
    field: 'beBackup',
    component: 'InputNumber',
  },
  {
    label: '备份更新',
    field: 'backUpdate',
    component: 'DatePicker',
  },
  {
    label: '状态',
    field: 'status',
    component: 'InputNumber',
  },
  {
    label: '台账类型',
    field: 'recordType',
    component: 'InputNumber',
  },
  {
    label: '台账ID',
    field: 'recordId',
    component: 'Input',
  },
  {
    label: '详细地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '是否发货（空未发货不为空发货）',
    field: 'beReplenishInfo',
    component: 'InputNumber',
  },
  {
    label: '其他用途',
    field: 'useTypeOther',
    component: 'Input',
  },
  {
    label: '转入单位备案人',
    field: 'inperson',
    component: 'Input',
  },
  {
    label: '转出单位备案人',
    field: 'outperson',
    component: 'Input',
  },
  {
    label: '转入单位备案时间',
    field: 'indate',
    component: 'Input',
  },
  {
    label: '转出单位备案时间',
    field: 'outdate',
    component: 'Input',
  },
  {
    label: '发货日期',
    field: 'sendDate',
    component: 'DatePicker',
  },
  {
    label: '场所编码',
    field: 'siteCode',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}