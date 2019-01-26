// Code snippets
export const PARALLAX_CODE = `
<div>
  <div className='white'>
    <h1 className='page-title'>{t('title')}</h1>
  </div>
  <div className='parallax-container'>
    <div className='parallax'>
      <img className='parallax-img' src={require('./assets/images/parallax1.jpg')} alt='parallax-img' />
    </div>
  </div>
  <div className='section white'>
    <div className='row container'>
      <h2 className={styles['parallax-header']}>Parallax</h2>
      <p className='grey-text text-darken-3'>{t('description')}</p>
    </div>
    <div className='row container'>
      <h4 className='light'>Parallax Demo Code</h4>
      <PrismCodes language='language-tsx'>
        {PARALLAX_CODE}
      </PrismCodes>
    </div>
  </div>
  <div className='parallax-container'>
    <div className='parallax'>
      <img className='parallax-img' src={require('./assets/images/parallax2.jpg')} alt='parallax-img' />
    </div>
  </div>
</div>
`;
