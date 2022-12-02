import Link from 'next/link'

import { useTranslation } from 'react-i18next'
function Nav() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });

    const handleLangChange = (event) => i18n.changeLanguage(event.target.value)
  return (
    <>
     <div>
      <ul>
        <li>
          <Link href='/'>
            <a>{ t('home') }</a>
          </Link>
        </li>
        <li>
          <Link href='about'>
            <a>{ t('about') }</a>
          </Link>
        </li>
        <li>
          <Link href='contact'>
            <a>{ t('contact') }</a>
          </Link>
        </li>
        </ul>
        <div className="pl-10 inline-flex">
                        <select className="p-2" onChange={handleLangChange}>
                            <option value='en' selected>EN</option>
                            <option value='fr'>FR</option>
                        </select>
                    </div>
     </div>
    </>
  )
}

export default Nav 