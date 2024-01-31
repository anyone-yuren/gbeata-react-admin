import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export interface DataItem {
  key: number;
  name: string;
  sex: string;
  phone: number;
  birth: string;
  education: string;
  hobby: string;
  forbid: boolean;
  editable: boolean;
}

export const tableData: DataItem[] = [
  {
    key: 1001,
    name: t('张三'),
    sex: t('男'),
    phone: 15266001235,
    birth: '2002-05-06',
    education: t('高中'),
    hobby: t('羽毛球、篮球、听歌、阅读'),
    forbid: false,
    editable: true,
  },
  {
    key: 1002,
    name: t('李四'),
    sex: t('男'),
    phone: 15266006621,
    birth: '1998-09-21',
    education: t('初中'),
    hobby: t('乒乓球、排球、游泳'),
    forbid: true,
    editable: false,
  },
  {
    key: 1003,
    name: t('王五'),
    sex: t('男'),
    phone: 15264848125,
    birth: '1993-06-06',
    education: t('本科'),
    hobby: t('旱冰、滑雪、跳高、打游戏'),
    forbid: false,
    editable: false,
  },
  {
    key: 1004,
    name: t('辛八'),
    sex: t('男'),
    phone: 15248491001,
    birth: '1995-08-03',
    education: t('大专'),
    hobby: t('网球、篮球、跳伞'),
    forbid: true,
    editable: false,
  },
  {
    key: 1005,
    name: t('刘二'),
    sex: t('女'),
    phone: 15248411021,
    birth: '1999-11-05',
    education: t('本科'),
    hobby: t('滑翔、游泳、篮球、看电影'),
    forbid: true,
    editable: false,
  },
  {
    key: 1006,
    name: t('赵七'),
    sex: t('男'),
    phone: 15298621500,
    birth: '2000-07-18',
    education: t('大专'),
    hobby: t('游泳、篮球、潜水'),
    forbid: false,
    editable: false,
  },
  {
    key: 1007,
    name: t('杨一'),
    sex: t('女'),
    phone: 15267499461,
    birth: '1998-12-25',
    education: t('高中'),
    hobby: t('冲浪、上网、看书、打游戏'),
    forbid: false,
    editable: false,
  },
];
