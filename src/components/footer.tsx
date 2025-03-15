export function Footer() {
  return (
    <>
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank">MIT LICENSE</a>
      <span>
        <span>NewsNow © 2024 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
      <span>
        <a href="https://news.beijiu.top/" target="_blank">https://news.beijiu.top/</a>
        <span>Forked By</span>
        <a href="https://github.com/beijiushare" target="_blank">beijiushare</a>
      </span>
    </>
  )
}
