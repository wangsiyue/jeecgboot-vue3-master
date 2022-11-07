import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '批准文号',
    align:"center",
    dataIndex: 'passNo'
   },
   {
    title: '进口单位名称',
    align:"center",
    dataIndex: 'importcompanyName'
   },
   {
    title: '进口单位许可证',
    align:"center",
    dataIndex: 'importcompanyLicenseno'
   },
   {
    title: '使用单位名称',
    align:"center",
    dataIndex: 'usecompanyName'
   },
   {
    title: '出口国家',
    align:"center",
    dataIndex: 'nuclideExportcountry'
   },
   {
    title: '产源国家',
    align:"center",
    dataIndex: 'nuclideProduceCountry'
   },
   {
    title: '产源单位名称',
    align:"center",
    dataIndex: 'nuclideManufacture'
   },
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus'
   },
   {
    title: '新增时间',
    align:"center",
    dataIndex: 'insertDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '审批不通过理由',
    align:"center",
    dataIndex: 'notPassReason'
   },
   {
    title: '货物编码',
    align:"center",
    dataIndex: 'goodsCode'
   },
   {
    title: '撤销状态',
    align:"center",
    dataIndex: 'revokeDeclare'
   },
   {
    title: '进口单位是否备案',
    align:"center",
    dataIndex: 'importIsRecord'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "批准文号",
      field: 'passNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "进口单位名称",
      field: 'importcompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "进口单位许可证",
      field: 'importcompanyLicenseno',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "使用单位名称",
      field: 'usecompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '放射源进口审批主键',
    field: 'importId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射源进口审批主键!'},
          ];
     },
  },
  {
    label: '申请编号',
    field: 'requestNo',
    component: 'Input',
  },
  {
    label: '受理编号',
    field: 'responseNo',
    component: 'Input',
  },
  {
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '进口单位名称',
    field: 'importcompanyName',
    component: 'Input',
  },
  {
    label: '进口单位许可证',
    field: 'importcompanyLicenseno',
    component: 'Input',
  },
  {
    label: '进口单位通讯地址',
    field: 'importcompanyContactaddr',
    component: 'Input',
  },
  {
    label: '进口单位经办人',
    field: 'importcompanyDoperson',
    component: 'Input',
  },
  {
    label: '进口单位电话传真',
    field: 'importcompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '进口单位邮编',
    field: 'importcompanyPost',
    component: 'Input',
  },
  {
    label: '使用单位名称',
    field: 'usecompanyName',
    component: 'Input',
  },
  {
    label: '使用单位许可证',
    field: 'usecompanyLicenseno',
    component: 'Input',
  },
  {
    label: '使用单位通讯地址',
    field: 'usecpmpanyContactaddr',
    component: 'Input',
  },
  {
    label: '使用单位邮编',
    field: 'usecompanyPost',
    component: 'Input',
  },
  {
    label: '使用单位经办人',
    field: 'usecompanyDoperson',
    component: 'Input',
  },
  {
    label: '使用单位电话传真',
    field: 'usecompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '出口国家',
    field: 'nuclideExportcountry',
    component: 'Input',
  },
  {
    label: '产源国家',
    field: 'nuclideProduceCountry',
    component: 'Input',
  },
  {
    label: '产源单位名称',
    field: 'nuclideManufacture',
    component: 'Input',
  },
  {
    label: '进口理由',
    field: 'importReason',
    component: 'InputNumber',
  },
  {
    label: '进口其他理由',
    field: 'importReasonOthers',
    component: 'Input',
  },
  {
    label: '附件',
    field: 'attachment',
    component: 'Input',
  },
  {
    label: '附件其他',
    field: 'attachmentOthers',
    component: 'Input',
  },
  {
    label: '受理状态',
    field: 'responseStatus',
    component: 'InputNumber',
  },
  {
    label: '新增人',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '新增时间',
    field: 'insertDate',
    component: 'DatePicker',
  },
  {
    label: '修改人',
    field: 'modifyUser',
    component: 'Input',
  },
  {
    label: '修改时间',
    field: 'modifyDate',
    component: 'DatePicker',
  },
  {
    label: '审批不通过理由',
    field: 'notPassReason',
    component: 'Input',
  },
  {
    label: '审批时间',
    field: 'doDate',
    component: 'DatePicker',
  },
  {
    label: '需求来源',
    field: 'requestSource',
    component: 'Input',
  },
  {
    label: '需求来源ID',
    field: 'requestSourceId',
    component: 'Input',
  },
  {
    label: '审批人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '审批是否通过',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '退回理由',
    field: 'retreatReason',
    component: 'Input',
  },
  {
    label: '货物编码',
    field: 'goodsCode',
    component: 'Input',
  },
  {
    label: '用户ID',
    field: 'userId',
    component: 'Input',
  },
  {
    label: '撤销状态',
    field: 'revokeDeclare',
    component: 'Input',
  },
  {
    label: '撤销理由',
    field: 'revokeReason',
    component: 'Input',
  },
  {
    label: '进口单位 instanceid',
    field: 'importCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '用户单位 instanceid',
    field: 'useCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '业务id',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: '进口单位是否备案',
    field: 'importIsRecord',
    component: 'Input',
  },
  {
    label: '进口单位区域编码',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '用户单位区域编码',
    field: 'regionCode2',
    component: 'Input',
  },
  {
    label: '老数据标识',
    field: 'oldMark',
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
    label: 'DISAGREE_REASON',
    field: 'disagreeReason',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_2',
    field: 'permissionCode2',
    component: 'Input',
  },
  {
    label: 'acceptDate',
    field: 'acceptDate',
    component: 'DatePicker',
  },
  {
    label: 'receiveDate',
    field: 'receiveDate',
    component: 'DatePicker',
  },
  {
    label: 'flowInstanceid',
    field: 'flowInstanceid',
    component: 'Input',
  },
  {
    label: 'responseStatusImport',
    field: 'responseStatusImport',
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