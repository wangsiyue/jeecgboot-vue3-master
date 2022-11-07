import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '射线装置台帐主键',
    align:"center",
    dataIndex: 'recordId'
   },
   {
    title: '许可证申请单位主键',
    align:"center",
    dataIndex: 'companyId'
   },
   {
    title: '装置名称',
    align:"center",
    dataIndex: 'setName'
   },
   {
    title: '规格型号',
    align:"center",
    dataIndex: 'specAndModel'
   },
   {
    title: '射线装置类别 值内容：Ⅰ类 Ⅱ类 Ⅲ类',
    align:"center",
    dataIndex: 'setType'
   },
   {
    title: '射线装置用途 ',
    align:"center",
    dataIndex: 'useType'
   },
   {
    title: '电压',
    align:"center",
    dataIndex: 'voltage'
   },
   {
    title: '电流',
    align:"center",
    dataIndex: 'amperemeter'
   },
   {
    title: '功率',
    align:"center",
    dataIndex: 'powerString'
   },
   {
    title: '场所',
    align:"center",
    dataIndex: 'site'
   },
   {
    title: '来源',
    align:"center",
    dataIndex: 'source'
   },
   {
    title: '来源审核人',
    align:"center",
    dataIndex: 'srcAuditperson'
   },
   {
    title: '来源审核日期',
    align:"center",
    dataIndex: 'srcAuditdate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '去向',
    align:"center",
    dataIndex: 'destination'
   },
   {
    title: '去向审核人',
    align:"center",
    dataIndex: 'destAuditperson'
   },
   {
    title: '去向审核日期',
    align:"center",
    dataIndex: 'destAuditdate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '是否历史',
    align:"center",
    dataIndex: 'beHistory'
   },
   {
    title: '粒子能量',
    align:"center",
    dataIndex: 'particleEnergy'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '用户类型',
    align:"center",
    dataIndex: 'userType'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: '添加用户',
    align:"center",
    dataIndex: 'insertUser'
   },
   {
    title: '添加时间',
    align:"center",
    dataIndex: 'insertDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '其它用途',
    align:"center",
    dataIndex: 'useTypeOther'
   },
   {
    title: '详细场所',
    align:"center",
    dataIndex: 'siteDetail'
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
    title: '装置名称详细',
    align:"center",
    dataIndex: 'setNameInfo'
   },
   {
    title: '场所编码',
    align:"center",
    dataIndex: 'siteCode'
   },
   {
    title: '标志',
    align:"center",
    dataIndex: 'flag'
   },
   {
    title: 'IS_DELETE',
    align:"center",
    dataIndex: 'isDelete'
   },
   {
    title: 'UPDATETIME',
    align:"center",
    dataIndex: 'updatetime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'AMENDED_PATTERN',
    align:"center",
    dataIndex: 'amendedPattern'
   },
   {
    title: 'UNIT_SOURCE_ID',
    align:"center",
    dataIndex: 'unitSourceId'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'createtime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '射线装置台帐主键',
    field: 'recordId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入射线装置台帐主键!'},
          ];
     },
  },
  {
    label: '许可证申请单位主键',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: '装置名称',
    field: 'setName',
    component: 'Input',
  },
  {
    label: '规格型号',
    field: 'specAndModel',
    component: 'Input',
  },
  {
    label: '射线装置类别 值内容：Ⅰ类 Ⅱ类 Ⅲ类',
    field: 'setType',
    component: 'Input',
  },
  {
    label: '射线装置用途 ',
    field: 'useType',
    component: 'Input',
  },
  {
    label: '电压',
    field: 'voltage',
    component: 'Input',
  },
  {
    label: '电流',
    field: 'amperemeter',
    component: 'Input',
  },
  {
    label: '功率',
    field: 'powerString',
    component: 'Input',
  },
  {
    label: '场所',
    field: 'site',
    component: 'Input',
  },
  {
    label: '来源',
    field: 'source',
    component: 'Input',
  },
  {
    label: '来源审核人',
    field: 'srcAuditperson',
    component: 'Input',
  },
  {
    label: '来源审核日期',
    field: 'srcAuditdate',
    component: 'DatePicker',
  },
  {
    label: '去向',
    field: 'destination',
    component: 'Input',
  },
  {
    label: '去向审核人',
    field: 'destAuditperson',
    component: 'Input',
  },
  {
    label: '去向审核日期',
    field: 'destAuditdate',
    component: 'DatePicker',
  },
  {
    label: '是否历史',
    field: 'beHistory',
    component: 'InputNumber',
  },
  {
    label: '粒子能量',
    field: 'particleEnergy',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '用户类型',
    field: 'userType',
    component: 'InputNumber',
  },
  {
    label: '状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '添加用户',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '添加时间',
    field: 'insertDate',
    component: 'DatePicker',
  },
  {
    label: '其它用途',
    field: 'useTypeOther',
    component: 'Input',
  },
  {
    label: '详细场所',
    field: 'siteDetail',
    component: 'Input',
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
    label: '装置名称详细',
    field: 'setNameInfo',
    component: 'Input',
  },
  {
    label: '场所编码',
    field: 'siteCode',
    component: 'Input',
  },
  {
    label: '标志',
    field: 'flag',
    component: 'Input',
  },
  {
    label: 'IS_DELETE',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: 'UPDATETIME',
    field: 'updatetime',
    component: 'DatePicker',
  },
  {
    label: 'AMENDED_PATTERN',
    field: 'amendedPattern',
    component: 'Input',
  },
  {
    label: 'UNIT_SOURCE_ID',
    field: 'unitSourceId',
    component: 'Input',
  },
  {
    label: '创建时间',
    field: 'createtime',
    component: 'DatePicker',
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