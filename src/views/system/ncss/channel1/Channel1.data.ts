import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '采样时间',
    dataIndex: 'recdtime'
   },
   {
    title: '平均值',
    dataIndex: 'recdavg'
   },
   {
    title: '最小值',
    dataIndex: 'recdmin'
   },
   {
    title: '最大值',
    dataIndex: 'recdmax'
   },
   {
    title: 'recdstdev',
    dataIndex: 'recdstdev'
   },
   {
    title: 'recdfreq',
    dataIndex: 'recdfreq'
   },
   {
    title: 'recdrefr',
    dataIndex: 'recdrefr'
   },
   {
    title: 'recddata',
    dataIndex: 'recddata'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '采样时间',
    field: 'recdtime',
    component: 'TimePicker'
  },
 {
    label: '平均值',
    field: 'recdavg',
    component: 'InputNumber'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '采样时间',
    field: 'recdtime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '平均值',
    field: 'recdavg',
    component: 'InputNumber',
  },
  {
    label: '最小值',
    field: 'recdmin',
    component: 'InputNumber',
  },
  {
    label: '最大值',
    field: 'recdmax',
    component: 'InputNumber',
  },
  {
    label: 'recdstdev',
    field: 'recdstdev',
    component: 'InputNumber',
  },
  {
    label: 'recdfreq',
    field: 'recdfreq',
    component: 'InputNumber',
  },
  {
    label: 'recdrefr',
    field: 'recdrefr',
    component: 'InputNumber',
  },
  {
    label: 'recddata',
    field: 'recddata',
    component: 'Input',
  },
];
