import { FilmModule } from './film.module';

describe('FilmModule', () => {
  let filmModule: FilmModule;

  beforeEach(() => {
    filmModule = new FilmModule();
  });

  it('should create an instance', () => {
    expect(filmModule).toBeTruthy();
  });
});
