import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { string } from 'prop-types';

const schema = yup.object({
  name: yup
  .string()
  .label('名前')
  .required('${label}は必須入力です')
  .max(20, '${label}は${max}文字以内で入力してください。'),
  gender: yup
  .string()
  .label('性別')
  .required('${label}は必須入力です。'),
  email: yup
  .string()
  .label('メールアドレス')
  .required('${label}は必須入力です。')
  .email('${label}の形式が不正です。'),
  memo: yup
  .string()
  .label('備考')
  .required('${label}は必須入力です。')
  .min(10, '${label}は${min}文字以上で入力してください')
})

const  FormYup = () => {

  const { register, handleSubmit, formState: { errors }} = useForm({
    // 規定値を準備
     defaultValues: {
      name: 'あいうえお',
      email: 'admin@example.com',
      gender: 'male',
      memo: ''
    },
    resolvers: yupResolver(schema),
  })


  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
        <div>
        <label htmlFor="name">名前</label>
        <input id='name' type="text"
        {...register('name')}
        />
        <div>{errors.name?.message}</div>
        </div>
        <div>
          <label htmlFor="gender">性別</label>
          <label htmlFor="">
          <input type="radio" value="male"
          {...register('gender')}
          />男性
          </label>
          <label htmlFor="gender">
          <input type="radio" value="female"
           {...register('gender')}
          />女性
          </label>
          <div>{errors.gender?.message}</div>
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>

          <input id='email' type="email"
           {...register('email')}
          />
          <div>{errors.email?.message}</div>
        </div>


        <div>
          <label htmlFor="memo">備考</label>
          <textarea name="memo" id="memo"
           {...register('memo')}
          ></textarea>

          <div>{errors.memo?.message}</div>
        </div>
        <button type='submit' >送信</button>
      </form>
    </div>
  )
}

export default  FormYup
