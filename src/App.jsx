import { BarNavegation } from './components/BarNavegation'
import { HomeComponent } from './routes/HomeComponent'
import { ProjectsComponent } from './routes/ProjectsComponent'
import { ContactComponent } from './routes/ContactComponent'
import { Element } from 'react-scroll';

export const App = () => {
  return (
  <>
    <BarNavegation />

    <Element name='home'>
      <HomeComponent />
    </Element>

    <Element name='projects'>
      <ProjectsComponent />
    </Element>

    <Element name='contact'>
      <ContactComponent />
    </Element>
  </>
  )
}
