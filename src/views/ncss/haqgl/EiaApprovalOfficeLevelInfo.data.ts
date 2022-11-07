import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '项目类别',
    align:"center",
    dataIndex: 'fprojectcategory'
   },
   {
    title: '污染源名称',
    align:"center",
    dataIndex: 'fpollutionname'
   },
   {
    title: '污染源地址',
    align:"center",
    dataIndex: 'fpollutionaddress'
   },
   {
    title: '环评审批机关',
    align:"center",
    dataIndex: 'feiaapproveorgan'
   },
   {
    title: '是否已建好',
    align:"center",
    dataIndex: 'fisbuilt'
   },
   {
    title: '污染源法人代表',
    align:"center",
    dataIndex: 'fpollutionlegal'
   },
   {
    title: '建设单位联系电话',
    align:"center",
    dataIndex: 'fconstructorenterphone'
   },
   {
    title: '所属区县',
    align:"center",
    dataIndex: 'fbelongcounty'
   },
   {
    title: '分布调整',
    align:"center",
    dataIndex: 'fdistributionadjust'
   },
   {
    title: '批复意见',
    align:"center",
    dataIndex: 'freplyopinion'
   },
   {
    title: '同步人',
    align:"center",
    dataIndex: 'fsynchro'
   },
   {
    title: '同步单位',
    align:"center",
    dataIndex: 'fsynchroenter'
   },
   {
    title: '评价单位',
    align:"center",
    dataIndex: 'fevaluationenter'
   },
   {
    title: '建设性质',
    align:"center",
    dataIndex: 'fbuildnature'
   },
   {
    title: '建设地点',
    align:"center",
    dataIndex: 'fbuildaddress'
   },
   {
    title: '国民经济行业类型',
    align:"center",
    dataIndex: 'fnationaleconomytype'
   },
   {
    title: '修改时间',
    align:"center",
    dataIndex: 'fmodifydate'
   },
   {
    title: '国民经济行业类型代码',
    align:"center",
    dataIndex: 'fnationaleconomytypecode'
   },
   {
    title: '建设内容预估码',
    align:"center",
    dataIndex: 'fbuildcontentpredict'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'fstatus'
   },
   {
    title: '建设单位联系人',
    align:"center",
    dataIndex: 'fbuildentercontact'
   },
   {
    title: '建设单位',
    align:"center",
    dataIndex: 'fbuildenter'
   },
   {
    title: '法人联系电话',
    align:"center",
    dataIndex: 'flegalphone'
   },
   {
    title: '工艺流程',
    align:"center",
    dataIndex: 'ftechnologicalprocess'
   },
   {
    title: '所属地市',
    align:"center",
    dataIndex: 'flocalcity'
   },
   {
    title: '坐标经度',
    align:"center",
    dataIndex: 'fcoordinatelongitude'
   },
   {
    title: '统一社会信用代码',
    align:"center",
    dataIndex: 'funifiedsocial'
   },
   {
    title: '项目编号',
    align:"center",
    dataIndex: 'fprojectno'
   },
   {
    title: '污染源编号',
    align:"center",
    dataIndex: 'fpollutionno'
   },
   {
    title: '设施建设情况',
    align:"center",
    dataIndex: 'ffacilityconstruction'
   },
   {
    title: '行业类型名称',
    align:"center",
    dataIndex: 'findustrytypename'
   },
   {
    title: '收录时间',
    align:"center",
    dataIndex: 'fcollectiontime'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'fremark'
   },
   {
    title: '环评场所',
    align:"center",
    dataIndex: 'feiasite'
   },
   {
    title: '坐标纬度',
    align:"center",
    dataIndex: 'fcoordinatelatitude'
   },
   {
    title: '采集时间',
    align:"center",
    dataIndex: 'facquisitiontime'
   },
   {
    title: '总投资',
    align:"center",
    dataIndex: 'ftotalinvestment'
   },
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'fprojectname'
   },
   {
    title: '批复文号',
    align:"center",
    dataIndex: 'fapprovalno'
   },
   {
    title: '批复时间',
    align:"center",
    dataIndex: 'fapprovaldate'
   },
   {
    title: '审核状态',
    align:"center",
    dataIndex: 'fauditstatus'
   },
   {
    title: '法人代表',
    align:"center",
    dataIndex: 'flegal'
   },
   {
    title: '组织机构代码',
    align:"center",
    dataIndex: 'forgcode'
   },
   {
    title: '序号',
    align:"center",
    dataIndex: 'fserialnumber'
   },
   {
    title: '法人身份证号码',
    align:"center",
    dataIndex: 'flegalidcard'
   },
   {
    title: '环评文件类别',
    align:"center",
    dataIndex: 'fcategoryofeiadocuments'
   },
   {
    title: '行业类型代码',
    align:"center",
    dataIndex: 'findustrytype'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "污染源名称",
      field: 'fpollutionname',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "环评审批机关",
      field: 'feiaapproveorgan',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '项目类别',
    field: 'fprojectcategory',
    component: 'Input',
  },
  {
    label: '污染源名称',
    field: 'fpollutionname',
    component: 'Input',
  },
  {
    label: '污染源地址',
    field: 'fpollutionaddress',
    component: 'Input',
  },
  {
    label: '环评审批机关',
    field: 'feiaapproveorgan',
    component: 'Input',
  },
  {
    label: '是否已建好',
    field: 'fisbuilt',
    component: 'Input',
  },
  {
    label: '污染源法人代表',
    field: 'fpollutionlegal',
    component: 'Input',
  },
  {
    label: '建设单位联系电话',
    field: 'fconstructorenterphone',
    component: 'Input',
  },
  {
    label: '所属区县',
    field: 'fbelongcounty',
    component: 'Input',
  },
  {
    label: '分布调整',
    field: 'fdistributionadjust',
    component: 'Input',
  },
  {
    label: '批复意见',
    field: 'freplyopinion',
    component: 'Input',
  },
  {
    label: '同步人',
    field: 'fsynchro',
    component: 'Input',
  },
  {
    label: '同步单位',
    field: 'fsynchroenter',
    component: 'Input',
  },
  {
    label: '评价单位',
    field: 'fevaluationenter',
    component: 'Input',
  },
  {
    label: '建设性质',
    field: 'fbuildnature',
    component: 'Input',
  },
  {
    label: '建设地点',
    field: 'fbuildaddress',
    component: 'Input',
  },
  {
    label: '国民经济行业类型',
    field: 'fnationaleconomytype',
    component: 'Input',
  },
  {
    label: '修改时间',
    field: 'fmodifydate',
    component: 'Input',
  },
  {
    label: '国民经济行业类型代码',
    field: 'fnationaleconomytypecode',
    component: 'Input',
  },
  {
    label: '建设内容预估码',
    field: 'fbuildcontentpredict',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'fstatus',
    component: 'Input',
  },
  {
    label: '建设单位联系人',
    field: 'fbuildentercontact',
    component: 'Input',
  },
  {
    label: '建设单位',
    field: 'fbuildenter',
    component: 'Input',
  },
  {
    label: '法人联系电话',
    field: 'flegalphone',
    component: 'Input',
  },
  {
    label: '工艺流程',
    field: 'ftechnologicalprocess',
    component: 'Input',
  },
  {
    label: '所属地市',
    field: 'flocalcity',
    component: 'Input',
  },
  {
    label: '坐标经度',
    field: 'fcoordinatelongitude',
    component: 'Input',
  },
  {
    label: '统一社会信用代码',
    field: 'funifiedsocial',
    component: 'Input',
  },
  {
    label: '项目编号',
    field: 'fprojectno',
    component: 'Input',
  },
  {
    label: '污染源编号',
    field: 'fpollutionno',
    component: 'Input',
  },
  {
    label: '设施建设情况',
    field: 'ffacilityconstruction',
    component: 'Input',
  },
  {
    label: '行业类型名称',
    field: 'findustrytypename',
    component: 'Input',
  },
  {
    label: '收录时间',
    field: 'fcollectiontime',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'fremark',
    component: 'Input',
  },
  {
    label: '环评场所',
    field: 'feiasite',
    component: 'Input',
  },
  {
    label: '坐标纬度',
    field: 'fcoordinatelatitude',
    component: 'Input',
  },
  {
    label: '采集时间',
    field: 'facquisitiontime',
    component: 'Input',
  },
  {
    label: '总投资',
    field: 'ftotalinvestment',
    component: 'Input',
  },
  {
    label: '项目名称',
    field: 'fprojectname',
    component: 'Input',
  },
  {
    label: '批复文号',
    field: 'fapprovalno',
    component: 'Input',
  },
  {
    label: '批复时间',
    field: 'fapprovaldate',
    component: 'Input',
  },
  {
    label: '审核状态',
    field: 'fauditstatus',
    component: 'Input',
  },
  {
    label: '法人代表',
    field: 'flegal',
    component: 'Input',
  },
  {
    label: '组织机构代码',
    field: 'forgcode',
    component: 'Input',
  },
  {
    label: '序号',
    field: 'fserialnumber',
    component: 'Input',
  },
  {
    label: '法人身份证号码',
    field: 'flegalidcard',
    component: 'Input',
  },
  {
    label: '环评文件类别',
    field: 'fcategoryofeiadocuments',
    component: 'Input',
  },
  {
    label: '行业类型代码',
    field: 'findustrytype',
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