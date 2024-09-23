import React from 'react'
import { useForm } from 'react-hook-form';

const  FormBasic = () => {
  // 規定値を準備
  const defaultValues = {
    name: 'あいうえお',
    email: 'admin@example.com',
    gender: 'male',
    memo: ''
  };

  // フォームの初期化
  const { register, handleSubmit, formState: {errors}} = useForm({
    defaultValues
  });

  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
        <div>
        <label htmlFor="name">名前</label>
        <input id='name' type="text"
        {...register('name', {
          required: '名前は必須入力です',
          maxLength: {
            value: 20,
            message: '名前は20文字以内にしてください'
          }
        })}
        />
        <div>{errors.name?.message}</div>
        </div>
        <div>
          <label htmlFor="gender">性別</label>
          <label htmlFor="">
          <input type="radio" value="male"
          {...register('male', {
            required: '性別は必須です。'
          })}
          />男性
          </label>
          <label htmlFor="gender">
          <input type="radio" value="female"
          {...register('male', {
            required: '性別は必須です。'
          })}
          />女性
          </label>
          <div>{errors.gender?.message}</div>
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>

          <input id='email' type="email"
          {...register('email', {
            required: 'メールアドレスは必須です。',
            pattern: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
              message: 'メールアドレスは不正です。'
            }
          })}
          />
          <div>{errors.email?.message}</div>
        </div>


        <div>
          <label htmlFor="memo">備考</label>
          <textarea name="memo" id="memo"
          {...register('memo', {
            require: '備考は必須入力です。',
            validate: {
              ng: (value, formValues) => {
                // 不適切なワード
                const ngs = ['暴力', '死', 'グロ'];
                // 入力文字列に不適切ワードが含まれているかを判定
                for(const ng of ngs) {
                  if(value.includes(ng)) {
                    return '備考にNGワードが含まれています。'
                  }
                }
                return true
              }
            },
            minLength: {
              value: 10,
              message: '備考は10文字以上にしてください'
            }
          })}
          ></textarea>

          <div>{errors.memo?.message}</div>
        </div>
        <button type='submit' >送信</button>
      </form>
    </div>
  )
}

export default  FormBasic
