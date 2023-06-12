import Localization from "./";
import { plainToClass } from "class-transformer";

const loadLocalization = (): Localization[] => {
  return plainToClass(Localization, [
    {
      key:"user:users.user-lists",
      english:'user lists',
      arabic:'.قوائم المستخدمين',
      russian:'список пользователей'
    },
    {
      key:"user:users.user-first-name",
      english:'user first name',
      arabic:'اسم المستخدم الأول',
      russian:'имя пользователя'
    },

    {
      key:"user:users.user-last-name",
      english:'user last name',
      arabic:'اسم المستخدم الأخير',
      russian:'фамилия пользователя'
    },

    {
      key:"user:users.user-login",
      english:'user login',
      arabic:'دخول المستخدم',
      russian:'логин пользователя'
    },

    {
      key:"user:users.user-add-product",
      english:'orders list',
      arabic:'قائمة الأوامر',
      russian:'упорядоченный список'
    },
    {
      key:"user:users.user-coupon-list",
      english:'coupon list',
      arabic:'قائمة القسائم',
      russian:'список купонов'
    },
    {
      key:"user:users.user-new-password",
      english:'user new password',
      arabic:'.مستخدم جديد كلمة مرور',
      russian:'пользователя новый пароль'
    }
  ]);
};

export default loadLocalization;
