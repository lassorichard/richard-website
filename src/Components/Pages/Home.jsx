import { Hero } from "../UI/Organisms/Hero";
import { Button } from "../UI/Atoms/Button";

export const Home = () => {
  return (
    <>
      <Hero />
      <a href="https://google.com">
          <Button
            text={'Budget Project'}
            type={'primary'}
          />
        </a>
    </>
  )
}
