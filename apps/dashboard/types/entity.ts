import type { BasicStatus, PermissionType } from './enum';

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  password?: string;
  avatar?: string;
  role?: Role;
  status?: BasicStatus;
  permissions?: Permission[];
}

export interface UserToken {
  accessToken?: string;
  refreshToken?: string;
  token?: string;
}

export interface Permission {
  id: string;
  parentId: string;
  name: string;
  label: string;
  type: PermissionType;
  route: string;
  status?: BasicStatus;
  order?: number;
  icon?: string;
  component?: string;
  hide?: boolean;
  frameSrc?: string;
  newFeature?: boolean;
  children?: Permission[];
}

export interface Role {
  id: string;
  name: string;
  label: string;
  status: BasicStatus;
  order?: number;
  desc?: string;
  permission?: Permission[];
}

export type WarehouseTreeList = {
  warehouseCode: string;
  warehouseName: string;
  warehouseInfoList: WarehouseTreeList[];
};
export type UserPermission = {
  id: string;
  roleId: string;
  roleName: string;
  isAdmin: boolean;
  userName: string;
  avator: string;
  realName: string;
  userSex: string;
  userSexDisplay: string;
  birthday: string;
  createName?: string;
  createTime?: string;
  orgCode?: string;
  warehouseInfoList: any[];
  warehouseTreeList: WarehouseTreeList[];
  permission: string[];
};

export type PageListParams<T = any, Q = Record<string, any>> = {
  pageIndex: number;
  pageSize: number;
  sortFieldList?: T[];
  query?: Q;
};

type DefaultQueryType = Record<string, any>[];

type IfDefined<T, TrueType, FalseType> = [T] extends [DefaultQueryType] ? TrueType : FalseType;

export type PageListResult<T = any, Q = DefaultQueryType> = {
  success: boolean;
  message: string;
  resultData: IfDefined<
    Q,
    Q,
    {
      pageSize: number;
      pageIndex: number;
      totalCount: number;
      pageData: T[];
    }
  >;
  statusCode: number;
};

export type SingleResult<T> = {
  success: boolean;
  message: string;
  resultData: T;
  statusCode: number;
};