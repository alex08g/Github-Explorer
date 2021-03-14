export function RepositoryItem(props) {
  return (
    <li className="repositories__list__item">
      <strong className="repositories__list__title">{props.repository.name}</strong>
      <p className="repositories__list__description">{props.repository.description}</p>

      <a className="repositories__list__link" href={props.repository.html_url}>
        {props.repository.html_url}
      </a>
    </li>
  )
}