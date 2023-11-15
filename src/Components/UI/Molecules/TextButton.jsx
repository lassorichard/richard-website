import { Button } from '../Atoms/Button'
import { Heading1 } from '../Atoms/Heading1'
import { Paragraph } from '../Atoms/Paragraph'
import { PopUpSmall } from '../Atoms/PopUpSmall'

export const TextButton = () => {
  return (
    <section className='text-button container'>
      <Heading1
        extraClass={'text-button__title'}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
      />
      <Paragraph
        extraClass={'text-button__description'}
        text={"If you're looking for a freelance developer to help bring and idea to life and you're on a tight timeline -- let's jam."}
      />
      <div className="text-button__ctas">
        <div>
          <Button
            text={'lasso_1995@hotmail.com'}
            type={'primary'}
          />
        </div>
        <a href="https://wa.link/63rlyp" target="_blank" rel="noopener noreferrer">
          <Button
            text={'text (+57) 3004370304'}
            type={'secondary'}
          />
        </a>
      </div>
      <PopUpSmall text={'Copy to clipboard'} />
    </section>
  )
}
