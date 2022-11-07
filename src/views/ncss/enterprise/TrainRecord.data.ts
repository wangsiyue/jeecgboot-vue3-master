import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
   //  {
   //  title: '培训主键',
   //  dataIndex: 'trainId'
   // },
   // {
   //  title: '辐射工作人员主键',
   //  dataIndex: 'workPersonId'
   // },
   {
    title: '辐射安全和防护培训开始时间',
    dataIndex: 'beginTrainDate'
   },
   {
    title: '培训等级',
    dataIndex: 'trainLevel'
   },
   {
    title: '培训性质',
    dataIndex: 'trainNature'
   },
   {
    title: '学时(小时)',
    dataIndex: 'period'
   },
   {
    title: '培训证号',
    dataIndex: 'trainNo'
   },
   {
    title: '培训机构名称',
    dataIndex: 'trainOrg'
   },
   {
    title: '培训内容',
    dataIndex: 'trainContent'
   },
   {
    title: '辐射安全和防护培训结束时间',
    dataIndex: 'endTrainDate'
   },
   // {
   //  title: '业务id',
   //  dataIndex: 'ywid'
   // },
   // {
   //  title: 'REQUEIR_YWID',
   //  dataIndex: 'requeirYwid'
   // },
   {
    title: '培训时间',
    dataIndex: 'traindatetime'
   },
   // {
   //  title: 'IS_DELETE',
   //  dataIndex: 'isDelete'
   // },
   // {
   //  title: 'UPDATETIME',
   //  dataIndex: 'updatetime'
   // },
   // {
   //  title: 'INSERT_STATUS',
   //  dataIndex: 'insertStatus'
   // },
   // {
   //  title: 'PXJGID',
   //  dataIndex: 'pxjgid'
   // },
   // {
   //  title: 'minTrainDate',
   //  dataIndex: 'minTrainDate'
   // },
   // {
   //  title: 'trainDate',
   //  dataIndex: 'trainDate'
   // },
   // {
   //  title: 'maxTrainDate',
   //  dataIndex: 'maxTrainDate'
   // },
   // {
   //  title: 'workCompany',
   //  dataIndex: 'workCompany'
   // },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '培训机构名称',
    field: 'trainOrg',
    component: 'Input'
  },
 {
    label: '辐射工作人员主键',
    field: 'workPersonId',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '培训机构名称',
    field: 'trainOrg',
    component: 'Input',
  },
  // {
  //   label: '辐射工作人员主键',
  //   field: 'workPersonId',
  //   component: 'Input',
  // },
  {
    label: '辐射安全和防护培训开始时间',
    field: 'beginTrainDate',
    component: 'DatePicker'
  },
  {
    label: '培训等级',
    field: 'trainLevel',
    component: 'Input',
  },
  {
    label: '培训性质',
    field: 'trainNature',
    component: 'Input',
  },
  {
    label: '学时(小时)',
    field: 'period',
    component: 'Input',
  },
  {
    label: '培训证号',
    field: 'trainNo',
    component: 'Input',
  },
  {
    label: '培训机构名称',
    field: 'trainOrg',
    component: 'Input',
  },
  {
    label: '培训内容',
    field: 'trainContent',
    component: 'Input',
  },
  {
    label: '辐射安全和防护培训结束时间',
    field: 'endTrainDate',
    component: 'DatePicker'
  },
  // {
  //   label: '业务id',
  //   field: 'ywid',
  //   component: 'Input',
  // },
  // {
  //   label: 'REQUEIR_YWID',
  //   field: 'requeirYwid',
  //   component: 'Input',
  // },
  {
    label: '培训时间',
    field: 'traindatetime',
    component: 'Input',
  },
  // {
  //   label: 'IS_DELETE',
  //   field: 'isDelete',
  //   component: 'InputNumber',
  // },
  // {
  //   label: 'UPDATETIME',
  //   field: 'updatetime',
  //   component: 'DatePicker'
  // },
  // {
  //   label: 'INSERT_STATUS',
  //   field: 'insertStatus',
  //   component: 'Input',
  // },
  // {
  //   label: 'PXJGID',
  //   field: 'pxjgid',
  //   component: 'Input',
  // },
  // {
  //   label: 'minTrainDate',
  //   field: 'minTrainDate',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     valueFormat: 'YYYY-MM-DD hh:mm:ss',
  //   },
  // },
  // {
  //   label: 'trainDate',
  //   field: 'trainDate',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     valueFormat: 'YYYY-MM-DD hh:mm:ss',
  //   },
  // },
  // {
  //   label: 'maxTrainDate',
  //   field: 'maxTrainDate',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     valueFormat: 'YYYY-MM-DD hh:mm:ss',
  //   },
  // },
  // {
  //   label: 'workCompany',
  //   field: 'workCompany',
  //   component: 'Input',
  // },
];
