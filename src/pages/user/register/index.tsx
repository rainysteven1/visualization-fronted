/*
 * @Author: Rainy
 * @Email: rainysteven1@gmail.com
 * @Date: 2022-09-19 21:54:44
 * @FilePath: /visualization-fronted/src/pages/user/register/index.tsx
 * @Description:
 */
import type { FC } from 'react';
import { useState } from 'react';
import {
  Alert,
  Form,
  Button,
  Col,
  Input,
  Popover,
  Progress,
  Row,
  Select,
  message,
  Tabs,
} from 'antd';
import type { Store } from 'antd/es/form/interface';
import { ProForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, FormattedMessage, Link, useRequest, history, SelectLang } from 'umi';
import type { StateType } from './service';
import { fakeRegister } from './service';

require('antd/lib/config-provider/style');
require('./style.less');

const RegisterMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const RegisterForm: FC = () => {
  const title = '代码依赖可视化系统';
  const baseClassName = 'register-form';
  const getCls = (className: string) => `${baseClassName}-${className}`;
  return (
    <div>
      <div className={getCls('container')}>
        <div className={getCls('top')}>
          <div className={getCls('header')}>
            <span className={getCls('logo')}>
              <img alt="logo" src="/logo.svg" />
            </span>
            <span className={getCls('title')}>{title}</span>
          </div>
        </div>
        <div className={getCls('main')}>
          <ProForm />
        </div>
      </div>
    </div>
  );
};

const Register: FC = () => {
  const baseClassName = 'register-page';
  const getCls = (className: string) => `${baseClassName}-${className}`;
  return (
    <div className={getCls('container')}>
      <div className={getCls('lang')} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={getCls('content')}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default Register;
