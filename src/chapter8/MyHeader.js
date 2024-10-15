import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useMatches } from 'react-router-dom'

const MyHeader = () => {
  let {
    title = 'React入門',
    keywords = 'React,js入門',
    description = '説明555'
  } = useMatches().at(-1).handle ?? {};
  // propsの値をプレイスホルダーに反映
  title = title.replace('%s', title)
  keywords = keywords.replace('%s', keywords)
  description = description.replace('%s', description)
  return (
    // head要素に埋め込む準備
    <Helmet>
      <title>{title}</title>
      <meta name={keywords} content={keywords} />
      <meta name={description} content={description}/>
    </Helmet>
  )
}

export default MyHeader
