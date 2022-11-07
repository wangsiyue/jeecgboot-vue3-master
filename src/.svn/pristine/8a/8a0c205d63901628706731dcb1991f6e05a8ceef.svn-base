import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '记录描述/检查意见',
    dataIndex: 'content'
   },
   {
    title: '负责人',
    dataIndex: 'principal'
   },
   {
    title: '参与人员',
    dataIndex: 'participants'
   },
   {
    title: '开始时间',
    dataIndex: 'startDate'
   },
   {
    title: '结束时间',
    dataIndex: 'endDate'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '记录描述/检查意见',
    field: 'content',
    component: 'Input'
  },
 {
    label: '负责人',
    field: 'principal',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '记录描述/检查意见',
    field: 'content',
    component: 'Input',
  },
  {
    label: '负责人',
    field: 'principal',
    component: 'Input',
  },
  {
    label: '参与人员',
    field: 'participants',
    component: 'Input',
  },
  {
    label: '开始时间',
    field: 'startDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '结束时间',
    field: 'endDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
];
